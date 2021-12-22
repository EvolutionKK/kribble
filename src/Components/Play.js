import React from 'react';
import Can from '../Can';


function Play() {

    return (
        <>
            <div>
                <div className='deeev1'>
                    <h3 className='heading1'><span style={{ color: 'red' }}>K</span><span style={{ color: 'orange' }}>r</span><span style={{ color: 'yellow' }}>i</span><span style={{ color: '	#00FF00' }}>b</span><span style={{ color: '#00bfff' }}>b</span><span style={{ color: 'blue' }}>l</span><span style={{ color: '#FF1493' }}>e</span><span style={{ color: 'purple' }}>.</span><span style={{ color: 'white', fontSize: '4rem' }}>io</span></h3>
                    <img src='https://clipart.world/wp-content/uploads/2020/08/cartoon-pencil-png-transparent.png' alt="" style={{ marginLeft: '0px', marginTop: '0px', marginBottom: '0px', marginRight: '70rem', height: '7rem' }} />
                </div>
                <center><nav class="navbar bg-light" style={{ display: 'block', width: '90rem', height: '4rem', marginTop: '1rem', alignContent: 'normal' }}>
                    <span class="navbar-text">
                        <h3 style={{ textAlign: 'left', display: 'flex' }}><div style={{ marginTop: '7px' }}>ROUND</div><div style={{ marginLeft: '30px' }} > TIME <img className="image2baby" src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Alarm_Clock_GIF_Animation_High_Res.gif' alt="" /></div><div style={{ marginLeft: '50rem', marginTop: '7px' }}>Number of Letters:</div></h3>

                    </span>
                <Can/>  
                </nav>
                </center>
                <nav class="navbar bg-light" style={{ display: 'inline-block', width: '16rem', height: '25rem', marginTop: '0.6rem', marginLeft: '2.5rem', marginBottom: '20rem' }}>
                    <span class="navbar-text">
                    </span>
                </nav>
                <img className='mg' style={{marginLeft:'58rem'}} src='https://www.newsshuttle.com/wp-content/uploads/2020/06/HS2.jpg' alt="" />
                <nav calssName='overlay' class="navbar bg-light" style={{ display: 'inline-block', width: '17.8rem', height: '30rem', marginTop: '0.6rem', marginLeft: '58rem' }}>
                    <span class="navbar-text">
                    </span>
                </nav>
            </div>
            <input className='inpbaby' type='text' placeholder='Guess here...' />
        </>
    )
}
export default Play;