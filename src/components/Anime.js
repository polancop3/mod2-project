import React from 'react';
import axios from 'axios';

const ANIME_API = "https://api.jikan.moe/v3/search/anime?q=";
class Anime extends React.Component {
    constructor(props){
      super(props);
      this.state = {
    
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(e){
    e.preventDefault();
    this.getAnime();
    }
    handleChange(e){
      this.setState({ [e.target.name]: e.target.value });
    }
    
      async getAnime(){
        const composedURL = ANIME_API + this.state.animeName;
        try{
          const res = await axios.get(composedURL)
          this.setState({anime : res.data})
          console.log(res.data)
          
        } catch(e){
          console.error(e);
        }
      }
      
      render() {
        return (
          <div>
            <form 
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
            <label>
              Search Anime:
              <input type='text' placeholder="search anime" name="animeName"/>
            </label>
           <input type="submit" value ="search"/>
            </form>
            {this.state.anime && <h1>{this.state.anime.results[0].title}</h1> }
            { this.state.anime &&
            <div className="content">
              {<img className="image" src={this.state.anime.results[0].image_url} alt ='cover'></img>}
              <p>{this.state.anime.results[0].synopsis}</p>
              <h3>Episodes: {this.state.anime.results[0].episodes}</h3> 
            </div>
            }
          </div>
        )
      }
    }
    export default Anime