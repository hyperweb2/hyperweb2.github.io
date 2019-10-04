import React from 'react'




export default class  Media extends  React.Component{
    render(){
        return(
            <div>
        <section className="mbr-cards mbr-section mbr-section-nopadding mbr-after-navbar" id="features7-c" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
          <div className="mbr-cards-row row">
            <div className="mbr-cards-col col-xs-12 col-lg-6" style={{paddingTop: '160px', paddingBottom: '80px'}}>
              <div className="container">
                <div className="card cart-block">
                  <div className="card-img iconbox"><a href="https://get.google.com/albumarchive/112276108797884023133" target="_blank" className="etl-icon icon-pictures mbr-iconfont mbr-iconfont-features7" style={{color: 'rgb(255, 255, 255)'}} /></div>
                  <div className="card-block">
                    <h4 className="card-title">FOTO</h4>
                    <p className="card-text">Galleria fotografica di HyperWeb2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mbr-cards-col col-xs-12 col-lg-6" style={{paddingTop: '160px', paddingBottom: '80px'}}>
              <div className="container">
                <div className="card cart-block">
                  <div className="card-img iconbox"><a href="https://www.youtube.com/channel/UCLt-enKOuNc2O-X-i5n8guw/playlists?view=1&sort=dd&shelf_id=0" target="_blank" className="etl-icon icon-video mbr-iconfont mbr-iconfont-features7" style={{color: 'rgb(255, 255, 255)'}} /></div>
                  <div className="card-block">
                    <h4 className="card-title">VIDEO</h4>
                    <p className="card-text">Una selezione di video creati e condivisi da HyperWeb2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        );
    }
}