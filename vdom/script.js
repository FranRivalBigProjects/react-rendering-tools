const res=document.getElementById('res');

function run(){
  const txt=(document.getElementById('input').value||'').toLowerCase();
  const val=document.getElementById('value').value||'';
  let out='Analysis:\n';

  if(txt.includes('props')){
    out += '- Props change detected → possible re-render trigger\n';
  }

  if(txt.includes('state')){
    out += '- State update → component re-render\n';
  }

  if(txt.includes('useeffect')){
    out += '- useEffect dependency change → re-render\n';
  }

  if(txt.includes('map(')){
    out += '- List rendering detected → check keys for optimization\n';
  }

  if(txt.includes('memo')===false){
    out += '- Suggest using React.memo to prevent unnecessary re-renders\n';
  }

  if(val){
    out += '- Render count input: ' + val + '\n';
  }

  out += '- Consider memoization (useMemo / useCallback)\n';
  out += '- Avoid unnecessary state updates\n';

  res.innerText = out;
}