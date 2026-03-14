import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

type ArgsValue =  null | number | string | string[] | number[];

export default function useFilterParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    
    const getParamArrayOfNumber = useCallback(
        (key: string, defaultParam: number[] = []): number[] => {
            const param = searchParams.get(key)
            if(!param) return defaultParam
            return param
                .split(',')
                .map(Number)
        }, 
    [searchParams])
    const getParamArrayOfString = useCallback(
        (key: string, defaultParam: string[] = []): string[] => {
            const param = searchParams.get(key)
            if(!param) return defaultParam
            return param
                .split(',')
                .map(item => item.toString())
        }, 
    [searchParams])

    const getParamNumber = useCallback((key: string) => {
      const param = searchParams.get(key);
      return Number(param)
    }, [searchParams])

    const getParamString = useCallback((key: string) => {
      const param = searchParams.get(key);
      return param
    }, [searchParams])

    const setParams = useCallback((key: string, value: ArgsValue) => {
        setSearchParams(prev => {
            const newParam = new URLSearchParams(prev);
            if(value === '' ||  value === null || (Array.isArray(value) && value.length === 0)){
                newParam.delete(key)
            }else if(Array.isArray(value)){
                newParam.set(key, value.join(','))
            }else if(!Number.isNaN(value)){
                newParam.set(key, value.toString())
            }
            if(key !== 'page'){
                newParam.set('page', '1')
            }
            return newParam;
        })
    }, [setSearchParams])

    return {getParamString, getParamNumber, getParamArrayOfString, getParamArrayOfNumber, setParams }
}
