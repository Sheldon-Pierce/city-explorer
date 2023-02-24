import React from "react";

class WeatherDay extends React.Component {
    render() {
        // console.log(this.props.item)
        // return this.props.item.map((item, i) =>{
            // console.log('item in weatherDay comp', item);
            return (
                <tr>
                    <td><p>{`${this.props.item.date}`}</p></td>
                    <td>{`Low of ${this.props.item.min_temp}, high of ${this.props.item.max_temp} with ${this.props.item.description}`}</td>
                </tr>
            )

        }
}

export default WeatherDay