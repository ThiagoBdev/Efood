import { Route } from "react-router-dom";
import Layout from "../../components/Layout";
import Perfil from "../../components/Cardapio_Perfil"
import HeaderPerfil from "../../components/Header_Perfil";

export const PerfilRota = (
    <Route path="/perfil"
        element={
            <Layout incluibanner={true} componenteheader={<HeaderPerfil/>}>
                <Perfil />
            </Layout>
        }/>
)

