import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store";
import router from "./router";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App;
