import { ShieldCheck, Sparkles, Zap } from "lucide-react";

import luva from "../../assets/images/luva.png";

export const imagensProduto = [luva, luva, luva];

export const beneficios = [
  {
    icon: <Sparkles size={26} />,
    title: "Aprendizado interativo",
    description:
      "Transforme gestos em respostas visuais e avance nas atividades de forma mais envolvente.",
  },
  {
    icon: <Zap size={26} />,
    title: "Pronta para praticar",
    description:
      "Use a luva nas trilhas guiadas da Orion e acompanhe seu progresso com mais clareza.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Compra segura",
    description:
      "Finalize o pedido em poucos passos, com pagamento via PIX e acompanhamento pelo perfil.",
  },
];

