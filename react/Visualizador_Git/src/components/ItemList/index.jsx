import "./style.css"

function ItemList(prop){
    return (
        <div className="item-list">
            <strong><a href={prop.urlRepo} target="_blank">{prop.title}</a></strong>
            <p>{prop.description}</p>
            <hr/>
        </div>
    )
}

export default ItemList