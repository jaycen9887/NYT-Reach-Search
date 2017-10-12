import React from 'react';
import './Saved.css';

const Saved = () => (
    <div className='row'>
        <div className='col-sm-12'>
            <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3 className='panel-title'><strong><i className='fa fa-floppy-o'></i> Saved Articles</strong></h3>
                </div>
                <div className='panel-body' id='saved'>
                    <div className='' id='savedArticles'>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Saved;