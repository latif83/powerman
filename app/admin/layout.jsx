import { LoginProvider } from "@/providers/LoginContext";

export default function AdminLayout({children}){
    return (
        <>
        <LoginProvider>
        {children}
        </LoginProvider>
        </>
    )
}