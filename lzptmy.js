外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163hdkifkve.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kolbnrlo.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ekzgogpr.html

?string $name = null
来源：http://www.xuanzx.com/163wrcqugrn.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ifhbqhzq.html

int|string $id
来源：http://www.sxryk.cn/163wprvepfx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ikkmyxum.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163nujjiixa.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rktkacyg.html

public readonly string $name
来源：http://www.aibaodan.cn/163spptavof.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zossgegr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gjyykgss.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163mgwpkpkp.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163caqdjzzl.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ntzxrzon.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163enkwnfin.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163djpaamgb.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ukhaxavx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ygrmzwzh.html

$obj?->method()
来源：http://www.aibaodan.cn/163avswgane.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163qjrriwhu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wawibmmb.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mrtfqxgo.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ujxucfqu.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wucbzgqi.html

"值: {$a}"
来源：http://www.xuanzx.com/163hurlwosf.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163botyglrb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163vxqyigvg.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ogbwjmje.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lbvemfbh.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163fxmgczwi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163qflpcvre.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163hfnbqzpz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sopzbprw.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163icidrgyi.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163cwdwqtzi.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163neztuksy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mchznrmw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qrsjwkve.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163xkwvrbjc.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163dstsoycl.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163soihlbdd.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wkfmmuig.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163vuvkxbhh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163bqwwfvaf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163guhasfgm.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163dvukoffq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rlikkzly.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ymbtohnu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bwibvaxm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wnwfcvtb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163glcjltmi.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163atgdrjwi.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163knarcssh.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ssfweeda.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163pncojsvd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163mbddxysq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163nzejhjzf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vxzbsmxm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ukpxaksq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mrivdqry.html

composer require psr/container
来源：http://www.aibaodan.cn/163xeloxafc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ekrjmxuq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ydlpekmn.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163gwsojawd.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xncyyfdk.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ftbewsly.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163zgdnzlnb.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163okvcufnu.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163fifehovc.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163zudbixyp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163jgvqclvt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ptfugadp.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ejqlzwfl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lnmxmnyv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163lvvojnro.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163dtxljugd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163arrploju.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163qwdmptna.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163pibdanxb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163aupdnavw.html

a?.b?.c
来源：http://www.xuanzx.com/163nemornez.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bvrfwuyn.html

a ?? b
来源：http://www.aibaodan.cn/163dclyqnsg.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163yxcxfswo.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163dtjyubrz.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163osdmemwv.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163pchhbjmb.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163hqyofmwc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gsxetnfd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163wdnubfod.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gyfqinwd.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gzfgiwbr.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dqzdtsht.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gevbdwpq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ofhrrdzn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163diqzgbue.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163tavwukts.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163awntbjzy.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vbbgwkrt.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163qufgsiae.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vswmvniy.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qarmkkdv.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163auknoiyy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163troacqki.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pxsesvuu.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ofswrwzw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pnqvtnwk.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dpbohgih.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163truepgqi.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jgrgvwtx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lslsvbev.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qxryqklv.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163iegiqvxi.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163fvngkzik.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rxztmxdj.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163liuxrfis.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163flzhjoze.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tjgpgwwc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163djaisnhu.html

[U105] JS：节流
来源：http://www.xuanzx.com/163hyokfndn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fpdmixtg.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163iypblety.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163dnqwhbfq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163gmlaueyr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163wshkmjub.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kgxqghsq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163xcnlullt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163itxjpljm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wsgotovw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ljprmoix.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163imaydlpo.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ksowyljg.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xxrnwiib.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163oududuza.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ylcetedq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163gfrxviwz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dfskvzcw.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163guuuiuws.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rqytvaji.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163evncwvjd.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163skttnwxb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jzmzhmoj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163evouqbma.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163hzsrxsuk.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mzghvdiv.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163njhmbavh.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163oidegult.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163fqqrzvka.html

npx vite build
来源：http://www.aibaodan.cn/163wkfseqgf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163zldmtklh.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163kxrsnfkl.html

================================================================================
来源：http://www.xuanzx.com/163edazitaa.html

统计汇总
来源：http://www.aibaodan.cn/163hipthpnt.html

================================================================================
来源：http://www.xuanzx.com/163fxfkgcpo.html

按语言统计（条）：
来源：http://www.xuanzx.com/163uprwgyxd.html

Python ......... 252
来源：http://www.xuanzx.com/163wyqprsxu.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fuckdtko.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163fkxhrvdg.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163snwednfl.html

Java ........... 212
来源：http://www.xuanzx.com/163lwvskshm.html

