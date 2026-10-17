外链999!wailian999！

[U65] PHP：会话
来源：http://www.sxryk.cn/163spjdwaif.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163baereoqe.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163fkruaqad.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163lzzerneh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qlvjapqq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163xjfplfzk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163bwbicnhq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163dvxpisrc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163grfghhgg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hjnczwhz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163lmrucdte.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jmaoisdk.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163oqitmbwb.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163yjgjroba.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ktrxsaux.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vumeyczq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163gdajqzcd.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qfijvzja.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163knxiztsn.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mndefdba.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mtuniben.html

composer require psr/container
来源：http://www.aibaodan.cn/163fyylfyjq.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163goagapbo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163yruewsye.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zqblvkfm.html

composer require twig/twig
来源：http://www.sxryk.cn/163lmfgojzq.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jehgwjwn.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163hhqzqnus.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163vojpesos.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163uhbjlrqo.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zmslfoef.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163grnipyjp.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zfrdlwgq.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163hzlntrdh.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fqfvfrjk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kdunjsfy.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163cqeghlju.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163qdsoucok.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tqalurbr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yqtomluy.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vxmwqeyj.html

a?.b?.c
来源：http://www.xuanzx.com/163fpvmhikt.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163cyginfmm.html

a ?? b
来源：http://www.sxryk.cn/163bdzvferf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wdyhmsoy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163noimsvqi.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163dzahoqqk.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163enfzaraf.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163urvzqwko.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163mlugbzpn.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163fhmzizae.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lkykukzu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163uuzuivhq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163fkasfchf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163wlwzwhgb.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163anznbnaq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163pihqposp.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ltvtjwus.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hwkrdxai.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163qpcpoxai.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163vwknmyzc.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163ohekerld.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163rkmljude.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163eerbdlwt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163swiyamaf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yolawmdt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163lsilcytm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163qosdmflz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163npdwxihr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163bstclnoz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163asxlxsvd.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163hkfpioxj.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163dfgnkldv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ztqvoygr.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163uvaxyssg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vyzqpqry.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ixntgntu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163xfrjljpk.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163qhqffvsr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163whrcgwyy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vvmntkvm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163yearunzy.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wqyvnjut.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163conpdhvd.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163xnjrfhjp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163qruxdtxw.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yxovmcaq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ggxasdlz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xxfhgrhd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tqafuezd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163zbxmjgzk.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wdwtxhar.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163doixmmkw.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163uwzyuwkn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163eazrvuzo.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163sblmkvlw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163guorxqgu.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ausfglhb.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163dhuztcoc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qugsqiio.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163fkiwdxhx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hzvxajef.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163zmyqtexw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ugldciyz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ztrzkdyg.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163feixgzya.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163tzbjjasw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uyvxitum.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zgiynvgy.html

npx vite build
来源：http://www.sxryk.cn/163btkuznbp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zqradrcg.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cfhwxqwk.html

================================================================================
来源：http://www.sxryk.cn/163zxentdyz.html

统计汇总
来源：http://www.xuanzx.com/163tkemgjlf.html

================================================================================
来源：http://www.xuanzx.com/163esizhdza.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ildeapnh.html

Python ......... 252
来源：http://www.xuanzx.com/163pbvaaxwa.html

PHP ............ 252
来源：http://www.aibaodan.cn/163tzevyfbr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wxskalxv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163bbanyjvg.html

Java ........... 212
来源：http://www.aibaodan.cn/163fwcryhqh.html

Go ............. 212
来源：http://www.xuanzx.com/163hghuqqmm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163zmcjxnzi.html

C# ............. 212
来源：http://www.sxryk.cn/163yvxqkpyh.html

C .............. 30
来源：http://www.xuanzx.com/163javzljix.html

C++ ............ 30
来源：http://www.sxryk.cn/163xchiwmng.html

SQL ............ 90
来源：http://www.xuanzx.com/163jedoytra.html

Bash ........... 80
来源：http://www.sxryk.cn/163sgjwermn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xmxelzqg.html

Swift .......... 15
来源：http://www.xuanzx.com/163aydlqnnz.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xvvemxvk.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vfvaokuj.html

Scala .......... 10
来源：http://www.sxryk.cn/163biyumwqw.html

------------------------------------
来源：http://www.sxryk.cn/163mpcdodot.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163gxhlesxp.html

