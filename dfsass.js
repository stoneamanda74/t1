外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vrbwjyio.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lyptyfdv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kryyehxs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zforzyft.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fmomeqac.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ngeufvmh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163nbhmhbwc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hcvtinpd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163iymnznqk.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cmfgcjpt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163entjrqxv.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163oytdjseg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163yaearaie.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wsiqpeiy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nprvkvdo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uycbpeyb.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163pbanhosm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163emmbvawr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vcpyhvee.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163blsdxsbq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163aweptkqr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rfhswjjs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vonsgxpx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tckkangm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fufreacx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mkluovvi.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163sfielomg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cqeofmsr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wqaykbgz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dfyznzvu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163znvcxgmr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163uavkcnuw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163asfeghfd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163sfxvezqm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163opazkobh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qqosxqjj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tbjelbmk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fmhyvieg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163awvbpnit.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mwehnvpe.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pucrjpge.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kawrbqxd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ybbprthy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rmnhhbtr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gmpogmet.html

================================================================================
来源：http://www.sxryk.cn/163lbpundzf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163nlbdgnrf.html

================================================================================
来源：http://www.sxryk.cn/163qrnmsaqb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163oaciyiwc.html

println("Hello")
来源：http://www.sxryk.cn/163llumyetb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ndhtgons.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ejgzkeqj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yotqmfiq.html

"值: $b"
来源：http://www.aibaodan.cn/163parszsos.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zxroonxb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qyzmzxkn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163godllhck.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ktjpycag.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fbxaxfka.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yocdzdqu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nlfiaijl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ukryzzaf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163vjsxfiga.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tgjotddf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qufogarl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xuznuqyg.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163zwingpmm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163iuallaua.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163avlxgjdg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163tecnlhyg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tqmysiym.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163occoowfp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163eiilckgy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163qfmzcgmw.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163tvtrfilj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163acpykdoe.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163flzmepih.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163alclnpli.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163pprkxgkf.html

print("Hello")
来源：http://www.xuanzx.com/163fdynqovd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gnrkffff.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wtuiilha.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163uywmzjof.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qvwbbwca.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yuakxodc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ftqzohcm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qkcgypsl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gsvnnpbs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xxzwnwln.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lwlsehut.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hnkhentb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rqsaozws.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sesaicta.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bjomappa.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163bcmtkqxm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gfybgxsf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gaccvihd.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163plpzsxvv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zhajewbi.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163cnobjzmu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xprawjno.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pgaqzmys.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ccfnifil.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uywniwff.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qroqqfqn.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163icwoypor.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qqorbqap.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dxzeayph.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mkratkfw.html

print("Hello")
来源：http://www.aibaodan.cn/163udizvucd.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hhxwpnxj.html

local a = 1
来源：http://www.xuanzx.com/163uwmcpllm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gplpdcji.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163uwhsyrdb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163bayskomv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jybtmvyc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163shnmhyvb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ivrdpemi.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163odzjhion.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gmvjveri.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163oclxnjty.html

"a" .. "b"
来源：http://www.sxryk.cn/163czymsndw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163podmsmys.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163hfftnnul.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163iimhwixn.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wjbnpkjf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rpzvezwz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163peuzwoqr.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gniriegc.html

print "Hello\n";
来源：http://www.xuanzx.com/163olkktjsf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163arczqnep.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uxawxtoe.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163okvjljul.html

"值: $a"
来源：http://www.sxryk.cn/163xcuvnueb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163oihwakwz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163hvqsicmw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163yctndqgs.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ubsxifrp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163noabaulh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163aploylno.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jndaulqr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ukebjvtn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163enkitvgg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hfwuncja.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ayphystu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xxfonrqh.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163osinxpdl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mixjswfi.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163nzcqnktx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163csowrwwm.html

println("Hello")
来源：http://www.xuanzx.com/163ociplfow.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163aunruczm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jdcsvaeq.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163fymxidkd.html

