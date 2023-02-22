import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './Header';
import Error from './Error';
import Main from './Main';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetValue: '',
      results: [],
      error: null,
      weatherResults: []
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
        results: response.data,
      })
      ;
    } catch (e) {
      console.log(e)
      this.setState({ error: e })
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
    return (
      <>
      <Header search={this.search} getTargetInfo={this.getTargetInfo} />
      {this.state.error ? <Error error={this.state.error} /> :
        <Main state={this.state} token={this.API_TOKEN} mapInfo={this.mapInfo}/>}   
           </>
    );
  };
}
export default App;
