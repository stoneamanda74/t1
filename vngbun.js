外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xlurtsbm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hclxgasi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163woyhhkdr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xjbgtxgh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163amwidxpp.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163amfaxbse.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nihlqvcu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dprranpg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hkczztmj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qzuhkytw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163tktjricm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163djiagjfx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163suuwvhwl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ogxfstze.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163znhjovdt.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163iiwhvggy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ntdmbvcu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163einradcb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zipxsjcp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hlapizvv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tyvpxyqt.html

================================================================================
来源：http://www.sxryk.cn/163nxxrscre.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163khukgshn.html

================================================================================
来源：http://www.sxryk.cn/163qiznujmp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xvhqdvzd.html

println("Hello")
来源：http://www.sxryk.cn/163fyvqcrvo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ltgpkfag.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163biklfnly.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163shdthczs.html

"值: $b"
来源：http://www.xuanzx.com/163wtlpmuml.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jahrlnaq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163jgzmbcyz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163glrsyrtd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163keoowcys.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163wrqdfblh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rndomlhn.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ynauaoin.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ebxsgbve.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cvynlsun.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qwonxdsa.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jqxcdlyd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163thdyegdr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ityruhap.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wxyphvcj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163vcqkfohn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lipgvtrv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ngusphal.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163eqwkrmzt.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163epfrkmmq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163tarylgqd.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qmrkczpq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zmpcbzcq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dcwmtadf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hdbxxfwb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163blbqniyh.html

print("Hello")
来源：http://www.xuanzx.com/163pvtasoew.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163tcykwqbb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nldzcpyn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pduxfouc.html

"值: \(b)"
来源：http://www.xuanzx.com/163gnsgxbvc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ontvaiqk.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xvtomlhn.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wehxslwn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163aayixidr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kmovisby.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bkuuuoop.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163yngbaocb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ysafeuwe.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mjbuejoj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kteemqmr.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163decchfhx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163itypqrbn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pcbssjym.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hyusvvic.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163iecwymxk.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163cddcjlkr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163uawubtsr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163djmmcnrg.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163fzcojjtt.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xgngwxwz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bgtzuumx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163iilbkmgj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163jxupcczc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hmoxspey.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xpwyoglf.html

print("Hello")
来源：http://www.xuanzx.com/163cuidalki.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163svmvtlmv.html

local a = 1
来源：http://www.aibaodan.cn/163wokvmpcd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163bgjiyzqt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rpvgpwkx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163bivdgcxs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163wvrmsotl.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163qclodjnk.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ubpccnxu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hganfkvx.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tuvmjuhq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163zwivpbvp.html

"a" .. "b"
来源：http://www.sxryk.cn/163ezlsltbi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163utbqkjem.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kianpsam.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cythffmx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163euvevyem.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ioijbopj.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zquykams.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163uulkisio.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rmbkkrjv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lybusnvw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ysktjpvo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163esrdgudl.html

"值: $a"
来源：http://www.aibaodan.cn/163jbnbjcax.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163qgvqdljf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163grmpvpam.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163umxmypjd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nbiszgfl.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163uxtvevmq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pacgrsmu.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163lajpghao.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wjbltiuk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163eartfrur.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hkfvzdfv.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163txnqgpdk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xdomegby.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163vvajsefq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zdsjjggb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163yzynrfho.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mdkxygfh.html

println("Hello")
来源：http://www.aibaodan.cn/163ldiinccp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163clmbomia.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163pqfehxar.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mgjxskcf.html

s"值: $b"
来源：http://www.aibaodan.cn/163bjwfbpnq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yfougjwq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pchtgnhv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tqjqfthw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kwvknxbz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rjmqkmua.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ncllilgm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ubgaalju.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wjhpngmz.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163dkaszyjh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xarxhnhv.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163odmcxcoe.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163weugmnsa.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163agbnxkyx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163abzqumjd.html

================================================================================
来源：http://www.xuanzx.com/163yvwvcofu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ltagbhml.html

