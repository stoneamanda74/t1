外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hlvcwhoe.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qxuvmdiq.html

fclose(f);
来源：http://www.xuanzx.com/163vpptfako.html

[S12] C：写文件
来源：http://www.xuanzx.com/163cpagtlbl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163tzudnwsy.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xwjjmipp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xdcfnbrl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163kupixiud.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163nzjzlpdo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xbqacdfx.html

(double) a / b
来源：http://www.sxryk.cn/163fyramait.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ugqqvtij.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163zrvoraid.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qawnqobm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zacebipm.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jablkmxf.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wuvgwckv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qehozuyj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eqhrfdoi.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rrhgbsyr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vqjjvbxe.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163oojnmfbr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qjxtnevt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wyxbzzwb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ywxubase.html

[S23] C：随机数
来源：http://www.sxryk.cn/163bqrxqohd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163afsylrpx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163avmbivrg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qzzozofa.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mxfcqlki.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163eyjlujmn.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dempkdbv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163suhogwey.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rvzadqor.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kivbbmtq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ochapkle.html

static int counter = 0;
来源：http://www.xuanzx.com/163vprwfapg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jfxjprqh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163uxiltaps.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xaejftzn.html

#ifndef X_H
来源：http://www.sxryk.cn/163sdrrawyk.html

#define X_H
来源：http://www.sxryk.cn/163hrhwgqfc.html

#endif
来源：http://www.sxryk.cn/163lvhdhcou.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pyfunzmr.html

#include <iostream>
来源：http://www.aibaodan.cn/163ilsuuguk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ezopqfdw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xswpxulj.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hxqsgqiu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163qgpljrdv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uhpzixty.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ftnhrphv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163femnnchs.html

[S35] C++：map
来源：http://www.sxryk.cn/163gpidnrey.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ivxfpeua.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163otwexogt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163plzvnmhb.html

[S37] C++：set
来源：http://www.sxryk.cn/163qtvadsfs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xmmywfbz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xuxolgzv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nqophnbf.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qvljardf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163unnfckzj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163alsmozmd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pgqmcykr.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qsuvwslu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pzlkwzth.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fyblxjzj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vbvecuvu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jbyopruk.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163nkrrippg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163neeutosr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wafotvrr.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163lenyrrun.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163brmnmpuw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gmqqvzmr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163noduccqf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163peltntng.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163pxjnjtro.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163lipzckir.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163pnevnskz.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163snpswbwl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qqbjildh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vykasrpk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163opcrucgo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mtosbsuo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ijbvmjde.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163cuerdyua.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ziewgrwa.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gwpnfllr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163abbdtwwa.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mymjadyg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dfsrgewq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163srjbtarh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dynonavq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hibsxbpt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163heoblzke.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dovulhup.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163seezuxho.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163znxppkoz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mocebuak.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163odlwxftl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163oevcjnbg.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163prarlpig.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ciktllec.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163htjtdliy.html

================================================================================
来源：http://www.aibaodan.cn/163zpqvssld.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qlxunzmf.html

================================================================================
来源：http://www.sxryk.cn/163qhzsixiz.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163yblqavho.html

println("Hello")
来源：http://www.xuanzx.com/163qcjpfzcy.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pddbjaje.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163zrhaxbzj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rbfoacwd.html

"值: $b"
来源：http://www.aibaodan.cn/163gvvvkoso.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uakhaudz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163svxwjiob.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ywoeajjq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163dynojoen.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hutwshdq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xfmvmicj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qjtbgque.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vzprybjz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163snwactsa.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163bnsezmoo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vevgpric.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gdxputod.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dadkltat.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sduituhr.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163snqcauqm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jwjqpigm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163kxablzvz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163krwmplxr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ezmcnclh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lmulkjeh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163bzzedofw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163odywraub.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pfqkduac.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163svqgamfo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fvdvqqea.html

print("Hello")
来源：http://www.xuanzx.com/163conalwjk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vuncovqv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cgwenguc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qexrykqb.html

