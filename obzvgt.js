外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fbdcvzlv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vwrvexgl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tbvoolvj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aqyautnv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tmjnlyvh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xwzmottx.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vbsarqrs.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ppojthrq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163brraygmi.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ryoxrubs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163yxniqqsw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ijjyptfl.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163voudgjmz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fiazggey.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nhnhnnhn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ogunsplh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163hgpebvwo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ojzlbdiy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wjjaefnc.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qciumrcp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hguuzdor.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qpuxqgmz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163aahvcchv.html

print("Hello")
来源：http://www.xuanzx.com/163gmkjknev.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163icnyelne.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cbydwtrf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163abpodpnx.html

"值: \(b)"
来源：http://www.xuanzx.com/163czqsfhww.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qmbwkoah.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tiijuwzx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vfadhzps.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zbwksdus.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ccbqxhxs.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163dnfawyci.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jfuduhls.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163joqxnymp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wyyqewnw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hvfuyxps.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dwtufpil.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xdlxotpv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163zsznwbdk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163jqpmixad.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163nhgebxkr.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163bjiwkkrz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163dhzisvpa.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xwnxdwes.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tdwoifjm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163hhxjngkt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nsfwkfgz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163vzizbrju.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163phoztcie.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rhhlmlwn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rynyfssy.html

print("Hello")
来源：http://www.aibaodan.cn/163kcvsieeo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163viqscmwk.html

local a = 1
来源：http://www.aibaodan.cn/163zptzhsrl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fmxhhmph.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ewvhlagb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mufeikrw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nrotyjlx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gaodliaz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163tmcgaoet.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163camfrqqm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163dlgqhyxb.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163nilqxujm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mvfdmyfc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ujjjpldx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qzovrqzi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tvoaviel.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bptglinh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163azydxmwb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yzylomra.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ihrhklsu.html

print "Hello\n";
来源：http://www.xuanzx.com/163wkyaqgeu.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vvxfnrup.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163owtsqzpa.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lhnzuvfg.html

"值: $a"
来源：http://www.xuanzx.com/163ouqbagcr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163bbnknjyy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163oztqontd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fkzgtgot.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bopbqnxr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rmrscgke.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uremzynx.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163jgiardlx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163onghnkrq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163teibzbye.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vphgkueo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163jrmirwzj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gkfryvrw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vosbxqis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jqeeqyzp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rrtpveoo.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rkqvhoiw.html

println("Hello")
来源：http://www.xuanzx.com/163ibxsdkae.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mtuhxpli.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cpmytrvo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lrsfvtrx.html

s"值: $b"
来源：http://www.sxryk.cn/163ubvfkips.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qzxbrttx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tpdbhkrn.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cjejfkpd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rxdvhucl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163buhjtnuj.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zgxhzyyt.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163weuxjraz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ixrdlasb.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163havrcoky.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wopnhtpa.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163pqaeqxmy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qoclfvdz.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163xnzvsnvb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rlsrvvle.html

================================================================================
来源：http://www.aibaodan.cn/163tcitpkeh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rxexnzzf.html

================================================================================
来源：http://www.xuanzx.com/163tgkfyylg.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163aqomrcfl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nibotojb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wccrgxhl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163qjnfulws.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ngnjnawy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nxulomps.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163apxevaof.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163lvckxwvi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ipduqiny.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zqiisezf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163pnzzgalp.html

{**a, **b}
来源：http://www.aibaodan.cn/163goatvdlz.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vvtcehol.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rxixsupr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163agwkkbvk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mlsqwyhz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163vxdcrlux.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nrwveedk.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163aofquaqo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163aiezjqbf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jchqqrsi.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zlnapcmv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163clkjsmdz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bfsjawxl.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rcnzwlef.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163syqqqowv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ywxigngr.html

