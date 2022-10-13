import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionCoin: any;
  _coin: any;
  _text: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamp: any;
};


export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: Maybe<Scalars['_coin']>;
  _gt?: Maybe<Scalars['_coin']>;
  _gte?: Maybe<Scalars['_coin']>;
  _in?: Maybe<Array<Scalars['_coin']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_coin']>;
  _lte?: Maybe<Scalars['_coin']>;
  _neq?: Maybe<Scalars['_coin']>;
  _nin?: Maybe<Array<Scalars['_coin']>>;
};


/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_From_Genesis>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>;
};


/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};


/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  proposer_address: Scalars['String'];
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};


/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: Maybe<Array<Block_Bool_Exp>>;
  _not?: Maybe<Block_Bool_Exp>;
  _or?: Maybe<Array<Block_Bool_Exp>>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  num_txs?: Maybe<Int_Comparison_Exp>;
  pre_commits?: Maybe<Pre_Commit_Bool_Exp>;
  proposer_address?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  total_gas?: Maybe<Bigint_Comparison_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  pre_commits_aggregate?: Maybe<Pre_Commit_Aggregate_Order_By>;
  proposer_address?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  total_gas?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** aggregated selection of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate = {
  __typename?: 'double_sign_evidence_aggregate';
  aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Fields>;
  nodes: Array<Double_Sign_Evidence>;
};

/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'double_sign_evidence_aggregate_fields';
  avg?: Maybe<Double_Sign_Evidence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Evidence_Max_Fields>;
  min?: Maybe<Double_Sign_Evidence_Min_Fields>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Fields>;
};


/** aggregate fields of "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: Maybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Double_Sign_Evidence_Max_Order_By>;
  min?: Maybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: Maybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: Maybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: Maybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: Maybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: Maybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: Maybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'double_sign_evidence_avg_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: Maybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: Maybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: Maybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: Maybe<Double_Sign_Vote_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  vote_a_id?: Maybe<Bigint_Comparison_Exp>;
  vote_b_id?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Double_Sign_Evidence_Max_Fields = {
  __typename?: 'double_sign_evidence_max_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Evidence_Min_Fields = {
  __typename?: 'double_sign_evidence_min_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: Maybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: Maybe<Double_Sign_Vote_Order_By>;
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** aggregate stddev on columns */
export type Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'double_sign_evidence_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'double_sign_evidence_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'double_sign_evidence_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'double_sign_evidence_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  vote_a_id?: Maybe<Scalars['bigint']>;
  vote_b_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'double_sign_evidence_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'double_sign_evidence_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'double_sign_evidence_variance_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: Maybe<Order_By>;
  vote_a_id?: Maybe<Order_By>;
  vote_b_id?: Maybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  doubleSignEvidencesByVoteBId_aggregate: Double_Sign_Evidence_Aggregate;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  /** An aggregate relationship */
  double_sign_evidences_aggregate: Double_Sign_Evidence_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};

/** aggregated selection of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate = {
  __typename?: 'double_sign_vote_aggregate';
  aggregate?: Maybe<Double_Sign_Vote_Aggregate_Fields>;
  nodes: Array<Double_Sign_Vote>;
};

/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'double_sign_vote_aggregate_fields';
  avg?: Maybe<Double_Sign_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Double_Sign_Vote_Max_Fields>;
  min?: Maybe<Double_Sign_Vote_Min_Fields>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Double_Sign_Vote_Sum_Fields>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Fields>;
  variance?: Maybe<Double_Sign_Vote_Variance_Fields>;
};


/** aggregate fields of "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: Maybe<Double_Sign_Vote_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Double_Sign_Vote_Max_Order_By>;
  min?: Maybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: Maybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: Maybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: Maybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: Maybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: Maybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: Maybe<Double_Sign_Vote_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Double_Sign_Vote_Avg_Fields = {
  __typename?: 'double_sign_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: Maybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: Maybe<Double_Sign_Vote_Bool_Exp>;
  _or?: Maybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: Maybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: Maybe<Double_Sign_Evidence_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  round?: Maybe<Int_Comparison_Exp>;
  signature?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Smallint_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  validator_index?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Double_Sign_Vote_Max_Fields = {
  __typename?: 'double_sign_vote_max_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Double_Sign_Vote_Min_Fields = {
  __typename?: 'double_sign_vote_min_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: Maybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: Maybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** aggregate stddev on columns */
export type Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'double_sign_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'double_sign_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'double_sign_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Double_Sign_Vote_Sum_Fields = {
  __typename?: 'double_sign_vote_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'double_sign_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'double_sign_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Double_Sign_Vote_Variance_Fields = {
  __typename?: 'double_sign_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  round?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  validator_index?: Maybe<Order_By>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  time: Scalars['timestamp'];
};

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate';
  aggregate?: Maybe<Genesis_Aggregate_Fields>;
  nodes: Array<Genesis>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields';
  avg?: Maybe<Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Genesis_Max_Fields>;
  min?: Maybe<Genesis_Min_Fields>;
  stddev?: Maybe<Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Genesis_Sum_Fields>;
  var_pop?: Maybe<Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Genesis_Var_Samp_Fields>;
  variance?: Maybe<Genesis_Variance_Fields>;
};


/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: Maybe<Array<Genesis_Bool_Exp>>;
  _not?: Maybe<Genesis_Bool_Exp>;
  _or?: Maybe<Array<Genesis_Bool_Exp>>;
  chain_id?: Maybe<String_Comparison_Exp>;
  initial_height?: Maybe<Bigint_Comparison_Exp>;
  time?: Maybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: Maybe<Order_By>;
  initial_height?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time'
}

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields';
  initial_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "ibc_transfer_params" */
