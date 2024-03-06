
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Demo from './component/Demo';
import Demo2 from './component/Demo2';


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<app />,
  },
  {
    path:"/demo",
    element:<> <Demo /><Demo2></Demo2>
    </>
   
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