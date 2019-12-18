// Shop Components 
import React from "react";
import { Route } from 'react-router-dom';
import collectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';

const ShopPage = ({ match }) => (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={collectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
      );

export default ShopPage;
