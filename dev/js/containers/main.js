import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Login from '../containers/login'
import AudioList from '../containers/AudioList'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Content = this.props.auth.logged ? AudioList : Login;
        return (
            <div className="container">
                <Content />
                {this.props.children}
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Main);