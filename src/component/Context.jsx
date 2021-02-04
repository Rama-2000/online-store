import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "T-Shirt",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-01.jpg",
                "description": "Classic-Fit Short-Sleeve V-Neck T-Shirt",
                "content": "A wardrobe staple, this classic long-sleeve button down shirt features a single chest pocket,Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Button Down Poplin Shirt",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-02.jpg",
                "description": "Essentials Women's Classic Poplin Shirt",
                "content": "With a shirt-tail hem and a single button cuff, perfect for casual everyday wear Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Bomber Jacket",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-04.jpg",
                "description": "The Drop Women's   Hooded Bomber Jacket",
                "content": "Models are 5'10/178 cm and wearing a size S and XXL This fun faux-fur bomber has a generous hood for a casual, sporty look. Comfy pockets and elastic cuffs provide a cozy defense against the elements.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Cartier Clé de",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-06.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Cartier Clé de Cartier WSCL0007",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Women's Fitted Linen Blazer",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-07.jpg",
                "description": "Women's Fitted Linen Blazer",
                "content": "Pull On closure, Machine Wash, Designed in Europe - please refer to size chart for specific measurements to achieve the perfect fit",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Converse Chuck",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-09.jpg",
                "description": "All Star High Top Sneakers",
                "content": "Quality vulcanized rubber sole, Canvas, Platform measures approximately 0.25",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Men's Low Sneakers",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
                "description": "Shaft  approximately low-top from arch",
                "content": "RETRO BASKETBALL STYLE: Using a combination of leather, synthetic leather and rubber, the NikeCourt Vision's design draws inspiration from mid-1980s basketball shoes.",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Nomos Tangomat",
                "src": "https://preview.colorlib.com/theme/cozastore/images/product-15.jpg",
                "description": "Deep Black Dial Mens Watch 604",
                "content": "Nomos Tangomat Ruthenium Datum 604",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
 