import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../../../shared/images/react-icon.svg'
import angularLogo from '../../../shared/images/angular-icon.svg'
import { Container } from '../container/container'
import s from './header.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <ul className={s.list}>
          <li className={s.item}><Link to={'./react'} className={s.link}>
            <img className={s.reactLogo} src={reactLogo} alt='Реакт' />
          </Link></li>
          <li className={s.item}>
            <h2 className={s.title}>Todo-List</h2>
          </li>
          <li className={s.item}><Link className={s.link} to={'./angular'}><img className={s.angularLogo} src={angularLogo} alt='angular' /></Link></li>
        </ul>
      </Container>
    </div>
  )
}

export default Header