import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import RelatedArticles from '../containers/RelatedArticles';
import MainArticle from '../containers/MainArticle';

ReactDOM.render(<Navigation />, document.getElementById('navigation'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<MainArticle/>, document.getElementById('main-article'));
ReactDOM.render(<RelatedArticles/>, document.getElementById('related-articles'));