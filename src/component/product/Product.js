import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTags } from '@fortawesome/free-solid-svg-icons'

// Font Awesome Icon For enroll user and price tag
const user = <FontAwesomeIcon icon={faUser} />
const coursePrice = <FontAwesomeIcon icon={faTags} />

const Product = (props) => {
    const { instructor_name, img, course_name, enrolled, price } = props.product
    const imgStyle = {
        height: "190px",
        width: "auto"
    }
    return (

        <div>
            {/* ================ Start Product Details =================  */}
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={imgStyle} />
                    <Card.Body>
                        <Card.Title>{course_name}</Card.Title>

                        <h6>BY : {instructor_name}</h6>
                        <div className="d-flex justify-content-between">
                            <h6>{user} : {enrolled}</h6>
                            <h6>{coursePrice} : {price} Taka</h6>
                        </div>

                    </Card.Body>
                </Card>
            </Col>
            {/* ================ End Product Details =================  */}
        </div>
    );
};

export default Product;