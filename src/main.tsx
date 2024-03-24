import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Intro from './intro.tsx'
import Title from './title.tsx'
import List from './list.tsx'
import Table from './table.tsx'
import Form from './form.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
        <Title/>
        <Intro/>
        <List/>
        <Table/>
        <Form/>
    </React.StrictMode>,
)
