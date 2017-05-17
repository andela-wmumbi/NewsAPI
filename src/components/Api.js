import React from 'react';
import request from 'superagent';
import ContentLister from './content.js';
import '../../css/main.css';

export default class ApiCalls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
        this.getSourceIds = this.getSourceIds.bind(this);
        this.generateCategories = this.generateCategories.bind(this);
        this.populateCategories = this.populateCategories.bind(this);
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
            .then((res) => this.setState({ sources: res.body.sources }));
    }

    generateCategories(sources) {
        const reduced = {};
        for (let i = 0; i < sources.length; i++) {
            if (!reduced[sources[i].category]) {
                reduced[sources[i].category] = []
            }
        }
        return reduced;
    }

    populateCategories(reduced, sources) {
        for (let i = 0; i < sources.length; i++) {
            if (sources.category === reduced[sources.category]) {
                const sourceCategory = sources[i].category;
                reduced[sourceCategory].push(sources[i]);
            }
        }
        return reduced;
    }
    render() {
        const sources = this.state.sources;
        const categorised = this.generateCategories(sources);
        const formatted = this.populateCategories(categorised, sources);
        //console.log(formatted);
        let namesOfButtons = Object.keys(formatted);
        let values = Object.values(formatted);
       // console.log(names.keys());
        //console.log(values);
        const nameOfSources = values.map((value) => {
            value.map((link)=>{
                return link.name;
        });
        });
        return (
            <div>
                {namesOfButtons.map((source) => {
                    return  <div className="dropdown">
                            <button className="dropbtn">{source}</button>
                            <div className="dropdown-content">
                                <a href="#">Link1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>

                })}
            </div>
        );
    }
}
