import React, { useContext, useEffect, useState } from 'react';
import lang from '../lang.json'
import { DataContext } from './Data';

type StringsContextObj = {
    version: string
    login_username: string
    login_password: string
    login_usernameMsg: string
    login_passwordMsg: string
    login_emailMsg: string
    login_login: string,
    login_wel: string,
    login_noac: string,
    login_register: string,
    login_forgetPW: string,
    login_resetPW: string
    main_home: string,
    main_home_bal: string,
    main_home_total: string,
    main_home_rev: string,
    main_home_exp: string,
    main_home_noRecord: string,
    main_cal: string,
    main_cal_delAlert: string,
    main_cal_delAlertMsg: string,
    main_cal_delAlert_No: string,
    main_cal_delAlert_Yes: string,
    main_record: string,
    main_trend: string,
    main_trendMsg: string,
    main_settings: string,
    main_settings_logout: string,
    main_settings_email: string,
    main_settings_city: string,
    main_settings_cityMsg: string,
    main_settings_currency: string,
    main_settings_currencyMsg: string,
    main_settings_help: string,
    main_settings_helpMsg: string,
    main_record_add: string,
    main_record_recordName: string,
    main_record_recordNameMsg: string,
    main_record_recordType: string,
    main_record_recordAmount: string,
    main_record_recordAmountMsg: string,
    main_record_category: string,
    main_home_categoryMsg: string,
    main_cal_select: string,
    main_cal_selectMsg: string,
    main_food: string,
    main_trans: string,
    main_sports: string,
    main_others: string,
    main_trend_jan: string,
    main_trend_feb: string,
    main_trend_mar: string,
    main_trend_apr: string,
    main_trend_may: string,
    main_trend_june: string,
    main_trend_july: string,
    main_trend_aug: string,
    main_trend_sep: string,
    main_trend_oct: string,
    main_trend_nov: string,
    main_trend_dec: string,
}

export const StringsContext = React.createContext<StringsContextObj>({
    version: "",
    login_username: "",
    login_password: "",
    login_usernameMsg: "",
    login_passwordMsg: "",
    login_emailMsg: "",
    login_login: "",
    login_wel: "",
    login_noac: "",
    login_register: "",
    login_forgetPW: "",
    login_resetPW: "",
    main_home: "",
    main_home_bal: "",
    main_home_total: "",
    main_home_rev: "",
    main_home_exp: "",
    main_home_noRecord: "",
    main_home_categoryMsg: "",
    main_cal: "",
    main_cal_delAlert: "",
    main_cal_delAlertMsg: "",
    main_cal_delAlert_No: "",
    main_cal_delAlert_Yes: "",
    main_record: "",
    main_trend: "",
    main_trendMsg: "",
    main_settings: "",
    main_settings_logout: "",
    main_settings_email: "",
    main_settings_city: "",
    main_settings_cityMsg: "",
    main_settings_currency: "",
    main_settings_currencyMsg: "",
    main_settings_help: "",
    main_settings_helpMsg: "",
    main_record_add: "",
    main_record_recordName: "",
    main_record_recordNameMsg: "",
    main_record_recordType: "",
    main_record_recordAmount: "",
    main_record_recordAmountMsg: "",
    main_record_category: "",
    main_cal_select: "",
    main_cal_selectMsg: "",
    main_food: "",
    main_trans: "",
    main_sports: "",
    main_others: "",
    main_trend_jan: "",
    main_trend_feb: "",
    main_trend_mar: "",
    main_trend_apr: "",
    main_trend_may: "",
    main_trend_june: "",
    main_trend_july: "",
    main_trend_aug: "",
    main_trend_sep: "",
    main_trend_oct: "",
    main_trend_nov: "",
    main_trend_dec: "",
});

