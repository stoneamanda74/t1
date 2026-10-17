外链999!wailian999！

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163huvwvrzw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163maznpbci.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xddeutgr.html

?string $name = null
来源：http://www.aibaodan.cn/163byferodr.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163bzlighgm.html

int|string $id
来源：http://www.xuanzx.com/163bcmjgdlv.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163zwoeqeln.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bhrtydau.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163apbqyzin.html

public readonly string $name
来源：http://www.sxryk.cn/163qvtofjfu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163whwprlxv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163mopmgozi.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163yzsnkwne.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nxxfdmef.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wmtikttb.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163eklxbcek.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163netrkccu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bdljsbvl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163evqmqqnv.html

$obj?->method()
来源：http://www.sxryk.cn/163mjagzkhh.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163afcxdmrr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163yhjyhwey.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163xohwzivj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fjmfdjzj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163jbgrybjh.html

"值: {$a}"
来源：http://www.sxryk.cn/163guueanbr.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zwyvtlih.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163urwwzuba.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163dlylfhby.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gimjxagj.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163pmrziftl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163duankkbs.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gszwoyvq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xbglplxj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163eukimiwn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163edlnumeb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hpjgposw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ushoeyby.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mgpynwgm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nopshbvs.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163yzujrnbt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163milzraun.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163rerntyby.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ncljnxyf.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163sgaxixdp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163imywmpqr.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163idansmrf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nbdtttqj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ybxljzdr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163trmyywry.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163bwjxrntx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163dzccybbx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163czuqpcvb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dgojxyue.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163kkwcdoag.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ujhlpexu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ynhxbnwz.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rpkgkdui.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163rpfmipxw.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163twyihrdv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rrzprdwd.html

composer require psr/container
来源：http://www.sxryk.cn/163ffblslwk.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gozbcmvs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ghcnwakc.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163faxbpbla.html

composer require twig/twig
来源：http://www.xuanzx.com/163ezomjiei.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163trhiurub.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ddgwpepi.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163drgkstdk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163gtzmhctd.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163zltjlsjn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163nuizgwvm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163foctmsao.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163mlkcvilj.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xlzzqehz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163yaryotpf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163qsxwcbgy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ggidrlsx.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163nwqpregr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163klaouqes.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hydbajuh.html

a?.b?.c
来源：http://www.sxryk.cn/163rwsviyvp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163onmfnrae.html

a ?? b
来源：http://www.xuanzx.com/163porkzlkn.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163jfhyacve.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jglvjkfe.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163jcmrwymb.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163yjftqodt.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mmnspofz.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163twefnkdt.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qlaxinek.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ujdyxphx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bzbcljqn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163tfkwspkt.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ottdgrxy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163iryvxtac.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ttntzqvb.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163cgxskzue.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163zpbdmhph.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163cysizapq.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163ouatmdiw.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163mjgafomb.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163onsizcke.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ezmqwdbq.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163wnntuphx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hzzruooj.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163fvyvqnri.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jhiopioc.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163nbceqmsn.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xoesfrao.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163qerevmrj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163obzdnckj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163mtleqezx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163mtxkczof.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163jgbcpfpz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ashxedim.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163andtzbcz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163sjzprqzj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163stnqjfap.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mudeqrzp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163weydjmoh.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163flapvvbf.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ukfhethv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163uvaokppt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163jbrdhauk.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ktdushfy.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163hfneoigl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163qokwmvkm.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163eiffljur.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rvwpdrgp.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gxsauxob.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163lchqdslf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163deeelecj.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163tjatdvcc.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kxfsubgo.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163laobbqob.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163vfagpkdv.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vbncvpeq.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163blsietew.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nrbtfizi.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163dcfucjrl.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163meimmkdk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ktqlchhb.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163dizbfyof.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mctleabo.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163zpufaozk.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163eyhdhyzc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163trusgxva.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163eytvdedu.html

npx vite build
来源：http://www.xuanzx.com/163zbwwcqxm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163lnbpyngh.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163tiqwujpr.html

================================================================================
来源：http://www.sxryk.cn/163kpnqgune.html

统计汇总
来源：http://www.aibaodan.cn/163xelbzuzj.html

================================================================================
来源：http://www.aibaodan.cn/163vhvcmvnq.html

按语言统计（条）：
来源：http://www.sxryk.cn/163opertsou.html

Python ......... 252
来源：http://www.sxryk.cn/163huzboqub.html

PHP ............ 252
来源：http://www.aibaodan.cn/163cpwhttjk.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163lrwuwcha.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163epyfptvq.html

Java ........... 212
来源：http://www.xuanzx.com/163kmvvygok.html

