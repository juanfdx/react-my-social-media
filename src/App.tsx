import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'
import { useEffect } from 'react';
import { useSessionStore } from './stores/useSessionStore';

// This prevents the “flash” issue between layouts.
const saved = localStorage.getItem('theme');

document.documentElement.dataset.theme =
  saved === 'dark' ? 'dark' : '';


function App() {

  useEffect(() => {
  useSessionStore.setState({
    user: {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@me.com',
      avatarUrl: 'https://i.pravatar.cc/50?u=2',
    }
  });
}, []);

  return <RouterProvider router={router} />
}

export default App