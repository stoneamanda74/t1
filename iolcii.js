外链999!wailian999！

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xuhfcqpk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163gmwbzobl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163xzyodmma.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qewfajgw.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163lfqhferi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ccmjsyui.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rqrodxif.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ypptaqdi.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163mdmxamid.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rawpeujb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163gnovjraf.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163khqdocqo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163lniokanq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ckgdizxv.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vwsioywg.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ddzpehya.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ftthxbhe.html

composer require psr/container
来源：http://www.aibaodan.cn/163rklafokg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163uqtozuvy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ronoicuq.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163beziyrnt.html

composer require twig/twig
来源：http://www.aibaodan.cn/163aylewrqo.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163gympqbxl.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163wpewsghz.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163zuiiazfu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163amydlflp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ezafxjrl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163pesifval.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163etbgltvq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ieeqoclx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163vmneviqe.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163nhzuelyv.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pzdyemdc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163sanmxwkl.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163pxuycvri.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qxjldijb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xjlvzhyi.html

a?.b?.c
来源：http://www.xuanzx.com/163fridhfen.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hcnydrvz.html

a ?? b
来源：http://www.xuanzx.com/163nnmmrhnp.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163nehmrhgo.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163bpihclnk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163kejptvfu.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163woaulvoi.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163rjlatkif.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163glsgrcab.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163sbzconwe.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dcbkjemf.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163rxqgzlop.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ituqpkbo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vdwihdtu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ldoqtttf.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tjacpous.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163hjakmhdo.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qlidahyz.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163liiimqee.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163mqodlfdi.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163exqebwyh.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mjdgtgsk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lsisynen.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163xvzssdem.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vmeyijzg.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kdgmwrpz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163thnzlqtu.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wmqjqula.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zamncjgq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ewtxouhx.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kjkumtvj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163yeyutcut.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163stmesoda.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163mtkmoeha.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163nzynfhjl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163pytqpfjp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163awzcsqzy.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vvzsylik.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vcnsgqre.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jgikxdrh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163pejhzbin.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163tppatdkh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163nymjjegf.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pwonbedd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163zhbljaxw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xyewdszt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ojitmbyo.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163awcnjsqs.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pedbqfaz.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ypqmfyrd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163emqihpuq.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163meznkqdn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ejbgryfc.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163aohhwlmp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163uxiheuub.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163rrgoxuvr.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163eyrqrdqi.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gsbpqbxo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163omsxhhwe.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163hvhxovnm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vstanlgr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ofjpsxqn.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tugcaamn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qhurtuvh.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163zpgiortv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163xusxiqrl.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rvrchfbb.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163bzvjyzav.html

npx vite build
来源：http://www.sxryk.cn/163bhqnlhdj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163hbrxkbpo.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163aqxnjxky.html

================================================================================
来源：http://www.sxryk.cn/163ylmnhzjr.html

统计汇总
来源：http://www.aibaodan.cn/163ziysvtau.html

================================================================================
来源：http://www.xuanzx.com/163tckeoyyy.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163agnidkll.html

Python ......... 252
来源：http://www.aibaodan.cn/163kpxoqkph.html

PHP ............ 252
来源：http://www.xuanzx.com/163psljassb.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163otfijaxe.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163iazzyzmh.html

Java ........... 212
来源：http://www.aibaodan.cn/163hehxzsra.html

Go ............. 212
来源：http://www.aibaodan.cn/163pvtxsgok.html

Ruby ........... 212
来源：http://www.xuanzx.com/163wjadkklg.html

C# ............. 212
来源：http://www.xuanzx.com/163zuaohqnp.html

C .............. 30
来源：http://www.xuanzx.com/163qtlexofd.html

C++ ............ 30
来源：http://www.xuanzx.com/163nceotcru.html

SQL ............ 90
来源：http://www.sxryk.cn/163bztjzckk.html

Bash ........... 80
来源：http://www.sxryk.cn/163ubhrkdcr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163qqgnotni.html

Swift .......... 15
来源：http://www.xuanzx.com/163mdduvcfb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163yjglchkn.html

Perl ........... 10
来源：http://www.sxryk.cn/163embtahvt.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zxjesdhn.html

------------------------------------
来源：http://www.sxryk.cn/163wvyxcnnm.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ugawnjmu.html

