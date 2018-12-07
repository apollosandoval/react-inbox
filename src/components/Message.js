import React from 'react';

class Message extends React.Component {
    
    handleClick = (key) => {
        this.props.toggleSelect(this.props.message, key);
    }

    render() {
        let {message} = this.props;

        return (
            <div className={`row message unread ${message.selected ? 'selected' : ''}`}>
                <div className="col-xs-1">
                    <div className="row">
                        {/* checkbox input */}
                        <div className="col-xs-2">
                            <input type="checkbox" onClick={() => this.handleClick('selected')} />
                        </div>
                        <div className="col-xs-2">
                            <i className={`star fa ${message.starred ? 'fa-star' : 'fa-star-o'}`} onClick={() => this.handleClick('starred')}></i>
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