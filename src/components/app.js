import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage, ProductsPage } from "./pages";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from "./footer";
import Navigation from "./navigation";
import { apiServiceContext } from "./contexts";
import { fetchData } from "../actions";
import { capitalize } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mainContent: {
    margin: theme.spacing(5),
  },
}));

const App = () => {
  const classes = useStyles();
  const apiService = useContext(apiServiceContext);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categoriesList
  );
  const hasCategories = !(loading || error);

  useEffect(() => {
    fetchData(apiService, dispatch, "categories");
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navigation logo="techMart" logoLink="/" cartLink="/cart" />
      <Container maxWidth="lg">
        <main className={classes.mainContent}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
            {hasCategories
              ? categories.map(({ url, id, title }) => (
                  <Route
                    path={url}
                    exact
                    render={(props) => (
                      <ProductsPage
                        categoryId={id}
                        heading={title}
                        {...props}
                      />
                    )}
                  />
                ))
              : null}
          </Switch>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
