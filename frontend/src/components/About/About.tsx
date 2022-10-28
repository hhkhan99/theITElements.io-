import './About.sass';
import robot from '../../images/lp/robot.svg'

export default function AboutCard () {
  const cardImgs = [
    'hardware', 'platform', 'software', 'technology', 
    'ui', 'data-science'
  ]
  return (
    <section className="about">
      <section className="about-main">
        <img src={ robot } alt="robot icon" />
        <h2>
          WE CREATE INDUSTRY-DEFINING DIGITAL SOLUTIONS 
          FOR CLIENTS DRIVEN TO BE TOMORROW'S INDUSTRY 
          LEADERS.
        </h2>
        <div className="line"></div>
      </section>
      <section className="about-cards">

      </section>
    </section>
  )
}