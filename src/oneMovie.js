import React from "react";

class OneMovie extends React.Component {
    render() {
        // console.log(this.props.item.image_url)
        // console.log(this.props.item)
        return (
            <>
                <h3>{`${this.props.item.title}`}</h3>
                <p id='cvalues'>{`Overview: ${this.props.item.overview}`}</p>
                <p id='cvalues'>{`Vote Average: ${this.props.item.vote_average}`}</p>
                <p id='cvalues'>{`Vote Count: ${this.props.item.vote_count}`}</p>
                <p id='cvalues'>{` Popularity: ${this.props.item.popularity}`}</p>
                <p id='cvalues'>{`Release Date: ${this.props.item.release_date}`}</p>
            </>
        )

    }
}

export default OneMovie