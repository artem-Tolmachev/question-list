import { useGetSkillsQuery } from "@/entities/skills/api/skillsApi"
import { useGetSpecializationsQuery } from "@/entities/specializations/api/specializationsApi";

export default function useFilterOptions() {
    const skillsResp = useGetSkillsQuery(undefined);
    const specResp = useGetSpecializationsQuery(undefined);

    return {
        skills: skillsResp.data || [],
        specializations: specResp.data || [],

        specError: specResp.error,
        skillsError: skillsResp.error,

        specRefetch: specResp.refetch,
        skillsRefetch: skillsResp.refetch,
        
        isLoading: skillsResp.isLoading || specResp.isLoading,
        isFetching: skillsResp.isFetching || specResp.isFetching
    }
}
