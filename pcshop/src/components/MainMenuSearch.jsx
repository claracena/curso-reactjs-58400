export default function MainMenuSearch() {
    return (
        <div className="product_search_form radius_input search_form_btn">
            <form id="frmBusqueda" action="" method="GET">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="custom_select">
                            <select className="first_null not_chosen">
                                <option value="">Categor&iacute;as</option>
                                <option value="Computadoras">Computadoras</option>
                                <option value="Celulares">Celulares y Tablets</option>
                                <option value="Componentes">Componentes</option>
                                <option value="Accesorios">Accesorios</option>
                            </select>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Buscar Producto..." required="" type="text" />
                    <button type="submit" className="search_btn3">
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
}
