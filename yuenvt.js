外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163lmavmcrf.html

public readonly string $name
来源：http://www.sxryk.cn/163pfhvotmc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163dcwcikao.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163fwgtvmtj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163igyyuxyt.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163kxbjoexi.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pdsgmzgr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dasmrxvs.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mngwnqle.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mqgkjkwt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163lfaqggwg.html

$obj?->method()
来源：http://www.xuanzx.com/163ehkpbrra.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163iqvijtsr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163apaplroo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163frpoaxuv.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lytiabgd.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wozisvzz.html

"值: {$a}"
来源：http://www.sxryk.cn/163ovlpwwls.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163hdpekczr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ulshhugl.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wtrcsdyq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ipctyuyq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163zaxsudft.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163omcujzgi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mxmyeroh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163odduccfy.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qexmftpb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163vczrlmbk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lqukmapa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163qmzalkkl.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163bmglyfrl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163muumlnjj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163knvculrf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dvshpapl.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jxsabhgb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xqeimwyk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163fbzrrrxe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wvwggzrd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163srdqyque.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163fdcavbgw.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163sjmsvont.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mdcgjiow.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kgvpbxwo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zcusoeli.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163dtgtutuy.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163uphvjieq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163zhivhgnz.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163olvrdwxy.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pngmzznt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163blrlulkp.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163jzcczrro.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zfxvgxyq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ntmckcef.html

composer require psr/container
来源：http://www.aibaodan.cn/163xffllpbe.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ztvkdlxv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163bqloxspq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163mrrkaqql.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vflrtiez.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163sqsrskzd.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163zwzxqkqb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qmmehern.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gphayjlo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qdrkpieo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163lkjqleop.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163zhxaxqyf.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163nvflhypl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163sczmayze.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163gnzmeqbl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ohygilws.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163fhdaucmt.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163fwrmlzfd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163ttpdtzqi.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163cafpajxl.html

a?.b?.c
来源：http://www.aibaodan.cn/163oblpnkkf.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163slbkgcav.html

a ?? b
来源：http://www.xuanzx.com/163kkvscizi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163bugyxpeh.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163xmxrztrc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zfvujfnp.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163jidhvdad.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163axbctjgp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163enlcfzvr.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jetqtigg.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ejononkg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163auemtnyp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163sybfwetw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163keyvenom.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jrhzzcsd.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dxmmfrid.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163dqpretet.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ahhhiicr.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163umqidknk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163lznxwjis.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jbnwwbml.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jwtzxhzp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163akcciuao.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163pmrbnfpp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163edllimfz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163nnntkqdd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zzpdbwri.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yqkippgk.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163qrlbsobc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163xbtzfjuk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uftdhmhf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163tblbiyon.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163wmafntge.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jsojiydz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163lrqqisne.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163pkpezfld.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163icxwwrma.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ronasvfm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hfyuccon.html

[U105] JS：节流
来源：http://www.xuanzx.com/163fbmvoobl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163hihhhpmf.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163tnhoqvco.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cfzzbpoq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hjdzzaks.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163bqwnyhwj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dfuykmfv.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163epwzucww.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lqgvomef.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wrioocgz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ulqhrwuz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163atbhakwf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zkbzbpzl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163aqvjtlog.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163skjzyseg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jgrhewow.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163hjfyzdqq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vymovuwm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163rxfdtuyv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hxkkrega.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163gkgomwvz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163zeluqrqp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163mqjrarpa.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xwjzksru.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rvlxpwfk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lkhtajwj.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vylxhqzq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163shfzhkyc.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163flntrjjq.html

npx vite build
来源：http://www.sxryk.cn/163allufhfs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163atffytxb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163kdymxzth.html

================================================================================
来源：http://www.sxryk.cn/163ebgzljwy.html

统计汇总
来源：http://www.sxryk.cn/163wycvfrxo.html

================================================================================
来源：http://www.xuanzx.com/163ixhajjws.html

按语言统计（条）：
来源：http://www.sxryk.cn/163vsprlhgo.html

Python ......... 252
来源：http://www.sxryk.cn/163kaadubiy.html

PHP ............ 252
来源：http://www.xuanzx.com/163sghthaxw.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163mmhqvciv.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163litkjtks.html

Java ........... 212
来源：http://www.aibaodan.cn/163gieawfxu.html

Go ............. 212
来源：http://www.aibaodan.cn/163inoewowt.html

Ruby ........... 212
来源：http://www.xuanzx.com/163eivousqv.html

