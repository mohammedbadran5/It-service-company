import "./404page.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Page404 = () => {
  return (
    <div>
      <Header bg="white" />
      <div className="page404">
        <h1>404</h1>
        <p>The page does not exist!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
