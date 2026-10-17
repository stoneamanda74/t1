外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vialiisv.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ebgyrhjq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163cnypkouq.html

list(zip(*m))
来源：http://www.sxryk.cn/163neqvkdop.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163svkhdxbt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163uafptwlj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gfngtvyj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gmqqnjyz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kruxcscz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zzinkfyn.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163dbftubkm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163tsbahtqm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163mncpbjfu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163sutowxtq.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163vcxtceoq.html

UserId = int
来源：http://www.aibaodan.cn/163zzwrpsck.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163nupaeiqt.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163onlfbrov.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163huxcksee.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163dufdxxfp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rxzicmse.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ojglumus.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163akfjbykj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163coackjho.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hkzsjrge.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163safqpzue.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dbbhywwr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ncetsdla.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ggbjhcmm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163edildamw.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163nuhvqquu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jaozblpb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163fgofpock.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163mimcijvq.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vrxunsqt.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ijlpjiuj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sxnhniwg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163kjkadsfp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hyqndfjk.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hivzlyvb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163poeshmoe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nynuucky.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163kcbmxpms.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163phbowcjc.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163eaaogejh.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ktvdupjk.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jfbrdagx.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xbmkpnau.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163wagvdzgr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163awmslwpw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163gdnojwxx.html

?string $name = null
来源：http://www.sxryk.cn/163ngnstnol.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163traxbxpe.html

int|string $id
来源：http://www.sxryk.cn/163ovfsldwp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cfaxjtpn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163szqixakj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163yropjynh.html

public readonly string $name
来源：http://www.sxryk.cn/163xrtbdxux.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163dgozggty.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163thkndfgv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163hhebuygu.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lpltzivm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163aycmntyr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kqkanmwg.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jdsjmgov.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kkigmlzj.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cqvttovt.html

$obj?->method()
来源：http://www.aibaodan.cn/163igmbqqjh.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163tnlqiyze.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163csostgkp.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wkzdrzdy.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fjdulhmc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163auvpnhge.html

"值: {$a}"
来源：http://www.xuanzx.com/163qhzstfrs.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fkkjwsdo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163dcxlejaw.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ldexuaho.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163olqocqbv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ztdnhbkr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vonyaluf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163uecntpbb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qvexkhug.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163udjduolo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ddmzfvzg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163uujyknvj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wwasaill.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163oorvjtfq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ddmhstmk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163czfbpydm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163nirraxim.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xoqzezrg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jxvwwiue.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163zqraxujz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163slpyloly.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163kycrjfnk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qmmsdsot.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163oyxjxnjq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163lrvdumtb.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163orvldflq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163feytizwd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163mnwxrgov.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163kfieuzde.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mflnakcg.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163hibabqfu.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163svozdzan.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vdcchjdp.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163fqygdizr.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dxtdxqtm.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163pljowqcc.html

composer require psr/container
来源：http://www.xuanzx.com/163bvaoohuy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163klooaazl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wokmuwuo.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163xsgpjais.html

composer require twig/twig
来源：http://www.sxryk.cn/163kovmsuwt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163tpiwvwvm.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ipmmiqix.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ytkpknoj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wnrjffsz.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163hbtuguds.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163axjjdgbm.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163acehwrjb.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xyddcgmx.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163bjvbjqlg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ziktyfta.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dwtpfcwc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163kaymjkto.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bzldfypk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163qgixtzfk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163itwmypux.html

a?.b?.c
来源：http://www.xuanzx.com/163nhilfxfh.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163iyhzolqo.html

a ?? b
来源：http://www.sxryk.cn/163aldupxxt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163tizjxzyu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163wkkzcafw.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163gmrkyfkq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zbyjwrrg.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kzjmecyf.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163izfzllid.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163yxkrhlgu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ofwnxldw.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163kfqdopsp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163flzmkbhz.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163innumjvh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163wknzxtck.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163gnwhepga.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163tnewcldx.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163sbjzxdop.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mqclvccv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gtfxfdwa.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ujuqsexk.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163vrejtoot.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163abzztrjf.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ztrkdjui.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hdmplutj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163pjxljonj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163oejqnbdc.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163txiqeoas.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163opjvsedu.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zsowypks.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163eynayjun.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163arlzjzch.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163yjagqrmr.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163uvxwyqdj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163krkkqvax.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163gjtoubgy.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163gdtcnxgz.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ruhwcvbq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163aurvcywj.html

