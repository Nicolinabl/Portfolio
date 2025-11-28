import { Article } from '../Cards/Article'
import workMe from '../../Assets/workMe.jpg'
import { H2 } from '../Typography/h2'
import styled from 'styled-components'
import cat from '../../Assets/cat.png'
import family from '../../Assets/family.png'
import beach from '../../Assets/beach.png'
import data from '../../data/articles.json'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MyJourneyContainer = styled.div`
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
`

const images = [
  workMe,
  beach,
  family,
  cat,
]

export const MyJourneySection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 786,
        settings: { slidesToShow: 1}
      }
    ]
  }

  return (
    <MyJourneyContainer>
    <H2>My Journey</H2>
        <Slider {...settings} style={{ width: '100%', gap: '32px'}}>
          {data.articles.map((article, index) => (
            <Article
              key={article.name}
              imgSrc={images[index]}
              title={article.name}
              text={`${article.description}`}
              link= {article.link}
              />
          ))}
        </Slider>
    </MyJourneyContainer>
  )
}