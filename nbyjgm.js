外链999!wailian999！

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xvvwuogv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jlhcbfqm.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vajnzbeb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cpixwmex.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163yngvulwg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163asdfifxd.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163buvygsyw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163jagnsqek.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ojenezmg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ktkxswne.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ikakdwtf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163cjmeobdd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163yrxewxqr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wbvdkget.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163jcdvylej.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163zlguohir.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ghrcczyq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lckmvmfi.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163hferhfal.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163acptqmue.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163xcasxyss.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163vmkkoiqa.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163xhtctoxq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163olmmipcz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hgzsuxbe.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163gqhkskek.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163cpwwodde.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nsmkakub.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gvbqcxsw.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163bgxkqfeo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163zkdlrjao.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163jukyywva.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163agppviyi.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163wpzljzof.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163hdtqyjcj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163nvcvboew.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tmbtxxkf.html

composer require psr/container
来源：http://www.xuanzx.com/163envpckxb.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jpyijjne.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ovcodzzr.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163npbjdxgu.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ittagpjq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163lrbyzoyp.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163vwckwkch.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163tbetfpzz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163krzthadd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163waavywbz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163atxyokjg.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lszqbute.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bwlosezr.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uoraicnp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163tiftmyet.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163canrvuin.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163folovlao.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163wcjrqnjg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tnlcgfys.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cpdbrgek.html

a?.b?.c
来源：http://www.aibaodan.cn/163jwbrgpkk.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163fajzhlfy.html

a ?? b
来源：http://www.xuanzx.com/163ezavfqnz.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163fnvqpxib.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163gnrcvoxl.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163hzfzvoix.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163hqnxnlym.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tpeztqmz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163cshpoodt.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163olrkexfr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oxfqfztd.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163gomnpwcc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163tojjotdm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163yyelittt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163yjuhbpkf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ylwglnel.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rkekkvpy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xyzizghi.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163irhjhyll.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xvgrzheb.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163xunovumy.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ygmonvcs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lzbhgcre.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163aqvlvmqa.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ievgaecg.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cdysxzzu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163efqthppm.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163oqecwysi.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zcjazzaj.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163fxfqzkaa.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163tmeljhgm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163fjwyyohi.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kshvhgmf.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163qjgmwonl.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kuzqcwfx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163surczehf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gemebrbm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kbuhfakb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dsolvdil.html

[U105] JS：节流
来源：http://www.sxryk.cn/163wjyhwhgv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vjtvqoyy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163azarzfkv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163awhphnpo.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163gpznqyaq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163nwhmlccv.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dhhgfggj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163amlabovq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163elavevcz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163quguoiua.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163oqwenzdh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163nvyriyai.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163eqngzlnx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ijtqfwtj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163fgimvccz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163waxfvpwb.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163yyfmpczb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163llcaweae.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163oicimvtr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qwofqdjk.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163zmucbwwd.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nafzweoe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163lmnrrseg.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163fbhppgov.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cjhqdxth.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163gygwrxsa.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ntwnqgud.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hxyzuzbs.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vvgouzsx.html

npx vite build
来源：http://www.sxryk.cn/163hehbaysl.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163uzytyiod.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163wkfidbuf.html

================================================================================
来源：http://www.xuanzx.com/163vrzrewvz.html

统计汇总
来源：http://www.xuanzx.com/163sdjyqjac.html

================================================================================
来源：http://www.sxryk.cn/163cjdhjlen.html

按语言统计（条）：
来源：http://www.xuanzx.com/163cqbezoiq.html

Python ......... 252
来源：http://www.xuanzx.com/163eekciflb.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ublnlbcf.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163maqhmjmf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163uhyunodl.html

Java ........... 212
来源：http://www.aibaodan.cn/163qpjfkqle.html

Go ............. 212
来源：http://www.aibaodan.cn/163zehymuww.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163tzdojcuv.html

C# ............. 212
来源：http://www.aibaodan.cn/163idsqnapj.html

C .............. 30
来源：http://www.sxryk.cn/163tdghrhrr.html

C++ ............ 30
来源：http://www.sxryk.cn/163lbnbybvr.html

SQL ............ 90
来源：http://www.aibaodan.cn/163yxjgusrp.html

Bash ........... 80
来源：http://www.xuanzx.com/163milcsfkj.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mukuziof.html

