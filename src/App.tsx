import { ToastContainer } from 'react-toastify'
import { PageRoutes } from './routes/PageRoutes'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <PageRoutes />
    </>
  )
}

export default App
