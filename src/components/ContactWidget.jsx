import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./ContactWidget.css"; // for styles

function ContactWidget() {
  const whatsappNumber = "+918086024800"; // replace with your number (with country code, no +)
  const phoneNumber = "+918086024800";   // replace with your number (with +)

  return (
    <div className="contact-widget">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="contact-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Call */}
      <a href={`tel:${phoneNumber}`} className="contact-btn call">
        <FaPhoneAlt size={24} />
      </a>
    </div>
  );
}

export default ContactWidget;
