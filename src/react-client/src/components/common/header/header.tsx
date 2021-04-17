import React from 'react'
import reactLogo from '../../../shared/images/react-icon.svg'
import angularLogo from '../../../shared/images/angular-icon.svg'
import { Container } from '../container/container'
import s from './header.module.scss'

const angularAppUrl = process.env.REACT_APP_ANGULAR_APP_URL || 'localhost:5000'

const Header = () => {
  return (
    <div className={s.header + ' Header'}>
      <Container>
        <ul className={s.list}>
          <li className={s.item}><a href='#' className={s.link}>
            <img className={s.reactLogo} src={reactLogo} alt='Реакт' />
          </a></li>
          <li className={s.item}>
            <h2 className={s.title}>Todo-List</h2>
          </li>
          <li className={s.item}><a className={s.link} href={angularAppUrl}><img className={s.angularLogo} src={angularLogo} alt='angular' /></a></li>
        </ul>
      </Container>
    </div>
  )
}

export default Header