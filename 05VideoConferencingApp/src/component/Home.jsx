import { useState } from "react"
import { useNavigate} from 'react-router-dom'


function Home() {
    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`./room/${roomId}`)
    }
  return (
      <div><h1>
      Creating a Video Conferencing App using Zegocloud
      </h1>
          <input type="text" placeholder="enter room id" value={roomId} onChange={e => setRoomId(e.target.value)}></input>
          <button onClick={handleJoin}>Join</button>
      </div>
  )
}

export default Home