// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return "Click on me!!"
}

// create a react component
const App = () => {

  return (
    <div>
      <label className="label" for="name">Enter Name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
    </div>
  )
}

// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
