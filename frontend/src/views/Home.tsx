import './Home.sass'

import Header from '../components/Header/Header'
import About from '../components/About/About'

function Home () {
  return (
    <div>
    <Header />
    <main>
      <About />
      <section className="case-studies">
        <h2>The proof is in our work</h2>
        <p>
          For over 10 years, Dialexa has partnered with industry-leading 
          companies to create innovative technology. We want you to be our next 
          great success story.
        </p>
        <div>
          <a href="#">view our case studies</a>
        </div>
      </section>
    </main>
    </div>
  )
}

export default Home;