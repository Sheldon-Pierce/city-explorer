import React from "react";
import Table from 'react-bootstrap/Table';


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
                            <tr key={i}>
                                <td><p>{`${item.date}`}</p></td>
                                <td>{`Low of ${item.min_temp}, high of ${item.max_temp} with ${item.description}`}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Weather