import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from "react-native";
import './fd-list.styles.scss';

class ChildrenList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            children:[]
        };
        this.getChildrenList()
    }

    getChildrenList(){
        const url = 'http://127.0.0.1:5000//children/list';
        axios.get(url,{
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
                <View key={this.state.children[i][0]}>
                    <Text> Name: {this.state.children[i][1]} </Text>
                    <Text> Sex: {this.state.children[i][2]} </Text>
                    <Text> Introduction: {this.state.children[i][4]} </Text>
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

export default ChildrenList
