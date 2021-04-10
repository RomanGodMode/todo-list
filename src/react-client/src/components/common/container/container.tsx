import React, { FC } from 'react'
import s from './container.module.scss'

type Props = {
  className?: string
}

export const Container: FC<Props> = ({ className, children }) => (
  <div className={`${s.container} ${className}`}>
    {children}
  </div>
)