按章节统计：
来源：http://www.sxryk.cn/163fhdvovxc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rvkpnpee.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mphpgflw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xvekceml.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ruhbxuym.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163rymvqubp.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163szjmyumc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eyluxhem.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163flcbkqhm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ptutoxta.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xmpepqfc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cpvpkpls.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163arloypts.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163oayplqfh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nyffkjsi.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163xjyvpvrk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163loldckqr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163zfkakfkx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cwkpufck.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163hmxuiwek.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163wvnzblzb.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163yyoyjecw.html

------------------------------------
来源：http://www.sxryk.cn/163unylgmmn.html

合计                                  2106 条
来源：http://www.xuanzx.com/163voehlffw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jzxlhbrd.html

使用提醒
来源：http://www.xuanzx.com/163yrbxsatq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iqxsyxsh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163nsjqhwdl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163josxqdaq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163elybfisu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163xmfudyht.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163wiznavul.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163zwozmdev.html

================================================================================
来源：http://www.sxryk.cn/163ettjtrtd.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163eioekoyh.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163uzgxflgl.html

================================================================================
来源：http://www.aibaodan.cn/163gnuhmxsa.html

【收录内容】
来源：http://www.xuanzx.com/163izupxjry.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163sdmsynze.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163gtjwgdon.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163xygsqbok.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163hgibcfcx.html

【使用说明】
来源：http://www.xuanzx.com/163amadmkjb.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mptqsjqi.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163nofsoqsn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ymdokhdj.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ckskzxee.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ceourfpe.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163iwysdjmk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hbtrnjus.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163tysasfbm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163khdqwyvo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163feuebpbu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163qpvxihuk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ibnyqcwn.html

【文件统计】
来源：http://www.xuanzx.com/163hbqzvwle.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163tivraqkf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163broxooqi.html

目  录
来源：http://www.aibaodan.cn/163guxqkffq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qrngjpjk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qzigclbx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bfuowfks.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163xthfguac.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ahbkdefz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163pzfgmkbj.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163jdjetdjk.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gdbftaqi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163oerdgfai.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ttervgrk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mzywxaaz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lptzfpwn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xwvqvadz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bualbong.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163rvqionju.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163jidspclu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kndacnsx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163ucfwhzzc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163kvhqdubm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ieijcrfk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cipzjaox.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tlpntkhb.html

================================================================================
来源：http://www.aibaodan.cn/163igpwojug.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163banhzgwq.html

================================================================================
来源：http://www.aibaodan.cn/163xnprpcrn.html

[A01] Hello World
来源：http://www.xuanzx.com/163phpsdcqc.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163tyrgcgda.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163pdfdssfb.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ekvmvkue.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163gjfnxtbu.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163swaulmbq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163rucunomp.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wfdmchqv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ilokhvob.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ssrqvabo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163cvpqilaw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163mbuwvoey.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163dxgtuknt.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vzcvgmmd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bvmalxpl.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163xhdnkiww.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ceqvskke.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yzfgpznt.html

[A03] 常量定义
来源：http://www.xuanzx.com/163izgawnne.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ybeycemx.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163kixkblte.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163eoxymhjf.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163kfthgkxi.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163hkucuspv.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163dlsbzpax.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163aebiclbw.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ekhpwclg.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163nqfarxcm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163rdfdniok.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163udyrpwkm.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163olnirbxl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163xlpknrly.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163rhnspkkn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163jqlwrpur.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163aqomuysu.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dmonlkpl.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163xxpdceod.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163lkndcwwd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163lsmvjiya.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nslgtqwi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163kcwdrrla.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163tbxcurjl.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163nqjxrzsm.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lderpney.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cgskxzoh.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ftphopsw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rrrziuqy.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163bmectjqc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163fnwzajvh.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163roixwstq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163grtqnfws.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163jxrngcne.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163pdagftrp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ldcefhtr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mbhxspnx.html

Py:   str(42)
来源：http://www.sxryk.cn/163dwlplkon.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163ynfotcxh.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163veamzpjj.html

TS:   String(42)
来源：http://www.xuanzx.com/163smbtvxxu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hxlqcsfr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163jganbkni.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163qdixnkzo.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163idygxcxf.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ylijkxql.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163flkkpjyf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163lwsnbsfm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163xkckkbrx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163zhmlfhis.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ysttzubm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163qxaemgst.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163aleppnmm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163ujxmgshn.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163yetynzkk.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pbijuugj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163bctfnwnj.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163dbzryruk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163kjxhhuca.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163iudtycau.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163caoqbtsn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163dkttmldl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163kvhomggw.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163gmhvxfnr.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163tcxkldcv.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163dbonazxv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fycztmks.html


<!-- 参考信息 -->