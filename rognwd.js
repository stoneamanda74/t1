外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163fjacvisn.html

"值: {$a}"
来源：http://www.xuanzx.com/163svsmvkmi.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wdivznfr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163wnfnktvn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163tvmzrzyk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cwxukxej.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163osjoliho.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163aipvdxfu.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163tokfftoa.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163anpelyhp.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163mbaotpmo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ufhmxdor.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xgsaxlhi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163awkwiuvy.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163tyglekie.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rmwiwqwx.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163pelwsvep.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kbepymvc.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gskwkbeq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kmcfhako.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ejpdiotk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jglwtdpz.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163cjeaioxn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163hqhhbrpj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lbbibdeh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163lphuyxco.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163gmimbzbs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nowepbqi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163epkvlipp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zjjddstq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163okiuxnfg.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163lpnmlrih.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163byjpepjt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163wyymhbkw.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163kcrwciom.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163xdxkzzld.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163zffiusvg.html

composer require psr/container
来源：http://www.sxryk.cn/163kfrhwmhe.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163sllpaxhj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lhqnatrf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rxlmwgpo.html

composer require twig/twig
来源：http://www.xuanzx.com/163rvdjdthh.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fwypgvkh.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hmrwntmb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163viufgiog.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163envywvpu.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163nlfbbvgo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hoxzgtru.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163safottuw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zskxmesb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xrocuzwa.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mwangbvl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ikvhjsdm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vuwzurth.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163oyqvkjlk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sguyrkpo.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ubugvnfr.html

a?.b?.c
来源：http://www.sxryk.cn/163igdkfhpf.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163rchcatcf.html

a ?? b
来源：http://www.aibaodan.cn/163qlhkdfxt.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163crwsvyet.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163fymbmzqp.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163cmrlqnpc.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163dhvyntps.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163snqwwayq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163trsxjvxz.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163nalfysqf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ubchtcme.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163tqmwjczr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163yhkkkuia.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163vtarvgql.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ucwkurby.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vtpgrmbp.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jftfslid.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163svwasccq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zbbfpcgf.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163tukkozhb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ustfhsqn.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163cjoxjgll.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163swnrzqdm.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ipskevrl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163inwjjdjk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ykpcpajf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163iqlfynxt.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cfchplog.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mlouknov.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163iidveqwf.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163hmzqjgds.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163vipsuwmm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163onmshnst.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163lcfqjtrw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163vnatliag.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gmlsiwju.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ahswcrnz.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163jersqhvm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vjjggxsz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163onlxfjwf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ishrfcek.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gezhnlxu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wfxbojma.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163fwfsdifu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163tmxzkqtm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ytlslkue.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163yhnzkaea.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163borlpzoy.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163raiffggf.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163icfkrlvm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163prkjqhsp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163desozeul.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gmdtjkfa.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163gzliwzio.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jotqclwf.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163pkljpyyn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ihfgfwpt.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163coyqaidh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163iuiyryym.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163jomcihtm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163qigcpryo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ueujyyqi.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xusgyohy.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163jkgpybpm.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163jsgsncnl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163khyctnnr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163cgxyvacn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163tklqawoa.html

npx vite build
来源：http://www.sxryk.cn/163mmaxczoy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dpzhxqqu.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hrlerith.html

================================================================================
来源：http://www.xuanzx.com/163yogdjqzt.html

统计汇总
来源：http://www.aibaodan.cn/163feudgjrj.html

================================================================================
来源：http://www.xuanzx.com/163yugcaixm.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163zgdosqhs.html

Python ......... 252
来源：http://www.aibaodan.cn/163hvptzvzd.html

PHP ............ 252
来源：http://www.xuanzx.com/163umbopmro.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163pkherfeu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qshdgmfm.html

Java ........... 212
来源：http://www.sxryk.cn/163ptckcemq.html

Go ............. 212
来源：http://www.aibaodan.cn/163dqhjylbh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163sfficulk.html

C# ............. 212
来源：http://www.sxryk.cn/163ktbhpggd.html

C .............. 30
来源：http://www.xuanzx.com/163nxsjsomt.html

C++ ............ 30
来源：http://www.sxryk.cn/163otxuyaji.html

SQL ............ 90
来源：http://www.aibaodan.cn/163alzkkcfb.html

Bash ........... 80
来源：http://www.aibaodan.cn/163uhfkauua.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rcophisq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163kalvgjhj.html

