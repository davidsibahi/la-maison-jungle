import { plantList } from "../datas/plantListe"
import '../style/ShoppingListe.css'
function ShoppingListe() {
   
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    const listes = ''
    return (<div >
            <h3>categories</h3>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <h3>Plante</h3>

            <ul className="lmj-plant-list">
            {plantList.map((plant) => (
        <li key={ plant.id } className="lmj-plant-item ">
        { plant.name } {plant.isSpecialOffer ? <div className="lmj-sales">Soldes</div> : null}
        </li>
        
        
    ))}
            </ul> </div>)
}

export default ShoppingListe