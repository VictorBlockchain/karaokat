import Image from 'next/image';

export default function Home() {
  return (
    <>
    <header className="text-center headers">
      <h1 className="logo_text">Karaoke Cat</h1>
    </header>
    <div className="container my-4">
    <div className="row justify-content-center">
    <div className="col-2 d-flex justify-content-center">
        <a href="https://twitter.com/karaokecatonsol" className="btn btn-warning">Twitter</a>
    </div>

    <div className="col-2 d-flex justify-content-center">
        <a href="https://twitter.com/karaokat" className="btn btn-warning">Telegram</a>
    </div>
    
    <div className="col-2 d-flex justify-content-center">
        <a href="https://pump.fun/AMN14Xtr92ubvoJpYyVU49j3hxgGKeja373jWa4LN5Z8" className="btn btn-warning">Pump</a>
    </div>
</div>
      
      
      <main>
          
          <section>
            <div className="row">
            <div className="col-md-6 offset-md-3 text-center"> {/* Ensures horizontal center alignment */}
            <div style={{
              borderRadius: '15px', // Rounded corners
              overflow: 'hidden', // Ensures no overflow from the rounded corners
              border: '5px solid white', // White border
              width: '300px', // Fixed width, matching the image width
              height: '300px', // Fixed height, matching the image height
              display: 'flex',
              justifyContent: 'center', // Horizontally centers the image in the flex container
              alignItems: 'center', // Vertically centers the image in the flex container
              margin: 'auto' // Ensures the wrapper is centered in the column if the column is wider than the wrapper
            }}>
              <Image 
                src="/cat_1.webp"
                alt="Karaoke Cat"
                width={300} // Specify desired width
                height={300} // Specify desired height
                layout="intrinsic" // Maintains aspect ratio without responsive resizing
              />
            </div>
          </div>
            </div>
          </section>
          <section>
            <div className="row mt-3">
              <div className="col-md-12 mt-3">
              <h2 className="mb-3 mt-3">Performance Schedule</h2>
                  <ul className="timeline">
                    <li>
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel theme-box">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Pump.fun</h4>
                          <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 4/28/2024</small></p>
                        </div>
                        <div className="timeline-body">
                          <Image 
                            src="/flyer5.png"
                            alt="Karaoke Cat"
                            width={300} // Specify desired width
                            height={300} // Specify desired height
                            layout="intrinsic" // Maintains aspect ratio without responsive resizing
                            style={{borderRadius:'10px', border:'3px solid white'}}
                          />
                        </div>
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel theme-box">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Fish Palace (Las Vegas)</h4>
                          <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 4/29/2024</small></p>
                          <Image 
                            src="/cat_3.webp"
                            alt="Karaoke Cat"
                            width={300} // Specify desired width
                            height={300} // Specify desired height
                            layout="intrinsic" // Maintains aspect ratio without responsive resizing
                            style={{borderRadius:'10px', border:'3px solid white'}}
                          />
                        </div>
                        {/* <div className="timeline-body">
                          <p>Description of another event.</p>
                        </div> */}
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel theme-box">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Top Cats Alley</h4>
                          <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 4/30/2024</small></p>
                          <Image 
                            src="/cat_4.webp"
                            alt="Karaoke Cat"
                            width={300} // Specify desired width
                            height={300} // Specify desired height
                            layout="intrinsic" // Maintains aspect ratio without responsive resizing
                            style={{borderRadius:'10px', border:'3px solid white'}}
                          />
                        </div>
                        {/* <div className="timeline-body">
                          <p>Event Description Here.</p>
                        </div> */}
                      </div>
                    </li>
                    <li className="timeline-inverted">
                      <div className="timeline-badge"></div>
                      <div className="timeline-panel theme-box">
                        <div className="timeline-heading">
                          <h4 className="timeline-title">Chef Tony Seafood & Jazz</h4>
                          <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 5/1/2024</small></p>
                          <Image 
                            src="/cat_5.webp"
                            alt="Karaoke Cat"
                            width={300} // Specify desired width
                            height={300} // Specify desired height
                            layout="intrinsic" // Maintains aspect ratio without responsive resizing
                            style={{borderRadius:'10px', border:'3px solid white'}}
                          />
                        </div>
                        {/* <div className="timeline-body">
                          <p>Description of another event.</p>
                        </div> */}
                      </div>
                    </li>
                  </ul>
              </div>
            </div>
          </section>
          <section>
                        <div className="row">
                          <div className="col-12  theme-box2">
                            <h1>Solana Meme Token</h1>
                            <h3>launched on pump.fun</h3>
                          </div>
                        </div>

          </section>
        
      </main>
      
      <footer className="tilted-footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              © 2024 Karaoke Cat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
