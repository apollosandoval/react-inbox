import React from 'react';

class Toolbar extends React.Component {

    render() {
        

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
                    <div className="btn btn-default" disabled="disabled">
                        Mark As Read
                    </div>
                    {/* Mark as unread button */}
                    <div className="btn btn-default" disabled="disabled">
                        Mark As Unread
                    </div>
                    {/* Apply label dropdown */}
                    <select className="form-control label-select" disabled="disabled">
                        <option>Apply Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Remove label dropdown */}
                    <select className="form-control label-select" disabled="disabled">
                        <option>Remove Label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    {/* Trash Button */}
                    <button className="btn btn-default" disabled="disabled">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbar;