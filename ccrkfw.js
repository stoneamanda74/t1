外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fdxdaycc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163trrspdgs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ybzhyslm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lnyvlijr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ibfxewhu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163otckoqkt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163nzxqqhib.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ykwzizlk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gqinghpm.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163fkplezed.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ikkfmrub.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zrydmcpe.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yrrultis.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zgjwqdup.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163yyjvvocl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oplhmlbe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uwemswfd.html

================================================================================
来源：http://www.sxryk.cn/163zjfdqzfv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mipjkbfl.html

================================================================================
来源：http://www.sxryk.cn/163tqbwnluc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163mkuhismk.html

println("Hello")
来源：http://www.sxryk.cn/163pkkjxftm.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163fdiqzars.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163nescvsju.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163pteeficd.html

"值: $b"
来源：http://www.sxryk.cn/163refvomnk.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163feygpdxh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163biigoaka.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nscdllvl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qvllzbah.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163oizmttzf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bnkbxqpk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163gdkhyzqj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dzjdrpsj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xxrtjlej.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163iylmvvyw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ixoujajo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jpawvgnq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fxiddygn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163gjvyurka.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dscilvxa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vncetuyo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rxaqolrt.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dkhvfkrq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lyhkioap.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163urkoayec.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163tclavbbb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gqyflcpp.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ytefrqct.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163abyezzbd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xitwjnrb.html

print("Hello")
来源：http://www.sxryk.cn/163nrroobcw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zhjuhgaa.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163byheodlu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ojzgoncd.html

"值: \(b)"
来源：http://www.sxryk.cn/163ftxrrfmb.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163iztkkkcl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ekujuhbg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ecrpjgtb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vrnzcgxz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zvyxsstt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163nhcrwptt.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tggydlqs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mwqqhsbz.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ijghnbad.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qmgjsapf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tfbytyae.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gnuqoeom.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163argdxrcr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xfogimye.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ftfcqvta.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dfikokrc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163txpaxovl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tzkuddnv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163hhpsgokv.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qtsawvbm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163jqwmfbgj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163fjtozfxg.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163yktxcjvt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ubrwgcwz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163yqknkmxz.html

print("Hello")
来源：http://www.xuanzx.com/163rfflghhs.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mixbdrra.html

local a = 1
来源：http://www.aibaodan.cn/163cgzvpgox.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rhdryvjx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163twmifrdj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tyusfkmm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163cjnhgglh.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zschjooo.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163azicdwvl.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bzcsvlpj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jrmcvayj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163orartrkd.html

"a" .. "b"
来源：http://www.xuanzx.com/163rgqrmwup.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xajshcku.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xymxujwh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163karelxxi.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ztuekbln.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163buimgnpy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mybfcmfn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wedshqta.html

print "Hello\n";
来源：http://www.sxryk.cn/163gsollyxq.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lqfcnvhk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vvftyqrm.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jepeurqt.html

"值: $a"
来源：http://www.xuanzx.com/163qbojtyni.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163yrpktptq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xrdemtfh.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163shuyszns.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pxkpnbyo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mexhspfj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ulowungk.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cfuaesqs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hpahkfys.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ladcfvcu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dckwvzmp.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163amktnaji.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163popolrdf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hrfqysyw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kmublhye.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163tftspquk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163znksylbj.html

println("Hello")
来源：http://www.xuanzx.com/163lueezhan.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163sojpmmqa.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vkoaamju.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mqfjdanv.html

s"值: $b"
来源：http://www.sxryk.cn/163jsoxfzvg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zeayxgqu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163taqbpczp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tlmistfc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163zokuwnbc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mndjdlyr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vpxqgexx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163tvkpaymo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163jwmmeoai.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163sdbfvhni.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ysbbecld.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xouyqjao.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fuxmmoha.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fmqwuwxz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163llhxmzcz.html

================================================================================
来源：http://www.sxryk.cn/163xlxbqgxn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mevldkcz.html

