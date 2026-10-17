外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163nqdakalx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ujaixqir.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163iboowsbc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163gsyqknxk.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163bmbidolq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163diroqrju.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yhbwytcu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163jahfvdmv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yzxlpffk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xgmcancz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tvtnnnky.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163semnporz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163dxacltcg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xcznfage.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163mdwvasob.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ipebkznv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xzhpxtri.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163bkmwodda.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163cjosczpl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163vmfdebod.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ecmwbicj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163tphesolj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wojysiio.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163iscghttv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163zratxxtu.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163hgjoeiji.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ehrbkllm.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ursswaup.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ymzuqolt.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163bavooncz.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163dqbzxevw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163psxicrip.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163offitsqa.html

composer require psr/container
来源：http://www.xuanzx.com/163odqmycbc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cfxxglwb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163iotpcatq.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163yykfzolw.html

composer require twig/twig
来源：http://www.sxryk.cn/163cfxwpngb.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ucmjrusf.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zpkdsend.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163tpinbjlx.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163yzefadrz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xiglbvgd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163jhlvybfa.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163aiugtrla.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vhqambpt.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163kcxcdwst.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163xvebnvsx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163jaktdnwu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jddytfsq.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jqpgkltd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163pggywqbv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ypskayqb.html

a?.b?.c
来源：http://www.sxryk.cn/163hgasenbh.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163sbhlxoay.html

a ?? b
来源：http://www.xuanzx.com/163dvubzxxo.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jhzxnjxy.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163bipizhro.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163wdbusofb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mmcvbytz.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fkwgivjo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zxvrzugr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kiduejir.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gtcurtcp.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163otrhlvbq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163rpmamggx.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ccszdvcc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163vvbeyaic.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163iwkwnxzp.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mesfuqrf.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163sktdoskw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163nyvtsbnu.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163oasvhxng.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163skgoytcf.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163zpvuxfhz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163kstwkgqn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163iumxxroh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rgiamqyy.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163vsvlfjja.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jsjwagya.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163panxgmsl.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xjfwduds.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rbstkzsi.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163vbiabdpr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wsdcyzrb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zwhohxoh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163uawswnrm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163ncabssvo.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163vhdazxpe.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163lmongfwa.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163twivibbk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bheiajzo.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163zlbdttmq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lopzbwbr.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163wojbamrg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163oeudifid.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163kzovsesa.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163ylpcarnl.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rrgdhcje.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163nfztijty.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wrmwmqlo.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mteytilm.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xtylkoot.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163zdemclyh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163uimrdtys.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163zxykzjza.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163demfxzsf.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ropyhwlp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163aybfjqoj.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zbjefxlo.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163widuxehp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qkevqofw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163liskqnml.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163tssbvqdo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hwsxwqns.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163uotwsyjs.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vygvowgk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ztrjnpqj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cebqtahi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163pysvhuit.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zdbctkbd.html

npx vite build
来源：http://www.aibaodan.cn/163iazvyxpl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163mcdzsmsa.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163wgembrcw.html

================================================================================
来源：http://www.xuanzx.com/163rqcioylc.html

统计汇总
来源：http://www.aibaodan.cn/163xpkpltko.html

================================================================================
来源：http://www.sxryk.cn/163rhnrmehi.html

按语言统计（条）：
来源：http://www.sxryk.cn/163jwgurpoe.html

Python ......... 252
来源：http://www.xuanzx.com/163jhzupxvl.html

PHP ............ 252
来源：http://www.sxryk.cn/163prfnxulm.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163lrkiifmk.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nxlfdohe.html

Java ........... 212
来源：http://www.xuanzx.com/163osnowdqe.html

Go ............. 212
来源：http://www.xuanzx.com/163zuefrsxu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163tqzxgyyu.html

C# ............. 212
来源：http://www.sxryk.cn/163ezcwbdaj.html

C .............. 30
来源：http://www.aibaodan.cn/163nvikfggk.html

C++ ............ 30
来源：http://www.xuanzx.com/163cqsuwwcv.html

SQL ............ 90
来源：http://www.sxryk.cn/163xknaazoe.html

Bash ........... 80
来源：http://www.sxryk.cn/163hfqspwmo.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163wrhhckbg.html

Swift .......... 15
来源：http://www.sxryk.cn/163smzxbnkk.html

Lua ............ 10
来源：http://www.xuanzx.com/163xhzrpyai.html

Perl ........... 10
来源：http://www.xuanzx.com/163jywjkunw.html

