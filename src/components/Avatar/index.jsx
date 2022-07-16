import css from './styles.module.css'

export function Avatar(props) {
  return (
    <img
      className={props.hasBorder ? css.avatarWithBorder : css.avatar}
      src='https://github.com/mateuscastro-dev.png'
    />
  )
}
