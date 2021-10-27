import React from "react";

const ViewFooter = () => {
    return (
    <div>
        <ul class="nav justify-content-center bg-dark">
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/DiegoEsp294/docsKine">
                    <img 
                        src={'./img/github.png'} 
                        className="img-fluid" 
                        alt="Responsive image" 
                        width='60px' 
                        height='60px'/>
                </a>
            </li>
        </ul>
    </div>
    );
};

export default ViewFooter;
