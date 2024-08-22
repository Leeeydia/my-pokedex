const DashboardContainer = styled.div``;

const Dashboard = ({ selectPokemon }) => {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectPokemon.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.korean_name}</li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};
export default Dashboard;