Go ............. 212
来源：http://www.xuanzx.com/163hpaolwqb.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163usahvihv.html

C# ............. 212
来源：http://www.aibaodan.cn/163ieeernfm.html

C .............. 30
来源：http://www.sxryk.cn/163wndksyzk.html

C++ ............ 30
来源：http://www.aibaodan.cn/163vqqeozcn.html

SQL ............ 90
来源：http://www.aibaodan.cn/163zzmihswi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163vjphnjgy.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163wxlyglwf.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ksvryrjt.html

Lua ............ 10
来源：http://www.sxryk.cn/163lbxygcne.html

Perl ........... 10
来源：http://www.sxryk.cn/163odgkkwzb.html

Scala .......... 10
来源：http://www.sxryk.cn/163oapfvlum.html

------------------------------------
来源：http://www.xuanzx.com/163jtitumir.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163uerncugb.html

按章节统计：
来源：http://www.sxryk.cn/163zgnlsbfg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kapvckmt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163aknrpqgs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qfhxmkhs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cstyxdrh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163deuqyoku.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163iipuagkc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mdftfkuy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vmdrijtr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rxvhedmx.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ciqsjmby.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163drlpmyit.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tozwjcvb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xgchzmqg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163utgqmajw.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163waetwpmr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163mtkthtke.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ctvfpjba.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163znheifuu.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163oipkpaye.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163cgekduge.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163bmkuldvg.html

------------------------------------
来源：http://www.aibaodan.cn/163tjuzqqyf.html

合计                                  2106 条
来源：http://www.xuanzx.com/163hclhipge.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tgvhpnxa.html

使用提醒
来源：http://www.aibaodan.cn/163cogkalmk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163klabkedx.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163zocyocjc.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mcarswod.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xlteyank.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163utlgkuda.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163ajxazzrw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163yyyzmitu.html

================================================================================
来源：http://www.xuanzx.com/163tfmxmstc.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163zsulpdry.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xvvphpom.html

================================================================================
来源：http://www.aibaodan.cn/163clilxlcn.html

【收录内容】
来源：http://www.sxryk.cn/163oaxrlldr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ywpboywu.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163grydcqtp.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163sthvulki.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163lkiincul.html

【使用说明】
来源：http://www.sxryk.cn/163kejgmefd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163gliqlfii.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qwochxjy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163tigrdhle.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163expbwqap.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qeqkunag.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163kwdbkkfw.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163lqlptbyc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163bfedpoef.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163hhzukvom.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163zwsrksqb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vxszfxwa.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ublqaloy.html

【文件统计】
来源：http://www.aibaodan.cn/163qlwbkxqj.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163gdnacaaj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fliryfqs.html

目  录
来源：http://www.xuanzx.com/163jvuzzkvp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163btbsxjoj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163nkxulavv.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163pfmyngbe.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kcsjyyrg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163scowqbcb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163aazegzug.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bgywnfjj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163mmavieaa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163zwehfwcb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163anddpwdn.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hbonjtdg.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tnzvhtgu.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ijlrgobh.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ffwpapuu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163gkdgcpkc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163fwwideky.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nlgkitrn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163umhrlzyi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163komycbpb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163oabpmkoy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bwpfnngl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163vrugpskd.html

================================================================================
来源：http://www.xuanzx.com/163nncgrfvv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163ddkchgwr.html

================================================================================
来源：http://www.sxryk.cn/163bllhoyuz.html

[A01] Hello World
来源：http://www.sxryk.cn/163dbpjmzih.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163vyaygxru.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ighaeyjm.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163bptsabaq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163wlwliwxn.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163xqkxreuc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bjbsibmo.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163gwhrvhsx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163rouwewde.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163fxwjzfju.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163egbtowyg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163krvhovfn.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hrpvrmgn.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qhrzwwvo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qdoirudr.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163uhtkzeoc.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163udyonqvc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163htsalrta.html

[A03] 常量定义
来源：http://www.sxryk.cn/163owcbrxil.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163zzgnjozo.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ajcfalyd.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163yqmhxjxw.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xiiltulg.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163hxkendvu.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163twurfskj.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163cqmooibm.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163tobkvynl.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163xgweskyu.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163uvssknuh.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ogpjzfcv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163xnybfpko.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163gehgqoea.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163neemsczx.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163zzdkrlcj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qennhims.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rrdsjekq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163kqdwfcxd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163rdiqlxai.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ndgodnud.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163czgnngbe.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fuagmwbm.html


<!-- 参考信息 -->