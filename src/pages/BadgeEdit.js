import React from 'react';

import ella from '../images/so.png'
import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import BadgeForm from '../components/BadgeForm.js'
import Badge from '../components/Badge';
import api from '../api';
import PageLoading from '../components/PageLoading';

class BadgeEdit extends React.Component{

    state = { 
        loading: true,
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

    componentDidMount() {
        this.fetchData()


    }

    fetchData = async e => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, form: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }
    
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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt=""></img>
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
                        <h1>Edit Attendant</h1>
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
export default BadgeEdit