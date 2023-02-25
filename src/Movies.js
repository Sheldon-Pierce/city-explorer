import React from "react";
import OneMovie from "./oneMovie";


class Movies extends React.Component {

    render() {
        return (
            <>
                {this.props.movies.map((item, i) => {
                    return (
                        <OneMovie
                            i={i}
                            item={item}
                        />
                    )
                })}

            </>
        )
    }
}

export default Movies