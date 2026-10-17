外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ohnfbixs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163izmzgouh.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163iygcedce.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163emhzdouc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kvnvkozs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163nmrnbztb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oubcvaqz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fohawpmt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jxczhbii.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qqxoutcu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163dpeehjws.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pkpdycky.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xgdxvffs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163maerpxqa.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163xiwgfkso.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163yqfrxqai.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dbzqgcdn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dzilatnf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163cmnmcvrx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163awrokqkv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163sysuxegj.html

================================================================================
来源：http://www.aibaodan.cn/163zowdlote.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qztmdwwv.html

================================================================================
来源：http://www.xuanzx.com/163uokcjqph.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163likilruh.html

println("Hello")
来源：http://www.aibaodan.cn/163achlwiet.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163xsjwcmza.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163iubzbitp.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rhumjfmk.html

"值: $b"
来源：http://www.sxryk.cn/163dvkdomwx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163czbvqhyb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ygljjhoh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163utzfwdbj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ixkfqcty.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xigfqbti.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ajrvpjoa.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jgxmaqfq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163msszxzve.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dgwcmlvd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163rtxialka.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ekuaaode.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jsalstnm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163stwutjfz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ndslrvid.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163aqjygcdf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163cnueumtd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hkhcodmz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163aaiinatc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gtrwivuj.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jvikbxzr.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163slxghbbz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ffeiakxx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vqqjqbta.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163gsyrdncm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163obrgowdw.html

print("Hello")
来源：http://www.sxryk.cn/163lvunwtwz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dzletsfu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bkmultfa.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163heemfllu.html

"值: \(b)"
来源：http://www.xuanzx.com/163ikohamnm.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163iftgpegl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163wtffthwy.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163uirauljw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wsanavyp.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163fjuwtklh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163pfflcdah.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bijtogsh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vxalvntz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kuddjmwc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163lttjieqi.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163spedmwew.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tyoresdb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rmklumds.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ihjjuqsj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pfyeltit.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dwsawjpo.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163prqvefxf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163kfgorkpc.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163cbrrkukz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163cscrzyse.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163owqsxixc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rqjoerok.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lvsspwkv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qlzlkdzm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163okekkjme.html

print("Hello")
来源：http://www.xuanzx.com/163txlwyfgx.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jupwoeil.html

local a = 1
来源：http://www.xuanzx.com/163zytbfwdy.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163grvlfihe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163haakjyzo.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ccmhhmnq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ruhiumig.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163rtmtujgf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163iolinzku.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xcywmkzz.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ouzubbyg.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tismbcwb.html

"a" .. "b"
来源：http://www.aibaodan.cn/163wjugarpp.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163nbpbytuj.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163cytwifhm.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163eloxoahb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163obckurth.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163csfduena.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163acolhjfn.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pgtheqbo.html

print "Hello\n";
来源：http://www.sxryk.cn/163qntubhpy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wjcmyloe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nvjsbuab.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ulbbzegx.html

"值: $a"
来源：http://www.aibaodan.cn/163pxfwaqfx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zqhkaizq.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cllrbcic.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fperptaz.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163decgzmpt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163elhvemxq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nzavlrgk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hizttvbh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nrtxkadz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nsxmmypr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163yenzzxnm.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jubcfpiu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163pvygiblq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rjbwevbs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163apsjtqqj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jvkfwecw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163akqodwpe.html

println("Hello")
来源：http://www.sxryk.cn/163suknajsi.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ijospuai.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fadyjrwt.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mlmuzqiy.html

s"值: $b"
来源：http://www.xuanzx.com/163jhnkboly.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163pbgbhaiv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hatrfxcx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163sasuwjsu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163sceqcddy.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tuubqfgl.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163mblaqawj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163cynheatb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xezsparp.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dukvsnug.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gejegvun.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163czalipiv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163diocfnyu.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dtlzdnxf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163emdudmbs.html

================================================================================
来源：http://www.xuanzx.com/163mrjdxaex.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xhwdayzy.html