export type Ibc_Transfer_Params = {
  __typename?: 'ibc_transfer_params';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "ibc_transfer_params" */
export type Ibc_Transfer_ParamsParamsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ibc_transfer_params" */
export type Ibc_Transfer_Params_Aggregate = {
  __typename?: 'ibc_transfer_params_aggregate';
  aggregate?: Maybe<Ibc_Transfer_Params_Aggregate_Fields>;
  nodes: Array<Ibc_Transfer_Params>;
};

/** aggregate fields of "ibc_transfer_params" */
export type Ibc_Transfer_Params_Aggregate_Fields = {
  __typename?: 'ibc_transfer_params_aggregate_fields';
  avg?: Maybe<Ibc_Transfer_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ibc_Transfer_Params_Max_Fields>;
  min?: Maybe<Ibc_Transfer_Params_Min_Fields>;
  stddev?: Maybe<Ibc_Transfer_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Ibc_Transfer_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ibc_Transfer_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Ibc_Transfer_Params_Sum_Fields>;
  var_pop?: Maybe<Ibc_Transfer_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Ibc_Transfer_Params_Var_Samp_Fields>;
  variance?: Maybe<Ibc_Transfer_Params_Variance_Fields>;
};


/** aggregate fields of "ibc_transfer_params" */
export type Ibc_Transfer_Params_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ibc_Transfer_Params_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ibc_Transfer_Params_Avg_Fields = {
  __typename?: 'ibc_transfer_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ibc_transfer_params". All fields are combined with a logical 'AND'. */
export type Ibc_Transfer_Params_Bool_Exp = {
  _and?: Maybe<Array<Ibc_Transfer_Params_Bool_Exp>>;
  _not?: Maybe<Ibc_Transfer_Params_Bool_Exp>;
  _or?: Maybe<Array<Ibc_Transfer_Params_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  params?: Maybe<Jsonb_Comparison_Exp>;
};

/** aggregate max on columns */
export type Ibc_Transfer_Params_Max_Fields = {
  __typename?: 'ibc_transfer_params_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Ibc_Transfer_Params_Min_Fields = {
  __typename?: 'ibc_transfer_params_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "ibc_transfer_params". */
export type Ibc_Transfer_Params_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  params?: Maybe<Order_By>;
};

/** select columns of table "ibc_transfer_params" */
export enum Ibc_Transfer_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Params = 'params'
}

/** aggregate stddev on columns */
export type Ibc_Transfer_Params_Stddev_Fields = {
  __typename?: 'ibc_transfer_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ibc_Transfer_Params_Stddev_Pop_Fields = {
  __typename?: 'ibc_transfer_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ibc_Transfer_Params_Stddev_Samp_Fields = {
  __typename?: 'ibc_transfer_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ibc_Transfer_Params_Sum_Fields = {
  __typename?: 'ibc_transfer_params_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Ibc_Transfer_Params_Var_Pop_Fields = {
  __typename?: 'ibc_transfer_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ibc_Transfer_Params_Var_Samp_Fields = {
  __typename?: 'ibc_transfer_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ibc_Transfer_Params_Variance_Fields = {
  __typename?: 'ibc_transfer_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint'];
  value: Scalars['String'];
};

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate';
  aggregate?: Maybe<Inflation_Aggregate_Fields>;
  nodes: Array<Inflation>;
};

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields';
  avg?: Maybe<Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inflation_Max_Fields>;
  min?: Maybe<Inflation_Min_Fields>;
  stddev?: Maybe<Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Inflation_Sum_Fields>;
  var_pop?: Maybe<Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Inflation_Var_Samp_Fields>;
  variance?: Maybe<Inflation_Variance_Fields>;
};


/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Inflation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: Maybe<Array<Inflation_Bool_Exp>>;
  _not?: Maybe<Inflation_Bool_Exp>;
  _or?: Maybe<Array<Inflation_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  /** An object relationship */
  block: Block;
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pre_Commit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: Maybe<Pre_Commit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pre_Commit_Max_Order_By>;
  min?: Maybe<Pre_Commit_Min_Order_By>;
  stddev?: Maybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: Maybe<Pre_Commit_Sum_Order_By>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: Maybe<Pre_Commit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: Maybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: Maybe<Pre_Commit_Bool_Exp>;
  _or?: Maybe<Array<Pre_Commit_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  proposer_priority?: Maybe<Bigint_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  voting_power?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  block?: Maybe<Block_Order_By>;
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: Maybe<Order_By>;
  proposer_priority?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  action_account_balance?: Maybe<ActionBalance>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "ibc_transfer_params" */
  ibc_transfer_params: Array<Ibc_Transfer_Params>;
  /** fetch aggregated fields from the table: "ibc_transfer_params" */
  ibc_transfer_params_aggregate: Ibc_Transfer_Params_Aggregate;
  /** fetch data from the table: "ibc_transfer_params" using primary key columns */
  ibc_transfer_params_by_pk?: Maybe<Ibc_Transfer_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Query_RootIbc_Transfer_ParamsArgs = {
  distinct_on?: Maybe<Array<Ibc_Transfer_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ibc_Transfer_Params_Order_By>>;
  where?: Maybe<Ibc_Transfer_Params_Bool_Exp>;
};


export type Query_RootIbc_Transfer_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Ibc_Transfer_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ibc_Transfer_Params_Order_By>>;
  where?: Maybe<Ibc_Transfer_Params_Bool_Exp>;
};


export type Query_RootIbc_Transfer_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootInflationArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_AggregateArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootStaking_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Query_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>;
  _gt?: Maybe<Scalars['smallint']>;
  _gte?: Maybe<Scalars['smallint']>;
  _in?: Maybe<Array<Scalars['smallint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['smallint']>;
  _lte?: Maybe<Scalars['smallint']>;
  _neq?: Maybe<Scalars['smallint']>;
  _nin?: Maybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
};

/** aggregated selection of "staking_pool" */
export type Staking_Pool_Aggregate = {
  __typename?: 'staking_pool_aggregate';
  aggregate?: Maybe<Staking_Pool_Aggregate_Fields>;
  nodes: Array<Staking_Pool>;
};

/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_Fields = {
  __typename?: 'staking_pool_aggregate_fields';
  avg?: Maybe<Staking_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staking_Pool_Max_Fields>;
  min?: Maybe<Staking_Pool_Min_Fields>;
  stddev?: Maybe<Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Staking_Pool_Variance_Fields>;
};


