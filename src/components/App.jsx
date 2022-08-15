export const App = () => {
  return (
    <div className={css.rootStylization}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
