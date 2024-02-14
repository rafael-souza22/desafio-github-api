import "./sytles.css";

type Props = {
    text: string;
}

export default function Button({text}:Props) {
    return (
        <button type="submit">{text}</button>
    );
}