import { InteractiveCounter } from "../module-49-state-management/Counter/counter"

export default function Dashboard() {
    return (
        <> 
            <h3>Dashboard</h3>
            <p>Welcome! This is a protected page.</p>
            <p>You can only see this because you are logged in.</p>

            <h3>Something to interact with</h3>
            <InteractiveCounter />
        </>
    )
}