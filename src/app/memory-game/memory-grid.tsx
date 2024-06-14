import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Box } from "@/components/common/box";
import { Grid } from "@/components/common/layout";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { getConfigByLevel } from "./dataUtils";

type MemoryGridProps = {
  level: number;
  goToNextLevel: () => void;
};

export default function MemoryGrid({
  level = 1,
  goToNextLevel,
}: MemoryGridProps) {
  // Keep selected index in state
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [missedCount, setMissedCount] = useState<number>(0);
  const [won, setWon] = useState(false);

  const config = useMemo(() => getConfigByLevel(level), [level]);

  useEffect(() => {
    setMatched([]);
    setSelected([]);
  }, [level]);

  const handleBoxClick = useCallback(
    (key: number) => {
      if (!selected.includes(key) && !matched.includes(key)) {
        setSelected((selected) => [...selected, key]);
      }
    },
    [selected, matched]
  );

  useEffect(() => {
    if (selected.length >= 2) {
      // check if selected are same card
      if (config && config.list) {
        if (config.list[selected[0]].alt === config.list[selected[1]].alt) {
          setMatched((matched) => [...matched, ...selected]);
        } else {
          setMissedCount((missedCount) => missedCount + 1);
        }
      }
      setTimeout(() => {
        setSelected([]);
      }, 200);
    }
  }, [selected, config]);

  useEffect(() => {
    if (config && config.list) {
      if (matched.length === config.list.length) {
        setWon(true);
      }
    }
  }, [matched, config]);

  const reset = () => {
    setWon(false);
    setMatched([]);
    setSelected([]);
    setMissedCount(0);
  }

  const replay = useCallback(() => {
    reset();
  }, []);

  const next = useCallback(() => {
    reset();
    goToNextLevel();
  }, [goToNextLevel]);

  if (!config) {
    return null;
  }

  return (
    <>
      <h1 className="text-center font-thin text-5xl mb-5 text-slate-500">{`Level ${level}`}</h1>
      <div className="mb-5 flex justify-between">
        <div className="font-thin text-lg text-slate-700">
          Missed: {missedCount}
        </div>
        {/* <div className="bg-orange-300">
          Timer
        </div> */}
      </div>
      <Grid col={config.col}>
        {config.list.map((item, index) => (
          <Box key={index} onClick={() => handleBoxClick(index)} bg={config.background}>
            {(selected.includes(index) || matched.includes(index)) && (
              <AspectRatio ratio={1}>
                <Image
                  src={item.img}
                  alt={item.alt}
                  className="rounded object-cover"
                  fill
                />
              </AspectRatio>
            )}
          </Box>
        ))}
      </Grid>
      {/* <Button className="mt-5" onClick={goToNextLevel}>
        Next Level
      </Button> */}
      <AlertDialog open={won}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Level Complete
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-center text-6xl my-5">
            🎉 🎉 🎉
          </AlertDialogDescription>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogCancel onClick={replay}>Replay</AlertDialogCancel>
            <AlertDialogAction onClick={next}>Next Level</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
