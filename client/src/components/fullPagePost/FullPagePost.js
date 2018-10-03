import React, { Component } from 'react';
import './fullpagepost.css';

class FullPagePost extends Component{
    constructor(props){
        super(props)
        this.state = {
            post:[]
        }
    }

    componentWillMount(){
        const url = 'http://localhost/dreamcapture/';

        fetch(`${url}wp-json/wp/v2/posts/23?_embed`)
        .then((res)=>res.json())
        .then((data) => {
            this.setState({
                post: [data]
            })

        });
    }


    render(){
        return(
            <div id='fullPagePost'>
                {this.state.post.map((item)=>{
                    return(
                        <React.Fragment>
                        <img class='postImage' src={item._embedded['wp:featuredmedia'][0].source_url} alt=''/>
                        <div class='fullPagePostContent'>
                            <h1>{item.title.rendered}</h1>
                            <p>
                                {item.content.rendered}    

                            </p>       
                            <Page/>            

                        </div>
                        
                        </React.Fragment>
                    )

                })
            }


            </div>
        );
    }
}


``
export default FullPagePost;