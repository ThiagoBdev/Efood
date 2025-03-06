import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { buscarRestaurantes, Restaurantes } from "../api/restaurantes";

export const useRestaurante = () => {
    const { id } = useParams<{ id: string }>();
    const [restaurante, setRestaurante] = useState<Restaurantes | null>(null);

    useEffect(() => {
        const carregarRestaurante = async () => {
            const restaurantes = await buscarRestaurantes();
            const restauranteEncontrado = restaurantes.find(
                (rest) => rest.id.toString() === id
            );
            setRestaurante(restauranteEncontrado || null);
        };

        if (id) {
            carregarRestaurante();
        }
    }, [id]);

    return restaurante;
};
