import React from 'react';
import ReactDOM from 'react-dom';

/*Two way binding helpers - Before Link*/

var NoLink = React.createClass({
  getInitialState: function() {
    return {message: 'Without using link!'};
  },
  handleChange: function(event) {
    this.setState({message: event.target.value});
  },
  render: function() {
    var message = this.state.message;
    return (<div>
                <input type="text" value={message} onChange={this.handleChange} />
                : {message}
            </div>
           );
  }
});

ReactDOM.render(<NoLink />, document.getElementById('noLink'));

/*Two way binding helpers - After Link*/

import LinkedStateMixin from 'react-addons-linked-state-mixin';
/*var LinkedStateMixin = require('react-addons-linked-state-mixin');*/

var WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Using link!'};
  },
  render: function() {
    return (<div>
                You can change the value of text box: <input type="text" valueLink={this.linkState('message')} />
                {this.state.message}
            </div>
            );
    }
});

ReactDOM.render(<WithLink />, document.getElementById('withLink'));
