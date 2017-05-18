import React from 'react';
import request from 'superagent';
import ContentLister from './content.js';
import '../../css/main.css';
import { Link } from 'react-router';

export default class ApiCalls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
        this.getSourceIds = this.getSourceIds.bind(this);
        this.generateCategories = this.generateCategories.bind(this);
        this.populateCategories = this.populateCategories.bind(this);
				this.generateNames =  this.generateNames.bind(this);
				this.generateIds =  this.generateIds.bind(this);
				this.articles =  this.articles.bind(this);
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

		generateNames(categoryName,values){
				const names = [];
				values.map((value) => {
					value.map((link) => {
						//console.log("category is",link.category,"the id is:",link.id);
						if (categoryName == link.category) {
							names.push({name: link.name, id: link.id});
						}
					});
			});
			return names;
		}
				generateIds(catName,values){
				const ids= [];
				values.map((value) => {
					value.map((link) => {
						if (catName == link.category) {
							ids.push(link.id);
						}
					});
			});
			return ids;
		}
		articles(){
			const sources = this.state.sources;
      const categorised = this.generateCategories(sources);
      const formatted = this.populateCategories(categorised, sources);
      let namesOfButtons = Object.keys(formatted);
			let values = Object.values(formatted);

	}

    render() {
        const sources = this.state.sources;
        const categorised = this.generateCategories(sources);
        const formatted = this.populateCategories(categorised, sources);
        let namesOfButtons = Object.keys(formatted);
        const values = Object.values(formatted);

				namesOfButtons.map((name) => {
				this.generateIds(name,values).map((myIds)=> {
				let d = [myIds]
			});
		})
        return (
            <div>
                {namesOfButtons.map((categoryName) => {
                    return  (
														<div className="dropdown">
                            <button className="dropbtn">{categoryName}</button>
                            <div className="dropdown-content">
                                {this.generateNames(categoryName, values).map((mysource) => {
																	return <Link to={`/articles/${mysource.id}`}>{mysource.name}</Link>;
																	})
																}
                            </div>
                        </div>);
                })}
								{this.props.children}
            </div>
        );
    }
}
