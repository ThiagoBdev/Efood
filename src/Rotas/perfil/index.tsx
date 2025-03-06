import { Route } from "react-router-dom";
import Layout from "../../components/Layout";
import HeaderPerfil from "../../components/Header_Perfil";
import ListagemCardapio from "../../components/Cardapio_Perfil";

export const PerfilRota = (
    <Route 
        path="/perfil/:id" 
        element={
            <Layout incluibanner={true} componenteheader={<HeaderPerfil />}>
                <ListagemCardapio />
            </Layout>
        } 
    />
);




