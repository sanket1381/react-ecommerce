import React from 'react'
const CommonLoader = () => {
    const sheet = new CSSStyleSheet();
    sheet.insertRule(`
  @keyframes artcraft-loader {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }
`);

    document.adoptedStyleSheets = [sheet];
    return (

        <div style={{
            background: '#f2f2f2',
            width: '100%',
            height: '300px',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div style={{
                    display: 'inline-block',
                    margin: '0 10px',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: '#FF00AE',
                    animation: 'artcraft-loader 1s ease-in-out infinite'
                }}></div>
                <div style={{
                    display: 'inline-block',
                    margin: '0 10px',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: '#FF00AE',
                    animation: 'artcraft-loader 1s ease-in-out infinite',
                    animationDelay: '0.1s'
                }}></div>
                <div style={{
                    display: 'inline-block',
                    margin: '0 10px',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: '#FF00AE',
                    animation: 'artcraft-loader 1s ease-in-out infinite',
                    animationDelay: '0.1s'
                }}></div>
            </div>
        </div>

    )
}

export default CommonLoader
