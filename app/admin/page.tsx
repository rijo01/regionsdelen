'use client'
import { useState, useEffect, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

interface Company {
  kundid: number; cfarnr: number; namn: string|null; firma: string|null
  orgnummer: string|null; postort: string|null; lan: string|null
  branschid: number|null; epostadress: string|null; webb: string|null
  lank: string|null; logotyp: string|null; infotext: string|null
  tel: string|null; tel2: string|null; mobil1: string|null
  gatuadress: string|null; postnr: number|null; kontaktperson: string|null
  anstkl: string|null; aeant: number|null; poang: number|null
}

function AdminContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Company[]>([])
  const [selected, setSelected] = useState<Company|null>(null)
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [editData, setEditData] = useState<Partial<Company>>({})

  const loadById = useCallback(async (id: string) => {
    const { data } = await supabaseAdmin.from('aesamtable').select('*').eq('kundid', id).single()
    if (data) { setSelected(data); setEditData(data) }
  }, [])

  useEffect(() => { const id = searchParams.get('id'); if (id) loadById(id) }, [searchParams, loadById])

  const search = useCallback(async (q: string) => {
    if (!q.trim()) { setResults([]); return }
    setLoading(true)
    const { data } = await supabaseAdmin.from('aesamtable')
      .select('kundid,cfarnr,namn,firma,orgnummer,postort,lan,branschid')
      .or(`namn.ilike.%${q}%,firma.ilike.%${q}%,orgnummer.ilike.%${q}%`)
      .limit(30)
    setResults(data || []); setLoading(false)
  }, [])

  useEffect(() => { const t = setTimeout(() => search(query), 300); return () => clearTimeout(t) }, [query, search])

  const selectCompany = (c: Company) => { setSelected(c); setEditData(c); router.push(`/admin?id=${c.kundid}`) }

  const save = async () => {
    if (!selected) return
    setSaving(true)
    await supabaseAdmin.from('aesamtable').update(editData).eq('kundid', selected.kundid)
    setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 2000)
  }

  const F = (label: string, key: keyof Company, type: 'text'|'number'|'textarea' = 'text') => (
    <div style={{marginBottom:14}}>
      <label style={{display:'block',fontSize:11,fontWeight:500,color:'var(--muted)',marginBottom:4,textTransform:'uppercase',letterSpacing:'0.05em'}}>{label}</label>
      {type === 'textarea'
        ? <textarea value={(editData[key] as string)||''} rows={4} onChange={e=>setEditData(d=>({...d,[key]:e.target.value}))}
            style={{width:'100%',padding:'9px 11px',border:'1px solid var(--border)',borderRadius:8,fontSize:13,fontFamily:'inherit',resize:'vertical',boxSizing:'border-box',outline:'none'}}
            onFocus={e=>(e.target.style.borderColor='var(--accent)')} onBlur={e=>(e.target.style.borderColor='var(--border)')}/>
        : <input type={type} value={(editData[key] as string|number)??''} onChange={e=>setEditData(d=>({...d,[key]:type==='number'?Number(e.target.value):e.target.value}))}
            style={{width:'100%',padding:'9px 11px',border:'1px solid var(--border)',borderRadius:8,fontSize:13,fontFamily:'inherit',boxSizing:'border-box',outline:'none'}}
            onFocus={e=>(e.target.style.borderColor='var(--accent)')} onBlur={e=>(e.target.style.borderColor='var(--border)')}/>
      }
    </div>
  )

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)',display:'flex',flexDirection:'column'}}>
      <header style={{background:'var(--surface)',borderBottom:'1px solid var(--border)',padding:'0 24px',flexShrink:0}}>
        <div style={{maxWidth:1400,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:60}}>
          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <Link href="/" style={{color:'var(--muted)',textDecoration:'none',fontSize:14}}>← Katalog</Link>
            <span style={{color:'var(--border)'}}>|</span>
            <span style={{fontWeight:600}}>CRM Admin</span>
          </div>
          {selected && (
            <button onClick={save} disabled={saving}
              style={{background:saved?'#16a34a':'var(--accent)',color:'#fff',padding:'8px 20px',borderRadius:8,border:'none',cursor:'pointer',fontSize:14,fontWeight:500,fontFamily:'inherit'}}>
              {saving?'Sparar...':saved?'✓ Sparat!':'Spara ändringar'}
            </button>
          )}
        </div>
      </header>
      <div style={{display:'flex',flex:1,maxWidth:1400,margin:'0 auto',width:'100%',padding:'24px',gap:24,boxSizing:'border-box'}}>
        <div style={{width:300,flexShrink:0}}>
          <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
            <div style={{padding:16,borderBottom:'1px solid var(--border)'}}>
              <input type="text" placeholder="Sök namn, orgnr..." value={query} onChange={e=>setQuery(e.target.value)} autoFocus
                style={{width:'100%',padding:'9px 11px',border:'1px solid var(--border)',borderRadius:8,fontSize:14,fontFamily:'inherit',boxSizing:'border-box',outline:'none'}}
                onFocus={e=>(e.target.style.borderColor='var(--accent)')} onBlur={e=>(e.target.style.borderColor='var(--border)')}/>
            </div>
            <div style={{maxHeight:'calc(100vh - 180px)',overflowY:'auto'}}>
              {loading && <div style={{padding:20,textAlign:'center',color:'var(--muted)',fontSize:14}}>Söker...</div>}
              {!query && <div style={{padding:20,textAlign:'center',color:'var(--muted)',fontSize:13}}>Sök för att hitta företag</div>}
              {results.map(c => (
                <div key={c.kundid} onClick={()=>selectCompany(c)}
                  style={{padding:'12px 16px',cursor:'pointer',borderBottom:'1px solid var(--border)',background:selected?.kundid===c.kundid?'var(--accent-light)':'transparent',borderLeft:selected?.kundid===c.kundid?'3px solid var(--accent)':'3px solid transparent'}}
                  onMouseEnter={e=>{if(selected?.kundid!==c.kundid)(e.currentTarget as HTMLElement).style.background='var(--bg)'}}
                  onMouseLeave={e=>{if(selected?.kundid!==c.kundid)(e.currentTarget as HTMLElement).style.background='transparent'}}>
                  <div style={{fontWeight:500,fontSize:14,marginBottom:2}}>{c.namn||c.firma||'(inget namn)'}</div>
                  <div style={{fontSize:12,color:'var(--muted)'}}>{c.orgnummer} · {c.postort}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{flex:1}}>
          {!selected ? (
            <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:60,textAlign:'center',color:'var(--muted)'}}>
              <div style={{fontSize:40,marginBottom:16}}>🔍</div>
              <div style={{fontWeight:500,marginBottom:8}}>Välj ett företag</div>
              <div style={{fontSize:14}}>Sök i panelen till vänster</div>
            </div>
          ) : (
            <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:28}}>
              <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:24,paddingBottom:20,borderBottom:'1px solid var(--border)'}}>
                <div style={{width:52,height:52,borderRadius:12,background:'var(--accent-light)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,fontWeight:700,color:'var(--accent)'}}>
                  {(selected.namn||selected.firma||'?').charAt(0).toUpperCase()}
                </div>
                <div>
                  <div style={{fontSize:20,fontWeight:600}}>{selected.namn||selected.firma}</div>
                  <div style={{fontSize:13,color:'var(--muted)'}}>ID: {selected.kundid} · CFAr: {selected.cfarnr}</div>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0 32px'}}>
                <div>
                  <p style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--muted)',marginBottom:14}}>Grundinfo</p>
                  {F('Namn','namn')}{F('Firma','firma')}{F('Orgnummer','orgnummer')}{F('Kontaktperson','kontaktperson')}
                  <p style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--muted)',marginBottom:14,marginTop:20}}>Kontakt</p>
                  {F('Telefon','tel')}{F('Telefon 2','tel2')}{F('Mobil','mobil1')}{F('E-post','epostadress')}{F('Webb','webb')}{F('Länk','lank')}
                </div>
                <div>
                  <p style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--muted)',marginBottom:14}}>Adress</p>
                  {F('Gatuadress','gatuadress')}{F('Postnummer','postnr','number')}{F('Postort','postort')}{F('Län','lan')}
                  <p style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--muted)',marginBottom:14,marginTop:20}}>Klassificering</p>
                  {F('Bransch-ID','branschid','number')}{F('Anst.klass','anstkl')}{F('Antal anst.','aeant','number')}{F('Poäng','poang','number')}{F('Logotyp','logotyp')}
                  <p style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--muted)',marginBottom:14,marginTop:20}}>Beskrivning</p>
                  {F('Infotext','infotext','textarea')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return <Suspense><AdminContent /></Suspense>
}
