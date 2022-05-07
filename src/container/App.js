import { Component } from 'react';
import Cardlist from '../component/Cardlist';
import Searchbox from '../component/Searchbox';
import './App.css';
import Scroll from '../component/Scroll';


class App extends Component{
  constructor(){
    super()
    this.state ={
      roboot: [],
      searchfield:''
    }
    console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>  response.json())
  .then(users => {this.setState({roboot:users})});
    // console.log('componentDidMount'))
  }

  onSearchChange =(event) =>{
  this.setState({searchfield:event.target.value})  

   
 
  }
  
  render(){
    const{roboot,searchfield} = this.state;
    const filteredRobots = roboot.filter(roboot =>{
      return roboot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
     return !roboot.length ? 
      <h1>Loading</h1>:
   
      (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <Searchbox searchChange ={this.onSearchChange}/>
          <Scroll>
          <Cardlist roboot={filteredRobots}/>
          </Scroll>
        </div>
      );
    
    // console.log('render');
  
    
  }

}

export default App;
