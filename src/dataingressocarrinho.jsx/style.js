import styled from 'styled-components';

export const Style = styled.section`
  .container {
    display: flex;
    justify-content: space-around;
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    height: 600px;
    background-color: #007bff;

 
  }

  .calendar-section, .products-section, .cart-section, .cart-finalization {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .calendar-section {
    flex: 1;
    margin-right: 20px;
    width: 475px;
  }

  .products-section {
    flex: 2;
    margin-right: 20px;
    width: 475px;
  }

  .cart-section {
    flex: 1;
    width: 475px;
    
  }

  .products-section ul,   .cart-finalization ul {
    list-style: none;
    padding: 0;
    height: 500px;
    overflow-y:scroll ;
    overflow-x:hidden 
  }
  .cart-section ul{
    list-style: none;
    padding: 0;
    height: 400px;
    overflow-y:scroll ;
    overflow-x:hidden 
  }
.osBotoes{
  position: relative;
  left: 50px;
}
.estiloprosseguir{
  position: relative;
  left: 100px;
  display: flex;
  width: 300px;
  justify-content: space-between;
}
  .products-section li, .cart-section li, .cart-finalization li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .botoesquantidade {
    display: flex;
    align-items: center;
  }

  .botoesquantidade button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  .botoesquantidade p {
    margin: 0 10px;
  }

  .cart-section .cart-item {
    display: flex;
    flex-direction: row;
  
    align-items: center;
    margin-bottom: 10px;
    width: 400px;
  }

  .cart-section .cart-item div {
    flex: 1;
    
  }

  .cart-section .cart-item button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .finalizandoCarrinho input {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


  .finalizandoCarrinho input {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
.product-item{
  flex-wrap: wrap;
  width: 475px;
height: 100px;
  img{
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  button{
    position: relative;
    left: 400px;
    bottom: 15px;
  }
}   
img{
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .finalizandoCarrinho button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .cart-finalization {
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80vw;
  justify-content: space-evenly;
  
}

.finalizandocarrinho{
 border: 1px solid black;
 border-radius: 10px;

 input{
  display: flex;
  width: 300px;
 }
 button{
  position: relative;
  width: 100px;
  height: 50px;
}
}

`;