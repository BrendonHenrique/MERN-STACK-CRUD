import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = { 
            products: []
        }
    }
    
    componentDidMount(){
        this.loadProducts();
    }
        
    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({products: response.data.docs})
    }

    render(){
        
        let { products } = this.state;
        return (
                
            <div className="products">
                {products.map( product => (
                    <article className="product-list" key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                        <hr style={{marginBottom: 10, marginTop: 10}} />
                    </article>
                ))} 
            </div>
        );
    }
}