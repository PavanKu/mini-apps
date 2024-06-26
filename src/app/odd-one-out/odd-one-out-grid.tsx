import { Box } from "@/components/common/box";
import { Grid } from "@/components/common/layout";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { getGameConfigByLevel, levelConfigType } from "./dataUtils";

type oddOneOutGridProps = {
  level: number;
  goToNextLevel: () => void;
};

const SUCCESS_MESSAGE = "Level Complete";
const FAILURE_MESSAGE = "Wrong! Try Again.";
const STATUS = {
    SUCCESS: "won",
    FAILURE: "loose"
};

export default function OddOneOutGrid({
  level,
  goToNextLevel,
}: oddOneOutGridProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const selectedCategory = useRef<null | string>(null);
  const [config, setConfig] = useState<null|levelConfigType>(null)

  useEffect(() => {
    setConfig(getGameConfigByLevel(level));
  }, [level])


  const boxSelectionHandler = useCallback(
    (alt: string, category: string) => {
      if (category !== config?.result) {
        setStatus(STATUS.SUCCESS);
      } else {
        setStatus(STATUS.FAILURE);
      }
    },
    [config]
  );

  const nextLevelHandler = useCallback(() => {
    //move to next level and clear data
    reset();
    setOpen(false);
    goToNextLevel();
  }, [goToNextLevel])

  const replayHandler = useCallback(() => {
    //move to next level and clear data
    reset();
    setOpen(false);
  }, [])

  const reset = ():void => {
    setSelected(null);
    setStatus(null);
    selectedCategory.current = null;
  }

  const setOpen = (isOpen: boolean):boolean => isOpen;

  if (!config) return null;

  return (
    <>
      <Grid col={2}>
        {config.images.map((img) => {
          return (
            <Box
              key={img.alt}
              bg={"red"}
              onClick={() => boxSelectionHandler(img.alt, img.category)}
            >
              <AspectRatio ratio={1}>
                <Image src={img.img} alt={img.alt} fill className="rounded" />
              </AspectRatio>
            </Box>
          );
        })}
      </Grid>
      <AlertDialog open={status!== null} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">{status===STATUS.SUCCESS?SUCCESS_MESSAGE:FAILURE_MESSAGE}</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-6xl my-5">
              {status===STATUS.SUCCESS?"🎉":"😞"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <AlertDialogCancel onClick={replayHandler}>Try Again!</AlertDialogCancel>
            {status===STATUS.SUCCESS && (<AlertDialogAction onClick={nextLevelHandler}>Next Level</AlertDialogAction>)}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
