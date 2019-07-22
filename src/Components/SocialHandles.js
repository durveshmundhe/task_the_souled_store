import React from "react";

function SocialHandle() {
    return (
        <div className="social-container">
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-8">
                        <div className="row">
                            <div className="col-3">
                                <div className="social-circle">
                                    <i class="fa fa-facebook"></i>
                                    <small>Facebook</small>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="social-circle">
                                    <i class="fa fa-instagram"></i>
                                    <small>Instagram</small>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="social-circle">
                                    <i class="fa fa-snapchat"></i>
                                    <small>Snapchat</small>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="social-circle">
                                    <i class="fa fa-twitter"></i>
                                    <small>Twitter</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialHandle;