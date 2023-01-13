import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
export const useAxios = () => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [axiosParams, setAxiosParams] = useState({})

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const get = async(url, config = {}) => {
        try {
            setLoading(true);
            const result = await axios.get(url, config);
            const data = await result.data
            setResponse(data);
        } catch (error) {
            setError(error.response.data.status);
        } finally {
            setLoading(false);
        }
    }

    const post = async(url, data, config = {}) => {
        try {
            setLoading(true);
            const result = await axios.post(url, data, config);
            const res = await result.data
            setResponse(res);
        } catch (error) {
            setError(error.response.data.status);
        } finally {
            setLoading(false);
        }
    }

    return { response, error, loading, get, post, fetchData };
};