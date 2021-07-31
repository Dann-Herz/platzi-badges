import React from 'react';

class BadgeForm extends React.Component {
    //state = {//jobTitle: Designer
//};
    
    // handleChange = e => {
    //     // //console.log({ value = e.target.value });
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     value: e.target.value,
            
    //     // });
    //     this.setState({
    //         // firstName: e.target.value
    //         [e.target.name]: e.target.value,
    //     })
    // };

    handleClick = e => {
        //console.log({ value = e.target.value });
        console.log("botton was change");
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submited');
        console.log(this.state);
    };

    //se cambio this.handleChange en los inputs por this.props.onChange

    render()  {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="firstname"
                        value={this.props.formValues.firstname}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange}  
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                        onChange={this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange}  
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}
                        ></input>
                    </div>
                    <br></br>
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;