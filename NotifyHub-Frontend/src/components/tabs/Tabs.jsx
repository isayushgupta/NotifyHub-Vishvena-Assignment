const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { key: "EMAIL", label: "Email" },
        { key: "SMS", label: "SMS" },
        { key: "WHATSAPP", label: "WhatsApp" },
    ];

    return (
        <div className="flex gap-4 border-b mb-6">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-2 px-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key
                            ? "border-blue-600 text-blue-600"
                            : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
