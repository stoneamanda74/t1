外链999!wailian999！

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ojvumubo.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vbrflkka.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dgazsdaa.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ijcgbpat.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163urfasmap.html

python -m pytest -q
来源：http://www.sxryk.cn/163ybbpxhtj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163fjwtdblt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gnsargud.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163wnhywssf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ffsfoeyg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jmkgsjxx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163uslwkjyu.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163iwjwtmxb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163aahaytjt.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ztadxwlt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163lyjukxuu.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163tzrddwmh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163rbvtsvlg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163jbrsafsp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fzrqcjrr.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163embtyvcb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163vwzbkuyw.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jzsxkxdz.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vdmlrvdm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ducrgtam.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kdboykrd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163fwcvzwrr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wipohscy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zicajyyv.html

namespace App\Http;
来源：http://www.sxryk.cn/163mwzpwups.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163wsoldgro.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163njawudoo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163hjxwwcnj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bkjopnkr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xlgcxsqr.html

?string $name = null
来源：http://www.sxryk.cn/163xzxwcxum.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163kzvxappb.html

int|string $id
来源：http://www.sxryk.cn/163vwvruilc.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163clscvkmr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163tyxfywak.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cxdrymlu.html

public readonly string $name
来源：http://www.aibaodan.cn/163bznezuzl.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163dvqpkxee.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pfasujvj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163bichnaew.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163yucanitg.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163thkkfjoa.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zcgnevfl.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163vtnupswt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163nvzydizd.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rirxwsbs.html

$obj?->method()
来源：http://www.sxryk.cn/163qizomyrc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fzzjxtzw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nybnxzyz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163atmkeivb.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xzwbtjzh.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mxqnignf.html

"值: {$a}"
来源：http://www.xuanzx.com/163xdpqwrvy.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163yawyuhlp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hoyasiuh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wfiwtunc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163igujpypt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163aaozrssl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163slxtzbxv.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ubqsvgyq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wwupuply.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163xwrrgacx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ijostmts.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163skfgwqhb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fmdfausg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163huuexxyn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163cijammfz.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wojoxled.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fmqmaxfq.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qvqmbfhz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163mpsnlcli.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163jbgkhydh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163inczwmls.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163sseuifsy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163zgvjltrr.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163yfzlsvsd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163whbgjguo.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163iapsuupx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nogesjmp.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163jhawkvmd.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zyyuutck.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163frnvhpnq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qfhcurhr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163fperwrvf.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163oyckndcn.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163qrkcqyix.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163qhqyerbf.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163lxphcsbm.html

composer require psr/container
来源：http://www.sxryk.cn/163ekxenswy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ipwnzvhu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163oqujczro.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kluwdlol.html

composer require twig/twig
来源：http://www.xuanzx.com/163qjbtefdv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163sqzzsscd.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163timwhejb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163nyryufzk.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163wzbtmmfx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163iwibtxha.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163bpoeypdl.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wnzgihjz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163zaqxsvwm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163zgvgtmcx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163dhvrrrrz.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163mbvxhoqv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163daxrmiym.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163hgzpnqvx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163pcpawwyr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163lhqzjwbp.html

a?.b?.c
来源：http://www.aibaodan.cn/163muerxijm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163csjztswd.html

a ?? b
来源：http://www.sxryk.cn/163kyesnubf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163eyrboklg.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163vlpjgeob.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163gialxbte.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xiqynnvm.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163tnbylohp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163nrjcssup.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163hhhlibda.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yttvhksu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zxqyojwd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ednxpwuk.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163teulaayi.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ckrtwzff.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163olmotado.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jzheecfr.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163oygdybkz.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163itjaxqey.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gfvqbaca.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163dibtbyyc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163wpyrmene.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dwibqhbw.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163hdotqwun.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nhgtnxjq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163polzbuam.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163wrgkqiit.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163ouijwwww.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zgxzqpyk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163ustibsmq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163allwnxys.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163mjtwfmcj.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163emjgvqlx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163cpojniqz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jolaegpk.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lorteqzl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163esadffqj.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163wsizulhh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qahblpty.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ltepduob.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163drbzugks.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163njpxekzm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dtfukowh.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mzvaiiwn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ejkzzxwh.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vixqzgyz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jeubdnfm.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gufhhvox.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jyibsorf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gldnlfpd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163mvbcfuzz.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163cfbcbqjl.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163rrsdwycd.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163uxoqtddy.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tcfosqft.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163cmlbonwo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oagxblzo.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163luygmqed.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ragocmja.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163nhkaqiyc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163aywlmeas.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xivywbps.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tyruoodf.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163fgjyhdns.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163sfjgobgu.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ajstrgbr.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hkkyfjcm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ahwkfmgk.html

