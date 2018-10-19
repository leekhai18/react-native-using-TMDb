import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import api from '../../services/api';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);

        this.state = {
            listMovies: [],
        };

        this.isTouchedSearch = false;
        this.query = '';

        this.search('2018');
    }

    search = (query) => {
        api.search(query).then((data) => {
            this.setState({ listMovies: data });
        });
    }

    onChangeText = (value) => {
        this.query = value;

        if (this.isTouchedSearch) {
            this.isTouchedSearch = false;
            setTimeout( () => {
                this.isTouchedSearch = true; 
                this.search(this.query);    
            }, 400);
        }
    }

    onTouchStart = () => {
        this.isTouchedSearch = true;
    }

    renderSearchBar = () => {
        return <SearchBar placeholder='Type Here...' lightTheme round
                onChangeText={this.onChangeText}
                onTouchStart={this.onTouchStart} />;
      };    

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '86%',
              backgroundColor: '#CED0CE',
              marginLeft: '14%'
            }}
          />
        );
      };    


    render() {
        return (
            <List  containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
                data={this.state.listMovies}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Detail', {    idMovie: item.id, 
                                                                                                    titleMovie: item.title }) }>
                        <ListItem
                            roundAvatar
                            title={`${item.title}`}
                            subtitle={item.release_date}
                            avatar={{ uri: `${api.imageURL}${item.poster_path}` }}
                            avatarStyle={{ width: 50, height: 50 }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={item => `${item.id}${item.poster_path}`}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderSearchBar}
            />
        </List>
        );
    }
}


export default Home;
