外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hvewsorg.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xyapsuxs.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hnhyswui.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163nojqthhj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163uspyzbsq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163iricnquy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163demhnohn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163owrmxlqu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qtzrjnqq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gtopmeqd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163urydmsky.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nbkotjgn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ltdwmwyi.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ewapozib.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163fftjnghk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163gzgyujjr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yaqjtlux.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163muhzqiru.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163tfjquste.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163uekkozqa.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163heminict.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wivdhily.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fusnomqd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kufhkqkq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rwgekabe.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tcaeohtw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kzetpauu.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fnfknvdh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163avevcraw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jjyxuqfg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nwucglwr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163onomomdx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163znckgnnc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ttlrrpfs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gvdptlvz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vvervlmc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163sxbvvxrz.html

================================================================================
来源：http://www.xuanzx.com/163fqpymdis.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163utaawoxk.html

================================================================================
来源：http://www.xuanzx.com/163slbymztm.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bwryumyo.html

println("Hello")
来源：http://www.aibaodan.cn/163gjtvefaf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dligtyeq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163htvafxrx.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163oivbafek.html

"值: $b"
来源：http://www.aibaodan.cn/163rhuorpzy.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gzsepyjm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gxokwzto.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ugfrygns.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163pkvjxveb.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pssykyzt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163janumtbf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gzcgirsv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mgkljkwz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163tmnegwvz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rnyzuzhh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zuzgucfk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nxnbwnbe.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rbsjeykt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rhvyispo.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zoxsbvew.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xbocurwq.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163rjlathzu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163beblgjod.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163odqkeohk.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zkdwbujl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vgekjmtn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cgmshddv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163eyyrexwb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163uzcoegcr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xdisksue.html

print("Hello")
来源：http://www.xuanzx.com/163sgieliih.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hwzdbfvs.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163iepcfdli.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uuvhvmkh.html

"值: \(b)"
来源：http://www.sxryk.cn/163xkjkmlxv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tojahnch.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lwfklqwf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163esxbnxoq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163dnniukdc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163pamxwvgq.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jhgozdse.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163woyttkbq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tomwclkp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lzhztxzd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wtgrgxnb.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ugaxcprj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163adtrthce.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163zzqefcac.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ailkbrwi.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163arydvemu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163rjgmvvbk.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wwdehpgg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ddyxkfzt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xwpofxkx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163cjlddypd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wadjepxc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163jmifojar.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163umqlhksz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tgzptgqz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tyykhohq.html

print("Hello")
来源：http://www.sxryk.cn/163zgbdprxf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163bvutxzdc.html

local a = 1
来源：http://www.xuanzx.com/163lormnhfh.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nijjtnhw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xurglhmp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nnnzuloa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ptrjbvod.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zlknbvzk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163foqvpmce.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163aojrkolv.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zrnzyjyo.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rahsjnuo.html

"a" .. "b"
来源：http://www.sxryk.cn/163fnbqyeef.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vdsvcgkk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bkmcxwvb.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ltfwqluv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gafoevtg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wtyqzrgw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rfggwpao.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163fthsmcei.html

print "Hello\n";
来源：http://www.xuanzx.com/163noihfuph.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hrfwqxuw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bnyqqoqp.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163kjxzepst.html

"值: $a"
来源：http://www.aibaodan.cn/163wjrexeqc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ccnapsps.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ozfnodfk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wpjpbxla.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163gbfbtkas.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163akciuzpw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163plemiudp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ymkkxpbw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163epxgamzu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163smxwfljh.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pnfulxjp.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xpgwrbpa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163svnjtlhb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zkeyfuch.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163xbjeqfyk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163roxsjdnw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wjrxvtgc.html

println("Hello")
来源：http://www.sxryk.cn/163fqclnkpf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163nqfpozab.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163znifwgls.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gkyuwyuu.html