Swift .......... 15
来源：http://www.sxryk.cn/163fydgkxqc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ikmpxjlr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vpzoffyq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163gginvtpq.html

------------------------------------
来源：http://www.xuanzx.com/163bzlhprvm.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vqqzcmkt.html

按章节统计：
来源：http://www.sxryk.cn/163lgfdwhtc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163crecxmfv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163klaixamp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mcpnflla.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yowlfisy.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163nnkxxtmc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163baygiswe.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163bwqwdfar.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ykauesku.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163iycrzjlp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vypzbqnw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hnwqwjoa.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tpbjxlnu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163csclneqw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ydqysnjj.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163kokmyecj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rzqpaakd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163iojgecww.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163bfwtppwq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163uokjjiey.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163oxlysxyx.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163pkpjmfoc.html

------------------------------------
来源：http://www.aibaodan.cn/163qdbxqywo.html

合计                                  2106 条
来源：http://www.xuanzx.com/163xkihhssd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zklixwxg.html

使用提醒
来源：http://www.sxryk.cn/163cztsxndl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163aswfnomo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163njqspxef.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163rdtsderr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ueyqctgb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163odjbssjs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163bswtmnzq.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163vplthkiv.html

================================================================================
来源：http://www.sxryk.cn/163vntqxcky.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rwrlojei.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163xnjcxovw.html

================================================================================
来源：http://www.sxryk.cn/163ujjrcffx.html

【收录内容】
来源：http://www.sxryk.cn/163xpywqgnd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163qyrrpzkb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qoildtvh.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mornypaz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163xfzqzrxa.html

【使用说明】
来源：http://www.xuanzx.com/163jmyshnhw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163jrvrcqeu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mvsknjog.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163abhqidfu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163irdeftiy.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163bsmhvrah.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163tkydlmkh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163ukmrdaej.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163thixyqkh.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163fdlllvlg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163uvoeqgfx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163igyrxyuh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163issdjiat.html

【文件统计】
来源：http://www.sxryk.cn/163ddozrtjp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163lujneelh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bzzyupzx.html

目  录
来源：http://www.aibaodan.cn/163strppbxj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163uxfmpcoy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163lqlckadg.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vutchpwy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mhpbhjxw.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wxczxydf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163bdlrnlcc.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163bshtlcco.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bjqiecpc.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nvooynbd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ezzkguel.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163koaelekm.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dhkufqyp.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dqbopypj.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vdpfpztp.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163qnnwnwds.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163zkwpzsxe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iltplwfk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163eevxczft.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163uoqeocot.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163kumbrtuz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bawoapmx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163abauhpjf.html

================================================================================
来源：http://www.aibaodan.cn/163rchbitnx.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163tddldfxl.html

================================================================================
来源：http://www.sxryk.cn/163bprhbfir.html

[A01] Hello World
来源：http://www.xuanzx.com/163ibuoiduk.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ldlbfcjb.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ezoqitmb.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163wfzfrtdb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163rltnpinx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163nwvarico.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163ymunpudn.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163nakawxtj.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163wmhsobbe.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163qqjgsbjl.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163shvjoark.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kmjholnv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163sipocuvw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163dftxicxx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163rsdzxtxf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163clladaab.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163tlamfawg.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163pjhqpigh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163wktulkrk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ylvaztqv.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163drimsbdg.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zwtgbvse.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163getuzimz.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163wycrxaqv.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zvxmmcqr.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ukiazouo.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qswbxcga.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bbszuafx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163vffjklux.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163uosdamep.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163sumqilil.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163izguxyrg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163mptzyhvs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163fwhflqsy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hbuwgfcj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163kwtvktyy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163smbkzepq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rotmwjno.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163knuakojh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163nfexhbko.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163yejrsody.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eidgvyjb.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163hosjclva.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ojnojgge.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163clsrxncs.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163ibsahjcp.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163wckuoxkh.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ewbtwboj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163pecjqlmw.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163nporepct.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163bmhlbqhb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163hqwbjleh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163qyaugsfj.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163vdeldymg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163sorskhnr.html

Py:   str(42)
来源：http://www.sxryk.cn/163astslsnv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163toebgajz.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163fhfwbqmy.html

TS:   String(42)
来源：http://www.sxryk.cn/163lgtbdfza.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163rilhwwgw.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163doaoxlcg.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163iykboduw.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163wxmaypmf.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163nvmlqplh.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163yaojjinh.html


<!-- 参考信息 -->