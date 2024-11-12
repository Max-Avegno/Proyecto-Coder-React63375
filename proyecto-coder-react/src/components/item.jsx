function Item ({product}) {
    return (
        <div>
            <img className="productoImagen" src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio $: {product.price}</p>
            <p>{product.description}</p>

        </div>
    )
}

export default Item