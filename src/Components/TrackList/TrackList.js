import React from 'react';
import './TrackList.css';
import { Track } from '../Track/Track'

export class TrackList extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        
        return(
            <div className="TrackList">
                {this.props.tracks.map((track) => {
                    return (
                        <Track 
                            onAdd={this.props.onAdd} 
                            track = {track} 
                            onRemove = {this.props.onRemove}
                            isRemoval = {this.props.isRemoval}
                        />)
                })}
            </div>
        )
    }
}