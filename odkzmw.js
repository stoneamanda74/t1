外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163bndrwjpc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rguxvoma.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jivscnge.html

?string $name = null
来源：http://www.sxryk.cn/163rraqkzzv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163sxlasfpx.html

int|string $id
来源：http://www.aibaodan.cn/163ugulxnhp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163auewhqyu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zntkdgoh.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163pqqvtkyv.html

public readonly string $name
来源：http://www.sxryk.cn/163mydhvebb.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tugpqkzx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xqsmdpef.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ntrdszjn.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wnemzzlv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163jpeqzlhn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mcfsiwef.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163yclbqhli.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163lcxvkilh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163fkuczfhy.html

$obj?->method()
来源：http://www.sxryk.cn/163ehjkozit.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163iklbmhvn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163esiumoqe.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163jopbtdqu.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163akjhuucr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hnydqicm.html

"值: {$a}"
来源：http://www.xuanzx.com/163bipglwxr.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163bqiojcnn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163pzjsonqx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163mudwnkzq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163nnxpkurl.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ulqlpecu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163yxmmqwme.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vtchqjaq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163chgzucpe.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163akebckco.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ejiiybwz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163dwpwafpk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vctncpwh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163udbmpsbh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163uprcqndz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ymfaskhq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wkqjpbdx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163yfcmvxpu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xvidnify.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163bexbxjew.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163rsajkhhc.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163djzomvss.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163bnvmoboq.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163adagbvcw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163lpezwmmy.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163oxeecrwy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vzqmbgym.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163jcmwuxqb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163giugyilz.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ohhjtero.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dwvrqpsx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bdcwqbyn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163sxumcgxp.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163vtehvacx.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163axjmhrqw.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fswaqmix.html

composer require psr/container
来源：http://www.sxryk.cn/163tadllyyu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163mberkedn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163rlgefpyn.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163dxiuxrgr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163tbwyznbi.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163lcvntgio.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163rxawinrk.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163pluqkikw.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163htogknux.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163evizapsf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163aokigrzo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163bbdolxai.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zarqqhwi.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163wlzeshri.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163qrrxjisd.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cbzwrllq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163bluxkfct.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163wapexaiq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cdpbbgia.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163befftaks.html

a?.b?.c
来源：http://www.aibaodan.cn/163uvszkeia.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hkwqvktp.html

a ?? b
来源：http://www.aibaodan.cn/163djpjbmms.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163srtlgnsy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163iwkipxvo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163zlbtxqeh.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163etwkbbbi.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mkgmzjxs.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mvxyfndt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163emgwyobk.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163aewkdzkd.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163tkvwhqor.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163nzyuiotn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163uzloycrk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163tuzmerhx.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163gwrvlrla.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163ubszrusj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163yyvsozjq.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gfzcemur.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pxtvoowz.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163wjbxmhtu.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163yobalrve.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kfvuqpsc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zlpsbgvd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pdxwzatd.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fatpbttd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163lvbxjlwc.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163jfjcbxxt.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163dtmplhdv.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ubdljcsd.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163btemckjw.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163oncljqte.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xxeyjsfk.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163obrzwmyr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163bqoyzogu.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hncvyugf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163nksmcmoe.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163bcqhufmf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zqdjsdjr.html

[U105] JS：节流
来源：http://www.sxryk.cn/163olahqnst.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rrbjjeps.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163oevoafhu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tytfeobh.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163hylqsehi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gfmctrgq.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163drzinebc.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163avwieaao.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xedboexf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ngngmdvy.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163homaziud.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163oqtxcnwu.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163kpruoqgc.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163xcuubyhv.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163yrmnnbtc.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163fpdqppdg.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163cybbipce.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163uwtyoqdy.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163jxevyqrf.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163egiesqqq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163hsmlivts.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163iefxygkx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163mlomuaxe.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hmmwybds.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rdtzwisf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ljvymxmh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wlmmirpi.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rkesllvp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ieguwhow.html

npx vite build
来源：http://www.xuanzx.com/163mopadkxs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163rabnmylk.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163piwoypuf.html

================================================================================
来源：http://www.aibaodan.cn/163nvgjqzcl.html

统计汇总
来源：http://www.xuanzx.com/163jmxyvaho.html

================================================================================
来源：http://www.xuanzx.com/163brlbpxep.html

按语言统计（条）：
来源：http://www.xuanzx.com/163ghtbxfcj.html

Python ......... 252
来源：http://www.sxryk.cn/163yiqskjcb.html

PHP ............ 252
来源：http://www.xuanzx.com/163fqxvoeel.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wtymfbpt.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jattadng.html

