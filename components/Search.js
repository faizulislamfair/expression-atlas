import { useState } from 'react';
import { data } from '@/public/data';
import search from '@/public/search.png';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);


    const [searchPressed, setSearchPressed] = useState(false);


    const handleSearch = () => {

        const newFilteredData = data.filter(item => {

            const searchValue = searchTerm.toLowerCase();

            const ensemblIdString = String(item.ENSEMBL_ID).toLowerCase();
            const geneSymbolString = String(item.GENE_SYMBOL).toLowerCase();
            const geneNameString = String(item.GENE_NAME).toLowerCase();
            const chromosomeString = String(item.CHROMOSOME).toLowerCase();
            const geneticCategoryString = String(item.GENATIC_CATEGORY).toLowerCase();
            const sfariString = String(item.SFARI_Gene_Score).toLowerCase();
            const syndromicString = String(item.SYNDROMIC).toLowerCase();
            const eagleString = String(item.EAGLE).toLowerCase();
            const sparkGeneString = String(item.SPARK_Gene).toLowerCase();
            const geneBiotypeString = String(item.GENE_BIOTYPE).toLowerCase();
            const log2fcString = String(item.Log2FC).toLowerCase();
            const adjustedCohort1String = String(item.Adjusted_Cohort_1).toLowerCase();
            const log2fcCohort2String = String(item.Log2FC_Cohort_2).toLowerCase();
            const adjustedCohort2String = String(item.Adjusted_Cohort_2).toLowerCase();
            const referencesString = String(item.REFERENCES).toLowerCase();



            return (

                ensemblIdString.includes(searchValue) ||
                geneSymbolString.includes(searchValue) ||
                geneNameString.includes(searchValue) ||
                chromosomeString.includes(searchValue) ||
                geneticCategoryString.includes(searchValue) ||
                sfariString.includes(searchValue) ||
                syndromicString.includes(searchValue) ||
                eagleString.includes(searchValue) ||
                sparkGeneString.includes(searchValue) ||
                geneBiotypeString.includes(searchValue) ||
                log2fcString.includes(searchValue) ||
                adjustedCohort1String.includes(searchValue) ||
                log2fcCohort2String.includes(searchValue) ||
                adjustedCohort2String.includes(searchValue) ||
                referencesString.includes(searchValue)


            );
        });

        setFilteredData(newFilteredData);

        setSearchPressed(true);


    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };



    return (
        <div className='grid place-content-center'>

            <div className='grid place-content-center mt-20 pt-5'>
                <div className='flex flex-row text-3xl'>
                    <div className='mt-1'>
                        Search &nbsp;
                    </div>

                    <div className='flex flex-col'>
                        <input
                            className='w-[550px] h-8 bg-[#F8E0C8] p-7'
                            type="text"
                            placeholder="ENSEMBL ID or Gene Symbol"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />

                        <div className='mt-2' onClick={handleSearch}>
                            <img className='h-7 lg:h-12' src="/search.png" alt="Search Icon" />
                        </div>
                    </div>

                </div>
            </div>



            <div className='grid place-content-center mt-10 pt-10'>

                {

                    searchPressed && (

                        filteredData.map(item => (
                            <div key={item.id} className='bg-[#3FDEAD] text-black m-5 p-5 rounded-md'>

                                {
                                    item?.ENSEMBL_ID &&
                                    <>
                                        <b>ENSEMBL ID</b>: {item?.ENSEMBL_ID} <br />
                                    </>
                                }


                                {
                                    item?.GENE_NAME &&
                                    <>
                                        <b>GENE NAME</b>: {item?.GENE_NAME} <br />
                                    </>
                                }


                                {
                                    item?.GENE_SYMBOL &&
                                    <>
                                        <b>GENE SYMBOL</b>: {item?.GENE_SYMBOL} <br />

                                    </>
                                }




                                {
                                    item?.CHROMOSOME &&
                                    <>
                                        <b>CHROMOSOME</b>: {item?.CHROMOSOME} <br />

                                    </>
                                }




                                {
                                    item?.GENATIC_CATEGORY &&
                                    <>
                                        <b>GENETIC CATEGORY</b>: {item?.GENATIC_CATEGORY} <br />

                                    </>
                                }




                                {
                                    item?.SFARI_Gene_Score &&
                                    <>
                                        <b>SFARI Gene-Score</b>: {item?.SFARI_Gene_Score} <br />

                                    </>
                                }




                                {
                                    item?.SYNDROMIC &&
                                    <>
                                        <b>SYNDROMIC</b>: {item?.SYNDROMIC} <br />

                                    </>
                                }




                                {
                                    item?.EAGLE &&
                                    <>
                                        <b>EAGLE</b>: {item?.EAGLE} <br />

                                    </>
                                }




                                {
                                    item?.SPARK_Gene &&
                                    <>
                                        <b>SPARK Gene</b>: {item?.SPARK_Gene} <br />

                                    </>
                                }



                                {
                                    item?.GENE_BIOTYPE &&
                                    <>
                                        <b>GENE BIOTYPE</b>: {item?.GENE_BIOTYPE} <br />

                                    </>
                                }




                                {
                                    item?.Log2FC &&
                                    <>
                                        <b>Log2FC (ASD vs CRTL) (Cohort 1)</b>: {item?.Log2FC} <br />

                                    </>
                                }




                                {
                                    item?.Adjusted_Cohort_1 &&
                                    <>
                                        <b>Adjusted P Value (Cohort 1)</b>: {item?.Adjusted_Cohort_1} <br />

                                    </>
                                }




                                {
                                    item?.Log2FC_Cohort_2 &&
                                    <>
                                        <b>Log2FC (ASD vs CTL) (Cohort 2)</b>: {item?.Log2FC_Cohort_2} <br />

                                    </>
                                }



                                {
                                    item?.Adjusted_Cohort_2 &&
                                    <>
                                        <b>Adjusted P Value (Cohort 2)</b>: {item?.Adjusted_Cohort_2} <br />

                                    </>
                                }




                                {
                                    item?.REFERENCES &&
                                    <>
                                        <b>REFERENCES</b>: {item?.REFERENCES}

                                    </>
                                }


                            </div>

                        )))}
            </div>
        </div>
    );
};

export default Search;