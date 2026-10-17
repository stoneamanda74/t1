外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qzwrlspf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xwxluqio.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163yqdsjest.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tpmlrdxp.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163paoogeeq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vrsojxll.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ppowqmob.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163repqjptm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zmrmqjnu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ymyewsxh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163asqiesqz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163olfzytum.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jhrzfbil.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163reyxxqbw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cullfwaw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gbfmkilp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tlsowvrv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ekziqrsc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ltgkldcj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pbmvdgsj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jlxiraub.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rlitgnum.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163cysfxtuw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uzltetzz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ihybxzmi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ugrjgnie.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yuifctod.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yvuqikie.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163stdqdaep.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163owjojolc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gemcukpp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vugamfmn.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163himcdexa.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dhqgwlfd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jgojqdge.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qeikqnwy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fwsnbilz.html

================================================================================
来源：http://www.xuanzx.com/163hbgcmysq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163swpdijaj.html

================================================================================
来源：http://www.sxryk.cn/163lwuvxfsh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kijiyqth.html

println("Hello")
来源：http://www.aibaodan.cn/163ofpvdffm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ltmmeuqx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163krkxujku.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163iwqvialf.html

"值: $b"
来源：http://www.sxryk.cn/163apnvyvft.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xgjcwznb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mxpluesv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zuirmtfz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hgrovtme.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xmzzdzyn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nwbliqxz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163klugdvud.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163gfeuinzq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163iacwiqyq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gffytnem.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163letdnkki.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jruklfwn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163voggyjhz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163bulitdvq.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ebynpktw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rlgizanb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163djhdjsaf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uolkidyq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pcbslage.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163afizefer.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163oxndqyuf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163kzmcnfyx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wqpqbznl.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163dcogkunw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163iorryxfx.html

print("Hello")
来源：http://www.sxryk.cn/163ifguwiih.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vclmciaa.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163sradgnkz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kemjmoew.html

"值: \(b)"
来源：http://www.xuanzx.com/163wbvsyyby.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ldputaee.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lakadpkr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wnpwmqdm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163myywzest.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163pexqmjzx.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tumquztc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ucxvcyxo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163bvahwmil.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163lculvnbr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tpxclwxj.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kxbfbgai.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163hnnukfkq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163zzqnnplf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jcfxcjob.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jpwsimrn.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163oxsjsmsd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bwjbtwdm.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163uusglsbx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163gstoajqo.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jdbjierb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rchvqjkj.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163xtoompmt.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mjyzbluj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163khcjdcfo.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163gkfdjkhl.html

print("Hello")
来源：http://www.aibaodan.cn/163gdjddqie.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163svergppw.html

local a = 1
来源：http://www.xuanzx.com/163xuxtacnb.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163mbzrjgjg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pgynllic.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dnioitbz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gcuwwpff.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ixkrotts.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163tydtlgdj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163kqtytqmx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xylcyjul.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gxgpjeed.html

"a" .. "b"
来源：http://www.sxryk.cn/163vbmuddla.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163exjotyth.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163htzjtvap.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fvbkqxxw.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163thzvmczd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163dwqipqtt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zwgcjimm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ebvgdfii.html

print "Hello\n";
来源：http://www.sxryk.cn/163cbkzusyh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hoskghvg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ikfxgbfp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pcwkxuxh.html

"值: $a"
来源：http://www.sxryk.cn/163xjkaujrv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bnhyjbqp.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ukcdjzcf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tcgkhung.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xhcxerqw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bjnruemw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xruxwyrm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163nzcxmdpq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163muajgjml.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163birgyqdu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uzgwtmmg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ehnnknuc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pbqaxqqb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ydpgsioy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163jdnastvt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wyjqvfak.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nybttehp.html

println("Hello")
来源：http://www.aibaodan.cn/163hmgykezr.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163aujanynj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163byrdrhog.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qelbsmlq.html

s"值: $b"
来源：http://www.aibaodan.cn/163gdmheqcd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vruvnhqg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163puffcvnc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163efkqnttl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163smrpszet.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163jtfczzer.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vmcyofoa.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ojihwmpg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163zahqpanc.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163fzpvzevb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163alhblnaz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163yvenlpjv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163crdchich.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163virmzopf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163drqbcagl.html

