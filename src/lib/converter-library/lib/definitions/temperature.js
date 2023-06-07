var metric
  , imperial;

metric = {
  C: {
    name: {
      singular: 'Celsius'
    , plural: 'Celsius'
    }
  , to_anchor: 1
  , anchor_shift: 0
  },
  K: {
    name: {
      singular: 'Kelvin'
    , plural: 'Kelvin'
    }
  , to_anchor: 1
  , anchor_shift: 273.15
  }
};

imperial = {
  F: {
    name: {
      singular: 'Fahrenheit'
    , plural: 'Fahrenheit'
    }
  , to_anchor: 1
  },
  R: {
    name: {
      singular: 'Rankine'
    , plural: 'Rankine'
    }
  , to_anchor: 1
  , anchor_shift: 459.67
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'C'
    , transform: function (C) { return C / (5/9) + 32 }
    }
  , imperial: {
      unit: 'F'
    , transform: function (F) { return (F - 32) * (5/9) }
    }
  }
};

