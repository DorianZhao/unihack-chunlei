import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from "react-native";
import './feed-list.styles.scss';
import { userId } from '../../sign-in/sign-in.component';

class FeedList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            sponsor:userId,
            results:[]
        };
        this.getChildrenList()
    }

    getChildrenList(){
      console.log(userId);
        const url = 'http://127.0.0.1:5000//children/info';
        axios.get(url,{
          params: {
              sponsor_id: this.state.sponsor
          },
        }).then((response) => {
          console.log(response)
            this.setState({
                results: response['data']['results']
            })
        }).catch(error => {
            console.log('Get funded children list', error);
        });
    };

    renderChildren(){
      //helper function for rendering the products result
        let children = []
        for(let i = 0; i < this.state.results.length; i++){
            children.push(
                <View key={this.state.results[i][0]}>
                    <Text> Name: {this.state.results[i][1]} </Text>
                    <Text> Sex: {this.state.results[i][2]} </Text>
                    <Text> Introduction: {this.state.results[i][4]} </Text>
                </View>
            )
        }
        return children
    }

    render(){
        return(
            <View>
                {this.renderChildren()}
            </View>
        );
    }
}


export default FeedList
