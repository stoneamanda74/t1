外链999!wailian999！

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ianmtypb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hkrjpnaz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163znkuknzc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uiaktylk.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ojcyotuw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163zefunxhj.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xqopepyd.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163azqeiqwn.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ttjjoqos.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wwjqmllm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163fyqmoaab.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lxfpvecb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163uqkzmfdo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xukpiecd.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163maazybuv.html

list(zip(*m))
来源：http://www.sxryk.cn/163buablafv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hmpxswkt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163efvalapm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fzbxloej.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qpejyqrm.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vyhrvjee.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zbbhvvfh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fewgxqgr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163mvdpzwkx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qtvedmli.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163xvaqjzyh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vyiumdpj.html

UserId = int
来源：http://www.sxryk.cn/163ucsdgvbp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rwwohilx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163djrufrxn.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163eloojlce.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ackffzoe.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ftmhvrkp.html

python -m pytest -q
来源：http://www.aibaodan.cn/163szwfebcq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zxbvwwsm.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ieossrrl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163zqablflj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163nemmhdno.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163olkrlzrx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163zsdkanli.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hoqapcwk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163bdglzggr.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163aufqitor.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163rwpsxyyt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ixofxyxh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mbqvjysy.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xklkhvxy.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163kdthhefa.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163eqrqmsix.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163oannrtvf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163vfzggogr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dpykxacy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ijfmtucg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163skcvjrdd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ffvuymqd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163xtmuleps.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163qzmivxhs.html

namespace App\Http;
来源：http://www.sxryk.cn/163ovohujzp.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163golbreql.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163tpwrvboy.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pblpympk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dyculqzu.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wgpvkvry.html

?string $name = null
来源：http://www.xuanzx.com/163xxbubzei.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163tloccdzy.html

int|string $id
来源：http://www.aibaodan.cn/163tgosmczl.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163mfitozhv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ageuaawi.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163knnadjct.html

public readonly string $name
来源：http://www.aibaodan.cn/163rrvnjrfp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ioqjnykl.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163npfyjaxm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163nqecvrwg.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qxgnkzcz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tdpgvink.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163xhriehqb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cvzaqwkn.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zjcuwsti.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163bjounnbe.html

$obj?->method()
来源：http://www.sxryk.cn/163tugncniq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163rojhkaqs.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163rngjibvi.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163jzcehsqx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ytfvgpgt.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163nbbqwqqk.html

"值: {$a}"
来源：http://www.sxryk.cn/163wspvospz.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163oawexxdz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xsbscjma.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163enrwaljx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bxgeobln.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163cyipwmuw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163rsesbecn.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rasnqgiu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ygltxqfz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163vxnweeoh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163wqaffacb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lejsrakx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mzbtfogg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vnyhtuws.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rynjebhv.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163eaxyfwww.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jyzkobpl.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jvguaicf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mmyjlmxs.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163grnvwytt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ejqsudbe.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163asefbzrw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163natpycch.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163miobkgyn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163fbzqjett.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ydosuxoq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fxhcgodv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kveyogcg.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ypwjnmcb.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163qyyfdnnz.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uytkmjic.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wvksleet.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163vjavkzhj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163uiahtcfp.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163grwswiqx.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163tetwxptn.html

composer require psr/container
来源：http://www.xuanzx.com/163zkjrmwdh.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163pikovtng.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163jhyiniqc.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163jwwhuiwk.html

composer require twig/twig
来源：http://www.aibaodan.cn/163pxlcmggq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fvuakrvy.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163okomgaha.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163fcbjeovk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163sxmjbdhw.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163qcpcxmcp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163skdztovr.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163psbsowoa.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163pvpbmhxp.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ghbqtqbh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zfkhxnon.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dabjzhoo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163mgolnwdb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163pgostluo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163atycjukr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163hoydqjze.html

a?.b?.c
来源：http://www.xuanzx.com/163cazcmezc.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163wggbbipk.html

a ?? b
来源：http://www.xuanzx.com/163hmtintsr.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163lwgxkiyf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163glntxnvh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163eyilsvpw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163auqwvcnu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163xqfeimll.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163lualzlsr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163wwnryjpb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163imccdupq.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163urgukuei.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163xmfrxgco.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163iqekxtsa.html