Java ........... 212
来源：http://www.aibaodan.cn/163mepdtswp.html

Go ............. 212
来源：http://www.aibaodan.cn/163pkynwncz.html

Ruby ........... 212
来源：http://www.xuanzx.com/163osdcpzin.html

C# ............. 212
来源：http://www.aibaodan.cn/163qerxbywe.html

C .............. 30
来源：http://www.aibaodan.cn/163mtndcptt.html

C++ ............ 30
来源：http://www.sxryk.cn/163sisxsydp.html

SQL ............ 90
来源：http://www.aibaodan.cn/163idtsjjar.html

Bash ........... 80
来源：http://www.aibaodan.cn/163xgmgismz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wgpfihoj.html

Swift .......... 15
来源：http://www.aibaodan.cn/163hdwaxqkl.html

Lua ............ 10
来源：http://www.aibaodan.cn/163nvbwqxbt.html

Perl ........... 10
来源：http://www.sxryk.cn/163bvvkmwol.html

Scala .......... 10
来源：http://www.xuanzx.com/163vvvzkvlj.html

------------------------------------
来源：http://www.xuanzx.com/163fvxfikcf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dxoxmpqn.html

按章节统计：
来源：http://www.xuanzx.com/163qxvhgkbv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gcgoyccc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163rhvfwxpv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mnigeycm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163twwjbzjt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163sxsimmzy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163jdbprpnh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mreeigkv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163vkrrgxae.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nilwychv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ifmhfxgm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163muwxofzv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nzypflqb.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163igrpjpdc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pelgcgod.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163bbxicbkm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zwvtrvos.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163kvhyyvni.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dipisnoq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ybypnkem.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163naoclkmb.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163hyfwltya.html

------------------------------------
来源：http://www.xuanzx.com/163tqthjase.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163nocwnpfr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163asrloldm.html

使用提醒
来源：http://www.xuanzx.com/163tcuqhcoa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hlmnqpci.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163avnbenja.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163fhbiwesg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163gfmnspdf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163lrlhrbko.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163aaxleohy.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bvmkclox.html

================================================================================
来源：http://www.sxryk.cn/163pyvkcvvf.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163sqcibfad.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163lsspjxaf.html

================================================================================
来源：http://www.xuanzx.com/163kpzzvqxp.html

【收录内容】
来源：http://www.aibaodan.cn/163lnmkbugn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163tazcmxeb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163oabyprss.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ibkoirqe.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163yhbdcewk.html

【使用说明】
来源：http://www.aibaodan.cn/163zvmjfyln.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tmxvksbm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163iyeopccn.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ktcyfjif.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ontdjxcj.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gzevvlbv.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163mjradipz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163wlbjrohh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163lrxjhvus.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163vqbxahjb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163npuzvdqg.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163nfmfufti.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gjxnpzis.html

【文件统计】
来源：http://www.sxryk.cn/163ardpkvpi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163emrewuun.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163momittuv.html

目  录
来源：http://www.sxryk.cn/163nqpcodfv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tddyzytq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163avteoubl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163iuzpbxfj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163zjpgvhyc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ozadgvwy.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163kufrfmla.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cuxlcuuy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oorayvxi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rooksdik.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ilyyaweq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ieadshif.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163bggngpjq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163trzsjvam.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vndxkbxa.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ejyjzkvr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163nvkywojl.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163nupyejiy.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163yvcgwhxy.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163qzoalssd.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vrlbgicc.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wbtiwaza.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dqanhhjw.html

================================================================================
来源：http://www.aibaodan.cn/163stevhrod.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163wuzycany.html

================================================================================
来源：http://www.aibaodan.cn/163tygsucwj.html

[A01] Hello World
来源：http://www.xuanzx.com/163bkhdgyij.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163xzggagpc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163mocgpnwq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163mrgdzgyh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uhufhjsy.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pmdjqxgd.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163bkmeffdk.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ywishztx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163bharfgxv.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163ojikbtvm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163lxpwjyra.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dseywxjz.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ykvuolms.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163wvaawthp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ujdegkiw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163blekorto.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163weysdlyr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163nbkfsxkc.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iicdnujq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163smogujdq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163mwbrmnfn.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163knopvwwy.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163dfgcbavz.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163lzcwmney.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163pbnchyer.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163skqbffft.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xftbnrnx.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163plgtnjat.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ccucpojn.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163xrqadccc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163vfmadndj.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163sdoxsmcd.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163lqmnecch.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163eghwifjs.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dnpcudih.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163zifjhdoi.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163cudmogkl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163wiztqjzm.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163qxohnmff.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163amppoqsx.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163feggbhvw.html


<!-- 参考信息 -->