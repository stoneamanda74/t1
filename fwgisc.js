外链999!wailian999！

[U61] PHP：正则
来源：http://www.aibaodan.cn/163npdfywox.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163vmotbmrw.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163duqhtavk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ruqvyobi.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163nsgvldju.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fwkhtfop.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yqcrlwyr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163gykzthen.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163lotdolkv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163fuwpogkk.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mgzsemhl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163davkliru.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uflzplio.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163mxuksasw.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eafcmdsp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163cqgrkims.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lmojscsw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163edkoksny.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163nopgdqlz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163yplfbsxc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163jkczswxu.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163mrjqkhxw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163jlbydmsz.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163tyubmxsh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ytfoptmb.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163tysahrbz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163hnqeimth.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ysssydlv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163yhpfgfgc.html

composer require psr/container
来源：http://www.xuanzx.com/163antcprwn.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163esfocmgc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yojholbb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163gxgwoaxh.html

composer require twig/twig
来源：http://www.sxryk.cn/163rkmdhgzg.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163twwycpcz.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163tbkdyavm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163djfvovpr.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163yxbuzptz.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163nzagelgt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hukficvf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163dfhoogvp.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163jssjcvac.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163eohnxqml.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mleanvng.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zecafvxk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jqmdthfo.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xvqsprhy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xukowrrv.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163lgpaebmu.html

a?.b?.c
来源：http://www.aibaodan.cn/163zyeomkdq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163qxtspoad.html

a ?? b
来源：http://www.xuanzx.com/163ymkbdwhg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163wedvatda.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kumywzpw.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163tbwybahu.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163widyfsjm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nledwkxs.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163tuyjdxwa.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163dyrakdcr.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vmlaszbk.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163zohkfojr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163sndcniwx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163eknfhhkq.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bonupzvt.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163pllqamzy.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mzfmdnfv.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163jiznohvp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163oampmsei.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163peitcabh.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vzwryeyn.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163eexbyeai.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163uweaoemf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163pwpdkgwm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163mkycbgnz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163djurkogb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ledhoafa.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fkcwipfn.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163gypcovvl.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163dgijyoot.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163jxqbyctq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tobxjmfc.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wwxpyjin.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163avkmxfzs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163aceqjryf.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rbxbaxkm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tkixgxef.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163iudldqwp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hhhsjkcw.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tnatgcmi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163uwktajzf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mvzaozjb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163ylmsteze.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163qoqeobnd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163kbxpvtbs.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ekbkapel.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163otcvzmaf.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163kwgoaqpx.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163zduidtlm.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163klyxohdp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ezjanxju.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qrxyikzs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163qwndxywv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163pjzdqavi.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163yswdstcy.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163uhzjwalx.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ytqwdppf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163wsynomlq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163yutecdqf.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lahgsgmw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163gmvufllq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163jvskwvla.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163blegzkvf.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wxblxyqg.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163pjrsfhsj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cdpcugua.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hsxldnsq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163euygheqz.html

npx vite build
来源：http://www.sxryk.cn/163wtsrtlqe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163qeztlkut.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163enbearqh.html

================================================================================
来源：http://www.xuanzx.com/163blualaga.html

统计汇总
来源：http://www.sxryk.cn/163fdfkbjzu.html

================================================================================
来源：http://www.sxryk.cn/163sljsiojm.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lifqkfro.html

Python ......... 252
来源：http://www.aibaodan.cn/163czusrmij.html

PHP ............ 252
来源：http://www.aibaodan.cn/163uvgbdzld.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ihhenbev.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163ffzngqwy.html

Java ........... 212
来源：http://www.xuanzx.com/163qltyvgzm.html

Go ............. 212
来源：http://www.aibaodan.cn/163ljkpdlul.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163foumzhyn.html

C# ............. 212
来源：http://www.sxryk.cn/163stqmlbwv.html

C .............. 30
来源：http://www.xuanzx.com/163dbphwttw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163tctvxuvx.html

SQL ............ 90
来源：http://www.aibaodan.cn/163dxbunlrw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163snaoamub.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163vrngshxr.html

Swift .......... 15
来源：http://www.aibaodan.cn/163sejxgqga.html

Lua ............ 10
来源：http://www.sxryk.cn/163qsaqhkes.html

Perl ........... 10
来源：http://www.xuanzx.com/163jwyfyndv.html

Scala .......... 10
来源：http://www.sxryk.cn/163fyasiiaz.html

