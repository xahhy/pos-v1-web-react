import React from 'react';
import {InputNumberComponent} from './ShoppingList';
import {observer} from 'mobx-react';

const ShoppingCart = observer((props)=>
    {
        return (
            <div>
                {props.cart && props.cart.map(
                    item => <ShoppingCartItem
                        data={props.data}
                        key={item.barcode}
                        item={item}
                    />)}
            </div>
        )
    }
);

const ShoppingCartItem = observer(class ShoppingCartItem extends React.Component {
    render() {
        return (
            <div className="card shopping-item">
                <div className="card-header">{this.props.item.name}</div>
                <div className="card-body row align-items-center">
                    <div className="col-12 col-sm">单价:{this.props.item.price} ¥</div>
                    <div className="col-12 col-sm-8 row align-items-center align-content-center justify-content-center">
                        <div className="col">数量:</div>
                        <div className="col-7">
                            <InputNumberComponent
                                item={this.props.item}
                            />
                        </div>
                        <div className="col-12 col-sm">{this.props.item.unit}</div>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger" onClick={this.handleDeleteItem}>删除</button>
                    </div>
                </div>
            </div>
        )
    }

    handleDeleteItem = () => {
        this.props.data.deleteCartItem(this.props.item);
    }
});

export default ShoppingCart;