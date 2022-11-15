import './Insight.sass'

type Props = {
  imgSrc: string,
  imgDesc: string,
  link: string,
  title: string,
  summary: string
}

const Insight = function (props: Props) {

  return (
    <article className="insight">
      <img src={ props.imgSrc } alt={ props.imgDesc } />
      <a href={ props.link }>
        <h3>{ props.title }</h3>
      </a>
      <p>{ props.summary }</p>
      <a href={ props.link }>Read More &#8594;</a>
    </article>
  );
}

export default Insight
