import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer } from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer 
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <h1>{title.toUpperCase()}</h1>
            <span>Shop Now</span>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);