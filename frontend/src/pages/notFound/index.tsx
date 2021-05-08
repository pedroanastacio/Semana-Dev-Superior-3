import Footer from "components/footer";
import NavBar from "components/navbar";

const NotFound = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Erro 404</h1>
                    <p className="lead">Página não encontrada!</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NotFound;