import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { selectMemoizedShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ match, memoizedCollections, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart();

        // optional cleanup function on component unmount
    
    }, 
      //optional dependency array
    [memoizedCollections]  
    );

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
        )
};

const mapStateToProps = createStructuredSelector({
    memoizedCollections: selectMemoizedShopCollections
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);