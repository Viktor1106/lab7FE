import React, { useState } from 'react';

function Image() {
    const [imageState, setImageState] = useState({
        isVisible: true,
        width: 600
    });

    const imgSrc = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrueua.info%2Fsites%2Fdefault%2Ffiles%2Fimages%2F09-2026%2Fnextvoyage-buildings-7120297.jpg&f=1&nofb=1&ipt=83a4b856c398c43fdb5f378921d10f13e4b937941d1e163b9b1b4c03b811c973";

    const addImage = () => setImageState(prev => ({ ...prev, isVisible: true }));
    const deleteImage = () => setImageState(prev => ({ ...prev, isVisible: false }));
    const increaseImage = () => setImageState(prev => ({ ...prev, width: prev.width + 50 }));
    const decreaseImage = () => setImageState(prev => ({ ...prev, width: Math.max(50, prev.width - 50) }));

    return (
        <div>
            <div id="image-container">
                {imageState.isVisible && (
                    <a href="https://kyivcity.gov.ua/" target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} alt="Краєвид міста Київ" width={imageState.width} />
                    </a>
                )}
            </div>
            <div className="controls" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;