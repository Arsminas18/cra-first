import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;


}


function Accordion (props: AccordionPropsType) {

    console.log ("Accordion")
    if (props.collapsed === true) {
        return <span> <AccordionTitle titleValue={props.titleValue}/>
        <AccordionBody/>
        </span> } else {
        return <span><AccordionTitle titleValue={props.titleValue}/></span>
    }



    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            <AccordionBody/>
       </div>
)
}

function AccordionTitle(props: any) {
    console.log ('AccordionTitle rendering')
    return (
      <h3>{props.titleValue}</h3>
)
}

function AccordionBody() {
    console.log ('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default Accordion;