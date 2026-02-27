import ReactDOM from 'react-dom/client'
import './reset.css'
import App from './App.tsx'
import { QueryProvider } from './providers/query.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryProvider>
        <App />
    </QueryProvider>
)
