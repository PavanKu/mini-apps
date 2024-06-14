import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const Page = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "min-h-screen bg-slate-100 grid place-content-center",
      className
    )}
    {...props}
  />
));

Page.displayName = "Page";

const gridVariants = cva(
  "bg-white p-6 rounded-lg shadow-lg ring-1 ring-gray-900/5 grid gap-6",
  {
    variants: {
      col: {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        /* 6: "grid-cols-6",
        7: "grid-cols-7", */
      },
    },
    defaultVariants: {
      col: 3,
    },
  }
);

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, col, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(gridVariants({ col }), className)}
      {...props}
    />
  )
);

Grid.displayName = "Grid";
export { Page, Grid };