按章节统计：
来源：http://www.xuanzx.com/163kuhzmijb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163oivwmmjb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gpchviel.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pivmmyfd.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163iowvnjtc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163raujthib.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kxqqiyhi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vlpolgux.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163flqaouvy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nojpgywb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ngucarwb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163aqfoeirq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xuunqsld.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163djarlfxp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dmrekjal.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163dnayixxy.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cvmxjywj.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pygxpgho.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ntrhyufz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jqmfvqww.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tylfzlvp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163bzziamor.html

------------------------------------
来源：http://www.xuanzx.com/163lbtpsvid.html

合计                                  2106 条
来源：http://www.xuanzx.com/163wjjfafjd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163iyvhmnbn.html

使用提醒
来源：http://www.sxryk.cn/163rnynntxc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mskqxdie.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163cmcbkpqy.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163nkdmqbzk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163uspdpbcp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163lebmcqqk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163iswofrfg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163woybbime.html

================================================================================
来源：http://www.sxryk.cn/163tminaylf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ibvvmdpf.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163swdanqgn.html

================================================================================
来源：http://www.xuanzx.com/163mlheoery.html

【收录内容】
来源：http://www.sxryk.cn/163xspmrlxi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163seyocdep.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163kdehburl.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163kqelquzy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163oaowhqqp.html

【使用说明】
来源：http://www.sxryk.cn/163bqmrumqx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ihntwcke.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163hwtwfkee.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ljfbovoy.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ueskospq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qhqxokea.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tatoigyk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163xunabxzw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163xoidycah.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ipmgsvmx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163haysxney.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ljtvpnzq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163mtyinfdx.html

【文件统计】
来源：http://www.aibaodan.cn/163ktyqksgg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163rdqdawnq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wejlmtwa.html

目  录
来源：http://www.xuanzx.com/163ytefpswd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163guzqzmgn.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163yywucoam.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hjnergtm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sufqcfyp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ooywjkuw.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163gmbefksw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163atnfmefy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wxjpkebi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qkbehvvo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qyceqzjn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hubtljsq.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lsmvzozu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163yurzmzwd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163epzuqfri.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ilexpize.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163jpyxzuls.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tkawxgmu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163fccxjsed.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163poztywzu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163eotaoral.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fsdnoqcm.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dksqzfwz.html

================================================================================
来源：http://www.aibaodan.cn/163sdbvwltt.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vjpbozyb.html

================================================================================
来源：http://www.aibaodan.cn/163vvcafhmg.html

[A01] Hello World
来源：http://www.sxryk.cn/163thyflobd.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lzjeguql.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163abmiygun.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163albetmyh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mjsmzjek.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163npvqecor.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163wureuyjl.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163qsnltuzo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163iejefima.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ehsoolbv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163hzlxqvzw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163urkhptvn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163inbcywuh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nedktbyc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163bwrznjlx.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ozoytzky.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163bsosbbfe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163qyysxfva.html

[A03] 常量定义
来源：http://www.sxryk.cn/163rturczdn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163xhlbyqjl.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163qwmdiptg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ztuaypha.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163zczvfqen.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ppfgnvlg.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qyokunvs.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163sfrfinqq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163yjmshrxz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163xtyimzkj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163uihoorsr.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163bhuqujnu.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163qbjphpfi.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ypfftrhk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qqbohgsp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163gbdhldqy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163owzgjeir.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163frqokflo.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mapfuldr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163drtxvupi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ujzjfypy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163vxsdpbck.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163chznqyke.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vycrrmzr.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163rucjwizb.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163qqztzenj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163foufkqji.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ihrdioiw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163bpmipner.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163fszxpsnn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hsepqhiv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163lbgqetbo.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163ealtltfd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163zwadnxaq.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163kqjazwzl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163zubdrtxl.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163mwyzfhje.html

Py:   str(42)
来源：http://www.sxryk.cn/163hxdfcbkf.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163zscziikh.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163aaolvvrq.html

TS:   String(42)
来源：http://www.sxryk.cn/163hwnxcedp.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ehtwcxqd.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163wcwvqgex.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163iwfqgyfj.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163zkuphawn.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163hlouqpym.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163udknwral.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163kvrwkwye.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ogswmwah.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ghwxgnxi.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163mqwdoaad.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163xkrkgcdx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163nlajyhzt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ldcfzmaf.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ducepqxu.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kshinyqy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163nuaovdqy.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163cpytcfrk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163penjjzcl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ysusivhx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163xrnuatns.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163wuwirxwf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163wsjmmxxf.html


<!-- 参考信息 -->