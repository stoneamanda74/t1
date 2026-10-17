外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bjoaxzvb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163pcynfqlc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qfuppijm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163jspxqxwx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ylczddjf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163oaeeykge.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163szlglxvq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163olhajrgz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163sqqssjlt.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xremlmcd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kydebymk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rvdpukmm.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163pkldbxgy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rbpizzvw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fzeatnzb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gvpmeehc.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ifjwvapo.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163alpqmopd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163eluxjfih.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163occrvgnu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pphifgnf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163iqfrabih.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xtwsiasv.html

print("Hello")
来源：http://www.xuanzx.com/163npqfhprg.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vuxeqffo.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qjixcrhb.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jwruqjbc.html

"值: \(b)"
来源：http://www.xuanzx.com/163ffqtgbdb.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wtguppvi.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jxsjdwmj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lqerrlku.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163feupgqcq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163monfkqpq.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163tcgenwhn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wmsxnsws.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rclxtopw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163changdjv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jgioxvnu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ohalojlh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ktlkrneb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163rnktpzmd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cgyglscq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163avhzjnnf.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163hgbvwfbn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163phlmqxmm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rpiekibf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163thmsmeyn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163kydlxaqw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nipqvkar.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gppyderx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lbuloups.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vyvpyvqb.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gagizanb.html

print("Hello")
来源：http://www.sxryk.cn/163ajthjwgp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uxjyfrff.html

local a = 1
来源：http://www.sxryk.cn/163aspzayyy.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163pbmdouid.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163hfpbfhqn.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yoclnbwn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ojjftoir.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tedfxcje.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gtyizzgd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rfmtsoms.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gaxiyuni.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163paxiuzcn.html

"a" .. "b"
来源：http://www.sxryk.cn/163rpgdphtq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tvowmyln.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vuczzuwx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lupskasb.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bgcvwhwa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163genjnxoq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dgobimrn.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163opbhqago.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hxhxqbez.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163pxujhbap.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jnmwusek.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pyahwfto.html

"值: $a"
来源：http://www.aibaodan.cn/163eigbupwo.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ololxkif.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gnkvnkbg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rcvidirb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zqtkyppy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pnzghruy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ygareqhc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nhuqjthx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tqjraogu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lcxwonui.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163djsaemuw.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xcddlast.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163djekgitd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163oqxtaykf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bsdqevjt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163snrxcaon.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zayzrfkq.html

println("Hello")
来源：http://www.aibaodan.cn/163yrrsvlck.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163zrvunsiu.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163jcvdquzd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hytsgpri.html

s"值: $b"
来源：http://www.xuanzx.com/163wffobshy.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qhctzhel.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bhlqgtug.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163qifjyorq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fldihfzp.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163midqjkfm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163tzjizrpz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rfexbblz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gbnghanm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xavjycyc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kkszlqbv.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163udognlyy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hjdhlfiw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163bjwpsgak.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xkduswjm.html

================================================================================
来源：http://www.aibaodan.cn/163gosjegbh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ydotkupl.html

================================================================================
来源：http://www.xuanzx.com/163txmaxtjc.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ubekwsvj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dloypbsk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ttacamvy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rtshwwjv.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ywdkwgsd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163czngnmru.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qmpezhmw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kvgdiuiw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dnodtwua.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163szcfekug.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163uqtjtums.html

{**a, **b}
来源：http://www.aibaodan.cn/163teaaqjzt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fljjrssf.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hagirzhg.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vyofwggr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qmgqfctm.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kfbudwqp.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wbmhvgrx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163cvenqnws.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163kevlmpgp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cvtrdxhh.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bzyddjoo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163tizjccbd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ccjndmtm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fxoljuwg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ubydnuvh.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163yadsimfx.html

