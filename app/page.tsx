'use client'
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface Company {
  kundid: number
  namn: string | null
  firma: string | null
  orgnummer: string | null
  postort: string | null
  lan: string | null
  branschid: number | null
  webb: string | null
  infotext: string | null
}

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const PAGE_SIZE = 50

  const search = useCallback(async (q: string, p: number) => {
    setLoading(true)
    let req = supabase
      .from('aesamtable')
      .select('kundid,namn,firma,orgnummer,postort,lan,branschid,webb,infotext')
      .range(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE - 1)
      .order('namn', { ascending: true })

    if (q.trim()) {
      req = req.or(`namn.ilike.%${q}%,firma.ilike.%${q}%,orgnummer.ilike.%${q}%,postort.ilike.%${q}%`)
    }

    const { data, error } = await req
    if (!error && data) {
      setCompanies(data)
      setHasMore(data.length === PAGE_SIZE)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => { setPage(0); search(query, 0) }, 300)
    return () => clearTimeout(t)
  }, [query, search])

  useEffect(() => { search(query, page) }, [page])

  const name = (c: Company) => c.namn || c.firma || '(inget namn)'

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)'}}>
      <header style={{background:'var(--surface)',borderBottom:'1px solid var(--border)',padding:'0 24px'}}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:60}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:32,height:32,background:'var(--accent)',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{color:'#fff',fontWeight:700,fontSize:14}}>R</span>
            </div>
            <span style={{fontWeight:600,fontSize:16}}>Regionsdelen</span>
          </div>
          <Link href="/admin" style={{background:'var(--accent)',color:'#fff',padding:'8px 16px',borderRadius:8,fontSize:14,fontWeight:500,textDecoration:'none'}}>CRM Admin →</Link>
        </div>
      </header>
      <div style={{background:'var(--surface)',borderBottom:'1px solid var(--border)',padding:'40px 24px'}}>
        <div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
          <h1 style={{fontSize:32,fontWeight:600,marginBottom:8}}>Företagskatalog</h1>
          <p style={{color:'var(--muted)',marginBottom:24}}>Sök bland Sveriges företag</p>
          <input type="text" placeholder="Sök på företagsnamn, orgnummer, ort..." value={query}
            onChange={e => setQuery(e.target.value)}
            style={{width:'100%',padding:'14px 20px',fontSize:16,border:'2px solid var(--border)',borderRadius:12,outline:'none',fontFamily:'inherit',boxSizing:'border-box'}}
            onFocus={e=>(e.target.style.borderColor='var(--accent)')}
            onBlur={e=>(e.target.style.borderColor='var(--border)')}
          />
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'24px'}}>
        {loading ? <div style={{textAlign:'center',padding:60,color:'var(--muted)'}}>Laddar...</div> : (
          <>
            {companies.length === 0 && !loading && query && (
              <div style={{textAlign:'center',padding:60,color:'var(--muted)'}}>Inga resultat för "{query}"</div>
            )}
            {companies.length === 0 && !loading && !query && (
              <div style={{textAlign:'center',padding:60,color:'var(--muted)'}}>Börja söka för att hitta företag</div>
            )}
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:16}}>
              {companies.map(c => (
                <Link key={c.kundid} href={`/admin?id=${c.kundid}`} style={{textDecoration:'none'}}>
                  <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:12,padding:20,cursor:'pointer'}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='var(--accent)'}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='var(--border)'}}>
                    <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
                      <div style={{width:44,height:44,borderRadius:10,background:'var(--accent-light)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:18,fontWeight:600,color:'var(--accent)'}}>
                        {name(c).charAt(0).toUpperCase()}
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontWeight:600,fontSize:15,marginBottom:2,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{name(c)}</div>
                        <div style={{fontSize:13,color:'var(--muted)'}}>{[c.postort,c.lan].filter(Boolean).join(' · ')}</div>
                      </div>
                    </div>
                    <div style={{marginTop:12,display:'flex',gap:8,flexWrap:'wrap'}}>
                      {c.orgnummer && <span style={{fontSize:12,background:'var(--bg)',border:'1px solid var(--border)',borderRadius:6,padding:'2px 8px',color:'var(--muted)'}}>{c.orgnummer}</span>}
                      {c.branschid && <span style={{fontSize:12,background:'var(--accent-light)',border:'1px solid #bfdbfe',borderRadius:6,padding:'2px 8px',color:'var(--accent)'}}>SNI {c.branschid}</span>}
                      {c.webb && <span style={{fontSize:12,background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:6,padding:'2px 8px',color:'#15803d'}}>Webb</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {companies.length > 0 && (
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:12,marginTop:32}}>
                <button onClick={()=>setPage(p=>Math.max(0,p-1))} disabled={page===0}
                  style={{padding:'8px 20px',borderRadius:8,border:'1px solid var(--border)',background:'var(--surface)',cursor:page===0?'not-allowed':'pointer',fontSize:14,fontFamily:'inherit',opacity:page===0?0.5:1}}>← Föregående</button>
                <span style={{color:'var(--muted)',fontSize:14}}>Sida {page+1}</span>
                <button onClick={()=>setPage(p=>p+1)} disabled={!hasMore}
                  style={{padding:'8px 20px',borderRadius:8,border:'1px solid var(--border)',background:'var(--surface)',cursor:!hasMore?'not-allowed':'pointer',fontSize:14,fontFamily:'inherit',opacity:!hasMore?0.5:1}}>Nästa →</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
