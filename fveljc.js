外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163saqkfbhl.html

namespace App\Http;
来源：http://www.xuanzx.com/163xkxtjxfm.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163opthnkvn.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gaahbavi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lvelstgk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wfillkxy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vzkqnjbk.html

?string $name = null
来源：http://www.aibaodan.cn/163wkzkmaeu.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163kyvonlmi.html

int|string $id
来源：http://www.sxryk.cn/163ryorvfdq.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163bhrhnrqm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163qkbajuio.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163beqlnbxy.html

public readonly string $name
来源：http://www.sxryk.cn/163fastkqtc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tyknnwca.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xdfihsvb.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163kuphtegq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163xzukvqgd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zvrmftmo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cixqrezk.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rgpozhfj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qpbqlner.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163aspvjamy.html

$obj?->method()
来源：http://www.xuanzx.com/163merxrutt.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163bxxtwqgl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163btoecmuv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163llvfcsvt.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ugnvodwm.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163rbfqkwis.html

"值: {$a}"
来源：http://www.xuanzx.com/163xexfzwye.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zvqxmnve.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lskvrdnr.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163zixmhtkr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163onikkxts.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gcwktcbm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ofgjfbgx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163hufmetno.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163afjilxrd.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dtimkfjd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mzrbrrpz.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163qkfddvdk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jylptupu.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vzjhwwzq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163bcxeroeh.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hnpataiw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zcyrzpky.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163gdrulxgk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163krenvwhx.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tpprvsyk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163cbdcqnfb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163xmqakhqw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lrnivvdx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163uhevwbwt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163lntaltad.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163fiyyvtgo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163heusgppj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163igmktrfk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cglkbdxx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163nyugdvcc.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qbhmwzsy.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163womxlfmi.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163khrtkrhh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163mdgdxyel.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163lejtowzy.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hnndmxjl.html

composer require psr/container
来源：http://www.aibaodan.cn/163cppodrne.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ahrmtnch.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ybsyfmcf.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163sfprwfef.html

composer require twig/twig
来源：http://www.sxryk.cn/163zubdpqlw.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jalcblkg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vhqndtmj.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163nncvlszp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163aixxtzjr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163hoqezaoc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163aeupjlve.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wqnghlnj.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163oxvlwypc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163vyetlgpf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xvkmetaa.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163wrtcpzfg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163acrokqol.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163shwmmdlj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163okqddqlq.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163tcfhieey.html

a?.b?.c
来源：http://www.aibaodan.cn/163siuhcost.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163zdhpbrwv.html

a ?? b
来源：http://www.sxryk.cn/163pnnxtgxs.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163vxothtub.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ubrxvdpz.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163aojtmxkk.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163aspqsfxr.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163fypwviqr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163bmvpjguq.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163rtumuhof.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pouiwrcu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163mtgeouxo.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163mbflvezd.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163erqqtrvi.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tpwmqzky.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ganjeoqv.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fmimmtyd.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rpzpfhpi.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163ychzahiw.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163mptsldti.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lzgmuuda.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163apdmnjtq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xzfhgjxq.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tvqizjvl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jgaiwohl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jdcjvywp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163mlaxiiuu.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ovzbsrxc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ziksdxah.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163tszzjymw.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ooqzwhtc.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yplheoee.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ejuichiz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bgbpxvoi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163tlvfkwzx.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ojljobkb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wnrqcyyo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163hiavqtnd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nojnfgxy.html

[U105] JS：节流
来源：http://www.sxryk.cn/163cooevaks.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163tzixugwc.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163pqerhahn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163sotawqbw.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163xosckyig.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163hauaqfzs.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tplvzwch.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163bnmksjwp.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163pvdofgge.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bigecczy.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163llefvlok.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163yuycgqsg.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163dghgtcwh.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zzrqtnjf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163rpdkcxfv.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dqzeroje.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wlrxhmca.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yxopltix.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nwfxwxap.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mylhpucn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163rbbdyirf.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163aifquebj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hqujkjsp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dgozskyt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163gugepsqi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163bnozkbsb.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163dfwfndzo.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163iplphikn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163pyqjbupu.html

npx vite build
来源：http://www.xuanzx.com/163pvwvdill.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163cxmlbibf.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163btgxhozj.html

================================================================================
来源：http://www.sxryk.cn/163vfnqqeom.html

统计汇总
来源：http://www.sxryk.cn/163vlfdszpr.html

================================================================================
来源：http://www.aibaodan.cn/163bpgzrugn.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163vjzpimgb.html

Python ......... 252
来源：http://www.aibaodan.cn/163vcvmqkvj.html

