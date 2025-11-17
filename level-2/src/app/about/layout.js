
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        all after about layout 
        <br/>
        after this page in about or after about page
        {children}
      </body>
    </html>
  );
}