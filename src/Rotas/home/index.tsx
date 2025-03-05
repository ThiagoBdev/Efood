import { Route } from "react-router-dom";
import Layout from "../../components/Layout";
import ListadeRestaurantes from "../../components/Cardapio";

export const HomeRota = (
    <Route
        path="/"
        element={
            <Layout incluibanner={false}>
                <ListadeRestaurantes />
            </Layout>
        }
    />
)