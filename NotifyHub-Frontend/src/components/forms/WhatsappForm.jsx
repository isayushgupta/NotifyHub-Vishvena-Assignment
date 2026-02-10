import { useState } from "react";
import { saveWhatsapp } from "../../services/api";

const WhatsappForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        mobileNumber: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await saveWhatsapp(formData);
        setFormData({ mobileNumber: "", message: "" });
        onSuccess();
    };

    return (
        <div className="bg-white p-4 rounded-lg border mb-6">
            <h2 className="text-lg font-semibold mb-4">Send WhatsApp</h2>

            <input
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full mb-4"
            />

            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-full mb-4"
                rows={3}
            />

            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Save WhatsApp
            </button>
        </div>
    );
};

export default WhatsappForm;
