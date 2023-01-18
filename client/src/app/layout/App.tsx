import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products";
import Header from "./Header";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'description',
        pictureUrl: 'http://picsum.photos/200'
      }])
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct}/> 
      </Container>
    </ThemeProvider>
  );
}

export default App;
