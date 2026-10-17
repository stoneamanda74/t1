外链999!wailian999！

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dcdqtwch.html

int|string $id
来源：http://www.aibaodan.cn/163pgnyogrx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163oveupnab.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ambjjouz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163votpouua.html

public readonly string $name
来源：http://www.xuanzx.com/163znvnjflv.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163titzmsdp.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163fhlnmwzi.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163gqwemniw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163hizawaxw.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163emacmnqh.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163wfeqzkqc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163phcnhque.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163eluclyqm.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163yztzihrw.html

$obj?->method()
来源：http://www.aibaodan.cn/163ikqeinbg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163jscvkzso.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163gcakmukc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163mdijbskf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vhzgiprr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163lydnelio.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ykdvqlhs.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ztdayosw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163cfgcvjqy.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kmoegspl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ejyxtevp.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163eehqnltb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163dpgalmtu.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pccabdab.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cmbadhhn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163boiusbpj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163odcavtlw.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163gaotpywr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163pcnisxfd.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ghsphsig.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163agmheorn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163lasqimxv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fakqhbig.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163wswjvdjw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gaxdaovp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163gudhdivk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rpscepdq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dnxcejha.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ylzadfdb.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163hsucobel.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163tjlbosmf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163rlaebffp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ivvnaczt.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163pigwgktr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163dzilrfei.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163dammqxjj.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163kmjjhodh.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wfwutkvj.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xiscdcqf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163zgmuaokc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163iuvkqmht.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163oekdpggo.html

composer require psr/container
来源：http://www.sxryk.cn/163wzcdafhq.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163uawtaleu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dzwzfmrl.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163dxadbcwf.html

composer require twig/twig
来源：http://www.sxryk.cn/163zzcypfbf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kcuymmip.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163frynyzrr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163moumbfte.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163spyvmtqa.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163pnwjzpjp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163nbsmscrr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163orhijity.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xgcplfdg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xhprfxzs.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163cnogeaxo.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yadabrtq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tsxenkss.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163djwjuujd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163mhvicmfo.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163spiukkuw.html

a?.b?.c
来源：http://www.sxryk.cn/163nokuylzx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163timsbqzu.html

a ?? b
来源：http://www.xuanzx.com/163juobbcdx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wjqhulhu.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163axyunwpo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163zjvamgoy.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ziixgnjz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163qvzrjfrr.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ocxkqjpl.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cbyirnpy.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qrxsezfk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163jowofill.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mhffljnh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163thunsiyw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163sxbmtkth.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ugucscho.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163yzsyjwwa.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163uyodcyvj.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163nnevmxkv.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163mrzhvggr.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163czgnbwlv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163zwriyvjm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163yqayazgv.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163eyqnobri.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163tojtjogz.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ffgloykk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163wcrqlval.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163bsmeusby.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163vprmexlq.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kxdrmpuh.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163wcraeujt.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dastolnc.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163lixnzfkm.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wzjbojza.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163qdjdsdok.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163fxnzwega.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163mldurjvx.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163thgcyozo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zwlioxyj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163dxfwpurv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163bwamygyn.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163cftkanxf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163rymysyua.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qddztbck.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163eghmpcra.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163ijtiksac.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163bgzrthoy.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mijalkne.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163yrijpgvx.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163uztayhrp.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163eysiofhl.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163laecaqtt.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163macylucw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163jzqftqxc.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vgbytmrv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mayyayxt.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163iueiiyft.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163zahseecb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wdrhrevq.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mugikjbn.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163urjsgsyb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163fpuwphii.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ybfsbwqo.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163kvxdrdup.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vqgutufu.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ccmjoowj.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163hsxgyvxg.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163yioyhfud.html

npx vite build
来源：http://www.aibaodan.cn/163fqxlfhwq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163yvnelwmv.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jqzdkvaq.html

================================================================================
来源：http://www.sxryk.cn/163nqnrbsgx.html

统计汇总
来源：http://www.aibaodan.cn/163cdzfldof.html

================================================================================
来源：http://www.xuanzx.com/163htyizayf.html

按语言统计（条）：
来源：http://www.xuanzx.com/163pjfncnqz.html

Python ......... 252
来源：http://www.xuanzx.com/163maqfqntv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163unqklvvx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wqouyihs.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163tayymazz.html

Java ........... 212
来源：http://www.xuanzx.com/163ojgctwis.html

Go ............. 212
来源：http://www.xuanzx.com/163hcrvwafq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163gavtejrv.html

C# ............. 212
来源：http://www.sxryk.cn/163gqccezrb.html

