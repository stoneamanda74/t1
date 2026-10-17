外链999!wailian999！

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163mbgbxyep.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163fptvytaf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mlguyaep.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ipsksbou.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163evabtaun.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ludmdalk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jpyzedzo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163lqtqiuzr.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zlninpvz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gsbrrtux.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ghjqnhwg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163dfbqcyld.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cfjhzqum.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163eeblzfxc.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163dmfvbbgb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163xpnyhxsp.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yzgmafzo.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163oftnhbbq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nyjwschv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163htasqiiv.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163kaqjstsl.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163iekkzgbp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163jyjqdoym.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163smvpivfa.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163knteolfy.html

composer require psr/container
来源：http://www.xuanzx.com/163hqdxplmt.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163mpicjuti.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rpntzqtr.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163xyyzqtgb.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zztkdbkg.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163qxymxfsz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jgtktspp.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163wiajqffa.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163rhegyhjz.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qktxbbey.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cxjihwxh.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163colkwyrf.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wsvcpimf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163eqgdezgo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163uflncicg.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ipoyavbs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163eofampry.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ykgdtwky.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163gtcqbbiq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163pmjpubdq.html

a?.b?.c
来源：http://www.sxryk.cn/163mkfmsaih.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163qxjzqdzu.html

a ?? b
来源：http://www.sxryk.cn/163ljxezqrd.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xcyfvqly.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163yohtvdsp.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163qfmhkczb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163otpfouxq.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ouvwveoe.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zogdcdjt.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163flfmicqj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vhtopzsx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163mccktimq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163liyiwfev.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ruuvbvqu.html

structuredClone(obj)
来源：http://www.sxryk.cn/163szffgkat.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xljxzybo.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163wtiziiin.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163dpnhtufe.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163fohkmbop.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xxbbkfgt.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163pqxoiqsj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163bcgqlofg.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qbzinmpv.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163pvuystid.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xemjrwkh.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163kbmlvqhs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163budahyze.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163qfidvmtt.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163sniysppp.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wpfsdpnp.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163unhquyos.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163jxdeflwi.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dljpchlu.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163osnljici.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163oaqquvyl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163kbdgmprs.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163tnqgguha.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163idnybcdj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kdarrzap.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kpmbamlf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wduqpkzz.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163etigdlgv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163gfjcrwpq.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rktxouwc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163qnggqxdh.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tpfnygtu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163tyiagkih.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ecopxwgj.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ifhvjqcq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163obaphmcz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163wlbswlus.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ewfszkos.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163yhzictta.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kordbsdq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ssheiuqe.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163jfxgthdd.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163upspzemo.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tqdluxlo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163alljlrva.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163dialnbzd.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163kouhwlru.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fxmegdzm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163derahkxp.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hfizlfor.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163uzvoqujf.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vksmpwzm.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163iricvhks.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163llpbuknh.html

npx vite build
来源：http://www.aibaodan.cn/163nryzppub.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nujhcelc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163cobzpkix.html

================================================================================
来源：http://www.sxryk.cn/163kqamtpkj.html

统计汇总
来源：http://www.xuanzx.com/163nxodfvsp.html

================================================================================
来源：http://www.xuanzx.com/163dfwiruns.html

按语言统计（条）：
来源：http://www.xuanzx.com/163mgnctndw.html

Python ......... 252
来源：http://www.aibaodan.cn/163unmmvonx.html

PHP ............ 252
来源：http://www.sxryk.cn/163gejztyqz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163suycerdn.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163melrxtfm.html

Java ........... 212
来源：http://www.aibaodan.cn/163pxsadzyq.html

Go ............. 212
来源：http://www.sxryk.cn/163dezdrnzi.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xqbhnbgk.html

C# ............. 212
来源：http://www.sxryk.cn/163jqskwxjy.html

C .............. 30
来源：http://www.sxryk.cn/163shouoneh.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ttiauxey.html

SQL ............ 90
来源：http://www.sxryk.cn/163nuozqkno.html

Bash ........... 80
来源：http://www.aibaodan.cn/163kfvrqotf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wphgsrco.html

Swift .......... 15
来源：http://www.xuanzx.com/163vukhffdq.html

Lua ............ 10
来源：http://www.sxryk.cn/163lfksnxpe.html

Perl ........... 10
来源：http://www.aibaodan.cn/163qexlhqib.html

Scala .......... 10
来源：http://www.xuanzx.com/163uziijwvk.html

