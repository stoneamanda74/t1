外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163tagvjagu.html

public readonly string $name
来源：http://www.xuanzx.com/163ckiptsjw.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zvbeoebw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xidqccvq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vrkcecim.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163aljknvbc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ztmzpmxw.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163gknqcwbb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rlbqeiem.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163plwppwoe.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163uuxoggqw.html

$obj?->method()
来源：http://www.sxryk.cn/163oixgujyo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cwdynaxc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wecxqtjp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163qxkjiqvy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pjycnwpr.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163gesbrazz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163nrhnltid.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gijloarf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ojenutgr.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bfjwpock.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uilyexsq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163phoxhcdr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163omtxkzjm.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163xpqdmiwx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vmiptgjm.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163aeouxike.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163xxphxocg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rvppwfix.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cyrnkvjm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qrhzieps.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163izestdsl.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zktvwzwo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163vnbzqfrp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163xtulpmdn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163apynxcbv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163jbwpakhf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kmofojnf.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vvekjrvk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163cblnbkfx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163stnpwuwr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pmvpzncn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163orxgojos.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163rqnckuuz.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xstmazne.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163usmmwhhx.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163pqwrwuxu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rmtcitwl.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hllvyjjo.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163plquwdpa.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wojstoep.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wgmcsvql.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wezichng.html

composer require psr/container
来源：http://www.xuanzx.com/163dbcnuodr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163pprhqcwf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163pjqqdvov.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163clogruqm.html

composer require twig/twig
来源：http://www.aibaodan.cn/163smbyvcaj.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163utaunkwv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163wcmkrsvb.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163iteuvtah.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ugtatsah.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163srzmkxzi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ugagdnbc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163kocosnrp.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163bwhvbfwv.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xcqhwuce.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kaplzocs.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ptljbldh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rrwqqtjw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ukwrwbjk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163fkhbmfcn.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163achuqrzi.html

a?.b?.c
来源：http://www.aibaodan.cn/163gvnclvpm.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163ktgjyboa.html

a ?? b
来源：http://www.sxryk.cn/163nrgxqeem.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163dbynellq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163vdfzuouu.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163jrvdypnh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163plklgkag.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163pknnldxh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ljltyfrc.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163hnxrqfty.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eohpxgwn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163lxkxqxgm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163hqyukdcl.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163oevuoctp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jnpbckpp.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dfsseaha.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163cdgrtncr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fkahskag.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lcjboljv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163teyyrqcq.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163bqftyjwr.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163pmieyvcz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zosuujku.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163nbzqjzoe.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163omwryeva.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fmmtbyrl.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xlyarjle.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ufyohreh.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163soziqgrz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mfnoyakj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163qwygvwms.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ozcqmtng.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pxugemuy.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163aidtjlik.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163cqhbfrxv.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fdfkqkyg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163spoxyjpx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163rgktotfi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nsgcbidw.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wcabxazv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163eksoyidd.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163oxgldpbg.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163idsowfyf.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mfxziaus.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163sooysyeh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rsqnhyaz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qzehtsyv.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xmzjchdx.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dgxuxevz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kzvfffey.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jjbqgjrs.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163wibyhxuk.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163uqrugfvy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ephlwpgx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gnrohlpc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163iwwlckaq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ywoviikx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163erczjzqr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xguleocx.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pxlbaznr.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163vwgpehwg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163wknviucx.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ouokndbu.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bxwzsnmy.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163mmfomgpa.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163dxoslolu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kdrlwnhy.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163twdskfag.html

npx vite build
来源：http://www.xuanzx.com/163fuvzzssh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163irkcffsf.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163iiwhlhja.html

================================================================================
来源：http://www.xuanzx.com/163kxfpdclk.html

统计汇总
来源：http://www.xuanzx.com/163mehpibmg.html

================================================================================
来源：http://www.sxryk.cn/163ufftwrri.html

按语言统计（条）：
来源：http://www.sxryk.cn/163ycebacli.html

Python ......... 252
来源：http://www.aibaodan.cn/163lewlphkf.html

PHP ............ 252
来源：http://www.xuanzx.com/163dampqair.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ymwjbctm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163gzxiuuvu.html

Java ........... 212
来源：http://www.xuanzx.com/163czcgfrna.html

Go ............. 212
来源：http://www.aibaodan.cn/163zjarmhav.html

Ruby ........... 212
来源：http://www.xuanzx.com/163phlsdpbt.html

C# ............. 212
来源：http://www.xuanzx.com/163pecfmbdu.html

