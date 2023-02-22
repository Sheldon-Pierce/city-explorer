import React from "react";


class Weather extends React.Component {

    render() {
        return (
            <>
                {this.props.weather.weatherResults.map(item => {
                    return (
                    <>
                    <p>{item.date}</p>
                    <p>{item.description}</p>
                    </>
            )})}
            
            </>
        )
    }
}

export default Weather