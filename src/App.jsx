import { Route, Routes } from 'react-router-dom';
import './App.css';
import Confirm from './features/confirm';
import Verify from './features/verify';
import Login from './features/login';
import Upload from './features/upload';
import Review from './features/review';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Confirm />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/login' element={<Login />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/review' element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
