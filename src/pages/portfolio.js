import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
          <div className="w-100">
              <h2 className="mb-5">Portfolio v1.0</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <p>写真</p>
                      <ul>
                          <li>URL</li>
                          <li>GitHub</li>      
                          <li>使用技術</li>
                          <li>説明</li>
                        </ul>
                    </div>
                </div>
                <Link to="./">
                    <p>&lt;&lt; back</p>
                </Link>
            </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
