import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "btn-gold-shimmer text-ink-950 animate-shimmer shadow-[0_10px_40px_-12px_rgba(217,184,92,0.55)] hover:shadow-[0_14px_50px_-10px_rgba(217,184,92,0.7)] hover:-translate-y-0.5",
        ghost:
          "border border-bone-100/15 text-bone-50 hover:border-gold-300/60 hover:text-gold-200 backdrop-blur-sm",
        outline:
          "border border-bone-100/20 text-bone-50 hover:bg-bone-50/5 hover:border-bone-100/40",
        whatsapp:
          "bg-[#25D366] text-ink-950 hover:bg-[#1fbd5a] shadow-[0_10px_40px_-12px_rgba(37,211,102,0.55)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        lg: "h-14 px-8 text-[15px]",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
