import React from 'react';

import { Calendar } from 'antd';
import RichTextEditor from './components/RichTextEditor';

function App() {
  return (
    <div className="App">
      <div style={{ width: 300, border: '1px solid #d9d9d9' }}>
        <Calendar fullscreen={false} />
      </div>
      <div style={{width:600}} className='border'>
      <RichTextEditor />

      </div>
    </div>
  );
}

export default App;
