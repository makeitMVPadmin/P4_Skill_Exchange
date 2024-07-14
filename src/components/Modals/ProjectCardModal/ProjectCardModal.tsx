import "./ProjectCardModal.scss";

export default function ProjectCardModal(){

    return(
        <>
        <h1 className="pcmodal__maintitle">Application for Cool Project #1</h1>
        <h2 className="pcmodal__title">Questions</h2>
        <form className="pcmodal__form">
            <label className="pcmodal__form--label" htmlFor="yearsofexperience">How many years of coding experience do you have?</label>
            <input 
            className="pcmodal__form--input" 
            placeholder="Enter your years of experience"
            type="text" 
            name="yearsofexperience" />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
        </form>
        </>
    )
}