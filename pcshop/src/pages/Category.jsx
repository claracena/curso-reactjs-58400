import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Category = ({ categorias }) => {
    const { cat_seo } = useParams();

    function filter(array, value, key) {
        return array.filter(key
            ? a => a[key] === value
            : a => Object.keys(a).some(k => a[k] === value)
        );
    }
    
    // if (cat_seo) {
        const categoria = filter(categorias, cat_seo, 'catSeo')[0];
    // }

    return (
        <>
            <div className="breadcrumb_section bg_gray page-title-mini">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="page-title">
                                <h1>{categoria['catName']}</h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ol className="breadcrumb justify-content-md-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item active">Shop List</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="mt-4 staggered-animation-wrap">
                <div className="custom-container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-3">
                            {cat_seo == "laptops" ? 'asd' : 'qweqwqwe'}
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
};
