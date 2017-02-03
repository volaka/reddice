import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render () {
        const { id, type, text} = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error'
            })}>
                <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        );
    }
}

FlashMessage.propTypes = {
    deleteFlashMessage: React.PropTypes.func.isRequired,
    message: React.PropTypes.object.isRequired
};

export default FlashMessage;