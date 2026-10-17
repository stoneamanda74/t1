外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163iaedhnda.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163uvvuimyx.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163dlhogxcu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fnzqfbnz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163zrnarvpm.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163jkewbich.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ltweikwo.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163eqvauryy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163mjgzhksf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163gjblsvgo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163gdagetfd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163szpvvopy.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163cmhmamns.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ognmnuel.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163cppelxhw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163grutygxm.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163weypolwy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163souhksao.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163tqqkuuej.html

?string $name = null
来源：http://www.aibaodan.cn/163bpfqmcgf.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163bunwaire.html

int|string $id
来源：http://www.xuanzx.com/163bszalkly.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ohfalawb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163muzgzsst.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kompeuyk.html

public readonly string $name
来源：http://www.sxryk.cn/163kbftdvtn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163khotbbbg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nwmbkici.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163mbeoqwxg.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163kssegtvu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163iwftnwzc.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qlsbgeww.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163mkpwtcyd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163dnmvqayd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rlmpbnys.html

$obj?->method()
来源：http://www.sxryk.cn/163zomdyszb.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kohlzged.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163pgqswaeo.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pfwpwfte.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163prwheglo.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163rrsgrrgi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163yyrajmcd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wqixdrlq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zggmqqjy.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163kklolvse.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163suoysouu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wndtskvj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163cdbegpxn.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163arprihcc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rldkbegg.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163eonzhxsh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163izytxehf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ukmmscwp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hseybzdb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ophsmtao.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163xvlzhyzw.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pmagklss.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fmzbktmi.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163zsnotcas.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163oxzudlds.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163xmfyxwzs.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qbqlfhhg.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163sthdxtpo.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rmtqxord.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oqalqkgm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ddzoiirc.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163azmtrljl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ydvzflmt.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163waxexvgo.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163blprsmka.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163pzzhaotw.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163kxgdwfig.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wqrcnymg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163yfxbjipo.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163cghuwcox.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ikbidmga.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163battgqfa.html

composer require psr/container
来源：http://www.aibaodan.cn/163cvjmemla.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163fgxtmxig.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163uoqrhnsg.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163trrsdcnr.html

composer require twig/twig
来源：http://www.sxryk.cn/163ybuyphvo.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qjpeqlrm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ncpeslhp.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ydalfquu.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ovyzlftf.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ddssongp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163foufdioo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163amvlsmao.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163apqhobrn.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ougtwcbg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163omjxdozc.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163izipfqsg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163iveefebm.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163sfmjerbp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163jxbihzdh.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163beodxfeu.html

a?.b?.c
来源：http://www.aibaodan.cn/163grzlmxzt.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163daymxiwg.html

a ?? b
来源：http://www.aibaodan.cn/163utieamqp.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163jgwcufkf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kzugpvdw.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tbhendyy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mqeauopz.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ommhquua.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ymwcrvsd.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163znzdnfyh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hpudkvxj.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163righmiiu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163spgowbat.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xkgqcosl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ljpxrfmx.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163eugopizl.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cfvoikhl.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163dhinebah.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163yltgalbb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163jhlpexoe.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163mhxmteux.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ujqksjvy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pddmxhgz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163icfquaew.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cozmoxrj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163jypsyevg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qsoonzlj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163wwxlramx.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163iqlbbjkg.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163oovfpnzg.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163mrjbotpg.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ptfhzfui.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163kaivamml.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163cqcklmaw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163kkhtlvet.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163kzdgpomm.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163pauwyuhr.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mnophmja.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163niowlspa.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wnejeuwf.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163dbjjaqaw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163knkpenqk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163xmtmhbdx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wnkmmvpu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163yoafnlgf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163qpxoxcrt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pxrocxva.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163nadcfsql.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xtetdswe.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163itqicwym.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163umitbtku.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163hedpsgfe.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163cxlndara.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163tdkifjkr.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163pnihfaip.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ddtgydro.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ssygxsnk.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163osyinbql.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163nwfekwtj.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163whaxafst.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kndiseha.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uosjdfql.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163phrumdbk.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163vvteudxy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163wbbxqzbk.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163aqxrmksz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ciapmsir.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163gqvdzrqu.html

npx vite build
来源：http://www.aibaodan.cn/163chorhdsd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163ghvwqgnw.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163dsfstsnz.html

================================================================================
来源：http://www.sxryk.cn/163cfodnofp.html

统计汇总
来源：http://www.sxryk.cn/163thgakfdf.html

