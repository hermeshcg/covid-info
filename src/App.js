import Routes from './routes';
import { Slide, ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        limit={5}
        transition={Slide}
      />
    </>
  );
}

export default App;

/*This is a easter egg*/