Lua ............ 10
来源：http://www.xuanzx.com/163hzyjoftb.html

Perl ........... 10
来源：http://www.xuanzx.com/163ncrplerx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ywhdzlts.html

------------------------------------
来源：http://www.xuanzx.com/163sdfojgfu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163cphftcpx.html

按章节统计：
来源：http://www.aibaodan.cn/163vqranlje.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163eeobpvad.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sfiggqda.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163okttbiei.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163oqineeln.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163hnqktvqt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kbdgimnl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zlykynun.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163prjsvvjm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ewgxdozx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jyjvodmx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ggnqieqm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yqyzbprw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ppmfnlsk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ybduzlau.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163lharqpoz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jkbhawdn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163pkkpmavn.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wtelrmnz.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163agzngcqh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163yrhznlbp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xdnrzzgr.html

------------------------------------
来源：http://www.aibaodan.cn/163mwafvsli.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yurmnzdd.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163exlmchhk.html

使用提醒
来源：http://www.aibaodan.cn/163iznunvll.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ifrjakwa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163cywzwsce.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163zhcgjgyz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zunivony.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163qoriexvk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163nzdjmnjg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163tfmhdfwj.html

================================================================================
来源：http://www.sxryk.cn/163aezqwcis.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163pwcdqwzk.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163euusrzej.html

================================================================================
来源：http://www.aibaodan.cn/163hvfzptgd.html

【收录内容】
来源：http://www.xuanzx.com/163tistlykq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163gurupvps.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163cxeeahxx.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163pquqxxcp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fenybgxo.html

【使用说明】
来源：http://www.sxryk.cn/163xudonulk.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163ltsvnpvu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163chwwiqgm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xgmirirg.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163uxvcsgpn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163wgbhoraw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ganigvhi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163mqconmiv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163jijwoaqd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163nltxowxa.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163edrwboru.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163bbhgipup.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ehzummsd.html

【文件统计】
来源：http://www.xuanzx.com/163yuieynbp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163okahhgts.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ttidqiys.html

目  录
来源：http://www.aibaodan.cn/163lolodozt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163htsnebsi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163mpixmmbt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cakmpuhz.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wcnknamv.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163trcnnqrb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163jxclgxhe.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ojgygegp.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dbhotafw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163pnwsjete.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dwqedshh.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163swxndolp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bkqijoxo.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fgcojztc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wqoymawp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163saqfoiwr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163bhnymfoo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zmsvfygd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163zorvcory.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163rxvsjlkz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163krxegouy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163dfuzofnf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163iqerkfxr.html

================================================================================
来源：http://www.xuanzx.com/163cxmmpmgx.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gwvqevgk.html

================================================================================
来源：http://www.aibaodan.cn/163txmvhlis.html

[A01] Hello World
来源：http://www.aibaodan.cn/163qywuhcih.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163lvxgfbyz.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163hdrlypyj.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163wroalozm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163gakwbxbp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gfxbndkw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163yqzwpmhh.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163gjpxuowg.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163wxvfmdva.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163vgghylwn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163pxqzlflh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163sqcvxnko.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163nduhhmmx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vgeeevan.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163bvrhjqtb.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163dljcyzbr.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ypsqgbyh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163arzunxmq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163pnluavtj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163agruriic.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tmztrbga.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163taoqzgpu.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163yxiakmph.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163irurlnaw.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163khfptjdc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163cvifpfym.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163tgbbnvyw.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163skqitefp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163vmgbykon.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ipgzslew.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163amrwenox.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163jtvmauka.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163srvmkulz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163mopppwnz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qysftqtr.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163vmnkhbvu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163zebzvnyp.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pqilvswh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163hkdgpbjz.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163dzhcvmmz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163yqdgpspf.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ztmsxgtz.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163sujqhtkz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163loinsbyy.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rjtgyngd.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163siqgpexr.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rfwuxjli.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qwzglsdb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163zkkfdoxp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163jwpcdnwd.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163wvgnmghk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163sqkfpcpk.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163ylezpfkl.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163htaefiad.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163rtgxtssx.html

Py:   str(42)
来源：http://www.sxryk.cn/163bcnzocjq.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163kfzbrqdn.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163dslvsuic.html

TS:   String(42)
来源：http://www.xuanzx.com/163mhblmygv.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163njaqwrbx.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163fajcwozt.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rtrgsree.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163tezbcibh.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163nsdkzhbq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163xisxcukz.html


<!-- 参考信息 -->