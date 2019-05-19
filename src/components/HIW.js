import React, { Component } from 'react';
import API from '../utils/API';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

class HowItWorks1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage1Title: '',
      stage1Body: '',
      stage2Title: '',
      stage2Body: '',
      stage3Title: '',
      stage3Body: '',
      stage4Title: '',
      stage4Body: ''
    };
  }
  componentDidMount() {
    API.retrieve()
      .then(resp => {
        // Step 1:
        // console.log(resp.data[3].versionContent[0].title);
        // console.log(resp.data[3].versionContent[0].body);

        var title1 = resp.data[3].versionContent[0].title;
        var title1UC = title1.toUpperCase();
        // console.log(title1UC);

        // Step 2:
        // console.log(resp.data[0].versionContent[0].title);
        // console.log(resp.data[0].versionContent[0].body);

        var title2 = resp.data[0].versionContent[0].title;
        var title2UC = title2.toUpperCase();

        // Step 3:
        // console.log(resp.data[2].versionContent[1].title);
        // console.log(resp.data[2].versionContent[1].body);

        var title3 = resp.data[2].versionContent[1].title;
        var title3UC = title3.toUpperCase();

        // Step 4:
        // console.log(resp.data[1].versionContent[0].title);
        // console.log(resp.data[1].versionContent[0].body);

        var title4 = resp.data[1].versionContent[0].title;
        var title4UC = title4.toUpperCase();

        this.setState({
          stage1Title: title1UC,
          stage1Body: resp.data[3].versionContent[0].body,
          stage2Title: title2UC,
          stage2Body: resp.data[0].versionContent[0].body,
          stage3Title: title3UC,
          stage3Body: resp.data[2].versionContent[1].body,
          stage4Title: title4UC,
          stage4Body: resp.data[1].versionContent[0].body
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const {
      stage1Title,
      stage1Body,
      stage2Title,
      stage2Body,
      stage3Title,
      stage3Body,
      stage4Title,
      stage4Body
    } = this.state;
    console.log(this.state);

    return (
      <div className="hiwContainer">
        <h2>How It Works</h2>
        <div className="flex-container">
          <Step1 stage1Title={stage1Title} stage1Body={stage1Body} />
          <Step2 stage2Title={stage2Title} stage2Body={stage2Body} />
          <Step3 stage3Title={stage3Title} stage3Body={stage3Body} />
          <Step4 stage4Title={stage4Title} stage4Body={stage4Body} />
        </div>
      </div>
    );
  }
}

export default HowItWorks1;
