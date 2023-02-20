import axios from 'axios';
import React from 'react';
import './App.css';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetValue: '',
      results: [],
      error: null
    };
  };


search = async (e) => {
  e.preventDefault()
  try {
    let request = {
      url: `https://us1.locationiq.com/v1/search.php?key=${API_TOKEN}&q=${this.state.targetValue}&format=json`,
      method: 'GET'
    }
    let response = await axios(request);

    this.setState({
      results: response.data
    });
  } catch (e) {
    console.log(e)
    this.setState({ error: e})
  }
}

getTargetInfo = async (e) => {
  let value = e.target.value;
  this.setState({
    targetValue: value
  });
}


render() {
  console.log(this.state)
  console.log(API_TOKEN)
  return (
    <>
      <div className="App">
        <form>
          <input onChange={this.getTargetInfo} type='text' placeholder='Seattle'></input>
          <button onClick={this.search}>Explore!</button>
        </form>
      </div>
    </>
  );
};
}
export default App;
