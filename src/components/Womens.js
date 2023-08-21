import React from 'react'
import { useEffect, useState } from 'react'
import data from '../womens.json'

function Womens(props) {
  const [products,setProducts] = useState([])
  const [search, setSearch] = useState('')
  function searchhandler(e) {
    var ch = (e.target.value).charAt(0).toUpperCase()+(e.target.value).slice(1)
    setSearch(ch)
  }
  var arr = []
  
  useEffect(()=>{
    /*data.filter(x=>x.category == "women's clothing").map(value=>arr.push(value))
    setProducts(arr)*/
    setProducts(data)
  },[search])
  function opener() {
    var inp = document.getElementById('searchinp')
    var btn = document.getElementById('searchbtn')
    if (inp.style.width == '85%') {
      //$('#searchinp').fadeOut(1000)
      inp.style.width = '0%'
      inp.style.border = '0px'
      btn.style.backgroundColor = 'rgb(58, 114, 116)'
      btn.style.color = 'white'
      btn.style.borderRadius = '20px'
      //btn.style.border = '0px'
     
      
    }
    else {
      //$('#searchinp').fadeIn(1000)
      inp.style.width = '85%'
      inp.style.border = '2px solid cadetblue'
      inp.style.paddingLeft = '20px'
      inp.style.borderRight = '0px'
      //btn.style.border = '2px solid cadetblue'
      btn.style.borderLeft = '0px'
      btn.style.borderRadius = '0px 20px 20px 0px'
      btn.style.backgroundColor = 'white'
      btn.style.color = 'black'
    }

  }
  return (
    <div className='row mt-5 pe-5 ps-5'>
      <div className='col-md-8 categorieshead mb-5'>
        <h4 >WOMEN'S CLOTHING</h4>
      </div>
      <div className='col-md-4 text-end'>

        <input type='text' id='searchinp' placeholder='search for products' value={search} onChange={searchhandler}></input><button id='searchbtn' onClick={opener} ><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>

      </div>
      {products.filter(x => x.title.includes(search)).map(value =>
        <>
          <div className='col-lg-3 col-sm-6 mb-4'>
            <div className="card p-1 ">
              <img className="card-img-top img-fluid mx-auto wcardimg" src={value.image} alt="Card image cap" />
              <div className="card-body">
                <h6 className="card-title text-center">{value.title}</h6>

                <p className="card-text">Price: {value.price}rs <br></br> Rating: <span className='rating'>{value.rating}</span></p>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Womens
