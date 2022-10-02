import React, { useState } from 'react';
import './Survey.css';



export default function Quiz() { 
  const [businessOP, setBusinessOP] = useState(0)
  const [commercialAuto, setCommercialAuto] = useState(0)
  const [contractorsPolicy, setContractorsPolicy] = useState(0)
  const [liabilityUmbrella, setLiabilityUmbrella] = useState(0)
  const [workersCompensation, setWorkersCompensation] = useState(0)
  const [bonds, setBonds] = useState(0)
  
  const questions = [
		{ 
			questionCategory: 'businessOP',
			questionText: 'Are you a small/medium business owner?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: true},
				{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionCategory: 'businessOP',
			questionText: 'Are you looking for insurance for your company?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionCategory: 'commercialAuto',
			questionText: 'Does your business own or lease vehicles?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true},
			{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionCategory: 'commercialAuto',
			questionText: 'If you business have vehicles, is your company vechicle at risk of any accident?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true},
			{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionCategory: 'contractorsPolicy',
			questionText: 'Would you need assistance if an incident required your business to pay reimbursement',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},
		
		{
			questionCategory: 'contractorsPolicy',
			questionText: 'Are you a contractor seeking insurance for damages or theft?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

		{
            questionCategory: 'liabilityUmbrella',
			questionText: 'If you lose a liability lawsuit and the judgment far exceeds your coverage limits, could you afford to pay the excess cost yourself?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

		{
			questionCategory: 'liabilityUmbrella',
			questionText: 'Need legal-coverage for your business?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

        {
			questionCategory: 'workers Compensation',
			questionText: 'Need to provide for employees after work-related accidents, illness, or medical treatments?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

        {
			questionCategory: 'bonds',
			questionText: 'Will you need a surety bond between you, StateFarm, and an investor for future projects?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},

        {
			questionCategory: 'bonds',
			questionText: 'Would you like to obtain a fidelity bond in case a customer loses valuables due to an employee?',
			answerOptions: [
        	{ answerText: 'Yes', isCorrect: true },
			{ answerText: 'No', isCorrect: false },
			],
		},
	];

	

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect && questions[currentQuestion].questionCategory === 'businessOP') {
			setBusinessOP(businessOP+1);
		} else if (isCorrect && questions[currentQuestion].questionCategory === 'contractorsPolicy'){
			setContractorsPolicy(contractorsPolicy + 1);
		} else if (isCorrect && questions[currentQuestion].questionCategory === 'commercialAuto') {
			setCommercialAuto(commercialAuto + 1);
		} else if (isCorrect && questions[currentQuestion].questionCategory === 'workersCompensation') {
			setWorkersCompensation(workersCompensation + 1);
		} else if (isCorrect && questions[currentQuestion].questionCategory === 'liabilityUmbrella') {
			setLiabilityUmbrella(liabilityUmbrella + 1);
		} else if (isCorrect && questions[currentQuestion].questionCategory === 'bonds'){
			setBonds(bonds + 1);
        }

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion <= questions.length) {
			setCurrentQuestion(nextQuestion);
		} 

			
		}

    
    let max = Math.max(businessOP, contractorsPolicy, commercialAuto, workersCompensation, liabilityUmbrella, bonds);
    
    if(businessOP === max){
        max = 'businessOP'
    }
    if(contractorsPolicy === max){
        max = 'contractorsPolicy'
    }
    if(commercialAuto === max){
        max = 'commercialAuto'
    }
    if(workersCompensation === max){
        max = 'workersCompensation'
    }
    if(liabilityUmbrella === max){
        max = 'liabilityUmbrella'
    }
    if(bonds === max){
        max = 'bonds'
    }

	function ifStatement(max){
		if (String(max) === 'businessOP'){
		window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/business-owners-policies');
		}
		else if (String(max) === 'contractorsPolicy'){
			window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/business-owners-policies/contractors');
		}
		else if (String(max) === 'commercialAuto'){
			window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/commercial-auto');
		}
		else if (String(max) === 'workersCompensation'){
			window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/workers-compensation');
		}
		else if (String(max) === 'liabilityUmbrella'){
			window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/umbrella-policy');
		}
		else if (String(max) === 'bonds'){
			window.location.assign('https://www.statefarm.com/small-business-solutions/insurance/surety-fidelity-bonds');
		}
	}

	if(currentQuestion >= questions.length){
		
		setTimeout(ifStatement, 2000, max);
	}

	return (
		<div className='question-app'>
			<div className='question-section'>
				<div className='question-count'>
					<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='question-text'>{questions[currentQuestion].questionText}</div>
			</div>
			<div className='answer-section'>
				{questions[currentQuestion].answerOptions.map((answerOption) => (
					<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
				))}
			</div>
		</div>
    );
}