C .............. 30
来源：http://www.sxryk.cn/163rljtvlwh.html

C++ ............ 30
来源：http://www.sxryk.cn/163izkbtbnp.html

SQL ............ 90
来源：http://www.aibaodan.cn/163gybnwtmg.html

Bash ........... 80
来源：http://www.xuanzx.com/163eyfrwhvw.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163bhujebei.html

Swift .......... 15
来源：http://www.xuanzx.com/163knvwpwlt.html

Lua ............ 10
来源：http://www.sxryk.cn/163vsvuxrcz.html

Perl ........... 10
来源：http://www.sxryk.cn/163tomrnida.html

Scala .......... 10
来源：http://www.xuanzx.com/163ypptqfqb.html

------------------------------------
来源：http://www.xuanzx.com/163zbuxrpql.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ecizdhzr.html

按章节统计：
来源：http://www.xuanzx.com/163agmhrijq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163haokehpy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163szgtssdb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163oopwctmu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fllagbrc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ufjxavoi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dvddldoa.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163sjedhlxm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kjfvffij.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163prlyajlt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163akvxqkxk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lihhsluz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hfqotxqm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qzvsoggc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163aexcynzf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163nkawfjii.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kbtlyqbr.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lqapzscm.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163eohsczya.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163ddrhoqvi.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ixlpecnu.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ydexohfi.html

------------------------------------
来源：http://www.aibaodan.cn/163foozfdzw.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163exljcwex.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163amzgvojt.html

使用提醒
来源：http://www.aibaodan.cn/163bpztdura.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jqpnjkem.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163peougvtz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163czkblzzr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163guxiorvc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qhyydtgf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163snqznwgw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163hkbkxnrz.html

================================================================================
来源：http://www.aibaodan.cn/163uieqgzfp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163tarchfum.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163brjitptp.html

================================================================================
来源：http://www.aibaodan.cn/163kvywiklr.html

【收录内容】
来源：http://www.xuanzx.com/163afbbqflh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163axxerhou.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163cgneewkb.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163klcraudu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163tjiopvzr.html

【使用说明】
来源：http://www.aibaodan.cn/163hmqucvyz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mrqbebkm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163twrjyffv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163rqnpavhz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163dyekdffj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163bqxzvycu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163kxjbtgsc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163vatxfbip.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ngsnfhrr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163vyldbwaj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163unzrvkzq.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163zjeyahus.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163fvhybfrb.html

【文件统计】
来源：http://www.aibaodan.cn/163agqdclhe.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163ykxhdann.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jiczkqrj.html

目  录
来源：http://www.aibaodan.cn/163pfmkktwo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ypnupfwb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ltwedtpe.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fjvorqai.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163sofjwmjy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zgzznguz.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163ffatkequ.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cuirswns.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mssyhfyx.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qaqtacpa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xfxdyrdt.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163shxunpyw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163kltowlif.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hojeswxe.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oaclxrck.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lizztihg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163lsryrnff.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yswyoubk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pklrqstv.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163anelynqj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163arbvicbu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jynwcxmn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ufrwfvyc.html

================================================================================
来源：http://www.aibaodan.cn/163olriyjij.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163qbenhmdg.html

================================================================================
来源：http://www.xuanzx.com/163cpibmjsx.html

[A01] Hello World
来源：http://www.aibaodan.cn/163glqamweq.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163wkqftviy.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163wsinycmu.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163uhdpwwum.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163mqkjaxxx.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163cjoejuno.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163bbajvfib.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163mrraltsh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163nhudhuvf.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163yatrxofp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163rfwdlsao.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gxylmmlc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163mygetjac.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163anryttiv.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wcuifomz.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ipldxjsg.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163tyjmelyb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163irydekle.html

[A03] 常量定义
来源：http://www.xuanzx.com/163ibommerv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ncvkqxay.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rgammedz.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ugfnajov.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163kbtybmru.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163vvyiakdf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163saxtlhdk.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163pfgukqzw.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fppltjim.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163rtzkfgek.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163hiplzfoh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163pymcvonk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163dszzplew.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163cwezekkq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163bxangtdu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163nvuimgre.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163jhfgtozt.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163dnyxxzqv.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163rzchloai.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163gtwnnsnh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lghlpvhl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163azlefhgn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163uqikucyq.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163wovqhyvo.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163iezvbdhr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xfxxupar.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yeltjyic.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163nubbjzei.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cdbxlyhv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163udobphpz.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163nwbiveag.html


<!-- 参考信息 -->