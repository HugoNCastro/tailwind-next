import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface PrefixProps extends ComponentProps<'div'> { }

export function Prefix(props: PrefixProps) {
    return (
        <div {...props} />
    )
}

interface ControlProps extends ComponentProps<'input'> { }

export function Control(props: ControlProps) {
    return (
        <input
            type="text"
            className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:placeholder-zinc-400 dark:text-zinc-100"
            {...props}
        />
    )
}

interface RootProps extends ComponentProps<'div'> { }

export function Root(props: RootProps) {
    return (
        <div
            className={twMerge(
                "flex w-full items-center gap-2 rounded-lg border shadow-sm border-zinc-300 px-3 py-2 ",
                "focus-within:border-violet-300 focus-within:ring-violet-100 focus-within:ring-4",
                "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
                props.className
            )}
            {...props}
        >
        </div>

    )
}

