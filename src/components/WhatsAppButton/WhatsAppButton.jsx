import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { buildWhatsappLink } from '../../utils/buildWhatsappLink';

export function WhatsAppButton() {
  const whatsappLink = buildWhatsappLink(
    businessInfo.whatsapp,
    businessInfo.mensagemWhatsapp,
  );

  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={27} />
    </a>
  );
}
