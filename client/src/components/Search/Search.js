import React, {Component} from 'react';
import './Search.css';
import authKey from "../authKey";

class Search extends Component{

    handleQuery = (numRecords, url) => {
        $.ajax({url: queryURL, method: "GET"})
            .done(data => {
                console.log("URL: ", url);
                console.log("_________________________________________________");
                console.log(data);
                console.log("_________________________________________________");

                for(let i = 0; i < numRecords; i++){
                    let div = $("<div>");
                    div.addClass("row");
                    div.attr('id', 'article-' + i);

                    //Check if result has a headline
                    if(data.response.docs[i].headline != "null"){
                    
                        div.append("<h3><strong>" + data.response.docs[i].headline.main  + "</strong></h3>");
                    }

                    //check if result has a byline
                    if(data.response.docs[i].byline && data.response.docs[i].byline.hasOwnProperty("original")){
                    
                        div.append("<h5><strong>" + data.response.docs[i].byline.original + "</strong></h5>");
                    }

                    //Append URL, Date, and Section Name
                    div.append("<h5>" + data.response.docs[i].section_name + "</h5>");
                    div.append("<h5>" + data.response.docs[i].pub_date + "</h5>");
                    div.append("<a href='" + data.response.docs[i].web_url + "'>" + data.response.docs[i].web_url + "</a>");


                    $("#articles").append(div);
                }
            });   
    }
    handleSearch = () => {
        //empty the articles div
        $("#articles").empty();

        let searchTerm = $('#searchTerm').val().trim();
        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm;
        let numRecords = $("#numRecords").val();
        let startYear = $("#startYear").val().trim();
        let endYear = $("#endYear").val().trim();
        
        //append start year to url if entered 
        if(parseInt(startYear)){
            url = url + "&begin_date=" + startYear + "0101";
        }
        if(parseInt(endYear)){
            url = url + "&end_date=" + endYear + "0101";
        }

        handleQuery(numRecords, url);

        return false; 

    } 

    render() {
        <div className='row search'>
            <div className='col-sm-12'>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <h3 className='panel-title'><strong><i className='fa fa-list-alt'></i> Search Parameters</strong></h3>
                    </div>
                    <div className='panel-body'>
                        <form>
                            <div className='form-group row'>
                                <label className='col-sm-12'>
                                    Search Term:
                                    <input type='text' className='form-control' id='searchTerm'></input>
                                </label>
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-12'>
                                    Number of Recored to Retrieve:
                                    <select className='form-control' id='numRecords'>
                                        <option value='1'>1</option>
                                        <option selected value='5'>5</option>
                                        <option value='10'>10</option>
                                    </select>
                                </label>
                                
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-12'>
                                    Start Year - Optional:
                                    <input type='text' className='form-control' id='startYear'></input>
                                </label>
                                
                            </div>
                            <div className='form-group row'>
                                <label className='col-sm-12'>
                                    End Year - Optional:
                                    <input type='text' className='form-control' id='endYear'></input>
                                </label>
                                
                            </div>
                            <button type='submit' className='btn btn-default' id='search' onClick={this.handleSearch}><i className='fa fa-search'></i>Search</button>
                            <button type='button' className='btn btn-default' id='clearFields'><i className='fa fa-trash'></i>Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }

} 

export default Search;