import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from "react-native-elements";
import api from '../../services/api';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.idMovie = props.navigation.getParam('idMovie');

        api.getDetailMovie(this.idMovie).then((data) => this.setState(data));
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.titleMovie}`,
    });

    render() {
        return (
            <Card imageStyle={{ height: 250 }}
                image={{ uri: `${api.imageURL}${this.state.backdrop_path}` }}>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Overview
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.overview}
                </Text>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Popularity
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.popularity}
                </Text>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Release date
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.release_date}
                </Text>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Revenue
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.revenue}
                </Text>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Vote count
                    </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.vote_count}
                </Text>

                <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    Vote average
                    </Text>
                <Text style={{ marginBottom: 10 }}>
                    {this.state.vote_average}
                </Text>

                <Button
                    icon={{ name: 'code' }}
                    backgroundColor='#f4511e'
                    buttonStyle={{ borderRadius: 10 }}
                    title='Watch now'
                    textStyle={{ fontWeight: 'bold' }} />
            </Card>
        );
    }
}

export default Detail;
