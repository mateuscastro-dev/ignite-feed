import { ThumbsUp, Trash } from 'phosphor-react'

import css from './styles.module.css'

export function Comment() {
  return (
    <div className={css.comment}>
      <img src='https://github.com/mateuscastro-dev.png' />

      <div className={css.commentBox}>
        <div className={css.commentContent}>
          <header>
            <div className={css.authorAndTime}>
              <strong>Mateus Castro</strong>
              <time title='11 de Julho às 08:00' dateTime='2022-07-11 08:00:00-'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Mateus. Parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
