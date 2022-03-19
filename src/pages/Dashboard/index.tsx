import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FiPlusSquare } from "react-icons/fi";

import { ModalProduct } from "../../components/ModalProduct";
import * as ProductActions from '../../app/store/actions/productActions'

import { Container, ProductStyles } from "./styles";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    brand: string
    category: string
}

type DashboardProps = {
    products: Product[]
    getProducts: any
    createProduct: any
    updateProduct: any
    deleteProduct: any
}

const Dashboard = ({
    products,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}: DashboardProps) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [action, setAction] = useState<string>("");
    const [
        updatingProduct,
        setUpdatingProduct
    ] = useState<Product | undefined>(undefined);

    useEffect(() => {
        getProducts()
    }, [getProducts])

    function toggleModal(
        action: string = "",
        updatingProduct: Product | undefined = undefined
    ): void {

        setAction(action)
        setUpdatingProduct(updatingProduct)
        setModalOpen(!modalOpen);
    }

    async function handleCreateProduct(Product: Product) {
        return createProduct(Product)
    }

    async function handleUpdateProduct(Product: Product) {
        return updateProduct(Product)
    }

    function currencyConverter(price: number): string {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
    }


    console.log(products)

    return (
        <Container>
            <h1>Dashboard</h1>

            <div className='links'>
                <Link to='/categories' className="link"> Categories </Link>
                <Link to='/brands' className="link"> Brands </Link>
            </div>

            <button className='createButton' type="button" onClick={() => toggleModal("Criar")}>
                <div className="text">Novo Produto</div>
                <div className="icon">
                    <FiPlusSquare size={24} />
                </div>
            </button>

            <ModalProduct
                action={action}
                isOpen={modalOpen}
                updatingProduct={updatingProduct}
                setIsOpen={toggleModal}
                handleCreateProduct={handleCreateProduct}
                handleUpdateProduct={handleUpdateProduct}
            />
            <h2>Products</h2>

            <ProductStyles>

                {products.map((product: Product) => (
                    <div key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div>{currencyConverter(product.price)}</div>
                        <div>{product.stock}</div>
                        <div>{product.category}</div>
                        <div>{product.brand}</div>

                        <div className='buttons'>
                            <button
                                onClick={() => toggleModal("Editar", product)}
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => deleteProduct(product._id)}
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
            </ProductStyles>
        </Container>
    )
}

const mapStateToProps = (state: any) => ({
    products: state.products.products
})

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(ProductActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