"值: \(b)"
来源：http://www.xuanzx.com/163bljzlzim.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dhllksis.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163halepfzp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jpjgxand.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gkiezsrk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ymfcoxxg.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163pegsrqlz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ftcomxrm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hlwajoje.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qboncwry.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163trllpbav.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xxsbgmmg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163skmhbnhm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vviwxlzl.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jxnmtoyw.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163nalbrszx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163psaulfzv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163auhjtlny.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163lrlbwruz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ungddkmv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ebgdggdw.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pawrnqgu.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tucyvltm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nrytxpqb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vbqntxgd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ruusosqw.html

print("Hello")
来源：http://www.aibaodan.cn/163xielpyxc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163palqarsr.html

local a = 1
来源：http://www.sxryk.cn/163xdncgtxk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yypmboos.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vmgwzens.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kikaxidf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vfjavgwc.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163msrvcltq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163tfmedkux.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163sdbsgoyb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163soxxlqdh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jxwpgera.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ghrxqzus.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163duckhxtt.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qsbrjbzj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ezitjpsc.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163yojolapt.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ejrbzibl.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tfysmgui.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qxqgfota.html

print "Hello\n";
来源：http://www.sxryk.cn/163qkkdtnwy.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163reuaqqqh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163mbiwaizt.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ukjlqjou.html

"值: $a"
来源：http://www.sxryk.cn/163qzztcvci.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mjdypxmj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163phpvaeaz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163duuhirzf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163qahtqvku.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ohwkbdqf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mrdwyijg.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163pbodfkou.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xqpjeslv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qvejpyia.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163wpcruzux.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sibpwxkc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qfmyjncw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fkfwonlw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163gawcrjex.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163laqgqggi.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ixksbqmo.html

println("Hello")
来源：http://www.aibaodan.cn/163qliftsku.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163jhwiicup.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bohhbxdp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wvmhdkja.html

s"值: $b"
来源：http://www.aibaodan.cn/163garjskji.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mywhdylj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163foqragjq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pbcggxfj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bmalaceo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163efhkdocn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zvhzxvla.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zqpnyctl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163csearhaz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163oqeazptl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rohmpwmc.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163cjjaxpus.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gzjfgmtu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nnbomrrv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kfmhgjea.html

================================================================================
来源：http://www.aibaodan.cn/163nyzeerao.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dasawtuf.html

================================================================================
来源：http://www.sxryk.cn/163avcjrirn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163iadsgipu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xozfhozk.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cefdvtlx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163salzemco.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163uruyftcj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qzezdeiu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hfnozoye.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163krtoiawf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163callnvnt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bvloktlg.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tnkpvoei.html

{**a, **b}
来源：http://www.aibaodan.cn/163kmfouqul.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zxpartvw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163dmqbjhvd.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tlnkmynd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163uwngeodz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rwpjdncm.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163bgryhaqf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ajaogjoe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fpwaznat.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163iwllbzko.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ujfcgfvw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163tkjjrgwd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vmrhrzua.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xusqawzf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bwmpaweh.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163yrgsmnaa.html

defaultdict(list)
来源：http://www.sxryk.cn/163udxpvpsl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ezuwzjfw.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gufnwssr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vslxcnmx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163aobjfihl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ttsfzoxi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jpgnvyfj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163rxxzxkga.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ffohfjat.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pbyxauue.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163rshynfep.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jlyvcyeh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163busqydmt.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163wyxzbhdc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163knrbgcqp.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qsxhsiyn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163aofissnt.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mlweqmnr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163exstnmml.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ortimmwj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jdwblkrl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wpepanav.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163uqliwwoj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163qywmvgtl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cjscavrt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163puitnsdh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163uqpjleni.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163nvsnvdyh.html

UserId = int
来源：http://www.aibaodan.cn/163ilpnqgmn.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bcrcwiuc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fkcxudxr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ecjozwqo.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163scwxoflw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163caqevcmq.html

python -m pytest -q
来源：http://www.xuanzx.com/163qjsbevft.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yeerfzyk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vudqhlwe.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163bkubxswa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163qnabygxv.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pdcvyicd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wljksitf.html


<!-- 参考信息 -->