

describe('Upload-download test', () => {
  it("verify excel upload download", ()=>{
    let path = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";
    cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
    cy.get('button', 'Download').click();
    cy.task(WriteExcelTest, {searchText: "Apple", replaceText: "450", change:{rowChange:0, colChange:2}, filePath:FilePath})
  })
})
