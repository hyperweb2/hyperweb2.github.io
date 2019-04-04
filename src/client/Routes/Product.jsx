import React from 'react';

import  {Link} from 'react-router-dom';


export default class Product   extends  React.Component {
    render(){
        return (
            <div>
            <section className="mbr-section mbr-section__container" id="header3-2" style={{backgroundColor: 'rgb(255, 255, 255)', paddingTop: '120px', paddingBottom: '0px'}}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h3 className="mbr-section-title display-2">Prodotti &amp; Portfolio</h3>
                    <small className="mbr-section-subtitle">Alcuni dei lavori creati da HyperWeb2</small>
                  </div>
                </div>
              </div>
            </section>
            <section className="mbr-gallery mbr-section mbr-section-nopadding mbr-slider-carousel" id="gallery4-2" data-filter="true" style={{paddingTop: '0rem', paddingBottom: '0rem'}}>
              {/* Filter */}
              <div className="mbr-gallery-filter container gallery-filter-active">
              </div>
              {/* Gallery */}
              <div className="mbr-gallery-row">
                <div className=" mbr-gallery-layout-default">
                  <div>
                    <div>
                      <div className="mbr-gallery-item mbr-gallery-item__mobirise3 mbr-gallery-item--p1" data-tags="Software" data-video-url="false">
                        <div href="#lb-gallery4-2">
                          <Link to="/opensurce">
                            <img alt src="/assets/images/code-man-small.jpg" />
                            <span className="icon-focus" />
                            <span className="mbr-gallery-title"><p>Open Source HyperWeb2 Software</p></span>
                          </Link>
                        </div>
                      </div><div className="mbr-gallery-item mbr-gallery-item__mobirise3 mbr-gallery-item--p1" data-tags="Web Sites" data-video-url="false">
                        <div href="#lb-gallery4-2">
                          <a href="https://goo.gl/photos/P2M59N3Jg4QZTe4R7" target="_blank">
                            <img alt src="/assets/images/schermata-del-2013-06-26-145655-2000x1137-22-2000x1137-58.jpg" />
                            <span className="icon-focus" />
                            <span className="mbr-gallery-title">Web Sites</span>
                          </a>
                        </div>
                      </div><div className="mbr-gallery-item mbr-gallery-item__mobirise3 mbr-gallery-item--p1" data-tags="Hardware" data-video-url="false">
                        <div href="#lb-gallery4-2">
                          <a href="https://get.google.com/albumarchive/112276108797884023133/album/AF1QipOZhmX_fKSGvJcgli8ithwtEVQ7bwN0BPcv2DCD" target="_blank">
                            <img alt src="/assets/images/396827-259126954198941-362194380-n-2000x1500-62-2000x1500-48.jpg" />
                            <span className="icon-focus" />
                            <span className="mbr-gallery-title">Laboratorio Hardware</span>
                          </a>
                        </div>
                      </div><div className="mbr-gallery-item mbr-gallery-item__mobirise3 mbr-gallery-item--p1" data-tags="Software" data-video-url="false">
                        <div href="#lb-gallery4-2">
                          <a href="http://www.azerothcore.org/" target="_blank">
                            <img alt src="assets/images/logo-2000x1322-52-2000x1322-87.png" />
                            <span className="icon-focus" />
                            <span className="mbr-gallery-title"><p>Azeroth Core - MMO Framework</p></span>
                          </a>
                        </div>
                      </div>
                      <div className="mbr-gallery-item mbr-gallery-item__mobirise3 mbr-gallery-item--p1" data-tags="Software" data-video-url="false">
                        <div href="#lb-gallery4-2">
                          <a href="https://github.com/HW-Core" target="_blank">
                            <img alt src="assets/images/6638895-2000x2000-39-2000x2000-50.png" />
                            <span className="icon-focus" />
                            <span className="mbr-gallery-title"><p>HWCore - Framework crossplatform</p></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              {/* Lightbox */}
              <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1} data-keyboard="true" data-interval="false" id="lb-gallery4-2">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="carousel-inner">
                        <div className="carousel-item">
                          <img alt src="assets/images/code-man.jpg" />
                        </div><div className="carousel-item">
                          <img alt src="assets/images/schermata-del-2013-06-26-145655-2000x1137-22.jpg" />
                        </div><div className="carousel-item">
                          <img alt src="assets/images/396827-259126954198941-362194380-n-2000x1500-62.jpg" />
                        </div><div className="carousel-item">
                          <img alt src="assets/images/logo-2000x1322-52.png" />
                        </div><div className="carousel-item active">
                          <img alt src="assets/images/6638895-2000x2000-39.png" />
                        </div>
                      </div>
                      <a className="left carousel-control" role="button" data-slide="prev" href="#lb-gallery4-2">
                        <span className="icon-prev" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="right carousel-control" role="button" data-slide="next" href="#lb-gallery4-2">
                        <span className="icon-next" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                      <a className="close" href="#" role="button" data-dismiss="modal">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}