from flask import Blueprint, render_template
import pandas as pd
import json
import plotly
import plotly.express as px

plots = Blueprint('plots',__name__)

# Example GitHub Repo
# https://github.com/Princekrampah/FlaskPlotlyProject

@plots.route('/plots')
def chartExamples():

    # Graph One
    # Grab the example datafrom stored in plotly express
    df = px.data.medals_wide()
    # Create the plotly express plot using all of the parameters in python
    fig1 = px.bar(df, x="nation", y=["gold", "silver", "bronze"], title="Wide-Form Input")
    # Dump the updated plots JSON so that it can be sent to the CDN on the front end for viewing
    graph1JSON = json.dumps(fig1, cls=plotly.utils.PlotlyJSONEncoder)

    # Graph two
    df = px.data.iris()
    fig2 = px.scatter_3d(df, x='sepal_length', y='sepal_width', z='petal_width',
              color='species',  title="Iris Dataset")
    graph2JSON = json.dumps(fig2, cls=plotly.utils.PlotlyJSONEncoder)

    # Graph three
    df = px.data.gapminder().query("continent=='Oceania'")
    fig3 = px.line(df, x="year", y="lifeExp", color='country',  title="Life Expectancy")
    graph3JSON = json.dumps(fig3, cls=plotly.utils.PlotlyJSONEncoder)


    return render_template('plotly.html', graph1JSON=graph1JSON,  graph2JSON=graph2JSON, graph3JSON=graph3JSON)
