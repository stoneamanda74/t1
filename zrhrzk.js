外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hxwkhaxs.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163arlctupa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vapuhewa.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ndxukenu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xscwkjuo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163asnojgpf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163oxojwtfr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163lfncnsbw.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mdqtietk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lvgwmkcm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tvzwqfja.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163kemzddee.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163klhkkigb.html

================================================================================
来源：http://www.xuanzx.com/163frkszlex.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nbzowrgv.html

================================================================================
来源：http://www.aibaodan.cn/163nmgbfvrc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nstmyqqd.html

println("Hello")
来源：http://www.aibaodan.cn/163xdnrctrp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wrqomexk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vkobirmh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fixstuws.html

"值: $b"
来源：http://www.xuanzx.com/163ncfhezpg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163sveqzwvf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jgstgdku.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163smozsiiu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nedwgmob.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163whmrqeof.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yoqiwbgn.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163blpdkxqh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tmltsydy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wedvydio.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xnzmtrxv.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zpdxumye.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163usohzejl.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163jrivlicd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163oqbgorib.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163icpukcaj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ujzdwybq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ohyurjmq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163acsryfjq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bltkxzxz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wpchkxyi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wpszjvfk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xmbtlmqj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163trhxidtu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163focnzgod.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163uvyvpysm.html

print("Hello")
来源：http://www.sxryk.cn/163rlehvlro.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xwsimled.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ribdpkia.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hqzpmfkm.html

"值: \(b)"
来源：http://www.xuanzx.com/163jqgjrggf.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163uuroscaf.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163favlkmyp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163yphhgacn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163eexdpwkd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fvenbeka.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ytpphjix.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163kvgbxrgv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jptcrvgk.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163cnoxfsqf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163oihyzxks.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ztbirqhk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qhhnprru.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oceavpje.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163tzknlkkm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ihzjfsnk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163eajunrsk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163bssjrlhd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163zkddmqib.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mdxuncdx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rpzfxbsu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ncqeljrj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lwqrbygh.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163cwftdsrb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163tfnnvvpa.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dnqrlqtm.html

print("Hello")
来源：http://www.aibaodan.cn/163oytynxke.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rhxazhnn.html

local a = 1
来源：http://www.sxryk.cn/163yjzqiars.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mvonlzux.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jcyewzqv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163belkzpfv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gcfxulss.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163gvwjwfnn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cqqlnxdo.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gyjkbcgn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ktyzmbhh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163eigdnkyq.html

"a" .. "b"
来源：http://www.xuanzx.com/163rbiosdgr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163phtmjpjn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vfdogllu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lxaskine.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163sqjvacdy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vlexxwvi.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ivryvgqq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uwpqjxto.html

print "Hello\n";
来源：http://www.sxryk.cn/163vgkxktjr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163jydbrdhz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rcdaoxps.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pgauextl.html

"值: $a"
来源：http://www.aibaodan.cn/163ppimljlg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163thwzvyvc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dfrhpqky.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163sajailfs.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163coxdgmwj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dawakkmn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163easrkcwf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163evmuglbo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gnohkqco.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yiymjind.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bombackr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bslxoscs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ulnbitit.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gfftjccv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163skquiwhz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163gvxvdzyl.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163pptfgncm.html

println("Hello")
来源：http://www.sxryk.cn/163ytxrzwdx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163lmcjfqib.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wxfbqble.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yqplxebt.html

s"值: $b"
来源：http://www.xuanzx.com/163yurfluqc.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163brgozmmk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vudnpcrx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nqyszkux.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yuqiwiui.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ardambmh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163svxhkrwr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kouenarb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wrcmjvux.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163aeryufxl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kwykiacu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163taikuhza.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tyxotdhp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163egcrqbdg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163igvmgmkb.html

================================================================================
来源：http://www.xuanzx.com/163suzrabro.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jwuipwhm.html

================================================================================
来源：http://www.sxryk.cn/163gtwfzlnl.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ilvncpbl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lrlbcfme.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vnkibtwf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vksttuxv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wiqqftby.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yqepkmdg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vxanmbix.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163msewwsrr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163oqxjlbow.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pgtxdiwv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gnruvzgn.html

