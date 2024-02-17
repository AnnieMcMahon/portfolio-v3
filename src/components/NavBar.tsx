const NavBar = () => {
  return (
<nav>
    <div className="nav-header">
      <button className="nav-toggle">
        <i className="fas fa-bars"></i>
      </button>
    </div>
    <ul className="links">
      <li><a href="#about-me">About Me</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#coding-certif">Certificates</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  );
};

export default NavBar;
