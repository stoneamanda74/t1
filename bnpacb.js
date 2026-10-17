外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wgijkbxs.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dcqejrff.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mswisnrg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hjelfkar.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wcvauoby.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163agrucmnr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163akgxpnty.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kvdmjlta.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wyyogzqd.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tiygvhtk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xwuxlgqj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163meojxsvd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kitivcnk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163atfptywa.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163whccgayu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163uqrqyajt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dumbzgoe.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ixisssot.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mhmlwyet.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xrrirybg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gsvkccmg.html

================================================================================
来源：http://www.aibaodan.cn/163xprqhtuv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lgzozxji.html

================================================================================
来源：http://www.sxryk.cn/163lvqmdmmd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ibvgrnmx.html

println("Hello")
来源：http://www.sxryk.cn/163wlpsvmda.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vxbgxwpv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163isutfsif.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zpzkeywp.html

"值: $b"
来源：http://www.xuanzx.com/163evxztjwq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zvdspwst.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163uvhwqyfm.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rqkoceqk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163nfqmeanj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163msqlsvwb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eimmnhts.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mtakvrnj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ndbtoolp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fucdlkuw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ytdyfcgq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163lerutxcm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gsawcjub.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nrjfuxfk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zmsxhtcj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163blwukgvk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tcpdornp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zjqbopms.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sizclplq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tgrvwphr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dbqpsevf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163helmfezd.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163gzqgjzqc.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fvljjllx.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kmgjwevo.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163lainqcqc.html

print("Hello")
来源：http://www.sxryk.cn/163ntopkufa.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ngcueffh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fdrnbpby.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163opzrbwdi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ybtzpisz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163fwlczejg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tacyjqpw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dfzyoqrn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hupkuspb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hsplujwf.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163rixvkdzb.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nbhsgwlk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163zvpqkxam.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163tgbbwncv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zgtnlvyd.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kvmtbleq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nzyyngay.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rpebcylt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ksorofzp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163siyoegpg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yvoigmje.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163tpprdcxq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163psrpatib.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163admaraic.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163yboddtoi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163niidsdxk.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pnswrhwt.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vmfwtbfb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ibdtsiwf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lnnxbgep.html

print("Hello")
来源：http://www.xuanzx.com/163mxvplcbj.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uhnbclba.html

local a = 1
来源：http://www.xuanzx.com/163pjiudhka.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163atnilqvm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xoovmabu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ramxnhsy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163qncwrmih.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kbhoogzp.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163yscdrhdr.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163juvfpwul.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dbiyfhxh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hibcugsv.html

"a" .. "b"
来源：http://www.xuanzx.com/163ddbuicjy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wdawgivl.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rvyoomws.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163iuqcqeah.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163oqjcmmta.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wigvugiw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zvwlulgl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163gopdbytm.html

print "Hello\n";
来源：http://www.xuanzx.com/163getuwkkr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163akvynkgp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nuvdocti.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vqrwebdo.html

"值: $a"
来源：http://www.sxryk.cn/163jjwxahtw.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163srnuzjkq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wswdzpdk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163xwvlyvjx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163pfponzko.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zwbxzjdo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ozdcjajk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uqgxgkrg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ftlrqyem.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lkrglaht.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bvaygboj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163bxfeyags.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163otujvloy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163yfzeoexg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163egjopryg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zxvliyrt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bpzoovrn.html

println("Hello")
来源：http://www.aibaodan.cn/163ujludkqw.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mygmomcu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dmphuhdd.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163inxciiym.html

s"值: $b"
来源：http://www.xuanzx.com/163ilsjeosu.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ndldczpj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xgrmzgta.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163huqcmqth.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163uctflney.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163magoaled.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ncogoddn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163oifokyiy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kmtyibgi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163actfyvhf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uashpzly.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rkyezkfc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yrtgvrlx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bxnoewer.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163etmblfjy.html

================================================================================
来源：http://www.aibaodan.cn/163ioxaocpu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163khxgttvg.html

