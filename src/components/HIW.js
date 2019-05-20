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
        function sortSteps(property) {
          return function(a, b) {
            if (a[property] > b[property]) {
              return 1;
            } else if (a[property] < b[property]) {
              return -1;
            }
            return 0;
          };
        }

        resp.data.sort(sortSteps('stepNumber'));
        console.log(resp.data);

        // **** Note:
        // Using lines 42-45 the thought was aiming to use Object.keys or Object.values to target the effectiveDate to most likely sort or filter the JSON

        // const step3VC = resp.data[2].versionContent;
        // console.log(step3VC);
        // var keys = Object.values(resp.data);
        // console.log(keys);

        // **** Note:
        // Lines 50-84 show other attempts at logic to sort and/or filter the JSON via the effectiveDate. I feel really close to a more proper solution to this, but I also know when it's time to ask for help other than Google.

        // function sortVersion() {
        //   for (var i = 0; i < resp.data.length; i++) {
        //     let stepVC = resp.data[i].versionContent;

        //     for (var j = 0; j < stepVC.length; j++) {
        //       if (stepVC[j].length === 1) {
        //         return stepVC[j];
        //       } else if (stepVC[j].length === 2) {
        //         var filterStep2 = stepVC.filter(function(version) {
        //           return version.title === 'Request A Delivery';
        //         });
        //         console.log(filterStep2);
        //       } else if (stepVC[j].length === 3) {
        //         var filterStep3 = stepVC.filter(function(version) {
        //           return version.title === 'Keep What You Want';
        //         });
        //         console.log(filterStep3);
        //       }
        //     }
        //   }
        // }

        // sortVersion();

        // var recentVersion = resp.data.filter(function(version, index) {
        //   if (version.index === 2) {
        //     console.log(version.title);
        //     return version.versionContent[1].title;
        //   } else {
        //     return version.versionContent[0].title;
        //   }
        // });

        // console.log(recentVersion);
        // console.log(resp.data);

        // Step 1:
        var title1 = resp.data[0].versionContent[0].title;
        var title1UC = title1.toUpperCase();
        // console.log(title1UC);

        // Step 2:
        var title2 = resp.data[1].versionContent[0].title;
        var title2UC = title2.toUpperCase();

        // Step 3:
        var title3 = resp.data[2].versionContent[1].title;
        var title3UC = title3.toUpperCase();

        // Step 4:
        var title4 = resp.data[3].versionContent[0].title;
        var title4UC = title4.toUpperCase();

        this.setState({
          stage1Title: title1UC,
          stage1Body: resp.data[0].versionContent[0].body,
          stage2Title: title2UC,
          stage2Body: resp.data[1].versionContent[0].body,
          stage3Title: title3UC,
          stage3Body: resp.data[2].versionContent[1].body,
          stage4Title: title4UC,
          stage4Body: resp.data[3].versionContent[0].body
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
    // console.log(this.state);

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
