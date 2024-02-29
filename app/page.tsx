import BookLibrary from "./components/BookLibrary";
import "./assets/styles/style.css";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <BookLibrary />
    </div>
  );
}
