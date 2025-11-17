
export default function RootLayout({ children ,team,analysis}) {
  return (
    <html lang="en">
      <body
        >
          {children}
          <div className="flex justify-around
          items-center  border border-rose-900 m-2 p-2">
            <div className="border m-2 p-2">{team}</div>
            <div className="border m-2 p-2">{analysis}</div>
          </div>
        
        
      </body>
    </html>
  );
}