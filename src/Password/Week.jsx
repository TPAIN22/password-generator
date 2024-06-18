function Week () {
    return ( 
        <div className="wid text-[var(--tx)] flex justify-between items-center text-sm bg-[var(--bga)] px-8 py-5">
            <p className="text-[var(--gray)]">STRENGTH</p> 
            <div className="flex justify-between gap-4">
                <p className="md:text-2xl text-lg">WEAK</p>
                <div className="flex gap-2">
                    <div className="am amv"></div>
                    <div className="am amv"></div>
                    <div className="am"></div>
                    <div className="am"></div>
                </div>
            </div>
        </div>
    )
}
export default Week