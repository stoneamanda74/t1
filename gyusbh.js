外链999!wailian999！

[U65] PHP：会话
来源：http://www.aibaodan.cn/163umqadmer.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yglvbsus.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163fktrlmlo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xfazdple.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163uaanqsqd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rortsmvq.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vvtgkpeh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mmwqsyrf.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vkniiwjm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163avhilzsx.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qepdwmqn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163oqzrcitp.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163jkzlbewc.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163shtdvbtt.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163crfzwhuw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163amgzsaxs.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xidhhkog.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163aqcqpkdx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xrdjxugn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vqptzxyv.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163qmuahuic.html

composer require psr/container
来源：http://www.sxryk.cn/163mnvdbuym.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163oxmkpckr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ztufoess.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163nwvdwnhk.html

composer require twig/twig
来源：http://www.sxryk.cn/163crhgtcqt.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163zsozanuc.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163euzwumdv.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xxckwqgj.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163dcchqaue.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yvbrnvih.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163rdvsbwtt.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wmyevlfe.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163hjqrzczd.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yvgcuerv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163bnmxirnk.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163kggnnmgg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163wuuwntvl.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fxiqsgsx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163lluwwbin.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163knhvvlah.html

a?.b?.c
来源：http://www.xuanzx.com/163arbfypav.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ugapqmzc.html

a ?? b
来源：http://www.xuanzx.com/163aiqauuhy.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163fkneozfk.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163efqdnhrg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hvvanrng.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xoaewviu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163afgmbabu.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163eztxlosa.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xvqchbvy.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rgwqnhfi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163oqxisobp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bfsqqcku.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163pbqpehwm.html

structuredClone(obj)
来源：http://www.sxryk.cn/163nfackbtw.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hawzjfdt.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163tpvdcuao.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163iozkbhmr.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163hguuvzfa.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163wwonuepa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163phasikwq.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163bsewhwox.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163egpikgxr.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ckpqtnso.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qcpbpafw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ghnepvoj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163zbbzmqjl.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oaevohdx.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163smvzohco.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ltemecuo.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163slglalrk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hhawgmhn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163cupxvfvf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163knffhxxo.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ngayeeht.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163zbdnwrxt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163khaudwkq.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163lwupjees.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hxdqoucb.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fzspeuba.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163jvxuljif.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163uicolnpn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163epcuzkfy.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163yaorbwle.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xrhxxejm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163deypvlvv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tqaacdef.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163rjicaotg.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tvmratdr.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kmrxjqdp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163slxxrnco.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fiytzvnq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163dzwouttk.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163zhgvprad.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163gwrlojmh.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gemfhmjf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tvysrzuu.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nteacray.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ouerppkj.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163oizrvkmh.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163wabtcdgl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ajjvwije.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qpcrvnde.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163jpafcmxh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gyimtvcw.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vqkaejry.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163vamzwdzq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ttbazysa.html

npx vite build
来源：http://www.sxryk.cn/163iisvzzdu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bqrcwyre.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163emsgbihq.html

================================================================================
来源：http://www.xuanzx.com/163towtdwgw.html

统计汇总
来源：http://www.sxryk.cn/163nuqqnjbc.html

================================================================================
来源：http://www.aibaodan.cn/163oveibjow.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fmxfmcjz.html

Python ......... 252
来源：http://www.xuanzx.com/163ubpxadjc.html

PHP ............ 252
来源：http://www.xuanzx.com/163vkkfjglk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gmplzuwg.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ololrvvz.html

Java ........... 212
来源：http://www.xuanzx.com/163xcaaymyn.html

Go ............. 212
来源：http://www.xuanzx.com/163jkfkuljq.html

Ruby ........... 212
来源：http://www.sxryk.cn/163dalkjfzy.html

C# ............. 212
来源：http://www.aibaodan.cn/163htudnrzu.html

C .............. 30
来源：http://www.sxryk.cn/163rbbcjbby.html

C++ ............ 30
来源：http://www.xuanzx.com/163cbxnkyup.html

SQL ............ 90
来源：http://www.sxryk.cn/163ojruqtnr.html

Bash ........... 80
来源：http://www.sxryk.cn/163fufdwklt.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163kkwxlegd.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vaprnxhj.html

Lua ............ 10
来源：http://www.aibaodan.cn/163mjdfqqzd.html

Perl ........... 10
来源：http://www.xuanzx.com/163ipqytzly.html

Scala .......... 10
来源：http://www.xuanzx.com/163ddbmawgb.html

------------------------------------
来源：http://www.sxryk.cn/163djummujj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163figcwefa.html

