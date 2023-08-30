import { Button } from "@mui/material";
export function Pricecard({prod}) {
  const styles = {
    backgroundColor: "white",
    boxShadow: "0 8px 12px 0px rgba(0, 0, 0, 0.2)",
    boxShadowTop: "5px",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
  };
 const btnstyle={
    margin:"0 25%",
 }
  return (
    <div className="outside-card">
    <div className='total'>
      <div style={styles} className='card'>
        <p color='textSecondary'>{prod.sub}</p>
        <h2>{prod.cost}</h2>
        <p className='size'>{prod.consume}</p>
        <p className='size'>{prod.storage}</p>
        <p className='size'>{prod.usage}</p>
        <p className='size'>{prod.access}</p>
        <p className='size'>{prod.unneccessary}</p>
        <p className='size'>{prod.device}</p>
        <p className='size'>{prod.domain}</p>
        <p className='size'>{prod.report}</p>
        <Button style={btnstyle} variant="contained" className='primary-btn'>Button</Button>
        
      </div>
    </div>
    </div>
  );
}
 
