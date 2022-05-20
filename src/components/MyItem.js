import React, { Component } from 'react'

export class MyItem extends Component {

  render() {
      let {title,description,imgUrl,visitUrl} = this.props;
    return (
      <div className="w-auto  p-3 my-5 ">
        <div className="card p-3 mb-2  bg-warning border border-dark"  style={{width:"14rem",height:"25rem"}}>
            <img src={imgUrl} className="rounded-circle  card-img-top" alt="..."/>
            <div className="card-body p-3 mb-2 bg-warning text-white">
                <h5 className="card-title text-secondary">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={visitUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn btn-outline-dark"><strong>Watch Now</strong></a> 
            </div>
        </div>        
      </div>
    )
  }
}

export default MyItem
