import React, { Component } from 'react';
import HeaderSection from '../components/header/HeaderSection';
//import FullPagePost from '../components/fullPagePost/FullPagePost';
import Footer from '../components/footer/FooterSection';
// import './blogpost.css';

class BlogPage extends Component{
    constructor(props){
        super(props)
        this.state={
            post:[]
        }
    }

    componentWillMount(){
        let url = 'https://dream-admin.dreamcapture.co.za/';
        let postid = this.props.match.params.postid;


        fetch(`${url}wp-json/wp/v2/posts/${postid}?_embed`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            this.setState({
                post: data
            })
        });


    }

    createMarkup() { return {__html: this.state.post.content.rendered}; };

    

    render(){


        return(
            <React.Fragment>
                <HeaderSection/>
                { this.state.post._embedded != undefined ? 
                    <div style={blogPostPage.container}> 
                     <div className='blogPostPageContainer' style={blogPostPage.blogPostPageContainer}>
                        <div className='postImageContainer' style={blogPostPage.postImageContainer}>
                            <img style={blogPostPage.image} className='postImage' src={this.state.post._embedded['wp:featuredmedia'][0].source_url} alt=''/>
                        </div>
                        <h1 className='heading' style={{color:'#8b5382'}}>{this.state.post.title.rendered}</h1>
                        <div style={blogPostPage.main} dangerouslySetInnerHTML={this.createMarkup()}/>
                        <br/>
                        <a className='backButton' href='/#blogPostList' alt='Back Home'>Back</a>
                    </div>
                    </div>
                 
                    : null}
                    
                <Footer/>
            </React.Fragment>
        );
        
        
    }

}

const blogPostPage ={
    container:{
        display:'flex',
        width:'100%',
        justifyContent:'center',
        marginTop:'40px',
        marginBottom:'90px'
    },
    blogPostPageContainer:{
        width:'60%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white',
        paddingLeft:'10px',
        paddingRight:'10px',
        paddingTop:'180px'
        
        
    },
    postImageContainer:{
        width:'100%',
    },
    main:{
        lineHeight:'1.7',
        textAlign:'left',
        paddingBottom:'50px',
        fontFamily:'Roboto',
        paddingLeft:'10px',
        paddingRight:'10px'

    },
    image:{
        maxWidth:'100%',
        maxHeight:'100%'
    }
}

export default BlogPage;