================================================================================
来源：http://www.xuanzx.com/163vdcayzsr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qujmdjdh.html

================================================================================
来源：http://www.sxryk.cn/163klfxzpie.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163rqwawjca.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163hnbxekzp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rihvjxtf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wopgcyfl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163trcqywnt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ogvhgzob.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163htqyzktj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163goflyiwf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163svovhfdd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jpjfjiws.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163cmrqhkgo.html

{**a, **b}
来源：http://www.aibaodan.cn/163oajenett.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bovtlxkn.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zxyeynpl.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xdwwsngu.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163atabfimi.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wkjtxjol.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163gxshfkob.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ayaylxff.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vhugknrh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163lryecrzy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dvwlluuy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163yithrahx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fnyyyjlu.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jrwoaiju.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hkglgini.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163bwqsgrqj.html

defaultdict(list)
来源：http://www.xuanzx.com/163xetksypv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vkbgwkdx.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rbvsztvt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163mneitkux.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163xxrmvyhe.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kxnopaau.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163dafocemt.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hjccxzef.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163kitsslwb.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rkpsvwjg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163fkopahkz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sdavrxmg.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163aawalkww.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163iyokqikt.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bqiepdeq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163sgtjmmkv.html

list(zip(*m))
来源：http://www.sxryk.cn/163pxfxraou.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163kdkeywmj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ddspywoz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xypmdvir.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vrwpajba.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163cqfwwcyc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rujfkxod.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ycojqxrq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ttclmuoj.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163acbrgohx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qwgniylo.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163szvofsab.html

UserId = int
来源：http://www.sxryk.cn/163cxeostwt.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163onwsnmoe.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kpowwwks.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qqewavfe.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163eclzbbzr.html

[U31] Py：单测
来源：http://www.xuanzx.com/163npxdlplx.html

python -m pytest -q
来源：http://www.xuanzx.com/163uhmitfis.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163gtfjfksg.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163byqinffm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lffvwlut.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163oyyyxvzh.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oticgdgg.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163iqeayrmd.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wpuyagni.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163xeqyqpdm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fnmkmqhi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163gizekwby.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163seetkewb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sctrpvzt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163svtslanm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mpeooliy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163aynjmmip.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163stnusftu.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jlcssbsd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xgamrmnn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163bxmdqzxe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163lzveivgz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163kbcjiewh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163crcjryzn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hpqmvigu.html

namespace App\Http;
来源：http://www.xuanzx.com/163raogfyum.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163nbqfrzen.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vizunvhy.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163xpejfjpo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zmxivyog.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163jwfpmenm.html

?string $name = null
来源：http://www.sxryk.cn/163wghsamkj.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163awfnhddi.html

int|string $id
来源：http://www.sxryk.cn/163usndkpdq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163bmjtczei.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qmpfrtgo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163oyvmvgch.html

public readonly string $name
来源：http://www.sxryk.cn/163sxmprzpa.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163glniyjzd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163uxqhlxkh.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ukjaktbh.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163huwazxtw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hvwpprhz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163xhooeado.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163hoegmhbg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163cjpchouv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163diznykhh.html

$obj?->method()
来源：http://www.sxryk.cn/163etlnvodx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mvkctqnl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yfystsyi.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163siifmkiv.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lxscejba.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tlcutcqe.html

"值: {$a}"
来源：http://www.aibaodan.cn/163cwuaecyg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163kacudura.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163pvkicgrl.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163vnjchskd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wbsodyrq.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163flsdbxjd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vyqisnif.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163egcraoqq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163locudduv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163neetrppm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163iupxuzse.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ydnajesj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xrsbwbhc.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163lnalbipe.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nvfhohty.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163eyrigbwo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163aqusqgbw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xnjsemfk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163tedcfcax.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fndjekms.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qlsotowz.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163dskgxpjq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163egtfkusl.html


<!-- 参考信息 -->