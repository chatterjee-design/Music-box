import "./Musicbox.css";
import "./Playlists.css";

import { songsdata } from "./Audios";

import Musics from "./Musics";
import { useState, useRef, useEffect } from "react";


export default function Musicbox() {
  const [song, setSong] = useState(songsdata);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [selectedSong, setSelectedSong] = useState();
  const audioElem = useRef();

  //----------------------------------------------play/pause song---------------------------------------//
  const playSong = () => {
    setisPlaying(!isPlaying);
  };
  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
      document.getElementById('play').src= "pause.png"
      document.getElementById('vinyl').classList.add("animation")
    } else {
      audioElem.current.pause()
      document.getElementById('play').src= "play-button.png"
      document.getElementById('vinyl').classList.remove("animation")
    }
  }, [isPlaying]);
  
 

  
//----------------------------------------------progressbar---------------------------------------//
const timeUpdate=()=>{
  let progressBar = document.getElementById('progressBar')
 let duration = audioElem.current.duration;
 let currentTime = audioElem.current.currentTime
  let p= parseInt((currentTime/duration)*100);
  progressBar.value= p;
}
const handleOnChange=()=>{
  let progressBar = document.getElementById('progressBar')
  let duration = audioElem.current.duration;

  audioElem.current.currentTime =( progressBar.value * duration)/100;

}
//----------------------------------------------next/prev song---------------------------------------//
const prevSong=()=>{
  const index = song.findIndex(x=>x.songName == currentSong.songName)
    setCurrentSong(song[(index -1 + song.length) % song.length])
}
const nextSong=()=>{
  const index = song.findIndex(x=>x.songName == currentSong.songName)
  setCurrentSong(song[(index+1 ) % song.length])
}
useEffect(() => {
  if(currentSong !== songsdata[0] ){
   
    audioElem.current.play();
    document.getElementById('play').src= "pause.png"
    document.getElementById('vinyl').classList.add("animation")
  }
  
}, [currentSong]);
  return (
    <>
      <div className=" play">
        <div className="playlists">
          {songsdata.map((e, index) => {
            return (
              <div className="tracItems">
                <Musics
                key={index}
                
                  songName={e.songName}
                  coverPath={e.coverPath}
                  filePath={e.filePath}
                ></Musics>
              </div>
              
            );
          })}
        </div>
        
        <div className="tracCard">
          <div className="card">
            <div className="imgDiv">
              <img src="vector.png" id="vinyl" ></img>
            </div>

            <div className="playerSong">
            {currentSong.songName}
            </div>
          </div>
        </div>
      </div>

      <div className="musicBox">
        <div className="song">
          <div className="musics2">
            <div className="songName2">
              <p>
               {currentSong.songName}
                <audio src={currentSong.filePath} ref={audioElem} onTimeUpdate={timeUpdate} onEnded={nextSong}></audio>
              </p>
            </div>
          </div>

          <input id="progressBar" value={0} type="range" onChange={handleOnChange} />
        </div>
        <div className="buttons">
          <img src="previos.png" onClick={prevSong}></img>
          <img id="play" onClick={playSong} src="play-button.png"></img>
          <img src="next.png" onClick={nextSong}></img>
        </div>
      </div>
    </>
  );
}
