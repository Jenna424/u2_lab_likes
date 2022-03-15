import { useState } from 'react';

const Likes = () => {
  let [totalLikes, setTotalLikes] = useState(0)

  const incrementTotalLikes = () => {
    setTotalLikes(totalLikes + 1)
  }

  return <button onClick={incrementTotalLikes}>{totalLikes}</button>
}

export default Likes