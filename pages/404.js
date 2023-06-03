import Link from "next/link"


const Errorpage = () => {
    return (
        <>
            <div id="erorr">
                <div id="error-page">
                    <div className="content">
                        <h2 className="header" data-text={404}>
                            404
                        </h2>
                        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
                        <p>
                            Sorry, the page you are looking for does not exist. If you think something
                            is broken
                        </p>
                        <div className="btns">

                            <Link href="/">return home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage
