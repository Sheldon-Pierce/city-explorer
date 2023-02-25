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
      weatherResults: [],
      movieObjects: []
    };
  };


  search = async (e) => {
    e.preventDefault()
    try {
      let request = {
        url: `https://us1.locationiq.com/v1/search.php?key=${API_TOKEN}&q=${this.state.targetValue}&format=json`,
        method: 'GET'
      }
      axios(request).then(response => {
        this.setState({
          results: response.data
        },
          () => {
            this.handleWeather()
          }
        );
      })
        ;
    } catch (e) {
      console.log(e)
      this.setState({ error: e })
    }
  }

  handleWeather = async () => {
    let weatherArray = []
    for (let item in this.state.results) {
      try {
        let request = {
          url: `https://city-explorer-api-wvcd.onrender.com/weather?lat=${this.state.results[item].lat}&lon=${this.state.results[item].lon}`,
          method: 'GET'
        }
        axios(request)
          .then(response => {          
            weatherArray.push(response.data)
            this.setState({
              weatherResults: weatherArray
            })
          });
      } catch (e) {
        console.log(e)
        this.setState({ error: e })
      }
    }
  }

  handleMovies = async () => {
    try {
      let request = {
        url: `https://city-explorer-api-wvcd.onrender.com/movies?query=${this.state.targetValue}`,
        method: 'GET'
      }
      axios(request)
        .then(response => {
          // console.log(response.data);
          this.setState({
            movieObjects: response.data
          });
        });
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
          <Main state={this.state} token={this.API_TOKEN} mapInfo={this.mapInfo} />}
      </>
    );
  };
}
export default App;
