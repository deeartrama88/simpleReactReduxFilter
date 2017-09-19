import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

require('../../less/style.less');
require('../../less/media.less');

import Header from '../components/header';
import Footer from '../components/footer';
import CommentsFilter from './filters/commentsFilter';
import ScoreFilter from './filters/scoreFilter';
import Gallery from './gallery';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                    <div className="container main">
                        <CommentsFilter/>
                        <ScoreFilter/>
                        <div className="gallery">
                            <div className="preloader"
                                 style={{display: this.props.preloaders.galleryPreloader ? 'flex' : 'none'}}>
                                <img src="../assets/preloader-blue.gif"/>
                            </div>
                            <Gallery/>
                        </div>
                        {this.props.children}
                    </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        preloaders: state.preloaders
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Main);