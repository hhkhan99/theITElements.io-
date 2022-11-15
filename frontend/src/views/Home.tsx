import './Home.sass'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import Insight from '../components/Insight/Insight'
import Footer from '../components/Footer/Footer'

import testimonialPoster from '../images/lp/poster_testimonial.jpg'
import testimonialProfile from '../images/lp/testimonial_profile.jpg'
import uberLogo from '../images/lp/logos/uber.png'
import fedexLogo from '../images/lp/logos/fedex.png'
import rivianLogo from '../images/lp/logos/rivian2.png'
import surgLogo from '../images/lp/logos/surgical-directions.jpg'
import unisysLogo from '../images/lp/logos/unisys.png'
import toyotaLogo from '../images/lp/logos/toyota2.png'
import article1Img from '../images/lp/articles/article_1.jpg'
import article2Img from '../images/lp/articles/article_2.jpg'
import article3Img from '../images/lp/articles/article_3.jpg'

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

      <section className="testimonials">
        <section className="testimonial_1">
          <video src="#" poster={testimonialPoster} controls></video>
        </section>
        <section className="testimonial_2">
          <img src={testimonialProfile} alt="Man smiling at the camera" />
          <h2>Alex Parnell, CEO of GoldenCar by Rowdy</h2>
          <p>
            <q>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Aperiam temporibus modi quos enim placeat excepturi aspernatur nulla 
              maiores illo a non quaerat similique sequi soluta alias eos aut 
              officiis dolorem illum vero, praesentium corrupti, suscipit minima. 
              Omnis quasi dolore magnam dicta, quo tempora deserunt. Debitis 
              delectus nam distinctio ipsa quidem! Corrupti, culpa.
            </q>
          </p>
        </section>
      </section>

      <section className="clients">
        <h2>Working with some of the very Best Companies</h2>
        <section className="client_icons">
          <img src={uberLogo} alt="Uber logo" />
          <img src={fedexLogo} alt="Fedex logo" />
          <img src={rivianLogo} alt="Rivian logo" />
          <img src={surgLogo} alt="Surgical directions logo" />
          <img src={unisysLogo} alt="Unisys logo" />
          <img src={toyotaLogo} alt="Toyota logo" />
        </section>
      </section>

      <section className="insights">
        <h2>Latest insights</h2>
        <section className="insights-content">
          <Insight 
            imgSrc={ article1Img }
            link="#"
            imgDesc="Black and white image with an orchestra"
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nemo."
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et 
            temporibus quos voluptate quis minus! Perferendis quam molestiae 
            voluptate repudiandae quo sapiente quis tenetur autem nemo iste! 
            Maiores, soluta perferendis! Eligendi ex assumenda fugiat 
            recusandae illum eveniet temporibus perspiciatis libero laudantium 
            saepe, repudiandae, inventore quo earum? Perferendis ducimus 
            laudantium doloribus accusantium hic et a fuga nobis cumque rerum 
            laboriosam esse in qui consequatur exercitationem illum inventore 
            adipisci, explicabo vitae."
          />

          <Insight 
            imgSrc={ article2Img }
            link="#"
            imgDesc="Surface of the moon"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem, laboriosam eaque?"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Maiores, obcaecati expedita. Quas nisi ad laboriosam perferendis 
            asperiores aut, eaque harum necessitatibus reprehenderit sunt vitae 
            cum eius dicta ipsa sed delectus temporibus quaerat a, mollitia 
            ratione maiores consequatur hic. Facere id minima veritatis, tempore 
            labore sapiente magnam, in at quasi quaerat adipisci temporibus 
            doloribus obcaecati dolores modi!"
          />
          
          <Insight 
            imgSrc={ article3Img }
            link="#"
            imgDesc="People in an office meeting"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Labore earum harum minima."
            summary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Laborum nobis est eum ea recusandae eaque unde iure, dolor inventore, 
              eius atque ducimus expedita facilis totam esse, tenetur debitis 
              perferendis quas labore eligendi reiciendis incidunt! Impedit 
              reiciendis sed quaerat magnam dignissimos modi illum reprehenderit 
              labore similique!"
          />
        </section>
        <div>
          <a href="#">view all insights &#8594;</a>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  )
}

export default Home;