外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lgfvizsg.html

================================================================================
来源：http://www.xuanzx.com/163yquwrmra.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jvrcpvxe.html

================================================================================
来源：http://www.aibaodan.cn/163kgyjmjeb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163flysstff.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iocwkkuo.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163dvlsxnsv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ckfivvzw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163hbxzcypc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163egvggxhg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163izglfroa.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ynyaeqfo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163amqaiaqp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nozrdkoj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jshmdoxx.html

{**a, **b}
来源：http://www.aibaodan.cn/163hzixjhdu.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xehmdycb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wpojawcz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xohranna.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pmilgaox.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163eotabifk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gbvvawhu.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163drhqafjq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pbpcaqzh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rtqkgeuf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163iskhlpiv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zvrtmvuv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pkarwpun.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163vscifvrd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163lnvpfvbm.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ilgstbcq.html

defaultdict(list)
来源：http://www.xuanzx.com/163iprsdwun.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hroygsoo.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163yzsqdxdz.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ttqloxju.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163naxulgqk.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163aghfchyu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163juhoomcn.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yxtiuqxj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kbgpfwgh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163zocsvvlu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ojriudfq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163guzshcif.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zmqgmazz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wyjdjcwq.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163lnzggfhw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zpmchzjg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ojqdmkco.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163cxabpadd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163niwictkj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qendtfgh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hwtvqqpp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zbdzzzkc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163lkrnzdfo.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163epzcmsfi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163chbhqrpe.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163belywkjf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163smbxeeuw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163almmzrdi.html

UserId = int
来源：http://www.xuanzx.com/163fezabssr.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zpyjbdwy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jyjajfzx.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bwhzumxp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sxsmqyrc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163evzmumae.html

python -m pytest -q
来源：http://www.xuanzx.com/163mlivahbf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pgtzehtq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xheysyfx.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vsuecsjc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ikqecjjl.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163inkvjyod.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lqxcuciu.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163egpgucgy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163cmolluct.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gyfgpwqr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xltofmvx.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163fhgjkeah.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ykjpixxb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163kyhokkpv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mibhkaou.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bzcdmnfu.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163htbgpxkd.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163vpytohsj.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163abiiwpzm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163zbrlpoax.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cdhawbkg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163bxoazocd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yocwawca.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163oacpuvjc.html

namespace App\Http;
来源：http://www.aibaodan.cn/163trivgyjw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zzkpezaa.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163rothvhvp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163rrwyzydf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mwdfzqfv.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163wkiehaas.html

?string $name = null
来源：http://www.sxryk.cn/163imlhgqsd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ngqurfvp.html

int|string $id
来源：http://www.xuanzx.com/163elqdzura.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163lxwnkjza.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bevqtqhq.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vembxekd.html

public readonly string $name
来源：http://www.aibaodan.cn/163yleaujiy.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163zjnmuslf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163acuftyxc.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163stmubndm.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lpfvbroq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163kagkofpk.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pnekmpss.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163drcewixe.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vfqvzcae.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mrcboher.html

$obj?->method()
来源：http://www.aibaodan.cn/163vxgipiyc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163lydzaebd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mntwzcxu.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163vfqypwms.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vpzgrxmg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vuyvvsiu.html

"值: {$a}"
来源：http://www.aibaodan.cn/163zhdhvicr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163lipzjuxb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163macfcudc.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ztjsnjvj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bmanjpkl.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163sdgrlefh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ugdbsvhn.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163seomdszx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nggaxwyr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163plkbhqfw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zcruusyq.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163hntdivac.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zglqwdfz.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163lmhcinve.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bhyinmto.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163gjcqmlnf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kbkozqva.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163iwfkmffp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163oosheesm.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163liaijlqt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163hmzwcukl.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pwkfhfia.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163lhhxczrh.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163wvcjmymj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163cebmbdqj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163whlcqhmk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163sxsvrvnc.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xannhrci.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163hawbbhdy.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163mhrddcne.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163yslsmkpj.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163rtibchob.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xbdqeojx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163uzexegbv.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163aekozyts.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163jljzjjbk.html

composer require psr/container
来源：http://www.sxryk.cn/163dlweoaje.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163qnpkgtui.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163leqcvsxi.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163bmiwtoxv.html

