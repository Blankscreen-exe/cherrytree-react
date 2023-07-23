import React from 'react'
import PropTypes from 'prop-types'

function ObjectDisplay({data}) {
    return (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {typeof value === 'object' ? <ObjectDisplay data={value} /> : value}
            </li>
          ))}
        </ul>
      );
}

ObjectDisplay.propTypes = {}

export default ObjectDisplay
