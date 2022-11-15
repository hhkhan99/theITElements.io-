import './About.sass';
import AboutCard from './AboutCard/AboutCard'

import robot from '../../images/lp/robot.png'
import ui from '../../images/lp/ui.svg'
import se from '../../images/lp/software.svg'
import ds from '../../images/lp/data-science.svg'
import ts from '../../images/lp/technology.svg'
import he from '../../images/lp/hardware.svg'

export default function About () {
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
        <AboutCard title="user experience design" img={ ui }></AboutCard>
        <AboutCard title="custom software engineering" img={ se }></AboutCard>
        <AboutCard title="data science" img={ ds }></AboutCard>
        <AboutCard title="technology strategy" img={ ts }></AboutCard>
        <AboutCard title="hardware engineering" img={ he }></AboutCard>
        <div className="line"></div>
      </section>
    </section>
  )
}