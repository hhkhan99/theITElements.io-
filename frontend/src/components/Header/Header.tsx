import './Header.sass';

import HeaderNav from '../HeaderNav/HeaderNav';

export default function Header () {
  return (
    <header>
      <HeaderNav />
      <section className="header-content">
        <h1>
          <span>We are creating</span>
          <span>a new future</span>
        </h1>
        <p>Dialexa is joining IBM.</p>
        <a href="#">find out more</a>
      </section>
    </header>
  );
}
