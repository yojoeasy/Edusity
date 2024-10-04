import React,{useRef} from 'react'
import './VideoPlayer.css'
import videoP from '../../assets/video.mp4'

const VideoPlayer = ({play , setPlay}) => {
    let player = useRef(null);
    let closePlayer=(e)=>{
        if(e.target == player.current){
            setPlay(false)
        }
    }
  return (
    <>

      <div className={`video-player ${play ? "" : "hide"}`} ref={player} onClick={closePlayer}>
        <video src={videoP} autoPlay muted controls></video>
      </div>





      {/* <div className={`video-player ${play ? "" : "hide"}`} onClick={()=> setPlay(false)}>
        <video src={videoP} autoPlay muted controls></video>
      </div> */}
    </>
  )
}

export default VideoPlayer;
