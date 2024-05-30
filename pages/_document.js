import Document, { Html, Head, Main, NextScript } from 'next/document';
import Pixcelfb from './fb';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
    
          <noscript>
            <img height="1" width="1" style={{display: 'none'}}
                 src={`https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1`} 
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
