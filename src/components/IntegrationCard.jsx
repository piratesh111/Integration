

const IntegrationCard = ({ integration }) => {
  const Icon = integration.icon

  return (
    <div className="integration-card">
      <div className="card-content">
        <div className="icon-container">
          <div className="icon-background" style={{ backgroundColor: `${integration.color}20` }}>
            <Icon className="icon" style={{ color: integration.color }} />
          </div>
          <h3 className="integration-name">{integration.name}</h3>
        </div>
        <p className="integration-description">
          {integration.description.length > 150
            ? `${integration.description.substring(0, 150)}...`
            : integration.description}
        </p>
      </div>
    </div>
  )
}

export default IntegrationCard
