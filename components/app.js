import React from 'react';
import List from './FriendsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        <div className="friends"><List/></div>
      </div>

    )
  }
}

export default App;
