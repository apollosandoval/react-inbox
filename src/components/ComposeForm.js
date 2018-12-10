import React from 'react';

class ComposeForm extends React.Component {
    state = {
        subject: '',
        body: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMessage(this.state);
    }

    render() {
        return (
            <form className="form-horizontal well" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h4>Compose Form</h4>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                    <div className="col-sm-8">
                        <textarea name="body" id="body" className="form-control" onChange={this.handleChange}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                        <button className="btn btn-primary">Send</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ComposeForm;