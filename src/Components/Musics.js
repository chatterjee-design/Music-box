import React, { Component } from 'react'
import "./Musicbox.css";
import "./Playlists.css";
export default class Musics extends Component {
  render() {
    let {songName, coverPath } = this.props
    return (
      <>
         <div className='musics'>
              <div className='songName'>
               <span>{songName}</span>
              </div>
              <div className='songImg'>
               <img  src={coverPath}></img>
              </div>
           </div>
           
      </>
    )
  }
}
