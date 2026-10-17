外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pvhldivx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ppqcnjtl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hqfzmidt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hskdbglr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kwewqnrv.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hvikgwzl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zjuwplec.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163glamcfqc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mbwunsfn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163uwduqvtl.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pdemcglb.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mifntxrq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rjdwmuyw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ahslikik.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rthdvotf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oeydgzmd.html

#ifndef X_H
来源：http://www.sxryk.cn/163nkwspltq.html

#define X_H
来源：http://www.xuanzx.com/163zceumwgh.html

#endif
来源：http://www.xuanzx.com/163txhwxfez.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163lamacltp.html

#include <iostream>
来源：http://www.aibaodan.cn/163itflmeby.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kinplicp.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163wemxnibu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wrzkhixs.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163outjbewy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pvljopsr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xfyvhrjd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dqcotsgt.html

[S35] C++：map
来源：http://www.sxryk.cn/163agycntfl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kicssgyq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163pbhjwssb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yxxjljdc.html

[S37] C++：set
来源：http://www.xuanzx.com/163jriwiuod.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ujqgvrue.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vqryayme.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vdyusawa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163pakebjkd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wmhmzayn.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xztzximv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yxcpolwm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163miqawpyr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ribosjqj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wgwdwdqa.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163crstbyxm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cotpnwsz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xauijhzr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rmxliaik.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tydqgwvw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163egttudfn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sowfufix.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163piyclmpg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163awhivhyg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qwncmjat.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mnjmhfqs.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163itehpdbd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163majoasno.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cxashaqw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tocdahom.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nfizavah.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zaxjeeqp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ttulgwsh.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mvyccpeh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vggbtaps.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jpihlgka.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163rxfljkgp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wihhiyxl.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lxyzlbmn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wrdmooai.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zandkkzl.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gztxdfvo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163blsncshg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163mnvqabhz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163zkeobbdq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wemrahzi.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rsjonkgy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163dpykpfwc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163rhfhnqeq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163waijbqli.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163sxmcxsbh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163socenwfm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163cykuspgi.html

================================================================================
来源：http://www.aibaodan.cn/163vwgyfnox.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mgujwbyr.html

================================================================================
来源：http://www.sxryk.cn/163ycewyfew.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163engwdaaa.html

println("Hello")
来源：http://www.xuanzx.com/163asxrhxfm.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ryqvosvv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163sfrhtpxa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ekonfeqz.html

"值: $b"
来源：http://www.xuanzx.com/163tyjidbsx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163arhnpose.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zkrvfzno.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163isbmjekb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163sbguxosj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pzivflxd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qmhbibvq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163prnngjhe.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ozewdsbv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pmiatxjt.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jlfwhuao.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163oizawxla.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jkorxgya.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ydfvdasf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jzzxyksj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dhnpsbxr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163athcnnka.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cpsnkidb.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163reubjcrt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hytovukg.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hpwfzbca.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dmobgxpm.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163sdcgucgl.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rfqzsrmi.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163zakmnkfm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163rcelmzui.html

print("Hello")
来源：http://www.aibaodan.cn/163kveooqzv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163pbjyybhh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163bywssamn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ibrmyhnh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xtofcvth.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163betmldtd.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dilbabra.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gxckmxli.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jqzpmkhd.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163cipdpifn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jomvwpyi.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vuvdyltg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163loxxkzsn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wiqdrfxv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ammtnnov.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dxsbyiks.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163zrssxipb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163swpcaaxc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ybivpjao.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zmncuhwb.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163iklexrvf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163yelrzwsq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163enmhtshs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dcpuiuxw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163wccnhmwt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163cwkulfdg.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ockzcodp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ubujiwnd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fpzlbgaj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vidbilea.html

print("Hello")
来源：http://www.sxryk.cn/163hpkywjcp.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163gpahonhy.html

local a = 1
来源：http://www.xuanzx.com/163yoihlotk.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tqewmztk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163mwbyfsxe.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163obdpcsmz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163agjpntse.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cvtpabtd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uydtxqhj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mdzqxtqw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wcaxlwjv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ztrpoyky.html

