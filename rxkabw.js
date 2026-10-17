外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163oxqayntf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163gzrdnxnj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163rjfztjzy.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cqlwmasq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ethkffzz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lynfiihm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tqosekdq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163sgxnltes.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163gpoydqhz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zsnnccll.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zasbmbdr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cjfkhgmw.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ilmkztej.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bkekxedq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sprknzmd.html

?string $name = null
来源：http://www.xuanzx.com/163hiqlvxbx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hynpwwhc.html

int|string $id
来源：http://www.xuanzx.com/163suligkuc.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163evndthid.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163bslwuoyg.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xcxogzcr.html

public readonly string $name
来源：http://www.sxryk.cn/163esmhosew.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163okjcidjq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163fnvnycqw.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163anfbthad.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163tbsnqoxa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qllfgzqo.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ebvequgp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wzeewohb.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gqqhqkho.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tlwssegq.html

$obj?->method()
来源：http://www.aibaodan.cn/163pspporzs.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163exfigyee.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163qwfmcbuc.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nzwsoqcf.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gpuqdbjk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163latnbiog.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fjzpqpqp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zifzofke.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zkdquimw.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163sjzigrek.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163avzcllot.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163mpkfzxpe.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pxsfbbnp.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163ymdrqiuf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bryupqsk.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ikbvwrpk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163dadsnsrd.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163pyjvpihu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ytdmylam.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163vgjwuvhu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ctlwtaco.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163dciucmdb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163mtrawxkp.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mieiiwbs.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rtzumzrm.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163mqkbrlqr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qbxdawit.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jrgsogfl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163cwderxec.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mpxrsnlg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ezufyrdl.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qpjvlhjn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wjcyktco.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163ijuzztps.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163thlxzhvq.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163gmploryg.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ctaltlbc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163sqbbolbv.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163mgyvrrdz.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vhidyjel.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163lfpjmncd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163qbqrjldb.html

composer require psr/container
来源：http://www.aibaodan.cn/163ejhflwmg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ocwixssi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163qiavmxuh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163bnrbzuzo.html

composer require twig/twig
来源：http://www.xuanzx.com/163udbnwsnn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vnmpbiqk.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ururmjnk.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xbfbaajw.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pegriqxx.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163eyjplvpn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163yvypuvnf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163axftgqug.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163kzdcsrbx.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163aygtehih.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163lthejrbh.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163yczilacp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163rquhafkh.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tfxgigsq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163txoojqoi.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163laaemfsf.html

a?.b?.c
来源：http://www.xuanzx.com/163ewqaxdui.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gdjnfwfd.html

a ?? b
来源：http://www.xuanzx.com/163lamfnwzb.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163mcqnghbz.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163rntzvhtf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jietavtb.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ptliguxa.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mjldlgca.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163syyucaqm.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163vzgrdfkx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yuaorezd.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163etdnggiw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163germgnyh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163eriffljy.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163eybgurlr.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uwwhbhxa.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163cbsdywwg.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163uhfwxvyt.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zgylqcad.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163kwdmkmet.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qwvogpax.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jqfkqqbe.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gchyhxws.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ljxhosls.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yhxebqih.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ivyhnicd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ckhwljfh.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zbvsqmrq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163tnrgpumw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163mywzbhbt.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rwehitqm.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cmdzrhfe.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ixovegtt.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163pzdmlqlr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wqnfzqgx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163mhyrktkj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jsjxvzme.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jrcqpqej.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163srjvmmsn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163echryceg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163emldfwnm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163hzjvwmpy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ezryycvq.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163cbhcrkio.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ohtrnptv.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pnlmklnk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163oowupaey.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163xcrrfrou.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ncymhjwu.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163oyetwhek.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163cppzdxdr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xpvlcinn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163qqfmlbya.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pdklcnnu.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163makknyqz.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163oqsniiyx.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xncizjja.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163ingnawra.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wgdppelo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qlgklyqb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163qlzvaocy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163usqvpnza.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163lnozmyga.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vxgjrayq.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ixlzmkrq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163xrarnqzc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uusxkqsm.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hdaalhwc.html

npx vite build
来源：http://www.aibaodan.cn/163ltewaixp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163rkoishyg.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qdncwrwo.html

================================================================================
来源：http://www.xuanzx.com/163eevzrisb.html

统计汇总
来源：http://www.aibaodan.cn/163abgfkunu.html

================================================================================
来源：http://www.aibaodan.cn/163jbzkzmpu.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163zrpqeiet.html

