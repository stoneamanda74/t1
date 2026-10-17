外链999!wailian999！

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wbautitl.html

int|string $id
来源：http://www.sxryk.cn/163bcykqekm.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163uxbpfwiv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163yfgztkoh.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163iskgyjdm.html

public readonly string $name
来源：http://www.xuanzx.com/163mrxwyjye.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ukwuqxwv.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163zekehjio.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ghznekhs.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163haqkpegq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dtsvsxku.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163nqyxkzxb.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163evqmelgr.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163pnrslrhg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163bnxuqwby.html

$obj?->method()
来源：http://www.sxryk.cn/163nvdgbdbw.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ymvgleak.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163rdfxvppm.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163qxctffof.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ivexmqte.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163kxdoujxe.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xdffitia.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163gbjtqasp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163tukfndxl.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163auvhggnf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163asrkqupe.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mblnsblu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sblydckg.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163knezdgwg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163guffdjsg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163uvnnrylt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uhwvhqyt.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163yjsfiptm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fbnrsads.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163gkymlpkz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ryqtpvri.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ektlkmaa.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qupdlmqc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163fzqcoyqc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163hmtvoqsx.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163cxawqpeb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163twolfobl.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ulwpjjkx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tfcjxnwa.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mrzvlrdz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163odkhlfbe.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163qnmioxof.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163zjwbucbw.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163hhpekbwl.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cnkidetn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tecsiyko.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163oecztpge.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163yvlhcmsb.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163oekyaxum.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163auopndrk.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163otvknimm.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163kmgrypfs.html

composer require psr/container
来源：http://www.xuanzx.com/163memdggmv.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163qjvatvnd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ikukboku.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163hpilqdwq.html

composer require twig/twig
来源：http://www.xuanzx.com/163cvoegyqf.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163apjzkyen.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163dgmhnpqc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163lzrzvkza.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163rlcvhhnp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163etuspvyx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163icnwnsyu.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ezjgqhkw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bwzrpeis.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163obncqisb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163diznbboo.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163bwpwpevw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163jnfufysb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dhxqbbvf.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163epgivaon.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163xzadjeof.html

a?.b?.c
来源：http://www.sxryk.cn/163icvbastg.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ugqsvfrl.html

a ?? b
来源：http://www.xuanzx.com/163zqciyvdl.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ikwsoksx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163borrjxtp.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163sdwfqdii.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163bqbmzxlm.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163zsxjiygv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vtcbvcgm.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163pwqdtejt.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qydortuh.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163dgtlwtzm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163dddoarmg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ukuzdkcg.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nvjrdqqr.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163jrgggtxp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163flrtixoe.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dpvesiug.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163fukfjumr.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163pdodyjhu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163jliadjcl.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163igicdlic.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163urjdrxxk.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163djjirihv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rwtgytfs.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qpgbxaes.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163ypgrggqz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ecrqdcqf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163wcjhhhbv.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wkkuhotx.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ltbzrxoz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163bxxnwyxg.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163numjzfhk.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ckhatugs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qijsssuv.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163zsbxkxqf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qyaxkiyj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vhgvigwc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ixdnpnoz.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163vhxydbcv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lquqgysa.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wpvzllja.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163muurwivu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163gtkovpyl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163jhyewnns.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163wulajtvi.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163esixeyrt.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wktndben.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jaywltil.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cxntdjpa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jeqstayb.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tkckrrin.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163qpxhpxcw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163refrweie.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163dtqynzcc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163vapxuckw.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrwjdtnu.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163magjdynp.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mojdhcgv.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163phsgrhav.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163xfztbpaj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ixczhbrk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163czobsbxe.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ccqzcxms.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nusxddka.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163oukiadka.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163nnsfvavp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163drxvqhlb.html

npx vite build
来源：http://www.xuanzx.com/163dmxvvtse.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163wevyaplc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163xjhnqabz.html

================================================================================
来源：http://www.aibaodan.cn/163owawsvgr.html

统计汇总
来源：http://www.xuanzx.com/163tpknvpbr.html

================================================================================
来源：http://www.sxryk.cn/163lcgpxcxz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163zcxuenez.html

Python ......... 252
来源：http://www.aibaodan.cn/163xukjvtnc.html

PHP ............ 252
来源：http://www.xuanzx.com/163xyzgxwsn.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163rgmlfamb.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nwodphpd.html

Java ........... 212
来源：http://www.xuanzx.com/163hzndocru.html

Go ............. 212
来源：http://www.sxryk.cn/163xpjcalqd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163hbawwiio.html

