import ReportFacade from "./ReportFacade";

test("Deve gerar relatório", function () {
    const reportFacade = new ReportFacade("Header", "Body", "Footer");
    const html = reportFacade.generate();
    expect(html).toBe("<div>Header</div><div>Body</div><div>Footer</div>");
});
