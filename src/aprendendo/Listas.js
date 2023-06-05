import React, {Component} from 'react';
import Feed from './Component/feed';

class App extends Component{
constructor(props){
  super(props);
  this.state={
    feed: [
      {id: 1 , name: 'matheus', curtidas: 10, comentarios:2},
      {id: 2 , name: 'Lucas', curtidas: 120, comentarios:24},
      {id: 3 , name: 'Sabrina', curtidas: 30, comentarios:12},
      {id: 4 , name: 'Ricardo', curtidas: 1, comentarios:15}
  ]
  }
}

  render(){
    return(
      <div>
        {this.state.feed.map((item)=> {
          return(
              <Feed key={item.id} name={item.name} 
              curtidas={item.curtidas}
              comentarios={item.comentarios} />
          )
        })}
        
      </div>
    )
  }
}





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
