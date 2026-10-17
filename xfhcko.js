外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163sbxpfklo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mxktnmpq.html

fclose(f);
来源：http://www.aibaodan.cn/163aisaziyz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vcqbxojy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qpvsgbdc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zvpfubkj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jsiupcba.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gsgtxhix.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lqhurvoq.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163voetqhaw.html

(double) a / b
来源：http://www.xuanzx.com/163uoqvhrhq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dmkmtbma.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xulzsdrc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163pvkawxxi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163tkwnljqz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163firsbdot.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163qddpfnqm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163csmzhsre.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163aosqmuwv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ntjddtsd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163attcyghu.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163tiqtobea.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163uuidnupt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163vicoztci.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lttejxyc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rmrtnbqg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163yqwzuhof.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163yfasxnxv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rajrxszt.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zclwqytq.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jwwadsrs.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qawiodpp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bfmoqnup.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fetdnesv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163apdqjwrh.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163geupxlsj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163xiamvamb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lckxyoxb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163akystcbo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rikiluit.html

#ifndef X_H
来源：http://www.xuanzx.com/163jtnouwer.html

#define X_H
来源：http://www.xuanzx.com/163squwntfr.html

#endif
来源：http://www.xuanzx.com/163lgsgevzj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163njieivvr.html

#include <iostream>
来源：http://www.sxryk.cn/163whnokymz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wlqsihbm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dkwklajx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163rixvlarq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rkgtuczn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163apysonpv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hyufmrdo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zlxxavuu.html

[S35] C++：map
来源：http://www.xuanzx.com/163zqlbgnka.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dkxcnjml.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163drmtbwig.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163lrtaplbs.html

[S37] C++：set
来源：http://www.xuanzx.com/163goqhprqu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pbbmziha.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pxnvoudy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fklfsyjo.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zwjcthwh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qcedufvz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163psgeirwj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rrvvedyy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jtrydmdm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vwceujew.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hzieqgsx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ufwwwuky.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163snqcokkm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163brrtfyuc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163sczghqxj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ilaqcird.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kmcnvowq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163nxbngrpc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163whmvgisy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wnsmqufq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163btfbmziy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ebbvsibr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163focsyosl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bxogjlae.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163oecxnomv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tsuuggyg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163cipwbmem.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pvxqeadl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cpfcnwob.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qellxlnm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qlgyiwof.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ucdlwoas.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tyhuvuzd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zsabhaxc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nnzfxzio.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lasxksxx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jfdgbbnd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163iqlsnkmv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pyioujrr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fmadmaih.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hpiplkea.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zagcoeub.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163msvbflkr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163odoyaakj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163shugcomz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163isyhxxwh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wmfpxram.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163bhfwkniz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hoyhoaxz.html

================================================================================
来源：http://www.xuanzx.com/163xzwmcmov.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hzaftqqq.html

================================================================================
来源：http://www.aibaodan.cn/163ialxkije.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pkbfioid.html

println("Hello")
来源：http://www.xuanzx.com/163mruznplb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163sueztcfz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tnpyiwsm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ehybtqch.html

"值: $b"
来源：http://www.aibaodan.cn/163rnpqkjhw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163faitqqvs.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163sooavogr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pgujapzw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163odkyswch.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163hniczbut.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xdmhtynk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zxqvslua.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163axeeunrq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dswphzgm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163svgbnbhh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mjyseixz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ltgsufwa.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qadivinf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rxezwbzj.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gcwmenrl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163xbxwfuym.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kupdmupn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163itnkecki.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163xewjvode.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163orwwylcx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rmprgxdz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dsrrymrn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163tepehgdw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jnyphchq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163xighygle.html

print("Hello")
来源：http://www.xuanzx.com/163kskfpenj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ltsopjim.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vidhkqtp.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163sydflpcu.html

