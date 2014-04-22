DIM vi_currentrow, vi_actionrow, vi_month, vi_rows, vi_actionrows @@ hightlight id_;_262976_;_script infofile_;_ZIP::ssf12.xml_;_
Window("Barclays Bank").WinEdit("Edit").Set "welcome"
Window("Barclays Bank").WinEdit("Edit_2").Set "feb1414a"
Window("Barclays Bank").WinEdit("Edit_3").Set "TRAINING-SRVR02" @@ hightlight id_;_197370_;_script infofile_;_ZIP::ssf18.xml_;_
Window("Barclays Bank").WinButton("OK").Click @@ hightlight id_;_262978_;_script infofile_;_ZIP::ssf19.xml_;_
Window("Main Menu").Check CheckPoint("Main Menu") @@ hightlight id_;_263028_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Main Menu").WinRadioButton("Transactions").Set @@ hightlight id_;_131982_;_script infofile_;_ZIP::ssf23.xml_;_
Window("Main Menu").WinButton("OK").Click @@ hightlight id_;_131982_;_script infofile_;_ZIP::ssf137.xml_;_
Dialog("SQL w_client_search").Check CheckPoint("SQL w_client_search_2") @@ hightlight id_;_16385198_;_script infofile_;_ZIP::ssf187.xml_;_
Dialog("SQL w_client_search").WinButton("OK").Click @@ hightlight id_;_11273432_;_script infofile_;_ZIP::ssf188.xml_;_
Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions") @@ hightlight id_;_1836668_;_script infofile_;_ZIP::ssf183.xml_;_
vi_rows = DataTable.GetRowCount
vi_actionrows = DataTable.GetSheet("Action1").GetRowCount
For vi_currentrow = 1 TO vi_rows
	DataTable.SetCurrentRow(vi_currentrow)
    Window("Main Menu").Window("List Monthly Transactions").WinComboBox("ComboBox").Select DataTable("Year", dtGlobalSheet)
	Dialog("DataWindow Error").WinButton("OK").Click @@ hightlight id_;_12387440_;_script infofile_;_ZIP::ssf189.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions") @@ hightlight id_;_263124_;_script infofile_;_ZIP::ssf141.xml_;_
	For vi_month = 0 TO 12
		Window("Main Menu").Window("List Monthly Transactions").WinComboBox("ComboBox_2").Select vi_month @@ hightlight id_;_525214_;_script infofile_;_ZIP::ssf142.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions") @@ hightlight id_;_263124_;_script infofile_;_ZIP::ssf143.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").WinButton("Print").Click
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").Check CheckPoint("Report Preview") @@ hightlight id_;_655642_;_script infofile_;_ZIP::ssf201.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Print").Click @@ hightlight id_;_328382_;_script infofile_;_ZIP::ssf202.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("*** Report Printed").Check CheckPoint("*** Report Printed") @@ hightlight id_;_590350_;_script infofile_;_ZIP::ssf203.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Close").Click @@ hightlight id_;_524840_;_script infofile_;_ZIP::ssf204.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
		For vi_actionrow = 1 TO vi_actionrows
			DataTable.GetSheet("Action1").SetCurrentRow(vi_actionrow)
			Window("Main Menu").Window("List Monthly Transactions").WinComboBox("ComboBox_3").Select DataTable("SortBy", dtLocalSheet) 
			Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
			Window("Main Menu").Window("List Monthly Transactions").WinButton("Print").Click
			Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").Check CheckPoint("Report Preview") @@ hightlight id_;_655642_;_script infofile_;_ZIP::ssf201.xml_;_
			Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Print").Click @@ hightlight id_;_328382_;_script infofile_;_ZIP::ssf202.xml_;_
			Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("*** Report Printed").Check CheckPoint("*** Report Printed") @@ hightlight id_;_590350_;_script infofile_;_ZIP::ssf203.xml_;_
			Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Close").Click @@ hightlight id_;_524840_;_script infofile_;_ZIP::ssf204.xml_;_
			Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
		Next
	Next
	Window("Main Menu").Window("List Monthly Transactions").WinComboBox("ComboBox_2").Select "SQL"
	Window("Main Menu").Window("List Monthly Transactions").Dialog("SQL w_client_search").Check CheckPoint("SQL w_client_search_3") @@ hightlight id_;_132036_;_script infofile_;_ZIP::ssf196.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Dialog("SQL w_client_search").WinButton("OK").Click @@ hightlight id_;_132034_;_script infofile_;_ZIP::ssf197.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions") @@ hightlight id_;_1836668_;_script infofile_;_ZIP::ssf183.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").WinButton("Print").Click
	Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").Check CheckPoint("Report Preview") @@ hightlight id_;_655642_;_script infofile_;_ZIP::ssf201.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Print").Click @@ hightlight id_;_328382_;_script infofile_;_ZIP::ssf202.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("*** Report Printed").Check CheckPoint("*** Report Printed") @@ hightlight id_;_590350_;_script infofile_;_ZIP::ssf203.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Close").Click @@ hightlight id_;_524840_;_script infofile_;_ZIP::ssf204.xml_;_
	Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
	For vi_actionrow = 1 TO vi_actionrows
		DataTable.GetSheet("Action1").SetCurrentRow(vi_actionrow)
		Window("Main Menu").Window("List Monthly Transactions").WinComboBox("ComboBox_3").Select DataTable("SortBy", dtLocalSheet) 
		Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
		Window("Main Menu").Window("List Monthly Transactions").WinButton("Print").Click
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").Check CheckPoint("Report Preview") @@ hightlight id_;_655642_;_script infofile_;_ZIP::ssf201.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Print").Click @@ hightlight id_;_328382_;_script infofile_;_ZIP::ssf202.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("*** Report Printed").Check CheckPoint("*** Report Printed") @@ hightlight id_;_590350_;_script infofile_;_ZIP::ssf203.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Window("Report Preview").WinButton("Close").Click @@ hightlight id_;_524840_;_script infofile_;_ZIP::ssf204.xml_;_
		Window("Main Menu").Window("List Monthly Transactions").Check CheckPoint("List Monthly Transactions")
	Next
Next @@ hightlight id_;_655642_;_script infofile_;_ZIP::ssf201.xml_;_
Window("Main Menu").Window("List Monthly Transactions").WinButton("Close").Click
Window("Main Menu").Check CheckPoint("Main Menu") @@ hightlight id_;_1836612_;_script infofile_;_ZIP::ssf184.xml_;_
Window("Main Menu").WinButton("Exit").Click
Window("Barclays Bank").WinButton("Close").Click