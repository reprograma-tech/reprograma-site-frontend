import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
  render(){
    return(
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,700;0,900;1,400&family=Source+Sans+Pro:wght@300;400&display=swap" rel="stylesheet"/>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }

}