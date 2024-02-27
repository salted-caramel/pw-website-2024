import BookLibrary from "./components/BookLibrary";
import "./assets/styles/style.css";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <div className="navbar">
        <a className="btn btn-ghost text-xl">Title</a>
      </div>
      <BookLibrary />
    </div>
  );
}
