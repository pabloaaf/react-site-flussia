export default function Callout({ children }) {
  return (
    <div style={{
      background: ({ theme }) => theme.colors.background,
      padding: '1rem',
      borderLeft: '4px solid',
      borderLeftColor: ({ theme }) => theme.colors.accent,
      margin: '1.5rem 0'
    }}>
      {children}
    </div>
  );
}
