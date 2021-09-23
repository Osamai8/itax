import Router from "./route/index";
import Axios from "axios";
import { ToastContainer ,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  Axios.interceptors.request.use(
    function (config) {
      // spinning start to show
      // UPDATE: this code to show global loading indicator
      document.body.classList.add("loading-indicator");

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  //comment
  Axios.interceptors.response.use(
    function (response) {
      // spinning hide
      // UPDATE: this code to hide global loading indicator
      document.body.classList.remove("loading-indicator");
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  ) 
  return (
    <> 
      <Router />
      <ToastContainer/>
    </>
  );
}


export default App;


