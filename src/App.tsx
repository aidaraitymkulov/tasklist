import { Route, Routes } from 'react-router-dom'
import styles from './assets/styles/index.module.scss'
import { Header } from './components/Header'
import { TaskAdd } from './pages/TaskAdd'
import { Home } from './pages/Home'
import { Suspense } from 'react'
import icon from './assets/images/Без названия.jpeg'
import style from './App.module.scss'
export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={style.image}>
        <img src={icon} alt="Без названия" />
      </div>
      <Suspense fallback={<div className={styles.loading}>Loading</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<TaskAdd />} />
      </Routes>
      </Suspense>
    </div>
  )
}