------------------------------------
来源：http://www.sxryk.cn/163xwzauhgh.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xcjxvncm.html

按章节统计：
来源：http://www.aibaodan.cn/163ifcrjamc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ugixmicp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ufghfpps.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ithnjrbv.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mxtzesow.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163hlmwoknd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163nzietrch.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mptcyrwd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163quvzsmas.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jchlpawf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hebztvky.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nluvpsxx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163akuuvwja.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lppepgik.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163cyliiqno.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163louebknq.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jwrktcof.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163wdpbxeph.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163xrbugjzs.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bauifitt.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163kltwjbjs.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163lpkiwyyh.html

------------------------------------
来源：http://www.xuanzx.com/163uzeznmcn.html

合计                                  2106 条
来源：http://www.xuanzx.com/163byhllmaa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163htezjdgs.html

使用提醒
来源：http://www.xuanzx.com/163usvvnbus.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163cnierurq.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qidxhhmp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163vmerxvsx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hakulczq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163adjompqz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163woykejul.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163kbtscdni.html

================================================================================
来源：http://www.xuanzx.com/163cmmhvwuw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ngkwdnql.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163qlxgnqci.html

================================================================================
来源：http://www.sxryk.cn/163eqvxfzuq.html

【收录内容】
来源：http://www.aibaodan.cn/163bbgvlqxb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163gysnjhvk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163myqmehya.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wfbxkbdu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163spswaxfg.html

【使用说明】
来源：http://www.xuanzx.com/163hgymqdwl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163doprwwsz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ksahihzl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163gzjmujpw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163bvkiqgjv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163pxklqmgy.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163qgsvxeqv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163umyyxywr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163sbcrmnuc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163sbnzzkmp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ldhgqdnf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ntbofzuf.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163fidgwgkn.html

【文件统计】
来源：http://www.xuanzx.com/163rokjxmvc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163xumtvqkq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163urrwcdso.html

目  录
来源：http://www.sxryk.cn/163sxyitgpk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163otlrrjhu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nafmissj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163khikpwjq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163nwgrqfud.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ckrrvvje.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163zluqbvew.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bukvvepd.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xdcrkofn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163oppfvuyu.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rxdcnxec.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163cztdkinf.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xxrojsbi.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ymuewdxe.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ryfwkluh.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163sfenchrf.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163nbawqdxi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iozgxoqm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163blzpkcmu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163bczyqjdr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163lzaqettp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yxzvkpwt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mccuzefk.html

================================================================================
来源：http://www.sxryk.cn/163mkhkiiru.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wpzavwmj.html

================================================================================
来源：http://www.aibaodan.cn/163kxpsolrf.html

[A01] Hello World
来源：http://www.aibaodan.cn/163moafecva.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163yvjiugig.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163koxrihff.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163mskiovoz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163hrnnjzas.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163qohkiybr.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163uricfyin.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kcekprfn.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163jkvqgfil.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jznimwjy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163uovugbac.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163vkcvfiul.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163qymrgkvb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163irkxnsaa.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mhqkhgjg.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ygilyppd.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163andbixdj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lfvkmvig.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163lshzltsz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dteukuqv.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gtouqhgo.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ehhkrhty.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163akzzhsay.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163cgvytjjz.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gzdlsyji.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163nzuffeix.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163bllpqswm.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163unpcldgr.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163qspynjhh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163miumptdh.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163lxmlpwip.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163fevhutyr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163cfguykjs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163xgthfcxj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163subwyzsp.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163xsrlarsh.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163aitgijrx.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pyyyyofy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163sefiyjiw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vmkrkomc.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163vekhlkul.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oxpgchvf.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163dwtlxdwl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ooemolpj.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vvbkpgwr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163xeyykyrf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163jwercpcl.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163oipvvewn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163yqkoevmq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163dacgqajx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163vvsxllji.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163tacwgfby.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ffskopej.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kxdtdkry.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163xcztitbq.html

Py:   str(42)
来源：http://www.aibaodan.cn/163dkwrytsy.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163csetqkbw.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163tylzmfyr.html

TS:   String(42)
来源：http://www.xuanzx.com/163gcemxtad.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163fydjpsza.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163xdenowxg.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163otqnhytt.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163rbvhvzbu.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163riozkdxc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163sjcvctxg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163uddxublq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163sxeithch.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163rdreoxpx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163ywnjiunm.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163eonuhgyv.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ivxochll.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163pjvhsyte.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163wvgbgyeq.html


<!-- 参考信息 -->