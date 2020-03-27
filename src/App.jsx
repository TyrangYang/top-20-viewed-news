import React from 'react';
import './App.css';
// import './bootstrap.min.css';
import TopTenNews from './components/TopTenNews';
function App() {
    return (
        <div className="App">
            <div className="header-fixed">
                <div className="header">
                    Top 20 viewed news in NEW YORK TIMES
                </div>
                {/* <div>manus</div> */}
            </div>
            <div className="content">
                <TopTenNews />
            </div>
        </div>
    );
}

export default App;
