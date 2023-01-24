import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import { LoginContainer } from './pages/Login/LoginContainer/LoginContainer'
import { CadastroContainer } from './pages/Login/CadastroContainer/CadastroContainer'
import { LoginPage } from './pages/Login/LoginPage'
import { LandingPage } from './pages/Landing/LandingPage'
import { NotFoundPage } from './pages/NotFound/NotFoundPage'
import { DashboardPage } from './pages/Dashboard/DashboardPage'
import { IndexComponent } from './pages/Dashboard/IndexComponent/IndexComponent'

interface Cards {
  title?: string
  subtitle: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}

const cardsPlaceholder: Cards[] = [
  {
    createdAt: new Date(Date.now() - 3590000),
    title: 'A really really really long title',
    subtitle: 'Erland Continent',
    updatedAt: new Date(Date.now() - 3590000),
    imageUrl: 'https://v1.tailwindcss.com/img/card-top.jpg',
  },
  {
    createdAt: new Date(Date.now() - 3590000),
    title: 'Kure Akuma',
    subtitle: 'Kure clan leader',
    updatedAt: new Date(Date.now() - 3590000),
    imageUrl: 'https://cdn.discordapp.com/attachments/944342989910716510/1020926852807807028/unknown.png',
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage></LandingPage>,
    errorElement: <NotFoundPage></NotFoundPage>,
  },
  {
    path: '/dashboard',
    element: <DashboardPage></DashboardPage>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: '',
        element: <IndexComponent></IndexComponent>,
      },
    ],
  },
  {
    path: 'auth',
    element: <LoginPage></LoginPage>,
    children: [
      {
        path: 'login',
        element: <LoginContainer></LoginContainer>,
      },
      {
        path: 'cadastro',
        element: <CadastroContainer></CadastroContainer>,
      },
    ],
  },
])

export function App() {
  return (
    <>
      {/* <Sidebar></Sidebar>
      <CardGroup>
        {cardsPlaceholder.map((card, index) => {
          return <Card props={{ ...card, positionInGrid: index }} key={index} />;
        })}
      </CardGroup>
      <Actions></Actions> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
