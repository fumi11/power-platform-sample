//Sample
const requestURL = "xxx";
const suffix = "/api/data/v9.2";
const tablePluralName = "/accounts";

//get
const getParam = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'OData-MaxVersion': '4.0',
        'OData-Version': '4.0'
    },
};

function test() {
    fetch(requestURL + suffix + tablePluralName + "?$top=1&$select=name",
        getParam);
}