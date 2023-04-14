import Window from "@/components/Windows/Window";
import React, { Component, useEffect, useRef, useState } from "react";
import s from "./Calculator.module.scss";
interface AutoScalingTextProps {
  children: React.ReactNode;
}

const AutoScalingText: React.FC<AutoScalingTextProps> = ({ children }) => {
  const [scale, setScale] = useState<number>(1);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    const parentNode = node?.parentNode as HTMLElement;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node?.offsetWidth;
    const actualScale = availableWidth / actualWidth!;

    if (scale !== actualScale) {
      if (actualScale < 1) {
        setScale(actualScale);
      } else if (scale < 1) {
        setScale(1);
      }
    }
  }, [scale]);

  return (
    <div
      className={s["auto-scaling-text"]}
      style={{ transform: `scale(${scale}, ${scale})` }}
      ref={nodeRef}
    >
      {children}
    </div>
  );
};

interface CalculatorDisplayProps {
  value: string;
  [prop: string]: any;
}

class CalculatorDisplay extends Component<CalculatorDisplayProps> {
  render() {
    const { value, ...props } = this.props;

    const language = navigator.language || "en-US";
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 6,
    });

    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/);

    if (match) {
      formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];
    }

    return (
      <div {...props} className={s["calculator-display"]}>
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    );
  }
}

interface CalculatorKeyProps {
  onPress: () => void;
  className?: string;
  [prop: string]: any;
}

class CalculatorKey extends React.Component<CalculatorKeyProps> {
  render() {
    const { onPress, className, ...props } = this.props;

    return (
      <button
        className={`${s["calculator-key"]} ${className}`}
        {...props}
        onClick={onPress}
      />
    );
  }
}

interface CalculatorOperations {
  [operator: string]: (prevValue: number, nextValue: number) => number;
}

const CalculatorOperations: CalculatorOperations = {
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "*": (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue,
};

interface State {
  value: number | null;
  displayValue: string;
  operator: string | null;
  waitingForOperand: boolean;
}

class Calculator extends Component<{ onClose: () => void }, State> {
  state: State = {
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false,
  };

  clearAll = () => {
    this.setState({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false,
    });
  };

  clearDisplay = () => {
    this.setState({
      displayValue: "0",
    });
  };

  clearLastChar = () => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || "0",
    });
  };

  toggleSign = () => {
    const { displayValue } = this.state;
    const newValue = parseFloat(displayValue) * -1;

    this.setState({
      displayValue: String(newValue),
    });
  };

  inputPercent = () => {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    this.setState({
      displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
    });
  };

  inputDot = () => {
    const { displayValue } = this.state;

    if (!/\./.test(displayValue)) {
      this.setState({
        displayValue: displayValue + ".",
        waitingForOperand: false,
      });
    }
  };

  inputDigit = (digit: number) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };

  performOperation = (nextOperator: string) => {
    const { value, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      this.setState({
        value: inputValue,
      });
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      this.setState({
        value: newValue,
        displayValue: String(newValue),
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
    });
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let { key } = event;

    if (key === "Enter") key = "=";

    if (/\d/.test(key)) {
      event.preventDefault();
      this.inputDigit(parseInt(key, 10));
    } else if (key in CalculatorOperations) {
      event.preventDefault();
      this.performOperation(key);
    } else if (key === ".") {
      event.preventDefault();
      this.inputDot();
    } else if (key === "%") {
      event.preventDefault();
      this.inputPercent();
    } else if (key === "Backspace") {
      event.preventDefault();
      this.clearLastChar();
    } else if (key === "Clear") {
      event.preventDefault();
      this.clearAll();
    } else if (key === "Escape") {
      event.preventDefault();
      this.clearAll();
    }
  };

  render() {
    const { displayValue } = this.state;

    const clearDisplay = displayValue !== "0";
    const clearText = clearDisplay ? "C" : "AC";

    return (
      <Window onClose={this.props.onClose}>
        <div className={s.calculator}>
          <CalculatorDisplay value={displayValue} />
          <div className={s["calculator-keypad"]}>
            <div className={s["input-keys"]}>
              <div className={s["function-keys"]}>
                <CalculatorKey
                  className={s["key-clear"]}
                  onPress={() =>
                    clearDisplay ? this.clearDisplay() : this.clearAll()
                  }
                >
                  {clearText}
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-sign"]}
                  onPress={() => this.toggleSign()}
                >
                  ±
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-percent"]}
                  onPress={() => this.inputPercent()}
                >
                  %
                </CalculatorKey>
              </div>
              <div className={`${s["digit-keys"]} ${s["zero"]} `}>
                <CalculatorKey
                  className={s["key-0"]}
                  onPress={() => this.inputDigit(0)}
                >
                  0
                </CalculatorKey>

                <CalculatorKey
                  className={s["key-dot"]}
                  onPress={() => this.inputDot()}
                >
                  ●
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-1"]}
                  onPress={() => this.inputDigit(1)}
                >
                  1
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-2"]}
                  onPress={() => this.inputDigit(2)}
                >
                  2
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-3"]}
                  onPress={() => this.inputDigit(3)}
                >
                  3
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-4"]}
                  onPress={() => this.inputDigit(4)}
                >
                  4
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-5"]}
                  onPress={() => this.inputDigit(5)}
                >
                  5
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-6"]}
                  onPress={() => this.inputDigit(6)}
                >
                  6
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-7"]}
                  onPress={() => this.inputDigit(7)}
                >
                  7
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-8"]}
                  onPress={() => this.inputDigit(8)}
                >
                  8
                </CalculatorKey>
                <CalculatorKey
                  className={s["key-9"]}
                  onPress={() => this.inputDigit(9)}
                >
                  9
                </CalculatorKey>
              </div>
            </div>
            <div className={s["operator-keys"]}>
              <CalculatorKey
                className={s["key-divide"]}
                onPress={() => this.performOperation("/")}
              >
                ÷
              </CalculatorKey>
              <CalculatorKey
                className={s["key-multiply"]}
                onPress={() => this.performOperation("*")}
              >
                ×
              </CalculatorKey>
              <CalculatorKey
                className={s["key-subtract"]}
                onPress={() => this.performOperation("-")}
              >
                −
              </CalculatorKey>
              <CalculatorKey
                className={s["key-add"]}
                onPress={() => this.performOperation("+")}
              >
                +
              </CalculatorKey>
              <CalculatorKey
                className={s["key-equals"]}
                onPress={() => this.performOperation("=")}
              >
                =
              </CalculatorKey>
            </div>
          </div>
        </div>
      </Window>
    );
  }
}

export default Calculator;
