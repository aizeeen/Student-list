import { PropsWithChildren } from "react";

function Title({ children } : PropsWithChildren) {
    return (
    <h1>{children}</h1> 
    )
}

export default Title;
