import { useParams, Link } from 'react-router-dom';
import ItemList from './ItemList';

export const ItemListContainer = ({ categorias, productos }) => {

    const { cat_seo } = useParams();

    let categoria;

    function filter(array, value, key) {
        return array.filter(key
            ? a => a[key] === value
            : a => Object.keys(a).some(k => a[k] === value)
        );
    }

    if (cat_seo) {
        categoria = filter(categorias, cat_seo, 'catSeo')[0];
    }


    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
    );

    return (
        <div className="mt-4 staggered-animation-wrap">
            <div className="container">
                {!cat_seo ? (
                <>
                <div className="row">
                    <div className="col-12">
                        <div className="heading_tab_header">
                            <div className="heading_s2">
                                <h4>Categor&iacute;as</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {chunk(categorias, 3).map((row, index) => {
                            return (
                                <div className="row mb-3" key={index}>
                                {row.map((col, indexi) => {
                                    return (
                                        <div className="col-md-4" key={indexi}>
                                            <Link to={`/category/${col.catSeo}`}>
                                                <div className="card custom-card-index">
                                                    <img src={`../../src/assets/images/${col.catImg}`} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{col.catName}</h5>
                                                        <p className="card-text">{col.catShortDesc}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                </>
                ) : (
                <ItemList cat_id={categoria['catId']} productos={productos} />
                )}
            </div>
        </div>
    );

};
