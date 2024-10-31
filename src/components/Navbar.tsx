export default function Navbar() {
  return (
    <nav className="h-20 bg-slate-500 flex justify-around">
      <span>Logo</span>
      <ul className="flex gap-4">
        <li>Accueil</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
