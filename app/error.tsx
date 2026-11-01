"use client";
import "./globals.css";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {

    return(
        <div className="error">
            <h2>something went wrong!</h2>
            <p>unable to load mushroom data. please try again</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}