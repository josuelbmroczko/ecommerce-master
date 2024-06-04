import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Style } from './style';
import produtosData from '../produtosdocarrinho/produtos';

export default function DataIngressoCarrinho() {
  const [data, setData] = useState(new Date());
  const [carrinho, setCarrinho] = useState([]);
  const [exibirFinalizacao, setExibirFinalizacao] = useState(false);
  const [exibirCadastro, setExibirCadastro] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nome: '',
    email: '',
    telefone: '',
    metodoPagamento: '',
    numeroCartao: '',
    dataValidade: '',
    codigoSeguranca: ''
  });

  const aoMudar = (novaData) => {
    setData(novaData);
  };

  const adicionarProdutoNoCarrinho = (produto) => {
    const produtoExistenteIndex = carrinho.findIndex(
      (item) => item.id === produto.id
    );

    if (produtoExistenteIndex !== -1) {
      const novoCarrinho = [...carrinho];
      novoCarrinho[produtoExistenteIndex].quantidade += 1;
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const aumentarQuantidade = (index) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item, i) =>
        i === index ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const diminuirQuantidade = (index) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item, i) =>
        i === index ? { ...item, quantidade: item.quantidade - 1 } : item
      )
    );
  };

  const excluirProduto = (index) => {
    setCarrinho(carrinho.filter((item, i) => i !== index));
  };

  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total;
  };

  const handleProsseguir = () => {
    if (!exibirCadastro) {
      setExibirFinalizacao(true);
    } else {
      // Lógica para processar o cadastro e pagamento
      console.log('Informações do usuário:', userInfo);
      console.log('Finalizando pagamento...');
    }
  };

  const handleVoltar = () => {
    setExibirFinalizacao(false);
    setExibirCadastro(false);
  };

  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCadastrar = () => {
    setExibirCadastro(true);
  };

  return (
    <Style>
      <div className="container">
        {!exibirFinalizacao ? (
          <>
            <div className="calendar-section">
              <h1>Escolha a data de utilização</h1>
              <Calendar onChange={aoMudar} value={data} />
              <p>Data selecionada: {data.toDateString()}</p>
            </div>

            <div className="products-section">
              <h2>Selecione os produtos</h2>
              <ul>
                {produtosData.map((produto, index) => (
                  <li key={index} className='product-item'>
                    <img src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-04/20230413_142255.jpg" alt="" />
                    <span>{produto.nome}</span> <br/>
                    <p>{produto.preco}</p>
                    <p>{produto.detalhes}</p>
                    <p>{produto.hora}</p>
                    <button onClick={() => adicionarProdutoNoCarrinho(produto)}>Adicionar</button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cart-section">
              <h2>Carrinho de compras</h2>
              <ul>
                {carrinho.map((produto, index) => (
                  <li key={index} className='cart-item'>
                    <img src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-04/20230413_142255.jpg" alt="" />
                    <div>
                      <p>{produto.nome}</p>
                      <p>{data.toDateString()}</p>
                      <p>{produto.preco}</p>
                    </div>
                    <div className='osBotoes'>
                      <div className='botoesquantidade'>
                        <button onClick={() => diminuirQuantidade(index)}>-</button>
                        <p>{produto.quantidade}</p>
                        <button onClick={() => aumentarQuantidade(index)}>+</button>
                      </div>
                      <p>{produto.preco * produto.quantidade}</p>
                      <button onClick={() => excluirProduto(index)}>Excluir</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='estiloprosseguir'>
                <p>Valor total: R$ {calcularTotal()}</p>
                <button onClick={handleProsseguir}>Prosseguir</button>
              </div>
            </div>
          </>
        ) : (
          <div className='finalizandoCarrinho'>
            <div className="cart-finalization">
              <ul className='finalizandocarrinho'>
              <h2>Finalizando Carrinho</h2>
              {carrinho.map((produto, index) => (
                <li key={index} className='cart-item'>
                  <img src="https://www.aen.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-04/20230413_142255.jpg" alt="" />
                  <div className='produtoInfo'>
                    <p>{produto.nome}</p>
                    <div className='botoesquantidade'>
                      <button onClick={() => diminuirQuantidade(index)}>-</button>
                      <p>{produto.quantidade}</p>
                      <button onClick={() => aumentarQuantidade(index)}>+</button>
                    </div>
                    <p>{produto.preco * produto.quantidade}</p>
                    <button onClick={() => excluirProduto(index)}>Excluir</button>
                  </div>
                </li>
              ))}
              <p>Valor total: R$ {calcularTotal()}</p>
              </ul>
              {exibirCadastro ? (
                <div className='finalizandocarrinho'>
                  <h1>Confirme suas informações</h1>
                  <input type='text' name='nome' placeholder='Nome' onChange={handleChangeUserInfo} />
                  <input type='email' name='email' placeholder='Email' onChange={handleChangeUserInfo} />
                  <input type='tel' name='telefone' placeholder='Telefone' onChange={handleChangeUserInfo} />
                  <input type='text' name='metodoPagamento' placeholder='Método de Pagamento' onChange={handleChangeUserInfo} />
                  <input type='text' name='numeroCartao' placeholder='Número do Cartão' onChange={handleChangeUserInfo} />
                  <input type='text' name='dataValidade' placeholder='Data de Validade' onChange={handleChangeUserInfo} />
                  <input type='text' name='codigoSeguranca' placeholder='Código de Segurança' onChange={handleChangeUserInfo} />
                  <button onClick={handleCadastrar}>Cadastrar</button>
                  <br /><br />
                  <span>Já tem cadastro?</span>
                  <button onClick={() => setExibirCadastro(false)}>Entrar</button>
                </div>
              ) : (
                <div className='finalizandocarrinho'>
                  <h1>Já tem cadastro?</h1>
           
                  <input type="text" placeholder='Email' />
                  <input type="password" placeholder='senha'/> 
                  <button onClick={() => setExibirCadastro(false)}>Entrar</button>
                  <br />                  <br />

                  <span>ainda nao tem cadastro?</span>
                  <br />
                   <button onClick={() => setExibirCadastro(true)}>Cadastrar</button>
                </div>
              )}
            </div>
            <div>
              <button onClick={handleVoltar}>Voltar</button>
            </div>
          </div>
        )}
      </div>
    </Style>
  );
}