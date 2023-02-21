import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './Header';
import Error from './Error';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetValue: '',
      results: [],
      mapInfo: {},
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
      this.setState({ error: e })
    }
  }

  mapInfo = async (e) => {
    e.preventDefault()
    try {
      let request = {
        url: `https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${this.state.results[0].lat},${this.state.results[0].lon}&zoom=<9>`,
        method: 'GET'
      }
      let response = await axios(request);

      this.setState({
        mapInfo: response
      })
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
        <main>
          <div>
            {this.state.results.map(item => (
              <>
                <h3 style={{ marginTop: 60 }}>{item.display_name}</h3>
                <p>{item.lat}</p>
                <p>{item.lon}</p>
                <img alt={'img'} src={`https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${item.lat},${item.lon}&zoom=13`}></img>
              </>
            ))}
          </div>
        </main> }   
           </>
    );
  };
}
export default App;
