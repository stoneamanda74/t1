外链999!wailian999！

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163nxdkzkwv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163noegafmk.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163krxicast.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hdvbtahj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fzvdmnud.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ojfzduzc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163azsvngzl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ougunbou.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cprymmmb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rzszmuvy.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ervybzdf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163refuztev.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163uwwwgbsg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163wumtvsrp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163umlpzqiv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xkrqwtdd.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ukewuwsc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163jkyksndy.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163cflfcytf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163itnrtexz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zhbgybyt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163zkntbidu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ienohyfi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fgkvjllp.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163kqssdyxh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163pmcsbsoq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qkovkstl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163bmcqgtih.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hzdnyslw.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mbiiyzfl.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163biwmpddh.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pyouvszf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ixeqqclt.html

composer require psr/container
来源：http://www.aibaodan.cn/163jsypjvxf.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163swqtgijg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vxgdqhuv.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163dvjsmnys.html

composer require twig/twig
来源：http://www.aibaodan.cn/163rewzbusq.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163hlrhsfea.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wsgikduz.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163twovhlcj.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163njnhvexl.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163nzlujwfn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163shevsfsi.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vwnfxetr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163batjfljd.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ecpxfymf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163inuyuyrp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yndnrauc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163odyazlao.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163togwlvxq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163nzpwyzzl.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163pnyxxgum.html

a?.b?.c
来源：http://www.aibaodan.cn/163bofioxis.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fatpxodb.html

a ?? b
来源：http://www.aibaodan.cn/163jwcaiqqp.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xaufhwfl.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163eykejvbu.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163crzurdxj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163azogtjkr.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163hztlchez.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163tfixfbbm.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rixdopkb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pmfmctcn.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jiestdgh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163avcecqsr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163rjzblzqd.html

structuredClone(obj)
来源：http://www.xuanzx.com/163zjzcptxi.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163kimpvzmu.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vtwdsaan.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rbsewtjo.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163rowbdijn.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163wsobbvet.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tytttizi.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163hvdjindo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163pcxgrgec.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163eqyklute.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pkjovrgh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jvjyghcc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163objistsf.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jsjcmfxb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ecvlwemd.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163yvsnhpkl.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163casyxeac.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163bkzvinuv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dljjmczp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ionktdxu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bmlilnrr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163juickebk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163zgoxybdf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rhktbbwg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dlduoock.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163opsopgud.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163izqwpvje.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rgcwxzdo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dyohhuhg.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hsskmong.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163epkdhfvn.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pgxfwfor.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ezczgovz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163egmrfksp.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163amsvwvad.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163itbtcoff.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163idruuvqe.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163babbldqy.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qnsvwooe.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163tqzfubpy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nqufadkq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vydkbjin.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jrjplivo.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ufpaneru.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hkqwvgmc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163bzzjjqwo.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163frmrmedx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wqrkpfou.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ukpnblfo.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bzzqpqwg.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163haujtnwd.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163omfdrrcd.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163yaysnxem.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163kywilbdc.html

npx vite build
来源：http://www.xuanzx.com/163qusmegts.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mbkvbopq.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163osgxzjam.html

================================================================================
来源：http://www.aibaodan.cn/163ekslxqkf.html

统计汇总
来源：http://www.sxryk.cn/163zenuqfsc.html

================================================================================
来源：http://www.aibaodan.cn/163qsibbgqk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lpzzismd.html

Python ......... 252
来源：http://www.xuanzx.com/163lbdmiurq.html

PHP ............ 252
来源：http://www.aibaodan.cn/163oskejhvi.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xrxjaotx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163zpyazhnt.html

Java ........... 212
来源：http://www.aibaodan.cn/163nkzaomfa.html

Go ............. 212
来源：http://www.xuanzx.com/163ukpmuxua.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163sozhnokf.html

C# ............. 212
来源：http://www.sxryk.cn/163yrbficus.html

C .............. 30
来源：http://www.sxryk.cn/163nurfikzk.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ghbkivul.html

SQL ............ 90
来源：http://www.xuanzx.com/163xfogoydj.html

Bash ........... 80
来源：http://www.xuanzx.com/163ugttlwvp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163egfzrcbn.html

Swift .......... 15
来源：http://www.sxryk.cn/163wnwxbiul.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dwanpvuj.html

Perl ........... 10
来源：http://www.sxryk.cn/163soymlnow.html

Scala .......... 10
来源：http://www.xuanzx.com/163vrjwtanx.html

