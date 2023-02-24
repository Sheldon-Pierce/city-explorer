import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import axios from 'axios';
import Weather from "./Weather";
import Movies from "./Movies";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;


class Main extends React.Component {

    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true);

    constructor(props) {
        super(props);
        this.state = {
            weatherResults: [],
            setShow: false,
            weather: false,
            location: false,
            movies: false,
            i: 0
        }
    }


    render() {
        // console.log(this.props.state)
        return (
            <Container fluid='xl'>
                <main>
                    <Row>
                        {this.props.state.results.map((item, i) => (
                            
                            <Col md={6} lg={4}>
                                <>
                                    <h3 style={{ marginTop: 60 }}>{item.display_name}</h3>
                                    <img alt={'img'} src={`https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${item.lat},${item.lon}&zoom=13&size=250x250`}></img>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            City Info
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ display: "table-column" }}>
                                            <Dropdown.Item>
                                                <Button variant="primary" onClick={() => this.setState({ setShow: true, location: true })}>
                                                    Location Info
                                                </Button>

                                                <Modal centered show={this.state.location} onHide={() => this.setState({ setShow: false, location: false })}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title> Location Data </Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                         {`The latitude of ${this.props.state.targetValue} is ${this.props.state.results[0].lat} and the longitude is ${this.props.state.results[0].lon}`}
                                                         </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => this.setState({ setShow: false, location: false })}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => this.setState({ setShow: false, location: false })}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Button variant="primary" onClick={() => this.setState({ setShow: true, weather: true })}>
                                                    Weather Forcast
                                                </Button>

                                                <Modal centered show={this.state.weather} onHide={() => this.setState({ setShow: false, weather: false })}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>16 Day Weather Info</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>{<Weather weather={this.props.state.weatherResults[i]}/>}</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => this.setState({ setShow: false, weather: false })}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => this.setState({ setShow: false, weather: false })}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Button variant="primary" onClick={() => this.setState({ setShow: true, movies: true })}>
                                                    Movies
                                                </Button>

                                                <Modal size='xl' centered show={this.state.movies} onHide={() => this.setState({ setShow: false, movies:false })}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Movies</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>{<Movies movies={this.props.state}/>}</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={() => this.setState({ setShow: false, movies:false })}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={() => this.setState({ setShow: false, movies:false })}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <br></br>
                                    {/* {this.state.weatherResults ? <Weather weather={this.props.state} /> : <p>no info</p>} */}
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