import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'
import {Link} from 'react-router-dom'

export default class Main extends Component{
    state = {
        products:[],
        productInfo:{},
        page:1
    }
    componentDidMount(){
        this.loadProducts()
    }
    loadProducts = async (page = 1)=>{
        const resposta = await api.get(`/products?page=${page}`)
        const {docs, ...productInfo} = resposta.data
        this.setState({products: docs, productInfo, page})
    }
    preview = ()=>{
        const { page, productInfo} = this.state
        if (page === 1) return
        const pageNumber = page - 1
        this.loadProducts(pageNumber) 
    }
    next = ()=>{
        const { page, productInfo} = this.state
        if (page === productInfo.pages) return
        const pageNumber = page + 1
        this.loadProducts(pageNumber) 
    }
    render(){
        const {products, page, productInfo} = this.state
        return(
            <div className='product-list'>
                {products.map(product => (
                    <article key = {product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}> Acessar </Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled = {page ===1} onClick={this.preview}> Anterior </button>
                    <button disabled = {page ===productInfo.pages} onClick={this.next}> Posterior </button>
                </div>
            </div>
        )
    }
}
