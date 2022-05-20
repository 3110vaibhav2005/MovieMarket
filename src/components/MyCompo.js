import React, { Component } from 'react'
import MyItem from './MyItem';
import Slider from './Slider';
import Spinner from './Spinner';

export class MyCompo extends Component {
  render() {
    return (
      
      <div className="container p-3 mb-2 bg-info text-white">
          <div>
            <h3 className="text-center text-dark my-4"><strong>Welcome to Movie Market</strong></h3>
          <Slider/>
          </div>
          <div className="row">
              <h3 className="text-center text-dark my-3"><strong>--Top Rated Movies--</strong></h3>
              <Spinner/>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/XJc1L50B/20220520-095251.jpg" title="RRR" visitUrl="https://111.90.159.132/action/rrr/" description=""/></div>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/bNJDzjrK/20220520-095733.jpg" title="Sooryavanshi" visitUrl="https://111.90.159.132/action/sooryavanshi/" description=""/></div>
              <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/gJMCP7gH/20220520-100405.jpg" title="Robot 2.0" visitUrl="https://111.90.159.132/bollywood-movies/2-0/" description=""/></div>
          </div>
          <div className="row">
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/wjCjswYV/20220520-100732.jpg" title="Free Guy" visitUrl="https://111.90.159.132/comedy/free-guy/" description=""/></div>
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/nhBtNZN4/20220520-101034.jpg" title="Harry Potter and the Philosopher's Stone" visitUrl="https://111.90.159.132/adventure-movies/harry-potter-and-the-philosophers-stone/" description=""/></div>
          <div className="col-md-4"><MyItem imgUrl="https://i.postimg.cc/9QnqgP5R/20220520-101642.jpg" title="Pirates of the Caribbean: The Curse of the Black Pearl" visitUrl="https://111.90.159.132/fantasy/pirates-of-the-caribbean-the-curse-of-the-black-pearl/" description=""/></div>
          </div>        
      </div>
    )
  }
}

export default MyCompo
