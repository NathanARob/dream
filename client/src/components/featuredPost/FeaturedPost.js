import React, { Component } from 'react';





class FeaturedPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            featuredpost:''
        }
    }

    componentWillMount(){

        
        fetch('/api/featuredpost')
        .then((res)=>res.json())
        .then((data)=>{
            
            this.setState({
                featuredpost: data,
            })
        });
        
    }


        render(){
            return(
                <div id='featuredPost'>
                                
                                <img id='featuredPostImage' src='https://images.unsplash.com/photo-1530772174022-b8e60924414d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c474070258c78d22086b43f99ccfebb8&auto=format&fit=crop&w=1225&q=80'/>
                                
                                <div id='featuredPostText'>
                                    <span id='featuredPostTitle'>Featured Title</span>
                                    <p id='featuredPostExcerpt'>Cras id urna eget diam vulputate hendrerit. Nulla facilisi. Curabitur sit amet ultricies ipsum. Mauris imperdiet velit ac nunc pharetra rhoncus. Ut ut nisi ut neque malesuada elementum. Fusce viverra vestibulum volutpat. Etiam nec rhoncus tortor, vel luctus quam.</p>        
                                    <div>
                                        <span id='readFeatured'>Read Full Post ></span>   
                                    </div>          
                                </div>
                        </div>
            );
        }



}

export default FeaturedPost;