import React from 'react'
import logo from './PEP.svg'

export default class Navbar extends React.Component {

    render(){

        const { theme, hasLogo, brand, tagline, info, button } = this.props;

        //assigns variables for styling and content of navbar
        const bgTheme = (theme) ? `bg-${theme}` : ""
        const txtTheme = (theme) ? `text-${theme}` : ""
        const btnTheme = (theme === "warning") ? "accent3" : "warning"
        const logoMargin = (hasLogo) ? "mh-100" : "mh-0"
        const logoTag = (hasLogo) ? <img src={logo} alt="Logo" height="30" className={"d-inline-block align-text-top mx-2 "+ logoMargin}/> : ""
        const brandText = (brand) ? brand : ""
        const tagText = (tagline) ? <span className="navbar-text text-secondary mx-5 fw-normal fst-normal d-none d-lg-block">{tagline}</span> : ""
        const infoTag = (info) ? <span className={"text-"+txtTheme}>{info}</span> : ""
        const buttonTag = (button) ? <button className={"btn btn-outline-"+btnTheme} onClick={null}>{button}</button> : ""

        return(
            <nav className={"navbar "+bgTheme}>
                <div className="container-fluid">
                    <div className="navbar-brand text-primary fw-bold fst-italic">
                        {logoTag}
                    {brandText} {tagText}
                </div>
                    {infoTag}
                    {buttonTag}
                </div>
            </nav>
        )
    }
}