/** aggregate fields of "staking_pool" */
export type Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staking_Pool_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staking_Pool_Avg_Fields = {
  __typename?: 'staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: Maybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: Maybe<Staking_Pool_Bool_Exp>;
  _or?: Maybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Staking_Pool_Max_Fields = {
  __typename?: 'staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staking_Pool_Min_Fields = {
  __typename?: 'staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  not_bonded_tokens?: Maybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens'
}

/** aggregate stddev on columns */
export type Staking_Pool_Stddev_Fields = {
  __typename?: 'staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Staking_Pool_Sum_Fields = {
  __typename?: 'staking_pool_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Staking_Pool_Var_Pop_Fields = {
  __typename?: 'staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staking_Pool_Var_Samp_Fields = {
  __typename?: 'staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staking_Pool_Variance_Fields = {
  __typename?: 'staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch aggregated fields from the table: "double_sign_evidence" */
  double_sign_evidence_aggregate: Double_Sign_Evidence_Aggregate;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch aggregated fields from the table: "double_sign_vote" */
  double_sign_vote_aggregate: Double_Sign_Vote_Aggregate;
  /** fetch data from the table: "double_sign_vote" using primary key columns */
  double_sign_vote_by_pk?: Maybe<Double_Sign_Vote>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "ibc_transfer_params" */
  ibc_transfer_params: Array<Ibc_Transfer_Params>;
  /** fetch aggregated fields from the table: "ibc_transfer_params" */
  ibc_transfer_params_aggregate: Ibc_Transfer_Params_Aggregate;
  /** fetch data from the table: "ibc_transfer_params" using primary key columns */
  ibc_transfer_params_by_pk?: Maybe<Ibc_Transfer_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch aggregated fields from the table: "staking_pool" */
  staking_pool_aggregate: Staking_Pool_Aggregate;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch aggregated fields from the table: "validator" */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch aggregated fields from the table: "validator_commission" */
  validator_commission_aggregate: Validator_Commission_Aggregate;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch aggregated fields from the table: "validator_description" */
  validator_description_aggregate: Validator_Description_Aggregate;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: Maybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};


export type Subscription_RootIbc_Transfer_ParamsArgs = {
  distinct_on?: Maybe<Array<Ibc_Transfer_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ibc_Transfer_Params_Order_By>>;
  where?: Maybe<Ibc_Transfer_Params_Bool_Exp>;
};


export type Subscription_RootIbc_Transfer_Params_AggregateArgs = {
  distinct_on?: Maybe<Array<Ibc_Transfer_Params_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ibc_Transfer_Params_Order_By>>;
  where?: Maybe<Ibc_Transfer_Params_Bool_Exp>;
};


export type Subscription_RootIbc_Transfer_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootInflationArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: Maybe<Array<Inflation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Inflation_Order_By>>;
  where?: Maybe<Inflation_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: Maybe<Array<Pre_Commit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pre_Commit_Order_By>>;
  where?: Maybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Pool_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Pool_Order_By>>;
  where?: Maybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  self_delegate_address: Scalars['String'];
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Scalars['_coin'];
  height: Scalars['bigint'];
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};


/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Supply_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: Maybe<Array<Supply_Bool_Exp>>;
  _not?: Maybe<Supply_Bool_Exp>;
  _or?: Maybe<Array<Supply_Bool_Exp>>;
  coins?: Maybe<_Coin_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  token_units?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: Maybe<Order_By>;
  token_units_aggregate?: Maybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};


