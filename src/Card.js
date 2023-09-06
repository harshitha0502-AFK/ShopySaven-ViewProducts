import React from 'react';

const Card = ({products,fetchProducts}) => {

  const labelStyle ={
    marginLeft: '20px',
    padding:'3px',
    fontWeight:'bold',
    fontStyle:'italic',
    fontSize:'20px',
    textDecoration:'underline'
  };

  const value ={
    fontSize: '18px',
    fontWeight: 'normal',
    padding:'5px',
    marginLeft:'5px',
  }

  return (
       <div>
        <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',color:' Maroon',fontStyle:'italic'}}>ShopSavvyHaven</h1>
        <div className='card-main' style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', 
             gap: '50px',padding: '20px'}}>

              {products.map((product) => (
                        <div className='card'style={{ justifyContent : 'center', alignItems : 'center',backgroundColor :'White',
                            borderRadius :'20px',maxWidth :'400px',marginLeft :'10px',boxShadow:'12px 16px 16px rgba(0, 0, 0, 0.1)',padding:'20px'}} key={product.id}>
                               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '35px',padding: '25px',alignItems: 'center'}}>
                                            {product.images.map((image, index) => (
                                              <img
                                                key={index}
                                                src={image}
                                                // eslint-disable-next-line
                                                alt={`Image Loading` + `${index + 1}`}
                                                style={{ maxWidth: '100px', marginRight: '10px' }}
                                              />
                                            ))}
                               </div>
                                      <h5 style={{fontSize:'30px',fontStyle:'italic',textAlign:'center'}}>{product.title}
                                      <p>
                                      <span style={{ fontSize: '18px',fontWeight: 'normal', padding:'1px', marginLeft:'5px',}}>({product.description})</span>
                                      </p></h5>
                                      
                                      
                                      <p>
                                      <span style={labelStyle}>Brand :</span>{' '}
                                      <span style={value}>{product.brand}</span>
                                      </p>

                                      <p>
                                      <span style={labelStyle}>Price :</span>{' '}
                                      <span style={value}>{product.price}</span>
                                      </p>

                                      <p>
                                      <span style={labelStyle}>discount Percent :</span>{' '}
                                      <span style={value}>{product.discountPercentage}</span>
                                      </p>

                                      <p>
                                      <span style={labelStyle}>Rating :</span>{' '}
                                      <span style={value}>{product.rating}</span>
                                      </p>
                                      
                                      <p>
                                      <span style={labelStyle}>Stock : </span>{' '}
                                      <span style={value}>{product.stock}</span>
                                      </p>
                  


                                 
                            
                              <button style={ { backgroundColor: 'black',color: 'white', padding: '10px 20px',
                              borderRadius: '10px',margin:'20px', cursor: 'pointer',
                              alignItems:'end' }} onClick={fetchProducts}>Add to Cart</button>

                        </div>
              ))}
         </div>
      </div>  
  )
}

export default Card;
