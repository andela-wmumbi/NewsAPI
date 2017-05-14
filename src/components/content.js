import React from 'react';
import request from 'superagent';
import PropDemo from './propDemo';
import ApiCalls from './Api.js';
import '../../css/main.css';

export default class ContentLister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            ids: []
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        let source = 'abc-news-au';
        let apikey = "213327409d384371851777e7c7f78dfe";
        let article = 'https://newsapi.org/v1/articles?';
        let url = article + 'source=' + source + '&apikey=' + apikey;
        request
            .get(url)
            .then((res) => this.setState({ newsData: res.body.articles }));
    }
    render() {
        const articles = this.state.newsData;
        return (
            <div className="content">
                <h1 >Top stories</h1>
                {articles.map((article) => {
                    return <div className="article">
                        <p>Title:{article.title}</p>
                        <p>{article.description}</p>
                        <a href={article.url}>Read More</a>
                    </div>
                })}
            </div>
        );
    }
}
