import { useNavigate } from 'react-router';
import AppError from '../assets/App-Error.png'

const ErrorForApp = () => {
    let navigate = useNavigate();
    
    return (
        <div className="flex flex-col">
        
        <div className="flex-1 mx-auto mt-10">
        <img src={AppError}></img>
        </div>
         <h1 className="text-[#001931] font-semibold text-5xl text-center mt-8 mb-4">Oops, App Not Found</h1>
        <h2 className="text-center text-[#627382] mb-4">The App you are requesting is not found on our system.  please try another apps</h2>
        <button onClick={() => navigate('/apps')} className="btn btn-sm md:btn-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white w-fit mx-auto mb-10">Go Back!</button>
       </div>
    );
};

export default ErrorForApp;