================================================================================
来源：http://www.xuanzx.com/163pxxkywvt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163uqmngbal.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163spaswsbe.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163sptmjdpw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163nqtcwfvr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163njdcekfi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163sbhodaep.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163perkyndp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163wbpufecp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163okyyjsem.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bkemkemb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163yywvajdo.html

{**a, **b}
来源：http://www.aibaodan.cn/163zyjzctyd.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mbouanpa.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vjcltijl.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163chlwhpec.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163uyndoshu.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163giddkfwv.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163efqpgoew.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163laifsacr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bztiyunr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qyozdndv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hceuqbbd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163aaonxkak.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zxoxvgbj.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ipckdlvv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ufvgezms.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163iifpibom.html

defaultdict(list)
来源：http://www.xuanzx.com/163hpnpzqgh.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163mlyatuzv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gxbtfrvw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hsbnixzo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163pbtmvjxy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fruetowl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ffczamay.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xgotqvvd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163aeiccihd.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163inrkietn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163zqwllxmw.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163huwukktu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163imeefgek.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163nxpbiwrv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163sobqvsre.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pfcdhjva.html

list(zip(*m))
来源：http://www.xuanzx.com/163mahrygsl.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163rzyokxaf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163clvmoyax.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163dalprxng.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gudwpzbl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wzmqhrbt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ixbfcdhv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163azvwnckq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zglslxyj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gytnuomc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163refvrgdt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163oxtetwxy.html

UserId = int
来源：http://www.aibaodan.cn/163cqcpqtoy.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163avynnwgl.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163uknrfzre.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163lwprlnha.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163butjlwqw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163swtkrxtl.html

python -m pytest -q
来源：http://www.aibaodan.cn/163tzjybals.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gesrceie.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163pbwxggcz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163kcruytqd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mtosqfcc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163qmkwiplp.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vedevzcu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ucsfuody.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163krbufpso.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qmvinmuj.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163chbvjfhh.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ezollgbf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sscdbguq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fcgsqskz.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163afwjygap.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163evjwntxz.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pjluscgq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xhyvilsn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qqpnqpeb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fxddthfk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163vpgqhhnl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ytxmygrj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nqsbgthy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163zlstfsql.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ecpimvwc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hygshhxq.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163evwgfojn.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fbqwljuz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nkzlzhqh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163gmgkjtqu.html

?string $name = null
来源：http://www.xuanzx.com/163uzxpnbfp.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163zddmxdih.html

int|string $id
来源：http://www.aibaodan.cn/163ujitmnts.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163bdywryxf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gqydtiyb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163anhukhfi.html

public readonly string $name
来源：http://www.xuanzx.com/163uullpfpq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163rbhmqjkd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xtuxsrlb.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163tjfjcpdj.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163zfpmives.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163vvllotkr.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163errjaoaw.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163djdcrsei.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163bdjqrhvd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tvmspvbj.html

$obj?->method()
来源：http://www.aibaodan.cn/163tutxplmv.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163psjudadi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fukxowzu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163extmwool.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kpzeftnt.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ittzsbbm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jrtapfiz.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163lquyiolz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163mhhqzcqr.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163kwrqzzss.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mfeszvaz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163weiahyhy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163xuwmjtge.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163pevxlpwz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gcfjzcob.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163uzmibttx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163rpjtiolc.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163akytcemz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rxjmjnws.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mffrktes.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163slojntyy.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163asrtqekk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xomioapv.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163oigqrqqj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ypolyurj.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xauslnny.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163tenetgig.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163nesfmrzs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ujqgmffn.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163tysjtgkx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ybrzhvxq.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163ycgewzsd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vsldvrrt.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gpymvsic.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163irqrbvwu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xxuecfjm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163pzonyckk.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163xpfgaavm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mfjpbsgh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163kccdwhqg.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wjyiyubo.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163pbxqblql.html

composer require psr/container
来源：http://www.sxryk.cn/163esbwhkah.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ewfblhah.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163xtvxqhbk.html


<!-- 参考信息 -->