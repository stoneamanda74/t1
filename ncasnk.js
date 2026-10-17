外链999!wailian999！

[S35] C++：map
来源：http://www.sxryk.cn/163ivyqdsda.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hgdojbgx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uzgzpcmw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163htetultr.html

[S37] C++：set
来源：http://www.xuanzx.com/163syxitfvq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qnqbnpwq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163sfurebpc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wwpduzpg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wgjduyye.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rxubtbpe.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163bdibqmnj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163srqkqbqd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fxpgvcxj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vewbvibb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qgftutwp.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vcymcgpt.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163igstxnxb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163amvterrz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163brwoqgvx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163unrlajks.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qbjkbiyi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zaaakpcn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tdzfbbpw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hfumfoez.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163zldqvxlt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mjuejnnt.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163upfbwncv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pdauyyln.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163xqpuertx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vhgljsou.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cpwlxmmv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wrcaqyht.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mdgcfxnw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163oujjsjyn.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gjyxjulz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rgkykqbk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163meaezyck.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xvwttphp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rsrdtdkq.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163awbcqwbw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mahsmqeo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zmxbrhsk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tehizhpl.html

[S56] C++：optional
来源：http://www.xuanzx.com/163meqphpvr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gjgqkqiu.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nxqgyhpx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ukbcnmqu.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xyehfunq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163wtxhzpcz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dhlmlxgx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163oazhuguh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ywclkxgu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163odlfqvjm.html

================================================================================
来源：http://www.aibaodan.cn/163zwbpxblu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kkyyidxt.html

================================================================================
来源：http://www.sxryk.cn/163rrkgkocz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ljrcqjoa.html

println("Hello")
来源：http://www.aibaodan.cn/163oangacjw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ldujltzm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gsiduhdi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163sakhyvsl.html

"值: $b"
来源：http://www.aibaodan.cn/163ufknirkp.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163suuerlrf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hsgdpesw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mmadfhfi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163bpncotyl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jcajjxmu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mwhorudy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wogeotmi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ewpvgqow.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pzyuaqqd.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jccnaxok.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163jzejawyo.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tdevsysc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dbmdutca.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kysnkyts.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tmslmqzh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163plvxcgfi.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rfvmeegp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163csgmptgg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163sjumsifn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ciojdvoq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163npijkmhh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bbmbatmk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163eqvvxsvz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163jmpqthmu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lyaueglf.html

print("Hello")
来源：http://www.xuanzx.com/163azdetvha.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oqikxudk.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nzwdkosw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fbiyrsgk.html

"值: \(b)"
来源：http://www.sxryk.cn/163lmjurqdz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163anamjmxm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lqzycdha.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gpvozsar.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jqxeyebj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163avtungrz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lnluwyea.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wdsofoyc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kknwrsbw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yqxqgksk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163sbfurwos.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163epdydhem.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163zgubbelx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mbdztmcr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163kipxntbw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163qkoxmjst.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dzbjkcig.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163dyxixyhe.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163aohggkqa.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163svvakbix.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uylyskxg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163hajfnpvj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163avwklsbi.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163zpopyqug.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fdgfryij.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vzueqhnw.html

print("Hello")
来源：http://www.aibaodan.cn/163omfysohq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nvuzafib.html

local a = 1
来源：http://www.xuanzx.com/163rzxjpzoy.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vafhytso.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yswvrrau.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163voirmauy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hsvoacvt.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163bedbzanw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hzzvzzzz.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dfdtyhqq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163fgiksgsv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xtvycjts.html

"a" .. "b"
来源：http://www.xuanzx.com/163fubypbwf.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pvsmarsz.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zmvupfqx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fqlzjwqx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163iccxdbbd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ephitnvw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163pbzxiodu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163awdircig.html

print "Hello\n";
来源：http://www.sxryk.cn/163envgmuot.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nvkhceng.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163gujtbpyl.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qubdhhiv.html

