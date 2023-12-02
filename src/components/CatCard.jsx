import { useId } from 'react';

const CatCard = ({ cat_info }) => {
    const id = useId();
    return (
        <div className="col-md-6" key={id}>
            <div className="sale-banner mb-3 mb-md-4">
                <a className="hover_effect1" href={`/category/${cat_info.catId}`}>
                    <img src={`src/assets/images/${cat_info.catImg}`} alt={cat_info.catName} />
                </a>
            </div>
        </div>
    );
};

export default CatCard;
