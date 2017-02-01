import React from 'react';
import timezones from './../../data/timezones';
import map from 'lodash/map';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignUpRequest(this.state);
    }
    render() {
        const options = map(timezones, (value, key) =>
            <option key={value} value={value}>{key}</option>
        );

        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" onChange={this.onChange} value={this.state.username} className="form-control" name="username"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="text" onChange={this.onChange} value={this.state.email} className="form-control" name="email"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" onChange={this.onChange} value={this.state.password} className="form-control" name="password"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input type="text" onChange={this.onChange} value={this.state.passwordConfirmation} className="form-control" name="passwordConfirmation"/>
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select type="text" onChange={this.onChange} value={this.state.timezone} className="form-control" name="timezone">
                        <option value="" disabled> Choose your Timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up!</button>
                </div>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
};

export default SignUpForm;