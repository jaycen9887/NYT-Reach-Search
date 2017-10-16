import React, {Component} from 'react';
import './Results.css';
import { Header5, Headline } from '../Div';

class Results extends Component{

    getResults = () => {
        return (
            this.props.articles.map(article => 
                <div key={article.id}>
                <Headline> {article.headline} </Headline>
                <Header5><strong> {article.binline}</strong></Header5>
                <Header5>{article.section_name} </Header5>
                <Header5>{article.pub_date} </Header5>
                <a href={article.url} >{article.url} </a>
                <p>{article.snippet}</p>
                </div>

            )
        )

    }

    render() {
        /* console.log("****************************", this.props.articles[0]); */
        
        if(this.props.articles.length === 0) {
            return (
                <div className='row'>
                <div className='col-sm-12'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <h3 className='panel-title'><strong><i className='fa fa-table'></i> Top Results</strong></h3>
                        </div>
                        <div className='panel-body' id='results'>

                           <h1>No Results Found</h1>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        else {
            return (
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='panel panel-primary'>
                            <div className='panel-heading'>
                                <h3 className='panel-title'><strong><i className='fa fa-table'></i> Top Results</strong></h3>
                            </div>
                            <div className='panel-body' id='results'>

                                {
                                    this.getResults()
                                    /* this.props.articles.map(article => 
                                            <Div key={article[i].id}>
                                            <Headline> {article[i].headline} </Headline>
                                            <Header5><strong> {article[i].binline}</strong></Header5>
                                            <Header5>{article[i].section_name} </Header5>
                                            <Header5>{article[i].pub_date} </Header5>
                                            <Url href={article[i].url} >{article[i].url} </Url>
                                            </Div>
                                    ) */
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Results;