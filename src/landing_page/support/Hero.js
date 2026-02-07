import React from 'react';
function Hero() {
    return ( 
       <section className="container-fluid " id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support portal</h4>
        <a href="">Track Tickets</a>
      </div>
       <div className="row p-3 m-3 " >
        <div className="col-6 p-5" >
            <h1 className="fs-3">Search for an answer of browse help topics to crreate a ticket</h1>
            <input placeholder="Eg. how do I activate F&Q" /> <br/>
            <a href="">Track account opeaning</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5" >
            <h1 className="fs-3">Featured</h1>
            <ol>
                <li><a href="">Track account opeaning</a></li>
                <li> <a href="">Track segment activation</a></li>
            </ol>
            
        </div>
      </div>
      </section>
     );
}

export default Hero;