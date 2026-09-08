import React, { useState, useEffect } from "react";
import {
  Shield,
  KeyRound,
  Eye,
  EyeOff,
  Search,
  Filter,
  Download,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  RefreshCw,
  AlertCircle,
  FileSpreadsheet,
  Layers,
  ChevronDown
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  businessName?: string;
  city?: string;
  service?: string;
  budget?: string;
  message?: string;
  createdAt: string;
  status: "new" | "contacted" | "converted" | "closed";
}

interface LeadsSectionProps {
  onNavigateToContact: () => void;
}

export const LeadsSection: React.FC<LeadsSectionProps> = ({ onNavigateToContact }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("hendii_admin_token");
  });

  const [pinInput, setPinInput] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) {
      setAuthError("Please enter your admin passcode.");
      return;
    }

    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await fetch("/api/admin/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinInput }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Invalid Passcode.");
      }

      localStorage.setItem("hendii_admin_token", data.token);
      setIsAuthenticated(true);
      fetchLeads(data.token);
    } catch (err: any) {
      setAuthError(err.message || "Authentication failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("hendii_admin_token");
    setIsAuthenticated(false);
    setPinInput("");
    setLeads([]);
  };

  const fetchLeads = async (tokenOverride?: string) => {
    const token = tokenOverride || localStorage.getItem("hendii_admin_token");
    if (!token) return;

    setLoadingLeads(true);
    try {
      const res = await fetch("/api/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads from API:", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleUpdateStatus = async (id: string, newStatus: Lead["status"]) => {
    const token = localStorage.getItem("hendii_admin_token");
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setLeads((prev) =>
          prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
        );
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this client inquiry?")) return;

    const token = localStorage.getItem("hendii_admin_token");
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setLeads((prev) => prev.filter((lead) => lead.id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;

    const headers = ["ID", "Name", "Phone", "Email", "Business", "City", "Service", "Budget", "Date", "Status", "Message"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name || ""}"`,
      `"${l.phone || ""}"`,
      `"${l.email || ""}"`,
      `"${l.businessName || ""}"`,
      `"${l.city || ""}"`,
      `"${l.service || ""}"`,
      `"${l.budget || ""}"`,
      `"${new Date(l.createdAt).toLocaleDateString("en-IN")}"`,
      l.status,
      `"${(l.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `hendii_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.phone || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.city || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.businessName || "").toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-12 px-4">
        <div className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-8 space-y-6 text-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00] mx-auto">
            <Shield className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#F8FAFC]">Private Admin Portal</h2>
            <p className="text-xs text-[#94A3B8]">
              Client inquiries and contact entries are protected. Enter your master administrator passcode to view the database.
            </p>
          </div>

          <form onSubmit={handleVerifyPin} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label htmlFor="admin_passcode_input" className="text-xs font-mono text-[#CBD5E1] flex items-center justify-between">
                <span>Enter Admin Master Passcode</span>
                <span className="text-[10px] text-[#94A3B8]">Confidential</span>
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="admin_passcode_input"
                  type={showPin ? "text" : "password"}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter your private passcode"
                  className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl pl-10 pr-10 py-3 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition font-mono"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  aria-label={showPin ? "Hide passcode" : "Show passcode"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CBD5E1] hover:text-white cursor-pointer"
                  title={showPin ? "Hide passcode" : "Show passcode"}
                >
                  {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <p className="text-xs text-[#EF4444] bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-xl p-3 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </p>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3.5 rounded-xl bg-[#B7FF00] hover:bg-[#a6e600] disabled:opacity-50 text-black font-extrabold text-xs font-mono tracking-wider uppercase transition cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-[#B7FF00]/10"
            >
              <span>{authLoading ? "VERIFYING..." : "UNLOCK INQUIRIES DATABASE"}</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0D1117] border border-[#1E2736] rounded-3xl p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#B7FF00]/10 border border-[#B7FF00]/30 flex items-center justify-center text-[#B7FF00]">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#F8FAFC]">Client Inquiries Database</h1>
            <p className="text-xs font-mono text-[#94A3B8]">
              {leads.length} total entries recorded
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => fetchLeads()}
            disabled={loadingLeads}
            className="px-3.5 py-2 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#B7FF00] text-xs font-mono text-[#CBD5E1] flex items-center space-x-1.5 transition cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingLeads ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleExportCSV}
            disabled={leads.length === 0}
            className="px-3.5 py-2 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#38BDF8] text-xs font-mono text-[#CBD5E1] flex items-center space-x-1.5 transition cursor-pointer disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono hover:bg-[#EF4444] hover:text-white transition cursor-pointer"
          >
            Lock / Logout
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 bg-[#0D1117] border border-[#1E2736] rounded-2xl p-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, phone number, city, or business..."
            className="w-full bg-[#11161D] border border-[#1E2736] focus:border-[#B7FF00] rounded-xl pl-10 pr-4 py-2 text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none transition"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-[#94A3B8]" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#11161D] border border-[#1E2736] rounded-xl px-3 py-2 text-xs text-[#F8FAFC] focus:outline-none transition"
          >
            <option value="all">All Statuses</option>
            <option value="new">New (Uncontacted)</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted (Client)</option>
            <option value="closed">Closed / Inactive</option>
          </select>
        </div>
      </div>

      {/* Leads Table / Cards */}
      {filteredLeads.length === 0 ? (
        <div className="bg-[#0D1117] border border-[#1E2736] rounded-3xl p-12 text-center space-y-3">
          <p className="text-sm font-semibold text-[#F8FAFC]">No inquiries found</p>
          <p className="text-xs text-[#94A3B8]">
            {searchQuery ? "Try clearing your search query." : "New client inquiries submitted on the contact form will appear here automatically."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLeads.map((lead) => {
            const waUrl = `https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              `Hi ${lead.name}, this is Hendii. I received your inquiry regarding ${lead.service || "digital marketing"}. Let's discuss!`
            )}`;

            return (
              <div
                key={lead.id}
                className="bg-[#0D1117] border border-[#1E2736] hover:border-[#B7FF00]/40 rounded-3xl p-6 flex flex-col justify-between space-y-4 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-base text-[#F8FAFC]">{lead.name}</h3>
                      {lead.businessName && (
                        <p className="text-xs text-[#B7FF00] font-mono">{lead.businessName}</p>
                      )}
                    </div>

                    <select
                      value={lead.status}
                      onChange={(e) => handleUpdateStatus(lead.id, e.target.value as any)}
                      className={`text-[11px] font-mono px-2 py-1 rounded-lg border focus:outline-none transition ${
                        lead.status === "new"
                          ? "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30"
                          : lead.status === "contacted"
                          ? "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30"
                          : lead.status === "converted"
                          ? "bg-[#B7FF00]/10 text-[#B7FF00] border-[#B7FF00]/30"
                          : "bg-[#64748B]/10 text-[#94A3B8] border-[#64748B]/30"
                      }`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-xs text-[#CBD5E1]">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span className="font-mono">{lead.phone}</span>
                    </div>

                    {lead.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3.5 h-3.5 text-[#94A3B8]" />
                        <span>{lead.email}</span>
                      </div>
                    )}

                    {lead.city && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                        <span>{lead.city}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
                      <span className="text-[11px] text-[#94A3B8]">
                        {new Date(lead.createdAt).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#11161D] border border-[#1E2736] space-y-1 text-xs">
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-[#94A3B8]">Service:</span>
                      <span className="text-[#F8FAFC] font-semibold">{lead.service || "General"}</span>
                    </div>
                    <div className="flex justify-between font-mono text-[11px]">
                      <span className="text-[#94A3B8]">Budget:</span>
                      <span className="text-[#B7FF00]">{lead.budget || "Not specified"}</span>
                    </div>
                    {lead.message && (
                      <div className="pt-1.5 mt-1.5 border-t border-[#1E2736]/60 text-[11px] text-[#CBD5E1] italic">
                        "{lead.message}"
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E2736] flex items-center justify-between gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black transition text-xs font-mono font-semibold flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => handleDeleteLead(lead.id)}
                    className="p-2 rounded-xl bg-[#11161D] border border-[#1E2736] hover:border-[#EF4444] text-[#94A3B8] hover:text-[#EF4444] transition cursor-pointer"
                    title="Delete inquiry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
