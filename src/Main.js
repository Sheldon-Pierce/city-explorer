import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Weather from "./Weather";
import Button from 'react-bootstrap/Button';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            weatherResults: []
        }
    }

    handleWeather = async (e) => {
        e.preventDefault()
        try {
          let request = {
            url: `http://localhost:3001/weather?city=${this.props.state.targetValue}`,
            method: 'GET'
          }
          let response = await axios(request);
    
          this.setState({
            weatherResults: response.data
          });
        } catch (e) {
          console.log(e)
          this.setState({ error: e })
        }
      }

    render() {
        console.log(this.state)
        return (
            <Container fluid='xl'>
                <main>
                    <Row>
                        {this.props.state.results.map(item => (
                            <Col md={6} lg={4}>
                            <>
                                <h3 style={{ marginTop: 60 }}>{item.display_name}</h3>
                                <p>{item.lat}</p>
                                <p>{item.lon}</p>
                                <img alt={'img'} src={`https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${item.lat},${item.lon}&zoom=13&size=200x200`}></img>
                                <br></br>
                                <br></br><Button onClick={this.handleWeather}>Weather Info</Button>
                                {this.state.weatherResults ? <Weather weather={this.state}/> : <p>no info</p>}
                            </>
                            </Col>
                        ))}
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Main