------------------------------------
来源：http://www.xuanzx.com/163uhlljmpa.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qibyozsz.html

按章节统计：
来源：http://www.sxryk.cn/163pskufczt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163doofswgf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ijmmacko.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lxwhdpwz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163aanxgtag.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163giptodlg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vmzmngxf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163cwjupxfj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163bnoyxtwn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jrajgumn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163dubgcouy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zfkwzrbo.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xrnxrgxr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ukgabvkl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lxqedsmr.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163fndxswzi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163itptqtjg.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ykgfkgzb.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163mfozhtnn.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163frweyyqo.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163dumkvydw.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163cfxtszkr.html

------------------------------------
来源：http://www.sxryk.cn/163zhibrcxi.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163iypvwdpg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xikpteso.html

使用提醒
来源：http://www.sxryk.cn/163olqfictl.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163liysjfgj.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163yfaokwmc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163baqydsih.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163ziuczsvq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163henggvzi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163ubcpgieo.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163ehmjmvnu.html

================================================================================
来源：http://www.sxryk.cn/163yjwlutpw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163yybazepo.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zgyyanpe.html

================================================================================
来源：http://www.xuanzx.com/163idqgjzfa.html

【收录内容】
来源：http://www.aibaodan.cn/163iqcijvyp.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163coqfrcyk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163pkzajhgo.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163qxpaesyu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163muqhoulc.html

【使用说明】
来源：http://www.sxryk.cn/163pvaxgqhw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163naywdetc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163vaxjhixz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163cmklavcb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163nnohuzwd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163ltvsfcgw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163junarzxa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163wnzsmxbq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bfpihwtw.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163hjmwencx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163jcftzitv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qaldnfci.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ybzneafl.html

【文件统计】
来源：http://www.sxryk.cn/163tygifbvp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163wermjspl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mqmmsycl.html

目  录
来源：http://www.sxryk.cn/163tzxtltip.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jqddoigv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hbvyihec.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163bacoozvz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ogrtijle.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hqgzhssx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163dtisglbe.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163obiikzma.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zylwscwq.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lszxhlbx.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dbkgfyzb.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zqtpehjz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yiguhail.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wvjmsefd.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nkklnfls.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163maluczbd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163xyjcbgdc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163huaeiosh.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163subxemcy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rnuxnbqj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163icrumiey.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163izhxdlso.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zakvzvrp.html

================================================================================
来源：http://www.xuanzx.com/163bzayxwog.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ogixwwap.html

================================================================================
来源：http://www.sxryk.cn/163uypmmejl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163llvtcozq.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163fmugyniw.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163likxtydk.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mdwhycil.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163aoboqgdx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jzlnakgj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163yyxwtjij.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163biehxvpv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163hibfwnzp.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163qtivetbd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163eyykuviv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163npynmsxo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pxvmojfq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163rbtnfors.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163woajwciq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163potjdhlu.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163mswnxaoy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ctptkkzo.html

[A03] 常量定义
来源：http://www.sxryk.cn/163zrxizsme.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163uzrjjuiy.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ucnksrgn.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ipxyuxwa.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163wgfdsuct.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163kixiiqsk.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163qlnbtsgz.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163etjnjpsl.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wylsqbij.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163nysmukyy.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163xgiomrxc.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163ebcxpktn.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163ujolshgp.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163bldjprlx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163rqpwuird.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163revpsuvg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dmzgvyfs.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163hzxsspfu.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163umrliivp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163bwvfpwiy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163tkuozntz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hqahdqnj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163wbaveorr.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lqkeqpwm.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163foiercud.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163zqcvjnhq.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cmvityxn.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163vvevjygw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163kesqjijg.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163gxrgyiwt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163vdmltruo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qdppvvwf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163tjjgvctq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163exgupxyb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163tpcpcxyn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163izajfryc.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163suvnjlzb.html

Py:   str(42)
来源：http://www.sxryk.cn/163wskxypru.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163fphclhhz.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163zjflaraa.html

TS:   String(42)
来源：http://www.aibaodan.cn/163pvxhgaxi.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163dvdaainz.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163edwpaqbk.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163pjavjszf.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163odhktjlr.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163iotjazpf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163ewoppbei.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163kuowvhxt.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163jbobeflg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163glfpyuya.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163sqsyzwge.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163kovytdau.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163lkycfqam.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163agzyuywq.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163rzpsyjyo.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163pnpuksdj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163qnukotio.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163xzxivbre.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ukifwyfv.html


<!-- 参考信息 -->