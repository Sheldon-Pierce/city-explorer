import React from "react";
import OneMovie from "./oneMovie";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Movies extends React.Component {

    render() {
        return (
            <>
                <Modal
                    show={this.props.movieStatus}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            20 Movies
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {this.props.movies.map((item, i) => {
                                return (
                                    <Carousel.Item key={i}
                                    >
                                        <img
                                            alt={item.id}
                                            src={`https://image.tmdb.org/t/p/w500/${item.image_url}`}
                                            style={{opacity: '90%'}}
                                        />
                                        <Carousel.Caption style={{backgroundColor: 'black', opacity: '90%'}}>
                                            <OneMovie
                                                i={i}
                                                item={item}
                                            />
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>


        )
    }
}

export default Movies