================================================================================
来源：http://www.sxryk.cn/163xzjjamym.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163equopqmo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fxkhazja.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xzamkoia.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rnabxblj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zoffuqna.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163plqygjvr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163itjbvgfk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163cvsafdgz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lcyayvdg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iwlvbgiq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163heqnfnxh.html

{**a, **b}
来源：http://www.aibaodan.cn/163qmlfbwcx.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163estqpvnu.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163nohqfjpf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163bmthaaph.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163eeaiwftg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gevaosky.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163yucpfhtb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fuplglia.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163todcyvvg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163mbtzjymb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163meofqlpt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163yzuluhtz.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163snyhofjm.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qgkanhso.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jzfjlvkb.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163fxkkscto.html

defaultdict(list)
来源：http://www.sxryk.cn/163coegiret.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rdexnuit.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163wviwrjhs.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163fanpobmr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163remykzpq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163szhxhdmu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hgmahoei.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163sgbkiczd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cghggnki.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xdxmseya.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163obkkzsep.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zvtkqfqj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163olvfnhpi.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pjiqihkb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163yijhbhbc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vdviidoc.html

list(zip(*m))
来源：http://www.xuanzx.com/163pusfqrmj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163enzvdbkm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163soxznjap.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163byhdjkic.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pgeptmvw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163liyyirpp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pthrkmqe.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wrnnkscx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163hwgpoqkl.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gvavcrlg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163krieskhr.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163yatiyguf.html

UserId = int
来源：http://www.aibaodan.cn/163jnpulyej.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qbajehou.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qrdfxgvl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dnkatfmk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163gpyrxbcm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vdcsrlte.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lqauhiyy.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163qwtnncse.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163reiszfkr.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163pruirved.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hzuduozn.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fqjeabor.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163uocclama.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dqqofagj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163blkclzyt.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ghzdblam.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rxodopxh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qjnqzidj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163oqtsnkef.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163nwaxjuvv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ietifuli.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163reirttwl.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163yawoabmr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163aqmclpas.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dyvknqtb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ncnmgtrv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gcbhtgha.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163hzbvuznn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163agvjrgae.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163okifqirb.html

namespace App\Http;
来源：http://www.sxryk.cn/163odatmfir.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163zpjufbou.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hfwexpqn.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163mplhsfuh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lrltixlo.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ryyrovnq.html

?string $name = null
来源：http://www.aibaodan.cn/163wbivsouz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163nplbdyly.html

int|string $id
来源：http://www.sxryk.cn/163fywlfwyk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hhwbffny.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163sopfuyck.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163syuvovpu.html

public readonly string $name
来源：http://www.sxryk.cn/163hsiekuvb.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163azdnyctc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mbqxtdxr.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xzijwvgt.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fwtslbxq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tecbwcyy.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163lsjhcmql.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163pxnqegyz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ipdfvccs.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163lsdwmlew.html

$obj?->method()
来源：http://www.sxryk.cn/163hxohpilj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163jvojdomv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163dabfawbc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ptalcofu.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gxqynvml.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ppmxpagq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163kyadyggt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163fmivlcne.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163wsjmyajz.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ckxmxfjy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gpncypfr.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163asaezeiq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163zesezliy.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dlhthvix.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vhzdicuo.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163brmnhwdf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163oqgbshbb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163zpvevisk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163boqkpcac.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163drgpasqt.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163uqftwtsw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zmlqdycf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163uxwnvkvq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zewoneol.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bzebynji.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163vdqrkguh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163abdmmdvs.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ihqkuigf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163bigyhrnh.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mzgwdydy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163aelwzwmf.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163pwiuyfuh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163nmssbytb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vwyucaoq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163rmiazlrm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163husvvzxj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163jhnenwna.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163imhwugql.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ikrldrtx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163dspsbdaz.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ktbstpno.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163vtvilaob.html

composer require psr/container
来源：http://www.sxryk.cn/163oyjmwrpg.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163yuefxikj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yrofwczh.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ksqlnwok.html

composer require twig/twig
来源：http://www.aibaodan.cn/163bqbhjxgs.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163bxuglobg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163eovhihdr.html


<!-- 参考信息 -->