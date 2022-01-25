import baseUrl from './baseUrl';

const FetchQuestions = async (query, input) => {
    let data = {}
    try {
        const response = await fetch(`${baseUrl}/questions`, {
            method: 'GET',
            mode: 'cors'
        });
        data = await response.json();
    } catch(error) {
        data = 'ERROR'
    }
    return data
};

const FetchOptions = async (q_id) => {
    let data = {}
    try {
        const response = await fetch(`${baseUrl}/questions/${q_id}/options`, {
            method: 'GET',
            mode: 'cors'
        });
        data = await response.json();
    } catch(error) {
        data = 'ERROR'
    };
    return data
};

export { FetchQuestions, FetchOptions };