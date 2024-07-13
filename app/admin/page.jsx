"use client"
import { Login } from "@/components/admin/login/Login";
import { useLogin } from "@/providers/LoginContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function () {
    const { loggedIn } = useLogin();

    const router = useRouter()

    useEffect(() => {
        loggedIn && router.replace('admin/events')
    }, [loggedIn])

    return (
        <Login />
    )
}