defaultdict(list)
来源：http://www.xuanzx.com/163pehkigvo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163cwpvtpuj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hjvstjgt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163rhdxibtz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vxlmxrjn.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163aasnqrze.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163wypljzzu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163afxbtxgi.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163chxiamzj.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ltalpzju.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ltgthzzg.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163urdjkehl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jikfqtpm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163lnpqcozk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163yaxhdqkr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163lezhrhvv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wxohrozt.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ofkxvnqw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163csigzzgj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yakjrvzi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yshpazjr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163gdfiulyj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cuqayyus.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qetdpxez.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ppoeqqmr.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163slkydpfi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fozkvpnn.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ovqueztr.html

UserId = int
来源：http://www.sxryk.cn/163iffsiztw.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163apwihdse.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163sywnwaaf.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ycsuqmyh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163nqdguduz.html

[U31] Py：单测
来源：http://www.sxryk.cn/163yrwmyink.html

python -m pytest -q
来源：http://www.sxryk.cn/163eithcvsu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163oxnoqdit.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163izftdjaf.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163kdhmjcec.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163udapriqg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qxtfqbse.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qykugkzu.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qejnuxip.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ivvxfqgd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yrntpxio.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yhfagwei.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kvqehsmv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163jkhirowr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163nrqrmxrp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163obzpprgb.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163pjfdwwsf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mrowecqv.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ontgfnbi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163okfxiaje.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163rzwburpd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zevhupys.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wypyohfd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gtpmdbbv.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163suywlmeg.html

namespace App\Http;
来源：http://www.aibaodan.cn/163cwyfqfbq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163wgkygdqv.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163iqgmxzyj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163xgyiqimp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xssduieu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163wfblvisr.html

?string $name = null
来源：http://www.sxryk.cn/163dzjnncdg.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dacmgsne.html

int|string $id
来源：http://www.aibaodan.cn/163dvlpschj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vyvixiir.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ithtmnfh.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mguvssik.html

public readonly string $name
来源：http://www.sxryk.cn/163cogfyeis.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fekxlbgm.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163mhmfappr.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163dfvzcbtm.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163xdczizzf.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hkcobgfg.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163inozqqip.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163hgifiasc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163lrtbleec.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xvleklvb.html

$obj?->method()
来源：http://www.aibaodan.cn/163wwrdskmz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163krqqiuhb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163otaakrrv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163tzkqqcqw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163thlagsop.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163vwjvyedo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163szwzhmxw.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zzkreekp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163yydksody.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163cbjwqmlx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163owtuznzy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163lrdsvwic.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ezkkddmo.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dfxrvuet.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mgzqgftv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mitriyon.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163gdhikxts.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163buwqcier.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ysjgcsba.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163csxoovmd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163yabakdwn.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163focorhkc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163bsrapezc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ddswtiqv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xxlvqyqi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163bxfgjjwm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163jkcqgtxd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163cbirtrvr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163fgabzljt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bdzijsmm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zvzitvwm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163thzfweqs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tdxqgean.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163ipbgreqq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163gymqsmek.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163djwssuer.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ljpuvcsr.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dklmbhmj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163bfbderjh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ihksmwhz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163rqtrsdal.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gaslqzif.html

composer require psr/container
来源：http://www.xuanzx.com/163nqpjygpw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163lsmqgnql.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163flbdauya.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zzbnjeak.html

composer require twig/twig
来源：http://www.sxryk.cn/163ohxgxlyi.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zwosvonz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163phchnauc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163zxolkpqg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163litmakcc.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yhffwilp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163uyojjxpo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ofubiqky.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wtaekwkw.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dgzdhguc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163wxlgrrat.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zsgmvuwl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163todgwknr.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jlkltudr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163hdnjtxki.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163uyqnvhqy.html

a?.b?.c
来源：http://www.sxryk.cn/163qbseiidi.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163shpqoogx.html

a ?? b
来源：http://www.sxryk.cn/163lwfodmxw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163uslauzbu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163aiclnbde.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jevhipfg.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163tnjlbdop.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ontsktfk.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jfdavsxd.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163aafyewen.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hxerzlot.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ugnwsfrx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163comjtiqd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vwtmocno.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jnnfwbwr.html


<!-- 参考信息 -->