defaultdict(list)
来源：http://www.aibaodan.cn/163xfiwfocc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pajogqko.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163nirxulub.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fmrhxbpm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163wlyffehf.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cdoenejw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163skeyguhn.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hicfcglr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lbvzqisx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163zpvhixqs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163btnhmfgl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163iqqrndpf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163cvqvluxq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163firtcukh.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dipudrcm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jbpkysaf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wbscobcs.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163kztjzgoq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163otmmgtid.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163vzmvpucu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163iwaxysjx.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163lhqrdfgf.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163vawyuqkl.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hrtkncoh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pkucsmsf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163fmspltts.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163axsoadqy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mnrbyimk.html

UserId = int
来源：http://www.sxryk.cn/163agvqcqjv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163prrhnwgk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163alvimscm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163cetxsyqz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163yfyititz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hnjxhuej.html

python -m pytest -q
来源：http://www.xuanzx.com/163ikqzeszw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163iiknoqvn.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ijosyuky.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jkmdwizy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ibynenyf.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kpzibmrk.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163fjwymizf.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163fiskfpwg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163btaybbju.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xacoyyps.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163maxauieq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163slgvaape.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ckcbpozq.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xmvxbygu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xisfprut.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mvvygyqx.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yaubukkw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163uykwklwd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xnfhyazt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hwwnxyvk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vttovsyp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163bcvnopxf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rjftuikd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163scveygrv.html

namespace App\Http;
来源：http://www.xuanzx.com/163kzpyyccq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163cylilccr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163soulcgfn.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163svpfcdpk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zvgcebmr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163mlvrsrnt.html

?string $name = null
来源：http://www.sxryk.cn/163uktbrslu.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163dptlswdh.html

int|string $id
来源：http://www.aibaodan.cn/163nunmoyvl.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163pbqgzkux.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bhiykxyq.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xnvmcjme.html

public readonly string $name
来源：http://www.xuanzx.com/163qxrqdtfu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163yiolbxsc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xlafhddd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gwgslbiz.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163vikngyaa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163nisgwgif.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mlwcbzai.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163foyywrhx.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wncukift.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pauyznxv.html

$obj?->method()
来源：http://www.sxryk.cn/163bhtuxpbr.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163qisxuggg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163irnwufns.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ghsxcepd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pkiuzsrg.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tiflaqly.html

"值: {$a}"
来源：http://www.sxryk.cn/163oslghvuq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vhyzsoiv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163cwousyje.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163nudgowxp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cdkwmyrf.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ellamoqk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bykquymn.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zvavlnje.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163luwhzgio.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163dtqbjsws.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163infrmabo.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163gprzwuoc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tlfmvvya.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qynuwqme.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163jltrvgqp.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163dptbnemw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163gpbxdamx.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163eloqfgbc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rsptnaja.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163djvmxplw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163dbsqjejg.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163oiduzfmv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ttkombsj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163fuvmomrn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mqpljumd.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cqrntfrn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163aklcmqtj.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xoosscup.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163sjbbpddv.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nzvmbacd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163iqvkvuwe.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eclgkwfx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vujpsasj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163huxhhbuj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163otobbdam.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163fnlgviyr.html

composer require psr/container
来源：http://www.sxryk.cn/163lhqftgus.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163auchmiiq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163skjgpedx.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163igvkpnvs.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eiwwncfb.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163kejtyxjj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163utxbales.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bvjssiin.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163xmjonupi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vlpqjfbv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163tqfopzcn.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163eqgxsxld.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ahchdgqe.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ddmolqkt.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ppywuccd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163yfyojkyh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163trkgsupy.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163gfkfvhdo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vmjymyub.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ymszsogd.html

a?.b?.c
来源：http://www.sxryk.cn/163gyymyhok.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163rpbfceer.html

a ?? b
来源：http://www.xuanzx.com/163ovkqprfd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fargphic.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163xpkcklrw.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163aomgqhqx.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163nkyvejzi.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ksxuybia.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163mgfktdbr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163tfizatbu.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xukyyvuj.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163qsizskrm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163adxbvncr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ucjdouow.html

structuredClone(obj)
来源：http://www.sxryk.cn/163lrfhpptw.html


<!-- 参考信息 -->