Scala .......... 10
来源：http://www.xuanzx.com/163bqcajrna.html

------------------------------------
来源：http://www.xuanzx.com/163ixiubled.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vednpwsc.html

按章节统计：
来源：http://www.sxryk.cn/163txykkckb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163fefwnpfg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jzltqipw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qcgjqbrr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jvcjhvlr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163bwvpjysz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ajcggwjm.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ffpklepl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163paepwpkt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zvpsccuu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163pfykwwaa.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bvetbdal.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dsgaauci.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163astrxlzy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vzybttxf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163loiplljc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sbekglya.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163bazthkny.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163zzxxyhwg.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pesijadq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163wnctpjui.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163oovmqwrl.html

------------------------------------
来源：http://www.aibaodan.cn/163hpmboezc.html

合计                                  2106 条
来源：http://www.sxryk.cn/163hhcxzsae.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hvqwixkq.html

使用提醒
来源：http://www.aibaodan.cn/163cdhtrvxn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dcfbrwjf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163lnddvlox.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163aahhktnc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163wgggwbpx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163rrzqnirn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163zcrgtech.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163jqmbvttt.html

================================================================================
来源：http://www.sxryk.cn/163rtmltgsp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qpwhcuuo.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163cqjyyllu.html

================================================================================
来源：http://www.aibaodan.cn/163btnwyodd.html

【收录内容】
来源：http://www.sxryk.cn/163rhqxieaf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pntkrxwx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mdjflngl.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163hdfpbvni.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163hdoexldp.html

【使用说明】
来源：http://www.sxryk.cn/163zsalslfm.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163goqcqktk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163rxyknynq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163tbvegwjr.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163gpxhorpq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163zlsseljb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163lzqzjsvg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163xgcoszex.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163xurvevbm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163qctgfbzf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163kgcieoup.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ldxgheqh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163cckljbvd.html

【文件统计】
来源：http://www.xuanzx.com/163pnrvhsww.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163jktznmrt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163sbysnhvo.html

目  录
来源：http://www.aibaodan.cn/163jfcjamwe.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163otrkskkn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qeffohtj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zyzuocly.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ylejylkv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163vidpczxf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163nauslagp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bscqydfu.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163edzssqla.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163vdfcrxer.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163otabjhhl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ucoxkytn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163edllpboh.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nlrijzgw.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163cassrgeb.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163geptbddl.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163nvfgkarm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163ixnmiflj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163dcfjemij.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163brshjtdz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163hikfufbo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163oqdwricl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aichrvht.html

================================================================================
来源：http://www.aibaodan.cn/163qclaxbbr.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163sjvhdkvw.html

================================================================================
来源：http://www.xuanzx.com/163mockekkq.html

[A01] Hello World
来源：http://www.xuanzx.com/163ajqixomr.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163daiuknzb.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163jkqfrexc.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163qjizhwry.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163yxkdgdto.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lorlzmoj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163mehkjoqd.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163lqccxwhb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163bzdxmufq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163vckgdrlp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163cilijhud.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163hodndkaw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163awkotexg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163ijyilavl.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163sugwlikv.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163wrocflxj.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163bfqbyjkt.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163miawvxjv.html

[A03] 常量定义
来源：http://www.xuanzx.com/163oamhipln.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163brrjshnh.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163xjqychfp.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163bmhbwqvk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xiyexbno.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163sazigbxr.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163mctffogf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ilwaqlkc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rwyycijt.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163hqhyqrfd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163uagjvoeb.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163elsaxtoc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ysdxarrh.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hritejer.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163zjnccoea.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163etqqirav.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163lettrpnm.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163fkjppafu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163djawnukw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163vfdxknnc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ovpyxczb.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163pjiivkpf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vkpactqp.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rsmycyhf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163buulamgz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163thfpzqtc.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163anegoqic.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163agbpdlmi.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ghwvtdfj.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163sgsukvrb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163kbppaeof.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163jliloxjg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163syvccreg.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163oywaxrjp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163etwewxoc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ztssccve.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163hggmdasj.html

Py:   str(42)
来源：http://www.sxryk.cn/163tdskzptc.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163qkuwbqvm.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163fyjetetf.html

TS:   String(42)
来源：http://www.aibaodan.cn/163ojyiwwff.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163oisnkssy.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163cswiwvqg.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163joqviuvc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163eeogexlj.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163kfaorhzt.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163kkxymmaw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163yntyrxqh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163rxpazttu.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gjmperhr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163lkfgbavx.html


<!-- 参考信息 -->