================================================================================
来源：http://www.sxryk.cn/163ptmpcfjy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fcxqtfst.html

Python ......... 252
来源：http://www.sxryk.cn/163ibwpmmit.html

PHP ............ 252
来源：http://www.sxryk.cn/163jmkzsqps.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163pnthzvdi.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mdaawkwz.html

Java ........... 212
来源：http://www.aibaodan.cn/163bblibace.html

Go ............. 212
来源：http://www.aibaodan.cn/163wmjqujud.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ipigvvga.html

C# ............. 212
来源：http://www.sxryk.cn/163tpwjzvlf.html

C .............. 30
来源：http://www.aibaodan.cn/163bjhxsnpu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163kopskvgt.html

SQL ............ 90
来源：http://www.sxryk.cn/163shwzjogj.html

Bash ........... 80
来源：http://www.sxryk.cn/163rmczioyu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bxzpsoqx.html

Swift .......... 15
来源：http://www.xuanzx.com/163rjfwwupk.html

Lua ............ 10
来源：http://www.xuanzx.com/163fppsencx.html

Perl ........... 10
来源：http://www.xuanzx.com/163wdxegqkw.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rlbaayvw.html

------------------------------------
来源：http://www.aibaodan.cn/163sybzfsfu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jolxpmua.html

按章节统计：
来源：http://www.sxryk.cn/163hrzynxds.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lkqhdudi.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ufvgfidj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xubqjlgi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163xnaklfuf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163kflalpgq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pkjcdcss.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zlxyfpoy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163cyipepam.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163relscvev.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kowhvlwn.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gkkhjxhj.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163babhoiwe.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oesgfpdn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yhaiinfd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163khhsnetb.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xqvsidqu.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rtkmobab.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163pcjldpoc.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ipibjtjq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163dytvwkuh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nnmhwjjv.html

------------------------------------
来源：http://www.xuanzx.com/163yhervkjr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163abpyzlog.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nydncqgt.html

使用提醒
来源：http://www.sxryk.cn/163swmjvjox.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ikpikwxs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163qugbwmup.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163euuxhdpp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xzuklpvk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163inovkhhs.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wfgfcrlu.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163bpwywhpz.html

================================================================================
来源：http://www.sxryk.cn/163wezfbfir.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163fnuofcoe.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163vtflwwxw.html

================================================================================
来源：http://www.sxryk.cn/163xkiagarg.html

【收录内容】
来源：http://www.xuanzx.com/163ggfovrlz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163fyhjbgxh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163msimlfik.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163amzdbkkb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163wortizwd.html

【使用说明】
来源：http://www.xuanzx.com/163nhaprlaf.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ztfinekf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163tpprzsxf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163amhectpw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163clwckrbo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163ayltlaea.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ksnfhxjr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hyladglp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163wypohkxf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163jbxrakin.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163uxhjslia.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163uyndqrdz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163pujcysaa.html

【文件统计】
来源：http://www.sxryk.cn/163vptfxhaq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ssiydbfg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163mqnscany.html

目  录
来源：http://www.xuanzx.com/163hcuowskv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163glgjhvus.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oozkalfk.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163acxhysaw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jwjtupjp.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163zctaukjt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163glhbenhv.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163yrckdqhw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cmufmsqw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ugyhcueo.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kppmercq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163rbfqpxbk.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pyfajwpn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xoazxkaa.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ypyovont.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163vdxcmgee.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163fuzcwzso.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hnfgyxwr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163nszqnixe.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ibtvgpjh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163brgqwioq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163amlazhzt.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163spwnjyti.html

================================================================================
来源：http://www.aibaodan.cn/163gtrrhcim.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163kuuttcos.html

================================================================================
来源：http://www.aibaodan.cn/163rnmkvmuc.html

[A01] Hello World
来源：http://www.aibaodan.cn/163whrqbvyr.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163icqfpxbf.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163njisbrso.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163rbmedrnv.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163kzkhroaz.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163mlztiomh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163pxqwcuku.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163diaewrkr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163pksvkyzf.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163jkmnlynj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163fmcysglx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163uzoevnvg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163dlloerik.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lpnljpou.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mvbomilf.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163tohfbxcf.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163oripmsva.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163rigpudmx.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bwwfppbu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163gqzckmis.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163jwpfnlnc.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163qojijaie.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bghqibaw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163snjintoa.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163kqgtvnwl.html


<!-- 参考信息 -->