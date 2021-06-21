import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e => {
        //console.log({ value = e.target.value });
        console.log({ 
            name: e.target.name,
            value: e.target.value,
            
        });
    };

    handleClick = e => {
        //console.log({ value = e.target.value });
        console.log("botton was change");
    };

    handleSubmit = e => {
        e.preventDefault();
    };


    render()  {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="">
                        <label>First Name</label>
                        <input onChange={this.handleChange}  className="form-control" type="text" name="firstname"></input>
                    </div>
                    <br></br>
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;