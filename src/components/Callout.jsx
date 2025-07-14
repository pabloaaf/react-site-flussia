export default function Callout({ children }) {
  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      padding: '1rem',
      borderLeft: '4px solid #0f62fe',
      margin: '1.5rem 0'
    }}>
      {children}
    </div>
  );
}
