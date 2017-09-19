import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterByScore} from '../../actions/filterByScore';

class ScoreFilter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state= {inputValue: 0}
    }

    render() {
        return (
            <div className="filter">
                <h2> Top Score </h2>
                <input
                    defaultValue={0}
                    onChange={this.onChange}
                    max={this.props.filters.scoreFilter.max}
                    type="range"/>
                <div className="currentValue">
                    Current value: {this.state.inputValue}
                </div>
            </div>
        );

    }

    onChange(event) {
        this.setState({inputValue: event.target.value});
        this.props.filterByScore(event.target.value);
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        filterByScore
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(ScoreFilter);