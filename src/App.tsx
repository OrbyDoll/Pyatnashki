import React from 'react';
import './App.css';

function App() {
  const [fieldSize, setFieldSize] = React.useState(4)
  let field = <div>1</div>;
  // for (let i = 0; i < fieldSize*fieldSize; i++) {
  //   field += <div className="table-inner"></div>
    
  // }
  return (
    <div className="table">
      {field}
    </div>
  );
}

export default App;
