import React, { useState } from "react";

export default function Product(props){
    //console.log(props)
    let { info, product, updateHandler, deleteHandler, addProductHandler, cancelNewProductHandler  } = props
    const [productObj, setProductObj] = useState(product ? product : {name:'', description:'',price:'',stock:0})
    const [ isEdit, setEdit ] = useState(info)
    // const [name, setName] =  useState("")
    // const [description, setDescription] = useState("")
    // const [price, setPrice] = useState("")
    // const [stock, setStock] = useState("")

    // if(product){
    //     //console.log("product exists, Setting state")
    //     setName(product.name)
    //     setDescription(product.description)
    //     setPrice(product.price)
    //     setStock(product.stock)
    // }

    //console.log(productObj)
    //console.log(productObj.name, isEdit)



    const pictureEndpoint = "https://loremflickr.com/640/480/transport";
    const picture = (product) ? `${pictureEndpoint}=${product._id}` : pictureEndpoint
   
    // //console.log(productObj.name)
    // //console.log(productObj.description)
    // //console.log(picture)
    // //console.log(productObj.price)
    // //console.log(productObj.stock)

    const limitString = (string = "", limit = 50) => {
        let appendix = (string.length > limit) ? "..." : ""
        return string.substring(0, limit) + appendix;
    }

    const onUpdate = (e) => {
        setEdit(!isEdit)
        //console.log(e)
        if(!info){
            updateHandler(productObj)
        }
        
        // //console.log("update", product)
        // updateHandler(product)
    }

    const onDelete = (e) => {
        e.preventDefault()
        //console.log(e)
        //console.log("delete", product)
        deleteHandler(product)
    }

    const newProduct = (e) => {
        //e.preventDefault()
        //console.log(e)
        //console.log("new product", productObj)
        addProductHandler(productObj)
    }

    const clickHandler = (e) =>{
        e.preventDefault()
        //console.log("update / new button clicked",e)
        if(info){
            newProduct(productObj)
            
        }else{
            onUpdate(productObj)
        }
    }

    const cancel = (e) =>{
        e.preventDefault()
        //console.log("cancelling")
        if(info){
            cancelNewProductHandler()
        }
        setProductObj(product)
        setEdit(false)

    }

    if(isEdit){
        //console.log("edit or new product", isEdit)
        return(
            <div className="card">
                <form>
                    <div className="card-header"><h4><input type="text" className="form-control text-center" onChange={e => setProductObj({...productObj, name:e.target.value})}  id="name" placeholder={(productObj.name) ? productObj.name : "Product Name"} required></input></h4></div>
                    
                    <textarea className="form-control text-center"  id="description" onChange={e => setProductObj({...productObj,description:e.target.value})} placeholder={(productObj.description)?productObj.description:"Product Description..."}required></textarea>
                    <label htmlFor="price">Price: </label><input className="form-control text-center" type='text' onChange={e => setProductObj({...productObj,price:e.target.value})}  placeholder={productObj.price || "0.00"} id="price" required></input>
                    <label htmlFor="stock">Stock: </label><input className="form-control text-center" type="number" onChange={e => setProductObj({...productObj,stock:e.target.value})}  id="stock" required></input>
                    <button className="btn btn-primary form-control" onClick={e => clickHandler(e)}>Save</button>
                    <button className="btn btn-warning form-control" onClick={e => cancel(e)}>Cancel</button>
                </form>
            </div>
        )
    }

    return (
        <div className="card col m-1">
            <div className="card-header"><h4>{productObj.name}</h4></div>
            <div className="card-body">
                <img className="w-75" src={picture} alt="product"/>
                <p>{limitString(productObj.description)}</p>
            </div>
            <div className={"card-footer"+ ((productObj.stock>3)?"":"bg-danger")} >
                <strong className="me-2">${productObj.price}</strong>
                   {productObj.stock} left  
                <button className="btn btn-outline-dark mx-2 my-1" onClick={onUpdate}>Edit</button>
                <button className="btn btn-outline-primary mx-2 my-1" onClick={onDelete}>Delete</button>
                </div>
            
        </div>
    );
}

// name	"Rustic Plastic Gloves"
// description	"The Apollotech B340 is a… life and modern design"
// img	"https://loremflickr.com/640/480/transport"
// price	"468.00"
// stock	47
// _id	"5"

