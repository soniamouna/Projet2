import React from 'react';
import Cards from '../cards/Cards';
import { Row, Col } from 'react-bootstrap';

function CardGroup(props) {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {/** {Array.from({ length: 4 }).map((_, idx) => (*/}
                    <Col>
                        <Cards/>
                    </Col>
                {/* ))} */}
                </Row>
        </div>
    );
}

export default CardGroup;