"值: $a"
来源：http://www.xuanzx.com/163pdeanugm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dafsalxd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163sbcnydbw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163gaebytuy.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wudayuzp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163szfodefs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163oklleeub.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ehxrdhsk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xibjiwfu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ytlrphxi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bmzhldre.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163urnyoubc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163xmhvexst.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kytgtvcq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163gcruhmxv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wrsnpkte.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qngqpyjb.html

println("Hello")
来源：http://www.xuanzx.com/163dbfidtvn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163byvqyuyd.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163sjygjlih.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163expyxght.html

s"值: $b"
来源：http://www.xuanzx.com/163ldfsywbn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kkxeiouw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fmmguotr.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vwduquqa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163nkfzeocw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163pcoeesii.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163idachwjq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163flszjlls.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ewatfepn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163htagxadc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ndektouw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jrcgdpbi.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163lkgfcmii.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fgafsqvp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zlarzkqr.html

================================================================================
来源：http://www.xuanzx.com/163cquefhkx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xkdmfnxt.html

================================================================================
来源：http://www.sxryk.cn/163fkuglasq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163tvdcnqif.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iqjlwpob.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ypafwkpe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163anhjycbf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nnbnjkvb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163eyosjheb.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163rjritcsr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dsspoajf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163rcbsvthb.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wbkdblnz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zmovfzez.html

{**a, **b}
来源：http://www.sxryk.cn/163tiujhqlf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xktyhmbj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163aakhqngd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uoohykwf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zocajbcb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163iofbdbzs.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jefidpuy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sgyicigx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ylzmtgef.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gskpaega.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zgelwhbg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163tuxdxzjx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163yjerdaxj.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ektfxmvv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ctcnrxsw.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163todetnfr.html

defaultdict(list)
来源：http://www.sxryk.cn/163ctpuyfkc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163neklcxxb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gkzrayip.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163csjecosd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163xxyufoog.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163yntpxtdk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163kaviyfol.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163onswjzmo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163iwazpznf.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163dopjduaa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163osjjoysb.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ipfihuqk.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ntzclidd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163petgiumy.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cmrlkrga.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163etrwzhyl.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bwwnlnyr.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lzycgubc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hbkfrnzq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163asfhxvsb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163nlzmukij.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mnqpicne.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jfwchhgs.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163iexuwwtv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jsmphsia.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163rnwvvwti.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163divrhyvo.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163pyrlrcwg.html

UserId = int
来源：http://www.sxryk.cn/163cgliffhy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163xeuqmsrg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163tblfjirz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163gpixqhai.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163buejnnaz.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jobgwsib.html

python -m pytest -q
来源：http://www.aibaodan.cn/163uekrzepv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vvcyovhk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163usbemrzg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ajutspha.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fqnfdjlz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163aomtnhqx.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163xofxaqoi.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zzdxpkng.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163pjsxhyeq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163konmdorh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163bljlmixr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mebpcbpj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163lqmsjpuh.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163orfuoenf.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163cawreafy.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163mnsmscxu.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163prqflmil.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fjpgglca.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163exrebrct.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xhgyzlqz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xirwqmrq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163hkrkzloc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163hoglqbwj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163mbszuzxn.html

namespace App\Http;
来源：http://www.xuanzx.com/163aamyyhjd.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xqcdivbx.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cowhdzql.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ovsvhrzy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bdvdugui.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ivtrctvv.html

?string $name = null
来源：http://www.aibaodan.cn/163yvanncrl.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163aetrcxir.html

int|string $id
来源：http://www.sxryk.cn/163phdfqwnu.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163tjxaetrb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wkdhrirz.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fewlyzjq.html

public readonly string $name
来源：http://www.sxryk.cn/163dmcequms.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163eccnadwc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163zuhrmdjg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dgiauxve.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163yxyuigml.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163mlssibfl.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163iozujjen.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163yatksxml.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163byjgormm.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163nggqjafm.html

$obj?->method()
来源：http://www.aibaodan.cn/163gaxzmnve.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163uahakkpj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oioamujv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163blzndtvt.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163diocspte.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tqnvhkne.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ennetkjp.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163sorftkwa.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lrtvsxdi.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ihqygghu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mimgnsya.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163umekbuld.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163xzduyxcq.html


<!-- 参考信息 -->