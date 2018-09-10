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
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.purchase.bind(this)}>购买</button>
                    </div>
                </div>
            </div>
        </div>)
    }
    purchase = () =>{
        debugger;
    }
});
export default ShoppingCartModel;
