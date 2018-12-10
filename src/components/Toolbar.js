import React from 'react';

class Toolbar extends React.Component {

    render() {
        let {messages, setReadStatus, selectAll, setLabel, deleteMessage} = this.props;
        let selected = messages.filter(message => message.selected);
        let enabled = selected.length > 0;

        return (
            <div className="row toolbar">
                <div className="col-md-12">
                    {/* unread message badge */}
                    <p className="pull-right">
                        <span className="badge badge">{messages.filter(message=>message.read===false).length}</span>
                        unread messages
                    </p>
                    {/* Compose email button */}
                    <a className="btn btn-danger">
                        <i className="fa fa-plus"></i>
                    </a>
                    {/* select all checkbox */}
                    <button className="btn btn-default" onClick={() => selectAll(selected.length===messages.length ? false : true)}>
                        {/* !enabled means no messages are selected & selected.length === messages.length is all messages selected */}
                        <i className={`fa ${!enabled ? 'fa-square-o' : (selected.length < messages.length ? 'fa-minus-square-o' : 'fa-check-square-o') }`} ></i>
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
                    <select className="form-control label-select" disabled={!enabled} onChange={(e) => setLabel('addLabel', e.target.value)}>
                        <option>Apply Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Remove label dropdown */}
                    <select className="form-control label-select" disabled={!enabled} onChange={(e) => setLabel('removeLabel', e.target.value)}>
                        <option>Remove Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Trash Button */}
                    <button className="btn btn-default" disabled={!enabled} onClick={deleteMessage}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbar;