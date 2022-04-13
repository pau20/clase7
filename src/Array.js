

const array = [
    {
        id: 1,
        title:"Zapatillas deportivas Adidas/Negras",
        price: "$16.000",
        brand: "Adidas",
        category: "Hombre",
        stock: 26,
        img:{ 
        url:"http://falabella.scene7.com/is/image/FalabellaAR/6047115?wid=423&hei=423&qlt=70&crop=0,0,0,0"
    }
    },
    {
        id: 2,
        title: "Zapatillas deportivas Adidas/Grises",
        price: "$14.000",
        brand:"Adidas",
        category: "Hombre",
        stock: 48,
        img:{
            url: "http://falabella.scene7.com/is/image/FalabellaAR/4900251?wid=423&hei=423&qlt=70&crop=0,0,0,0",
        } 
    },
    {
        id: 3,
        title: "Zapatillas deportivas Fila/Negras",
        price: "$21.000",
        brand: "Fila",
        category: "Hombre",
        stock: 295,
        img: {
            url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6a2c8ce3/products/FI_F01ST004023-1645/FI_F01ST004023-1645-1.JPG",
        }
        },
    {
        id: 4,
        title: "Zapatillas Urbanas Nike/Multicolor",
        price: "$9.500",
        brand: "Nike",
        category: "Mujer",
        stock: 8,
        img: {
            url:"https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5291702b/products/NI_DC2533-600/NI_DC2533-600-1.JPG",
        }
    },
    {
        id: 5,
        title: "Zapatillas deportivas Nike/Blancas",
        price: "$20.300",
        brand: "Nike",
        category: "Mujer",
        stock: 81,
        img: {
            url:"https://essential.vteximg.com.br/arquivos/ids/507938-454-423/316-0222_1.jpg?v=637756035595700000",
        }
    },
    {
        id: 6,
        title: "Zapatillas Lotto/Gris",
        price: "$5.780",
        brand: "Lotto",
        category: "Niños",
        stock: 30,
        img: {
            url:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw77a6ccbe/products/LO_N2118845GL/LO_N2118845GL-1.JPG",
        }
    }
]

export const getArray = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            return resolve(array)
        }, 2000)
    })
}

// export default {array}