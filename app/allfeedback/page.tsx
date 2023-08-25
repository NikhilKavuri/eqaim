import suggestionStyle from "../styles/suggestions.module.css"
import Navbar from "../components/Navbar"
import Feedbacks from "../components/Feedbacks"
import Courses from "../components/Courses"
const SuggestionsPage = () => {
  return (
    <div className={suggestionStyle.suggestionContainer}>
        <div className={suggestionStyle.leftContainer}><Courses /></div>
        <div className={suggestionStyle.rightContainer}>
            <nav><Navbar /></nav>
            <section><Feedbacks /></section>
        </div>
    </div>
  )
}

export default SuggestionsPage