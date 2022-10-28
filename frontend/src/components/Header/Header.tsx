import './Header.sass';

import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header () {
  return (
    <header>
      <HeaderNav />
      <section className="header-content">
        <h1>We are creating a new future.</h1>
        <p>Dialexa is joining IBM.</p>
        <a href="#">find out more</a>
      </section>
    </header>
  );
}
