import React from 'react'


export default class  Terms  extends React.Component{

    render(){
        return(
            <div>
            <section className="mbr-section mbr-section__container mbr-after-navbar" id="header3-p" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '100px', paddingBottom: '20px'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="mbr-section-title display-2">Terms &amp; Conditions</h3>
                    <small className="mbr-section-subtitle" />
                  </div>
                </div>
              </div>
            </section>
            <section className="mbr-section article mbr-section__container" id="content1-q" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '20px', paddingBottom: '20px'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 lead"><ul><li>All open source software developed by HyperWeb2, when license is not specified, are automatically distributed under <a href="https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)" target="_blank">AGPL-3.0</a>&nbsp;in few words: you need to share your changes with HyperWeb2 even if you distribute your software as a service.<br /><br /></li><li>Creative works instead ( such as themes, video, pictures etc ) are &nbsp;distributed under a "<a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">Free culture Creative Commons - CC BY-SA 4.0</a>" License&nbsp;</li></ul></div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}