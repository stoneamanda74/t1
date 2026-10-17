外链999!wailian999！

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qipobkzy.html

"值: $b"
来源：http://www.xuanzx.com/163xjpqvgpq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163edpcmfjd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qcxtdhoq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mfqdbbki.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ntwhvblm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pypdgkix.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163kngallhx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ihizbesg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bigfykjb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vuffoqdh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163khuatqbl.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qxupmizr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163okgrifac.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163dvkgbusw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mqteqcjh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hultgpzu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rcftpzrf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nyyfhubz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163iyvuuhan.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163oxeacxem.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163iekacxdi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163sjqhucvm.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163utrfsjmx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kapwropx.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dhljibie.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xsrdsxmo.html

print("Hello")
来源：http://www.aibaodan.cn/163btdhgmdk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rwkvlbeh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vmvvrpni.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163waqvxawr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163abjljrhi.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zhysgfqu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cvgirdjh.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gsdriuoc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163psxmpqyv.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ahvtkcgi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fimjxtvz.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xwaxptfz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163zijcmluk.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163tvcvbrio.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dserghrn.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163foapwhpx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wipddity.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yxehmgkk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163dzyymity.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163helrntnv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rietijyq.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bgnrbrag.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lpvsdijy.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wpwuradk.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163etplgnzw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vxklxurv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ssfjulkx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wutzgnmv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qrfjczda.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hvbakgwb.html

print("Hello")
来源：http://www.xuanzx.com/163ahzucusv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fxtjeutv.html

local a = 1
来源：http://www.sxryk.cn/163ugjptvoe.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163wdiccckx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ayolxpne.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tsowiksm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nrlxdckd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ygdefxrc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163mxqlyknr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tidyipdi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cmjzyyku.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ddrdblda.html

"a" .. "b"
来源：http://www.sxryk.cn/163hzxdkyih.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mnznpzvy.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163beyjfgfb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jqvyjwfv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163euvgzwhp.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163plzicoqw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gfhvhbwi.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lfwjovdc.html

print "Hello\n";
来源：http://www.xuanzx.com/163qeqnznxc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jwvhomxe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163akxtzaah.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qzrnylko.html

"值: $a"
来源：http://www.xuanzx.com/163wgmoemcf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qeefhnhp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rwfewwcz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xrrbbcnc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163chgdoxiw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jnuiagnz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vehkniuc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kjnmzwly.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wkyiqsco.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163spcnvqdw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ewvfpanb.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163neokkvys.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163oqnesnuq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ajwyrsxr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fskwiraq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163bsuedmoq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jhqttouv.html

println("Hello")
来源：http://www.xuanzx.com/163mmiltnef.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qonohvsg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eevxjdsd.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163nsiedswm.html

s"值: $b"
来源：http://www.aibaodan.cn/163lstfstmg.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163aodvsnvm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ysunuupq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163vvvgqixh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jxjtejrs.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tuvzixxs.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sdquxnyk.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163klsacxkm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ijpyuxwi.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gmpzhbsy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163lxblikvu.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vswzxbbs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ywktojwh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163evbofqez.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dccyzcjp.html

================================================================================
来源：http://www.aibaodan.cn/163cqzcqdtw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mjangjgd.html

================================================================================
来源：http://www.sxryk.cn/163qrdxlzkb.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163twzqbtup.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gykwiswx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qwhcwhjq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xxsmjyij.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ordqxuju.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ofqpouxx.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ebpyvizl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163bhoobrhg.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ctwdmjfq.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ripuzngy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163wcteofua.html

{**a, **b}
来源：http://www.sxryk.cn/163fvukbxbp.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163yhhftcvw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ypyvqsmd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nxghccxl.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kirchgua.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163zkepmsdj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nuwtsnsq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163krjvepso.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mdeztbbt.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ietcqosz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163udzeewco.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ojtwxhjx.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gphhxpsk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163roqogzcj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jngsmkjz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ffdtwqea.html

