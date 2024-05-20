
export default async function Page(){
  const promise = new Promise<string>((resolve)=>
    setTimeout(()=>resolve("This is the content."), 4000)
  )
  const result = await promise
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}