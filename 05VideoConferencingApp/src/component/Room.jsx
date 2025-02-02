import { useParams} from 'react-router-dom'

const Room = () => {
    const { roomId } = useParams();
  return (
      <div>
          <h1>Room : { roomId}</h1>
      </div>
  )
}

export default Room