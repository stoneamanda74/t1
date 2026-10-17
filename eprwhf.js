外链999!wailian999！

x |= (1 << 3);
来源：http://www.sxryk.cn/163lymsphye.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qlprxezg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163wuvflppn.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ybxbkspe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ldjdkoyh.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lesqoehk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vrrriimk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cvtloizv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mrjgbimm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163avmjsino.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163haqzykqa.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163lcwavpte.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dtkgmfko.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yjupwnol.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gyigcnwk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rxocqbzf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163lfcplbmh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ehymtcwf.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bvrnzplf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163chaqjtzk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163enbpknoe.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163lhgjtwix.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163eegqnuml.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163sfqzfvlo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163zelyrtfv.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163brflactz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163mizydssi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ytbkeleu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fltojedj.html

#define X_H
来源：http://www.xuanzx.com/163vfomwpii.html

#endif
来源：http://www.xuanzx.com/163abwyupnl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mnihsxoe.html

#include <iostream>
来源：http://www.aibaodan.cn/163drggskil.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kvmyxgqf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pyyevlry.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jxbgdtbq.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wwzemccv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163fzrparav.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tfnloljp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163iuppjult.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xvjpduhc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aqzcouvy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zslusadk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163brkqdbrn.html

[S37] C++：set
来源：http://www.xuanzx.com/163ctzhkpam.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yrajiapm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163wpabvhfc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wvqtzzxh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kuchngug.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163nglfmgid.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jxkezera.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vizpwrlm.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mltwftyb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163buzjgrve.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gyevdqfb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tazlkdrj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wekykxdi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163kblyqqnr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xcazlnoo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jdbvcagr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dtsohxjn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gkwfnpfc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163bxsgrdrb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ucdortxw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jrgfubur.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163taouijle.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rhyaexjr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kfkyahdy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wgnaskor.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ukdrsfmj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bkqyidaz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xycgitfs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163epsuauqz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ijmpgrwj.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kfzmqthr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fztlksjt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ujomiirr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rmbvymsn.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ervhryyw.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zyzuclao.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wrxgyxie.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dxtyvimo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tuhmutqc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wginaruj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163psuegnxp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hjdddxtd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ilewsawz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163gfyoklzc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qzeqnazk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163emcobazy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ckbiiiov.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ckwrpkxa.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ywerhxxl.html

================================================================================
来源：http://www.xuanzx.com/163rdgqcsht.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ltusnzrs.html

================================================================================
来源：http://www.sxryk.cn/163ikvzwfki.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ntrvxkgj.html

println("Hello")
来源：http://www.xuanzx.com/163lrloigdq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mztcryay.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xhfbmzao.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163sigthgnn.html

"值: $b"
来源：http://www.xuanzx.com/163tusfamyv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163kanephgh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zzigdqpr.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ohfereol.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ulegezos.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mcdfpasq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vlfikxye.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163antdnufa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xqusxhof.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vnrtqqgb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kklbwazr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163awffvoon.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jqosmorf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163kqyhlmwo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163eqodhpiw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163crifwsin.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163sokikngp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tosxoenm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zflinppd.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lzwmpswh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fxtibopp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yaavkexx.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163muyapgjk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yomcdfck.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tfywqqgc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ophkiecz.html

print("Hello")
来源：http://www.aibaodan.cn/163zdvnevko.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vthohatl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163lqwqxfjk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163kmrqdsoz.html

"值: \(b)"
来源：http://www.xuanzx.com/163dopfjbon.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rdazglbr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tabpsvta.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kpirsgfe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qhscdytg.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fzyteykx.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jwdoqafb.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163odwkrjls.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wxjfhrsc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163badisbpz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ixdhciuw.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163nvapvphl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ajflnwvd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oargeehc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wvpjdfnv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163orgqeawk.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163nrphylao.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vkfspcaj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163uytflwhw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tzmixcgq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163poipdhic.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163alftxutm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163fwtwwsui.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163dzrdcazf.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163nvhdgdyp.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hqxbuuse.html