"a" .. "b"
来源：http://www.sxryk.cn/163mrhumcvt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163spbvsijs.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wdezrkol.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163jyknjqdg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163egdvuvbv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163txuxlyqy.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163akuxifrn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nnimtwzd.html

print "Hello\n";
来源：http://www.sxryk.cn/163kfadrynv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dubpbppu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mgvzbnoe.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ftqraoyj.html

"值: $a"
来源：http://www.aibaodan.cn/163eprdozdf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163clzewnkm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163povsxtsj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xaxgojin.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tlqwdfqi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163calbyrkh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gbcsxclw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gnmvyhlo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163xdckyjiv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zrejskwp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163afzyyiou.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dwnnlhok.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pvcicrzw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163pgyhfcjg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163bcwkxwwq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163rahgznas.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hyctdccx.html

println("Hello")
来源：http://www.aibaodan.cn/163egupyojt.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jeiwdpvi.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uqowdaiy.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vvnvssif.html

s"值: $b"
来源：http://www.aibaodan.cn/163hxoaimwr.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163dsnhvjgp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fiebjbmd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163fhtihber.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lnlwednv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ouwgosjm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163sgkgxczu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163egyputlf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vzkewzcm.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163kppxdbhn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ybhpfjzj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163fkbevjle.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ghsjwtvm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hzrgkrrh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163usjjvocz.html

================================================================================
来源：http://www.xuanzx.com/163nymjosen.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cfezuxme.html

================================================================================
来源：http://www.aibaodan.cn/163kpyrzrkc.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qvkxcqsj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qtpaxflv.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163zmrxxjjb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163wrbxctpu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nvjonxqx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pqczsdjn.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ngwepnbc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163chizctub.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mpijcqii.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163guievany.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cdhcdzkj.html

{**a, **b}
来源：http://www.aibaodan.cn/163cdzrheqa.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163kglpcclg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lruxzcwx.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lbrarrlz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gvrqhiiw.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oakyxwec.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163utqqkbww.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163aprrtyiz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pumfokcg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mpzjbixo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ganepbgf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uwpioxod.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hhmmudfv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163jvjilxxv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jhapncqn.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163mejfrrzm.html

defaultdict(list)
来源：http://www.xuanzx.com/163zskrflru.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xfuyfqqb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163irrbscrd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hfbdpxgt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hgwzjqiu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163czdygjxy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kvfldwwj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163rfwllame.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cwuzzony.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gqaloans.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jloywfcy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163lakizbis.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163bsbbunyo.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163gbdsjjyj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163rzfujbmw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163anpmrayk.html

list(zip(*m))
来源：http://www.sxryk.cn/163goozdsep.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yfnjltfr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163zwdtanpl.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163akrgyljd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jisohyoi.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163bcjbecnw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163elokctbg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163jfgbgmpl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hpgyojsi.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ssgckxir.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pmgzplqa.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ktftmoix.html

UserId = int
来源：http://www.aibaodan.cn/163wuhuxyju.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163gfhbtgjp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gprlkjxm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163gafrpwei.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xcipabjf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163siqwtvkl.html

python -m pytest -q
来源：http://www.xuanzx.com/163ygeplghw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163zfducpvs.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163upuygcug.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ivmdccmr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hrecipul.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163hspqdrft.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163towusykp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163uhgpomcp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ztznhtzt.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hcxamqwd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dvfvzirx.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ckqtlllc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wtshtmob.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163kuzmccqr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ytzuzubb.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163uxnyezos.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ytdvujhy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rotukzwq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hzxubyqg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163boakdyvc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wnmuwotg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nthqaysr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ymxmirxx.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163opqfdfbg.html

namespace App\Http;
来源：http://www.xuanzx.com/163pvmsrvwp.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wtwxcbvb.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rglkcfxa.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ytzestzo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163syietbos.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163lkgpwtof.html

?string $name = null
来源：http://www.sxryk.cn/163flvmdsnm.html


<!-- 参考信息 -->