================================================================================
来源：http://www.xuanzx.com/163noblvukd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ihwqbmcy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xfkcajwt.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bxuvidlu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ssjbrdgz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163byhlxjss.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ejmntsnp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xmfvhino.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163alacqjtw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dszostdg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qrnqnbzd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ehjiyhwk.html

{**a, **b}
来源：http://www.xuanzx.com/163tllarffb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163eahqcpob.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163luughhww.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163nsekvihb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163khgprtvd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nykpuxau.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163omnslllp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fmxrzowp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163haugqhoc.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oaxufvki.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163szrmwrdm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163knioviqf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yqviwadg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gksgzixb.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163zdtgqohb.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163iimjaxwy.html

defaultdict(list)
来源：http://www.aibaodan.cn/163jptiixfd.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163bdhtpylf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163mbvzsbar.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ewityysz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163yzolavbw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zujyuaoj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ascffoug.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163qllcgiaa.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163yufrhvio.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163gzmanbxg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163jkpkkunb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dqpgrrig.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163txceknaa.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wlfolmmj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163odoqgdjt.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163kwlwtxgg.html

list(zip(*m))
来源：http://www.xuanzx.com/163hsoxfcyx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163rcrdcmzw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163sbdzdjrh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ljzngucp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163baiitkuu.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wiktekdf.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bszubrbj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qqemmhzw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pkxkvmlc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163qtzopcwz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163etkaxdvb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fajtyxni.html

UserId = int
来源：http://www.sxryk.cn/163perizbpz.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xilanviw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163oqcwqcfo.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vbufklnk.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163yveajfwd.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vfjiwytl.html

python -m pytest -q
来源：http://www.xuanzx.com/163sfpehiyc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163qppumjtd.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zfmxokxd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163wjbzawuu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163clojojvm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163tmpnipzm.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vdtpxccn.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zivqikub.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163cspambyq.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163wdtheajd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163vostlbbt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ygvbsoae.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163cnoqpnck.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bqcxmtly.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163shnruaqx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163giqotxje.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163lqntfmjn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ucmtsgqi.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gulwjgyw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163cgxpoexv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163vjzzuhih.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163vhystfwa.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163epiwjauq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vyhhxplm.html

namespace App\Http;
来源：http://www.xuanzx.com/163jwvrylbq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163reogdwok.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163aprerypx.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163gyzxrekz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nwksdwxj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163qbpxqwoc.html

?string $name = null
来源：http://www.sxryk.cn/163itfjcpfq.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163eezqmdhk.html

int|string $id
来源：http://www.sxryk.cn/163skurigzt.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163wheedbve.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163trjwuiru.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kekvjelo.html

public readonly string $name
来源：http://www.aibaodan.cn/163fmygiqsd.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163flrbsbha.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163yrxxgppo.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qsnjiict.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uivtwtct.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pwuiynlw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zpdmdiaw.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163dkixjptd.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xokhfgxg.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ttlnxpxz.html

$obj?->method()
来源：http://www.xuanzx.com/163nygsnlbs.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kkbntnfk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163whtktjuq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lfrhjscc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rdxlwavz.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ckgstmzq.html

"值: {$a}"
来源：http://www.sxryk.cn/163ojrtuqyv.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163lgmofcwf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bgmerhko.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zlkxtavi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kgxxrqcc.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163cdfzfeek.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dgbgfobg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vyuqqrbv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163rxplrqih.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163eiulgyem.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163oavxaixx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xbxlqjhm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xhrqvxnw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163zyoxotdv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163reobybty.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vexmbavi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ngvitjkc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163hvfntgob.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163guwgnaqg.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ayozfgna.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kyjamiph.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eromqgnj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nfywpsjb.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163cllcdhzb.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163ejnhxovn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163kazedsxi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163cnndlhsl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tyfefdjo.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163oeezyrxd.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163cknxsxro.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163tzrsduwq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163fnmnuxnr.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163livkcqfx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163cmzzuxvm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163wqxjsvlo.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163bfciphmu.html

composer require psr/container
来源：http://www.aibaodan.cn/163qdnfltkc.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ovbqjzza.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ltphajwi.html


<!-- 参考信息 -->