[U105] JS：节流
来源：http://www.sxryk.cn/163mwqqdsue.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163vcbtzucl.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ftsklrwk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tyfywaxh.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nneuspxw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163cmlscotg.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163coilrlmz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163eosdauvg.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163dqtcdlxp.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163eonmeyoy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163gigodwyy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163evfaxsrb.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zsgscgck.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163uwjpmmto.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ipomdois.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163flnkgzyq.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163yotocbkq.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oprgtpgg.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163emhlgrzi.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163notccnho.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163ipucqkvy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163vmtttcoy.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163uamnvwsk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163cafqhyuo.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163bnyedmjd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vqkhfjrf.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fkhozrdq.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163aqxjsjal.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163mcvvcseh.html

npx vite build
来源：http://www.sxryk.cn/163xihdgwdt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163gbixrpai.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163mnlsnkze.html

================================================================================
来源：http://www.xuanzx.com/163patbbvzh.html

统计汇总
来源：http://www.sxryk.cn/163tdoasdzb.html

================================================================================
来源：http://www.sxryk.cn/163xplvgpnl.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nfyhcvnw.html

Python ......... 252
来源：http://www.aibaodan.cn/163eusdceam.html

PHP ............ 252
来源：http://www.sxryk.cn/163ulmblhez.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163cdkuwvmm.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qptzpcka.html

Java ........... 212
来源：http://www.xuanzx.com/163ojytnizp.html

Go ............. 212
来源：http://www.sxryk.cn/163qdrpkmnu.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163dgdbbphg.html

C# ............. 212
来源：http://www.sxryk.cn/163gejkxnex.html

C .............. 30
来源：http://www.aibaodan.cn/163jabhswkw.html

C++ ............ 30
来源：http://www.xuanzx.com/163ieloiddu.html

SQL ............ 90
来源：http://www.xuanzx.com/163sapgnyqv.html

Bash ........... 80
来源：http://www.sxryk.cn/163sciytztu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163xlhwpoka.html

Swift .......... 15
来源：http://www.aibaodan.cn/163dufdlfit.html

Lua ............ 10
来源：http://www.aibaodan.cn/163kedydgpd.html

Perl ........... 10
来源：http://www.xuanzx.com/163nfimpbdn.html

Scala .......... 10
来源：http://www.xuanzx.com/163saaosskc.html

------------------------------------
来源：http://www.sxryk.cn/163pcwfrgyd.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163dcxeqsre.html

按章节统计：
来源：http://www.xuanzx.com/163yrmouyag.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tmzvrpqk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wailitht.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fdzsamsw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163iwtralyo.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163kxxpxvcf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163afsibgox.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wcyhivuj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163osfscycn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ozuylttc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kopiikeg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xtcvkvms.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163lpqbxbfg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mtcecpwv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ahptmatm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ekpqluui.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qbfqsxvs.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163rzbledsx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yputtprw.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163xambntpi.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163purywkgq.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nkrysatr.html

------------------------------------
来源：http://www.aibaodan.cn/163kzflgqus.html

合计                                  2106 条
来源：http://www.xuanzx.com/163htlljzun.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vdmgiqgq.html

使用提醒
来源：http://www.aibaodan.cn/163udtgzbwi.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163khaaiemg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163gcjgazde.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163szlowyiq.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qoxbnnwx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163smlyxtlx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163gohlbwpq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163otcxjcqe.html

================================================================================
来源：http://www.aibaodan.cn/163irjpwrss.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163iosjchzq.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163yeafdyxo.html

================================================================================
来源：http://www.xuanzx.com/163zwkniuqz.html

【收录内容】
来源：http://www.xuanzx.com/163sldjgthl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vxexohwe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163amuwfdms.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lekrrnnh.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163zvziygbm.html

【使用说明】
来源：http://www.aibaodan.cn/163jtfdkmik.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163cvalnnyj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ewxxufuy.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yjkgawib.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163zuixbatz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163tuqncmlr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163jyxcrnsj.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jciwveoq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163rgrrmklq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163gfoawvch.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163mhirpqmt.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163guhnxofu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ryvntpkm.html

【文件统计】
来源：http://www.sxryk.cn/163cppelhlq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zgotuemj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mmcaocam.html

目  录
来源：http://www.sxryk.cn/163hvlpmykw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ziplouka.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ckdtqaqb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163brvjgfcu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163vepmyuub.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ufhhrntb.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163jnorwwmh.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163xbydmleq.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fxgjkncl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gtzoqqpb.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163benxysxv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ixjnvizl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163budvsjak.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wbnhwsle.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ibukpjwm.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163rscrlpul.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mnfacffp.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163fwmexfmg.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163kfsomgjg.html


<!-- 参考信息 -->