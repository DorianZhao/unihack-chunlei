import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from "react-native";
import './feed-list.styles.scss';
import { userId } from '../../sign-in/sign-in.component';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class FeedList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          sponsor:userId,
            children:[]
        };
        this.getChildrenList()
    }

    getChildrenList(){
        const url = 'http://127.0.0.1:5000//children/info';
        axios.get(url,{
          params: {
              sponsor_id: this.state.sponsor
          },
        }).then((response) => {
          console.log(response)
            this.setState({
                children: response['data']['results']
            })
        }).catch(error => {
            console.log('Get children list', error);
        });
    };

    /*
    renderChildren(){
      //helper function for rendering the products result
        let children = []
        for(let i = 0; i < this.state.children.length; i++){
            children.push(
                <View key={this.state.children[i][0]}>
                    <Text> Name: {this.state.children[i][1]} </Text>
                    <Text> Sex: {this.state.children[i][2]} </Text>
                    <Text> Introduction: {this.state.children[i][4]} </Text>
                </View>
            )
        }
        return children
    }
    */

    render(){
        return(
        <div>
            <Carousel
            responsive={responsive}
            showDots
            infinite={true}
            autoPlay={true}
            containerClass="carousel-container"
            >
            {this.state.children.map((post, indx) => {
                return (
                <div className="card" key={indx}>
                    <img
                    style={{ width: '100%', height: '100%'}}
                    src={post[3]}
                    alt="Alt text"
                    />
                    <div className="card-body">
                        <p className="card-name">?????????{post[1]}</p>
                        <p className="card-sex">?????????{post[2]}</p>
                        <p className="card-introduction">???????????????{post[4]}</p>
                    </div>
                </div>
                );
            })}
            </Carousel>
        </div>
        );
    }
    /*
    render(){
        return(
            <View>
                {this.renderChildren()}
            </View>
        );
    }
    */
}

export default FeedList
