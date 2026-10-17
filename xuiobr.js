外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dsdpicun.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tayqqdme.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163scavcmeo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mtvnykee.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qzwahguh.html

================================================================================
来源：http://www.xuanzx.com/163pdpcxkud.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tybsizzq.html

================================================================================
来源：http://www.xuanzx.com/163swczrsuu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163saqoxglc.html

println("Hello")
来源：http://www.sxryk.cn/163hagcpdrv.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gpkvjoyj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mgtjkuib.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163edqbfsxc.html

"值: $b"
来源：http://www.xuanzx.com/163kcgknwdb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uitkaubv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163poqkanlm.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ksteyabo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rmzbzksw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uxgwvesh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wqgiyxge.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ygyfyldt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mwhhtmgy.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163afgxxaqr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bzmugchx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vinxhsjo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163txxbfcfs.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163haydkpdj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ajuluwtj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163trsjtdrd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163deccdqcm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xsfscgwy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bbzmqmcz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qzaruxbg.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163kqtkhahz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163yxtpqcyf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fumlnkin.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tmikzqqr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hfqhyrvt.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163slxkviwr.html

print("Hello")
来源：http://www.aibaodan.cn/163ajygtmng.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163makgxveh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mstryymd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pfkuwcpf.html

"值: \(b)"
来源：http://www.sxryk.cn/163fhzbyrok.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bnquozaa.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163feiywgzt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zdonehbi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ohntoehe.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ukfafdmk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dxypvpfa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163zkwtoygm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163scctzlek.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163inrckmnp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qiotyxrn.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ntzrqgyk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wpekbxxd.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nitbwras.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zumpqjzx.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qyoyixyx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163iilvlmnj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163gtgdiscl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163cdvejcbf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jgtlxgux.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163gmpytyth.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vrilkwcg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gduszuuc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163faffaxrj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ubbwnrlt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xeapbpdl.html

print("Hello")
来源：http://www.aibaodan.cn/163owbuetjx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kqkjghfq.html

local a = 1
来源：http://www.sxryk.cn/163rxysvhwp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163meihomom.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163kqjdbwaf.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ilwwqgeg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pjextjnn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163whzvotol.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ggcilpcr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163hwnrzkhw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163framrjdb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rbrkyfcv.html

"a" .. "b"
来源：http://www.sxryk.cn/163jcpizrco.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kasaqmpb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163piryigya.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163armbkxyy.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ajmhwqvi.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163zthvymnx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dmcalsgy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163uzpfdsfi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bbjbnwrh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163pqpcmvzg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lndfjhly.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163kzuyppes.html

"值: $a"
来源：http://www.xuanzx.com/163smtyvvir.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kvvfzrle.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163rdijklhq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163mktszndu.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163fbpcbujz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163qbqjwdkc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163gjvlcujg.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qbjnrmzw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gvpqjyvk.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jzsbdnfp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163yxpcqmlt.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vtkjxyaz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163afmwhkvd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ofvydhop.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163vvdbitdo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163udvfejar.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163qucaqvxs.html

println("Hello")
来源：http://www.xuanzx.com/163knhazeca.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dcoawfzw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bpoindqg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hwyzrnur.html

s"值: $b"
来源：http://www.aibaodan.cn/163glenqerw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163nlvxciyb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163tapgdgsg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163hoehcves.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ylxfjsor.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xhudazvo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mkxzbnwt.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vkctwpox.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163axeijwdb.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mmkuzutm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wyobsqqw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163duiztfpb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tjgooskh.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ufjfoxnm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jedipbfr.html

================================================================================
来源：http://www.aibaodan.cn/163sqyszngc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163apewjqhw.html

================================================================================
来源：http://www.xuanzx.com/163kabcsmzo.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163efaeient.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gwhedydu.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jzurofrt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163jsfvvsuw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163lwhksaku.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163zbsasoyw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163sckeatoe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xmeglbuy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bhegibse.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qofllkaa.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163avzfober.html

