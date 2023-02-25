import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class OneMovie extends React.Component {
    render() {
        console.log(this.props.item.image_url)

        return (
            < Carousel >
                <Carousel.Item
                    key={this.props.i}
                >
                    <img
                        alt={this.props.item.id}
                        src={`https://image.tmdb.org/t/p/w500/${this.props.item.image_url}`}
                    />
                    <Carousel.Caption>
                        <h3>{`${this.props.item.title}`}</h3>
                        <p>{`${this.props.item.overview}`}</p>
                        <p>{`${this.props.item.vote_average}`}</p>
                        <p>{`${this.props.item.vote_count}`}</p>
                        <p>{`${this.props.item.popularity}`}</p>
                        <p>{`${this.props.item.release_date}`}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel >
        )
    }
}

export default OneMovie