================================================================================
来源：http://www.xuanzx.com/163gtmsyqbz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163klmnglim.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vnlfvuvq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163iwqurexe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163hequuozp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pxyajeqt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vulsjfjo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163upxkbrli.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163aqlkimoz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ofumggdg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ugoysxyq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ixazzzir.html

{**a, **b}
来源：http://www.sxryk.cn/163lzbvgihu.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163difzyfho.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163tznqkujk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163cukvwrbr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gyexfuoq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gzrmftns.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zjxurncx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yhpazhyg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bclnkmln.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163feprejwx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163tzuketxq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163srdxovpg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zdvxzgmb.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ukoccjlg.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163dgnhuqym.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163glhrrlju.html

defaultdict(list)
来源：http://www.sxryk.cn/163mgxlqfmf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ahaxtstg.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163qinkonlx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163sptlyycr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163meggvhrn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163juauiewc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163henxqzya.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kwohboof.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163wxcxgwbe.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ktucbtnk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mmmeucew.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163qzmoezmz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163alynmjhg.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163inlnldsw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163yyemmbra.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163jitcvzcc.html

list(zip(*m))
来源：http://www.sxryk.cn/163kadqzdhq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163drqomgip.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163dzgowzhf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rxhgmlob.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163turgdwvn.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163iqahumxk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xeisfyuk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jdupyozk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cjzaoftd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xcjghjxc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ukvfqaoy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tyxborpb.html

UserId = int
来源：http://www.aibaodan.cn/163ovsteqsq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ctkaevau.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163vocfxdhg.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163yfvjrszy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163eacedkam.html

[U31] Py：单测
来源：http://www.sxryk.cn/163hjqriebx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lnqsxnsh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ecyqgphl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163iapnhrqn.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lztrwncj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163maquygzt.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hdcviwsx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163edvzdyhn.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ryobmvzn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tiwwdtqn.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bqvwmfkt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rrhzprzg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xgmvknyc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163uurywnrf.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163pghyirhz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nhhhsyst.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ncdovbhf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pdrmiqks.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vphcvhrf.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163okgcyfeq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kknhtbim.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163otrmonap.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jkmmnjfq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nnrrnwxh.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163gfzmszmw.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tygqufvb.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jsxquasg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163vxzqjttg.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pqxrygua.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cselwxcw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ryoyzait.html

?string $name = null
来源：http://www.xuanzx.com/163qyxaxoeo.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163occrpaak.html

int|string $id
来源：http://www.aibaodan.cn/163yeidekui.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rmrlffuk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163pwstdrrr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163rdfiestz.html

public readonly string $name
来源：http://www.sxryk.cn/163szqvnuhk.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wggknnjv.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163zxnjkzfj.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163xfpycpnd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163xxwxkfod.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xlutryza.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pafdbuqv.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hdnzebnp.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mxhkucuy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163dyvgnpmp.html

$obj?->method()
来源：http://www.xuanzx.com/163etjomjjn.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163kxkqqana.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163tylvfeei.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163yxryzohh.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lotlpheb.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163itqujhni.html

"值: {$a}"
来源：http://www.xuanzx.com/163cyyvzult.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163aebxtlma.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163kukrxdut.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163kppuzofe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cltcltxz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163yudacfpm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163xugcigih.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163eicijeag.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zphswjiv.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ppgiawat.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163iaxfkwpd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yvcdfvav.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163urkfwdnn.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163uhbigfps.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163oumozbse.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jfmdztus.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163aqiwagez.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163pckxxszo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163cifcktfi.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gqjuefrc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163iegwwrfq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163oiakyjwj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163eijygsnw.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163lxtlnhha.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ovpncyiw.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hdvbnmzx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163fgmdxbki.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163izddjqxt.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xyxdfbxs.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163kyvmgqyj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mffjlgos.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163grogcxpo.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ldhianmw.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163eezhsugw.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hlhcqmwg.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163pujxvela.html

composer require psr/container
来源：http://www.xuanzx.com/163wkmdmrkv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163hflwxdpf.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163xsjadkfa.html


<!-- 参考信息 -->