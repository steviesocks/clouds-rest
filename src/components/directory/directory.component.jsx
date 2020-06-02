import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                  title: 'boots',
                  imageUrl: 'https://i.ibb.co/0YTqWd1/Header-how-to-choose-hiking-shoes-boots.jpg',
                  id: 1,
                  linkUrl: 'boots'
                },
                {
                  title: 'tents',
                  imageUrl: 'https://i.ibb.co/cTrxQ81/Best-Backpacking-Tents.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'backpacks',
                  imageUrl: 'https://i.ibb.co/q0pKkvL/10-Best-Ultralight-Backpacks.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: "women's",
                  imageUrl: 'https://i.ibb.co/4pcBYm3/piccourtesyfjallraven-bestwomenshikingpants.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: "men's",
                  imageUrl: 'https://i.ibb.co/48RTFKq/mens-mountain-trekking-waterproof-convertible-trousers-trek500-blue.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps})=> (
                        <MenuItem  key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )

    }

}


export default Directory;