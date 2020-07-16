import React from 'react';
import axios from 'axios';
import './HomePage.css';
import GameTypeHolder from './GameTypeHolder';


class HomePage extends React.Component{
constructor(props){
    super(props);
    this.apiCall=this.apiCall.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
    this.computerPlayer=this.computerPlayer.bind(this);
    this.turn=this.turn.bind(this);
    this.selectPlayer=this.selectPlayer.bind(this);
    this.state={
        flag:true,
        indexSquare:Array(9).fill(null),
        computersTurn:false,
        nextTurn:true
    }
}

selectPlayer(flag){
    console.log("Select  Player ");
    console.log(flag);
    this.setState({
        flag:flag
    })
}

changeHandler(value){
    if(this.checkForWin(this.state.indexSquare)||this.state.indexSquare[value-1]){
return;
    }
   // if(!this.state.gameOver&&(this.state.indexSquare[value-1]==null)){

    console.log("HomePage.js");
    //console.log("Check "+typeof(value));    
    var temp=this.state.indexSquare.slice(0,10);
 //   console.log("In "+value);
    if(this.state.flag){
        temp[value-1]="X";
    }else{
        temp[value-1]="O";
 
    }
this.setState({
    indexSquare:temp,
    flag:!this.state.flag ,
    count:this.state.count+1,
    nextTurn:!this.state.nextTurn
},()=>{
if(!this.state.nextTurn&&this.state.computersTurn){
    this.computerPlayer();
}    
});
//console.log("HEllo");

//}  

}

computerPlayer(){
    var rand=Math.floor(Math.random(1)*9);
   var temp=this.state.indexSquare.slice(0,10);
    console.log("If Null "+temp.length);
    console.log(temp);
    console.log("Look at this "+rand+"  "+temp[rand]);
    var count=0;
    temp.map((val,index)=>{
        console.log(val);
if(val==="X"||val==="O"){
    console.log("Aboc=ve is false");
count++;
}
return val;
    });
    console.log("Count   "+count);
while(9-count>0&&(temp[rand]==="X"||temp[rand]==="O")){
    console.log("Check this for infinity");
    rand=Math.floor(Math.random(1)*9);
}
    console.log("Random "+rand+"   "+temp[rand]);
    if(temp[rand]==null){
        console.log("Lets mark it");
        this.changeHandler(rand+1);
    }

}

turn(){
this.setState({
    computersTurn:!this.state.computersTurn
})
}
    apiCall(){
        this.setState({
            flag:true,
        indexSquare:[],
        nextTurn:true,
        computersTurn:false,



        })
        axios.get('/api').then(response=>{
            console.log(response);
        })
    }

    checkForWin(board){
        //Logic From react tutorial
const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];
for(var i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
   // console.log("> "+board[a]);
    // console.log("> "+board[b]);
    // console.log("> "+board[c]);

    if(board[a]&&board[a]===board[b]&&board[b]===board[c]){

       // console.log("Winnner");

        return board[a];
    }
}
return null;
     
    }
    render(){
       var Winner=this.checkForWin(this.state.indexSquare);
     //  var Winner=this.state.gameOver;
// var status=Winner===null ?"Mark the Box":Winner+" Won!!!";
var playing=this.state.flag ? "X":"O";
        return(<div id="root">
            <h1>Tic Tac Toe</h1>
    {/* <h3>{status}</h3> */}
           {/* <p>{this.state.indexSquare}</p> */}
<GameTypeHolder winner={Winner} playing={playing} indexSquare={this.state.indexSquare} change={this.changeHandler} reset={this.apiCall} turn={this.turn} selectPlayer={this.selectPlayer}/>
        </div>);
    }
}

export default HomePage;