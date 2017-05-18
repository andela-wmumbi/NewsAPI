import React, { Component } from 'react';
import request from 'superagent';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.getSourceArticles = this.getSourceArticles.bind(this);
    }

    componentDidMount() {
        this.getSourceArticles(this.props.params.source_id);
    }

    getSourceArticles(sourceId) {
        let id = sourceId;
        let apikey = "213327409d384371851777e7c7f78dfe";
        let source = "https://newsapi.org/v1/articles?";
        let url = source + "source=" + id + "&apiKey=" + apikey;
        request
            .get(url)
            .then((res) => {
                this.setState({ articles: res.body.articles });
            });
    }

    render() {
        return (
            <div>
                {this.state.articles.map((article) => {
                    return <p>{article.title}</p>
                })}
            </div>
        )
    }
}

export default Articles;
