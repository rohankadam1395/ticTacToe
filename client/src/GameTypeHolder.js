import React from 'react';
import Grid from './Grid';
import './typeHolder.css';
import {FaUser, FaUsers} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
class GameTypeHolder extends React.Component{
    constructor(props){
        super(props);
this.state={
    singlePlayer:false,
    buttonsVisible:true,
    gridVisible:false,
    playerSelection:false

}

this.toggleSingle=this.toggleSingle.bind(this);
this.toggleMulti=this.toggleMulti.bind(this);
this.reset=this.reset.bind(this);
    }


    reset(){
        this.setState({
            singlePlayer:false,
    buttonsVisible:true,
    gridVisible:false,
    playerSelection:false
        })
    }
    toggleSingle(){
        this.props.reset();
        if(!this.state.singlePlayer){
            this.props.turn();
        }
        this.setState({
            singlePlayer:true,
            buttonsVisible:false,
            playerSelection:true


        })
    }
    toggleMulti(){
        this.props.reset();
        if(this.state.singlePlayer){
            this.props.turn();
        }
        this.setState({
            singlePlayer:false,
            buttonsVisible:false,
            playerSelection:true


        })
    }
render(){
    return(
        <div className="typeHolder">
             {this.state.gridVisible && <div className="display">{this.props.winner ? this.props.winner+" Won!!!":"Current Player: "+this.props.playing}</div> }
            
             {(this.state.playerSelection || this.state.gridVisible) && <button onClick={()=>{
                            this.props.reset();
                            this.reset();
                        }
                        } className="reset"><p>Reset</p></button>}
                        

            {this.state.buttonsVisible && <div className="typeButtons">
                <IconContext.Provider value={{style:{fontSize:'2em'}}}>
                <div className="faIcon"><FaUser onClick={this.toggleSingle}></FaUser></div>
                <div className="faIcon"><FaUsers  onClick={this.toggleMulti} ></FaUsers></div>
                <button className="singleType" onClick={this.toggleSingle} >Single Player</button>
                <button  className="singleType" onClick={this.toggleMulti}>Multi Player</button>
                </IconContext.Provider>

            </div>}
            
          {this.state.gridVisible && <Grid value={this.props.indexSquare} onChange={this.props.change}/> }

          {this.state.playerSelection && <div>
    <p>Which Player you want to be?</p>
    <button className="selectPlayer" onClick={()=>{ 
        this.setState({
            gridVisible:true,
            playerSelection:false
        })
        

        return this.props.selectPlayer(true)}}>X</button>
    <button className="selectPlayer" onClick={()=>{
         this.setState({
            gridVisible:true,
            playerSelection:false
        })
       return this.props.selectPlayer(false);
        }}>O</button>
</div>}


        </div>
    )
}

}

export default GameTypeHolder;