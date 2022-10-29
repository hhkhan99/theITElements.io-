import './AboutCard.sass'

type AboutCardType = {
  img: string,
  title: string
}

export default function AboutCard (props: AboutCardType) {
  const { img, title } = props;

  return (
    <section className="about-card">
      <h3>{ title }</h3>
      <img src={ img } alt="" />
    </section>
  )
}