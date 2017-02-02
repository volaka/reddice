import React from 'react';
import timezones from './../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signUp';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';

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

    //front end input control
    isValid() {
        const {errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors: {}, isLoading: true});
            this.props.userSignUpRequest(this.state).then(
                () => {
                    //action return
                    this.props.addFlashMessage({
                        type:'success',
                        text:'You signed up successfully.'
                    });
                    // browserHistory.push('/'); //if input is valid, redirect!
                    this.context.router.push('/');
                },
                ({ data }) => this.setState({ errors: data, isLoading: false })
            );
        }
    }
    render() {
        const options = map(timezones, (value, key) =>
            <option key={value} value={value}>{key}</option>
        );
        const { errors } = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Join Us</h1>

                <TextFieldGroup
                    onChange={this.onChange}
                    label={"Username"}
                    value={this.state.username}
                    name={"username"}
                    error={errors.username}
                />
                <TextFieldGroup
                    onChange={this.onChange}
                    label={"Email"}
                    value={this.state.email}
                    name={"email"}
                    error={errors.email}
                />
                <TextFieldGroup
                    type="password"
                    onChange={this.onChange}
                    label={"Password"}
                    value={this.state.password}
                    name={"password"}
                    error={errors.password}
                />
                <TextFieldGroup
                    type="password"
                    onChange={this.onChange}
                    label={"Password Confirmation"}
                    value={this.state.passwordConfirmation}
                    name={"passwordConfirmation"}
                    error={errors.passwordConfirmation}
                />
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
    userSignUpRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
};

SignUpForm.contextTypes= {
    router: React.PropTypes.object.isRequired
};

export default SignUpForm;