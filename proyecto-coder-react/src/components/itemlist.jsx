
import Item from "./item"
function ItemList({products}) {
  return (
    <div className="card">
        {products.map((product)=>{
            return <Item key={product.id} product={product} />
        })}
    </div>
  )
}

export default ItemList