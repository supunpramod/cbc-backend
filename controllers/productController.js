import Product from "../models/product.js";
export function getProduct(req,res){
    productRouter.find().then(
        (productList)=>{
            res.json({
                list:productList
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message:"error"
            })
        }
    )
}


export function createProduct(req,res){
    console.log(req.user)
    if(req.user==null){
        res.json({
            message:"You are not logged in"
        })
        return
    }

    const product=new Product(req.body)

    product.save().then(()=>{
        res.json({
            message:"Product created"
        })
    }).catch(()=>{
        res.json({
            message:"Product not created"
        })
    })
    

}


export function deleteProduct(req,res){
    Product.dleteOne({name:req.body.name}).then(
        ()=>{
            res.json(
                {
                    message:"Product deleted successfully"
                }
            )
        }
    ).catch(()=>{
            res.json(
                {
                    message:"Product not deleted"
                }
            )
        }
    )
}

export function getProductByName(req,res){
   
    const name=req.params.name;
    res.json({
        message:"Product name is "+ name
    })
}