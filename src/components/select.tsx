import React from "react"

import Icon from "./icon"
import { getCaseSensitive } from "../context/helper"

export const Select = ({ value, onChange, data }: { value: string, onChange: (chainLabel: string) => void, data: string[] }) => {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:gap-2">
            <div className="relative w-full z-20 bg-transparent dark:bg-form-input">
                <select
                    value={value}
                    className={`relative z-20 w-full appearance-none rounded border py-2 px-5 text-primary-grey text-sm outline-none transition border-primary bg-primary-dark/50`}
                    onChange={e => onChange(e.target.value)}
                >
                    {data.map((i: string, k: number) => (
                        <option value={i} key={k} className=" bg-primary-dark/80 border-none text-xs sm:text-[15px]">{getCaseSensitive(i)}</option>
                    ))}
                </select>

                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <Icon icon="ArrowDrop" />
                </span>
            </div>
        </div>
    )
}