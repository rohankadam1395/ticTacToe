import React from 'react';
import './Square.css';
class Square extends React.Component{
constructor(props){
    super(props);
    this.changeHandler=this.changeHandler.bind(this);
    this.state={

    }
}
changeHandler(e){
    console.log("In Square.js");
   
this.props.onChange();
}
render(){
    return(
<div id="square" onClick={this.changeHandler} className='grassImg'>
    {this.props.value}
</div>
    );
}
}

export default Square;
