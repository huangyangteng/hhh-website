import './english.css'
import QueryWord from './components/QueryWord';
import PhoneticSymbol from "@/app/english/components/PhoneticSymbol";
import PhoneticsVideo from "@/app/english/components/PhoneticsVideo";
import Recommend from "@/app/english/components/Recommend";
export default function English(){

    return <div className='english-wrapper'>
        <QueryWord/>
        <PhoneticSymbol/>
        <PhoneticsVideo/>
        <Recommend/>
    </div>
}
