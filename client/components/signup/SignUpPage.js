import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux'
import { userSignUpRequest } from '../../actions/signUpActions';

class SignUpPage extends React.Component {


    render(){

        const { userSignUpRequest } = this.props;

        return(
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <SignUpForm userSignUpRequest={userSignUpRequest}/>
                    </div>
                </div>
            </div>
        );
    }

}

SignUpPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
};

export default connect(null, {userSignUpRequest})(SignUpPage);