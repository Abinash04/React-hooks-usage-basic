import {createContext} from "react";
const moods = {
    "happy": "I am happy",
    "sad": "I am sad",
    "excited": "I am excited",
    "angry": "I am angry",
}

const MoodsContext = createContext(moods);

export default MoodsContext;