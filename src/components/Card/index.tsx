import { Container } from "./styles";
import { Brand, Category, Product } from "../../app/store/types";

interface OwnProps {
    brand?: Brand;
    category?: Category;
    product?: Product;
    toggleModal: (
        action: string,
        data: any
    ) => void
}

interface DispatchProps {
    deleteData: (_id: string) => void
}

type CardProps = OwnProps & DispatchProps

export function Card({
    brand,
    category,
    product,
    toggleModal,
    deleteData
}: CardProps) {

    function maskMoney(value: number): string {
        return value.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        )
    }

    const Buttons = ({ data }: any) => (
        <div className='buttons'>
            <button
                onClick={() => toggleModal("Editar", data)}
            >
                Editar
            </button>
            <button
                onClick={() => deleteData(data._id)}
            >
                Excluir
            </button>
        </div>
    )

    if (brand) {
        return (
            <Container>
                <h3>{brand.name}</h3>

                <Buttons data={brand} />
            </Container>
        )
    }

    else if (category) {
        return (
            <Container>
                <h3>{category.name}</h3>

                <div className='content'>
                    <h5>Descrição</h5>
                    <p>{category.description}</p>
                </div>

                <Buttons data={category} />
            </Container>
        )
    }

    else if (product) {
        return (
            <Container>
                <h3>{product.name}</h3>

                <div className='content'>
                    <h5>Descrição</h5>
                    <p>{product.description}</p>


                    <h5>Preço</h5>
                    <div>{maskMoney(product.price)}</div>

                    <h5>Estoque</h5>
                    <div>{product.stock}</div>

                    <h5>Categoria</h5>
                    <div>{product.category}</div>

                    <h5>Marca</h5>
                    <div>{product.brand}</div>
                </div>


                <Buttons data={product} />
            </Container>
        )
    }

    return <></>
}