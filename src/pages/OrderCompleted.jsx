import { useParams } from 'react-router-dom';
import Checkout from './Checkout';

export const OrderCompleted = () => {
    const { code } = useParams();
    if (!code) {
        return <Checkout />;
    } else {
        return (
            <>
                <main>
                    <div className="breadcrumb_section bg_gray page-title-mini">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="page-title">
                                        <h1>Orden Completa</h1>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <ol className="breadcrumb justify-content-md-end">
                                        <li className="breadcrumb-item">
                                            <a href="/">Inicio</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/cart">Carrito</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="/checkout">Checkout</a>
                                        </li>
                                        <li className="breadcrumb-item active">Orden Completa</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="text-center order_complete">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="heading_s1">
                                            <h3>Su orden se complet&oacute; correctamente!</h3>
                                        </div>
                                        <p>
                                            Gracias por realizar esta &oacute;rden. En breve recibir&aacute; un email con su factura y el detalle de
                                            su compra. Por favor tome nota del c&oacute;digo de seguimiento:{' '}
                                            <span className="custom-tracking-number">{code}</span>
                                        </p>
                                        <a href="/" className="btn btn-fill-out">
                                            Continuar Comprando
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
};
