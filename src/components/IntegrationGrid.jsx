import IntegrationCard from "./IntegrationCard"


const IntegrationGrid = ({ integrations }) => {
  return (
    <div className="integration-grid">
      {integrations.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} />
      ))}
    </div>
  )
}

export default IntegrationGrid
