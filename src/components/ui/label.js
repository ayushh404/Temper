// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";
import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import cn from "@/util/cn";

const Label = forwardRef(({
  className,
  ...props
}, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
