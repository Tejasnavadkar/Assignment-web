import { cva,VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


export const buttonStyles = cva(["transition-colors"],{
    variants:{
        variant:{
            default:["bg-secondary-default","hover:bg-secondary-hover"],
            ghost:["hover:bg-gray-100"],
            dark:["bg-secondary-dark","hover:bg-secondary-dark-hover","text-secondary-default"]
        },
        size:{
            default:["rounded","p-2"],
            icon:["rounded-full","flex justify-center items-center","h-10 w-10","p-2.5"]
        }
    },
    defaultVariants:{
        variant:"default",
        size:"default"
    }
})

type buttonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">


export function Button({className,variant,size,...props}:buttonProps){

    return <button {...props} className={twMerge(buttonStyles({variant,size}),className)}  />
}
