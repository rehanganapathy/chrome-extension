// open google sheets when xlsx download is complete from convertio.co
chrome.downloads.onChanged.addListener(function (downloadDelta) {
    if (downloadDelta.state && downloadDelta.state.current === 'complete') {
        if (downloadDelta.mime && downloadDelta.mime.current === 'text/csv') {
            chrome.tabs.create({ url: 'https://convertio.co/csv-xlsx/' });
        }
        else {
            chrome.tabs.create({ url: 'https://docs.google.com/spreadsheets/create' });
        }
    }
}

);




//open convertio.co when csv is downloaded from any site
chrome.downloads.onChanged.addListener(function (downloadDelta) {
    if (downloadDelta.state && downloadDelta.state.current === "complete") {
        if (downloadDelta.mime && downloadDelta.mime.current === "text/csv") {
            chrome.tabs.create({ url: "https://convertio.co/csv-xlsx/" });
        }
    }
});

//upload file to google sheets when xlsx is downloaded from convertio.co
chrome.downloads.onDeterminingFilename.addListener(function (downloadItem, suggest) {
    if (downloadItem.url.indexOf('convertio.co') !== -1) {
        uploadFileToGoogleSheets(downloadItem.filename);
    }
});


/** 

gapi.load('client', function () {
    gapi.client.init({
        clientId: '184344738888-2tolpeom0h4s46nsuu07b3mafhqa3po1.apps.googleusercontent.com',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        scope: 'https://www.googleapis.com/auth/spreadsheets'
    }).then(function () {
        console.log('Google Sheets API client initialized');
    }).catch(function (err) {
        console.error('Error initializing Google Sheets API client', err);
    });
});


function uploadFileToGoogleSheets(filename) {
    gapi.client.sheets.spreadsheets.get({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
    }).then(function (response) {
        var sheetId = response.result.sheets[0].properties.sheetId;
        var sheetName = response.result.sheets[0].properties.title;
        var values = [[filename]];
        gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: 'YOUR_SPREADSHEET_ID',
            range: sheetName + '!A1:A',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            includeValuesInResponse: true,
            resource: {
                values: values
            },
        }).then(function (response) {
            console.log('File uploaded to Google Sheets:', filename);
        }).catch(function (err) {
            console.error('Error uploading file to Google Sheets', err);
        });
    }).catch(function (err) {
        console.error('Error getting active sheet', err);
    });
}
*/