/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: Maybe<Token_Price_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Price_Max_Order_By>;
  min?: Maybe<Token_Price_Min_Order_By>;
  stddev?: Maybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Price_Sum_Order_By>;
  var_pop?: Maybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Price_Var_Samp_Order_By>;
  variance?: Maybe<Token_Price_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_Bool_Exp>>;
  _not?: Maybe<Token_Price_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Scalars['_text']>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String'];
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_prices: Array<Token_Price>;
  /** An aggregate relationship */
  token_prices_aggregate: Token_Price_Aggregate;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  avg?: Maybe<Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
  stddev?: Maybe<Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Token_Unit_Variance_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: Maybe<Token_Unit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Unit_Max_Order_By>;
  min?: Maybe<Token_Unit_Min_Order_By>;
  stddev?: Maybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Unit_Sum_Order_By>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Order_By>;
  variance?: Maybe<Token_Unit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: Maybe<Array<Token_Unit_Bool_Exp>>;
  _not?: Maybe<Token_Unit_Bool_Exp>;
  _or?: Maybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: Maybe<_Text_Comparison_Exp>;
  denom?: Maybe<String_Comparison_Exp>;
  exponent?: Maybe<Int_Comparison_Exp>;
  price_id?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  token_name?: Maybe<String_Comparison_Exp>;
  token_price?: Maybe<Token_Price_Bool_Exp>;
  token_prices?: Maybe<Token_Price_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: Maybe<Order_By>;
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  token_name?: Maybe<Order_By>;
  token_price?: Maybe<Token_Price_Order_By>;
  token_prices_aggregate?: Maybe<Token_Price_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name'
}

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['_coin'];
  gas?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  memo?: Maybe<Scalars['String']>;
  partition_id: Scalars['bigint'];
  signatures?: Maybe<Scalars['_text']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: Maybe<Transaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transaction_Max_Order_By>;
  min?: Maybe<Transaction_Min_Order_By>;
  stddev?: Maybe<Transaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Transaction_Sum_Order_By>;
  var_pop?: Maybe<Transaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Transaction_Var_Samp_Order_By>;
  variance?: Maybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  fee?: Maybe<_Coin_Comparison_Exp>;
  gas?: Maybe<String_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  memo?: Maybe<String_Comparison_Exp>;
  partition_id?: Maybe<Bigint_Comparison_Exp>;
  signatures?: Maybe<_Text_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: Maybe<Block_Order_By>;
  fee?: Maybe<Order_By>;
  gas?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  memo?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
  signatures?: Maybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  Gas = 'gas',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Memo = 'memo',
  /** column name */
  PartitionId = 'partition_id',
  /** column name */
  Signatures = 'signatures'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  partition_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  height?: Maybe<Order_By>;
  partition_id?: Maybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  consensus_address: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An aggregate relationship */
  double_sign_votes_aggregate: Double_Sign_Vote_Aggregate;
  height: Scalars['bigint'];
  self_delegate_address: Scalars['String'];
  /** An object relationship */
  validator_commission?: Maybe<Validator_Commission>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An aggregate relationship */
  validator_commissions_aggregate: Validator_Commission_Aggregate;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An aggregate relationship */
  validator_descriptions_aggregate: Validator_Description_Aggregate;
  /** An object relationship */
  validator_status?: Maybe<Validator_Status>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: Maybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Double_Sign_Vote_Order_By>>;
  where?: Maybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Commission_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Commission_Order_By>>;
  where?: Maybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Description_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Description_Order_By>>;
  where?: Maybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Voting_Power_Order_By>>;
  where?: Maybe<Validator_Voting_Power_Bool_Exp>;
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  avg?: Maybe<Validator_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
  stddev?: Maybe<Validator_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Sum_Fields>;
  var_pop?: Maybe<Validator_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Var_Samp_Fields>;
  variance?: Maybe<Validator_Variance_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Avg_Fields = {
  __typename?: 'validator_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: Maybe<Array<Validator_Bool_Exp>>;
  _not?: Maybe<Validator_Bool_Exp>;
  _or?: Maybe<Array<Validator_Bool_Exp>>;
  consensus_address?: Maybe<String_Comparison_Exp>;
  double_sign_votes?: Maybe<Double_Sign_Vote_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  validator_commission?: Maybe<Validator_Commission_Bool_Exp>;
  validator_commissions?: Maybe<Validator_Commission_Bool_Exp>;
  validator_descriptions?: Maybe<Validator_Description_Bool_Exp>;
  validator_status?: Maybe<Validator_Status_Bool_Exp>;
  validator_voting_powers?: Maybe<Validator_Voting_Power_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['String'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['String'];
  self_delegate_address: Scalars['String'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_commission" */
export type Validator_Commission_Aggregate = {
  __typename?: 'validator_commission_aggregate';
  aggregate?: Maybe<Validator_Commission_Aggregate_Fields>;
  nodes: Array<Validator_Commission>;
};

/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_Fields = {
  __typename?: 'validator_commission_aggregate_fields';
  avg?: Maybe<Validator_Commission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Commission_Max_Fields>;
  min?: Maybe<Validator_Commission_Min_Fields>;
  stddev?: Maybe<Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Validator_Commission_Variance_Fields>;
};


/** aggregate fields of "validator_commission" */
export type Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Commission_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: Maybe<Validator_Commission_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Commission_Max_Order_By>;
  min?: Maybe<Validator_Commission_Min_Order_By>;
  stddev?: Maybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Commission_Sum_Order_By>;
  var_pop?: Maybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Commission_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Commission_Avg_Fields = {
  __typename?: 'validator_commission_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: Maybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: Maybe<Validator_Commission_Bool_Exp>;
  _or?: Maybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  min_self_delegation?: Maybe<String_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Commission_Max_Fields = {
  __typename?: 'validator_commission_max_fields';
  commission?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Commission_Min_Fields = {
  __typename?: 'validator_commission_min_fields';
  commission?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  min_self_delegation?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  min_self_delegation?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Commission_Stddev_Fields = {
  __typename?: 'validator_commission_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'validator_commission_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'validator_commission_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Commission_Sum_Fields = {
  __typename?: 'validator_commission_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Commission_Var_Pop_Fields = {
  __typename?: 'validator_commission_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Commission_Var_Samp_Fields = {
  __typename?: 'validator_commission_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Commission_Variance_Fields = {
  __typename?: 'validator_commission_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  self_delegate_address: Scalars['String'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_description" */
export type Validator_Description_Aggregate = {
  __typename?: 'validator_description_aggregate';
  aggregate?: Maybe<Validator_Description_Aggregate_Fields>;
  nodes: Array<Validator_Description>;
};

/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_Fields = {
  __typename?: 'validator_description_aggregate_fields';
  avg?: Maybe<Validator_Description_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Description_Max_Fields>;
  min?: Maybe<Validator_Description_Min_Fields>;
  stddev?: Maybe<Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Validator_Description_Variance_Fields>;
};


/** aggregate fields of "validator_description" */
export type Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Description_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: Maybe<Validator_Description_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Description_Max_Order_By>;
  min?: Maybe<Validator_Description_Min_Order_By>;
  stddev?: Maybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Description_Sum_Order_By>;
  var_pop?: Maybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Description_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Description_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Description_Avg_Fields = {
  __typename?: 'validator_description_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: Maybe<Array<Validator_Description_Bool_Exp>>;
  _not?: Maybe<Validator_Description_Bool_Exp>;
  _or?: Maybe<Array<Validator_Description_Bool_Exp>>;
  details?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  identity?: Maybe<String_Comparison_Exp>;
  moniker?: Maybe<String_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Description_Max_Fields = {
  __typename?: 'validator_description_max_fields';
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Description_Min_Fields = {
  __typename?: 'validator_description_min_fields';
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  details?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  identity?: Maybe<Order_By>;
  moniker?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Description_Stddev_Fields = {
  __typename?: 'validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Description_Sum_Fields = {
  __typename?: 'validator_description_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Description_Var_Pop_Fields = {
  __typename?: 'validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Description_Var_Samp_Fields = {
  __typename?: 'validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Description_Variance_Fields = {
  __typename?: 'validator_description_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  consensus_address?: Maybe<Order_By>;
  double_sign_votes_aggregate?: Maybe<Double_Sign_Vote_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_commission?: Maybe<Validator_Commission_Order_By>;
  validator_commissions_aggregate?: Maybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: Maybe<Validator_Description_Aggregate_Order_By>;
  validator_status?: Maybe<Validator_Status_Order_By>;
  validator_voting_powers_aggregate?: Maybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  Height = 'height',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint'];
  in_active_set: Scalars['String'];
  jailed: Scalars['String'];
  self_delegate_address: Scalars['String'];
  tombstoned: Scalars['String'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: Maybe<Array<Validator_Status_Bool_Exp>>;
  _not?: Maybe<Validator_Status_Bool_Exp>;
  _or?: Maybe<Array<Validator_Status_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  in_active_set?: Maybe<String_Comparison_Exp>;
  jailed?: Maybe<String_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  tombstoned?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  in_active_set?: Maybe<Scalars['String']>;
  jailed?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  tombstoned?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  in_active_set?: Maybe<Scalars['String']>;
  jailed?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  tombstoned?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: Maybe<Order_By>;
  in_active_set?: Maybe<Order_By>;
  jailed?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  tombstoned?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  InActiveSet = 'in_active_set',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Validator_Stddev_Fields = {
  __typename?: 'validator_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Stddev_Pop_Fields = {
  __typename?: 'validator_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Stddev_Samp_Fields = {
  __typename?: 'validator_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Validator_Sum_Fields = {
  __typename?: 'validator_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Validator_Var_Pop_Fields = {
  __typename?: 'validator_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Var_Samp_Fields = {
  __typename?: 'validator_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Variance_Fields = {
  __typename?: 'validator_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  height: Scalars['bigint'];
  self_delegate_address: Scalars['String'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: Maybe<Validator_Voting_Power_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Voting_Power_Max_Order_By>;
  min?: Maybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Voting_Power_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: Maybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: Maybe<Validator_Voting_Power_Bool_Exp>;
  _or?: Maybe<Array<Validator_Voting_Power_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  self_delegate_address?: Maybe<String_Comparison_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
  validator_address?: Maybe<String_Comparison_Exp>;
  voting_power?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  self_delegate_address?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  height?: Maybe<Order_By>;
  self_delegate_address?: Maybe<Order_By>;
  validator?: Maybe<Validator_Order_By>;
  validator_address?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: Maybe<Order_By>;
  voting_power?: Maybe<Order_By>;
};

export type AccountBalancesQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountBalancesQuery = { accountBalances?: Maybe<(
    { __typename?: 'ActionBalance' }
    & Pick<ActionBalance, 'coins'>
  )> };

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveValidatorCountQuery = { activeTotal: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & Pick<Validator_Status_Aggregate_Fields, 'count'>
    )> }
  ), total: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & Pick<Validator_Status_Aggregate_Fields, 'count'>
    )> }
  ) };

export type BlockDetailsQueryVariables = Exact<{
  height?: Maybe<Scalars['bigint']>;
  signatureHeight?: Maybe<Scalars['bigint']>;
}>;


export type BlockDetailsQuery = { transaction: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'height' | 'hash'>
  )>, block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'height' | 'hash' | 'timestamp'>
    & { txs: Block['num_txs'], operatorAddress: Block['proposer_address'] }
  )>, preCommitsAggregate: (
    { __typename?: 'pre_commit_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'pre_commit_aggregate_fields' }
      & { sum?: Maybe<(
        { __typename?: 'pre_commit_sum_fields' }
        & { votingPower: Pre_Commit_Sum_Fields['voting_power'] }
      )> }
    )> }
  ), preCommits: Array<(
    { __typename?: 'pre_commit' }
    & { operatorAddress: Pre_Commit['validator_address'] }
  )> };

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockHeightListenerSubscription = { height: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'height'>
  )> };

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageBlockTimeQuery = { averageBlockTime: Array<(
    { __typename?: 'average_block_time_per_hour' }
    & { averageTime: Average_Block_Time_Per_Hour['average_time'] }
  )> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockTimestampQuery = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'timestamp'>
  )> };

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type BlocksListenerSubscription = { blocks: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'height' | 'hash' | 'timestamp'>
    & { txs: Block['num_txs'], proposerAddress: Block['proposer_address'] }
  )> };

export type BlocksQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type BlocksQuery = { blocks: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'height' | 'hash' | 'timestamp'>
    & { txs: Block['num_txs'], proposerAddress: Block['proposer_address'] }
  )> };

