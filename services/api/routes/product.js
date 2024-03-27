const express = require("express");
const router = express.Router();
const Product = require("../../model/product");
const mongoose = require('mongoose');

// router.post("/", async (req, res) => {
//   try {
//     const { name, price, description, discount, size, quantity, category } =
//       req.body;
//     const product = new Product({
//       name,
//       price,
//       description,
//       discount,
//       size,
//       quantity,
//       category,
//     });
//     await product.save();
//     res.status(201).send(product);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.post("/", (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    discount: req.body.discount,
    size: req.body.size,
    quantity: req.body.quantity,
    category: req.body.category,
    imageURL: req.body.imageURL,
    createdAt: new Date(),
  });
  product
    .save()
    .then((result) => {
      res.status(200).json({
        products: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
  Product.find({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        product: result,
      });
    })
    .catch((result) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
