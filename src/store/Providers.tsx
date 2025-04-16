"use client";
import { Provider } from "react-redux";
import { store } from "./store";


interface AppProps {
    children: React.ReactNode;
}

export default function Providers({children}: AppProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}