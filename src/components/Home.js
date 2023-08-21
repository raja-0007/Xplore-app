import React from 'react'
import menswr from '../mens.json'
import Womenswr from '../womens.json'
import electronics from '../products.json'
import pic1 from '../images/eslider1.png'
import pic2 from '../images/eslider2.webp'
import pic3 from '../images/eslider3.webp'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
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
  )
}

export default Home
