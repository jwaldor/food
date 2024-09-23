import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StateProvider } from './helpers/StateProvider.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { Welcome } from './pages/Welcome.tsx'
import SignIn  from './pages/SignIn.tsx'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
console.log(PUBLISHABLE_KEY)

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
      <Welcome />
      <SignIn />
      <StateProvider>
        <App />
      </StateProvider>
    {/* </ClerkProvider> */}
  </StrictMode>,
)
