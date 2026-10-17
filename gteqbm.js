外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jxejyfmg.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eoyrnsbm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163xvbamzuv.html

[S14] C：枚举
来源：http://www.xuanzx.com/163yllgxslh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yjkjlmwr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ocsmovxg.html

(double) a / b
来源：http://www.sxryk.cn/163kvkowipz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gqhfrnka.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163uszexitq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163sfjxtfjs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fdjcfwts.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fnuqonng.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163narwhusm.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163iinuljxu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pbxionfk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ygkofula.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163unngrdru.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vlybivgd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rhyfsyln.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163evxamvbk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163matvkplg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163swbvhhim.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163whsjqsrh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cyfmdjlt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uprxpbiv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163fvwhkete.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163glcltqiv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163uwzqgrqm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kymloyew.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163royibtrt.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163igtuvhac.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163udmwwdha.html

static int counter = 0;
来源：http://www.sxryk.cn/163ongnnuke.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lwocpfso.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163auhpngec.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hwsyaznh.html

#ifndef X_H
来源：http://www.xuanzx.com/163gpevkfcn.html

#define X_H
来源：http://www.xuanzx.com/163oriqrjpr.html

#endif
来源：http://www.sxryk.cn/163dbbaujbv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wyrruktm.html

#include <iostream>
来源：http://www.aibaodan.cn/163vazuahnu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163vvnonjve.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163deisgrnh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163szxykkrq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163unczlxvu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163taellkoi.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163skxmxvon.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ccnmlhfu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hgcdufrl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ewfkyjgd.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163vusrhyav.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163iazsllno.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pxegykbl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qfsviqps.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mmdhodjz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pmqmrumr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ervrzbnq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163iqwquxrs.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163vpuklxnu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ptunbtcr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wufotekj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qtjwruoh.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tfghoijb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lgqtjvve.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163oejqyghp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xdbbvxci.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ykgblobs.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163blzrjfod.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163anpcdsqn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zjudbkrd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ceyudjtv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hvjtjbdn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ljklnnmd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fjvvhrde.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163eepedsus.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163grbzofkq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ycnyaeqj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qixcvzpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163vhseltph.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pjaiwzrf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163npwrfiwb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dponfusy.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ozfayxne.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163mfcxhxkr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ngxrfsce.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fkhyoghq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ppnpzrbh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kuuhsefn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ziflkmek.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163viynziyd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hxvfeool.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bostgztx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163naqryrbs.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163czjvxhiu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gnrbcvdk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wohfnxff.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163oflvvmlh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163qevsesjf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ysliupdi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163vouapcry.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xusokadt.html

================================================================================
来源：http://www.aibaodan.cn/163jatdoyjx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dmwfrcoi.html

================================================================================
来源：http://www.sxryk.cn/163eaywzrsy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xihsfixk.html

println("Hello")
来源：http://www.aibaodan.cn/163trpowymu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fhihbbbw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163retvmmsj.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lcgoluza.html

"值: $b"
来源：http://www.sxryk.cn/163lkzptrti.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kytwyugb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163gtlcpcnv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163fwqolboi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163deksonzt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jvicyyer.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mmurlfcz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163acxhnilv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cfxwttnn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vjimnrls.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kczgravb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163anrisurj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163cdvbtpzr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dhcsyuux.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qtgkqisd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sosqincn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xggobcqx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ffqsijnz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ogtpkssd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mczitbnb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ofatptxe.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nurkeaft.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163grpkssop.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qyqmtdyc.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ewnljjyl.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163oetoxdxd.html

print("Hello")
来源：http://www.aibaodan.cn/163clysuwrh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163qzyuqpaq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163roesznmu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rkyipxxl.html

