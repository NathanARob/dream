import React, { Component } from 'react';
import './shopCategory.css';

let url='http://localhost/dreamcapture';
let consumerKey = 'ck_e0c67cf1b85264384c98aa99648f458c0265d761';
let consumerSecret = 'cs_7d83d8696cf970b61080e5ad618c7fc3553607b5';

class ShopByCategory extends Component{

    componentDidMount(){
     
    }

    render(){
        
            return (
                <div id='shopCategoryContainer'>
                <h2>Crafty Products</h2>
                    <div id='shopCategories'>

                        <div class='shopCategory'>
                            <div class='categoryTitle'><img src='https://scontent.fjnb8-1.fna.fbcdn.net/v/t1.0-9/41991252_231408457556302_1148990424120033280_n.png?_nc_cat=111&oh=f000117fdde5de8c273c13902187151c&oe=5C21B34F'/></div>
                            <button class='viewButton'><span>String Art</span></button>
                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'><img src='https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3266b0be05881623a90416143ff6aae&auto=format&fit=crop&w=1050&q=80'/></div>
                            <button class='viewButton'><span>Decor</span></button>
                        </div>

                        <div class='shopCategory'>
                            <div class='categoryTitle'><img src='https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=773e36902aa70269e1c1cdb6c49f8d22&auto=format&fit=crop&w=1050&q=80'/></div>
                            <button class='viewButton'><span>Clothing</span></button>
                        </div>
                    
                    </div>            
                </div>
            );
    }
}



export default ShopByCategory;