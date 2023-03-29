import { CalculatorService } from "./calculator.service";
import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  let calculatorService: CalculatorService;
  let fakeLoggerService: LoggerService;

  beforeEach(() => {
    fakeLoggerService = jasmine.createSpyObj<LoggerService>("LoggerService", [
      "log",
    ]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: fakeLoggerService },
      ],
    });

    calculatorService = TestBed.inject<CalculatorService>(CalculatorService);
  });

  it("should add two numbers", () => {
    const result = calculatorService.add(2, 2);

    expect(result).toBe(4);

    expect(fakeLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract two numbers", () => {
    const result = calculatorService.subtract(2, 2);

    expect(result).toBe(0, "unexpected subtraction result");

    expect(fakeLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
