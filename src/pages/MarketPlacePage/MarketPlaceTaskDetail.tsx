import { useParams } from "react-router-dom"

function MarketplaceTaskDetail() {
  const { id } = useParams();
  console.log(id);
  
  return (
    <div>MarketplaceTaskDetail</div>
  )
}

export default MarketplaceTaskDetail