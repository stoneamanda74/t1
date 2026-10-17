外链999!wailian999！

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163kmnfzmwq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163japxfquk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163paxrmvvm.html

list(zip(*m))
来源：http://www.sxryk.cn/163ensjywoh.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dgbklzow.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163sbthdczb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rzwbkzvy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mhaklspa.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kiypxkks.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tadfibku.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163nudmvvbn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163muwbiotz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163lkkfedmt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dzkjxlrg.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163vuskmpxo.html

UserId = int
来源：http://www.aibaodan.cn/163nkhlkcnm.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163czxcqteh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163hxvxcvez.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163oioppjdm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163opmvnslk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163usrmvcpp.html

python -m pytest -q
来源：http://www.sxryk.cn/163nicoliks.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qhqnqqgr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163txijpjfp.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hnsuzalr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ovbxpfyq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163tnmzcfxo.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xqwkpuqz.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gsbukmfe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mvdnaota.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163yghfkopn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ynpzhpig.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163hhdloasq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163higngpnh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bwikrknu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xiagomlt.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163qvpvtvti.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163nwnlrlif.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163mqvjggnu.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eclbrhvz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163lxlubvxt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nyvlhzlw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163mxhvraxc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cujisnwo.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163naawkocm.html

namespace App\Http;
来源：http://www.xuanzx.com/163xqxyimuz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qwvqsvqp.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dpoqolqr.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bvjpmtcg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ryjtzoje.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163sjoyhxeh.html

?string $name = null
来源：http://www.aibaodan.cn/163ebuisxan.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jemuuvup.html

int|string $id
来源：http://www.sxryk.cn/163naxrdgap.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mjaqdbgp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tslghtkt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zyzabdnk.html

public readonly string $name
来源：http://www.sxryk.cn/163zesxvrul.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ffjfwqcw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163zgmqtwkv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163wquokbxz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163buspteke.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xkgnzfex.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163xjkatdrj.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163assmjnsc.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163wqqkgenm.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cdnipola.html

$obj?->method()
来源：http://www.xuanzx.com/163hzdyfyfn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163kofwtmhp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zwvzaucw.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jnzmkiwx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gwdpokxb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vsekywow.html

"值: {$a}"
来源：http://www.sxryk.cn/163tpbqxwcn.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wiomyeas.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hyqdgxrs.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163inhgivhe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uwbuztav.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163sztzxhnk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163yuowcldw.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vwtfndui.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mztaxhmo.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qiyxgfws.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ownspzgr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ybluymni.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163fnswyzgz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mfivnzfg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163tzyimggy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gjovdvla.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ymlljzxx.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163soxjhwbv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163enxcdhuy.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ipodudel.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fterggco.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ujtiwwyf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163pxvyaktu.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wblwnasm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163oblfrlet.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163yfwywwrt.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163cpniqfvz.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xekyznvb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163kuhxpcoc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hbkdphpv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vfodsduc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vnukklbq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163gezxasjp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nzcuqrkn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wgmlfmhl.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163iercoctb.html

composer require psr/container
来源：http://www.sxryk.cn/163pofbkwdg.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163drpbmdlc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163odljnhrq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163tilbabgn.html

composer require twig/twig
来源：http://www.aibaodan.cn/163omfgaxkw.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163uvwbvbux.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163tdnboytm.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ptbsypsd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163eqrgurtg.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163lrnvffis.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163umrzrpgb.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ypuwwgot.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ojxejxve.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uonfvdjt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163tuhcrdir.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qspkkcja.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163mxlyhart.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mlvraqqv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vuykdnfl.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163djsoonqv.html

a?.b?.c
来源：http://www.sxryk.cn/163bgvamtkl.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163cmwkjput.html

a ?? b
来源：http://www.xuanzx.com/163cipuybgq.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163akgathqm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jkweiaog.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163nghanxjn.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163cvkzytup.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163eshhovum.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163whcjteuk.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163uodoflct.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qvypurjv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vmcdetmf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163mewklfdm.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163worcvimr.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163jdemaqvx.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xoytaqce.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163njrchvbh.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163hjbhppir.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163sylqocqg.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163rksnpsvf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163cownnbwj.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163acmdmyjo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163yihtwbke.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163bpxirvjf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mdqtpbha.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163lcimnpdy.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163aiwqimiv.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163yjevqaze.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qdjzikgm.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163bilyehxb.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163cvcztrmq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163haxajxcf.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nmdgsrnw.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163efobqgms.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163nlzxesfd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163sjzkxbry.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wujtxryp.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163pgpnpwpr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163goafxnei.html

