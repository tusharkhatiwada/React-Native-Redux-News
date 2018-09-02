import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    Image,
    Dimensions
} from "react-native";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

import { fetchArticles } from "../actions";

class Business extends Component {
    static navigationOptions = {
        title: "Business"
    };
    componentDidMount() {
        this.props.fetchPosts("business");
    }
    _keyExtractor = (item, index) => index;
    articleList = ({ item }) => (
        <View>
            <Image source={{ uri: item.urlToImage }} style={{ width: width, height: 100 }} />
            <Text style={{ fontSize: 18, color: "tomato", fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ marginVertical: 10, padding: 3 }}>{item.description}</Text>
        </View>
    );
    renderArticles = () => {
        const { articles } = this.props.posts;
        return (
            <FlatList
                data={articles}
                keyExtractor={this._keyExtractor}
                renderItem={this.articleList}
            />
        );
    };
    render() {
        const { isLoading } = this.props.posts;
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="tomato" />
                ) : (
                    this.renderArticles()
                )}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.news
});
const mapDispatchToProps = {
    fetchPosts: fetchArticles
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch"
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Business);
