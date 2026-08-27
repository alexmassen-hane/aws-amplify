"use client";

import { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
// import { Amplify } from "aws-amplify";
// import outputs from "@/amplify_outputs.json";

// Amplify.configure(outputs);

export default function App() {
    const [todos, setTodos] = useState<string[]>([]);

    function createTodo() {
        const content = window.prompt("Todo content");
        if (content) {
            setTodos((prev: any) => [...prev, content]);
        }
    }

    return (
        <main>
            <h1>Example Static App for AWS Amplify</h1>

            <div>
                <text>
                    A test for deploying a static website for the CIDS Website
                </text>
            </div>

            {/* <button onClick={createTodo}>+ new</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul> */}

            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/steve.jpeg" alt="Steve" width={300} />
            </div>
        </main>
    );
}
