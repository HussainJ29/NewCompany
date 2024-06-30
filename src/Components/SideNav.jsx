import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div>
        <Link to="/"><Button className='my-2'>Company List</Button></Link>
        <Link to="/form"><Button className='my-2'>Company Form</Button></Link>
    </div>
  )
}

export default SideNav