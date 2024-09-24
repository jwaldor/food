import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StateProvider } from './helpers/StateProvider.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { Welcome } from './pages/Welcome.tsx'
import SignUp  from './pages/SignUp.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PUBLISHABLE_KEY)

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/app" element={<StateProvider><App /></StateProvider>} />
      </Routes>
    </Router>
  </StrictMode>,
)
