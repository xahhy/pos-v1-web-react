import React from 'react';

import ShoppingCart from "./ShoppingCart";

import {observer} from 'mobx-react';

const ShoppingCartModel = observer(class ShoppingCartModel extends React.Component {
    render() {
        return (<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">购物车</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ShoppingCart
                            data={this.props.data}
                            cart={this.props.cart}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">关闭</button>
                        <button type="button" className="btn btn-primary" onClick={this.purchase}>购买</button>
                    </div>
                </div>
            </div>
        </div>)
    }
    purchase = () =>{
        const items = this.props.cart.filter(item=>item.count > 0).map(item=>{
            if (item.count > 1) return item.barcode+'-'+item.count;
            else return item.barcode;
        });
        console.log(items);
        alert(items)
    };
});
export default ShoppingCartModel;
