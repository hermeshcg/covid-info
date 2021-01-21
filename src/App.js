import { BrowserRouter } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        limit={5}
        transition={Slide}
      />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;

/*This is a easter egg*/
