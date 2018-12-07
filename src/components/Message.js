import React from 'react';

class Message extends React.Component {
    
    handleClick = (e) => {
        this.props.toggleSelect(this.props.message)
    }

    render() {
        let {message} = this.props;

        return (
            <div className="row message unread">
                <div className="col-xs-1">
                    <div className="row">
                        {/* checkbox input */}
                        <div className="col-xs-2">
                            <input type="checkbox" onClick={this.handleClick} />
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                        {message.subject}
                    </a>
                </div>
            </div>
        )
    }
}

export default Message;