import React from 'react';
import {client} from '../lib/client';
import {Products, HeroBanner, FooterBanner} from '../components';

const Home = ({products, bannerData}) => {
  return (
   <div>
    <HeroBanner heroBanner={bannerData && bannerData[0]} />
   
    

    <div className='products-heading'>
        <h2>Best selling Products</h2>
        <p>Speakers of many variation</p>
        
    </div>

    <div className='products-container'>
        {
            products.map((product) => <Products key={product.id} product={product} /> )
        }
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: {products, bannerData}
    }
}

export default Home;