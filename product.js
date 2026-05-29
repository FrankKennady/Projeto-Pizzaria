const listProducts =[
    {
        id: 1, name: "Pizza de Calabresa", price: 29.99, description: "Deliciosa pizza de calabresa com queijo e molho de tomate.",
        image: "https://tse1.explicit.bing.net/th/id/OIP.E5NEgsXnYFGBJULfBYTCyQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "tradicional"
    },

    {
        id: 2, name: "Pizza de Margherita", price: 24.99, description: "Clássica pizza de margherita com molho de tomate, queijo e manjericão.",
        image: "https://tse1.mm.bing.net/th/id/OIP.mOHrEjWBDLKYDNGZb3bTVgHaEA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "tradicional"
    },

    {
        id: 3, name: "Pizza de Pepperoni", price: 34.99, description: "Saborosa pizza de pepperoni com queijo e molho de tomate.",
        image: "https://tse4.mm.bing.net/th/id/OIP._Tuj6ElUF8jhhcSg41_V_QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",type: "tradicional"
    },

    {
        id: 4, name: "Pizza de Frango com Catupiry", price: 39.99, description: "Pizza de frango com catupiry, queijo e molho de tomate.",
        image: "https://www.divinho.com.br/blog/wp-content/uploads/2021/04/Pizza-de-Frango-com-Catupiry.jpg", type: "tradicional"
    },

    {
        id: 5, name: "Pizza de Quatro Queijos", price: 44.99, description: "Saborosa pizza de quatro queijos com molho de tomate.",
        image: "https://tse4.mm.bing.net/th/id/OIP.TCTy3qzeQ_C5reDMsdhB3wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "tradicional"
    },

    {
        id: 6, name: "Pizza Portuguesa", price: 34.99, description: "Deliciosa pizza portuguesa com molho de tomate, queijo, presunto, ovo e azeitonas.",
        image: "https://tse4.mm.bing.net/th/id/OIP.FHhE9Y2VbWNE_z9DGpzoegHaEj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "tradicional"
    },

    {
        id: 7, name: "Pizza Vegana de Legumes", price: 39.99, description: "Saborosa pizza vegana de legumes com molho de tomate e queijo vegano.",
        image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-vegetariana-00.jpeg", type: "vegana"
    },

    {
        id: 8, name: "Pizza Vegana de Cogumelos", price: 44.99, description: "Deliciosa pizza vegana de cogumelos com molho de tomate e queijo vegano.",
        image: "https://img.freepik.com/fotos-gratis/pizza-vegetariana-com-abobrinha-tomate-pimentao-e-cogumelos-na-mesa-de-madeira_123827-21873.jpg", type: "vegana"
    },

    {
        id: 9, name: "Pizza Vegana de Abobrinha", price: 39.99, description: "Saborosa pizza vegana de abobrinha com molho de tomate e queijo vegano.",
        image: "https://tse4.mm.bing.net/th/id/OIP.G48z5sHEV2wtyn67F8fviQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "vegana"
    },
    {
        id: 10, name: "Pizza Vegana de Berinjela", price: 44.99, description: "Deliciosa pizza vegana de berinjela com molho de tomate e queijo vegano.",
        image: "https://tse2.mm.bing.net/th/id/OIP.XSD1nODDGQWllw1PAHwMsAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "vegana"  
    },

    {
        id: 11, name: "pizza doce de chocolate", price: 29.99, description: "Deliciosa pizza doce de chocolate com cobertura de chocolate e morangos.",
        image: "https://tse3.mm.bing.net/th/id/OIP.NGXZcmVXidUgg3HxYZQEPwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "doce"
    },

    {
        id: 12, name: "Pizza Doce de Banana com Canela", price: 24.99, description: "Saborosa pizza doce de banana com canela e cobertura de açúcar e canela.",
        image: "https://tse3.mm.bing.net/th/id/OIP.somPlc4dz0DJumxlbBHYVgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", type: "doce"
    },

    {
        id:13, name: "Refrigerante <br> de Guaraná", price: 9.99, description: "Refrigerante de guaraná gelado para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/d4/33/2a/d4332a28d19928c04e07ae30ff530912.jpg", type: "bebida"
    },

    {
        id: 14, name: "Refrigerante <br> de Coca-Cola", price: 9.99, description: "Refrigerante de Coca-Cola gelado para acompanhar sua pizza.",
        image: "https://i.pinimg.com/1200x/4b/ca/ca/4bcacaf697ab5dc7f3c56fc82fc516c2.jpg", type: "bebida"      
    },

    {
        id: 15, name: "Refrigerante <br> de Fanta Laranja", price: 9.99, description: "Refrigerante de Fanta Laranja gelado para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/bb/fa/23/bbfa2382d20f02a8ed0bd8f554ae6c30.jpg", type: "bebida"
    },

    {
        id: 16, name: "suco de laranja", price: 9.99, description: "Suco de laranja natural para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/66/36/40/66364059144d7a6bf7d154cf59c22ad9.jpg", type: "bebida"  
    },

    {
        id: 17, name: "Suco de Uva", price: 9.99, description: "Suco de uva natural para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/1f/60/cc/1f60cc14430b9830210215686029568f.jpg", type: "bebida"
    },

    {
        id: 18, name: "suco de abacaxi", price: 9.99, description: "Suco de abacaxi natural para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/8d/45/04/8d4504b72f6de03646607f125eb02b82.jpg", type: "bebida"
    },

    {
        id: 19, name: "cerveja heineken", price: 9.99, description: "Cerveja Heineken gelada para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/f9/e3/05/f9e30541b6c793f1ce8f3226b81aeae6.jpg", type: "bebida"
    },

    {
        id: 20, name: "cerveja budweiser", price: 9.99, description: "Cerveja Budweiser gelada para acompanhar sua pizza.",
        image: "https://i.pinimg.com/1200x/89/c1/94/89c19487fab8e3d3ef81f96b713ef52b.jpg", type: "bebida"
    },

    {
        id: 21  , name: "cerveja corona", price: 9.99, description: "Cerveja Corona gelada para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/c4/fb/db/c4fbdb9bf6f846da21040edbd955ba7d.jpg", type: "bebida"
    },

    {
        id:22, name: "vinho tinto", price: 9.99, description: "Vinho tinto para acompanhar sua pizza.",
        image: "https://i.pinimg.com/1200x/55/e4/8c/55e48c5db52181e9f005dfd2526522db.jpg", type: "bebida"
    },

    {
        id: 23, name: "cafe expresso", price: 9.99, description: "Café expresso para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg", type: "bebida"
    },

    {
        id: 24, name: "agua mineral", price: 9.99, description: "Água mineral para acompanhar sua pizza.",
        image: "https://i.pinimg.com/736x/86/4f/b7/864fb76a67b876647ec3cd01c1d04641.jpg", type: "bebida"
    }

]