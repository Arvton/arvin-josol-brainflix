import Header from './components/Header/Header'
import './App.scss';
import VideoSection from './components/VideoSection/VideoSection';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <VideoSection />
      </main>
    </div>
  );
}