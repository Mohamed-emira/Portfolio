import React from 'react';
import './style.css'

function Work() {
 
  return (
    <div className='work'>
      <div className='container'>
        <h1 className='work-title'>My Work</h1>
        <div className='parts'>
            <div className='part'>
            <i className="fas fa-link icon"></i>
              <h1 className='work-header'>Mobile Ux</h1>
              <hr className='work-line' />
              <p className='work-footer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Doloribus quos omnis voluptas ea ipsam! Voluptas.

</p>
            </div>
            <div className='part'>
            <i className="fas fa-bolt icon"></i>
              <h1 className='work-header'>Mobile Ux</h1>
              <hr className='work-line' />
              <p className='work-footer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Doloribus quos omnis voluptas ea ipsam! Voluptas.

</p>
            </div>
            <div className='part'>
            <i class="fas fa-tachometer-alt icon"></i>
            <h1 className='work-header'>Mobile Ux</h1>
              <hr className='work-line' />
              <p className='work-footer'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Doloribus quos omnis voluptas ea ipsam! Voluptas.

</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
