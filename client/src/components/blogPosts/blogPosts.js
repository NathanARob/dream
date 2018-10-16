import React, { Component } from 'react';
import './blogposts.css';


class BlogPostsList extends Component{
    constructor(props){
        super(props);
        this.state={
            posts: []
        }
        
    }

    componentWillMount(){

        fetch('/api/fetch3posts')
        .then((res)=>res.json())
        .then((data)=>{
            
            this.setState({
                posts: data,
            })
        });
    }

   
    render(){
        

        return(
            <div id='blogPostsList'>
                
                <div id='blogPosts'>
                    {this.state.posts.map((item)=>{
                        let viewURL = './posts/' + item.id;
                        
                        function createMarkup() { return {__html: item.content.rendered}; };

                        
                        return( 
                            <div class='post'>
                                {<img class='postImage' src={item._embedded['wp:featuredmedia'][0].source_url} alt=''/>}
                                <h2 id={item.id} style={{fontSize:'2.5em'}} class='postTitle heading'>{item.title.rendered}</h2>                                
                                    {/* <p class='postBody'>{item.excerpt.rendered}</p> */}
                                    <div class='postBody' dangerouslySetInnerHTML={createMarkup()}/>
                                <br/>
                                <div class='viewPostLink'> 
                                    
                                    <a href={viewURL} alt=''>View Post</a>
                                </div>
                                
                            </div>
                    )})}
                
                </div>
            </div>

        )
    }
}



export default BlogPostsList;