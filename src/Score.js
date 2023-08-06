const Score = (props) => {
  const scores = props.scores.map((stud, index) => {
    return(
      <div>
      <p>Score: {stud.score} Date: {stud.date}</p>
      </div>
    )
  })
  
  return(
    <div>
      {scores}
    </div>
  )
}

export default Score