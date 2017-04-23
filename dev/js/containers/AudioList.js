import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Rating from 'react-rating'

import { v4 } from 'node-uuid'

import {loadAudioList} from '../actions/loadAudioList'
import {logOut} from '../actions/logOut'

class AudioList extends Component {
    constructor(props){
        super(props);
        
    }
    
    componentDidMount(){
        this.props.loadAudioList();
    }

    getDateFromString(string){
        let d = new Date(string);
        return d.toJSON().slice(0,10).split('-').reverse().join('/');
    }

    render() {
        
        let audioList = this.props.audioList.map((item)=> {
            return <li key={ v4() }>
                <span className="itemData">{item.final_script}</span>
                <span className="rateTime">
                    <Rating
                        initialRate={item.rating}
                        readonly
                        empty="fa fa-star-o orange"
                        full="fa fa-star orange"
                    />
                <span className="itemData"><i className="fa fa-clock-o" aria-hidden="true"></i>{Math.round((item.duration/60)) + " min"}</span>
                </span>
                <audio src={item.url} controls></audio>
                <span className="itemData"><i className="fa fa-calendar-o" aria-hidden="true"></i>{this.getDateFromString(item.created)}</span>
            </li>
        })
        return (
            <div className="audioList">
                <button onClick={this.props.logOut} className="logOut">LOG OUT</button>
                <h1>Audio List:</h1>
                {audioList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        audioList: state.audioList
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        loadAudioList,
        logOut
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(AudioList);




