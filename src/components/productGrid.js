import React from "react";
import Product from "./product"
import { productsAPI } from "../REST/productsApi";

// export default function ProductGrid(){
//     const [productList, setProductList] = useState('')

//     const fetchProducts 

//     useEffect(()=> {
//         console.log("fetching")
//         fetchProducts() 
//     }, [])

//     const products = () => productList.map((product)=>{
//                 return(<Product key={product._id} product={product}/>)
//             })

    
//     return 
// }

export default class ProductGrid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            showCreateNew: false,
            btnCreateNew: "Add New Product"
        }
        this.addProductHandler = this.addProductHandler.bind(this)
        this.updateHandler = this.updateHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }
    

    componentDidMount(){
        this.fetchProducts();
    }

    fetchProducts = async () => {
        const products = await productsAPI.get();
        this.setState({ products })
        console.log(products)
    }

    updateHandler = async (updatedProduct) => {
        console.log('updating', updatedProduct.name)
        await productsAPI.put(updatedProduct);
        this.fetchProducts();
    }

    deleteHandler = async (product) => {
        console.log('deleting', product.name)
        await productsAPI.delete(product);
        this.fetchProducts();
    }

    addProductHandler = async (product) => {
        console.log("creating new product", product.name)
       await productsAPI.post(product);
       this.setState(state=>({showCreateNew: !state.showCreateNew, btnCreateNew:"Add New Product"}))
       this.fetchProducts();
    }

    createNewProduct = (e) => {
        e.preventDefault()
        console.log(e)
        console.log("should change button text?", this.state.showCreateNew)
        if(this.state.showCreateNew){
            console.log("changing button text")
            this.setState(state => ({ btnCreateNew: "Add New Product"}))
        }else{
            this.setState(state => ({ showCreateNew: !state.showCreateNew, btnCreateNew: "Cancel" }), console.log(this.state.showCreateNew))
        }
    }

    render(){
        return(
            <div className="product-list row row-cols-4">
                <button className="btn btn-accent3 col-12" onClick={this.createNewProduct}>{this.state.btnCreateNew}</button>
                {(this.state.showCreateNew) ? <Product key="new" info addProductHandler={this.addProductHandler}/> : ""}
                {this.state.products.map(product => {
                    return( <Product
                            key={product._id}
                            product={product}
                            updateHandler={this.updateHandler}
                            deleteHandler={this.deleteHandler}/>)
                })}
            </div>
        )
    }
}