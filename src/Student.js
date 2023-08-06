import Score from './Score'

const Student = (props) => {
  return(
    <>
    <div>
      <h1>{props.name}</h1>
      <h2>{props.bio}</h2>
    </div>
      <Score scores={props.scores}/>
    </>
  )
}

export default Student