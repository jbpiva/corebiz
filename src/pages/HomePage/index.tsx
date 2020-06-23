import React, { useState, useEffect} from 'react';
import logoImg from '../../assets/logo.svg';
import vtexImg from '../../assets/vtex.png';
import createdByImg from '../../assets/Createdby.png';
import corebizImg from '../../assets/corebiz.png';
import poweredByImg from '../../assets/Poweredby.png';
import { FiSearch, FiUser, TiShoppingCart, MdHeadsetMic, MdEmail} from 'react-icons/all';
import {ProductsC, DivAfterSend, MainDivNews, MainHeader, Form, BtnMinhaConta, BtnCart, Products, News, Footer, DivInputNews, Error, BtnFooter, Localization, CreatedBy} from './styles'
import api from '../../services/api';
import apiPost from '../../services/apiPost';
import useForm from "../../useForm";
import validate from "../../validateNews";
import '../../index.css';
import Slider from '../../components/Slider';
import images from '../../images'

interface Produtos {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    price: number;
  }
  
const HomePage: React.FC = () => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate
      );
      const [showDiv, setShowDiv] = useState(false);
    const [newSearch, setSearch] = useState('');
    const [inputError] = useState('');
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const initialCount = () => Number(window.localStorage.getItem('count'))
    const [count, setCount] = useState(initialCount)
    const increment = () => setCount(count +1)
    useEffect(
    () => {
        window.localStorage.setItem('count', JSON.stringify(count))
    }, [count])
    
    useEffect(() => {
        api.get('/products').then((response) =>{
            setProdutos(response.data);
            console.log(response.data);
        })
             
        
    }, []);


    function submit(){
        console.log("Submitted Succesful");
        apiPost.post('/newsletter', values).then((response) =>{
            console.log(response);
            console.log(response.data);
        })
        setShowDiv(!showDiv);
    }

    return (
        <>
        <MainHeader>      
            <div>
                <img src={logoImg} alt="Imagem"></img>
            </div>
            <div>
            <Form hasError={!!inputError}>
                <input
                value={newSearch}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="O que está procurando?">
                </input>
                <button>
                    <FiSearch  size={20} />
                </button>
                <hr/>
            </Form>
            </div>
            <div>
                <BtnMinhaConta>
                    <FiUser  size={20} />
                    <span>
                        Minha Conta
                    </span>

                </BtnMinhaConta>
            </div>
            <div>
                <BtnCart>
                    <TiShoppingCart  size={20} />
                    <span>
                        {count}
                    </span>
                </BtnCart>
            </div>
            </MainHeader>

            <Slider slides={images} />

            <Products>
                <h3>Mais Vendidos
                    <hr/>
                </h3>
                <ProductsC>
                {produtos.map((produto) => (
                    <div key={produto.productId}>
                    <img src={produto.imageUrl}/>
                    <p>{produto.productName}</p>
                    <p>{produto.price}</p>
                    
                    <button onClick={increment}>COMPRAR</button>
                    
                    </div>
                    ))}
                
                </ProductsC>
            </Products>
        <MainDivNews>
            <News onSubmit={handleSubmit}>
            <h2>Participe de nossas news com promoções e novidades!</h2>
                 <div>
                    <DivInputNews>
                    <input 
                    className={`${errors.name && "inputError"}`}
                    type= "name" 
                    name= "name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    />
                    {errors.name && <Error>{errors.name}</Error>}
                    </DivInputNews>
                    <DivInputNews>
                    <input
                    className={`${errors.email && "inputError"}`}
                    name= "email"
                    type= "email"                
                    onChange={handleChange}
                    value = {values.email}
                    placeholder="Digite seu email"
                    />
                    
                    {errors.email && <Error>{errors.email}</Error>}
                    
                    </DivInputNews>
                    <div>
                    <button type="submit">Eu quero!</button>
                    </div>
                </div>
                
            </News>
        </MainDivNews>
        {showDiv && 
        <DivAfterSend>
            <p>Seu e-mail foi cadastrado com sucesso!</p>
            <span>A partir de agora você receberá as novidades e ofertas exclusivas.</span>
            <div><button type="submit">Cadastrar novo e-mail!</button></div>
        </DivAfterSend>}
        <Footer>
            
            <Localization>
                <h3>Localização
                    <hr/>
                </h3>
                <p>Rua Ifigênia Maria de Oliveira 397</p>
                <p>Jd. Piratininga - 14403-583</p>
                <p>Franca SP, Brasil</p>
                <p>contato@clikqi.com.br</p>
                <p>+55 16 3713-6985</p>
            </Localization>
            
            <BtnFooter>
                <button>
                    <MdEmail  size={30}/>
                    <p>ENTRE EM CONTATO</p>
                </button>
                <button>
                    <MdHeadsetMic  size={30} />
                    <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
                </button>
            </BtnFooter>
            <CreatedBy>
                <div>
                    <img src={createdByImg} alt="Imagem"/>
                    <img src={corebizImg} alt="Imagem"/>
                </div>
                <div>
                    <img src={poweredByImg} alt="Imagem1"/>
                    <img src={vtexImg} alt="Imagem"/>
                </div>
            </CreatedBy>
        </Footer>
        </>
    )
}

export default HomePage;