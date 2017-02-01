import React from 'react';
import timezones from './../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
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
        this.setState({errors: {}, isLoading: true});
        this.props.userSignUpRequest(this.state).then(
            () => {},
            ({ data }) => this.setState({ errors: data, isLoading: false })
        );
    }
    render() {
        const options = map(timezones, (value, key) =>
            <option key={value} value={value}>{key}</option>
        );
        const { errors } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join</h1>

                <div className={classnames("form-group", {'has-error': errors.username})}>
                    <label className="control-label">Username</label>
                    <input type="text" onChange={this.onChange} value={this.state.username} className="form-control" name="username"/>
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.email})}>
                    <label className="control-label">Email</label>
                    <input type="text" onChange={this.onChange} value={this.state.email} className="form-control" name="email"/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.password})}>
                    <label className="control-label">Password</label>
                    <input type="password" onChange={this.onChange} value={this.state.password} className="form-control" name="password"/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
                    <label className="control-label">Password Confirmation</label>
                    <input type="text" onChange={this.onChange} value={this.state.passwordConfirmation} className="form-control" name="passwordConfirmation"/>
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.timezone})}>
                    <label className="control-label">Timezone</label>
                    <select type="text" onChange={this.onChange} value={this.state.timezone} className="form-control" name="timezone">
                        <option value="" disabled> Choose your Timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up!</button>
                </div>
            </form>
        );
    }
}

SignUpForm.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
};

export default SignUpForm;