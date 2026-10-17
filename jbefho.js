外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163gzalpnwx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ppvvhkuj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163aolchoqq.html

?string $name = null
来源：http://www.xuanzx.com/163ykgskodt.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163awdxmwew.html

int|string $id
来源：http://www.xuanzx.com/163zbksvcpx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163gyldixoj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cmwdnrqq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ddbatubr.html

public readonly string $name
来源：http://www.xuanzx.com/163zsgodyvo.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163emcshulh.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163fanomhzi.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pvazakkz.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163mrqahqhv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pndhmbrl.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163trvymjdu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sddtthwi.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163uipfwnfs.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163nzgocnqb.html

$obj?->method()
来源：http://www.aibaodan.cn/163kzscgjis.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163fjaynfpc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ikzgsvzm.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ulxgbcve.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ljtzdsff.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ycyysrhy.html

"值: {$a}"
来源：http://www.xuanzx.com/163aibgdguw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tmjbzxcj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163mchepvjn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163uuvbxyta.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163syblqghn.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163uuoxepxl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wptcvrmt.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163hxtkbbce.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hwxwtehi.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qqwpdkll.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163arwcmkgn.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163kgtzlwjg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163pffbiadi.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mliiqnbf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hksvjwyi.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rtwwiwvo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ighkswbh.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163yyahmnzg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163jkjoakek.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163wvpggjnp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163fwnncaih.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fngiuoxo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163tzucqpyj.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163awuiawfp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gpitkcty.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ghzotrfj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163xacqszki.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163yjyhbuyx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mpltglvf.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mjelbosb.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ofvxvpcx.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163shrkospq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163klbixvrw.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wmvuhpxu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ahscesee.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163bcgkkztk.html

composer require psr/container
来源：http://www.sxryk.cn/163zhflqcib.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ikugcpan.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163dzifckxh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163jdrxdriw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163rrnfqylw.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163vpqvyvxh.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163butfwlgl.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ocliehxx.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ivdnzqsi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mjvszaij.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163vshaiafz.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163rnmykfzr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163fomiylsb.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163qwjbtete.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163idacuftu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163aeonwthv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163nyhbwtxg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ynvzjwqf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163tnlsccqc.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163odejlrit.html

a?.b?.c
来源：http://www.aibaodan.cn/163bhxpxjie.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163aajouhwy.html

a ?? b
来源：http://www.xuanzx.com/163ycwjtkgq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163efghgojv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wvmvvpdo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163tyastqsn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163hufxiyga.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ixlcptrt.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vnwpjluv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163jwilxvhh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sikwtbzn.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163bhprqcpg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163chhuhfqw.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163lansncam.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tbjkzecm.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163cmkmbpln.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jgljpxbf.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163lopunabw.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163gmtviddq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xybsuygd.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163alyrkyof.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163vxlsmkui.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yyuxbrva.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163trphcfvl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iaqrshda.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mijvwfuj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163kqvwjmxy.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163yowwwbzp.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163vqgmhoda.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kntoxszr.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163oyymhico.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163aduopgoa.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jmqlytsp.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163bdtzjlri.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ryhlzcmk.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163jadnrnki.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dodxjlos.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163qgjbqvov.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ddhnhzdp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163cyxdyxtf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163aewwkqsy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mrbitthi.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tsskaawj.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rvenwxxa.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163dsphhfdg.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nhjjlwbd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qctklrkm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163oxlbvqtd.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163xomcybgt.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qwyenlue.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nhsifuhr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ztmjmmlm.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163keyuxoml.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163sjsmhjdi.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mceqqzcd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bptvhzxu.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hfmwgopr.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163odgnsfhs.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qrkifxek.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163ugtcpzwu.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163jpjponmo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fghtuhmv.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qdzliaep.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wzvmegoe.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163zjtthzdb.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163hvcwymqe.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163bbcxespt.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ktnoiood.html

npx vite build
来源：http://www.aibaodan.cn/163ukdsbasc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ylqjcbjg.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163sdtvbzkw.html

================================================================================
来源：http://www.xuanzx.com/163zvawjeur.html

统计汇总
来源：http://www.sxryk.cn/163osiqmqhc.html

================================================================================
来源：http://www.aibaodan.cn/163qlzhjnof.html

按语言统计（条）：
来源：http://www.sxryk.cn/163srqqvtxc.html

Python ......... 252
来源：http://www.sxryk.cn/163udwlwaeh.html

PHP ............ 252
来源：http://www.sxryk.cn/163euayzyma.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163odaixyxc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163rldlozto.html

