import React from 'react';
import { connect } from 'react-redux';
import {Table, Image, Carousel,Row, Col, PageHeader } from 'react-bootstrap';
import API from "../Api"


class Property extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            advertisement:{},
            property:{},
            user:{},
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
            const user = response.data.data.user;
            this.setState({advertisement})
            this.setState({property})
            this.setState({photos})
            this.setState({user})
            console.log(this.state.advertisement);
        })
        .catch(error => {
            console.log(error);
   
        })
    }


    render(){
        console.log(this.state.photos)
        return(
            <Row>
                <PageHeader>Property id:{this.props.location.query.id}</PageHeader>
                <Row>
                <Col>
                   <h3> {this.state.advertisement.description}</h3>
                </Col>
                </Row>
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
                        <p>{this.state.property.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}  xs={6}>
                        <p>Price: {this.state.advertisement.price} $</p>
                    </Col>
                    <Col md={6} xs={6}>
                        <p>Type: {this.state.advertisement.type}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={10}>
                    <Table hover responsive>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Country</td>
                                <td>{this.state.property.country}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{this.state.property.city}</td>
                            </tr>
                            <tr>
                                <td>Postal code</td>
                                <td>{this.state.property.postal_code}</td>
                            </tr>
                            <tr>
                                <td>Steet</td>
                                <td>{this.state.property.street}</td>
                            </tr>
                            <tr>
                                <td>Street number</td>
                                <td>{this.state.property.street_number}</td>
                            </tr>
                            <tr>
                                <td>Date of construction</td>
                                <td>{this.state.property.date_of_construction}</td>
                            </tr>
                            <tr>
                                <td>Date of registration</td>
                                <td>{this.state.property.date_of_registration}</td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td>{this.state.property.floor}</td>
                            </tr>
                            <tr>
                                <td>Farage</td>
                                <td>{this.state.property.garage}</td>
                            </tr>
                            <tr>
                                <td>Land area</td>
                                <td>{this.state.property.land_area}</td>
                            </tr>
                            <tr>
                                <td>Number of rooms</td>
                                <td>{this.state.property.number_of_rooms}</td>
                            </tr>
                            <tr>
                                <td>Property area</td>
                                <td>{this.state.property.property_area}</td>
                            </tr>
                            <tr>
                                <td>Property type</td>
                                <td>{this.state.property.property_type}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                    <Col md={6} xs={10}>
                        <h3>Owner</h3>
                        <p>{this.state.user.name}</p>
                        <p>{this.state.user.email}</p>
                        
                    </Col>
                
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
