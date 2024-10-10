import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeClasses } from "@/lib/utils";

// Define typography variants using class-variance-authority
const typographyVariants = cva("text-gray-600 text-normal", {
  variants: {
    variant: {
      h1: "text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900",
      h2: "text-3xl font-semibold md:text-4xl md:tracking-[-0.02em] text-gray-900",
      h3: "text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900",
      h4: "text-xl md:text-2xl font-semibold text-gray-900",
      h5: "text-lg md:text-xl font-semibold text-gray-900",
      h6: "text-base md:text-lg font-semibold text-gray-900",
      subtitle: "text-lg md:text-xl",
      body1: "text-base md:text-lg",
      body2: "text-base",
      body3: "text-sm",
    },
  },
  defaultVariants: {
    variant: "body2",
  },
});

// Map variants to HTML elements
const elementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "p",
  body1: "p",
  body2: "p",
  body3: "p",
};

// Define the TypographyProps interface
interface TypographyProps
  extends React.HTMLProps<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType<React.HTMLProps<HTMLElement>>;
}

// Typography component
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { component, className = "", variant = "body2", children, ...props },
    ref
  ) => {
    // Ensure Comp is typed correctly
    const Comp = "div"; // or any other HTML element like 'span', 'p', etc.

    const combinedClasses = mergeClasses(
      typographyVariants({ variant }),
      className
    );

    type CompProps = React.ComponentPropsWithoutRef<typeof Comp>;

    return (
      <Comp
        className={combinedClasses}
        ref={ref as React.Ref<any>}
        {...(props as CompProps)}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
