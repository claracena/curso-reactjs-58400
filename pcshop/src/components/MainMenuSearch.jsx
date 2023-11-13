export default function MainMenuSearch({ categorias }) {
    return (
        <div className="product_search_form radius_input search_form_btn">
            <form id="frmBusqueda" action="" method="GET">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="custom_select">
                            <select className="first_null not_chosen" id="cat_select" onChange={(e)=>changeCatSelect(e)}>
                                <option value="/">Categor&iacute;as</option>
                                {categorias.map((item, index) => {
                                    return (
                                        <option value={item.catSeo} key={index}>{item.catName}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Producto..." required="" type="text" />
                    <button type="submit" className="search_btn3">
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
}
