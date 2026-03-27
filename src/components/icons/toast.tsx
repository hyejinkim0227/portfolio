export default function IconToast({type}: any) { return <span>{type === 'success' ? '✅' : type === 'error' ? '❌' : '⚠️'}</span>; }
