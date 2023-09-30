"use strict";(self.webpackChunkdatavines_website=self.webpackChunkdatavines_website||[]).push([[710],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),g=a,m=s["".concat(c,".").concat(g)]||s[g]||d[g]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={id:"connector-develop",title:"\u6570\u636e\u6e90\u5f00\u53d1"},l=void 0,i={unversionedId:"development/plugin/connector-develop",id:"development/plugin/connector-develop",title:"\u6570\u636e\u6e90\u5f00\u53d1",description:"Connector \u662f Datavines \u4e2d\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\uff0c\u4e00\u4e2a Connector \u8868\u793a\u4e00\u4e2a\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u8fde\u63a5\u6570\u636e\u6e90\u3002Metric \u91c7\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u5b9e\u73b0\u4e00\u4e2a Connector\u3002\u4e0b\u9762\u6211\u4eec\u6765\u8be6\u7ec6\u8bb2\u89e3\u4e00\u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49Connector\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-development/04-plugin/02-connector-develop.md",sourceDirName:"06-development/04-plugin",slug:"/development/plugin/connector-develop",permalink:"/datavines-website/zh-CN/docs/development/plugin/connector-develop",draft:!1,editUrl:"https://github.com/datavane/datavines-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-development/04-plugin/02-connector-develop.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"connector-develop",title:"\u6570\u636e\u6e90\u5f00\u53d1"},sidebar:"tutorialSidebar",previous:{title:"\u68c0\u67e5\u89c4\u5219\u5f00\u53d1",permalink:"/datavines-website/zh-CN/docs/development/plugin/metric-develop"},next:{title:"\u6267\u884c\u5f15\u64ce\u5f00\u53d1",permalink:"/datavines-website/zh-CN/docs/development/plugin/engine-develop"}},c={},u=[{value:"\u7b2c\u4e00\u6b65",id:"\u7b2c\u4e00\u6b65",level:3},{value:"ConnectorFactory \u63a5\u53e3",id:"connectorfactory-\u63a5\u53e3",level:4},{value:"Connector \u63a5\u53e3",id:"connector-\u63a5\u53e3",level:4},{value:"Executor \u63a5\u53e3",id:"executor-\u63a5\u53e3",level:4},{value:"Dialect \u63a5\u53e3",id:"dialect-\u63a5\u53e3",level:4},{value:"ConnectorParameterConverter \u63a5\u53e3",id:"connectorparameterconverter-\u63a5\u53e3",level:4},{value:"TypeConverter \u63a5\u53e3",id:"typeconverter-\u63a5\u53e3",level:4},{value:"ConfigBuilder \u63a5\u53e3",id:"configbuilder-\u63a5\u53e3",level:4},{value:"datavines-connector-jdbc \u6a21\u5757",id:"datavines-connector-jdbc-\u6a21\u5757",level:4},{value:"\u7b2c\u4e8c\u6b65",id:"\u7b2c\u4e8c\u6b65",level:3},{value:"\u57fa\u7840\u5de5\u4f5c",id:"\u57fa\u7840\u5de5\u4f5c",level:4},{value:"\u4ee5 MySQL Connector \u4e3a\u4f8b\u6765\u8bb2\u89e3",id:"\u4ee5-mysql-connector-\u4e3a\u4f8b\u6765\u8bb2\u89e3",level:4},{value:"\u7b2c\u4e09\u6b65",id:"\u7b2c\u4e09\u6b65",level:3},{value:"\u7b2c\u56db\u6b65",id:"\u7b2c\u56db\u6b65",level:3}],p={toc:u};function s(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Connector \u662f Datavines \u4e2d\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\uff0c\u4e00\u4e2a Connector \u8868\u793a\u4e00\u4e2a\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u8fde\u63a5\u6570\u636e\u6e90\u3002Metric \u91c7\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6765\u5b9e\u73b0\u4e00\u4e2a Connector\u3002\u4e0b\u9762\u6211\u4eec\u6765\u8be6\u7ec6\u8bb2\u89e3\u4e00\u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"\u3002"),(0,a.kt)("h3",{id:"\u7b2c\u4e00\u6b65"},"\u7b2c\u4e00\u6b65"),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u4e86\u89e3\u4e0b\u51e0\u4e2a\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\uff0c\u5b83\u4eec\u662f\u5b9e\u73b0\u81ea\u5b9a\u4e49 Connector \u7684\u5173\u952e\u3002"),(0,a.kt)("h4",{id:"connectorfactory-\u63a5\u53e3"},"ConnectorFactory \u63a5\u53e3"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ConnectorFactory"),"\u63a5\u53e3\u4e2d\u5b9a\u4e49\u4e86 Connector \u9700\u8981\u7684Connector\u3001Executor\u3001Dialect\u3001TypeConverter\u7b49\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@SPI\npublic interface ConnectorFactory {\n\n    String getCategory();\n\n    Connector getConnector();\n\n    ResponseConverter getResponseConverter();\n\n    Dialect getDialect();\n\n    ConnectorParameterConverter getConnectorParameterConverter();\n\n    Executor getExecutor();\n\n    TypeConverter getTypeConverter();\n}\n")),(0,a.kt)("h4",{id:"connector-\u63a5\u53e3"},"Connector \u63a5\u53e3"),(0,a.kt)("p",null,"Connector \u63a5\u53e3\u4e2d\u4e3b\u8981\u5b9a\u4e49\u4e86\u83b7\u53d6\u6570\u636e\u6e90\u4e2d\u6570\u636e\u5e93\u3001\u8868\u548c\u5217\u3001\u6d4b\u8bd5\u94fe\u63a5\u3001\u914d\u7f6e\u53c2\u6570\u548c\u5173\u952e\u5c5e\u6027\u7b49\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public interface Connector {\n\n    default ConnectorResponse getDatabases(GetDatabasesRequestParam param) throws SQLException {\n        return null;\n    }\n\n    default ConnectorResponse getTables(GetTablesRequestParam param) throws SQLException {\n        return null;\n    }\n\n    default ConnectorResponse getColumns(GetColumnsRequestParam param) throws SQLException {\n        return null;\n    }\n\n    default ConnectorResponse getPartitions(ConnectorRequestParam param) {\n        return null;\n    }\n\n    default String getConfigJson(boolean isEn) {\n        return null;\n    }\n\n    default ConnectorResponse testConnect(TestConnectionRequestParam param) {\n        return null;\n    }\n\n    List<String> keyProperties();\n}\n")),(0,a.kt)("h4",{id:"executor-\u63a5\u53e3"},"Executor \u63a5\u53e3"),(0,a.kt)("p",null,"Executor \u63a5\u53e3\u4e2d\u4e3b\u8981\u5b9a\u4e49\u6267\u884c\u6570\u636e\u67e5\u8be2\u7684\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public interface Connector {\n\n    default ConnectorResponse queryForPage(ExecuteRequestParam param) throws Exception {\n        return null;\n    }\n\n    default ConnectorResponse queryForList(ExecuteRequestParam param) throws Exception {\n        return null;\n    }\n\n    default ConnectorResponse queryForOne(ExecuteRequestParam param) throws Exception {\n        return null;\n    }\n\n    default ConnectorResponse deleteData(ExecuteRequestParam param) throws Exception {\n        return null;\n    }\n}\n")),(0,a.kt)("h4",{id:"dialect-\u63a5\u53e3"},"Dialect \u63a5\u53e3"),(0,a.kt)("p",null,"Dialect \u63a5\u53e3\u4e2d\u5b9a\u4e49\u4e86\u6570\u636e\u6e90\u7684\u5404\u79cd\u65b9\u8a00\u3001\u67e5\u8be2\u811a\u672c\u548c\u652f\u6301\u7684\u7279\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public interface Dialect {\n\n    String getDriver();\n\n    String getColumnPrefix();\n\n    String getColumnSuffix();\n\n    default Map<String,String> getDialectKeyMap() {\n        return new HashMap<>();\n    }\n\n    List<String> getExcludeDatabases();\n\n    default String invalidateItemCanOutput(){\n        return "true";\n    }\n\n    default String invalidateItemCanOutputToSelf(){\n        return "false";\n    }\n\n    default boolean supportToBeErrorDataStorage(){\n        return false;\n    }\n\n    default String getJDBCType(DataType dataType){\n        return dataType.toString();\n    }\n\n    default DataType getDataType(String jdbcType) {\n        return DataType.valueOf(jdbcType);\n    }\n\n    default String quoteIdentifier(String column) {\n        return "`" + column + "`";\n    }\n\n    default String getTableExistsQuery(String table) {\n        return String.format("SELECT * FROM %s WHERE 1=0", table);\n    }\n\n    default String getSchemaQuery(String table) {\n        return String.format("SELECT * FROM %s WHERE 1=0", table);\n    }\n\n    default String getCountQuery(String table) {\n        return String.format("SELECT COUNT(1) FROM %s", table);\n    }\n\n    default String getSelectQuery(String table) {\n        return String.format("SELECT * FROM %s", table);\n    }\n\n    default String getCreateTableAsSelectStatement(String srcTable, String targetDatabase, String targetTable) {\n        return String.format("CREATE TABLE %s.%s AS SELECT * FROM %s", quoteIdentifier(targetDatabase), quoteIdentifier(targetTable), quoteIdentifier(srcTable));\n    }\n\n    default String getCreateTableStatement(String table, List<StructField> fields, TypeConverter typeConverter) {\n        if (CollectionUtils.isNotEmpty(fields)) {\n            String columns = fields.stream().map(field -> {\n                return quoteIdentifier(field.getName()) + " " + typeConverter.convertToOriginType(field.getDataType());\n            }).collect(Collectors.joining(","));\n\n            return String.format("CREATE TABLE IF NOT EXISTS %s (%s)", table, columns);\n        }\n\n        return "";\n    }\n\n    default String getInsertAsSelectStatement(String srcTable, String targetDatabase, String targetTable) {\n        return String.format("INSERT INTO %s.%s SELECT * FROM %s", quoteIdentifier(targetDatabase), quoteIdentifier(targetTable), quoteIdentifier(srcTable));\n    }\n\n    String getErrorDataScript(Map<String, String> configMap);\n\n    String getValidateResultDataScript(Map<String, String> configMap);\n}\n\n')),(0,a.kt)("h4",{id:"connectorparameterconverter-\u63a5\u53e3"},"ConnectorParameterConverter \u63a5\u53e3"),(0,a.kt)("p",null,"ConnectorParameterConverter \u63a5\u53e3\u8d1f\u8d23\u5bf9\u8f93\u5165\u7684\u53c2\u6570\u8fdb\u884c\u8f6c\u6362\uff0c\u8f6c\u6362\u6210\u7b26\u5408\u5f15\u64ce\u6267\u884c\u7684\u683c\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public interface ConnectorParameterConverter {\n\n    Map<String,Object> converter(Map<String,Object> parameter);\n\n    default String getConnectorUUID(Map<String,Object> parameter) {\n        Map<String, Object> convertResult = converter(parameter);\n        return DigestUtils.md5Hex(\n                String.valueOf(convertResult.get(URL)) +\n                convertResult.get(TABLE) +\n                convertResult.get(USER) +\n                convertResult.get(PASSWORD));\n    }\n}\n")),(0,a.kt)("h4",{id:"typeconverter-\u63a5\u53e3"},"TypeConverter \u63a5\u53e3"),(0,a.kt)("p",null,"TypeConverter \u63a5\u53e3\u5b9a\u4e49\u6570\u636e\u6e90\u4e2d\u7684\u5b57\u6bb5\u7c7b\u578b\u8f6c\u6362\u65b9\u6cd5\uff0c\u652f\u6301\u5c06\u539f\u59cb\u7c7b\u578b\u4e0e\u7cfb\u7edf\u7c7b\u578b\u7684\u4e92\u76f8\u8f6c\u6362\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public interface TypeConverter {\n\n    DataType convert(String originType);\n\n    String convertToOriginType(DataType dataType);\n}\n")),(0,a.kt)("h4",{id:"configbuilder-\u63a5\u53e3"},"ConfigBuilder \u63a5\u53e3"),(0,a.kt)("p",null,"ConfigBuilder \u63a5\u53e3\u5b9a\u4e49\u4e86\u8fde\u63a5\u5668\u914d\u7f6e\u53c2\u6570\u7684\u6784\u9020\uff0c\u7528\u4e8e\u8fd4\u56de\u7ed9\u7ed9\u524d\u7aef\u8fdb\u884c\u5c55\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"public interface ConfigBuilder {\n\n    String build(boolean isEn);\n}\n")),(0,a.kt)("h4",{id:"datavines-connector-jdbc-\u6a21\u5757"},"datavines-connector-jdbc \u6a21\u5757"),(0,a.kt)("p",null,"datavines-connector-jdbc \u6a21\u5757\u662f JDBC \u7c7b\u578b\u6570\u636e\u6e90\u7684\u57fa\u7840\u5b9e\u73b0\uff0c\u5b9e\u73b0\u4e86 JDBC \u7c7b\u578b \u7684 Connector \u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u5982\u679c\u8981\u65b0\u589e\u4e00\u4e2a JDBC \u7c7b\u578b\u7684 Connector\uff0c\u5f15\u5165\u8be5\u6a21\u5757\u518d\u505a\u4e00\u4e9b\u4fee\u6539\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u7b2c\u4e8c\u6b65"},"\u7b2c\u4e8c\u6b65"),(0,a.kt)("p",null,"\u4e86\u89e3\u5b8c\u4e0a\u9762\u7684\u63a5\u53e3\u548c datavines-connector-jdbc \u6a21\u5757\u4ee5\u540e\uff0c\u81ea\u5b9a\u4e49\u4e00\u4e2aJDBC\u7c7b\u578b \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),"\u5c31\u53d8\u5f97\u683c\u5916\u7b80\u5355\u4e86\u3002"),(0,a.kt)("h4",{id:"\u57fa\u7840\u5de5\u4f5c"},"\u57fa\u7840\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5728 datavines-connector-plugins \u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0 Connector \u7684 module"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"plugin_develop_connector_module",src:t(5367).Z,width:"498",height:"510"})),(0,a.kt)("p",null,"\u5728 pom.xml \u4e2d\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>io.datavines</groupId>\n    <artifactId>datavines-connector-jdbc</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("h4",{id:"\u4ee5-mysql-connector-\u4e3a\u4f8b\u6765\u8bb2\u89e3"},"\u4ee5 MySQL Connector \u4e3a\u4f8b\u6765\u8bb2\u89e3"),(0,a.kt)("p",null,"\u65b0\u589e\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC"),"\u7c7b\u578b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Connector")," \u53ef\u4ee5\u7ee7\u627f datavines-connector-jdbc \u6a21\u5757\u4e2d\u7684\u5404\u79cd\u5b9e\u73b0\u7c7b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlConfigBuilder \u7ee7\u627f JdbcConfigBuilder\uff0c\u5bf9 getPropertiesInput \u8fdb\u884c\u91cd\u5199\uff0c\u8fd9\u91cc\u91cd\u5199\u7684\u76ee\u7684\u662f\u589e\u52a0\u4e00\u4e9b\u8fde\u63a5\u6570\u636e\u6e90\u7684\u914d\u7f6e\uff0c\u5982\u679c\u4e0d\u9700\u8981\u5219\u65e0\u9700\u91cd\u5199\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MysqlConfigBuilder extends JdbcConfigBuilder {\n\n    @Override\n    protected InputParam getPropertiesInput(boolean isEn) {\n        return getInputParam("properties",\n                isEn ? "properties" : "\u53c2\u6570",\n                isEn ? "please enter properties,like key=value&key1=value1" : "\u8bf7\u586b\u5165\u53c2\u6570\uff0c\u683c\u5f0f\u4e3akey=value&key1=value1", 2, null,\n                "useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai");\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlDataSourceInfo \u7ee7\u627f BaseJdbcDataSourceInfo\uff0c\u4e3b\u8981\u662f\u5b9e\u73b0\u6570\u636e\u6e90\u7684\u8fde\u63a5URL\u3001Driver\u7b49\u65b9\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MysqlDataSourceInfo extends BaseJdbcDataSourceInfo {\n\n    public MysqlDataSourceInfo(JdbcConnectionInfo jdbcConnectionInfo) {\n        super(jdbcConnectionInfo);\n    }\n\n    @Override\n    public String getAddress() {\n        return "jdbc:mysql://"+getHost()+":"+getPort();\n    }\n\n    @Override\n    public String getDriverClass() {\n        return "com.mysql.cj.jdbc.Driver";\n    }\n\n    @Override\n    public String getType() {\n        return "mysql";\n    }\n\n    @Override\n    protected String getSeparator() {\n        return "?";\n    }\n\n    @Override\n    protected String filterProperties(String other){\n        return other;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlConnector \u7ee7\u627f JdbcConnector\uff0c JdbcConnector\u91cc\u9762\u5df2\u7ecf\u9ed8\u8ba4\u5b9e\u73b0\u4e86\u83b7\u53d6\u6570\u636e\u5e93\u5217\u8868\u3001\u8868\u5217\u8868\u3001\u5217\u5217\u8868\u3001\u6d4b\u8bd5\u8fde\u63a5\u7b49\u63a5\u53e3\uff0c\u4e0d\u540c\u7684\u6570\u636e\u6e90\u5728\u901a\u8fc7 jdbc \u8fde\u63a5\u65f6\u8981\u4f20\u7ed9 DatabaseMetaData \u7684\u53c2\u6570\u53ef\u80fd\u90fd\u4e0d\u592a\u4e00\u6837\uff0c\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u53bb\u5b9e\u73b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MysqlConnector extends JdbcConnector {\n\n    @Override\n    public BaseJdbcDataSourceInfo getDatasourceInfo(JdbcConnectionInfo jdbcConnectionInfo) {\n        return new MysqlDataSourceInfo(jdbcConnectionInfo);\n    }\n\n    @Override\n    public ResultSet getMetadataColumns(DatabaseMetaData metaData, String catalog, String schema, String tableName, String columnName) throws SQLException {\n        return metaData.getColumns(schema, null, tableName, columnName);\n    }\n\n    @Override\n    public ResultSet getMetadataTables(DatabaseMetaData metaData, String catalog, String schema) throws SQLException {\n        return metaData.getTables(schema, null, null, TABLE_TYPES);\n    }\n\n    @Override\n    public ResultSet getMetadataDatabases(Connection connection) throws SQLException {\n        DatabaseMetaData metaData = connection.getMetaData();\n        return metaData.getCatalogs();\n    }\n    \n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlConnectorParameterConverter \u7ee7\u627f JdbcConnectorParameterConverter\uff0c \u8be5\u63a5\u53e3\u5df2\u7ecf\u9ed8\u8ba4\u4e86\u53c2\u6570\u7684\u683c\u5f0f\u5316\u8f6c\u6362\uff0c\u53ea\u9700\u8981\u5bf9URL\u7684\u6784\u9020\u505a\u4e2a\u6027\u5316\u7684\u5b9e\u73b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MysqlConnectorParameterConverter extends JdbcConnectorParameterConverter {\n\n    @Override\n    protected String getUrl(Map<String, Object> parameter) {\n        String url = String.format("jdbc:mysql://%s:%s/%s",\n                parameter.get(HOST),\n                parameter.get(PORT),\n                parameter.get(DATABASE));\n        String properties = (String)parameter.get(PROPERTIES);\n        if (StringUtils.isNotEmpty(properties)) {\n            url += "?" + properties;\n        }\n\n        return url;\n    }\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlDialect \u7ee7\u627f JdbcDialect\uff0c \u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u6e90\u7684\u65b9\u8a00\u505a\u4e00\u4e9b\u4e2a\u6027\u5316\u5b9e\u73b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MysqlDialect extends JdbcDialect {\n\n    @Override\n    public Map<String, String> getDialectKeyMap() {\n        super.getDialectKeyMap();\n        dialectKeyMap.put(STRING_TYPE, "char");\n        return dialectKeyMap;\n    }\n\n    @Override\n    public String getDriver() {\n        return "com.mysql.cj.jdbc.Driver";\n    }\n\n    @Override\n    public String invalidateItemCanOutputToSelf() {\n        return "true";\n    }\n\n    @Override\n    public boolean supportToBeErrorDataStorage() {\n        return true;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa MysqlExecutor \u7ee7\u627f BaseJdbcExecutor\uff0c BaseJdbcExecutor\u4e2d\u5df2\u7ecf\u5b9e\u73b0\u4e86\u5404\u79cd\u6570\u636e\u67e5\u8be2\u7684\u63a5\u53e3\uff0c\u5982\u679c\u6570\u636e\u6e90\u5b58\u5728\u7279\u6b8a\u7684\u67e5\u8be2\u903b\u8f91\uff0c\u53ef\u8fdb\u884c\u91cd\u5199\u6765\u5b9e\u73b0\u81ea\u6709\u7684\u67e5\u8be2\u903b\u8f91\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MysqlExecutor extends BaseJdbcExecutor {\n\n    @Override\n    public BaseJdbcDataSourceInfo getDatasourceInfo(JdbcConnectionInfo jdbcConnectionInfo) {\n        return new MysqlDataSourceInfo(jdbcConnectionInfo);\n    }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u521b\u5efa MysqlConnectorFactory \u7ee7\u627f AbstractJdbcConnectorFactory\uff0c\u5c06\u4e0a\u9762\u7684\u5b9e\u73b0\u7c7b\u901a\u8fc7 Factory \u63a5\u53e3\u8fdb\u884c\u5b9e\u4f8b\u6784\u9020\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MysqlConnectorFactory extends AbstractJdbcConnectorFactory {\n\n    @Override\n    public ConnectorParameterConverter getConnectorParameterConverter() {\n        return new MysqlConnectorParameterConverter();\n    }\n\n    @Override\n    public Dialect getDialect() {\n        return new MysqlDialect();\n    }\n\n    @Override\n    public Connector getConnector() {\n        return new MysqlConnector();\n    }\n\n    @Override\n    public Executor getExecutor() {\n        return new MysqlExecutor();\n    }\n\n    @Override\n    public ConfigBuilder getConfigBuilder() {\n        return new MysqlConfigBuilder();\n    }\n}\n\n")),(0,a.kt)("h3",{id:"\u7b2c\u4e09\u6b65"},"\u7b2c\u4e09\u6b65"),(0,a.kt)("p",null,"\u975e\u5e38\u91cd\u8981\u7684\u4e00\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 resources \u76ee\u5f55\u4e0b\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"META-INF"),"\u76ee\u5f55\uff0c\u518d\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"li"},"plugins"),"\u76ee\u5f55\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 plugins \u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5e76\u4e14\u547d\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"io.datavines.connector.api.ConnectorFactory"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u6587\u4ef6\u4e2d\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"mysql=io.datavines.connector.plugin.MysqlConnectorFactory"),"\u3002")),(0,a.kt)("h3",{id:"\u7b2c\u56db\u6b65"},"\u7b2c\u56db\u6b65"),(0,a.kt)("p",null,"\u6253\u5305\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"jar"),"\u653e\u5230 datavines \u76ee\u5f55\u4e0b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"libs"),"\u76ee\u5f55\u4e0b\uff0c\u91cd\u542f\u670d\u52a1\u5373\u53ef\u3002"))}s.isMDXComponent=!0},5367:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plugin_develop_connector_module-286b79f34e2e8bab306bff7e52da6852.png"}}]);