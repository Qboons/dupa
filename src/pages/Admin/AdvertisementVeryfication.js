import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

import API from "../../Api"

class AdvertisementVeryfication extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            advertisements: []
        }
    }

    componentDidMount(){
        window.addEventListener('load', this.getAdvertisements());
    }

 

    changeStatus(id){
        console.log(id);
        let status = {"status": 3 };
        API.post(`admin/${id}/verificate`, status)
        .then(response =>{
            console.log(response);
            this.getAdvertisements();
        })
        .catch(error => {
            console.log(error);
        })
        
    }
    getAdvertisements(){
        API.get(`admin/verification`)
        .then(response =>{
            const advertisements = response.data.data;
            this.setState({ advertisements });
            console.log(response);
        })
    }

    

    render(){
        return(
            
            <div className="row">
                <h1>advertisements verification</h1>
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date of announcement</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Edit Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                {
                    this.state.advertisements.map(advert =>{
                        return(
                            <tr key={advert.id}>
                                <td>{advert.id}</td>
                                <td>{advert.type}</td>
                                <td>{advert.description}</td>
                                <td>{advert.date_of_announcement}</td>
                                <td>{advert.price}</td>
                                <td>{advert.status}</td>
                                <td><Button className="btn btn-success" onClick={() => this.changeStatus(advert.id)}>Edit</Button></td>
                            </tr> 
                            
                        )
                    })
                }
                    </tbody> 
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state
    };
}
export default connect(mapStateToProps)(AdvertisementVeryfication);