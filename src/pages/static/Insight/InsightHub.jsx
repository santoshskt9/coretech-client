import React, { useEffect } from 'react';

const InsightHub = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-8 p-0">
                        <img src="https://cdn.pixabay.com/photo/2023/01/13/14/58/snake-7716269_1280.jpg" alt="" className='w-100'/>
                    </div>
                    <div className="col col-4 p-0">
                        <img src="https://cdn.pixabay.com/photo/2022/12/02/21/20/blue-7631674_960_720.jpg" alt="" className='w-100'/>
                        <img src="https://cdn.pixabay.com/photo/2022/12/02/21/20/blue-7631674_960_720.jpg" alt="" className='w-100'/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default InsightHub;