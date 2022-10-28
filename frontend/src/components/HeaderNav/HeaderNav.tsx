import './HeaderNav.sass';

export default function HeaderNav () {
  return (
    <nav className="main-nav">
      <section className="logo">
        <span>Dialexa</span>
        <span>IT Solutions</span>
      </section>
      <section className="main-menu-btn">
      <span className="material-symbols-outlined">
        menu
      </span>
      </section>
      <section className="main-links">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>work</li>
          <li>careers</li>
          <li>insights</li>
          <li>resources</li>
          <li>labs</li>
          <li>search</li>
          <li>contact us</li>
        </ul>
      </section>
    </nav>
  );
}
