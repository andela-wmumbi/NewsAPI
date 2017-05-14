import React from 'react';
import request from 'superagent';
import ContentLister from './content.js';

export default class ApiCalls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: []
        };
        this.getSourceIds = this.getSourceIds.bind(this);
    }
    componentDidMount() {
        this.getSourceIds();
    }
    getSourceIds() {
        let apikey = "213327409d384371851777e7c7f78dfe";
        let source = "https://newsapi.org/v1/sources?apiKey=";
        let url = source + apikey;
        request
            .get(url)
            .then((res) => this.setState({ ids: res.body.sources }));
    }
    render() {
        const sourceId = this.state.ids;
        return (
            <div>
                {sourceId.map((myid) => {
                    let sourceNames = [myid.id];
                    return sourceNames;
                })}
            </div>
        );
    }
}
