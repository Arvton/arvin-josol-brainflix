import Header from './components/Header/Header'
import VideoSection from './components/VideoSection/VideoSection';
import Upload from './pages/Upload/Upload';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<VideoSection />} />
          <Route path="/videos/:videoId" element={<VideoSection />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<VideoSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}