import css from './styles.module.css'

import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={css.header}>
      <img src={logoImage} alt='Ignite Feed' />
    </header>
  )
}
