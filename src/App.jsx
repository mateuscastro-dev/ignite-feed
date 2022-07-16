import './styles/global.css'
import css from './App.module.css'

import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />

      <div className={css.wrapper}>
        <aside>
          <p>sidebar</p>
        </aside>

        <main>
          <p>posts</p>
        </main>
      </div>
    </>
  )
}
