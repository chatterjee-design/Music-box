import { useState, useRef, useEffect } from "react";

export default function Ab() {
    const [selectedSong, setSelectedSong] = useState(null);
    const audioRef = useRef(null);
  const songlist = [
    {
      songName: "Bol Do Na Zara - Arman Malik",
      filePath: "Bol Do Na Zara.mp3",
      coverPath: "bol do na jara img.jpg",
    },
    {
      songName: "Kuch Toh Hai - Arman Malik",
      filePath: "Kuch Toh Hai 128 Kbps.mp3",
      coverPath: "kuch to hain.jpg",
    },
    {
      songName: "Tu/You - Arman Malik",
      filePath: "Tu You(PagalWorld.com.se).mp3",
      coverPath: "5.jpg",
    },
    {
      songName: "Pehla Pyaar - Arman Malik",
      filePath: "Pehla Pyaar - Kabir Singh.mp3",
      coverPath: "pahela pyar.jpg",
    },
  
    {
      songName: "Besabriyaan - Arman Malik",
      filePath: "Besabriyaan (M S Dhoni - The Untold Story).mp3",
      coverPath: "besabria.jpg",
    },
  
    {
      songName: "Chale Aana - Arman Malik",
      filePath: "Chale Aana - De De Pyaar De.mp3",
      coverPath: "chale aana.jpg",
    },
    {
      songName: "Tere Mere - Arman Malik",
      filePath: "Tere Mere (Chef) 128 Kbps.mp3",
      coverPath: "bol do na jara img.jpg",
    },
    {
      songName: "Mujhko Barsaat Bana Lo - Arman Malik",
      filePath: "02 - Mujhko Barsaat Bana Lo.mp3",
      coverPath: "mujhko barsat bana do.jpg",
    },
  
    {
      songName: "Peheli Nazar Main.mp3",
      filePath: "bollywood_Race 2008 - Pehli Nazar Mein.mp3",
      coverPath: "paheli nazar main.jpg",
    },
  ];
  
  const handleClick = (song) => {
    setSelectedSong(song);
    audioRef.current.src = song.filePath;
    audioRef.current.play();
  };
  
    return (
      <>
            <div>
        <h1>Songlist</h1>
        <ul>
          {songlist.map((song, index) => (
            <li key={index} onClick={() => handleClick(song)}>
              {song.songName} by {song.songName}
            </li>
          ))}
        </ul>
        {selectedSong && (
          <p>Selected song: {selectedSong.songName} </p>
        )}
        <audio ref={audioRef} controls />
      </div>
  
      </>
    )
}
