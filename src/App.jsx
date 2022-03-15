import logo from './logo.svg';
import './App.css';
import VideoCall from './components/VideoCall/VideoCall';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <VideoCall />
      <Sidebar />
    </div>
  );
}

export default App;
