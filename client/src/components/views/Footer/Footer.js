import React from 'react'
import {Icon} from 'antd';
import '../../../index.css'
function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',
        }}><p>Web 3 project  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