export type ChainIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ChainIdQuery = { genesis: Array<(
    { __typename?: 'genesis' }
    & Pick<Genesis, 'time'>
    & { chainId: Genesis['chain_id'] }
  )> };

export type MarketDataQueryVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;


export type MarketDataQuery = { inflation: Array<(
    { __typename?: 'inflation' }
    & Pick<Inflation, 'value'>
  )>, tokenPrice: Array<(
    { __typename?: 'token_price' }
    & Pick<Token_Price, 'price'>
    & { marketCap: Token_Price['market_cap'] }
  )>, supply: Array<(
    { __typename?: 'supply' }
    & Pick<Supply, 'coins'>
  )>, bondedTokens: Array<(
    { __typename?: 'staking_pool' }
    & Pick<Staking_Pool, 'bonded_tokens'>
  )> };

export type OnlineVotingPowerQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineVotingPowerQuery = { activeTotal: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & Pick<Validator_Status_Aggregate_Fields, 'count'>
    )> }
  ), validatorVotingPowerAggregate: (
    { __typename?: 'validator_voting_power_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_voting_power_aggregate_fields' }
      & { sum?: Maybe<(
        { __typename?: 'validator_voting_power_sum_fields' }
        & { votingPower: Validator_Voting_Power_Sum_Fields['voting_power'] }
      )> }
    )> }
  ), stakingPool: Array<(
    { __typename?: 'staking_pool' }
    & { bonded: Staking_Pool['bonded_tokens'] }
  )> };

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;


export type TokenPriceListenerSubscription = { tokenPrice: Array<(
    { __typename?: 'token_price' }
    & Pick<Token_Price, 'id' | 'price' | 'timestamp'>
    & { marketCap: Token_Price['market_cap'], unitName: Token_Price['unit_name'] }
  )> };

export type TokenomicsQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenomicsQuery = { stakingPool: Array<(
    { __typename?: 'staking_pool' }
    & { bonded: Staking_Pool['bonded_tokens'], unbonded: Staking_Pool['not_bonded_tokens'] }
  )>, supply: Array<(
    { __typename?: 'supply' }
    & Pick<Supply, 'coins'>
  )> };

export type TransactionDetailsQueryVariables = Exact<{
  hash?: Maybe<Scalars['String']>;
}>;


export type TransactionDetailsQuery = { transaction: Array<(
    { __typename?: 'transaction' }
    & { hash: Transaction['hash'], height: Transaction['height'], fee: Transaction['fee'], gasUsed: Transaction['gas'], memo: Transaction['memo'] }
    & { block: (
      { __typename?: 'block' }
      & { timestamp: Block['timestamp'] }
    ) }
  )> };

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type TransactionsListenerSubscription = { transactions: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'height' | 'hash'>
    & { block: (
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    ) }
  )> };

export type TransactionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type TransactionsQuery = { transactions: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'height' | 'hash'>
    & { block: (
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    ) }
  )> };

export type LastHundredBlocksSubscriptionVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type LastHundredBlocksSubscription = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'height'>
    & { transactions: Array<(
      { __typename?: 'transaction' }
      & Pick<Transaction, 'hash'>
    )>, precommits: Array<(
      { __typename?: 'pre_commit' }
      & { validatorAddress: Pre_Commit['validator_address'] }
    )> }
  )> };

export type ValidatorLastSeenListenerSubscriptionVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type ValidatorLastSeenListenerSubscription = { preCommit: Array<(
    { __typename?: 'pre_commit' }
    & Pick<Pre_Commit, 'height' | 'timestamp'>
  )> };

