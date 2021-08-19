import React from 'react';

const body = ()=>{
    return(
        <>
            <div className='container-fluid' style={{height:'100vh'}} >
                <div className='container-fluid'>
                    <div className='row gx-5'>
                        <div className='col-lg-2 col-md-2 col-12 col-xxl-2'>
                                <ul className=' navbar-nav mx-auto'>
                                    <li className='m-2'><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</li>
                                    <li className='m-2'><i class="fa fa-truck" aria-hidden="true"></i> Ship</li>
                                    <li className='m-2'><i class="fa fa-bookmark-o" aria-hidden="true"></i> Booking</li>
                                    <li className='m-2'><i class="fa fa-clock-o" aria-hidden="true"></i> History</li>
                                    <li className='m-2'><i class="fa fa-cog" aria-hidden="true"></i> Setting</li>
                                </ul>
                        </div>
                        <div className='col-lg-10 col-md-10 col-12 col-xxl-10'>
                            <div className='row gx-5 bg-secondary'>
                                <div className='col-lg-12 col-md-12 col-12 col-xxl-12 border bg-light h-25'>
                                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                                <div className="container-fluid">
                                                    <div ><h3>Ship</h3></div>
                                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                             <li className="nav-item me-1">
                                                                <input className="form-control me-2 text-secondary" type="search" placeholder="CREATE NEW SHIPMENT" aria-label="Search" />
                                                             </li>
                                                            <li className="nav-item m-2">
                                                                <span className='text-secondary '>Printer:</span>
                                                            </li>
                                                            <li class="nav-item dropdown">
                                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    (Print Via Browser)
                                                                </a>
                                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                    <li><hr class="dropdown-divider"/></li>
                                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                                </li>
                                                            </ul>                                                         
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    <div className='col-lg-5 col-md-5 col-12 col-xxl-5 bg-white border border-light-5 h-100' style={{height:'100vh'}}>
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                            <div className="container-fluid">
                                                <div ><a className="navbar-brand text-secondary" href="#"><i class="fa fa-archive" aria-hidden="true"></i><span>80 Order</span></a></div>
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                        <li className="nav-item text-primary">
                                                            <a className="nav-link active text-primary mt-3 mx-3"  aria-current="page" href="#">
                                                            <i class="fa fa-filter" aria-hidden="true"></i></a>
                                                        </li>
                                                        <li className="nav-item mx-3 text-primary">
                                                            <a className="nav-link text-primary mt-3" href="#"><i class="fa fa-repeat" aria-hidden="true"></i></a>
                                                        </li>
                                                    </ul>           
                                            </div>
                                         </div>
                                    </nav>
                                    <hr />
                                    <div><input className='mx-auto' type="search" placeholder='Search Orders' /></div>
                                            <ul className='list-inline'>
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                                <li className='text-center'>Royal hufseleter</li><hr />
                                            </ul>
                                    </div>
                                    <div className='col-lg-5 col-md-5 col-12 col-xxl-5 border border-light-5 bg-white p-5'>
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                            <div className="container-fluid">
                                                <div ><a className="navbar-brand text-secondary" href="#"><span>LOCATINVE 54267e3</span><i class="fa fa-repeat" aria-hidden="true"></i></a></div>
                                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                                        <li className="nav-item text-primary">
                                                            <span>Ship Date: 12/8/20</span>
                                                        </li>
                                                        <li className="nav-item mx-3 text-primary">
                                                        <span>Refrence: 12/8/20</span>
                                                        </li>
                                                    </ul>           
                                                </div>                    
                                            </div>
                                    </nav>
                                             <ul className='list-inline'>
                                                <li className='text-center'><h3>USPS <br />(1-3days)</h3></li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo totam vitae id?</li><hr />
                                            
                                            </ul>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-12 col-xxl-2 border border-light-5 bg-white p-5'>
                                             <ul className='list-inline'>
                                                <li className='text-center'><h3>USPS <br />(1-3days)</h3></li><hr />
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                <li className='text-center'>Lorem ipsum dolor sit amet.</li>
                                                
                                            </ul>
                                    </div>
                            </div>
                                
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}

export default body;