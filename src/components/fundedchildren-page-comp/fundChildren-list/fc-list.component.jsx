import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, Button } from "react-native";
import './fc-list.styles.scss';
import { userId } from '../../sign-in/sign-in.component';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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

    /*
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
    */

    render(){
        return(
            <div>
            <VerticalTimeline>
            {this.state.children.map((post, indx) => {
                return (
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={post[3]}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <div className="card" key={indx}>
                    <img
                    style={{ width: '100%', height: '100%'}}
                    src={post[5]}
                    alt="Alt text"
                    />
                    <div className="card-body">
                        <p className="card-name">姓名：{post[7]}</p>
                        <p className="card-sex">内容：{post[4]}</p>
                    </div>
                </div>
                </VerticalTimelineElement>
                )
            })
            }
            </VerticalTimeline>
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

export default FcList
