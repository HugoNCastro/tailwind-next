import { ComponentProps } from "react";

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
            className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
            {...props}
        />
    )
}

interface RootProps extends ComponentProps<'div'> { }

export function Root(props: RootProps) {
    return (
        <div
            className="flex w-full items-center gap-2 rounded-lg border shadow-sm border-zinc-300 px-3 py-2 focus-within:border-violet-300 focus-within:ring-violet-100 focus-within:ring-4"
            {...props}
        >
        </div>

    )
}