npx vite build
来源：http://www.xuanzx.com/163yofmyqdw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163dwzllpnq.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hmndeepa.html

================================================================================
来源：http://www.aibaodan.cn/163enrgnudf.html

统计汇总
来源：http://www.aibaodan.cn/163fxshtdvs.html

================================================================================
来源：http://www.sxryk.cn/163onqyroym.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163yvxbvadm.html

Python ......... 252
来源：http://www.xuanzx.com/163unbvoqbr.html

PHP ............ 252
来源：http://www.xuanzx.com/163cqofjqnw.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163iphyboow.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163lwvwrmam.html

Java ........... 212
来源：http://www.sxryk.cn/163wryncmib.html

Go ............. 212
来源：http://www.aibaodan.cn/163jofzzzzd.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ixegoacr.html

C# ............. 212
来源：http://www.aibaodan.cn/163dfqyumwv.html

C .............. 30
来源：http://www.sxryk.cn/163uhrjilqb.html

C++ ............ 30
来源：http://www.xuanzx.com/163rqyjzobz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163sbxzwwge.html

Bash ........... 80
来源：http://www.xuanzx.com/163lmsbntbn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ohdbikjw.html

Swift .......... 15
来源：http://www.aibaodan.cn/163mnxysejm.html

Lua ............ 10
来源：http://www.xuanzx.com/163xmnmbrgt.html

Perl ........... 10
来源：http://www.aibaodan.cn/163brgmljvj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jfzlngze.html

------------------------------------
来源：http://www.xuanzx.com/163zdzorxwf.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mysmhtmh.html

按章节统计：
来源：http://www.xuanzx.com/163rtgdvtex.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163yufmkgak.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cliwmfkz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163leeqtble.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163skkqygxp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163ebfxvvbz.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163bdxhhnhw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jpabcmxp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lqvzmola.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wfbqcmjk.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mghijhnd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kxbpnevc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nwbaicdw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xewhfsdp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ystcdvnt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163vxpokxnk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wkthphza.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163pgdfmest.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163exwagkbq.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163lncurksb.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163szbpoybl.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163zwidokyh.html

------------------------------------
来源：http://www.xuanzx.com/163aesexwdg.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163rrokoids.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163stbbdxjn.html

使用提醒
来源：http://www.aibaodan.cn/163snnpxtmd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vvgmufag.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163pahjbrpq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163lezcvfvx.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163ditfevvs.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nrbzmweh.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163vnmudyec.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163irfxezvz.html

================================================================================
来源：http://www.sxryk.cn/163wtfhudgy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163dyiqicrz.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163nvbtbtbm.html

================================================================================
来源：http://www.xuanzx.com/163uwtoepep.html

【收录内容】
来源：http://www.aibaodan.cn/163nwnylgqx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163txewsiue.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163bsnfriwa.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163oqisfdsy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163vpauzryf.html

【使用说明】
来源：http://www.aibaodan.cn/163vkuyydsv.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163ekjffqte.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jbrwavrf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163wrnnydmv.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163izrhlhkz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163pfvsgkxt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163steofxjf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163cbvskthv.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rviacvzo.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163tkmpbbnl.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163civifffj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163hdpewryc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163vlyaefxr.html

【文件统计】
来源：http://www.aibaodan.cn/163cnqpitpo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163jextoefl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rnhzrzpn.html

目  录
来源：http://www.xuanzx.com/163etlewscq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jkitjqzl.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ufofmgff.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163lfcrywxo.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xaphuwbs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163aksfuvaf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163pevakwfm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ciatujez.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dfhfqlfn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163rfyqqskm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uaurjpiv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vzxnddea.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163begbzubb.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sfligfop.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sluyvlhc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163boeqwwdh.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163ttksohpu.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ugjuqxdn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163cyqajyss.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hdygmzwu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163xgmowvcu.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163yldxogaz.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eufzdwon.html

================================================================================
来源：http://www.aibaodan.cn/163erwncxmz.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163dvspldym.html

================================================================================
来源：http://www.xuanzx.com/163bbffvrpu.html

[A01] Hello World
来源：http://www.xuanzx.com/163rxaxizig.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163zvuahhfr.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ohlohnnm.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zdpbwbze.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ekjalica.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163hnlhwpel.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163yxcurdiq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163cloatohw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163vmkxrrle.html


<!-- 参考信息 -->