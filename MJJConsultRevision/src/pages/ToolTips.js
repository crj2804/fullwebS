import React from 'react';
import { Button, Tooltip } from 'reactstrap';

import "../styling/tooltips.scss";
import "../styling/animations.scss";

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color='none' id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.item.content}
        </Tooltip>
      </span>
    );
  }
}

class ToolTips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'bottom',
          text: 'Customization',
          content: 'Systems & applications customized for your particular business environment and/or your personal needs or preferences',
          abv: 'C '
        },
        {
          placement: 'bottom',
          text: 'Optimization',
          content:'Operating systems and hardware optimized for you and how you use your system',
          abv: 'O '
        },
        {
          placement: 'bottom',
          text: 'Reliability',
          content: 'Your system should be predictable, reliable and secure',
          abv: 'R '
        }
      ]
    };
  }

  render() {
    return (
      <div id="inline">
        { this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>
    );
  }
}

export default ToolTips;