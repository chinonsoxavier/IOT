import React, { useRef, useState } from "react";

export default function OTPInput() {
  const [otpDigits, setOtpDigits] = useState(Array(5).fill(""));
  const inputRefs = useRef(Array(5).fill(null))

  // Handle input changes
  const handleChange = (index, event) => {
    const digits = [...otpDigits];
    digits[index] = event.target.value;
    setOtpDigits(digits);

    // Auto-focus the next input if possible
    if (index < 4 && event.target.value !== "") {
    //   const nextInput=  inputRefs.current[3].focus();
      const nextInput = document.querySelector(`#otp-digit-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  return (
    <div>
      {otpDigits.map((digit, index) => (
        <input
          key={index}
          type="text"
          ref={inputRefs.current[index]}
          id={`otp-digit-${index +1}`}
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e)}
          style={{ width: "40px", marginRight: "10px" }}
        />
      ))}
    </div>
  );
}
