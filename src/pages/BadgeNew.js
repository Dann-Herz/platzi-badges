import React from 'react';

import ella from '../images/so.png'
import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm.js'
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeNew extends React.Component{

    state = { 
        loading: false,
        error: null,
        form: {
        id: '',
        firstName:'',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
        avatarUrl: '',
    } }; //form es una propiedad, pero da igual el nombre puede ser cualquiera

    
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading: true, error:null});

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error});
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt=""></img>
                </div>
                <div className="Container">
                    <div className="Container__register">
                        <div className="Container__register-Badge">
                            <Badge 
                            firstName={this.state.form.firstName || 'FIRST_NAME'}
                            lastName={this.state.form.lastName || 'LAST_NAME'}
                            twitter={this.state.form.twitter || 'TWITTER'}
                            jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'} 
                            avatarUrl={ella}
                            />
                        </div>
                        <div className="Container__register-BadgeForm">
                        <h1>New Attendant</h1>
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            email={this.state.form.email || 'EMAIL'} 
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                            
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