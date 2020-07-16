import React from 'react';
import Square from './Square';
import './Grid.css';
class Grid extends React.Component{
   

    render(){
        return(
            <div id="grid">
<Square value={this.props.value[0]} onChange={()=>this.props.onChange(1)}/>
<Square value={this.props.value[1]} onChange={()=>this.props.onChange(2)}/>
<Square value={this.props.value[2]} onChange={()=>this.props.onChange(3)}/>
<Square value={this.props.value[3]} onChange={()=>this.props.onChange(4)}/>
<Square value={this.props.value[4]} onChange={()=>this.props.onChange(5)}/>
<Square value={this.props.value[5]} onChange={()=>this.props.onChange(6)}/>
<Square value={this.props.value[6]} onChange={()=>this.props.onChange(7)}/>
<Square value={this.props.value[7]} onChange={()=>this.props.onChange(8)}/>
<Square value={this.props.value[8]} onChange={()=>this.props.onChange(9)}/>

            </div>
        );
    }
}
export default Grid;