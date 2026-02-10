import { useState } from "react";
import { saveEmail } from "../../services/api";

const EmailForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        emailTo: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        await saveEmail(formData);
        setFormData({ emailTo: "", subject: "", message: "" });
        onSuccess();
    };

    return (
        <div className="bg-white p-4 rounded-lg border mb-6">
            <h2 className="text-lg font-semibold mb-4">Send Email</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                    name="emailTo"
                    placeholder="Email To"
                    value={formData.emailTo}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded"
                />

                <input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="border px-3 py-2 rounded"
                />
            </div>

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
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Save Email
            </button>
        </div>
    );
};

export default EmailForm;
