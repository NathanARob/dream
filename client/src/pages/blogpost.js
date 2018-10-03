import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
//import FullPagePost from '../components/fullPagePost/FullPagePost';
import Footer from '../components/footer/FooterSection';
import './blogpost.css';

class BlogPage extends Component{
    constructor(props){
        super(props)
        this.state={
            post:[]
        }
    }

    componentWillMount(){
        let url = 'http://localhost/dreamcapture/';
        let postid = this.props.match.params.postid;


        fetch(`${url}wp-json/wp/v2/posts/${postid}?_embed`)
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                post: data
            })
        });

    }

    render(){

        console.log(this.props.match.params.postid);

        return(
            <React.Fragment>
                <HeaderSection/>
                    { this.state.post._embedded != undefined ?  
                    <div>
                        <img class='postImage' src={this.state.post._embedded['wp:featuredmedia'][0].source_url} alt=''/> 
                        <div class='fullPagePostContent'>
                            <h1>{this.state.post.title.rendered}</h1>
                            <p>{this.state.post.content.rendered}</p>    
                        </div>
                    </div>
                    
                         
                    
                    
                    
                    
                    
                    : null}
        
                          
                        
                    
                    
                <Footer/>
            </React.Fragment>
        );
        
        
    }

}



export default BlogPage;