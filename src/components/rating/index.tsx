import Star from "./star/index"

interface rate {
    rating: number
}

const Rating: React.FC<rate> = ({rating}) => {
    const stars = [ Star, Star, Star, Star, Star]
    const unrated = 5 - rating 
    return (
      <div style={{display: 'flex'}}>
        {stars.slice(0, rating).map((Star, index) => (
            <Star fll="rgb(47 133 181)" key={index} />
          ))
        }
        {stars.slice(0, unrated).map((Star, index) => (
            <Star fll="rgba(0, 0, 0, 0.5)" key={index} />
          ))
        }
      </div>
   )}

export default Rating;