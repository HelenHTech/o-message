import React from "react";

const OMessage = React.forwardRef((props, ref) => {
	const demo = props.state || props.demo;
	const actions = demo.button || (demo.linkTitle && demo.linkURL)
	const inner = demo.layout === 'inner';

	// the wrapping 'inner' div is for demo purposes—it demonstrates the message's behaviour in a container with a limited width, but will not be displayed in the markup
	return <div className={inner ? 'demo-inner' : ''}> 
		<div ref={ref} className={`o-message o-message--${demo.type}${inner ? ' o-message--inner' : ''} o-message--${demo.status}`} data-o-component="o-message" data-close={demo.noCloseButton ? "true" : 'false'}>
			<div className="o-message__container">
				<div className={"o-message__content " + (demo.centralised ? 'o-message__content--center-align' : '')} >
					<p className="o-message__content-main">
						{demo.highlight ? <span className="o-message__content-highlight">{demo.highlight} </span> : null}
						{demo.content}
					</p>
					{demo.additionalContent ? <p className="o-message__content-additional">{demo.additionalContent}</p> : null}

					{actions
						?
						<div className="o-message__actions">
							{demo.button ? <button className="o-message__actions__primary">{demo.button}</button> : null}
							{demo.linkTitle && demo.linkURL ? <a href={demo.linkURL} className="o-message__actions__secondary">{demo.linkTitle}</a> : null}
						</div>
						: null
					}
				</div>
			</div>
		</div>
	</div>
});

export default OMessage;