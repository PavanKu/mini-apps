"use client";
import { useCallback, useState } from "react";
import { Page } from "@/components/common/layout";
import MemoryGrid from "./memory-grid";

export default function MemoryGame() {
    const [level, setLevel] = useState(1);

    const handleNextLevel = useCallback(() => {
        setLevel((level) => level + 1);
    }, []);

    return (
        <Page>
            <MemoryGrid level={level} goToNextLevel={handleNextLevel}/>
        </Page>
    )
}