{**a, **b}
来源：http://www.sxryk.cn/163dfjzljpj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163aqaznrqr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jnxjjlxo.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ipmmvmmo.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ahdjhgii.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jlvzipna.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zcxuneof.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163dlgnhlar.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163zymcsymw.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163yukuxfmt.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163cvkiuekk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163zwkkkjpy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vwwxudyx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ihepzrbc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mfivbvfn.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xckojojm.html

defaultdict(list)
来源：http://www.sxryk.cn/163gmzvhgwc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163pdhofrjg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pxqjhzyv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ugrzwapd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163czgsefua.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163etnjqmha.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163srfliflc.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kydbjrzw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hlekoduw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163baptnudb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rfvkefko.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163sobwrtuo.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lfaugiff.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ynufbfet.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163itdpsshe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ccdpmeyt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jsybimil.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163dxnpkqjq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163sispbiel.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163qjtnodxd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163uiqatuph.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hcotcgol.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163gauzexxf.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ndrxufda.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ktxysjbp.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wjesntzv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nlswdxvx.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163xnbmhwot.html

UserId = int
来源：http://www.aibaodan.cn/163jcgdwdqy.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zsakrbut.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qgovzflk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163odriootf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xrktrrtd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163zogdupla.html

python -m pytest -q
来源：http://www.sxryk.cn/163euagvgbz.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hbddyxax.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163nkwdeyzx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163mablvtle.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163wilkhaoi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oditejtg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tdqmteem.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163uyaminoo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163lpcgqqnv.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163aegllpdb.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ibchquwe.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xohwwcio.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163mtvbwczi.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163sqkseyxf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pevjvmko.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hxktoapp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163exdemhsj.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163yojaxpdq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xsjnmcgx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qjorqotz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163cxiopjos.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sbbjdupp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yojlhsaz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163vhosdpis.html

namespace App\Http;
来源：http://www.xuanzx.com/163zuybhroj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xgvoiayr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163uiiexsdw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163qoazoxza.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163iuxcrwrv.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163hacgggac.html

?string $name = null
来源：http://www.xuanzx.com/163vhezstjl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163dmiztqac.html

int|string $id
来源：http://www.aibaodan.cn/163bdxayktr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163cbqhdxiw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163lvhvrboz.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hcdiunsi.html

public readonly string $name
来源：http://www.aibaodan.cn/163avkgllqv.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nxmyobzv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163jnotlelm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vdyqvwqt.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163qextxyeo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163jyqbfgpz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163usyeewug.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163plfyouum.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ezjakmgy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gcnqrgfv.html

$obj?->method()
来源：http://www.xuanzx.com/163fxybpojq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163smrjfpuj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163npwcydhk.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163elqwuwak.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yaeduygg.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mjsgavph.html

"值: {$a}"
来源：http://www.xuanzx.com/163dwmsegxq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163xozenqig.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163kzdnoexp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163aejpccwt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163staoygor.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qtsjkqgd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163iijhpeup.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163dwhbmaoo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wlkzgbff.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vhgagreb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163rdncltub.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163cutippqh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rjiqnzrd.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163uwyslbqn.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163dpxtrmkw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ebvijfpw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163znjzqhrm.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kcupomqf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163adifxlpf.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163pygngmsw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xmgapmvg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163eyfbsibq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ycawqxld.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163jccezdgp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163tsbwugwu.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xpsmdasx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jbednlvc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163wvfelcqv.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163geiinnag.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163tmmcgnye.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163fltwomsp.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bkalrlqb.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163lilprhqf.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wzlapxsb.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163jphqtexc.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163akysizpp.html

composer require psr/container
来源：http://www.xuanzx.com/163injfkzxz.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xskwkfuv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fapuqjcd.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163uzzduejb.html

composer require twig/twig
来源：http://www.sxryk.cn/163avqijntd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vfgzktlv.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nuhosypp.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163udztghgw.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163iknwaang.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163dvggjeek.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cdgdtkms.html


<!-- 参考信息 -->