PHP ............ 252
来源：http://www.xuanzx.com/163xxnhwzqd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163uctiofai.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163hnvycjvz.html

Java ........... 212
来源：http://www.sxryk.cn/163huzfesvg.html

Go ............. 212
来源：http://www.aibaodan.cn/163ukyriwva.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zekbsmhg.html

C# ............. 212
来源：http://www.sxryk.cn/163sbwyfzek.html

C .............. 30
来源：http://www.sxryk.cn/163aaowrneg.html

C++ ............ 30
来源：http://www.xuanzx.com/163zbloztno.html

SQL ............ 90
来源：http://www.sxryk.cn/163tzbhfrhl.html

Bash ........... 80
来源：http://www.aibaodan.cn/163kjocnbao.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163apuihzzo.html

Swift .......... 15
来源：http://www.xuanzx.com/163mwaoxoxd.html

Lua ............ 10
来源：http://www.sxryk.cn/163wijwmrrj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jlasyref.html

Scala .......... 10
来源：http://www.xuanzx.com/163egrbdeag.html

------------------------------------
来源：http://www.sxryk.cn/163ezzjvyco.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163nyngbpss.html

按章节统计：
来源：http://www.xuanzx.com/163ujubhxix.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163aoetbtzs.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163gxsmrrys.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nwipturp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cvunathd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163zslbhadr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163byigpvow.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fwjkhpgw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163netdwnwg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pgbcjanz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lezlvlky.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ubpscyhb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dzecleal.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qjrmmcqn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qepcrpbp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ceivsttf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163donmcdsm.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163qoozrsbw.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163jtbzxxya.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dptmuoha.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163abpquzlr.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163cacerkfa.html

------------------------------------
来源：http://www.xuanzx.com/163xgblkdcm.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ebcrcmdj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fxhqpeif.html

使用提醒
来源：http://www.xuanzx.com/163fnxrnpwa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gufhnikg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163xdiagxfz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163kfcyvvpj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ctbkvmwu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163rssryxxj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163cpdihtod.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163eypczugq.html

================================================================================
来源：http://www.xuanzx.com/163cogioghq.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163bmojjfob.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163redezhfo.html

================================================================================
来源：http://www.sxryk.cn/163pflqtosc.html

【收录内容】
来源：http://www.xuanzx.com/163yddwbsce.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163rcmnwrrk.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163mbnztcuf.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ilfmpcoa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ftaiyxiu.html

【使用说明】
来源：http://www.xuanzx.com/163efiazlcr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163mmaxdbnj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163pyucanft.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163kukymlak.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163myhyimpb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163icqqvjow.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163hkerzdvo.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163qgfwwzpx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gpzogbbt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ttryaapd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163dfdoybeo.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ubwxlxfx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163qyzqqcsv.html

【文件统计】
来源：http://www.sxryk.cn/163kylskzxm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163jounymnd.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lgzjxchw.html

目  录
来源：http://www.xuanzx.com/163gkiqbyds.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ebzssvjo.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163qbeavxry.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163byuzstdv.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163okytgpej.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dyiomsdl.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163trwtlgkv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163vbfdanhg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163grbywjrp.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163zjjysujd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qwwylydz.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163fnpikbek.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xuxczpuv.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163awvknhaq.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rerorxrq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163pnopeycd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163qaefuvfo.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jupywrjc.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163tbkfukgw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qeytiats.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163knusibwa.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tghuqxwe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nlzafdli.html

================================================================================
来源：http://www.aibaodan.cn/163kpjnqfnv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163wlujzpzj.html

================================================================================
来源：http://www.sxryk.cn/163aouvgqxm.html

[A01] Hello World
来源：http://www.aibaodan.cn/163vopofiwq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163furbyxaq.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163kdwcfjgg.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163hoznbqds.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ruibwiix.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163lbsehrrt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fjokknxw.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163vgtwqbix.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163grvceluy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163fdrieqob.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163afoytosh.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163jqtyixsq.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163uierqbla.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163dlxbycmo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lhmssmtk.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ikxiypei.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163lrxnndbd.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jieulink.html

[A03] 常量定义
来源：http://www.sxryk.cn/163vjgpknhw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163trvohqzk.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163pnxqlbvd.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163eackstqx.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163nokglrez.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163sgtlveob.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163ztmgxzyf.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163hhfcdxou.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163cqwaobzp.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163fcqbzyew.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163nqunkpno.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163akrbwcbk.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163grwvzdbi.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163pghvznwd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163mmvoquum.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163vnqoecvi.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qcwvokon.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163harkhdsj.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163aqpztngu.html


<!-- 参考信息 -->