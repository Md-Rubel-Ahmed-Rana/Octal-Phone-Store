import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Routes';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </div>
  );
}

export default App;
