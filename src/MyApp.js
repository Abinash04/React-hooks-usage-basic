import React from 'react';
// import MoodsContext from './components/createContextUsage';
// import MoodEmoji from './components/useContextUsage';

import {ThemeProvider} from './components/useContextHook/ThemeContext';
import Header from './components/useContextHook/Header';
import Content from './components/useContextHook/Content';
import InputWithFocus from './components/useRefHook/InputWithFocus';
import Count from './components/useReducerHook/Count';
import ExpensiveCompute from './components/useMemoHook/ExpensiveCompute';
import Increment from './components/useCallBackHook/Increment';
import GetDataFromApi from './components/useEffectHook/GetDataFromApi'

function MyApp() {
  return (
    <div>
        {/* <MoodsContext.Provider value={"happy"}>
      <MoodEmoji/>
      </MoodsContext.Provider> */}

      <ThemeProvider>
        <Header/>
        <Content/>
        <InputWithFocus/>
        <Count/>
        <ExpensiveCompute/>
        <Increment/>
        <GetDataFromApi/>
      </ThemeProvider>
    </div>
  )
}

export default MyApp
