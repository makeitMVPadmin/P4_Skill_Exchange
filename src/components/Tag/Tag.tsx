
function Tag({ text }:any) {
  return (
    <div>
     <span 
        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
     >{text}
     </span>
    </div>
  )
}

export default Tag