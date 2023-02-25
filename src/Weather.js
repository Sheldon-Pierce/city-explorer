import React from "react";
import Table from 'react-bootstrap/Table';
import WeatherDay from "./weatherDay";


class Weather extends React.Component {

    render() {
        // console.log(this.props.weather)
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
                        {this.props.weather.map((weatherItem, i) => {
                            // console.log(weatherItem)
                            // console.log(item)
                            return <WeatherDay
                                item={weatherItem}
                                key={i}
                            //     date={item.date}
                            //     min_temp={item.min_temp}
                            //     max_temp={item.max_temp}
                            //     description={item.description}
                            />
                        })
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}


export default Weather