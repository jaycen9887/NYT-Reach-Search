import React, { Component } from "react";
//import API from "../../utils/API";
//import { Link } from "react-router-dom";

import Jumbotron from '../../components/Jumbotron';
import Results from '../../components/Results';
import Saved from '../../components/Saved';
//import Search from '../../components/Search';
//import DeleteBtn from "../../components/DeleteBtn";
import {Input, FormBtn, Select} from '../../components/Form';
import {Div, Header5, Headline, Url, } from '../../components/Div';
import './ArticleScrape.css';
import authKey from '../../components/authKey';
import axios from 'axios';



class ArticleScrape extends Component {
  state = {
    results: {},
    articles: [],
    topic: '',
    numRecords: 10,
    startYear: 0,
    endYear: 0,
  };

  

  handleQuery = (numRecords, url) => {
    return axios.get(url)
      .then(data => {
        console.log(data.data.response.docs);
        for(let i = 0; i < this.state.numRecords; i++){
          let temp = {
            headline: "Headline Unavailable",
            biline: "Biline Unavailable",
            pub_date: data.data.response.docs[i].pub_date,
            section_name: data.data.response.docs[i].section_name,
            url: data.data.response.docs[i].web_url
          }
          if(data.data.response.docs[i].headline !== "null"){
            temp.headline = data.data.response.docs[i].headline.main;
          }
          if(data.data.response.docs[i].byline && data.data.response.docs[i].byline.hasOwnProperty("original")){
            temp.biline = data.data.response.docs[i].byline.original;
          }
          this.state.articles.push(temp);
        } 
      });
      //Div = this.handleOutput();
//console.log(this.handleOutput());
  }

  handleOutput = () => {
    console.log('Output');
    return (
      <div>
        {this.state.articles.map((article) => {
          return(
            <Div>
            <Headline> {article.headline} </Headline>
            <Header5><strong> {article.binline}</strong></Header5>
            <Header5>{article.section_name} </Header5>
            <Header5>{article.pub_date} </Header5>
            <Url href={article.url} >{article.url} </Url>
          </Div>
          )
        })}
      </div>
    )
  }

  /* testQuery = (numRecords, url) => {
    $.ajax({url: queryURL, method: "GET"})
        .done(data => {
            console.log("URL: ", url);
            console.log("_________________________________________________");
            console.log(data);
            console.log("_________________________________________________");

            for(let i = 0; i < numRecords; i++){

                <Div className="row" id={"article" + i}>

                </Div>
                //Check if result has a headline
                
                
                    div.append("<h3><strong>" + data.data.response.docs[i].headline.main  + "</strong></h3>");
                }

                //check if result has a byline
                if(data.data.response.docs[i].byline && data.data.response.docs[i].byline.hasOwnProperty("original")){
                
                    div.append("<h5><strong>" + data.data.response.docs[i].byline.original + "</strong></h5>");
                }

                //Append URL, Date, and Section Name
                div.append("<h5>" + data.data.response.docs[i].section_name + "</h5>");
                div.append("<h5>" + data.data.response.docs[i].pub_date + "</h5>");
                div.append("<a href='" + data.data.response.docs[i].web_url + "'>" + data.data.response.docs[i].web_url + "</a>");


                $("#articles").append(div);
            }
        });   
  } */

  handleSearch = (event) => {
      event.preventDefault();
      let key = {authKey}.authKey.authKey;
      let searchTerm = this.state.topic;
      console.log(searchTerm);
      let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + key + "&q=" + searchTerm;
      let numRecords = this.state.numRecords;
      let startYear = this.state.startYear;
      let endYear = this.state.endYear;
      
      //append start year to url if entered 
      if(parseInt(startYear, 10)){
          url = url + "&begin_date=" + startYear + "0101";
      }
      if(parseInt(endYear, 10)){
          url = url + "&end_date=" + endYear + "0101";
      }

      this.handleQuery(numRecords, url);

      return false; 

  } 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.numRecords >= 1);
  }

  render() {
    return (
      <div className='container'>
        <Jumbotron />
        <div className='row search'>
          <div className='col-sm-12'>
              <div className='panel panel-primary'>
                <div className='panel-heading'>
                    <h3 className='panel-title'><strong><i className='fa fa-list-alt'></i> Search Parameters</strong></h3>
                </div>
                <div className='panel-body'>
                  <form>
                    <Input
                      type='text' 
                      value={this.state.topic}
                      onChange={this.handleInputChange}
                      name='topic'
                      id='searchTerm'
                      placeholder='Search Term'
                    />
                    <Select id='numRecords' className='form-control'/>
                    <Input 
                      type='text' 
                      onChange={this.handleInputChange}
                      name='startYear'
                      id='startYear'
                      placeholder='Start Year (Optional)'
                    />
                    <Input 
                      type='text'
                      onChange={this.handleInputChange}
                      name='endYear'
                      id='endYear'
                      placeholder='End Year (Optional)'
                    />
                    <FormBtn onClick={this.handleSearch}>
                      Search
                    </FormBtn>
                  </form>
                </div>
              </div>
          </div>  
        </div>
        <Results onChange={this.handleInputChange}/>
        <Saved />
      </div>
    );
  }
}

export default ArticleScrape;
