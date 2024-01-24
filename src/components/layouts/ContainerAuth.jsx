


const ContainerAuth = ({children}) => {
  return (
    <main className="bg-darkFound text-white font-urbanist h-screen
          flex justify-center items-center">
      <section className="grid md:grid-cols-[auto_400px] md:justify-center gap-10">
        
        {children}
        
      </section>
    </main>
  )
}

export default ContainerAuth