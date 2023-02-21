import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const API_TOKEN = process.env.REACT_APP_Local_Key_Token;

class Main extends React.Component {


    render() {
        console.log(this.props.state)
        return (
            <Container fluid='xl'>
                <main>
                    <Row>
                        {this.props.state.results.map(item => (
                            <Col md={6} lg={4}>
                            <>
                                <h3 style={{ marginTop: 60 }}>{item.display_name}</h3>
                                <p>{item.lat}</p>
                                <p>{item.lon}</p>
                                <img alt={'img'} src={`https://maps.locationiq.com/v3/staticmap?key=${API_TOKEN}&center=${item.lat},${item.lon}&zoom=13&size=200x200`}></img>
                            </>
                            </Col>
                        ))}
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Main