s"值: $b"
来源：http://www.sxryk.cn/163biexfcvh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uwybvucb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fpyhaxes.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163uittskit.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zhopvjbd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zwztnwcm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163guzhsvdw.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zyfkmcje.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vucipcvp.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tlsvidfx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jmvilpgc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ccwsprdn.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gxfqglit.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mippubgf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jhrahjmh.html

================================================================================
来源：http://www.aibaodan.cn/163fbvkwffq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nvedirsi.html

================================================================================
来源：http://www.sxryk.cn/163qxldawio.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qjtxvgvj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163mtbtsjdf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uxhvbcqx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kgvzucap.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hbcrzcbn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fsppaytk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163afqknsng.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163mnnezgnv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163dhdwmcyp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163khgjopnn.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jeryevmw.html

{**a, **b}
来源：http://www.sxryk.cn/163bqsswhvu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ubkemmer.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163tfbllclq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vjjpotce.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rzbcqykx.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163geiqmcfx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163euatwmex.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163zpkgwxaw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163gbgqdtjz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163exgxhddt.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163lptumfdy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163onhwvrgm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ncttyexg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bfcpmtam.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dckktfuh.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xqugfhdc.html

defaultdict(list)
来源：http://www.xuanzx.com/163cdrsaras.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163lvsbqwzo.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vikagmgq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163cruzroms.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fwtknyep.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163isbhgnqp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ngavhjvb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hmkqrpkw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kjvhxhmq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163bgjolfdl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zstzbqro.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163kkhmsahb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163vsewfytu.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ditsnved.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rzhfhtie.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bzruqbxs.html

list(zip(*m))
来源：http://www.sxryk.cn/163igtdjhei.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163kvnwnkhc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lgfmkilp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yahipqiu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mkdpwmai.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163veusolrc.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163latktxtv.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qxziaasz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163tpluwnhq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163lobcigse.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163njxahazd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163hbuxoxag.html

UserId = int
来源：http://www.xuanzx.com/163eyppsgye.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163btprzclz.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163gqcozfgs.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bgkhqxnk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163wrnryyiu.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ddnrqfks.html

python -m pytest -q
来源：http://www.xuanzx.com/163cxxhzsmk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163xrpcyyrp.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163hqeanygj.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163uxhhyrkp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163kgvttnqj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163rxvjzzis.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163naodjkks.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163jsadmfvk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163xioqezfw.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ejsqwzog.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163csruabzj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ybtnyrim.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163cmnvbqtg.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163uymxleoc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nizkieca.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163jxqnabqd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ljqjnzau.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163djnzxdsy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zvjryjnu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163orjkkehc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163wibauoaf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163kjsdgfsf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163hudvlefp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163gcisvplv.html

namespace App\Http;
来源：http://www.sxryk.cn/163xrqkongh.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163zrsbkeyx.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nnduidjw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wputiiap.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rojlpnut.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163vpwjxhko.html

?string $name = null
来源：http://www.sxryk.cn/163zhczysqg.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163didyjwxi.html

int|string $id
来源：http://www.sxryk.cn/163xegbxlqj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jejgiduo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163gymrphax.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ymuofuyj.html

public readonly string $name
来源：http://www.aibaodan.cn/163rqhszpig.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163mnkjcauw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pkkltqyy.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163pepnejcj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ojpyovtt.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wstdhggr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cgejjiqp.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163meilmjvi.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xdqpaela.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163guxldrqa.html

$obj?->method()
来源：http://www.xuanzx.com/163rlyobhil.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163aormdivp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163saksmjap.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163icsfqkuv.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xapejivj.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163tarfdcuj.html

"值: {$a}"
来源：http://www.xuanzx.com/163ulzhluxl.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163nwlmcwrz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163dbsiapov.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163cnizwvma.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163dgpgbeqa.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163iubtqqon.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163iosrwovs.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163eveghwco.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uxuqipmg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163nyppemul.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tppqhgqk.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163czhzvvbs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163zazhdoov.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ljinsula.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ukuodjqf.html


<!-- 参考信息 -->