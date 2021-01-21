import React from 'react'
import axios from 'axios'

const MANGA_API = "https://api.jikan.moe/v3/search/manga?q=";
class Manga extends React.Component {
    constructor(props){
      super(props);
      this.state = {
    
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
    e.preventDefault();
    this.getManga();
    }
    handleChange(e){
      this.setState({ [e.target.name]: e.target.value });
    }
   
      async getManga(){
        const composedURL = MANGA_API + this.state.mangaName;
        try{
          const res = await axios.get(composedURL)
          this.setState({manga : res.data})
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
              Search manga
              <input type='text' placeholder="search manga" name="mangaName"/>
            </label>
           <input type="submit" value ="search"/>
            </form>
            
            <h1 className ="title">{this.state.manga && this.state.manga.results[0].title }</h1>
            {this.state.manga &&
            <div className="content">
              
                {<img className="image" src={this.state.manga.results[0].image_url} alt="cover"></img>}
              <p className="synopsis">{this.state.manga.results[0].synopsis}</p>
              </div>
              } 
    
          </div>
        )
      }
    }

    export default Manga