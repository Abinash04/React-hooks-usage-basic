import React, {useContext} from 'react'
import {MoodsContext} from './createContextUsage';

// function useContextUsage() {
//     const myContext = createContext();
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default useContextUsage

// const moods = {
//     "happy": ":)",
//     "sad": ":("
// }

// const MoodsContext = createContext(moods);

// function App () {
//     <MoodsContext.Provider><MoodEmoji/></MoodsContext.Provider>
// }

function MoodEmoji() {
    const mood = useContext(MoodsContext);
    return <p>{mood}</p>
}

export default MoodEmoji;