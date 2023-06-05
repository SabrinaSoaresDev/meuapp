import React , {Component} from 'react';

class Feed extends  Component{
    
    render(){
        return(
            
            
            <div key={this.props.id} >
                <h3>{this.props.name}</h3>
                <a>{this.props.curtidas > 1 ? this.props.curtidas + ' curtidas' : this.props.curtidas + ' curtida'}  / 
                {this.props.comentarios} Comentarios 
                </a> <hr/>
            </div>
      
        );
    }
}

export default Feed;