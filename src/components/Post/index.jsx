import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import css from './styles.module.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

export function Post(props) {
  const { author, publishedAt, content } = props

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <Avatar hasBorder src={author.avatarUrl} />

          <div className={css.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={css.content}>
        {content.map((item, index) => {
          if (item.type === 'link') {
            return (
              <p key={index}>
                <a href='#'>{item.content}</a>
              </p>
            )
          }

          return <p key={index}>{item.content}</p>
        })}
      </div>

      <form className={css.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva um comentário...' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={css.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
