import React from 'react';

import ella from '../images/so.png'
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm.js'
import Badge from '../components/Badge'

class BadgeNew extends React.Component{
    state = { form: {
        firstname: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } }; //form es una propiedad, pero da igual el nombre puede ser cualquiera

    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""></img>
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstname}
                            lastName={this.state.form.lastName}
                            twitter={this.state.form.twitter}
                            jobTitle={this.state.form.jobTitle}
                            avatarUrl={ella}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};


// firstName="Ban" 
// lastName="Haru" 
// twitter="samdoesarts" 
// jobTitle="Concept Artist"
// avatarUrl={ella}
export default BadgeNew