structuredClone(obj)
来源：http://www.xuanzx.com/163dqtvsnsg.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ysifynhc.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163rfjartun.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163cbdjofbl.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mubthxjd.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163nfpniqxj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fwddofzi.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163wnbpndzy.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dfhzscwm.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163rquztluu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gwxzfkex.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xomlvari.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163uzkymjly.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gnqrvyel.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163vujwtyqg.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163lkkeamtc.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163qgitblgc.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163wltznfxx.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163hetrufob.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ykomvwhs.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163cjiuychd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163myfpkbym.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163vpckhijj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163easkzafj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jilhvxhi.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163wxcueayw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163amfjthiw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163snpkwmgr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lpnknlea.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163lzwrxnlu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163dqpcckms.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163xjozwexm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163vvisezne.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163otovrmmv.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tfdoffdd.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163jvsfjsfn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163gburdisd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ytzpslsx.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163pvcgiycj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lpsxwxwl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ilgvodty.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xhrpkwcg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pgbqfoal.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163xawdjwoy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rurxdisd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wehynpsc.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hijngpnu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163kpupqmrf.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hclfludh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163cvdysypk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163akbirosb.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163rygplyvq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163lmbobkkl.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zbqlgfha.html

npx vite build
来源：http://www.sxryk.cn/163exucaneb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163qugwjxdo.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163atqgaqhm.html

================================================================================
来源：http://www.sxryk.cn/163ylqkwzgu.html

统计汇总
来源：http://www.sxryk.cn/163hhtyqnow.html

================================================================================
来源：http://www.sxryk.cn/163rilvvfzt.html

按语言统计（条）：
来源：http://www.xuanzx.com/163lclbctce.html

Python ......... 252
来源：http://www.aibaodan.cn/163vczmlixn.html

PHP ............ 252
来源：http://www.sxryk.cn/163wgpmvwuk.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163vjuvklqa.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163thzvirxc.html

Java ........... 212
来源：http://www.sxryk.cn/163xrqqqody.html

Go ............. 212
来源：http://www.sxryk.cn/163vdmavwfk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163flxvgrue.html

C# ............. 212
来源：http://www.xuanzx.com/163kawthnpw.html

C .............. 30
来源：http://www.sxryk.cn/163kvhuhrlg.html

C++ ............ 30
来源：http://www.xuanzx.com/163tyqdsfmq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kyanmqrt.html

Bash ........... 80
来源：http://www.sxryk.cn/163ytwguwsa.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163tmcrjlvw.html

Swift .......... 15
来源：http://www.sxryk.cn/163uayykjxi.html

Lua ............ 10
来源：http://www.sxryk.cn/163ucdxfsmu.html

Perl ........... 10
来源：http://www.aibaodan.cn/163dilgyasy.html

Scala .......... 10
来源：http://www.aibaodan.cn/163pggvvuiq.html

------------------------------------
来源：http://www.aibaodan.cn/163tdvmktnt.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163fzwacwjy.html

按章节统计：
来源：http://www.aibaodan.cn/163ocdcshjb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hwsizkne.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ztkhszzm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ythdyirr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qxpkbxyz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163puogneod.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zqrtoprr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zlxmfiyw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nvidiluy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ateiccjv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fsbslzdp.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kvrwxqun.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rcitsdlh.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ofqdfusy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lfimqtxx.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163mdmytzjg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nufxdeyl.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qahhyozf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163bczqnnoa.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163wdtnwxij.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163wljvgtvu.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163extbrspy.html

------------------------------------
来源：http://www.xuanzx.com/163hzfhgpcu.html

合计                                  2106 条
来源：http://www.sxryk.cn/163oojkvqoe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zbdfegmt.html

使用提醒
来源：http://www.xuanzx.com/163dbhzeszl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163owcoyied.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163mezikxkq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163esigkezp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163vnusfznw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163dsqptahl.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163topyrchr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163sxogeacm.html

================================================================================
来源：http://www.aibaodan.cn/163xbxiqrvp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163johcdfrn.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163mtvrdejg.html

================================================================================
来源：http://www.xuanzx.com/163nduaqouy.html

【收录内容】
来源：http://www.xuanzx.com/163jpqstwyg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163fbssoeuf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ibancdcl.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163cobvpayt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163xxqguysr.html

【使用说明】
来源：http://www.xuanzx.com/163zkkfvmyh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tohgdrmg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163hqoozdzm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jfsdalry.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163njkjqloz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163zcrzwjcb.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163wlhrpdgt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163twgtakyy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163ntfghnnr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lqtttxco.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163lpadljju.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163qlaiohmo.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163xozfrbbx.html

【文件统计】
来源：http://www.sxryk.cn/163vopfdidx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163loaornxw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ylfpkdde.html

目  录
来源：http://www.aibaodan.cn/163olzwdegj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ltrznmbr.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tztwkmco.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163runjwqmj.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163tgyyefvs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163tfcbmnvf.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tchujnsh.html


<!-- 参考信息 -->