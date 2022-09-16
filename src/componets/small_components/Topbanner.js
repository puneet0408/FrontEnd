import React, { useEffect, useState } from 'react'
import img from '../../static/images/topbanner.jpg'
import '../../style/Topbanner.css'
let  Banner = () =>
{
    return (<div>
    <div className="banner">
        <div className="topcut"></div>
        <div className="bottomcut"></div>
        <div className="formarea">
        <div className="queryform">
        <h1>Quick Inquiry</h1>
        </div>
        </div>

        <div className="text-area">

        </div>
    </div>
    </div>
    );
}
export default Banner;