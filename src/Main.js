import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Weather from "./Weather";
import Movies from "./Movies";
import './App.css'

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherResults: null,
            movieObjects: [],
            setShow: false,
            weather: false,
            location: false,
            movies: false,
            i: 0
        }
    }


    handleWeather = async (e) => {
        e.preventDefault()
        try {
            let request = {
                url: `https://city-explorer-api-wvcd.onrender.com/weather?lat=${this.props.lat}&lon=${this.props.lon}`,
                method: 'GET'
            }
            axios(request).then(response => {
                this.setState({
                    weatherResults: response.data,
                    weather: true,
                },
                () => console.log(this.state)
                );
                // console.log(response)
                // console.log(this.state)
            })
        } catch (e) {
            console.log(e)
            this.setState({ error: e })
        }
    }

    
    handleMovies = async () => {
        try {
            let request = {
                url: `https://city-explorer-api-wvcd.onrender.com/movies?query=${this.props.state.targetValue}`,
                method: 'GET'
            }
            axios(request).then(response => {
                this.setState({
                    movieObjects: response.data,
                    movies: true,
                },
                () => console.log(this.state)
                );
            });
        } catch (e) {
            console.log(e)
            this.setState({ error: e })
        }
    }
    
    hideModal = () => {
        this.setState({
            weather: false,
            movies: false
        })
    }

    render() {
        // console.log(this.props.state)
        return (
            <Container fluid='xl' style={{marginTop: 100}}>
                <main>
                    
                    <Row>
                        <Col md={6} lg={4}>
                            <>
                                <Card className="text-center" style={{ width: '18rem', height: '32rem' }}>
                                    <Card.Header style={{ height: '5rem' }}>{this.props.display_name}</Card.Header>
                                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${this.props.lat},${this.props.lon}&zoom=13&size=250x250`} />
                                    <Card.Body>
                                        {/* <Card.Title>{item.display_name}</Card.Title> */}
                                        <Card.Text>
                                            Lat: {this.props.lat}
                                        </Card.Text>
                                        <Card.Text>
                                            Lon: {this.props.lon}
                                        </Card.Text>
                                        <Button onClick={this.handleWeather} style={{ marginRight: 30 }} variant="primary">Weather</Button>
                                        <Button onClick={this.handleMovies} variant="primary">Movies</Button>
                                    </Card.Body>
                                </Card>
                                {this.state.weather ? <Weather weather={this.state.weatherResults} weatherStatus={this.state.weather} hideModal={this.hideModal}/> : null}
                                {this.state.movies ? <Movies movies={this.state.movieObjects} movieStatus={this.state.movies} hideModal={this.hideModal}/> : null}
                                <br></br>
                            </>
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Main