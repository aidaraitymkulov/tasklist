import { Route, Routes } from 'react-router-dom'
import styles from './assets/styles/index.module.scss'
import { Header } from './components/Header'
import { TaskAdd } from './pages/TaskAdd'
import { Home } from './pages/Home'
const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<TaskAdd />} />
      </Routes>
    </div>
  )
}

export default App