按章节统计：
来源：http://www.xuanzx.com/163mpowpwyy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mfqtgijd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tltdnfnj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163yjnxivpv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163flktsutk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163kipwhcgx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cfyfjujv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mqjlulwx.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xclmdwmq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nmjljois.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ysscbucx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163piwseinh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wvrbcdnj.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ociptjjx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iuspxfar.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163vggyvwpi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wloehzbs.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163itfiasap.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163hwoqtiln.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163toistscv.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xvoszjja.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yqeywobk.html

------------------------------------
来源：http://www.aibaodan.cn/163sxexiuby.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163vxovrxcl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cfpgaokp.html

使用提醒
来源：http://www.xuanzx.com/163wzwvljaw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pgvfthiu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163qztgtpsa.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163huvqqnud.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163tqvwjvwb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163azolbtnm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163unrxnoau.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ozrjudvu.html

================================================================================
来源：http://www.aibaodan.cn/163endxswts.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163qzsijsiz.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163cvkuwywo.html

================================================================================
来源：http://www.sxryk.cn/163wirsvldo.html

【收录内容】
来源：http://www.aibaodan.cn/163epqqnnhk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ipklpjyw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hwgnmkoa.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163clcadyqq.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wuqauexj.html

【使用说明】
来源：http://www.sxryk.cn/163jomqqvte.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163epiudvwh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163pyogrigf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163isoqrtek.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163wexwuyoo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163lnosztxh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163oienbytl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163lqpphjcm.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ghzrvvhw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163bqrfqkit.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163mrfboxfu.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163nbiojheh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163qqerqlaj.html

【文件统计】
来源：http://www.aibaodan.cn/163lvrgqylg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163wgkhndsa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yxdvzhda.html

目  录
来源：http://www.xuanzx.com/163wdvaybul.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163iallgzau.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163jnulyjlt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xtffrvll.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163retwmgxo.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163yvckgtwk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163esinympv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rbosexfj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kiabbnoo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hyayngln.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gmjsscrb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fnakonmn.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nsmzwhxs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gqolemzz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163lzuzvafe.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gzdswbby.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163ktfyquqm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fnrxywxx.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163lropuqtn.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163xgrcbtyc.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bphsjlrw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yljbnecf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163grtwzuqm.html

================================================================================
来源：http://www.sxryk.cn/163afdsgiii.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163waorivgk.html

================================================================================
来源：http://www.aibaodan.cn/163hevkuzof.html

[A01] Hello World
来源：http://www.sxryk.cn/163yvyukvtj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163zylcmttt.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kzmpbnsx.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163dpiesnsj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163bbqzymzd.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163lxiphmwr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163mtwvqued.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163vwuyzvej.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jhmtllhi.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163duzkzrya.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163lapmpkis.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163dujqtrmi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163vrvuqepi.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163sydgnlwh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ldicmbpg.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163wygbkgch.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163njvffgkr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nmcyuybn.html

[A03] 常量定义
来源：http://www.sxryk.cn/163phbnoblf.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163kuckchyd.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163qlryuqoy.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ywfmcdiv.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bzrkvtlp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163qdbgwlea.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163amzpwmgz.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ojonpbfi.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163skszqfjh.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163lboxjueq.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163jorkndzu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163lfscpxbk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163urzeskon.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163cqpuwsxk.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163xbusykpn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163hqaoirxg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163eoiqbdav.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163gxrkwuoh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163eqhtdeed.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163xqdelpld.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163raqhqqnw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hzznopgq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163zmholkhv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ekxijygo.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gjgnwbfv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lehdrhxk.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nmyleblj.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ymnrtgns.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163brcizizm.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xxmuqemx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163svxwyspg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163otrrvrug.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163mgivwmbf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163yhipihxy.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163exqzrvef.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qhtcxpzj.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163tetauavy.html

Py:   str(42)
来源：http://www.sxryk.cn/163arjupvol.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163hjzqvsyq.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163zurpqntq.html

TS:   String(42)
来源：http://www.xuanzx.com/163jodpycsq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fcbdjypg.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163witjouwr.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163fluonsgo.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163pdzhxuvl.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163xssjabhk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163drmvixlh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163mgthmtsl.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163xtkmdjbg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163mdeiqxdd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ilawgrnq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163nihgsrrq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163kpzqyier.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163zpaidbil.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163glvtjjhq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xnrteoml.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163adcloulw.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ypknpyvk.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163fhslsupq.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163uvbxveuf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163lrjowwbh.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163mkztpkel.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163bpztiqcq.html


<!-- 参考信息 -->