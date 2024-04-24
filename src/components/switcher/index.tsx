"use client"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { useLocale } from "next-intl";



export default function Switcher() {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const activedLocal = useLocale()

    function OnSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }
    return (
        <div>
            <select disabled={isPending} defaultValue={activedLocal} onChange={OnSelectChange}>
                <option value="en">ingles</option>
                <option value="pt">portugues</option>
            </select>
        </div>
    )
}