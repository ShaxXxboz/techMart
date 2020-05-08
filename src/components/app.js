import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  CartPage,
  ProductsPage,
  CheckoutPage,
  NotFoundPage,
} from "./pages";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from "./footer";
import Header from "./header";
import { apiServiceContext } from "./contexts";
import { fetchData } from "../actions";

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
    marginTop: theme.spacing(13),
    marginBottom: theme.spacing(10),
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
      <Header logo="techMart" logoLink="/" cartLink="/cart" />
      <Container maxWidth="md">
        <main className={classes.mainContent}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={CheckoutPage} />
            {/* Check if got categories from server
                If yes display the menu */}
            {hasCategories
              ? categories.map(({ url, id, title }, idx) => (
                  <Route
                    key={idx}
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
            <Route render={NotFoundPage} />
          </Switch>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
