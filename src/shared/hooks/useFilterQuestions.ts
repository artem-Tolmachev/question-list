import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import useFilterParams from "./useFilters";

export default function useFilterQuestions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParams = useFilterParams();

    const filters = useMemo(() => { 
        return { 
            complexity: filterParams.getParamArrayOfNumber('complexity').length ?
            filterParams.getParamArrayOfNumber('complexity') : undefined,
            rate: filterParams.getParamArrayOfNumber('rate').length ?
            filterParams.getParamArrayOfNumber('rate') : undefined,
            skills: filterParams.getParamArrayOfString('skills').length ?
            filterParams.getParamArrayOfString('skills') : undefined, 
            specialization: filterParams.getParamNumber('specialization') || undefined,
            title: filterParams.getParamString('title') || '',
            page: filterParams.getParamNumber('page'),
        }
    }, [filterParams]);

    const switchComplexity = (ranges: number[]) => {
        const currentRanges = filterParams.getParamArrayOfNumber('complexity');
        const isExist = ranges.every(number => currentRanges.includes(number));
        let newRanges: number[];
        if(isExist){
            newRanges = currentRanges.filter(range => !ranges.includes(range))
        }else{
            newRanges = [...currentRanges, ...ranges];
        }
        filterParams.setParams('complexity', newRanges)
    }

    const switchRating = (rate: number) => {
        const currentRating = filterParams.getParamArrayOfNumber('rate')
        const isExist = currentRating.includes(rate);

        let newRates: number[];
        if(isExist){
            newRates = currentRating.filter(item => item !== rate);
        }else{
            newRates = [...currentRating, rate]
        }
        filterParams.setParams('rate', newRates)
    }

    const switchSkills = (skillId: number) => {
        const currentSkills = filterParams.getParamArrayOfString('skills');
        const isExist = currentSkills.includes(skillId.toString());

        let newSkills: string[];
        if(isExist){
            newSkills = currentSkills.filter(item => item !== skillId.toString());
        }else{
            newSkills = [...currentSkills, skillId.toString()];
        }
        filterParams.setParams('skills', newSkills);
    }

    const switchSpecialization = (specializationId: number | null) => {
        filterParams.setParams('specialization', specializationId)
    }

    const setQuestion = (questionId: number | null) => {
        console.log('question', questionId)
        filterParams.setParams('question', questionId)
    }

    const switchPage = (page: number | null) => {
        filterParams.setParams('page', page)
    }

    const setTitle = (title: string) => {
        filterParams.setParams('title', title)
    }

    useEffect(() => {
        if(searchParams.toString() === ''){
            setSearchParams({
                page: '1'
            })
        }
    }, [setSearchParams, searchParams])

    return {
        filters,
        complexity: filters.complexity || [],
        rate: filters.rate || [],
        skills: filters.skills || [],
        specializationid: filters.specialization,
        title: filters.title,
        currentPage: filters.page,
        switchComplexity,
        switchRating,
        switchSkills,
        switchSpecialization,
        setTitle,
        switchPage,
        setQuestion
    }
}
