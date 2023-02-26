import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WeatherDay from "./weatherDay";


class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        // console.log(this.props.weather)
        return (
            <>
                <Modal
                    show={this.props.weatherStatus}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            7 Day Weather Forecast
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WeatherDay weather={this.props.weather} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}


export default Weather