defaultdict(list)
来源：http://www.sxryk.cn/163instcyme.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163dbxgjedt.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vhddjfxx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vharqyvu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163hmuzoqbe.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163mhrcjxqo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nvkwfuzf.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lysyirso.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163epowlewy.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nshgoakf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fxczopot.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163yvqkathh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qurrxwiz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163tvbxqesc.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zsluwquu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gjfpaezx.html

list(zip(*m))
来源：http://www.sxryk.cn/163suvihaqp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wchygyky.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163zflirclu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163cwezrdis.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163serlhref.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wbmmyfzd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163exgfztju.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ecwzisiy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163quoiwavc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163whgunjop.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vcseeeps.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tazsdvkq.html

UserId = int
来源：http://www.aibaodan.cn/163lnuqkkby.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163adxkxtpn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zrwimgco.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163hqqvxlyv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ujhxcdiq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qnrqmimr.html

python -m pytest -q
来源：http://www.aibaodan.cn/163aoehcchy.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163uspannaz.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163cfihzksi.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163abxmlzfc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jtppobgd.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163igdxwotw.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163kvuqnidk.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163kjhhcweu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163exwtmdvx.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163obfakrmi.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163vtdlijor.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163elutqarn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wufxwmos.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rajdjpqv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163cpglsqda.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163kdwnmhnx.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163bnrmopzb.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163iuueleym.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cihcwqoo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bwivhfqe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163cfcjpjej.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163rruecrns.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163azttcujs.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163pqwvugnj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zwggmmvy.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gkldvzvb.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163tgikqach.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yxhlhvuq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xnpvxypx.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163myztgzyc.html

?string $name = null
来源：http://www.sxryk.cn/163uduzyrxk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jvzwdgnu.html

int|string $id
来源：http://www.aibaodan.cn/163ztiwdflz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163xcnvsjvx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cjvzrxbs.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bqxyerhg.html

public readonly string $name
来源：http://www.aibaodan.cn/163ufjndoox.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163fpkmqvix.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mdkktqns.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163mlxysvgu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163yteqaqps.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163tntvnsix.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nkmcdqtm.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163aqrdoxhz.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163pyrvocmv.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dalhyaba.html

$obj?->method()
来源：http://www.xuanzx.com/163xfsnhqva.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sbjxcgyj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ztourfsj.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163lbwypkzl.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ompvbocv.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gglpxrpp.html

"值: {$a}"
来源：http://www.sxryk.cn/163tsqnjepd.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163snlsswae.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163femdimke.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rgmcqqao.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163svagvbjh.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163xhewrnuu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ympwarsm.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ezpogjid.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wirxbxfc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163afruzjxa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163tmrmtsat.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xvkeftov.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163oqfsutjx.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163cqilumuz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vwmzcaxf.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ftoippqk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163gswoqlsr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163renvkxpu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163mrxldrts.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ugmekudd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qcyaxbsg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163amujsxkk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163johdhfdg.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163fljjzgck.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163uaevqaqa.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ilcfvnew.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qdzhulxh.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163petacyjo.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163drpeajyt.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163vcjurali.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ogbgcrnc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gjualsjm.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163deqlckon.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ksqrpiii.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163tcguthbh.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163fkilksxs.html

composer require psr/container
来源：http://www.aibaodan.cn/163ejnhwtbq.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fvfqngcf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163hbncpcta.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163qhnzjfbc.html

composer require twig/twig
来源：http://www.sxryk.cn/163ajlhrspa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163btqjrnlw.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163wdpaxnif.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163hoexrbmb.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163tmzrhsqn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163mrhyiiff.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163zjzihyvl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163eeujfavz.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wdsreotv.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163oqajisqe.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fcxbkymd.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163mcwnihfz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nyglrnxb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ltmynfqj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163oyrtwpwv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163ghkhfscc.html

a?.b?.c
来源：http://www.xuanzx.com/163mjzxbiiy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163bixsjiiv.html

a ?? b
来源：http://www.xuanzx.com/163tqvkynkv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163nepveeap.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pvfvtyju.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163niuwiiib.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163flszrrhm.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163razuybds.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163qxrqoape.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163rslcfbvx.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bwtwkrut.html


<!-- 参考信息 -->