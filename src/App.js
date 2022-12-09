import React, { Component } from "react";
import AllCats from "./components/allCats";
import NeighborsCats from "./components/neighborsCats";
import { CatsContext } from "./context/catsContext";

export default class App extends Component {
    render() {
        return (
        
        <div className="App">
            <div className="all-cats list-group">
            <div className="list-group-item active" aria-current="true">
                        <div className="d-flex">
                            <h5 className="mb-1">All cats</h5>
                        </div>
                        
                    </div>
                {this.context.cats.map((cat) => (<AllCats cat={cat} key={cat.id}/>))}
            </div>
        
            <div className="homeless-cats list-group">
            <div className="list-group-item active" aria-current="true">
                        <div className="d-flex">
                            <h5 className="mb-1">You can adopt these cats below</h5>
                        </div>
                        <small>Don't forget to feed them <i class="bi bi-emoji-smile"></i></small>
                    </div>
                {this.context.cats
                        .filter((a) => !a.hasCollar)
                        .map((cat) => (<NeighborsCats cat={cat} key={cat.id}/>))}
            </div>
      </div>);
    }
}
App.contextType = CatsContext;
