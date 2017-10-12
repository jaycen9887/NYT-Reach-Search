import React from 'react';

export const Select = props => 

    <div className='form-group'>
        <select {...props}>
            <option value='Number of Records' disabled selected>Number of Records to Retrieve</option>
            <option value='1'>1</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
        </select>        
    </div>