

describe('Upload-download test', () => {
  it("verify excel upload download", ()=>{
    let FilePath = Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";
    cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html')
    cy.contains('button', 'Download').click();
    cy.task('writeExcelTest', {searchText: "Apple", replaceText: "450", change:{rowChange:0, colChange:2}, filePath:FilePath});
    cy.get('#fileinput').selectFile(FilePath);
  })
})
