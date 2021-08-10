import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  
  const[repos,setrepos] = useState([{}]);
  
  useEffect(()=> {
   
    async function getrepos(){
    const response = await fetch("https://api.github.com/users/muhammadali28/repos")
    const data = await response.json();setrepos(data);
    console.log(data)
    }
    getrepos();
    
  
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
   //.then( response => response.json())
   //.then( json => {
   //  console.log(data);
   //  setdata(json);
   // })
  
  }, [])

  return (
    <div className="App">
      <h1>Hello Pakistan This is my all repositories!</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return(<li key={ind}>{repoObj.name}</li>)
        })}        
      </ul>
    </div>
  );
}

export default App;
