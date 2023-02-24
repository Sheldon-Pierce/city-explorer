import React from "react";
import Table from 'react-bootstrap/Table';
import WeatherDay from "./weatherDay";


class Weather extends React.Component {

    render() {
        console.log(this.props.weather)
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.weather.weatherResults.map((item, i) => {
                        return (
                            <WeatherDay 
                                i = {i}
                                item = {item}
                            /> 
                    )}
                )}
                    </tbody>
                </Table>
            </>
        )
    }
}


export default Weather