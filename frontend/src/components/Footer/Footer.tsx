import './Footer.sass'

import linkedinIcon from '../../images/icons/linkedin.svg'
import twitterIcon from '../../images/icons/twitter.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import facebookIcon from '../../images/icons/facebook.svg'
import youtubeIcon from '../../images/icons/youtube.svg'
import glassdoorIcon from '../../images/icons/glassdoor.svg'

function Footer () {

  return (
    <footer>

      <section className="partner">
        <h3>Ready to create something extraordinary?</h3>
        <h2>Let's Talk</h2>
        <div>
          <a href="#">partner with us &#8594;</a>
        </div>
      </section>

      <section className="contact">
        <h2>Get in touch</h2>
        <section className="contact-phone">
          <h3>Phone:</h3>
          <a href="tel:+18006145555">1(800) 614-5555</a>
        </section>
        <section className="contact-email">
          <h3>Email:</h3>
          <a href="mailto:hello@itelements.com">hello@itelements.com</a>
        </section>
        <section className="contact-address">
          <span>Dallas, TX | Chicago, IL</span>
        </section>
      </section>

      <hr />

      <section className="copyright">
        <span>
          <small>&copy;</small> 2022 Diarexa, LLC. All rights reserved.
        </span>
      </section>

      <section className="footer-social">
        <a href="#">
          <img src={ linkedinIcon } alt="linkedin" />
        </a>
        <a href="#">
          <img src={ twitterIcon } alt="Twitter" />
        </a>
        <a href="#">
          <img src={ instagramIcon } alt="Instagram" />
        </a>
        <a href="#">
          <img src={ facebookIcon } alt="Facebook" />
        </a>
        <a href="#">
          <img src={ youtubeIcon } alt="Youtube" />
        </a>
        <a href="#">
          <img src={ glassdoorIcon } alt="Glassdoor" />
        </a>
      </section>

      <section className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Cookie Preferences</a>
      </section>

    </footer>
  )
}

export default Footer;