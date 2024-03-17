import BookLibrary from "./components/BookLibrary";
import "./assets/styles/style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-zinc-900 px-8">
      <Nav />
      <BookLibrary />
      <Footer />
    </div>
  );
}