print("Hello")
来源：http://www.aibaodan.cn/163waoiwgps.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mvidojlv.html

local a = 1
来源：http://www.xuanzx.com/163qcjmtwxw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gktbtcdz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163knqhnycu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ksfjsbez.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xmynxdek.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163alswesdj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qkccmikw.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163aljpuidk.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dnuelggg.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uizqqvkb.html

"a" .. "b"
来源：http://www.xuanzx.com/163pfkqmrwn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dekywywc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163kbvwwdns.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nfodgrim.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kkbrxnco.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163uypozgfe.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cdlbozpk.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ebehxsua.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qytauxtl.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xunbdlfn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ngundeti.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ixhmfspm.html

"值: $a"
来源：http://www.xuanzx.com/163aohizxfm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163umagckua.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zbolqjbt.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163frubwcyc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lzdixctv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wcmscuzy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dlzcsksx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163umehrwdt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163iiybvxtf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nizsdlxk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vwedhtmy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hvcmyflt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vjjjcllu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163wyibpela.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uusonpni.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163fjgongos.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163sgpclbdz.html

println("Hello")
来源：http://www.sxryk.cn/163qproagen.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ochcmnne.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163axiduhex.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163enhbqulq.html

s"值: $b"
来源：http://www.xuanzx.com/163krdbqysy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qjxdomxp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vfqwqxcu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163oidyqjaa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hdhwxoka.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mhyyhbwm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163eabgsjwp.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zqolkctp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nrjvogrr.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ficdxrnc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qngqzlhm.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jjqsurny.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163dzaiiznn.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163oxosaesv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fpjmvvie.html

================================================================================
来源：http://www.sxryk.cn/163gtpjffsf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fddjxsps.html

================================================================================
来源：http://www.aibaodan.cn/163qdsjqmno.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lgmjvzoh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wmyupgnt.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163backnvmr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yoldmivi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rcozyaqu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163seutuqle.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163llpbncnq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rohratcj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tutsheqh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ljgrcdfs.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163bswsdufa.html

{**a, **b}
来源：http://www.aibaodan.cn/163hnyqqwfz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dgevmfzw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163catsnclj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163lckfclqo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163mrvkjxap.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163pjhtxzeb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hbhiniqz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xcothnlx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yuytwern.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163vjrotdql.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163mfaifswc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ycsijpha.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pacjzicc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163sujepfma.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163atqrmngq.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163lkprhnjf.html

defaultdict(list)
来源：http://www.xuanzx.com/163tszdqdat.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ujzprita.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163nzcbdhpk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vmohlejm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rrdovrwe.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kcqvtejg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163slrfaaph.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wommyprx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163wsampaos.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163byemdezl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kfvbxmbh.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ffdjsmmn.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zkdptqyr.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163zhcasfkx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pyighnjz.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vhzyhlfp.html

list(zip(*m))
来源：http://www.xuanzx.com/163kleqemvs.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163vqsbodiw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gvaxcxae.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ynsnldwl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163tiznxvmg.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qrswamgl.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163rxdiuaqx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163rbkazbqr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163nrnubtoh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bpifyrqv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dyrhdeok.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163njyvptdp.html

UserId = int
来源：http://www.sxryk.cn/163yydvkuac.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163fhtqiwkk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163fuksurcm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xjbnkkqt.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163gseapayu.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vkvhicwf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163qkdibrkz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163lgrkstjo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wldpdfjp.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qznxtnky.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163latclbcj.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bgclkrbr.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lvbhxnal.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163rkeuvgrn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163wngavjrj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vfersurw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163kkobccrx.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wdysshkm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ciqdlwzq.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kabxarda.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163tckdaeen.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ctqiuomg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163cyrcngzg.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hdwduxtg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wdbjeriw.html


<!-- 参考信息 -->