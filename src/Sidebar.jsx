import { faWpforms } from '@fortawesome/free-brands-svg-icons';
import { faBox, faBoxesStacked, faCalendarDays, faChartLine, faChessBoard, faFaceGrinWide, faImage, faLocationDot, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Sidebar = () => {

    return (
        <div className='w-10 bg-black text-white p-3 position-relative'>
            <div className='position-fixed'>
                <div className='d-flex justify-content-center'>
                    <p className='pe-3 f-20'>CT</p>
                    <p className='f-20'>CREATIVE TIM</p>
                </div>
                <hr className='mt-1' />
                <div className='d-flex ps-3'>
                    <div className=' px-35'>
                        <img src="https://demos.creative-tim.com/bs3/material-dashboard-pro/assets/img/faces/avatar.jpg" className='w-100 rounded-circle' alt="" />
                    </div>
                    <span className='f-14 ps-3 pt-1'>Tania Andrew</span>
                </div>
                <hr />
                <div className='w-100 pxh-40 c-pink rounded d-flex align-items-center p-4 mb-3'>
                    <FontAwesomeIcon icon={faBox} className='f-20'/>
                    <span className='ps-3'> Dashboard </span>
                </div>
                <div className='w-100 pxh-40   d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faImage}  className='f-20'/>
                    <span className='ps-3'> Pages </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faBoxesStacked}  className='f-20'/>
                    <span className='ps-3'> Components </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faWpforms}  className='f-20'/>
                    <span className='ps-3'> Forms </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faTable}  className='f-20'/>
                    <span className='ps-3'> Tables </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faLocationDot} className='f-20'/>
                    <span className='ps-3'> Maps </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faChessBoard}  className='f-20'/>
                    <span className='ps-3'> Widgets </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faChartLine}   className='f-20'/>
                    <span className='ps-3'> Charts </span>
                </div>
                <div className='w-100 pxh-40  d-flex align-items-center p-4 mb-3'>
                <FontAwesomeIcon icon={faCalendarDays}   className='f-20'/>
                    <span className='ps-3'> Widgets </span>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