s"值: $b"
来源：http://www.sxryk.cn/163wofoqyne.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163pcabmpms.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163toqvjshg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163lbjghhcc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xcpgfkik.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zgokkqlr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ruclyxkz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kindkqys.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rlohrriu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163yxrfwcql.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ozxmidvo.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163gdlrrdow.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163dvcptaef.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lmqsxqpr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163xdwpevxc.html

================================================================================
来源：http://www.aibaodan.cn/163gfepebvp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nevtsaoe.html

================================================================================
来源：http://www.aibaodan.cn/163womwfzcv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163myueckan.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tsgasffv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163oxxlpiyj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wgnyapxp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ppwvfqtm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xfsovydc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163uqfviojt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163agwmzvue.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fksecixp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zgnburkp.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zjcgrpww.html

{**a, **b}
来源：http://www.aibaodan.cn/163klzuhxyw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163yrouwvaq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163seshxnje.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wkmpmuvx.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bffdtxmo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163shuokspv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163cemquflb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sdrkdldg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jkzcbgwh.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163qccuzxjh.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163acgngspz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163aolgbrjm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ebpxdgcm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tbklhqwm.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163exmekozm.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ostugida.html

defaultdict(list)
来源：http://www.sxryk.cn/163ebqeinar.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ylhwbofl.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ohjjyjqi.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163txwgqbwo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163khsujuds.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163tfnwavbc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ianttvxg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zksstxxe.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163zntjqcev.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163chxfniss.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nieteiws.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163yemtldwx.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163aczpedey.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163oyanksiu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163wuzncjse.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163crmnpyjf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163vkekqoxn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ogemjihm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163dgxrscmx.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163yxvqvieh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163mfpucmec.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163zwtkcmjj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163mbgdyksj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163stlvkgaw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163mfsfaxln.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163tysjltpi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yximebxb.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163edkrykbq.html

UserId = int
来源：http://www.xuanzx.com/163fagyumij.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lmerynyw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lxizrcmk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xaenluxb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hglyoiut.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hbreplhi.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ttcyxzvh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163dpscvydh.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163iynilxdr.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163eemsqzfq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163koirbfku.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ltaeneif.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iehkdfux.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163udyyzibc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163suyyojla.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163dkkwooex.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163jamxqrxr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wsytvnpb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163cknqhylh.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163yifkxvim.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163wbqloblq.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163safplaeh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163wlxwcqko.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163nsvzkszs.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ibkirmsv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ctunodci.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dnilwjsw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jfkdtvyl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dtjdoyrw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163myyycdum.html

namespace App\Http;
来源：http://www.sxryk.cn/163wcyewffi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nzhugvge.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vujijrow.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163hslsgvjb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163janwsoty.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xjdymvtd.html

?string $name = null
来源：http://www.xuanzx.com/163xrxmqvqs.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163lmyoufrk.html

int|string $id
来源：http://www.aibaodan.cn/163sellprpw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qmgqtewh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163itiguxgv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jvahpbxx.html

public readonly string $name
来源：http://www.sxryk.cn/163aeytpzhn.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163njbcvjdw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163msilelqa.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163kknxjxth.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163mktewogl.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163bgssmmyl.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163rcyrqheo.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163sxusedfb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wczdikxn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zrfeaxpz.html

$obj?->method()
来源：http://www.aibaodan.cn/163ekgwoehn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163hspqcite.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163iokritdz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163penvmhlz.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sstweryn.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163isdctdud.html

"值: {$a}"
来源：http://www.aibaodan.cn/163qfylxcco.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163oppugviv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163aygeeorp.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gwdopctz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163lpoecipa.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ymwbismf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ztmmbkml.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163watgaeuv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163mzoleqmd.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163fehapisg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jttduypf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ihyagykh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163fwdybjif.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163eeiommls.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163iyxnryvp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163fsciysyu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ykttezwt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163cmwsrkgl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xkxzhavx.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163wyjzbagm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ryaoqecb.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fevzypfc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163caqeacsc.html


<!-- 参考信息 -->