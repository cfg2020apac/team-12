from sklearn.neighbors import NearestNeighbors
import numpy as np
import pandas as pd
import logging
import json


from flask import request, jsonify;

from cfg import app;

logger = logging.getLogger(__name__)


@app.route('/knn', methods=['POST'])
def evaluate_knn():
    data = request.get_json();
    logging.info("data sent for evaluation {}".format(data))
    ####
    #convert data into json
    # just need name to search in the db
    name = data.get('name')

    og_df = pd.read_csv('./profiles.csv')
    print(og_df.head())
    names= og_df["name"]
    name_idx= og_df.index[og_df['name'] == name].tolist()[0]
    print(name_idx)
    df=og_df.drop("name",1)
    # print(df.head())


    def encode_and_bind(original_dataframe, feature_to_encode):
        dummies = pd.get_dummies(original_dataframe[[feature_to_encode]])
        original_dataframe=original_dataframe.drop(feature_to_encode,1)
        res = pd.concat([original_dataframe, dummies], axis=1)
        return(res)

    df = encode_and_bind(df,"area")
    df = encode_and_bind(df,"morning_night")
    df = encode_and_bind(df,"age")
    df = encode_and_bind(df,"religion")

    # print(df.head())
    nl = pd.factorize(df["noise_level"])[0]
    df = df.drop("noise_level",1)
    df = pd.concat([df,pd.DataFrame({"noise_level":nl})], axis=1)
    print(df)

    n_nb=5
    nbrs = NearestNeighbors(n_neighbors=n_nb, algorithm='ball_tree').fit(df)

    print(df.iloc[[name_idx]]) #yeehan
    distances, indices = nbrs.kneighbors(df.iloc[[name_idx]],n_nb)
    print("searching for {}".format(names.iloc[name_idx]))
    print(indices)
    print(distances)

    res = og_df.iloc[indices[0]]

    result=res.to_json(orient="records")
    logging.info("My result :{}".format(result))
    return json.dumps(result);

