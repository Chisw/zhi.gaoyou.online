import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWeibo, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

export default function FA(props) {

  const { icon, className } = props;

  const iconMap = {
    'angle-double-up': faAngleDoubleUp,
  }

  return (
    <FontAwesomeIcon className={`${className}`} icon={iconMap[icon]} />
  )
}