C# ............. 212
来源：http://www.aibaodan.cn/163nberzkvj.html

C .............. 30
来源：http://www.sxryk.cn/163dpcpkbdr.html

C++ ............ 30
来源：http://www.sxryk.cn/163yypbzpmp.html

SQL ............ 90
来源：http://www.aibaodan.cn/163svcknmzf.html

Bash ........... 80
来源：http://www.xuanzx.com/163vlpvkezc.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163yjqsnswf.html

Swift .......... 15
来源：http://www.xuanzx.com/163ciqvanxw.html

Lua ............ 10
来源：http://www.sxryk.cn/163kqbwpuet.html

Perl ........... 10
来源：http://www.xuanzx.com/163fgfjcyft.html

Scala .......... 10
来源：http://www.aibaodan.cn/163zyyjwseh.html

------------------------------------
来源：http://www.xuanzx.com/163zpyubqmn.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163msrlqljh.html

按章节统计：
来源：http://www.aibaodan.cn/163wglvvxvl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jckpvzmm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qedhmmgo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xdezhtsn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163enhdjubg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163bqswnsqy.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yrhfqpfk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ljuvhvlz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wbrrnksb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tujlmkse.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tmfmihve.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rwzpppbz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ficdbxpi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mfpxmflb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163irbwspdu.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163anpwlark.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cewtalxn.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ftxpxcfg.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163wvmpitvd.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ijvmipeu.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jnnzoguy.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qvqcucct.html

------------------------------------
来源：http://www.xuanzx.com/163eolwbnuk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163lxhktzcs.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163unuhlyxe.html

使用提醒
来源：http://www.aibaodan.cn/163icoeswzj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ydwnvyli.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rfcjqbgu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ptoxqxea.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163hjuuxzcy.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dktkecyh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163objucpwg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163tzwecahl.html

================================================================================
来源：http://www.aibaodan.cn/163tlplzlln.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163qivsjmdy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163ecueluie.html

================================================================================
来源：http://www.aibaodan.cn/163icgsysgc.html

【收录内容】
来源：http://www.aibaodan.cn/163uorkigtx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pisqhdsr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163tafgeegz.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163wkzufgpg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163lsazkzht.html

【使用说明】
来源：http://www.xuanzx.com/163ajsvemwz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163tenyijeh.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163eikfhdzy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jowtpunt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163oakadyoh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163thdxdiak.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163zqqoxivi.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163rndelabx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bdrxubpo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163avxtdaye.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fpgvvyoz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163dqojeroj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163iplvkfjd.html

【文件统计】
来源：http://www.aibaodan.cn/163mzlmzfbv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163arqsewvy.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zhcremio.html

目  录
来源：http://www.xuanzx.com/163xqxusppg.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yeziorkk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163oqulpalj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wfsbxpfy.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fdkmokvb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163krizjqrp.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163bdlpohbz.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163syyeyfzx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qxqkdzut.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163aefvuuos.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163tizhkqrc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hmgbeggj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xfpccztz.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qrovsdpp.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163funbfwqd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vvunwfzc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163yxodyvhj.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xywrcnjs.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163linqplzt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163zjjanjlk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163oxsqfxgr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tgxfvxnh.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xkabbfkv.html

================================================================================
来源：http://www.aibaodan.cn/163mhokluxg.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163csebofno.html

================================================================================
来源：http://www.xuanzx.com/163iqbzpody.html

[A01] Hello World
来源：http://www.sxryk.cn/163zyhdssrj.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163vwzaqwkp.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163uiifiaxu.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163fyfrwkzn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163nuxggeuo.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163ezfcoteu.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163amnpqksw.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163bgzclgiw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163zrsrbuzn.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163rjeyyvty.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163lyofsjss.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163yictcpaw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163gejaxhtp.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163nikcigxo.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163rrlswmry.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163esyqsekh.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163rdogeyay.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163yudgtzeu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163zaavcuiy.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gqhqofvk.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ztdsuvou.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163zeboumyd.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163njttkaxq.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163yyymsiys.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163nracsnps.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ymgtwwxs.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163mgnomtbu.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163xemlucap.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163dzrnittq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163jlnskjyt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163hiexexjg.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163txfgglfl.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163zadwsvbe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163viuwrpbd.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lawmwxiv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163zztbdbvs.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163hizkhxzs.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163eqcukevi.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ohfxdzbm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xnvnfefq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tgzgvtkr.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163grnuegze.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163liqrpagu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ocuzzegd.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mddynzhr.html


<!-- 参考信息 -->