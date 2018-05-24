import React from 'react';
import { connect } from 'react-redux';
import {Image, Carousel,Row, Col, PageHeader } from 'react-bootstrap';
import API from "../Api"


class Property extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            advertisement:"",
            property:"",
            photos:[]
        }
        


    }

    componentDidMount() {
        window.addEventListener('load', this.getProperty());
     }


    getProperty(){
        API.get(`advertisement/${this.props.location.query.id}`)
        .then(response =>{
            const advertisement = response.data.data;
            const property = response.data.data.property;
            const photos = response.data.data.photos;
            this.setState({advertisement})
            this.setState({property})
            this.setState({photos})
            console.log(this.state.advertisement);
        })
        .catch(error => {
            console.log(error);
            alert(error.response);       
        })
    }


    render(){
        console.log(this.state.photos)
        return(
            <Row>
                <PageHeader>Property id:{this.props.location.query.id}</PageHeader>
                <Row>
                    <Col>
                      <Carousel>
                        {
                            this.state.photos.map((photo)=>{
                                return(
                                    <Carousel.Item>
                                    <Image responsive src={photo.url} />
                                    <Carousel.Caption>
                                        <h3>hehe</h3>
                                        <p>haha</p>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                      </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <p> {this.state.advertisement.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{this.state.property.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={6}>
                        <p>Price: {this.state.advertisement.price} $</p>
                    </Col>
                    <Col md={6} xs={6}>
                        <p>Type: {this.state.advertisement.type}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                        <p>City: {this.state.property.country}</p>
                        <p>country: {this.state.property.city}</p>
                        <p>created_at: {this.state.property.created_at}</p>
                        <p>date_of_construction: {this.state.property.date_of_construction}</p>
                        <p>date_of_registration: {this.state.property.date_of_registration}</p>
                        <p>floor: {this.state.property.floor}</p>
                        <p>garage: {this.state.property.garage}</p>
                        <p>land_area: {this.state.property.land_area}</p>
                        <p>number_of_floors: {this.state.property.number_of_floors}</p>
                        <p>number_of_rooms: {this.state.property.number_of_rooms}</p>
                        <p>postal_code: {this.state.property.postal_code}</p>
                        <p>property_area: {this.state.property.property_area}</p>
                        <p>property_type: {this.state.property.property_type}</p>
                        <p>street: {this.state.property.street}</p>
                        <p>street_number: {this.state.property.street_number}</p>
                    
                    </Col>
                    <Col md={6} xs={10}></Col>
                
                </Row>
                <Row>
                    <Col md={4} xs={10}><p>Date of announcement: {this.state.advertisement.date_of_announcement}</p></Col>
                    <Col md={4} xs={10}><p>Created at: {this.state.advertisement.created_at}</p></Col>
                    <Col md={4} xs={10}><p>Updated at: {this.state.advertisement.updated_at}</p></Col>
                </Row>
            </Row>
        )
    }

};

function mapStateToProps(state) {
    return {
      auth: state
    };
  }
  export default connect(mapStateToProps )(Property);
