import React from 'react';

class Toolbar extends React.Component {

    render() {
        let {messages, setReadStatus} = this.props;
        let selected = messages.filter(message => message.selected);
        let enabled = selected.length > 0;

        return (
            <div className="row toolbar">
                <div className="col-md-12">
                    {/* unread message badge */}
                    <p className="pull-right">
                        <span className="badge badge">2</span>
                        unread messages
                    </p>
                    {/* select all checkbox */}
                    <button className="btn btn-default">
                        <i className="fa fa-square-o"></i>
                    </button>
                    {/* Mark as read button */}
                    <div className="btn btn-default"  disabled={!enabled} onClick={() => setReadStatus(true)}>
                        Mark As Read
                    </div>
                    {/* Mark as unread button */}
                    <div className="btn btn-default" disabled={!enabled} onClick={() => setReadStatus(false)}>
                        Mark As Unread
                    </div>
                    {/* Apply label dropdown */}
                    <select className="form-control label-select" disabled={!enabled}>
                        <option>Apply Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Remove label dropdown */}
                    <select className="form-control label-select" disabled={!enabled}>
                        <option>Remove Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Trash Button */}
                    <button className="btn btn-default" disabled={!enabled}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbar;