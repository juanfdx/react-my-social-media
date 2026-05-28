import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'

// This prevents the “flash” issue between layouts.
const saved = localStorage.getItem('theme');

document.documentElement.dataset.theme =
  saved === 'dark' ? 'dark' : '';


function App() {
  return <RouterProvider router={router} />
}

export default App