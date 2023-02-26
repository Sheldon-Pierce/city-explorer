import axios from 'axios';
import React from 'react';
import './App.css';
import Header from './Header';
import Error from './Error';
import Main from './Main';
import BackgroundVideo from './BackgroundVideo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetValue: '',
      results: [],
      error: null,
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
        }
        );
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
        <Container fluid='xl'>
          <Row>
            {this.state.error ? <Error error={this.state.error} /> : this.state.results.map((result) =>
              <Col md={6} lg={4}>
                <Main state={this.state} token={this.API_TOKEN} mapInfo={this.mapInfo} display_name={result.display_name} lat={result.lat} lon={result.lon} />
              </Col>
            )}
          </Row>
        </Container>
        <BackgroundVideo />
        <Footer show={null}/>
      </>
    );
  };
}
export default App;
