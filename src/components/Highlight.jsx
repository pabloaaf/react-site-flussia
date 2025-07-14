export default function Highlight({ children, color = '#ff0' }) {
  return (
    <span style={{ backgroundColor: color, padding: '0.2em 0.4em', borderRadius: '4px' }}>
      {children}
    </span>
  );
}
