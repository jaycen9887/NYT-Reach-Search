import React, {Component} from 'react';
import './Results.css';

class Results extends Component{
    state = {

    }

    handleSubmit(e){
        console.log(e);
    }

    render() {
        return (   
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='panel panel-primary'>
                        <div className='panel-heading'>
                            <h3 className='panel-title'><strong><i className='fa fa-table'></i> Top Results</strong></h3>
                        </div>
                        <div className='panel-body' id='results'>
        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;