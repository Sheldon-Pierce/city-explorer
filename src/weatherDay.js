import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class WeatherDay extends React.Component {
    render() {
        console.log(this.props.weather)
        return (
            <CardGroup>
                {this.props.weather.map((item) => {
                    return <Card border="info" style={{width: '20rem'}}>
                        <Card.Header>
                            {item.date}
                        </Card.Header>
                        <Card.Body>
                        <Card.Img variant="top" src={`https://www.weatherbit.io/static/img/icons/${item.image}.png`} />
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Low Temp: {item.min_temp}
                            <br></br>
                            High Temp: {item.max_temp}
                        </Card.Footer>
                    </Card>
                })}
            </CardGroup>
        )

    }
}

export default WeatherDay