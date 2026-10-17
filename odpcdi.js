外链999!wailian999！

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xlogfodz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163bxusbiht.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dlfaobge.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163cknnmqxj.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163flayuigl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163skkoakyu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hovgqxbq.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mlyupzjb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qigcixnz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dlivtkdm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rcukrtou.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163vssayuzx.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vzhkgcby.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fqqvbbot.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gmmuulrn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uzjmkpuz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jhlzcois.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hjtoyics.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163kdmudspi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163bjgrsfkp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xjlidnam.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mhxqlnzq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wwedrhsd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163vwrfwdjm.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ibxlfnro.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163gcnfigxm.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dbkclrky.html

UserId = int
来源：http://www.aibaodan.cn/163hkyzsqob.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163fskerwpo.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ryacqgxl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163bccifmyb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163jjnbywnw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163yphoimkh.html

python -m pytest -q
来源：http://www.xuanzx.com/163emiywmcr.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163jyfbibfr.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163cziuzusw.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qolcadms.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bpyncycx.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163sixrbpro.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qazrvqut.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163azijtxsn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163agjxogck.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163kpqtppnu.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163nfbuencu.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163mxqnaekw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xiqickwl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hcbsjbis.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wdmdcyje.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fjsgivvg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ucpkekou.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pxjhmhqq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cartyttr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163osandhbt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lrzgfjva.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wmnbbplr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gbhlmqnc.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ogddyvss.html

namespace App\Http;
来源：http://www.aibaodan.cn/163wcforqmv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mtbdxdyf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xruuhnuj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163uvxfiglf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yajoisyb.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163gjjhsbtz.html

?string $name = null
来源：http://www.aibaodan.cn/163lrfjpuiz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ppufvwcu.html

int|string $id
来源：http://www.aibaodan.cn/163dicmultj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163mwrmnjog.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163nueiyvtu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163spcqseck.html

public readonly string $name
来源：http://www.aibaodan.cn/163ibatucum.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qycwglko.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163dnhygkfa.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163whmhncoe.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jjfdqnkh.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mjywwrvk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163yucflrsu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lzsnxanj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zlwbfoat.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163twaxxbdp.html

$obj?->method()
来源：http://www.xuanzx.com/163jtozeqzn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163nratoabj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163qeprpziv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163dmmkdldo.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vyjtyqlj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163cdkhlvqg.html

"值: {$a}"
来源：http://www.xuanzx.com/163jiloucte.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163utrmjccc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163belhdwiu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163dkxynqqo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yjarnldl.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163sktadouk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163bnupwpqk.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rrbjonig.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jciaogpf.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163dgejwrlb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163apwiieak.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ccgcqbgx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163fmbhxgds.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ocdkfrws.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fdruzdbb.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163cubzcvhw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163etcjzktj.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bphgubvd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ynvaroxg.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163kbfuqisn.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qyqfpsdd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dscqytqp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zywektsr.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163bljevypr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163znrsduow.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163puhihedr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163urmkyswf.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163bpbhlpcp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163racfoxhf.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163efigfdqa.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vdujlrgd.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dbcnecye.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163lpcuagiy.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163iodtqkwu.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ujjoajzm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mmfjjmzn.html

composer require psr/container
来源：http://www.aibaodan.cn/163glmtpigj.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wowxgshk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163gntukoua.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163hhgqxztr.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lhzffwun.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hxxbsewu.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163agrxpkik.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163opvdnaai.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163gwwrrhxk.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163iyyridmy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163mrsvaigx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163jnhahzua.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163vvxwzljs.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163okhipzjy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163yclpcoxd.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163kmnxeiyu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163zvhijlzp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rkfsfnnw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163gdvsvmgj.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163sdlqcajd.html

a?.b?.c
来源：http://www.sxryk.cn/163htjstbig.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163pxqiaknj.html

a ?? b
来源：http://www.sxryk.cn/163zjzotpee.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ztpmawvp.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163jdbussfs.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163rtivkjdr.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163frqrzdsj.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fzdsjzml.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163gydzltfn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163iztkolkh.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rpsjcajx.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zzhemhir.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vmudgysu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163peqsdutg.html