const StringsContextProvider: React.FC<{children: any}> = (props) => {

    const Data = useContext(DataContext);
    const language = Data.lang;

    const version = lang[language].version
    // Login Page
    const login_username = lang[language].login_username
    const login_password = lang[language].login_password
    const login_usernameMsg = lang[language].login_usernameMsg
    const login_passwordMsg = lang[language].login_passwordMsg
    const login_emailMsg = lang[language].login_emailMsg
    const login_login = lang[language].login_login
    const login_register = lang[language].login_register
    const login_forgetPW = lang[language].login_forgetPW
    const login_resetPW = lang[language].login_resetPW
    const login_wel = lang[language].login_wel
    const login_noac = lang[language].login_noac


    // Main Page
    const main_home = lang[language].main_home
    const main_home_bal = lang[language].main_home_bal
    const main_home_total = lang[language].main_home_total
    const main_home_rev = lang[language].main_home_rev
    const main_home_exp = lang[language].main_home_exp
    const main_home_noRecord = lang[language].main_home_noRecord
    const main_home_categoryMsg = lang[language].main_home_categoryMsg
    const main_cal = lang[language].main_cal
    const main_cal_delAlert = lang[language].main_cal_delAlert
    const main_cal_delAlertMsg = lang[language].main_cal_delAlertMsg
    const main_cal_delAlert_No = lang[language].main_cal_delAlert_No
    const main_cal_delAlert_Yes = lang[language].main_cal_delAlert_Yes
    const main_record = lang[language].main_record
    const main_trend = lang[language].main_trend
    const main_trendMsg = lang[language].main_trendMsg
    const main_settings = lang[language].main_settings
    const main_settings_logout = lang[language].main_settings_logout
    const main_settings_email = lang[language].main_settings_email
    const main_settings_city = lang[language].main_settings_city
    const main_settings_cityMsg = lang[language].main_settings_cityMsg
    const main_settings_currency = lang[language].main_settings_currency
    const main_settings_currencyMsg = lang[language].main_settings_currencyMsg
    const main_settings_help = lang[language].main_settings_help
    const main_settings_helpMsg = lang[language].main_settings_helpMsg
    const main_record_add = lang[language].main_record_add
    const main_record_recordName = lang[language].main_record_recordName
    const main_record_recordNameMsg = lang[language].main_record_recordNameMsg
    const main_record_recordType = lang[language].main_record_recordType
    const main_record_recordAmount = lang[language].main_record_recordAmount
    const main_record_recordAmountMsg = lang[language].main_record_recordAmountMsg
    const main_record_category = lang[language].main_record_category
    const main_cal_select = lang[language].main_cal_select
    const main_cal_selectMsg = lang[language].main_cal_selectMsg

    const main_food = lang[language].main_food
    const main_trans = lang[language].main_trans
    const main_sports = lang[language].main_sports
    const main_others = lang[language].main_others

    const main_trend_jan = lang[language].main_trend_jan
    const main_trend_feb = lang[language].main_trend_feb
    const main_trend_mar = lang[language].main_trend_mar
    const main_trend_apr = lang[language].main_trend_apr
    const main_trend_may = lang[language].main_trend_may
    const main_trend_june = lang[language].main_trend_june
    const main_trend_july = lang[language].main_trend_july
    const main_trend_aug = lang[language].main_trend_aug
    const main_trend_sep = lang[language].main_trend_sep
    const main_trend_oct = lang[language].main_trend_oct
    const main_trend_nov = lang[language].main_trend_nov
    const main_trend_dec = lang[language].main_trend_dec


    const contextValue: StringsContextObj = {
        version: version,
        // Login Page
        login_username: login_username,
        login_password: login_password,
        login_usernameMsg: login_usernameMsg,
        login_passwordMsg: login_passwordMsg,
        login_emailMsg: login_emailMsg,
        login_login: login_login,
        login_register: login_register,
        login_forgetPW: login_forgetPW,
        login_resetPW: login_resetPW,
        login_wel: login_wel,
        login_noac: login_noac,
        // Main Page
        main_home: main_home,
        main_home_bal: main_home_bal,
        main_home_total: main_home_total,
        main_home_rev: main_home_rev,
        main_home_exp: main_home_exp,
        main_home_noRecord: main_home_noRecord,
        main_home_categoryMsg: main_home_categoryMsg,
        main_cal: main_cal,
        main_cal_delAlert: main_cal_delAlert,
        main_cal_delAlertMsg: main_cal_delAlertMsg,
        main_cal_delAlert_No: main_cal_delAlert_No,
        main_cal_delAlert_Yes: main_cal_delAlert_Yes,
        main_record: main_record,
        main_trend: main_trend,
        main_trendMsg: main_trendMsg,
        main_settings: main_settings,
        main_settings_logout: main_settings_logout,
        main_settings_email: main_settings_email,
        main_settings_city: main_settings_city,
        main_settings_cityMsg: main_settings_cityMsg,
        main_settings_currency: main_settings_currency,
        main_settings_currencyMsg: main_settings_currencyMsg,
        main_settings_help: main_settings_help,
        main_settings_helpMsg: main_settings_helpMsg,
        main_record_add: main_record_add,
        main_record_recordName: main_record_recordName,
        main_record_recordNameMsg: main_record_recordNameMsg,
        main_record_recordType: main_record_recordType,
        main_record_recordAmount: main_record_recordAmount,
        main_record_recordAmountMsg: main_record_recordAmountMsg,
        main_record_category: main_record_category,
        main_cal_select: main_cal_select,
        main_cal_selectMsg: main_cal_selectMsg,
        main_food: main_food,
        main_trans: main_trans,
        main_sports: main_sports,
        main_others: main_others,
        main_trend_jan: main_trend_jan,
        main_trend_feb: main_trend_feb,
        main_trend_mar: main_trend_mar,
        main_trend_apr: main_trend_apr,
        main_trend_may: main_trend_may,
        main_trend_june: main_trend_june,
        main_trend_july: main_trend_july,
        main_trend_aug: main_trend_aug,
        main_trend_sep: main_trend_sep,
        main_trend_oct: main_trend_oct,
        main_trend_nov: main_trend_nov,
        main_trend_dec: main_trend_dec,
    }


    return <StringsContext.Provider value={contextValue}>{props.children}</StringsContext.Provider>
}

export default StringsContextProvider;