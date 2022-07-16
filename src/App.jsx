import css from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './styles/global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateuscastro-dev.png',
      name: 'Mateus Castro',
      roles: 'Frontend Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat placerat ante, id maximus ipsum.',
      },
      {
        type: 'link',
        content: 'lorem.ipsum/project',
      },
    ],
    publishedAt: new Date('2022-07-11 19:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mateuscastro-dev.png',
      name: 'Ans Falação',
      roles: 'Backend Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum',
      },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut feugiat purus, ornare varius odio. Fusce in purus bibendum, lacinia ipsum et, aliquam risus. Suspendisse at bibendum ex, eget pretium ligula. Vivamus vel accumsan neque. Proin quis ligula nibh. Donec sagittis lorem placerat, tempus elit.',
      },
    ],
    publishedAt: new Date('2022-07-16 14:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={css.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
