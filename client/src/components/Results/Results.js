import React, {Component} from 'react';
import './Results.css';

class Results extends Component{
    state = {

    }

    handleSubmit(e){
        console.log(e);
    }

    render() {
        console.log(this.props.articles);
        
        if(this.props.articles.length === 0) {
            return (
                <div>No results found.</div>
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
                                    this.props.articles.map(article => 
                                        <div>
                                        title: {article.title}
                                        </div>
                                    )
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