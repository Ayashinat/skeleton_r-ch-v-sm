import Navbar from "./navbar";

export default function Header() {

    const headerStyle = {
        height: '5em',
        width: '100%',
        backgroundColor: '#f5f5f5',        
      };


    return (
        <div style={headerStyle}>
           
           <h1>Header</h1>
            <Navbar />
        </div>
    );
};