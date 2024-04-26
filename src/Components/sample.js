import React, { useState } from 'react';

function Sample() { const [bgColor, setBgColor] = useState('#FFFFFF'); const changeBgColor = () => { const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); setBgColor(randomColor); }; return ( <div style={{ backgroundColor: bgColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', }} > <i className="fab fa-twitter" style={{ fontSize: '100px', color: 'white' }}></i> </div> <button onClick={changeBgColor}>Change Background</button> </div> );
}

export default Sample;