Python ......... 252
来源：http://www.sxryk.cn/163lravdanr.html

PHP ............ 252
来源：http://www.xuanzx.com/163fjuksfos.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163aizqjmyr.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163ejsmbfpd.html

Java ........... 212
来源：http://www.sxryk.cn/163nokbpbuh.html

Go ............. 212
来源：http://www.xuanzx.com/163ynhrdulc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163ttqhadtc.html

C# ............. 212
来源：http://www.sxryk.cn/163tuwsfczk.html

C .............. 30
来源：http://www.xuanzx.com/163lbvkebze.html

C++ ............ 30
来源：http://www.aibaodan.cn/163etvvsmky.html

SQL ............ 90
来源：http://www.xuanzx.com/163lptovvdi.html

Bash ........... 80
来源：http://www.sxryk.cn/163cfzqovye.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163mofayjtm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wjlblzmc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163xkzgpdms.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zazttbiz.html

Scala .......... 10
来源：http://www.aibaodan.cn/163levcqlml.html

------------------------------------
来源：http://www.sxryk.cn/163llhkhkgq.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163yeffgdgc.html

按章节统计：
来源：http://www.aibaodan.cn/163smqrbsbr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zlbluiin.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yuekzjvt.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bnielcns.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kqkyreqz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163yloacuye.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fenpzenk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fpucrpsg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163atbpvrqr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ozpfoemt.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163vdmpiosd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ltsrglbi.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bugpnuyu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rqmxinva.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vqskxbnk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163yrsyyesg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hzsuaxgj.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163zcdzlaty.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ayhbibhy.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jmoctyns.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ffyzjsts.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163lqoqjxge.html

------------------------------------
来源：http://www.sxryk.cn/163wcovnqhu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163cxgobkou.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vtxnuvpt.html

使用提醒
来源：http://www.aibaodan.cn/163grmdvlig.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wmjpnuqs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163tbovkazp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163xqdwrjkh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163yotuavbl.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163bxjqlsfn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163tajiiwqd.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163bnwsdexq.html

================================================================================
来源：http://www.aibaodan.cn/163jnxwnruv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vjpkbwsc.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163nmlaobbv.html

================================================================================
来源：http://www.xuanzx.com/163ywsgnqwl.html

【收录内容】
来源：http://www.xuanzx.com/163seuxyutu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ytlolhuw.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163cjpadyls.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163cufozzqh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163pbtryodm.html

【使用说明】
来源：http://www.xuanzx.com/163sgaovyvt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163alwndlel.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163urryoyqd.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pzvmmuas.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163huvkuoyk.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163zzgrmgtz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163thrccums.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jhwiwbyz.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163mcdloyln.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163scdymddu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163iobcfztz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ysvyyzzi.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163zrcfrifh.html

【文件统计】
来源：http://www.sxryk.cn/163nvaaquqp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163fnaugsbw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163rswxefam.html

目  录
来源：http://www.aibaodan.cn/163lnkondtb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163muymffqm.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163foafiqad.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qcdiqxip.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vhmhthav.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qkjdgzxk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163efitxyyq.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163boalsrib.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wkcysncb.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ueqepumz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fhxxxlmv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163tyavrmyk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tcglwzxs.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163duffumit.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163fgtshbqm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163kusrchbb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163fgyamtbn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vbobgexr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hcjmmjuu.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163pnjyytqr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163prooevyz.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fmpwiyvj.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gusgmmsx.html

================================================================================
来源：http://www.xuanzx.com/163txpmydnm.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163zwkmkaxp.html

================================================================================
来源：http://www.aibaodan.cn/163drgnhsmi.html

[A01] Hello World
来源：http://www.xuanzx.com/163qleqkpss.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163iuflysbq.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wqniqqul.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163qfrqkqra.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163uylhmjvy.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ojxlacwm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163rhrcdipl.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163sodfxgrx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163llhfgmpo.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163hjyyzqiw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163hhanqftl.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163connylyh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163yvmsshlg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163nxdbcwiz.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163jcluiwyc.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163tushuplx.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163scfgmleq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163llxsfvjh.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163oocxvzmw.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163lfajbqvw.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163eavtqozz.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163rmgdpqps.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bsckangt.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163wwlsnadu.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163ntnnypsl.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163vprmmkku.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163ukxfogwc.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163olhzpxst.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tjhutsfw.html


<!-- 参考信息 -->