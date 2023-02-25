import React from "react";
import OneMovie from "./oneMovie";
import Carousel from 'react-bootstrap/Carousel';


class Movies extends React.Component {

    render() {
        return (
            <>
                < Carousel >
                    {this.props.movies.movieObjects.map((item, i) => {
                        return (
                            <Carousel.Item key={i}
                            >
                                <img
                                    alt={item.id}
                                    src={`https://image.tmdb.org/t/p/w500/${item.image_url}`}
                                />
                                <Carousel.Caption>
                                    <OneMovie
                                        i={i}
                                        item={item}
                                    />
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </>
        )
    }
}

export default Movies