import SearchSection from "../sections/explore/searchSection/SearchSection";
import ResultSection from "../sections/explore/resultSection/ResultSection";
import {useParams} from "react-router-dom";
import {useState} from "react";

export default function Explore() {

    const { keyword } = useParams();
    const [data, setData] = useState(null);

    const handleDataResponse = (responseData) => {
        setData(responseData);
        console.log("ExploreTest Component has received data")
    }

    return (
        <div>
            <SearchSection onDataUpdate={handleDataResponse}/>
            <ResultSection keyword={keyword} data={data}/>
        </div>
    )
}