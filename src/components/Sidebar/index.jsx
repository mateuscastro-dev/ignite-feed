import { PencilLine } from 'phosphor-react'

import css from './styles.module.css'

import { Avatar } from '../Avatar'
import coverImage from '../../assets/sidebar-cover.svg'

export function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <img className={css.cover} src={coverImage} />

      <div className={css.profile}>
        <Avatar hasBorder src='https://github.com/mateuscastro-dev.png' />
        <strong>Mateus Castro</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
