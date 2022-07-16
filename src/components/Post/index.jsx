import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import css from './styles.module.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

export function Post(props) {
  const { author, publishedAt, content } = props

  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function onCreateNewComment(event) {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }

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
        {content.map(item => {
          if (item.type === 'link') {
            return (
              <p key={item.content}>
                <a href='#'>{item.content}</a>
              </p>
            )
          }

          return <p key={item.content}>{item.content}</p>
        })}
      </div>

      <form className={css.commentForm} onSubmit={onCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Escreva um comentário...'
          value={newComment}
          onChange={event => setNewComment(event.target.value)}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={css.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  )
}
