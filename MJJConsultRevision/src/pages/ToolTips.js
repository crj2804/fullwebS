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
          content: 'Customization fdskfkdsfjkdshfdsnfkdjfk',
          abv: 'C '
        },
        {
          placement: 'bottom',
          text: 'Optimization',
          content:'Optimization fjkdshfkjdhsfkjhdskffdshjfkhs',
          abv: 'O '
        },
        {
          placement: 'bottom',
          text: 'Reliability',
          content: 'Reliability flkdsfldsfkhdskfhdskjfhs',
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