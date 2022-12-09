import React from "react";
import { v4 as uuidv4 } from "uuid";
import catRandom from "../utils/catRandom";

import hasCollar from "../utils/collarRandom";
import colorRandom from "../utils/colorRandom";
const initialState = {
    cats: [],
    feedCat: (id) => { },
};
export const CatsContext = React.createContext(initialState);
export default class CatsProvider extends React.Component {
    constructor(props) {
        super(props);
        this.feedCat = (id) => {
            this.setState({
                cats: this.state.cats.map((cat) => {
                    console.log(cat.id);
                    if (cat.id === id) {
                        return {
                            ...cat,
                            age: cat.age + 1,
                            feedTime: 35,
                        };
                    }
                    else
                        return { ...cat };
                }),
            });
        };
        this.state = initialState;
        this.interval = () => setInterval(() => {
            this.setState({
                cats: [
                    ...this.state.cats,
                    {
                        id: uuidv4(),
                        name: catRandom(),
                        color: colorRandom(),
                        age: 0,
                        hasCollar: hasCollar(),
                        
                        feedTime: 35,
                    },
                ],
            });
        }, 5000);
        this.feedInterval = () => setInterval(() => {
            const cats = this.state.cats.filter((cat) => cat.feedTime > 0);
            this.setState({
                cats: cats.map((cat) => {
                    return {
                        ...cat,
                        feedTime: cat.feedTime - 1,
                    };
                }),
            });
        }, 1000);
    }
    componentDidMount() {
        if (this.state.cats.length === 0)
            this.interval();
        setTimeout(this.feedInterval, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval());
        clearInterval(this.feedInterval());
    }
    render() {
        const { cats } = this.state;
        const { feedCat } = this;
        return (<CatsContext.Provider value={{ cats, feedCat }}>
        {this.props.children}
      </CatsContext.Provider>);
    }
}
