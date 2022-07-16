import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar'
import css from './styles.module.css'

export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDelete() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={css.comment}>
      <Avatar src='https://github.com/mateuscastro-dev.png' />

      <div className={css.commentBox}>
        <div className={css.commentContent}>
          <header>
            <div className={css.authorAndTime}>
              <strong>Mateus Castro</strong>
              <time title='11 de Julho às 08:00' dateTime='2022-07-11 08:00:00-'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário' onClick={handleDelete}>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
