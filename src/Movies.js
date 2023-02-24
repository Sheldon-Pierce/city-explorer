import React from "react";
import Table from 'react-bootstrap/Table';


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
                            <tr key={i}>
                                <td>{`${item.title}`}</td>
                                <td>{`${item.overview}`}</td>
                                <td>{`${item.vote_average}`}</td>
                                <td>{`${item.vote_count}`}</td>
                                <td>{<img alt={item.id} src={`${item.image_url}`}></img>}</td>
                                <td>{`${item.popularity}`}</td>
                                <td>{`${item.release_date}`}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </>
        )
    }
}

export default Movies