export type ValidatorDetailsQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type ValidatorDetailsQuery = { stakingPool: Array<(
    { __typename?: 'staking_pool' }
    & Pick<Staking_Pool, 'height'>
    & { bonded: Staking_Pool['bonded_tokens'] }
  )>, validator: Array<(
    { __typename?: 'validator' }
    & { validatorDescriptions: Array<(
      { __typename?: 'validator_description' }
      & Pick<Validator_Description, 'details'>
    )>, validatorStatuses?: Maybe<(
      { __typename?: 'validator_status' }
      & Pick<Validator_Status, 'jailed' | 'height'>
      & { status: Validator_Status['in_active_set'] }
    )>, validatorCommissions: Array<(
      { __typename?: 'validator_commission' }
      & Pick<Validator_Commission, 'commission'>
    )>, validatorVotingPowers: Array<(
      { __typename?: 'validator_voting_power' }
      & Pick<Validator_Voting_Power, 'height'>
      & { votingPower: Validator_Voting_Power['voting_power'] }
    )> }
  )> };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { stakingPool: Array<(
    { __typename?: 'staking_pool' }
    & { bondedTokens: Staking_Pool['bonded_tokens'] }
  )>, validator: Array<(
    { __typename?: 'validator' }
    & { consensusAddress: Validator['consensus_address'], selfDelegateAddress: Validator['self_delegate_address'] }
    & { validatorStatuses?: Maybe<(
      { __typename?: 'validator_status' }
      & Pick<Validator_Status, 'jailed' | 'tombstoned' | 'height'>
      & { status: Validator_Status['in_active_set'] }
    )>, validatorVotingPowers: Array<(
      { __typename?: 'validator_voting_power' }
      & { votingPower: Validator_Voting_Power['voting_power'] }
    )>, validatorCommissions: Array<(
      { __typename?: 'validator_commission' }
      & Pick<Validator_Commission, 'commission'>
    )> }
  )> };

export type ValidatorsAddressListQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsAddressListQuery = { validator: Array<(
    { __typename?: 'validator' }
    & { consensusAddress: Validator['consensus_address'], selfDelegateAddress: Validator['self_delegate_address'] }
    & { validatorDescriptions: Array<(
      { __typename?: 'validator_description' }
      & Pick<Validator_Description, 'moniker' | 'identity'>
    )> }
  )> };

export type ValidatorAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorAddressesQuery = { validator: Array<(
    { __typename?: 'validator' }
    & { consensusAddress: Validator['consensus_address'], selfDelegateAddress: Validator['self_delegate_address'] }
    & { validatorDescriptions: Array<(
      { __typename?: 'validator_description' }
      & Pick<Validator_Description, 'moniker'>
    )> }
  )> };


export const AccountBalancesDocument = gql`
    query AccountBalances($address: String!) {
  accountBalances: action_account_balance(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountBalancesQuery__
 *
 * To run a query within a React component, call `useAccountBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountBalancesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountBalancesQuery(baseOptions: Apollo.QueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
      }
export function useAccountBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
        }
export type AccountBalancesQueryHookResult = ReturnType<typeof useAccountBalancesQuery>;
export type AccountBalancesLazyQueryHookResult = ReturnType<typeof useAccountBalancesLazyQuery>;
export type AccountBalancesQueryResult = Apollo.QueryResult<AccountBalancesQuery, AccountBalancesQueryVariables>;
export const ActiveValidatorCountDocument = gql`
    query ActiveValidatorCount {
  activeTotal: validator_status_aggregate(where: {in_active_set: {_eq: "true"}}) {
    aggregate {
      count
    }
  }
  total: validator_status_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useActiveValidatorCountQuery__
 *
 * To run a query within a React component, call `useActiveValidatorCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveValidatorCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveValidatorCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveValidatorCountQuery(baseOptions?: Apollo.QueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
      }
export function useActiveValidatorCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
        }
export type ActiveValidatorCountQueryHookResult = ReturnType<typeof useActiveValidatorCountQuery>;
export type ActiveValidatorCountLazyQueryHookResult = ReturnType<typeof useActiveValidatorCountLazyQuery>;
export type ActiveValidatorCountQueryResult = Apollo.QueryResult<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>;
export const BlockDetailsDocument = gql`
    query BlockDetails($height: bigint, $signatureHeight: bigint) {
  transaction(where: {height: {_eq: $height}}) {
    height
    hash
  }
  block(limit: 1, where: {height: {_eq: $height}}) {
    height
    hash
    timestamp
    txs: num_txs
    operatorAddress: proposer_address
  }
  preCommitsAggregate: pre_commit_aggregate(
    where: {height: {_eq: $signatureHeight}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  preCommits: pre_commit(where: {height: {_eq: $signatureHeight}}) {
    operatorAddress: validator_address
  }
}
    `;

/**
 * __useBlockDetailsQuery__
 *
 * To run a query within a React component, call `useBlockDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockDetailsQuery({
 *   variables: {
 *      height: // value for 'height'
 *      signatureHeight: // value for 'signatureHeight'
 *   },
 * });
 */
export function useBlockDetailsQuery(baseOptions?: Apollo.QueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
      }
export function useBlockDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
        }
export type BlockDetailsQueryHookResult = ReturnType<typeof useBlockDetailsQuery>;
export type BlockDetailsLazyQueryHookResult = ReturnType<typeof useBlockDetailsLazyQuery>;
export type BlockDetailsQueryResult = Apollo.QueryResult<BlockDetailsQuery, BlockDetailsQueryVariables>;
export const LatestBlockHeightListenerDocument = gql`
    subscription LatestBlockHeightListener($offset: Int = 0) {
  height: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    height
  }
}
    `;

