import css from './styles.module.css'

export function Post() {
  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <img className={css.avatar} src='https://github.com/mateuscastro-dev.png' />

          <div className={css.authorInfo}>
            <strong>Mateus Castro</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title='11 de Julho às 08:00' dateTime='2022-07-11 08:00:00-'>
          Publicado há 1h
        </time>
      </header>

      <div className={css.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href='#'>jane.design/doctorcare</a>
        </p>
        <p>
          <a href='#'>#novoprojeto</a> <a href='#'>#nlw</a> <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}
