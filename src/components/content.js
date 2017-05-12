import React from 'react';
import axios from 'axios';
import request from 'superagent';
import PropDemo from './propDemo';

export default class ContentLister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: []
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        let url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=213327409d384371851777e7c7f78dfe';
        request
            .get(url)
            .then((res) => this.setState({ newsData: res.body.articles }));
    }
    render() {
        const articles = this.state.newsData;
        return (
            <div>
                <h1>Articles</h1>
                {articles.map((article) => {
                    return <PropDemo name={article.author} />
                })}
            </div>
        );
    }
}
