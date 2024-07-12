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
            <button className="pcmodal__form--button">Apply Now</button>
        </form>
        </>
    )
}