/**
 * __useLatestBlockHeightListenerSubscription__
 *
 * To run a query within a React component, call `useLatestBlockHeightListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightListenerSubscription({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const AverageBlockTimeDocument = gql`
    query AverageBlockTime {
  averageBlockTime: average_block_time_per_hour(
    limit: 1
    order_by: {height: desc}
  ) {
    averageTime: average_time
  }
}
    `;

/**
 * __useAverageBlockTimeQuery__
 *
 * To run a query within a React component, call `useAverageBlockTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAverageBlockTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAverageBlockTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAverageBlockTimeQuery(baseOptions?: Apollo.QueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
      }
export function useAverageBlockTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
        }
export type AverageBlockTimeQueryHookResult = ReturnType<typeof useAverageBlockTimeQuery>;
export type AverageBlockTimeLazyQueryHookResult = ReturnType<typeof useAverageBlockTimeLazyQuery>;
export type AverageBlockTimeQueryResult = Apollo.QueryResult<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>;
export const LatestBlockTimestampDocument = gql`
    query LatestBlockTimestamp($offset: Int = 0) {
  block: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    timestamp
  }
}
    `;

/**
 * __useLatestBlockTimestampQuery__
 *
 * To run a query within a React component, call `useLatestBlockTimestampQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockTimestampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockTimestampQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockTimestampQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
      }
export function useLatestBlockTimestampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export type LatestBlockTimestampQueryHookResult = ReturnType<typeof useLatestBlockTimestampQuery>;
export type LatestBlockTimestampLazyQueryHookResult = ReturnType<typeof useLatestBlockTimestampLazyQuery>;
export type LatestBlockTimestampQueryResult = Apollo.QueryResult<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>;
export const BlocksListenerDocument = gql`
    subscription BlocksListener($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    proposerAddress: proposer_address
  }
}
    `;

/**
 * __useBlocksListenerSubscription__
 *
 * To run a query within a React component, call `useBlocksListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlocksListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>(BlocksListenerDocument, options);
      }
export type BlocksListenerSubscriptionHookResult = ReturnType<typeof useBlocksListenerSubscription>;
export type BlocksListenerSubscriptionResult = Apollo.SubscriptionResult<BlocksListenerSubscription>;
export const BlocksDocument = gql`
    query Blocks($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    proposerAddress: proposer_address
  }
}
    `;

/**
 * __useBlocksQuery__
 *
 * To run a query within a React component, call `useBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksQuery(baseOptions?: Apollo.QueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
      }
export function useBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
        }
export type BlocksQueryHookResult = ReturnType<typeof useBlocksQuery>;
export type BlocksLazyQueryHookResult = ReturnType<typeof useBlocksLazyQuery>;
export type BlocksQueryResult = Apollo.QueryResult<BlocksQuery, BlocksQueryVariables>;
export const ChainIdDocument = gql`
    query ChainId {
  genesis(limit: 1, order_by: {time: desc}) {
    chainId: chain_id
    time
  }
}
    `;

/**
 * __useChainIdQuery__
 *
 * To run a query within a React component, call `useChainIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useChainIdQuery(baseOptions?: Apollo.QueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
      }
export function useChainIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
        }
export type ChainIdQueryHookResult = ReturnType<typeof useChainIdQuery>;
export type ChainIdLazyQueryHookResult = ReturnType<typeof useChainIdLazyQuery>;
export type ChainIdQueryResult = Apollo.QueryResult<ChainIdQuery, ChainIdQueryVariables>;
export const MarketDataDocument = gql`
    query MarketData($denom: String) {
  inflation: inflation(order_by: {height: desc}, limit: 1) {
    value
  }
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    marketCap: market_cap
    price
  }
  supply {
    coins
  }
  bondedTokens: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded_tokens
  }
}
    `;

/**
 * __useMarketDataQuery__
 *
 * To run a query within a React component, call `useMarketDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketDataQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useMarketDataQuery(baseOptions?: Apollo.QueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
      }
export function useMarketDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
        }
export type MarketDataQueryHookResult = ReturnType<typeof useMarketDataQuery>;
export type MarketDataLazyQueryHookResult = ReturnType<typeof useMarketDataLazyQuery>;
export type MarketDataQueryResult = Apollo.QueryResult<MarketDataQuery, MarketDataQueryVariables>;
export const OnlineVotingPowerDocument = gql`
    query OnlineVotingPower {
  activeTotal: validator_status_aggregate(where: {in_active_set: {_eq: "true"}}) {
    aggregate {
      count
    }
  }
  validatorVotingPowerAggregate: validator_voting_power_aggregate(
    where: {validator: {validator_status: {in_active_set: {_eq: "true"}}}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
  }
}
    `;

/**
 * __useOnlineVotingPowerQuery__
 *
 * To run a query within a React component, call `useOnlineVotingPowerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineVotingPowerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineVotingPowerQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlineVotingPowerQuery(baseOptions?: Apollo.QueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
      }
export function useOnlineVotingPowerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
        }
export type OnlineVotingPowerQueryHookResult = ReturnType<typeof useOnlineVotingPowerQuery>;
export type OnlineVotingPowerLazyQueryHookResult = ReturnType<typeof useOnlineVotingPowerLazyQuery>;
export type OnlineVotingPowerQueryResult = Apollo.QueryResult<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>;
export const TokenPriceListenerDocument = gql`
    subscription TokenPriceListener($denom: String) {
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    id
    price
    timestamp
    marketCap: market_cap
    unitName: unit_name
  }
}
    `;

/**
 * __useTokenPriceListenerSubscription__
 *
 * To run a query within a React component, call `useTokenPriceListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceListenerSubscription({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useTokenPriceListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>(TokenPriceListenerDocument, options);
      }
export type TokenPriceListenerSubscriptionHookResult = ReturnType<typeof useTokenPriceListenerSubscription>;
export type TokenPriceListenerSubscriptionResult = Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TokenomicsDocument = gql`
    query Tokenomics {
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
    unbonded: not_bonded_tokens
  }
  supply: supply(order_by: {height: desc}, limit: 1) {
    coins
  }
}
    `;

/**
 * __useTokenomicsQuery__
 *
 * To run a query within a React component, call `useTokenomicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenomicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenomicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenomicsQuery(baseOptions?: Apollo.QueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
      }
export function useTokenomicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
        }
export type TokenomicsQueryHookResult = ReturnType<typeof useTokenomicsQuery>;
export type TokenomicsLazyQueryHookResult = ReturnType<typeof useTokenomicsLazyQuery>;
export type TokenomicsQueryResult = Apollo.QueryResult<TokenomicsQuery, TokenomicsQueryVariables>;
export const TransactionDetailsDocument = gql`
    query TransactionDetails($hash: String) {
  transaction(where: {hash: {_eq: $hash}}, limit: 1) {
    hash: hash
    height: height
    block: block {
      timestamp: timestamp
    }
    fee: fee
    gasUsed: gas
    memo: memo
  }
}
    `;

/**
 * __useTransactionDetailsQuery__
 *
 * To run a query within a React component, call `useTransactionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionDetailsQuery({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useTransactionDetailsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
      }
export function useTransactionDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
        }
export type TransactionDetailsQueryHookResult = ReturnType<typeof useTransactionDetailsQuery>;
export type TransactionDetailsLazyQueryHookResult = ReturnType<typeof useTransactionDetailsLazyQuery>;
export type TransactionDetailsQueryResult = Apollo.QueryResult<TransactionDetailsQuery, TransactionDetailsQueryVariables>;
export const TransactionsListenerDocument = gql`
    subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useTransactionsListenerSubscription__
 *
 * To run a query within a React component, call `useTransactionsListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>(TransactionsListenerDocument, options);
      }
export type TransactionsListenerSubscriptionHookResult = ReturnType<typeof useTransactionsListenerSubscription>;
export type TransactionsListenerSubscriptionResult = Apollo.SubscriptionResult<TransactionsListenerSubscription>;
export const TransactionsDocument = gql`
    query Transactions($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const LastHundredBlocksDocument = gql`
    subscription LastHundredBlocks($address: String) {
  block(offset: 1, order_by: {height: desc}, limit: 100) {
    height
    transactions {
      hash
    }
    precommits: pre_commits(where: {validator_address: {_eq: $address}}) {
      validatorAddress: validator_address
    }
  }
}
    `;

/**
 * __useLastHundredBlocksSubscription__
 *
 * To run a query within a React component, call `useLastHundredBlocksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLastHundredBlocksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastHundredBlocksSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useLastHundredBlocksSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>(LastHundredBlocksDocument, options);
      }
export type LastHundredBlocksSubscriptionHookResult = ReturnType<typeof useLastHundredBlocksSubscription>;
export type LastHundredBlocksSubscriptionResult = Apollo.SubscriptionResult<LastHundredBlocksSubscription>;
export const ValidatorLastSeenListenerDocument = gql`
    subscription ValidatorLastSeenListener($address: String) {
  preCommit: pre_commit(
    limit: 1
    where: {validator_address: {_eq: $address}}
    order_by: {height: desc}
  ) {
    height
    timestamp
  }
}
    `;

/**
 * __useValidatorLastSeenListenerSubscription__
 *
 * To run a query within a React component, call `useValidatorLastSeenListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useValidatorLastSeenListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorLastSeenListenerSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorLastSeenListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>(ValidatorLastSeenListenerDocument, options);
      }
export type ValidatorLastSeenListenerSubscriptionHookResult = ReturnType<typeof useValidatorLastSeenListenerSubscription>;
export type ValidatorLastSeenListenerSubscriptionResult = Apollo.SubscriptionResult<ValidatorLastSeenListenerSubscription>;
export const ValidatorDetailsDocument = gql`
    query ValidatorDetails($address: String) {
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1, offset: 0) {
    height
    bonded: bonded_tokens
  }
  validator(where: {self_delegate_address: {_eq: $address}}) {
    validatorDescriptions: validator_descriptions(
      order_by: {height: desc}
      limit: 1
    ) {
      details
    }
    validatorStatuses: validator_status {
      status: in_active_set
      jailed
      height
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      height
      votingPower: voting_power
    }
  }
}
    `;

/**
 * __useValidatorDetailsQuery__
 *
 * To run a query within a React component, call `useValidatorDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>(ValidatorDetailsDocument, options);
      }
export function useValidatorDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>(ValidatorDetailsDocument, options);
        }
export type ValidatorDetailsQueryHookResult = ReturnType<typeof useValidatorDetailsQuery>;
export type ValidatorDetailsLazyQueryHookResult = ReturnType<typeof useValidatorDetailsLazyQuery>;
export type ValidatorDetailsQueryResult = Apollo.QueryResult<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>;
export const ValidatorsDocument = gql`
    query Validators {
  stakingPool: staking_pool(limit: 1, order_by: {height: desc}) {
    bondedTokens: bonded_tokens
  }
  validator {
    consensusAddress: consensus_address
    selfDelegateAddress: self_delegate_address
    validatorStatuses: validator_status {
      status: in_active_set
      jailed
      tombstoned
      height
    }
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      votingPower: voting_power
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
  }
}
    `;

/**
 * __useValidatorsQuery__
 *
 * To run a query within a React component, call `useValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
      }
export function useValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
        }
export type ValidatorsQueryHookResult = ReturnType<typeof useValidatorsQuery>;
export type ValidatorsLazyQueryHookResult = ReturnType<typeof useValidatorsLazyQuery>;
export type ValidatorsQueryResult = Apollo.QueryResult<ValidatorsQuery, ValidatorsQueryVariables>;
export const ValidatorsAddressListDocument = gql`
    query ValidatorsAddressList {
  validator {
    consensusAddress: consensus_address
    selfDelegateAddress: self_delegate_address
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
      identity
    }
  }
}
    `;

/**
 * __useValidatorsAddressListQuery__
 *
 * To run a query within a React component, call `useValidatorsAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsAddressListQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsAddressListQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>(ValidatorsAddressListDocument, options);
      }
export function useValidatorsAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>(ValidatorsAddressListDocument, options);
        }
export type ValidatorsAddressListQueryHookResult = ReturnType<typeof useValidatorsAddressListQuery>;
export type ValidatorsAddressListLazyQueryHookResult = ReturnType<typeof useValidatorsAddressListLazyQuery>;
export type ValidatorsAddressListQueryResult = Apollo.QueryResult<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>;
export const ValidatorAddressesDocument = gql`
    query ValidatorAddresses {
  validator(
    where: {consensus_address: {_is_null: false}, self_delegate_address: {_is_null: false}}
  ) {
    consensusAddress: consensus_address
    selfDelegateAddress: self_delegate_address
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
    }
  }
}
    `;

/**
 * __useValidatorAddressesQuery__
 *
 * To run a query within a React component, call `useValidatorAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorAddressesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
      }
export function useValidatorAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
        }
export type ValidatorAddressesQueryHookResult = ReturnType<typeof useValidatorAddressesQuery>;
export type ValidatorAddressesLazyQueryHookResult = ReturnType<typeof useValidatorAddressesLazyQuery>;
export type ValidatorAddressesQueryResult = Apollo.QueryResult<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>;