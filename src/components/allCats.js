import React, { Component } from "react";
import { CatsContext } from "../context/catsContext";

export default class AllCats extends Component {
    render() {
        const { color } = this.props.cat;
        return (<div className={`gap-2 w-100 justify-content-between bg-[${color}]`} style={{ backgroundColor: color }}>
        
        <div className="container d-flex">

            <div className="info">
            <h1>{this.props.cat.name}</h1>
          <p>
            {this.props.cat.hasCollar ? "Has collar" : "Hasn't collar"}
          </p>
          <p>{this.props.cat.age} years old</p>
            </div>
          
          {this.props.cat.feedTime < 5 ? (<button className="btn btn-primary btn-sm w-100 duration: 300" onClick={() => this.context.feedCat(this.props.cat.id)}>
              Feed
            </button>) : ("")};
        </div>
      </div>);
    }
}
AllCats.contextType = CatsContext;
