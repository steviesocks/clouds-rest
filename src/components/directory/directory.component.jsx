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
                  imageUrl: 'https://www.salomon.com/sites/default/files/styles/crop_link_ratio/public/httr/2019-08/Header-how-to-choose-hiking-shoes-boots.jpg?itok=u6hJuax8',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'tents',
                  imageUrl: 'https://cdn.hiconsumption.com/wp-content/uploads/2015/05/Best-Backpacking-Tents.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'backpacks',
                  imageUrl: 'https://gotonationalparks.com/wp-content/uploads/2019/02/10-Best-Ultralight-Backpacks.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: "women's",
                  imageUrl: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/03/piccourtesyfjallraven-bestwomenshikingpants.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: "men's",
                  imageUrl: 'https://contents.mediadecathlon.com/p1525110/k$258ff5ef33d9b954de13079b7034dfff/mens-mountain-trekking-waterproof-convertible-trousers-trek500-blue.jpg?&f=800x800',
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
                    this.state.sections.map(({title, imageUrl, id, size})=> (
                        <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )

    }

}


export default Directory;