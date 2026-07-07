import { useNavigate } from "react-router-dom";
import { useLuva } from "../../hooks/useLuva/useLuva.hook";

export const useSelecaoModo = () => {
    const { conectar, estado, desconectar } = useLuva();
    const navigate = useNavigate();
    console.log(estado, "estado da luva");

    const handleConectar = async () => {
        try {
            await conectar();
            navigate("/PraticaLivre/Luva");
        } catch (error) {
            console.error("Erro ao conectar a luva:", error);
        }
    }

    return { handleConectar, estado, desconectar };
}