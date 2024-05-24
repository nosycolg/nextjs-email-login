'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"

export function RegisterForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async data => {
        await signIn('email', { email: data.email })
    })

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        Create your account
                    </h2>
                </div>
                <form action="#" className="mt-8 space-y-6" method="POST" onSubmit={onSubmit}>
                    <input defaultValue="true" name="remember" type="hidden" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <Label className="sr-only" htmlFor="email-address">
                                Email address
                            </Label>
                            <Input
                                {...register('email')}
                                autoComplete="email"
                                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                                id="email-address"
                                name="email"
                                placeholder="Email address"
                                required
                                type="email"
                            />
                        </div>
                    </div>
                    <div>
                        <Button
                            className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                            type="submit"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockIcon className="h-5 w-5 text-white group-hover:text-gray-50" />
                            </span>
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}