{**a, **b}
来源：http://www.xuanzx.com/163vvaowons.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163mktkzcdx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vmpltwam.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jrxdkcgm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mscdjtmx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163uzomzjkj.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fxkevigc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jldmsemr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rdjabgrv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163hsentgjm.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ltxfyeuk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163usuvbvrl.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163kvpwnwdw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163xsgoxzca.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ylvtvihl.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nrimgztl.html

defaultdict(list)
来源：http://www.sxryk.cn/163cdkfwdkk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163dytkfhoa.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163wodbedhx.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163luriumqv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163diyobrve.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163cfykuxwz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hwyndcod.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vrspwxwb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hjhuzifh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163sobhcusi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nnsodwsl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ezwufaat.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163exkdzihq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163inktqisn.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pzgzdpju.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ehckatbm.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hjrzduol.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ntjuachv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163hlregrgz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163kyjtzqoq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jpibkfdm.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xekgrtsh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nqghvolk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ikqadwjx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xgiljgcd.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163dwqemowx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163isicgorx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dyfpwbzx.html

UserId = int
来源：http://www.xuanzx.com/163prnetlci.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163bngdgnza.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ppmkmmha.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163yvxvnhrk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163udqqxlnt.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ftdlhgmg.html

python -m pytest -q
来源：http://www.sxryk.cn/163afnumzhm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163phbtidsc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163oipzhbbm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163tpusiswz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bofxrgmq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qggfvnkq.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hqdbrqkg.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163rkhplftk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fleaddnp.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ejvsdsgd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163yicmlila.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163odhmioxu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ivatkymf.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163sviohrjl.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163rtmgmywe.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163uurtrnoz.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rnxaxjpn.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wpoovvuw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bsdetovf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163xgiqznbd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ghacwtww.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bchfkqgw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zsgpajkw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163hpsfgjzj.html

namespace App\Http;
来源：http://www.sxryk.cn/163whlhsiiw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163khlakxtk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163jhytxyty.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163uqeheelw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163aypougvc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163djpchhsf.html

?string $name = null
来源：http://www.sxryk.cn/163uosyrwrs.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163axxntzrc.html

int|string $id
来源：http://www.aibaodan.cn/163akdxtrma.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lcytmfpo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163lvjsxkur.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ydqmfqhk.html

public readonly string $name
来源：http://www.sxryk.cn/163trntnbrl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zuotxbjg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163zpwnthkj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163suyvsqdg.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163mepyrpor.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163uazvfluc.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163azzbnkfe.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163nbgqyzfq.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xtcwuqko.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zfzbuoxo.html

$obj?->method()
来源：http://www.xuanzx.com/163vmpwvdyq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ypzpmuyk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ehdbumqc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163dcuabezb.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eoeqvcke.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wjctctmd.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bjultcna.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163rysdhfak.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163jfittahv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qrkdqovx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163okvvxnfx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163wqqzbhom.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163guqejbnb.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tffafajp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tahaovdq.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163nhilifke.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163enwsfayk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163shjtrsny.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ozcrnewm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163depvsgse.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qoyqlhor.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gyzsvvva.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ajvrqzxx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ygenlibo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fplznmxx.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vazvaidj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ugralwas.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163qdbsjhvw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163gihpjiyc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163clmniafi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163kjqvcnld.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163xxphqzuu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163dfvaahuw.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vyoeicpl.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163iwaopigw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163wscsnxcw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gixiuugc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163raebiajw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163wyfbmrdh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wxuzepqd.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163vgxnphha.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163mvvcjjpm.html

composer require psr/container
来源：http://www.xuanzx.com/163jxllyrxz.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163rdlkffbg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ofrcookl.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163offrynrp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163qtdcmtvd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zfbmzieh.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163gpeyqasq.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ipemkpmk.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fvvkcxzn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163azxjsoxf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163imhladzy.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163uubbchkx.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dkyiuzcu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163rebvkgpd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bebfaitw.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zhwfilfx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ejbzytym.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163tfbeucya.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jqxzuotj.html


<!-- 参考信息 -->