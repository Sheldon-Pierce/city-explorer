import React from "react";

class OneMovie extends React.Component {
    render() {
        return (
            <tr key={this.props.i}>
                <td>{`${this.props.item.title}`}</td>
                <td>{`${this.props.item.overview}`}</td>
                <td>{`${this.props.item.vote_average}`}</td>
                <td>{`${this.props.item.vote_count}`}</td>
                <td>{<img alt={this.props.item.id} src={`${this.props.item.image_url}`}></img>}</td>
                <td>{`${this.props.item.popularity}`}</td>
                <td>{`${this.props.item.release_date}`}</td>
            </tr>
        )
    }
}

export default OneMovie