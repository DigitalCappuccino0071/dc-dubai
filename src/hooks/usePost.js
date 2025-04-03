
import axiosInstance from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';


export default function usePost(
    apiEndpointUrl,
    queryKey,
    successMessage
) {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: formData => {
            return axiosInstance.post(apiEndpointUrl, formData);
        },
        onSuccess: data => {
            console.log(data);


            toast.success(
                successMessage,
                {
                    position: 'bottom-right',
                    autoClose: 1000,
                }
            );

            queryClient.invalidateQueries({ queryKey: [queryKey] });

        },
        onError: error => {
            toast.error(
                'An error occurred while processing your request. Please try again later.',
                {
                    position: 'bottom-right',
                    autoClose: 1000,
                }
            );
        },
    });

    return mutation;
}