------------------------------------
来源：http://www.sxryk.cn/163mwlxxnbm.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163iadgadfc.html

按章节统计：
来源：http://www.sxryk.cn/163czrlliwe.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jtmyfeeh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163dazwwllo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163thrtzenx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bqmdnzbl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cnwpitda.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hphozuig.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163iwldgvsd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wajxpjlx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vuexdmht.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nlweqoje.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zvptuzig.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eejbxdwp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nxygapch.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163yfffdrkx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163btgauisg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iidcbboc.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163wtluxvuk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ooqjwujt.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163sxgvomsl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163gpgedmqp.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163vljomaxg.html

------------------------------------
来源：http://www.aibaodan.cn/163fjewzenk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163pwtjyhry.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163arokwcty.html

使用提醒
来源：http://www.xuanzx.com/163vbvsyijf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163svrfjfqo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163otjtgdsg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163jjrecuoo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163evbiuykc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163clnhixpq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163mhfofrsk.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163eqfgdbhz.html

================================================================================
来源：http://www.sxryk.cn/163hibuifjd.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ylggcrak.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163shnnaghn.html

================================================================================
来源：http://www.sxryk.cn/163equofxis.html

【收录内容】
来源：http://www.aibaodan.cn/163bjblouru.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163zebvsgde.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163fkydjlww.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163pewerjhl.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163enbpqzel.html

【使用说明】
来源：http://www.sxryk.cn/163vrboomia.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163nkblhxle.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163pcvfvnri.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xpaskulm.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163sdnhlmgd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163nophycrt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163npcmewoq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163ixettvjq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xffuczlz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ilxrloxr.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163kjptfpnr.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163efnvajmh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163uwmsmcex.html

【文件统计】
来源：http://www.xuanzx.com/163pfpdqdkx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163scirxtcx.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tgmopvom.html

目  录
来源：http://www.xuanzx.com/163lgqxocgg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mumajkpu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ibltelcm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163uhdglijh.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163canyfjwg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163vjaidpxs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163sfggjxrk.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mxumxqzz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ikfrbtxl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163yjplhlsp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ukkeybaf.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ddnpaamo.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163evqumiap.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vrowyhgh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163onwtqiqo.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163mpbhhoeb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163rkavntuv.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163weinxeci.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163iyyxvpux.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163cmbhwhlk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163rcdfpale.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163weedllrk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163esjyjgbo.html

================================================================================
来源：http://www.sxryk.cn/163mfnrzxuc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163uhoilcik.html

================================================================================
来源：http://www.sxryk.cn/163oehhqtil.html

[A01] Hello World
来源：http://www.xuanzx.com/163sttnbkmu.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163zxaqisxq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163sclghxfp.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163lrqddqdh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vzmroiij.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lghllxar.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ltqdjqvz.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ikgwionu.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163lgdrzcer.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163ztoctewy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163sawwuneb.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163jzdjfseb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163gxvwzrik.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163jjjnlzlo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fsnddfop.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163etoamaer.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163muukdyjl.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jexliedr.html

[A03] 常量定义
来源：http://www.xuanzx.com/163wlehsvmu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163wmevqwva.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163pdcccunn.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163kifbjfzn.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163uppemtvi.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163jpldgboe.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ajnqjqcq.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163cfdehwbw.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163idjcpdbw.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163umqeztws.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163zjxauroa.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163mymcbbdl.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163mhqpfbve.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163pmeqolob.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163imgumvok.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163uwftxbrh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163gghkqrnp.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163hcebupif.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163nhkeqttz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163gnucrtva.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163kadlyhwi.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163uzomqghg.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hpnrrptj.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gnvognjr.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aqvrerht.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163iiusnzdl.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uonqcnvr.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hnxpmrcr.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163noendfmt.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163moqotiaq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163xwibbiry.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163ovjzzlvn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163khkxvpbb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163xmxnpnij.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163okwwlzuw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163vzeourpu.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163qrtzibfz.html

Py:   str(42)
来源：http://www.xuanzx.com/163detvokld.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163pvcqtrqh.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163glvocnqa.html

TS:   String(42)
来源：http://www.aibaodan.cn/163misstdgl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hxzkktfr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163antryxyi.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163qzuourjh.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163rocrbmhh.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163jccthvok.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pbrvllil.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163xwoheqtu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163jtzkbakn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gjupfxou.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163evnrwlpj.html


<!-- 参考信息 -->