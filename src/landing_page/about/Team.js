import React from 'react';
function Team() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className="text-center">
          People
        </h1>
      </div>

      <div className="row p-3 text-muted fs-6" style={{ lineHeight:"1.8", fontSize:"1.rem"}}>
        <div className="col-6 p-3 text-center">
            <img src="media/images/shivimg1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h4 className='mt-4'>Shivam Kumar</h4>
            <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 mt-5">
           <p>Shivam bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry</p>
           <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
           <p>Playing basketball is his zen.</p>
           <p>Connect on <a href=''>Homepage</a> /<a href=''>TradingQnA</a> /<a href=''>Twitter</a> </p>
        </div>
         </div>



         <div className="row p-3 text-muted fs-6" style={{ lineHeight:"1.8", fontSize:"1.rem"}}>
        <div className="col-6 p-3 text-center">
            <img src="media/images/mohit1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h4 className='mt-4'>Shivam Kumar</h4>
            <h6>Co-founder & CFO</h6>
        </div>
        <div className="col-6 p-3 mt-5">
           <p>Mohit bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry</p>
           <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
           <p>Playing basketball is his zen.</p>
           <p>Connect on <a href=''>Homepage</a> /<a href=''>TradingQnA</a> /<a href=''>Twitter</a> </p>
        </div>
         </div>




         <div className="row mt-5 text-center">
            <div className="col-4 mt-5 p-5 text-muted">
                <div>
                    <img src="media/images/har.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4 '>Shivam Kumar</h5>
            <h6>CTO </h6>
                </div>

                <div>
                    <img src="media/images/shivimg1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4'>Shivam Kumar</h5>
            <h6>COO</h6>
                </div>
            </div>
            <div className="col-4 mt-5 p-5 text-muted fs-6">
                <div>
                    <img src="media/images/shivimg1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4'>Shivam Kumar</h5>
            <h6>CCO</h6>
                </div>

                <div>
                    <img src="media/images/shivimg1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4'>Shivam Kumar</h5>
            <h6>Director</h6>
                </div>
            </div>
            <div className="col-4 mt-5 p-5 text-muted fs-6">
                <div>
                    <img src="media/images/shivimg1.jpg" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4'>Shivam Kumar</h5>
            <h6>Chief of Education</h6>
                </div>

                <div>
                   <img src="media/images/harrr.png" style={{borderRadius:"100%" ,width:"60%"}}/>
            <h5 className='mt-4'>Harshit Soni</h5>
            <h6>Director Strategy</h6>
                </div>
            </div>


         </div>

    </div>
     );
}

export default Team;