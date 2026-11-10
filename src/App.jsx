import { BrowserRouter } from 'react-router';
import AppRoutes from './routes/router';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Mini Board</h1>
        <p className="subtitle">My First React Project</p>

        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;