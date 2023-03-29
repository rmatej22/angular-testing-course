import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";

describe("CalculatorService", () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService],
    });

    calculatorService = TestBed.inject<CalculatorService>(CalculatorService);
  });

  it("should add two numbers", () => {
    const result = calculatorService.add(2, 2);

    expect(result).toBe(4);
  });

  it("should subtract two numbers", () => {
    const result = calculatorService.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");
  });
});