[U105] JS：节流
来源：http://www.xuanzx.com/163syenkocm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ikgkkjeg.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163oanoljur.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tfurtfbt.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nvagsazs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xcumegzn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163xqdwtaic.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qhvbvviz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hkpkojfm.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bomeidas.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kejligzq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163vremsjxs.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163gzodpakx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163pcwcneqw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163zbmfdcdq.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163skhttvix.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qtjapqwp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pddhsgdm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163relcnsrq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163smmizlsg.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163oexhgzwm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163copriwri.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163lfndadpe.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163erdfzjng.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163wwsvfytp.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163sdwqwisk.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163axljgfri.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163knedbwvf.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163bdujsgoo.html

npx vite build
来源：http://www.aibaodan.cn/163vuvkmgge.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jjuubawk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rfjoikhh.html

================================================================================
来源：http://www.aibaodan.cn/163ijxpjkxv.html

统计汇总
来源：http://www.sxryk.cn/163feerfsey.html

================================================================================
来源：http://www.xuanzx.com/163vuwagyly.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163muxecmoi.html

Python ......... 252
来源：http://www.aibaodan.cn/163cptfllef.html

PHP ............ 252
来源：http://www.xuanzx.com/163tdrgtjwq.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163ohznajgw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163xqfkzllz.html

Java ........... 212
来源：http://www.xuanzx.com/163lyvljapo.html

Go ............. 212
来源：http://www.aibaodan.cn/163qonfyixh.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rkdrubxl.html

C# ............. 212
来源：http://www.aibaodan.cn/163pcmmyqea.html

C .............. 30
来源：http://www.aibaodan.cn/163zggcifqa.html

C++ ............ 30
来源：http://www.sxryk.cn/163gesryjyb.html

SQL ............ 90
来源：http://www.xuanzx.com/163xyvjyyrq.html

Bash ........... 80
来源：http://www.aibaodan.cn/163eggwopmj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163wplvuyhf.html

Swift .......... 15
来源：http://www.xuanzx.com/163sgbedbko.html

Lua ............ 10
来源：http://www.aibaodan.cn/163asxwrqua.html

Perl ........... 10
来源：http://www.aibaodan.cn/163cndtaegr.html

Scala .......... 10
来源：http://www.sxryk.cn/163yvbxdrbe.html

------------------------------------
来源：http://www.sxryk.cn/163qvtojtlf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163wogloaox.html

按章节统计：
来源：http://www.sxryk.cn/163yqzzanbk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163dsuaiitv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zhrwvbit.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fasawmfx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163efwcyzfj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163trmipdrs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vblhfjbh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yrgpksws.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163khfvcqar.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uasohdny.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fbbdgxmm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xeylfpba.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163czdjqumm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qkkuxixg.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163paxfheog.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163smcfcihv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163xtmjxdqd.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163xvzubefi.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163bdnpkmpl.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163hndyacph.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ingcfqok.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163plggfuun.html

------------------------------------
来源：http://www.aibaodan.cn/163ebkuebsk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163tojcvgrf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wtuhufhg.html

使用提醒
来源：http://www.sxryk.cn/163ygcbnhsz.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jdihmxsa.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163jydupsle.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jukkbxjh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hchyqvid.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163fwgtutoc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jwxzynky.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163iavickmi.html

================================================================================
来源：http://www.xuanzx.com/163izsopmgl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163djicsmqu.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163aejhysvh.html

================================================================================
来源：http://www.aibaodan.cn/163emfjkktc.html

【收录内容】
来源：http://www.sxryk.cn/163tpgkmxkl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163pkwvueof.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163iaedrjhr.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163wlgwfafj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163znpmudgy.html

【使用说明】
来源：http://www.aibaodan.cn/163ncceuqbl.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dtvguaxk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163mifeybwp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163zayrtffd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163hbxgdmqe.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163dxaughrt.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163odukvuat.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163uzljfnkj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163tysmizza.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163leuivkyd.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ypzhnmbn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163wbjlqwir.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163bnmyeipu.html

【文件统计】
来源：http://www.aibaodan.cn/163cmgsmwsi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163wgoqmqqr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ktaixyxm.html

目  录
来源：http://www.xuanzx.com/163ouljvsam.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qisychem.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163gekkxgkw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163btdiwnwm.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cvglyfrb.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163bjmlygmo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163nugaslvy.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nlpczgtg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163rzvlxfdi.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163gthumrxj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ishrrwnl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zuokapwj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ujzhufvr.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pxaosznf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gzwzoswd.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163syhtndcr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hjjbrxjq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163lmivjjpq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163nstfcadx.html


<!-- 参考信息 -->