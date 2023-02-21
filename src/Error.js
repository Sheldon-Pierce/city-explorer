import React from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class Error extends React.Component {

    render() {
        return (
            <>
                <div style={{ marginTop: 100 }}>
                    <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        <br></br>{this.props.error.message}
                    </Button>
                </div>

            </>
        )
    }
}

export default Error