C .............. 30
来源：http://www.sxryk.cn/163nkrvsyto.html

C++ ............ 30
来源：http://www.sxryk.cn/163aeqriqot.html

SQL ............ 90
来源：http://www.sxryk.cn/163vhdwsila.html

Bash ........... 80
来源：http://www.aibaodan.cn/163kddtczmq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163xkqikmtp.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mkbfxfeq.html

Lua ............ 10
来源：http://www.xuanzx.com/163mfbynwfv.html

Perl ........... 10
来源：http://www.xuanzx.com/163jirshqvi.html

Scala .......... 10
来源：http://www.xuanzx.com/163rxjrnzoh.html

------------------------------------
来源：http://www.xuanzx.com/163iefzxrls.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163adyliqxt.html

按章节统计：
来源：http://www.sxryk.cn/163ctyyleac.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qoubqkxp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ucfvnjwa.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gjyntzkf.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yxhzcgen.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163squtyeas.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wauzqmmg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163yifbcgyw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163omdyljzu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163buivjttj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jfarndaw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tofbscfc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yhmrdjdd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xuntbgzt.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163biyaohbx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163jmupyykp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wqeduxsy.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163daxjaguo.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163uzayioex.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ekkpgvlo.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163tqdunvaw.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163apvibnml.html

------------------------------------
来源：http://www.aibaodan.cn/163qxqxnack.html

合计                                  2106 条
来源：http://www.xuanzx.com/163udnibhcs.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163totjdjri.html

使用提醒
来源：http://www.aibaodan.cn/163dlbfzjvn.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tnwcawrk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163coeefbfh.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163fatvtpkt.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ubaksiqp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163kyzvpgcr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163orgpasrx.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lfsuwrls.html

================================================================================
来源：http://www.aibaodan.cn/163ccpvgxfy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163lemoloce.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163dxhqrfwx.html

================================================================================
来源：http://www.xuanzx.com/163kctxiozm.html

【收录内容】
来源：http://www.sxryk.cn/163whkbplsh.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163tqulfxae.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xyrucxgt.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163tijbmags.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163mbngmezc.html

【使用说明】
来源：http://www.xuanzx.com/163rckqbkbo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nggqydun.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sgdorhzm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163csazvsbf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163kvkeqpfg.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tdpbfjjz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163hckzopnc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163rueggmwv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163dlbvtzkq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163iqrrlsvl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163lblxmind.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ynvqkwir.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163entemmox.html

【文件统计】
来源：http://www.aibaodan.cn/163jlkodfxk.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163xjwrmnjg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nlogtmfx.html

目  录
来源：http://www.xuanzx.com/163zxnihncl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zscbyubf.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163irukbdml.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163mjpsjjao.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163kbxcyopu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163awbxymzg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ipjodwud.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163pkqpmfdr.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163zqmdxapa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bcqbczzi.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zshgxcxg.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rndnthxg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163bfvarerz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zjrwrphk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163rfqgbfaw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163lwqpcddr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163agiaurkg.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163qbwforly.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163ddiprrvw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163bdkdolmk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163eztcbcdj.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hzvfzgzc.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wzqqmkgx.html

================================================================================
来源：http://www.xuanzx.com/163twltuupa.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163bvkosnvg.html

================================================================================
来源：http://www.aibaodan.cn/163kkuvjgby.html

[A01] Hello World
来源：http://www.aibaodan.cn/163feloyzps.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163smzzabfd.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163pvrxcuyl.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163ertsxutt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163hemavnxb.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163fnswxffj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163bykqlcqv.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163edjmdpbs.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163zymlabyf.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163xomealzw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163nlmlicjg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163bvrvjwtp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163madagcoh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163pzggiqzp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wpmrbroc.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163mcgdkuoh.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rhooppzj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163eyuhpxxf.html

[A03] 常量定义
来源：http://www.xuanzx.com/163mlckcmyg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163rcbthhsu.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163kebvjdbu.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163uaehefcm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163sjpeabem.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163pdsidoef.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163ryruogky.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163tozgoiqt.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ffqonyjx.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163irotojuw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163fjbexhqt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163matmzmmv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163akwcbayl.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163volrcljs.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163rbwhdvav.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ryvbnrzg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163ixjiojik.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163pakcyhqc.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163tuxqwwuw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163szwbxlwe.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163tbiekjdq.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163iazlaxhm.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ksgovmjr.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163zvihlags.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163epjusgmr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pxxeyxda.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qiroilsj.html


<!-- 参考信息 -->