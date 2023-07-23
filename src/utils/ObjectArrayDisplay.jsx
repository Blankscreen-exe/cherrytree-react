import React from 'react'
import PropTypes from 'prop-types'

function ObjectArrayDisplay({data}) {
    return (
        <div>
          <h2>Object Array Display:</h2>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <strong>Name:</strong> {item.name}
                <br />
                <strong>Is Employee:</strong> {item.isEmployee ? 'Yes' : 'No'}
                {item.phone && (
                  <>
                    <br />
                    <strong>Phone:</strong> {item.phone}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
}

ObjectArrayDisplay.propTypes = {}

export default ObjectArrayDisplay

