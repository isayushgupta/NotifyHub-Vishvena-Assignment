import { useEffect, useState } from "react";
import Tabs from "../components/tabs/Tabs";
import DataTable from "../components/tables/DataTable";
import EmailForm from "../components/forms/EmailForm";
import SmsForm from "../components/forms/SmsForm";
import WhatsappForm from "../components/forms/WhatsappForm";
import Pagination from "../components/pagination/Pagination";
import {
    fetchEmails,
    fetchSms,
    fetchWhatsapp,
} from "../services/api";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("EMAIL");

    const [emails, setEmails] = useState([]);
    const [sms, setSms] = useState([]);
    const [whatsapp, setWhatsapp] = useState([]);

    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [loading, setLoading] = useState(false);

    const emailColumns = [
        { key: "id", label: "#" },
        { key: "emailTo", label: "Email To" },
        { key: "sentAt", label: "Sent At" },
    ];

    const smsColumns = [
        { key: "id", label: "#" },
        { key: "mobileNumber", label: "Mobile Number" },
        { key: "message", label: "Message" },
        { key: "sentAt", label: "Sent At" },
    ];

    const whatsappColumns = smsColumns;

    const refreshEmails = async (pageNumber = 0) => {
        try {
            setLoading(true);
            const res = await fetchEmails(pageNumber, 10);
            setEmails(res.content || []);
            setTotalPages(res.totalPages || 0);
            setPage(pageNumber);
        } catch (e) {
            console.error("Failed to fetch emails", e);
        } finally {
            setLoading(false);
        }
    };

    const refreshSms = async () => {
        try {
            setLoading(true);
            const res = await fetchSms(0, 10);
            setSms(res.content || []);
        } catch (e) {
            console.error("Failed to fetch SMS", e);
        } finally {
            setLoading(false);
        }
    };

    const refreshWhatsapp = async () => {
        try {
            setLoading(true);
            const res = await fetchWhatsapp(0, 10);
            setWhatsapp(res.content || []);
        } catch (e) {
            console.error("Failed to fetch WhatsApp", e);
        } finally {
            setLoading(false);
        }
    };

    // initial load (email tab)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        refreshEmails(0);
    }, []);

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">NotifyHub Dashboard</h1>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "EMAIL" && (
                <>
                    <EmailForm onSuccess={() => refreshEmails(page)} />
                    <DataTable
                        columns={emailColumns}
                        data={emails}
                        loading={loading}
                    />
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={refreshEmails}
                    />
                </>
            )}

            {activeTab === "SMS" && (
                <>
                    <SmsForm onSuccess={refreshSms} />
                    <DataTable
                        columns={smsColumns}
                        data={sms}
                        loading={loading}
                    />
                </>
            )}

            {activeTab === "WHATSAPP" && (
                <>
                    <WhatsappForm onSuccess={refreshWhatsapp} />
                    <DataTable
                        columns={whatsappColumns}
                        data={whatsapp}
                        loading={loading}
                    />
                </>
            )}
        </div>
    );
};

export default Dashboard;
