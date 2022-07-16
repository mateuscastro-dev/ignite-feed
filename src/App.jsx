import './styles/global.css'
import css from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <>
      <Header />

      <div className={css.wrapper}>
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  )
}
