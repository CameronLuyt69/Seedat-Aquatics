import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';

function ProductDisplayScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword));
  };
  const resetResult = () => {
    dispatch(listProducts(category))
  }

  return (
    <React.Fragment>
      {category && <h2>{category}</h2>}



      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <React.Fragment>
        
          <div className="filter">
            <div className="search-box">
              <form onSubmit={submitHandler} className="searchbox">
                <input
                  name="searchKeyword"
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  type="search"
                  className="search-text browser-default"
                  placeholder="Search product..."
                ></input>
                <button type="submit" className="button"><i className="fas fa-search"></i></button>
                <button className="button" onClick={resetResult}><i className="fas fa-redo-alt"></i></button>
              </form>
            </div>
          </div>

          <ul className="products">
            {products.map((product) => (
              <li key={product._id}>
                <div className="product card-panel">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />
                  </Link>
                  <div className="product-details">
                    <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">R{product.price}</div>
                  <div className="product-rating">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                    />
                  </div>
                  </div>
                  
                </div>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default ProductDisplayScreen;
