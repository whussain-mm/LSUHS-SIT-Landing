import React from 'react';
import './StepsSection.css';
import boxStep from "../../../../../src/assets/icons/box-step.svg"
import docStep from "../../../../../src/assets/icons/doc-step.svg"
import searchStep from "../../../../../src/assets/icons/search-step.svg"

const steps = [
  {
    title: 'Find your tests',
    description:
      'Take the eligibility questionnaire to find out if you can participate in the program at this time. Please then select the test kit that is most appropriate for you.',
    icon: searchStep,
  },
  {
    title: 'Receive your kit',
    description:
      "A licensed clinician will review, and if appropriate, approve your order. We'll send everything you need to collect your samples to your home. Collect and return your specimen within 30 days.",
    icon: boxStep,
  },
  {
    title: 'Get results',
    description:
      'Your sample will be processed by our partner CLIA-certified and CAP-accredited laboratories. Results will be available within 2–5 days. If your results require follow-up a licensed healthcare professional will call you to discuss results and any next steps.',
    icon: docStep,
  },
];

const StepsSection = () => {
  return (
    <section className="steps-section">
      <div className="container">
      <h4 className="steps-subtitle">How it works</h4>
      <h2 className="steps-title">Simple steps to get tested</h2>

      <div className="steps-cards">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="icon-wrapper"> <img src={step.icon} alt="Step Icon" /></div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default StepsSection;
