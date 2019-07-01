import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className="black-mode">
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div id="cursor" style={{
            backgroundColor: "transparent",
	          border: "2px solid red",
	          width: "35px",
	          height: "35px",
	          position: "absolute",
	          borderRadius: "100%",
	          transition: "all 0.2s ease",
	          zIndex: "50000",
	          pointerEvents: "none",
            transform: "translate(-36%,-36%)",
        }}></div>
      </body>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
    var mousePos;
    var moved = false;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100);

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

      moved = true;

        event = event || window.event;
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }
    function getMousePosition() {
        var pos = mousePos;

        if (!pos) {
            // We haven't seen any movement yet
        }
        else if(moved === true) {
            // Use pos.x and pos.y
             //console.log("Pos:", pos.x, pos.y);
          moved = false;
          cursor = document.querySelector('#cursor');
          cursor.style.left = (pos.x -5) + 'px' ;
          cursor.style.top = (pos.y -5) + 'px';

        }
    }
})();`,
            }}
        />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
