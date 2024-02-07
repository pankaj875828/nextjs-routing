'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const router = useRouter()
    return (
        <div>
            <h1>Login Page</h1>
            <br />
            <button onClick={() => router.push('/')}>Home Page</button>
        </div>
    )
}
