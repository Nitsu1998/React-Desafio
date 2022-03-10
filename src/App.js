import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailCointainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <ItemListContainer />
        <ItemDetailCointainer />
      </main>
      <Footer />
    </>
  );
}
