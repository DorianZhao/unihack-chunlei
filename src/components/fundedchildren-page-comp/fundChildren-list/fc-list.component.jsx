import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from "react-native";
import './fc-list.styles.scss';
import { userId } from '../../sign-in/sign-in.component';

class FcList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            sponsor:userId,
            children:[]
        };
        this.getChildrenList()
    }

    getChildrenList(){
        const url = 'http://127.0.0.1:5000//children/update';
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

    renderChildren(){
      //helper function for rendering the products result
        let children = []
        for(let i = 0; i < this.state.children.length; i++){
            children.push(
                <View >
                    <Text> 名字: {this.state.children[i][7]} </Text>
                    <Text> 内容: {this.state.children[i][4]} </Text>
                    <Text> 照片: {this.state.children[i][5]} </Text>
                    <Text> 时间: {this.state.children[i][3]} </Text>
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

export default FcList
