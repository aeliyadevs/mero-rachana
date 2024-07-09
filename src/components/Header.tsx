const Header = () => {
  return (
    <header className="w-full bg-gray-800 flex justify-between text-white py-6">
      <div className="w-9/12 mx-auto flex justify-between">
        <div className="logo">
          <h1 className="text-4xl font-bold">Mero Rachana</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Posts</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
