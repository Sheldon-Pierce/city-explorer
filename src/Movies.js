import React from "react";
import Table from 'react-bootstrap/Table';
import OneMovie from "./oneMovie";


class Movies extends React.Component {

    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>overview</th>
                            <th>average_votes</th>
                            <th>total_votes</th>
                            <th>image_url</th>
                            <th>popularity</th>
                            <th>released_on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.movieObjects.map((item, i) => {
                            return (
                                <OneMovie 
                                i = {i}
                                item = {item}
                                />
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Movies