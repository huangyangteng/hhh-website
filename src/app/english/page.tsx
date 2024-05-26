import './english.css'
import PhoneticSymbol from "@/app/english/components/PhoneticSymbol";
import PhoneticsVideo from "@/app/english/components/PhoneticsVideo";
import Recommend from "@/app/english/components/Recommend";
import QueryWord from "@/app/english/components/QueryWord";

export default function English(){
    return <div className='english-wrapper'>
        <QueryWord/>
        <PhoneticSymbol/>
        <PhoneticsVideo/>
        <Recommend/>
    </div>
}
