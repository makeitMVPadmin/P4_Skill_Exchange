type propTypes = {
    open: boolean;
    onClose: ()=> void;
    children: React.ReactNode;
}

const ProjectCardModal: React.FC<propTypes> = ({open, onClose, children}) => {

    return(
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}
            onClick={onClose}
        >
            <div className={`bg-white rounded-lg shadow p-6 transition-all max-w-md
                ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                onClick={(e)=> e.stopPropagation()}>
                    <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:text-grey-600"
                    onClick={onClose}
                    >
                    X
                    </button>
                    <article className="space-y-4">
                        <h2 className="text-xl font-semibold">Apply to "task name"</h2>
                        <section className="text-gray-700">Your skills and your project information from your profile will be included with your application.</section>
                        <h3 className="text-lg font-medium">Additional Questions</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700" htmlFor="">Question 1</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded" type="text" />
                            </div>
                            <div>
                                <label className="block text-gray-700" htmlFor="">Question 2</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded" type="text" />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300" type="button">Back</button>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Review</button>
                            </div>
                        </form>
                    </article>
                </div>
        </div>
    )
}

export default ProjectCardModal;