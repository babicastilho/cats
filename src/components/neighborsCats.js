import React, { Component } from "react";
export default class AllCats extends Component {
    render() {
        const { color } = this.props.cat;
        return (<div className={`w-80 p-4 border-white rounded-md border-2 bg-[${color}] flex gap-4`} style={{ backgroundColor: color }}>
         <div className="flex flex-col">
          <h2>{this.props.cat.name}</h2>
          <p>{this.props.cat.age} years old</p>
        </div>
      </div>);
    }
}
