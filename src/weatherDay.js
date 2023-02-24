import React from "react";

class WeatherDay extends React.Component {
    render() {
        return (
                    <tr key={this.props.i}>
                        <td><p>{`${this.props.item.date}`}</p></td>
                        <td>{`Low of ${this.props.item.min_temp}, high of ${this.props.item.max_temp} with ${this.props.item.description}`}</td>
                    </tr>
                )
            }
        
    }


export default WeatherDay