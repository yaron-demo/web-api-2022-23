// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות
// המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={

GetAllProducts:(req,res)=>{
    return res.status(200).json({Msg:"All Products"});
},
GetProductById:(req,res)=>{
    return res.status(200).json({Msg:"Get Product By Id " + req.params.id});
},
AddProduct:(req,res)=>{
    return res.status(200).json({Msg:"Add Product"});
},
DeleteProduct:()=>{},
UpdateProduct:()=>{}

};