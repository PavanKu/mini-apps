import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const boxVariants = cva(
  "hover:cursor-pointer hover:shadow-lg border rounded w-40 h-40 flex justify-center items-center",
  {
    variants: {
      bg: {
        red: "bg-red-50 border-red-100",
        blue: "bg-blue-50 border-blue-100",
        orange: "bg-orange-50 border-orange-100",
        violet: "bg-violet-50 border-violet-100",
        purple: "bg-purple-50 border-purple-100",
        green: "bg-green-50 border-green-100",
        teal: "bg-teal-50 border-teal-100",
        cyan: "bg-cyan-50 border-cyan-100",
        sky: "bg-sky-50 border-sky-100",
      },
    },
    defaultVariants: {
      bg: "red",
    },
  }
);

export interface BoxProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, bg, ...props }, ref) => (
    <div className={cn(boxVariants({ bg }), className)} {...props} />
  )
);

Box.displayName = "Box";

export { Box };
