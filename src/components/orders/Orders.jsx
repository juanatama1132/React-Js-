export const Orders = ( {order} ) => {
    return (
      <div>
          <h2>{order?.buyer?.name}</h2>
      </div>
    )
  }