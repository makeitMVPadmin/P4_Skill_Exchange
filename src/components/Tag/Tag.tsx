
function Tag({ text }) {
  return (
    <div>
     <span className="inline-block border-2 border-gray-800 font-light bg-blue-200 rounded-lg px-3 py-1 text-sm text-gray-700 mr-2 mb-2"
     >
      { text }
     </span>
    </div>
  )
}

export default Tag