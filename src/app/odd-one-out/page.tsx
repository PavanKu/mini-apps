'use client'
import Heading from "@/components/common/heading";
import { Page } from "@/components/common/layout";
import { useCallback, useState } from "react";
import OddOneOutGrid from "./odd-one-out-grid";

export default function OddOneOut() {
    const [level, setLevel] = useState<number>(0);

    const goToNextLevel = useCallback(() => {
        setLevel(level => level+1);
    }, [setLevel])

    return (
        <Page>
            <Heading>
                {`Level ${level}`}
            </Heading>
            <OddOneOutGrid level={level} goToNextLevel={goToNextLevel}/>
        </Page>
    )
}