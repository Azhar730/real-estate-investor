import AgentProfile from "@/components/modules/dashboard/profile/AgentProfile";
import BuyerProfile from "@/components/modules/dashboard/profile/BuyerProfile";
import { user } from "@/data/user";

export default function ProfilePage() {
    const role = user.role
    return (
        <>
            {
                role === 'agent' ? <AgentProfile /> : <BuyerProfile />
            }
        </>
    );
}