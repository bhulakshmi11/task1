import React from 'react';
import ReactDOM from 'react-dom';
export default class DynamicForm extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit = (s) => {
        s.preventDefault();
        // s.stopPropagation();
        // s.nativeEvent.stopImmediatePropagation();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }
    onChange = (s, key) => {
        this.setState({
            [key]: this[key].value
        })
    }

    renderForm = () => {
        
        let model = this.props.model;
        let formUI = model.map((m) => {
           
            let key = m.key;
            let type = m.type || "text";
            let props = m.props || {};
            return(
                <div key={key} className="form-group">
                <span className="form-label"
                key={"l" + m.key}
                htmlFor={m.key}>
                {m.label}
                </span>
                <input {...props}
                ref={(key)=>{this[m.key]=key}}
                className="form-input"
                key={"i" + m.key}
                onChange={(s)=>{this.onChange(s, key)}}
                />
                </div>
            );
        });
        return formUI;
    }
    render () {
        return(
            
            <div className={this.props.className}>
             <button className="contentpage" onClick={() => document.getElementById('id01').style.display = 'block'}><i class="fa fa-plus-circle"></i></button>
            <div id="id01" className="modal">
            <form className="dynamic-form" onSubmit={(s)=>{this.onSubmit(s)}}>
            <img className="user2" src={require('./user1.svg')}></img>
            <span onClick={() => document.getElementById('id01').style.display = 'none'} class="close" title="Close Modal">&times;</span>
            {this.renderForm()}
            <div className="form-group">
            <button onClick={() => document.getElementById('id01').style.display = 'none'} className="cancel">Cancel</button><button onClick={() => document.getElementById('id01').style.display = 'none'} type="submit" className="adduser">Add user</button>
           
            </div>
            </form>
            </div>
            </div>
        )
    }
}
