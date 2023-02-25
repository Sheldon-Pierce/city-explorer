import React from "react";

class OneMovie extends React.Component {
    render() {
        // console.log(this.props.item.image_url)
        console.log(this.props.item)
        return (
            <>
                <h3>{`${this.props.item.title}`}</h3>
                <p>{`${this.props.item.overview}`}</p>
                <p>{`${this.props.item.vote_average}`}</p>
                <p>{`${this.props.item.vote_count}`}</p>
                <p>{`${this.props.item.popularity}`}</p>
                <p>{`${this.props.item.release_date}`}</p>
            </>
        )

    }
}

export default OneMovie