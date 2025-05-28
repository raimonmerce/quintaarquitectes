import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import ButtonDefault from "../common/ButtonDefault";
import assets from "../../assets/assets";
import { useTranslation } from 'react-i18next';
import "./Contact.css";

export default function Contact() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_wks0xbf",
            "template_72gytnc",
            e.target  as HTMLFormElement,
            "EsTRcLw2_fAfuJ4Wn"
        )
        .then(
            () => {
            setStatus("Email sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            },
            (error) => {
            setStatus("Failed to send email.");
            console.error(error);
            }
        );
    };

    const copyToClipboard = (text: string) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Email copied to clipboard!');
    };

    const navigateTo = async (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <p>Contact</p>
            <div className="contact-continer">
                <div className="contact-continer-links">
                    <div style={{display: "flex", width: "100%"}}>
                        <div style={{flex: "30%"}}>
                            <ButtonDefault
                                onClick={() => { navigateTo('https://www.linkedin.com/in/raimon-merc%C3%A9-gotsens-27148a166/') }}
                                svgPath={assets.svg.linkedinSVG}
                                text={"LinkedIn"}
                            />
                        </div>
                        <div style={{flex: "70%"}}>Quinta Arquitectes</div>
                        
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                        <div style={{flex: "30%"}}>
                            <ButtonDefault
                                onClick={() => { copyToClipboard('raimon.merc.gots@gmail.com') }}
                                svgPath={assets.svg.emailSVG}
                                text={"Email"}
                            />
                        </div>
                        <div style={{flex: "70%"}}>example@gmail.com</div>
                    </div>
                    <div style={{display: "flex", width: "100%"}}>
                        <div style={{flex: "30%"}}>
                            <ButtonDefault
                                onClick={() => { navigateTo('https://www.google.com/maps/place/Barcelona/@41.3927673,2.0577878,12z/data=!3m1!4b1!4m6!3m5!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568!16zL20vMDFmNjI?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D') }}
                                svgPath={assets.svg.locationSVG}
                                text={t("contact.location")}
                            />
                        </div>
                        <div style={{flex: "70%"}}>Carrer Exemple, 123, 08014. Barcelona</div>
                    </div>
                </div>
                <div className="contact-continer-form">
                    <form onSubmit={handleSubmit}>
                        <a className="form-label">{t("contact.name")}</a>
                        <input
                            type="text"
                            name="name"
                            placeholder={t("contact.nameHere")}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <a className="form-label">{t("contact.email")}</a>
                        <input
                            type="email"
                            name="email"
                            placeholder={t("contact.emailHere")}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                        <a className="form-label">{t("contact.message")}</a>
                        <textarea
                            name="message"
                            placeholder={t("contact.messageHere")}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="form-input form-text"
                        />
                        <button type="submit" className="submit-button">
                            {t("contact.submit")}
                        </button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </div>
            </div>
        </>
    )
}