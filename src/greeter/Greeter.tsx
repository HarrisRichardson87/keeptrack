export default function Greeter(props: { first: string, last: string }) {
    return (
        <div>
            <h1>{props.first}, {props.last}</h1>
        </div>
    )
}

