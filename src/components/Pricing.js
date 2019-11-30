import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className="">
    {data.map(price => (
      <div key={price.plan} className="">
        <section className="">
          <h4 className="">
            {price.plan}
          </h4>
          <h2 className="">
            ${price.price}
          </h2>
          <p className="">{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className="">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
