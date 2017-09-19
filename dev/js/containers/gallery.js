import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getGallery} from "../actions/getGallery";

class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getGallery();
    }

    render() {
        const gallery = this.props.gallery.filtered.map(item => {
           return (
               <div className="galleryItem" key={item.data.id}>
                   <img src={item.data.thumbnail}/>
                   <h3> {item.data.name} </h3>
                   <div className="comments">
                       comments: <span className="green">{ item.data.num_comments }</span>
                   </div>
                   <a href={'https://www.reddit.com' + item.data.permalink} target="_blank">Link</a>
               </div>
           )
        });
        // item for no result
        const noResult = <div className="noResult">
            <h1> No Result according your filters</h1>
        </div>;
        // switch if filtered result is 0
        const result = gallery.length > 0 ? gallery : noResult;
        return (
            <div>
                <h1> Gallery</h1>
                <div className="galleryWrap">
                    { result }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gallery: state.gallery
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        getGallery
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Gallery);