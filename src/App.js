
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Demo from './component/Demo';


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<app />,
  },
  {
    path:"/demo",
    element:<Demo />,
  },
])


function App() {
  return (
    <div className="App">
    <Header />
    <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;