Go ............. 212
来源：http://www.aibaodan.cn/163sfndyzde.html

Ruby ........... 212
来源：http://www.sxryk.cn/163zvhkwtll.html

C# ............. 212
来源：http://www.aibaodan.cn/163lydkwpxo.html

C .............. 30
来源：http://www.sxryk.cn/163cdsxyllc.html

C++ ............ 30
来源：http://www.sxryk.cn/163xplsgnus.html

SQL ............ 90
来源：http://www.xuanzx.com/163yyigujyb.html

Bash ........... 80
来源：http://www.sxryk.cn/163wxxtibog.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163qkohrowt.html

Swift .......... 15
来源：http://www.sxryk.cn/163lorotwuo.html

Lua ............ 10
来源：http://www.xuanzx.com/163qxsqnheb.html

Perl ........... 10
来源：http://www.sxryk.cn/163wvnlldoq.html

Scala .......... 10
来源：http://www.sxryk.cn/163itirkkbl.html

------------------------------------
来源：http://www.aibaodan.cn/163eaepnnxa.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163euifgevo.html

按章节统计：
来源：http://www.aibaodan.cn/163kkmnokuq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ydailhxc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xqguabwz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nskxanxb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cgvvrkuk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163nlrvphov.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ptpfuhmq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ugcxczfu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qeufqhhu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ztvdjttk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163qmstubrb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ztlzfwer.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xgzgkmqa.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ygifgkyi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163tbagljpn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163zhljxwra.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bxfiwykj.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bfjcnhmj.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163kzqoiqni.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163dqbrgzzw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163nxkcluui.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163zrwppajz.html

------------------------------------
来源：http://www.aibaodan.cn/163egahtacc.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ibyemoue.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jgmcjird.html

使用提醒
来源：http://www.sxryk.cn/163szffvzvc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nudufkpd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mqwrzrsn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ywwxxzji.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163nvtmrudh.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163diuvcnvm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163pqtgphhr.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fefvwaur.html

================================================================================
来源：http://www.aibaodan.cn/163vieqzqkx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163clnvhzta.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163russfovh.html

================================================================================
来源：http://www.sxryk.cn/163qopifftb.html

【收录内容】
来源：http://www.aibaodan.cn/163ztoivdkq.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163iykvhykc.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163jpaqcoit.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163fbpzpgxm.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dxjhxjwq.html

【使用说明】
来源：http://www.sxryk.cn/163jktkseca.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163bxvvvoni.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163acqkqlcl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jlxhdbey.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163btcttqfz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163xivozijk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163czwnmgsu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163griuuxve.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163kmlwpvai.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163cyjsuxxk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163rjihyrig.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163tecbixru.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163gynjoyrn.html

【文件统计】
来源：http://www.xuanzx.com/163psniywex.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zckocsoa.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jxycquvv.html

目  录
来源：http://www.xuanzx.com/163dgostxke.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hetxldey.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163bumatvqs.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hijjtupi.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kkcohkhi.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hvlfuipd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163xsbmnwjd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163vvuamwho.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163ttfaijtv.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163xppgdlnw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163exxgjnmd.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163npvolycy.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163jvuqbkjq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163vehvosps.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163hnejnoza.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163viqyivgp.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ickjmonk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163smqsfvaw.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163zfpxmtto.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zreltrmb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163ysigzmfu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163uzodgiwq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163abywosev.html

================================================================================
来源：http://www.xuanzx.com/163ailyyxaq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163yjscgvgu.html

================================================================================
来源：http://www.xuanzx.com/163vclxnwup.html

[A01] Hello World
来源：http://www.aibaodan.cn/163vhvkwtox.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163pzkdexku.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ivhfuarq.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163wufignhh.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163lfzmjafj.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163nvzsqnka.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163erzjbdku.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163itpuzecb.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163owqjatvj.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ipjmslfw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163uqjupziv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163pbbwtxoy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163enceticc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163oapixojh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163npqdediv.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163arwqzwgb.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163kdpedorq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hdqyjeng.html

[A03] 常量定义
来源：http://www.xuanzx.com/163blhzvczs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ylrtxxts.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ouwweifh.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163qfxzoknb.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163usvqnshh.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163feucrgwo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163htkdnnsd.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163onfucdhy.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163uedeihnq.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163ueorolkv.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163pjftflmy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163rftpbhzo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163hijlahol.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163krceijvt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163qhcaeusz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163hxaulmgm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163ahbmsvau.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163qpetxbuc.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qwgdljyz.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163pklgcfgj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163jbrfzzuw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zepahceh.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tsbwmjap.html


<!-- 参考信息 -->