structuredClone(obj)
来源：http://www.xuanzx.com/163cujxbpbt.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dnmwczvy.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163gfljydbo.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pejhsnpl.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xuruzyxx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163lvnyniap.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163axmebpjl.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163rikkfpim.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mpgianzj.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tggybuui.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163glbiviun.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163zcuvshcs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163oifuuvjv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163brdmlnlp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163wjdajnja.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163qoniflhv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ewcyvdil.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163bqarefeq.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qywmtwgu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dqvkefbi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163mknvukqf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163lczlbhuq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163whbpcuam.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163slhqhmxd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163egddpttb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ahxmergr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163qosumhfw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163ahwahdaj.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163nonmhthr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mvuxaptf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ejavizyx.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163ezqylwwt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163crkiaupl.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163whjjfwms.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rmysmlht.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163hvuwvzes.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163dqtbejny.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163lpoyarzf.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163kgilqwcv.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163qtuvcvbw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fhxpdhxx.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163zciamusq.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hxzevhdb.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tbsupnxg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163excpzuqv.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163rqsybeng.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163btiwmmgu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163xbarxxfp.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zzdjgnvn.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163gownugra.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163csqsjbln.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ijrtkynq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163kuktgmkc.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163zkyuutmc.html

npx vite build
来源：http://www.aibaodan.cn/163odspvhjr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nbkupuhg.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163stcijrbv.html

================================================================================
来源：http://www.xuanzx.com/163ljuaikhs.html

统计汇总
来源：http://www.xuanzx.com/163fjhzepds.html

================================================================================
来源：http://www.xuanzx.com/163mmtyithm.html

按语言统计（条）：
来源：http://www.xuanzx.com/163zqbhukdq.html

Python ......... 252
来源：http://www.aibaodan.cn/163rgldmduo.html

PHP ............ 252
来源：http://www.xuanzx.com/163gtdkfnee.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163nvazbqur.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163iaogpwaa.html

Java ........... 212
来源：http://www.sxryk.cn/163apmywhjy.html

Go ............. 212
来源：http://www.sxryk.cn/163xlvgzwgx.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163uzlmiggn.html

C# ............. 212
来源：http://www.xuanzx.com/163uopldxhm.html

C .............. 30
来源：http://www.xuanzx.com/163wavciewf.html

C++ ............ 30
来源：http://www.sxryk.cn/163lvcfocxm.html

SQL ............ 90
来源：http://www.xuanzx.com/163gjsupjgg.html

Bash ........... 80
来源：http://www.xuanzx.com/163gztieaca.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ppmhqtyj.html

Swift .......... 15
来源：http://www.sxryk.cn/163goymenqh.html

Lua ............ 10
来源：http://www.aibaodan.cn/163jrwbirrs.html

Perl ........... 10
来源：http://www.sxryk.cn/163oqkmbdmh.html

Scala .......... 10
来源：http://www.xuanzx.com/163cnbayfgg.html

------------------------------------
来源：http://www.aibaodan.cn/163oxpqgqgo.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dtpkvxlu.html

按章节统计：
来源：http://www.aibaodan.cn/163wcdsfokh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vjlgvwbc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163evupnilg.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163muzhsckq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xxnwcesv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163tzsecaoj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163saywzoyq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nbtjzdqa.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fqmoeuoc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sbyzjuss.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163mngsooth.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163spawwvco.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vqdgeqcn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fynobmrm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ujxtxqqd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163hqaqvkty.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jtepbvlv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163uahmssnl.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163wuesjjpu.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163krzjddfs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163jfpynoog.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163vnimyjab.html

------------------------------------
来源：http://www.aibaodan.cn/163yadrflor.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163qcbnccbq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eronlpsl.html

使用提醒
来源：http://www.sxryk.cn/163pzgjlhkv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wiqgwdmt.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163tzldqpcj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163kgmozlst.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163yuzirynx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hvjkyipp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163zqhszfyh.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163lljhocrr.html

================================================================================
来源：http://www.sxryk.cn/163rpgvvwgu.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163iosplweg.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163fhddapxh.html

================================================================================
来源：http://www.xuanzx.com/163bflpemyl.html

【收录内容】
来源：http://www.aibaodan.cn/163ydrpzlce.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163shzfuxor.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163shmgiryd.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nuxgiosb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163uzjmzrsg.html

【使用说明】
来源：http://www.xuanzx.com/163greeqruh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163nenbknld.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163iiektvuk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163cbmbgmwt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163sunfumgm.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163vkszolcu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163xmrdjhnt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163edfbznhw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ubheullt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163tvarhtvp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lrfzllwb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vnknzydq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163unaxjioe.html

【文件统计】
来源：http://www.aibaodan.cn/163udqahemu.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163nbqqolzi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163knslzaxx.html

目  录
来源：http://www.aibaodan.cn/163jzhhiwlb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xyvmmnfe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ozcuejyd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163rrqvdgph.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163yvabqyxm.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hzmbykci.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163hkqsnlls.html


<!-- 参考信息 -->