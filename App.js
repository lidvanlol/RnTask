/* eslint-disable */
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import gitCall from './src/api/gitCall';
import GistList from './src/components/GistList';
import AvatarFull from './src/components/AvatarFull';
import moment from 'moment';

class App extends Component {
  state = {
    gists: [],
    page: 2,
    since: moment().format('YYYY-MM-DDTHH-MM-SSZ'),
    loading: false,
    avatarFull: null,
    per_page: 30,
  };

  avatarShow = url => {
    this.setState({avatarFull: url});
  };

  fetchNewGists = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        loading: true,
      }),
      () => {
        this.gistsFetch();
      },
    );
  };

  refreshList = () => {
    this.setState(
      {
        page: 2,
        loading: true,
      },
      () => {
        this.gistsFetch();
      },
    );
  };

  gistsFetch = async () => {
    const query = `/public?&since=${this.state.since}&page=${this.state.page}&per_page=${this.state.per_page}`;

    const response = await gitCall.request({
      url: query,
    });

    this.setState({
      gists:
        this.state.page === 2
          ? response.data
          : [...this.state.gists, ...response.data],
      loading: false,
    });
  };

  componentDidMount = () => {
    this.gistsFetch();
  };

  renderComponent = () => {
    if (this.state.avatarFull) {
      return (
        <AvatarFull url={this.state.avatarFull} avatarShow={this.avatarShow} />
      );
    }

    return (
      <GistList
        gists={this.state.gists}
        onFetchNewGists={this.fetchNewGists}
        onRefreshList={this.refreshList}
        refreshing={this.state.loading}
        avatarShow={this.avatarShow}
      />
    );
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />

        <SafeAreaView style={styles.container}>
          {this.renderComponent()}
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
