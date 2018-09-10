import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {action, autorun, observer} from 'mobx-react'

import './index.css';
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import ShoppingFooter from './components/ShoppingFooter.js'
import {ITEMS} from './components/Items'
import MobxStore from './components/MobxStore';
import ShoppingCartModel from './components/ShoppingCartModel'

const API = "https://shopping-spring.cfapps.io/api/shoppingItems";
const Home = observer(class Home extends React.Component {
        constructor(props) {
            super(props);
            this.data = new MobxStore();
            this.data.replace({
                items: ITEMS.map(item => {
                    return {...item, count: 1}
                })
            });
        }

        /*
                componentWillMount() {
                    return;
                    fetch(API, {
                        // mode: "no-cors",
                        method: "GET",
                        headers: {
                            "Accept": "application/json"
                        }
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json()
                            }
                        })
                        .then(response => {
                            let _items = response._embedded.shoppingItems;
                            _items.map((item, index) => {
                                item = Object.assign(item, {count: 1})
                            });
                            this.data.replace({items: _items});
                        });
                }
        */
        render() {
            return (
                <div>
                    <Header title="商店没钱"/>
                    <div className="container">
                        <ShoppingList
                            data={this.data}
                            items={this.data.itemData.items}
                        />
                        <ShoppingFooter/>
                        <ShoppingCartModel data={this.data} cart={this.data.cartData.items}/>
                    </div>
                </div>
            )
        }

    }
    )
;

ReactDOM
    .render(
        <Home/>,
        document
            .getElementById(
                'root'
            )
    )
;
