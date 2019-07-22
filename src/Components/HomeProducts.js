import React from "react";

function HomeProducts() {
    return (
        <>

        <div className="product-heading-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                            <div className="dotted-heading-wrap">
                                <h2 className="heading">Products</h2>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="home-products-wrap">
            <div className="container">

                {/* First Section */}
                <div className="row home-product-row">
                    <div className="col-md-6 home-product-col">
                        <img src="../../images/home/t-shirts.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" /> 
                        <p className="home-product-img-title">T-shirts</p>
                    </div>
                    <div className="col-md-6 home-product-col">
                        <div className="row home-product-row">
                            <div className="col-md-12 home-product-col">
                                <img src="../../images/home/umbrellas.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">umbrellas</p>
                            </div>
                        </div>
                        
                        <div className="row home-product-row no-wrap">
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/socks.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">Socks</p>
                            </div>
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/monc.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">mobile covers</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* First Section Ends */}

                {/* Second Section */}
                <div className="row home-product-row">
                    <div className="col-md-6 home-product-col">
                        <div className="row home-product-row no-wrap">
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/caps.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">caps</p>
                            </div>
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/badges.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">badges</p>
                            </div>
                        </div>

                        <div className="row home-product-row">
                            <div className="col-md-12 home-product-col">
                                <img src="../../images/home/boxers.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">boxers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 home-product-col">
                        <img src="../../images/home/dress.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                            <p className="home-product-img-title">t-shirt dresses</p>
                    </div>
                </div>
                {/* Second Section Ends */}


                {/* Third Section */}
                <div className="row home-product-row">
                    <div className="col-md-6 home-product-col">
                        <img src="../../images/home/vests.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                            <p className="home-product-img-title">Tank Tops & Vests</p>
                    </div>
                    <div className="col-md-6 home-product-col">
                        <div className="row home-product-row">
                            <div className="col-md-12 home-product-col">
                                <img src="../../images/home/notebooks.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">notebooks</p>
                            </div>
                        </div>

                        <div className="row home-product-row no-wrap">
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/mugs.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">mugs</p>
                            </div>
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/stickers.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">Stickers</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third Section Ends */}

                {/* Forth Section */}
                <div className="row home-product-row">
                    <div className="col-md-6 home-product-col">
                        <div className="row home-product-row no-wrap">
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/pins.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">pins</p>
                            </div>
                            <div className="col-md-6 home-product-col">
                                <img src="../../images/home/flipflopsBox.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                                <p className="home-product-img-title">flip flops</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 home-product-col">
                        <img src="../../images/home/backpacks.jpg" alt="Exclusive Membership" className="img-fluid home-product-img" />
                        <p className="home-product-img-title">bags</p>
                    </div>
                </div>

            </div>
        </div>
        
        
        </>

    );
}

export default HomeProducts;