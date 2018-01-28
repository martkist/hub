import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { Grid, withStyles } from 'material-ui';

// import style
import { newsListStyle } from './styles';

// import components
import { Stats, WelcomeBox } from '../functionals';
import NewsCard from '../functionals/NewsCard';

class NewsList extends Component {
  render() {
    const { classes, selectNews, channel, readedList } = this.props;
    const image = channel.image;
    return (
      <div className={classes.root}>
        {channel.item.map((post, index) => {
          const readed = readedList.find(itm => itm === post.guid)
            ? true
            : false;

          return (
            <NewsCard
              readed={readed}
              key={index}
              index={index}
              image={image}
              post={post}
              selectNews={selectNews}
            />
          );
        })}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    channel: state.mediumPosts.posts.channel,
  };
};

const dispatchToProps = dispatch => {
  return {};
};

NewsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(stateToProps, dispatchToProps)(
  withStyles(newsListStyle)(NewsList)
);