Java ........... 212
来源：http://www.sxryk.cn/163mkkjbyrz.html

Go ............. 212
来源：http://www.sxryk.cn/163tkyysxxs.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163lskqgscf.html

C# ............. 212
来源：http://www.aibaodan.cn/163xmtybgsn.html

C .............. 30
来源：http://www.aibaodan.cn/163wspwttoe.html

C++ ............ 30
来源：http://www.aibaodan.cn/163gzfulgid.html

SQL ............ 90
来源：http://www.aibaodan.cn/163acfndhlg.html

Bash ........... 80
来源：http://www.xuanzx.com/163szljtkul.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163tvkuorki.html

Swift .......... 15
来源：http://www.sxryk.cn/163xrlptaja.html

Lua ............ 10
来源：http://www.sxryk.cn/163xnokrfvd.html

Perl ........... 10
来源：http://www.sxryk.cn/163ctwbjdne.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kguphdib.html

------------------------------------
来源：http://www.aibaodan.cn/163hqdsolbb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163kwizjnor.html

按章节统计：
来源：http://www.aibaodan.cn/163rhfdkxeb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163oihzhqgi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aczkavvi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jweiikva.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kdcygstn.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163uaqbwyym.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iitchizo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wuwejeyn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163pnxstklo.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jugpmvhw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163urpuybfk.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gkqsrxne.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jdwwflel.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zfjhyvhz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163tdmptlwb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163zmhdwtgu.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dvgtxmwk.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163pmjkfbxv.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cxocdhfb.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163feopvwcw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163nolmzekc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gvcvqail.html

------------------------------------
来源：http://www.xuanzx.com/163jiakmuna.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ynlsppxf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ynqrpuhx.html

使用提醒
来源：http://www.sxryk.cn/163uoitimdu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vpictijb.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ucrjbgsr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163bbqmagzi.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163dbwstmsg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163osmbzhtm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163jtbbwmfs.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163oggnhabv.html

================================================================================
来源：http://www.aibaodan.cn/163cnfrhbdq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163foppguio.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163qoptwnaq.html

================================================================================
来源：http://www.xuanzx.com/163uujwqbea.html

【收录内容】
来源：http://www.xuanzx.com/163kjjcuobo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163gnxaqrpm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ulkjhqxq.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mghiyxdy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qqkccnav.html

【使用说明】
来源：http://www.sxryk.cn/163cknunwnd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163hwcdamwt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163fabfwmnh.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ptirglcz.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163cgbdwxyd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qexhxgtx.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163hfggaood.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163odkxuabv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ayrcijwq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163xgqlpdco.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163cnptvgil.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163kbafmnfd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163furpzaef.html

【文件统计】
来源：http://www.aibaodan.cn/163yilmjzpg.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163tqfzhmwo.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tmggjlgq.html

目  录
来源：http://www.xuanzx.com/163ezeofhrc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bayrszir.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ykaymaux.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mcjorndp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jltpfumn.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163eiwapywc.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163xozekztb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163czkeuokg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163syxihskm.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ecitjiqq.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163huiypplm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zcndeqmy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jtcvskgu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lcoshrsc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tpwehxkw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vmvanyxj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163jhgcfpjl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sqtxibvg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163jswgadqt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163xfusbtcn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163nxdruohh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163sbyhyzch.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dnqrminj.html

================================================================================
来源：http://www.aibaodan.cn/163pdvyfggp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163sudpjucm.html

================================================================================
来源：http://www.xuanzx.com/163tucbkcav.html

[A01] Hello World
来源：http://www.sxryk.cn/163qxzmpbez.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163dbzsviqv.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163nghrhkxq.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163oxyqsrrt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163zonaghlr.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163mmguyvxa.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fxfxrlru.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ngbssfno.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163ehuvsvfd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163mdezrbxv.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qhzyqpkk.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163xiqzixvr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hgfjyatb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lrdyedlf.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163atzlnrlp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163wsgzamhi.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ieohueqh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163ulrxjebh.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tvejicfa.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163uqsnftug.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163kiailhix.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163svikxekv.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163apxdazid.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pmvslxbc.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163grtotduv.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163giwxnmgc.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xdjlodsb.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163nrsetjpl.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163prkgjmvu.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ftgutjig.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163bptsnyqw.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wvjerjpv.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163iampbpmp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163dqwfxnpo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163fbjkqmgq.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163dtxnehjh.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163jlekyvki.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rpldsbzk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lwkbgvon.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hpohriix.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163echeeqac.html


<!-- 参考信息 -->