import React from 'react';

const h3Style = { textAlign: 'center' };
const pStyle = { textIndent: 12 };
const InstructionsPageOne = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 1: Establishing a Stable Practice</h3>
			<br />
			<h5>Goal: Establish a meditation habit.</h5>
			<h5>Instructions</h5>
			<ol>
				<li>Sit down on a cushion or a chair and make yourself comfortable.</li>
				<li>With your eyes closed, gently straighten your spine so your head, chest, and hips are aligned.</li>
				<li>Remind yourself of why you are meditating, and your goal for this meditation session.</li>
				<li>Softly direct your attention to the breathe.</li>
				<li>Hold a firm intention to bring your attention back to the breathe upon being distracted.</li>
				<li>Upon being distracted, softly bring your attention back to the breathe.</li>
				<li>Repeat the two previous processes until the meditation session is over.</li>
			</ol>
			<br />
			<p style={pStyle}>
				Stable attention and powerful mindfulness have the ability to permanently change
				your life for the better. However, 99% of the benefits come from
				consistent practice, not from intellectual understanding. Your goal for
				this stage is to develop a habit of meditating. Do not worry about the
				quality of meditation yet - what matters is the fact that you are making meditation 
				a part of your life.
			</p>
			<br />
			<h5>Mastery: Meditate for at least an hour per week for 4 weeks in a row.</h5>
		</div>
	)
}
const InstructionsPageTwo = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 2: Working with Mind Wandering</h3>
			<br />
			<h5>Goal: Reduce mind wandering and stabilize the attention.</h5>
			<h5>Instructions</h5>
			<ol>
				<li>Sit down on a cushion or a chair and make yourself comfortable.</li>
				<li>With your eyes closed, gently straighten your spine so your head, chest, and hips are aligned.</li>
				<li>Remind yourself of why you are meditating, and your goal for this meditation session.</li>
				<li>Softly direct your attention to the breathe.</li>
				<li>
					Hold a firm intention to sustain your attention on the breathe while opening up 
					your peripheral awareness.
				</li>
				<li>
					Appreciate the 'aha!' moment of realizing that you've been distracted since 
					this is the best opportunity you have at cultivating your mindfulness.
				</li>
				<li>Repeat the three previous processes until the meditation session is over.</li>
			</ol>
			<br />
			<p style={pStyle}>
				Distraction can be classified into two distinct steps: forgetting and mind wandering. 
				Forgetting is the moment when the meditation object disappears from both attention and 
				awareness. Mind wandering is the spontaneous movement of attention between loosely 
				related thoughts after forgetting occurs. Your only goal for this stage is to 
				work with mind wandering through persistant effort and positive reinforcement. 
			</p>
			<p style={pStyle}>
				As stated in the Overview page, the sustaining of attention is involuntary. No matter 
				how hard you try, distractions will always arise and will eventually take the attention away 
				from the breathe. A smarter way of stabilizing the attention is strengthening the peripheral 
				awareness to help you catch distractions when they are present. Bringing the attention 
				back to the breathe does exactly this. 
			</p>
			<p style={pStyle}>
				All you need to do in this stage is holding a strong intention to appreciate the moment 
				when you realize that you've been distracted and diligently bringing the attention back to 
				the breathe - no matter how bad you seem at the task. Finding the 'aha!' moment joyful is 
				critical. Appreciation and joy brings calmness, and calmness paves the way for 
				the peripheral awareness to develop.
			</p>
			<br />
			<h5>
				Mastery: In a typical meditation session, attention is mostly placed on the breathe
				while mind wandering lasts seconds.
			</h5>
		</div>
	)
}
const InstructionsPageThree = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 3: Working with Forgetting</h3>
			<p style={pStyle}>I am Page Three content.</p>
		</div>
	)
}
const InstructionsPageFour = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 4: Working with Gross Distractions</h3>
			<p style={pStyle}>I am Page Four content.</p>
		</div>
	)
}
const InstructionsPageFive = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 5: Working with Subtle Distractions</h3>
			<p style={pStyle}>I am Page Five content.</p>
		</div>
	)
}
const InstructionsPageSix = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 6: To Be Announced</h3>
		</div>
	)
}
const InstructionsPageSeven = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 7: To Be Announced</h3>
		</div>
	)
}
const InstructionsPageEight = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 8: To Be Announced</h3>
		</div>
	)
}
const InstructionsPageNine = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 9: To Be Announced</h3>
		</div>
	)
}
const InstructionsPageTen = (props) => {
	return (
		<div>
			<h3 style={h3Style}>Stage 10: To Be Announced</h3>
		</div>
	)
}
const InstructionsPages = [];
InstructionsPages.push(InstructionsPageOne);
InstructionsPages.push(InstructionsPageTwo);
InstructionsPages.push(InstructionsPageThree);
InstructionsPages.push(InstructionsPageFour);
InstructionsPages.push(InstructionsPageFive);
InstructionsPages.push(InstructionsPageSix);
InstructionsPages.push(InstructionsPageSeven);
InstructionsPages.push(InstructionsPageEight);
InstructionsPages.push(InstructionsPageNine);
InstructionsPages.push(InstructionsPageTen);
export default InstructionsPages;