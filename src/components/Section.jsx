import React from "react"

function Section(props) {
    return (
        <section className={props.sectionClass}>
            <h1 className={props.titleClass}>{props.title}</h1>
            <p className={props.detailClass}>{props.detail}</p>
            <p className={props.contentClass}>{props.content}</p>
            <button className={props.buttonClass}>{props.button}</button>
        </section>
    )
}

export default Section