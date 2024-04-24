import { faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Home = () => {
    return (
        <div className='container'>
            <div className='bg w-100 vh-100'>
            <div className='w-100 mt-3'>
                <div className="d-flex justify-content-between">
                    <div className='d-flex ps-3'>
                        <div className='px-35 dot rounded-circle d-flex align-items-center justify-content-center'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <span className='f-14 ps-3 pt-1'>Dashboard</span>
                    </div>
                    <div className='d-flex '>
                        <input type="text" placeholder='Search' className='search' />
                        <div className='px-35 dot rounded-circle d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </div>
                </div>
                <div className='w-100 h-100'>
                    <p>Global Sales by Top Locations</p>
                     <div className='d-flex'>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <img src="https://demos.creative-tim.com/bs3/material-dashboard-pro/assets/img/flags/US.png" alt="" />
                                            </div>
                                        </td>
                                        <td>USA</td>
                                        <td>2.920</td>
                                        <td>53.23%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div></div>
                     </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home