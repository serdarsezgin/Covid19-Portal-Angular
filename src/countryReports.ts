export interface CountryReports {

    country: string;
    cases: number;
    todayCases: number;
    deaths: string;
    todayDeaths: string;
    recovered: number;
    active: number;
    critical: string;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: string;
    testsPerOneMillion: string;
    population: number;
    continent: string;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
}