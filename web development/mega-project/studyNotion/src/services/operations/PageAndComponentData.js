import toast from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { catalogData } from '../apis';


export async  function getCatalogPageData(categoryId){
    const toastId = toast.loading('Loading....');
    let result = [];
    try{
        const res = await apiConnector('POST',catalogData.CATALOGPAGEDATA_API,{categoryId});
        console.log("response is ",res);
        if(!res)
        {
            throw new Error('could not fetch category page data');
        }
        result = res.data;
    }
    catch(error)
    {
        console.log("CATALOG PAGE DATA API ERORR ",error.message);
        toast.error(error.message);
        result = error.res?.data;
    }
    toast.dismiss(toastId);
    return result;
}   