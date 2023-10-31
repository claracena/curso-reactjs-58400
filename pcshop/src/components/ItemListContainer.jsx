import { ItemCount } from "./ItemCount";

export const ItemListContainer = ({ productos }) => {

    return (
        <div className="mt-4 staggered-animation-wrap">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-3">
                        {productos.map((p) => {
                            return (
                                <div key={p.id}>
                                    {p.name} <br />
                                    {p.price}
                                    <ItemCount stock={p.stock} />
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

};
