import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
state = {
  persons: [
    {id:"1" ,name: "Matias" ,age: 27 },
    {id:"2" ,name: "Sebastian" ,age: 25 },
    {id:"3" ,name: "Julian" ,age: 32 }
  ],
  showPerson:true
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex,1);
  this.setState({persons:persons}) 
}

switchNameHandler = () =>{
  this.setState({
    persons: [
      {id:"1" ,name: "Juan" ,age: 27 },
      {id:"2" ,name: "Sebastian" ,age: 25 },
      {id:"3" ,name: "Julian" ,age: 32 }
    ]
  })
}

nameChangeHandler = (event,index) => {
  const personIndex =this.state.persons.findIndex(per =>{
    return per.id ===index;
  });

  const person = {
    ...this.state.persons[personIndex]
  }

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex]= person;
  this.setState({persons:persons})

}
toggleNamesHandler = () => {
  const mostrar = this.state.showPerson;
  this.setState({showPerson:!mostrar})
}

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if(this.state.showPerson){
      persons =(
        <div>
          {this.state.persons.map((person,index) => {
           return <Person key={person.id} 
           name={person.name} 
            click={()=>this.deletePersonHandler(index)}
            change={(event)=>this.nameChangeHandler(event,person.id)}
           age={person.age}/>
          })}
        </div>
      );

      style.backgroundColor = "red";
  
    }


    //let classes = ["red","bold"].join(" ");
      let classes = [];
      if(this.state.persons.length <=2){
        classes.push("red");
      }
      if(this.state.persons.length <=1){
        classes.push("bold");
      }

    return (
    
      <div className="App">
        <p className={classes.join(" ")}>Probando</p>
        <button style={style} onClick={this.toggleNamesHandler}>Mostrar personas</button>
        {persons}
        
      </div>
     
    );
  }
}

export default App;
