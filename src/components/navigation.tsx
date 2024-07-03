import Link from "next/link"
import { fontGilroy } from "@/layout/fonts"

function Navigation() {
  return (
    <div className={"navigation " + `${fontGilroy.variable}`}>
      <Link href={"/"} className="navigation__title">
       <p className="link-item">Skill Exchange</p>
      </Link>
      <div className="navigation__links">
        <ul className="navigation__links-list">
          <li className="navigation__links-list__item">
            <Link href={"/"}>
              Questions
            </Link>
          </li>
          <li className="navigation__links-list__item">
            <Link href={"/"}>
              Tags
            </Link>
          </li>
          <li className="navigation__links-list__item">
            <Link href={"/"}>
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
      <div className="navigation__button">
        <button>
          create account
        </button>
      </div>
    </div>
  )
}

export default Navigation