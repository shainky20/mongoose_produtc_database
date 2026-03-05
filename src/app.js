import express from "express";
import productRoutes from "./modules/products/product.routes.js";
import notFoundHandler from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middleware for JSON request body
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Product API",
        routes: [
            "POST /api/products",
            "GET /api/products",
            "GET /api/products/:id",
            "PUT /api/products/:id",
            "DELETE /api/products/:id"
        ]
    });
});

// Product routes
app.use("/api/products", productRoutes);

// Middleware for invalid routes
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

export default app;