composer require twig/twig
来源：http://www.aibaodan.cn/163bqeqazxt.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163mdtxgqic.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163dtgumjap.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163yegvjrwp.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bwiiwkoy.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ypobptqt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163vcgbmjtv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163dcdwckmn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ffesoqfk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163kczeneit.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mzysahzi.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163gmezayje.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163sblpqnak.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163uswhuxrr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163hnorlgqj.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hhggcguf.html

a?.b?.c
来源：http://www.aibaodan.cn/163nlcjlycp.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163kpaiymks.html

a ?? b
来源：http://www.aibaodan.cn/163mxrrmmid.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163yxiglpwc.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qzjtmymn.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tjiwydmj.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ewdkjfol.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163pdkxywkl.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wrmqzngu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163pyhztdbu.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163opwrjgzh.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163jgibtxfv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163lngiqfzt.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163sxqylnaa.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gxgtxynj.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163yszgguun.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jdnajzii.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163zqkhntxt.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163dbruvsce.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zpejdsqt.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vfnlzugp.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163qaaccfzt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163njszyfwx.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ziqkwsxs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163aqfjytwz.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163eicybbbi.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163dgtgadfh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163cnopwaif.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163urxdfvlc.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163pldtkexi.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163kjbobksh.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wmhtdamz.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xclwymxs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gjowbuax.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163vauvheir.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163asofecyd.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163qofiapvq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163uvueuexc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kcunwdjs.html

[U105] JS：节流
来源：http://www.sxryk.cn/163zjbjhbzw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163lthwgqib.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163egvpljqk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pccmiewt.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wcavoxla.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163embrjjar.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163vixxejjq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163lvivfghq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cocbrynz.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vlgsrskq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163xbhdsnuz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163hgcnkrta.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163cfmagqwx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163eeivemot.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163jjgcpiha.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163auqgdkrf.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163jtitcehv.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163imvxraxp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163cibqdacu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nuvsfopp.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163mhcgsopj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ijersmhn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163fxmhvbkd.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163aahbsutq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163qfdwmmmk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163obyuzeqw.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ndolmyil.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163etdldwhq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163rmnydrlb.html

npx vite build
来源：http://www.aibaodan.cn/163yltznthw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bmasziic.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163mqxxhhlz.html

================================================================================
来源：http://www.xuanzx.com/163mniljhri.html

统计汇总
来源：http://www.aibaodan.cn/163hchkuilm.html

================================================================================
来源：http://www.aibaodan.cn/163cbeoikim.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xkzptepc.html

Python ......... 252
来源：http://www.xuanzx.com/163spdvijzp.html

PHP ............ 252
来源：http://www.aibaodan.cn/163uzhgtoqd.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kzmnvkee.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pvvccuuu.html

Java ........... 212
来源：http://www.xuanzx.com/163rjwmlqtd.html

Go ............. 212
来源：http://www.xuanzx.com/163fjwkzuwb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163uctwvcop.html

C# ............. 212
来源：http://www.aibaodan.cn/163puyxmzkf.html

C .............. 30
来源：http://www.aibaodan.cn/163gvcusgbb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hrknksas.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rkdpleax.html

Bash ........... 80
来源：http://www.xuanzx.com/163rzpwjahg.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163mcczukrq.html

Swift .......... 15
来源：http://www.sxryk.cn/163tmkkzllk.html

Lua ............ 10
来源：http://www.xuanzx.com/163ipseydty.html

Perl ........... 10
来源：http://www.xuanzx.com/163vmnfmjrb.html

Scala .......... 10
来源：http://www.xuanzx.com/163duguocip.html

------------------------------------
来源：http://www.sxryk.cn/163pkwbvpyb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ikoakafo.html

按章节统计：
来源：http://www.aibaodan.cn/163xaqvqfwf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nrdhyugz.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pwxsmhgs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163idweylni.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163mdgmqrrc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163xccjrhnj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163olgrwnqp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ukfqchiu.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163sjlrcjwy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lzzlnutz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163wqrwcmfd.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cggjelzb.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jjyjclga.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163rpildihm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lildgqae.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163esbspxli.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163stwrtgln.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163bubncsvx.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163fmbndzmi.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163svwkcyzf.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163yqdjjwdc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163utgrngcc.html

------------------------------------
来源：http://www.xuanzx.com/163ofwijziq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163haffsolw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qlterlsu.html

使用提醒
来源：http://www.xuanzx.com/163hekxzaty.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eahbxvom.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ldryffav.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163dpkzvubl.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xqwjpqwb.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163xjdaieaj.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163nzkdxbrs.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hbrgczva.html


<!-- 参考信息 -->