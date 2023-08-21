import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import './style.css'
import $ from 'jquery'
import '../node_modules/jquery/dist/jquery'
import pic1 from './images/eslider1.png'
import pic2 from './images/eslider2.webp'
import pic3 from './images/eslider3.webp'
import Mens from './components/Mens';
import Womens from './components/Womens'
import Electronics from './components/Electronics'
import { useEffect, useState } from 'react';
import Temperature from './components/Temperature';
import Users from './components/Users';
import menswr from './mens.json'
import Womenswr from './womens.json'
import electronics from './products.json'
function App() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  function searchhandler(e) {
    setSearch(e.target.value)
  }

  /*$(document).ready(function () {

    var count = 0

    $('#toglebtn').click(function () {
      if (count % 2 == 0) {
        $('#toggler').slideUp(600)
        document.getElementById('cartxt').style.top = '100px'
        count++
      }
      else {
        $('#toggler').slideDown(600)
        document.getElementById('cartxt').style.top = '320px'
        count++
      }
    })



  })*/

  console.log(menswr)
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row sticky-top'>
          {/*<div className='col-12 bg-success-subtle navbars'>
            <div className='navlogo'>
              <span><Link to={'/'} className='navlink'><i class="fa-brands fa-xing fa-2xl logo"></i><span className='tittle'>plore</span></Link>  </span>

              <i class="fa-solid fa-bars fa-xl" id='toglebtn' ></i>

            </div>
            <div id='toggler'>

              <div id='navlinks' >

                <Link class="dropdown-toggle navlink" to={''} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-layer-group fa-xl"></i>Catagories
                </Link>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to={'/mens'}>Mens wear</Link></li>
                  <li><Link class="dropdown-item" to={'/womens'}>Womens wear</Link></li>

                  <li><Link class="dropdown-item" to={'/electronics'}>Electronics</Link></li>
                </ul>
                <Link to={'/temperature'} className='navlink'><i class="fa-solid fa-temperature-low fa-xl"></i><span className='labels'>Weather</span></Link>
                <Link to={'/users'} className='navlink'><i class="fa-solid fa-users fa-xl"></i><span className='labels'>Users</span></Link>
              </div>
            </div>


          </div>*/}
          <nav class="navbar navbar-expand-md bg-success-subtle">
            <div class="container-fluid p-0">
              <div className='bnavlogo '>
              <span><Link to={'/'} className='bnavlink'><i class="fa-brands fa-xing fa-2xl logo"></i><span className='tittle'>plore</span></Link>  </span>
              <i class="fa-solid fa-bars fa-xl navbar-toggler border-0"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></i>
              </div>
              
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 bnavul">
                  
                  <li class="nav-item dropdown">
                  <Link class="dropdown-toggle nav-link bnavlink" to={''} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-layer-group fa-xl"></i>Catagories
                </Link>
                    <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to={'/mens'}>Mens wear</Link></li>
                  <li><Link class="dropdown-item" to={'/womens'}>Womens wear</Link></li>

                  <li><Link class="dropdown-item" to={'/electronics'}>Electronics</Link></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                  <Link to={'/temperature'} className='nav-link bnavlink'><i class="fa-solid fa-temperature-low fa-xl"></i><span className='labels'>Weather</span></Link>
                  </li>
                  <li class="nav-item">
                  <Link to={'/users'} className='nav-link bnavlink'><i class="fa-solid fa-users fa-xl"></i><span className='labels'>Users</span></Link>
                  </li>
                  
                </ul>

              </div>
            </div>
          </nav>

        </div>
        <Routes>
          <Route path='/' element={
            <>
              <div className='row'>
                <div className='col-12 cardiv'>
                  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="1500">
                        <img src={pic1} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item" data-bs-interval="1500">
                        <img src={pic2} class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item" data-bs-interval="1500">
                        <img src={pic3} class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <div id='cartxt'>
                    <span className='cartitle'><i class="fa-brands fa-xing fa-2xl "></i>plore</span>
                    <p className='text-light'><br></br>Avail the exclusive features of XPLORE ... <br></br> explore new arrivals in men's fashion, women's fashion and electronics</p>
                  </div>
                </div>
              </div>
              <div className='row mt-3 p-5'>
                <div className='col-md-9 tmens'>
                  <h4>Trending in men's fashion</h4>
                  <Link to={'/mens'} className='viewall'>View all</Link>
                </div>
                <div className='col-md-3'></div>
              </div>
              <div className='row ps-5 pe-5'>

                {menswr.slice(0, 4).map(value =>
                  <div className='col-lg-3 col-sm-6 text-center mb-5'>
                    <div className='trdiv '>
                      <div className='timg img-fluid'><img src={value.image}></img></div>
                      <div className='ttxt'>{value.title}</div>
                    </div>
                  </div>
                )}

              </div>
              <div className='row  p-5 pt-0'>
                <div className='col-md-9 tmens'>
                  <h4>Trending in women's fashion</h4>
                  <Link to={'/womens'} className='viewall'>View all</Link>
                </div>
                <div className='col-md-3'></div>
              </div>
              <div className='row ps-5 pe-5'>

                {Womenswr.slice(0, 4).map(value =>
                  <div className='col-lg-3 col-sm-6 text-center mb-5'>
                    <div className='trdiv '>
                      <div className='timg img-fluid'><img src={value.image}></img></div>
                      <div className='ttxt'>{value.title}</div>
                    </div>
                  </div>
                )}

              </div>

              <div className='row  p-5 pt-0'>
                <div className='col-md-9 tmens'>
                  <h4>Trending Electronics</h4>
                  <Link to={'/electronics'} className='viewall'>View all</Link>
                </div>
                <div className='col-md-3'></div>
              </div>
              <div className='row ps-5 pe-5'>

                {electronics.filter(x => x.category == 'electronics').slice(0, 4).map(value =>
                  <div className='col-lg-3 col-sm-6 text-center mb-5'>
                    <div className='trdiv '>
                      <div className='timg img-fluid'><img src={value.image}></img></div>
                      <div className='ttxt'>{value.title}</div>
                    </div>
                  </div>
                )}

              </div>

            </>
          }></Route>
          <Route path='/mens' element={<Mens />}></Route>
          <Route path='/womens' element={<Womens />}></Route>
          <Route path='/electronics' element={<Electronics />}></Route>
          <Route path='/temperature' element={<Temperature />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>

        <div className='row'>
          <div className='col-sm-4 foot1'>
            <div>
              <i class="fa-brands fa-xing fa-2xl footlogo"></i><br></br>
              <h6>Xplore</h6>
            </div>

          </div>
          <div className='col-sm-8 foot2'>
            <div className='foot21'>
              <div className='categ'>
                <h4>catagories</h4>
                <ul className='footlist'>
                  <li>Men's fashion</li>
                  <li>Women's fashion</li>
                  <li>Electronics</li>
                </ul>
              </div>
              <div className='weathr'>
                <h4>Weather Report</h4>
                <ul className='footlist'>
                  <li>Enabled weather report</li>
                  <li>Enabled weather detection</li>
                  <li>From openweather API</li>
                </ul>
              </div>
            </div>
            <div className='foot22'>
              <h4>users of Xplore</h4>
              <ul className='footlist'>
                <li>users made known to eachother</li>
                <li>randomusers API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
