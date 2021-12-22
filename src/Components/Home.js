import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import About from './About';
import How from './How';


export default function Home() {

    const [modalisopen, setmodalisopen] = useState(false);
    const setmodalisopentotrue = () => {
        setmodalisopen(true)
    }
    const setmodalisopentofalse = () => {
        setmodalisopen(false)
    }
    const [modalisopen1, setmodalisopen1] = useState(false);
    const setmodalisopentotrue1 = () => {
        setmodalisopen1(true)
    }
    const setmodalisopentofalse1 = () => {
        setmodalisopen1(false)
    }
    return (
        <>
            <div className='deeev'>
                <h1 className='heading'><center><span style={{ color: 'red' }}>K</span><span style={{ color: 'orange' }}>r</span><span style={{ color: 'yellow' }}>i</span><span style={{ color: '	#00FF00' }}>b</span><span style={{ color: '#00bfff' }}>b</span><span style={{ color: 'blue' }}>l</span><span style={{ color: '#FF1493' }}>e</span><span style={{ color: 'purple' }}>.</span><span style={{ color: 'white', fontSize: '5rem' }}>io</span></center></h1>
                <img className="imagebaby" src='https://thumbs.gfycat.com/ShadyVioletHorseshoebat-max-1mb.gif' alt="" style={{ marginLeft: '20px', marginTop: '14px', marginBottom: '0px' }} />
            </div>
            <form action='http://localhost:3001/' id='form1' method='POST'>
                <input id='titi' className='inputbaby' placeholder='Your Name...' type='text' name='username'></input>
            <button className='btnbaby1' type='submit' style={{ fontSize: '1.5rem', fontFamily: 'fantasy' }}>Play !</button>
            </form>

            <button className='btnbaby' onClick={setmodalisopentotrue}><span style={{ fontSize: '1.5rem', fontFamily: 'fantasy' }}>About</span></button>
            <Modal className='modalbaby' isOpen={modalisopen}>
                <button className='xbaby' onClick={setmodalisopentofalse}>❌</button>
                <About />
            </Modal>
            <button className='btnbaby1' onClick={setmodalisopentotrue1}><span style={{ fontSize: '1.5rem', fontFamily: 'fantasy' }}>How To Play</span></button>
            <Modal className='modalbaby1' isOpen={modalisopen1}>
                <button className='xbaby1' onClick={setmodalisopentofalse1}>❌</button>
                <How />
            </Modal>
        </>
    )
}
