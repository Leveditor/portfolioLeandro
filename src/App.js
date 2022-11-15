import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './Components/Body';
import Header from './Components/Header';

export default function App(){
  return (
    <>
    <BrowserRouter>
     <Header />
      <Routes>
          <Route path="/" element={<Body />} />

      </Routes>
    </BrowserRouter>
  </>
  )
}
