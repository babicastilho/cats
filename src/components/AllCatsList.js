import React, { Component } from "react";
import { CatsContext } from "../context/catsContext";

export default class AllCatsList extends Component {
    render() {
        const { color } = this.props.cat;
        return (<div className={`w-80 p-6 border-white rounded-md border-2 bg-[${color}] flex gap-4`} style={{ backgroundColor: color }}>
        
        <div className="flex flex-col">
          <h2>{this.props.cat.name}</h2>
          <p>
            {this.props.cat.hasCollar ? "Has collar" : "Hasn't collar(adopted)"}
          </p>
          <p>{this.props.cat.age} years old</p>
          {this.props.cat.feedTime < 5 ? (<button className="bg-green-700 text-black mt-2 rounded duration-300" onClick={() => this.context.feedCat(this.props.cat.id)}>
              Feed
            </button>) : ("")}
        </div>
      </div>);
    }
}
AllCatsList.contextType = CatsContext;
