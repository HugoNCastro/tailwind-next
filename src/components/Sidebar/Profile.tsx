import { LogOut } from "lucide-react";
import { Button } from "../Button";
import { ToggleTheme } from "../ToogleTheme";

export function Profile() {
    return (
        <div className="grid items-center gap-3 grid-cols-profile">
            <img
                src="https://github.com/HugoNCastro.png"
                className="h-10 w-10 rounded-full"
                alt=""
            />
            <div className="flex flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Hugo Castro</span>
                <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">hnc@tech.com</span>
            </div>
            <div>
                <ToggleTheme />
                <Button type="button" variant="ghost">
                    <LogOut className="w-5 h-5 text-zinc-500" />
                </Button>
            </div>
        </div>
    )
}