"值: \(b)"
来源：http://www.xuanzx.com/163xpzecewd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163xvrgnfdp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163untofpdc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bfppnpri.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163foqskqrj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lqwsboho.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ncmaukkn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wxzyeayg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rnbjixur.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fupkiyvf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163desftbke.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163sfmbrmvx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ifpvtzbf.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yapkdses.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163smoxuwvp.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163oucmgmkb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163nophsxjz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nzicypuh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163nksuuvok.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bzilbiec.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lkllyywb.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163yqsjdjtp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163lmiptgaa.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163buziqjvz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ufepannc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ujlswswa.html

print("Hello")
来源：http://www.sxryk.cn/163csabneuh.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mcibhphv.html

local a = 1
来源：http://www.aibaodan.cn/163dxdwioxm.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bqmoykwp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ztrfbtwn.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ylntofxt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fafpysdy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zbwkybyt.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wucuzhlf.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ninzxmcq.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163goobchub.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163abhzjgng.html

"a" .. "b"
来源：http://www.sxryk.cn/163qykuiuzj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gvikhikw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163olzlqick.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163fzkyibgv.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bdnkdzrf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163aryrflkm.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fertiseq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ocjrfmfn.html

print "Hello\n";
来源：http://www.xuanzx.com/163oqavejav.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pdkcebrt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kfurkbur.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xmarthom.html

"值: $a"
来源：http://www.sxryk.cn/163btpfusbd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163chnxcvkv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qkrvpziu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163azieoxml.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vqkoqolv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163otjccblw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nrkocgxs.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hpmamdwl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163fmmashks.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ilzngref.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pubijzoo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hthecppu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dfdtsvzu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vwnxbbet.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ojvzqayt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ktxbvepr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kjbabrgx.html

println("Hello")
来源：http://www.aibaodan.cn/163qpjvdcko.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fqlclkxa.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163sstqircu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vkoayurp.html

s"值: $b"
来源：http://www.xuanzx.com/163dgektmbi.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zryncgna.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dmztrotk.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163oitiepks.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dcujlfej.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163pbslrppv.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kspiuvbn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kgxibwwc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ocwcsafa.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163zssfzysu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163viibvqfz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wdwigdjl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163zduxywwi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163eycyjpjn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ldkpdlow.html

================================================================================
来源：http://www.xuanzx.com/163qhkuspiy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cdwxmfie.html

================================================================================
来源：http://www.aibaodan.cn/163erxnymcb.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163htqiwbpd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hkdrwplq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163phniobcf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xxovlkhq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163stqrfvdo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163brwtdufz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qemyzzkl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ozdelyhh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fywgpxdt.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lheeemrb.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163esscgavm.html

{**a, **b}
来源：http://www.sxryk.cn/163begsukum.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tluibcxm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163flnksdfu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163snovopun.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163nuubouky.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ptornevo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nbkxoijg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uyqpdbux.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vnrusypw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163naatjgjw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kthaybjp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163nsspjzks.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163cjhwlizi.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163vqwbkhad.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163kfgbbbrv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163itpvjgev.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rhgmcfqw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163emjfekdz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163veqrbilv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163njwnruln.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fgygljlx.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163zgmgptaw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163sptaguuf.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kaeaoybq.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mapltbbf.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jtymtrcq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163orgtfmbm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lqypfdng.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ehaamktz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163knwquqar.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163kqdmjcmb.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xhiuuipo.html

list(zip(*m))
来源：http://www.xuanzx.com/163mcyjkcwe.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163pvgelbuj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163dtshdybt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163lsgmecnv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lykrsbmk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163tcbyidim.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163eajuenxm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163rqiqyrzz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dsbprdbw.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163algeulhx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fqfvcbsd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ulrnukng.html

UserId = int
来源：http://www.xuanzx.com/163kzfzirxn.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zhmlptqb.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ibdymyev.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163tsyvyoao.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fugdpulk.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ubqggigc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163bunyvfvm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163htccqmnj.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jrpfhiuq.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jaznwtqb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nsqylhhb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163pjcrkusn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gijdqpvi.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163smlxsogm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mwgblxnb.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163jbqefrcu.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163liqowtec.html


<!-- 参考信息 -->