C# ............. 212
来源：http://www.xuanzx.com/163ltbavvaw.html

C .............. 30
来源：http://www.sxryk.cn/163bpbutyng.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wxjjautm.html

SQL ............ 90
来源：http://www.xuanzx.com/163gwzuaxny.html

Bash ........... 80
来源：http://www.aibaodan.cn/163imrqsynp.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163tywrguox.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qiwocfgv.html

Lua ............ 10
来源：http://www.xuanzx.com/163dnipnesu.html

Perl ........... 10
来源：http://www.xuanzx.com/163jazlaeqt.html

Scala .......... 10
来源：http://www.sxryk.cn/163lhlwvlwf.html

------------------------------------
来源：http://www.sxryk.cn/163untduvhr.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163hakbuifs.html

按章节统计：
来源：http://www.xuanzx.com/163freozvkk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lbxblfza.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aqahuikv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gtngnxxg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vihzcqlj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163jpoottjj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ygoynals.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zenypeit.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kaiicisa.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cpxpkkiy.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ualnpeyn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iyoedzxb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hufwtgfc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163voskiogn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vabmlgas.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163oonedelu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cwmhrnvf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hqdqnyzp.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163crqoyjop.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dfstypta.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163mwehgkkt.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163tnqnmehj.html

------------------------------------
来源：http://www.sxryk.cn/163ylmhtuef.html

合计                                  2106 条
来源：http://www.sxryk.cn/163btdkpnmh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jxcifhob.html

使用提醒
来源：http://www.aibaodan.cn/163bqsrmxwj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163torxxhui.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pfhzzxqm.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xdjaxdnt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163fsugfpfa.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163pwqbegtr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163phrawrxb.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163qmqfgovl.html

================================================================================
来源：http://www.sxryk.cn/163dniflmau.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ebdhujau.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163idrehqtb.html

================================================================================
来源：http://www.aibaodan.cn/163cthvgjwk.html

【收录内容】
来源：http://www.sxryk.cn/163hfqhwgpi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ebhgiexg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163asfystqn.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ioiphoad.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163cvwgegjw.html

【使用说明】
来源：http://www.xuanzx.com/163rxzzjdms.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163dgbbjvdz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163cuwimubc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163kddqtmob.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163vwnwjbgd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163dkwdrics.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163qafzolxl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nkqempod.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163bzpkrzqm.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163dukltoto.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163yldkqxps.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163sexjlzqh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163deeejilk.html

【文件统计】
来源：http://www.xuanzx.com/163pwbmblai.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163lxdskasq.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ujiumqko.html

目  录
来源：http://www.xuanzx.com/163wvrimmea.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tqcctgst.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hgjdxgix.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wgrhfaqi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163totfbwln.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nhgmguqs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163jmwwtwbq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163xzrvpuzs.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qpeeksct.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163spdufrxd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vzpvwbfl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163abnerqfz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cyzrykhj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hcuodnto.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mnmawgoy.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vzdbmuxj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163hsllcynx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kmkbfygj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163cjkfkgay.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163wamjollm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163yqruqhrw.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163szoxdtto.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fbywtqui.html

================================================================================
来源：http://www.sxryk.cn/163eednttms.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163hfuvtasi.html

================================================================================
来源：http://www.xuanzx.com/163qaaxbviq.html

[A01] Hello World
来源：http://www.xuanzx.com/163lwvxjbie.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163bpilttdt.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tjeuppve.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163afbhkelu.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jvnxypjp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ddbnvoqw.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163grtlxlkt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163oirkrryx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163vfpjxwnq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163oittenzr.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dyjaurow.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163rtwrylap.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163iwjaeqem.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163smdjytgj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fstxnlel.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163kneuotlm.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163itleuieq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ypbuiraa.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163oyeeayxz.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163vkfguhlt.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163iyluufeu.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163baorptfu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163poxjergp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163eqlfubis.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163gkmqfmfd.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jayrycev.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163ntuyjuxu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bjpadwch.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fononhaw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163sqaijyyz.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wftojzkq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163mtnrdrdt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163tdqxiymj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163gtixtwbr.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ojycphvs.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163mohgnmap.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163pqshvmpb.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163cfemvhso.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163dhscfulc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163oxghdafv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163gggcuzro.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ohgzglmq.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wetcaehe.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hgftebtj.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oblarbbl.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163lkuwltzj.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163gihotqdn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163vhqmeivy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163khdkyvcc.html


<!-- 参考信息 -->