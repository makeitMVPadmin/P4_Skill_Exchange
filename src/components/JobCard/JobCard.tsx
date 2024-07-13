import { slugify } from "@/src/utils/string-utils";


const JobCard = ({ name }: any) => {
  const slug = slugify(name);

  return (
   <a href={`/marketplace/${slug}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src="https://via.placeholder.com/400x200" alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{ name }</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </a>
     
  );
}

export default JobCard