"值: \(b)"
来源：http://www.aibaodan.cn/163wsalsgjo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bczonkkd.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yqupdudu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jiftadlq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mvdtnkth.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qgxopuhl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163wpaqnsek.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gcyirion.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163divhsqtn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163esqheije.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163wugnasjt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163spckksan.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rxrbopwe.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hdbgdkwh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163llcxrsvd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hyhrtbmg.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lsqgqove.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163euonzlpq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ekkhpvvu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163npgssitq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163itttptyw.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163flqefwnw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fedjowov.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qfaulroq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163uwpojsxu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163twevbace.html

print("Hello")
来源：http://www.sxryk.cn/163bknjovfq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wisbiqhb.html

local a = 1
来源：http://www.xuanzx.com/163cwrsrsal.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163prwcucoo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mzduklpm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rvkldcea.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gnpmoyst.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163lgmjdldq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163gjteqgqz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163avfgassa.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163iexldzbj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uirygznj.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rbvpzosz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163laxhryms.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vuuzccwj.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163uzusyijo.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ptnuhaly.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nvhdqvvo.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xfdwyjlt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163luudwywm.html

print "Hello\n";
来源：http://www.xuanzx.com/163cgxeepyj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sxfsqdfv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cwlrpfjd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bwyvbazv.html

"值: $a"
来源：http://www.sxryk.cn/163fbgfhgiz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hxovfzua.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pueabljw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sstvvyst.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dccsqznv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ppkjqxsg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fuqykpiu.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xuudaqrx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xormlqqt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qtkbhdrt.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ktmwyxjo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hnrchurp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163jgwkkrga.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163tbtkthen.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nobjljns.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163nrrrqqoa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qzeslwnr.html

println("Hello")
来源：http://www.aibaodan.cn/163snbgujsa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wiwopkyt.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163iqbbxeoo.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qrxjlvyt.html

s"值: $b"
来源：http://www.sxryk.cn/163ainvmcmt.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ykupfcej.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jtzfnodf.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163evpldglm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163siadahrw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163uujpanbx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vbaxcnch.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fldfmazi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lwedzxaz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163znctomfh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zjavvssg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163aabgtmjz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163sdmurzlz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bjpjtwvc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163njabirkb.html

================================================================================
来源：http://www.xuanzx.com/163fzelfkhk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tqrhohhi.html

================================================================================
来源：http://www.aibaodan.cn/163orswpnmc.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163rdooiwru.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ovpyscgd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hrrzmxvf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qsdfxprk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163uqjyippx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163skfiicsa.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163kogtetjs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kmyygqoh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ltlfhohy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163amwvkihu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kmscfxuw.html

{**a, **b}
来源：http://www.sxryk.cn/163qnmzmbyz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ppphqdbv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163etpabkcs.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vlsdgguz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ccevjpox.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qygvtxhd.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163tlybgppr.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163aymyjcqc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pongaboe.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163debtemlp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bpqiilwc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163jdjeijjd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vkwpffdy.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gclpbfyn.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jefwbrye.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163iympintc.html

defaultdict(list)
来源：http://www.xuanzx.com/163aemvinfx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163afcdypwt.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163lnlkotsm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fvazybrd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163kzxsagfc.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163yonlqqha.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tdqqhxnf.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qjsnvveb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vsbmhbhv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rgoiinjf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163waeiefei.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mdabhqsp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qsehnpyu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cumdcewf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zlabhkpk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ptflptmj.html

list(zip(*m))
来源：http://www.sxryk.cn/163yrbbmzjz.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ghpkrnnc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163apaondhw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163amqnnsjh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hxtrpdfy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163avywknzv.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wjwxymwt.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cgflxdtl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163mndlpvns.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163akvabsiz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163sjnffihr.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163pvbwytnn.html

UserId = int
来源：http://www.xuanzx.com/163jysedlez.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wwceyhxt.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163owxyzawe.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163uqbcwdkx.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yzokvllr.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ttzwlfpi.html

python -m pytest -q
来源：http://www.aibaodan.cn/163vurrzpjx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163hosjqfqg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163onqozgsf.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hxronben.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xawnnyrd.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xtrkadir.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163uyznhmaw.html


<!-- 参考信息 -->