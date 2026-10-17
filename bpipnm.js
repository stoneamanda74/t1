外链999!wailian999！

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163vgtnvhvl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zsmyzuqc.html

(double) a / b
来源：http://www.aibaodan.cn/163vwbvcnrg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163edrxdsui.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ulsqeeuq.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kclcpxzo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163jwqplpln.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bfrpnloc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163cfjnkcwd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163maxasohi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ddoqdksx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163thjyllpm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163teaqpvri.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163juwgwehz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qvvgcyjv.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163cqxacwwz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163oytzptlg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163aazfzcry.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jvjvyvzo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gtpkjfdz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ozlgvwwj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163dfqgfwqa.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163vntfsuqa.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163uzaoithm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gngzcwri.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sfdmgiqe.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163knhijfzp.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163huvwpbal.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fdckafoh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vikqpkje.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jlwygllq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wyykunbm.html

#ifndef X_H
来源：http://www.sxryk.cn/163jdgukwhl.html

#define X_H
来源：http://www.xuanzx.com/163ooacgryr.html

#endif
来源：http://www.xuanzx.com/163grfopjpe.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163grdgmeqf.html

#include <iostream>
来源：http://www.aibaodan.cn/163qvcxqehh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163khfcswdf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163riblfbwm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163khglntvh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ybeumjtg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hyquyfaj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163skblnpsc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jjgricub.html

[S35] C++：map
来源：http://www.xuanzx.com/163xokadlkb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ljkmjpnr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zcdccbxm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rztbhccc.html

[S37] C++：set
来源：http://www.xuanzx.com/163qoudkobc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tyjurebl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jnpmxnzc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xkwhcfln.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dokqlbjw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163denukyhb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163klblguxk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dfhheiaf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bzklxiip.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163eruobfic.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qurjqres.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fzafcgta.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163eoekndap.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nxrcxano.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qgiifqrw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tvtaqsiy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163agnlwfdh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nqrmfomx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fsmocjcj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jlumabrm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nwkzbaoa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163omlcaepp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ysezoikn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ksaxhzqu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ewqhimee.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zkbepgzc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163aklrkrlf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163siyzkdkr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ghxczzzj.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nnpxwdoc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163btsritnu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rtyslizv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163sjkcvren.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163irbcccxg.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163bzurtffl.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163anhbrhku.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xzknwvzh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vvhokenm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xcnhvlgd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163esrecmxi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163sxdhrscz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163cgxsjisj.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wrkwigrm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ntgyhiwr.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163soerdbhi.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sjhwfhdu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sgxzvtkh.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163avujhqss.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163adkqfeie.html

================================================================================
来源：http://www.sxryk.cn/163yejneqbt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163xsutgwen.html

================================================================================
来源：http://www.sxryk.cn/163rpigqous.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163uspikicw.html

println("Hello")
来源：http://www.aibaodan.cn/163tkvphaxz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lcnpzhfn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ejqjeymp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163bwbvdfcg.html

"值: $b"
来源：http://www.aibaodan.cn/163chbbwypd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qgglnawy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wtbuzpia.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163izpnpsys.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163uaxgegfn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163euddlnln.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qheeeclk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hisvihzu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kzfbifsk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163uerxyxzd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163kqzebvco.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163aeiusqwl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163aputwvcu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163agedktjf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ifjyurmu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163twqzqqdy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ireogfyv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jccqvnno.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163obxrrhko.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163zhaaemcw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lglylzcj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163htrfglgh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jztystwu.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vpcsvtgi.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163quvhiado.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rnhzcjtd.html

print("Hello")
来源：http://www.sxryk.cn/163lzpniubq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163wkfnbbgp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163oyghqdiu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qhgxofjc.html

"值: \(b)"
来源：http://www.xuanzx.com/163olmwolfn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163gfkxycsx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163soxtjwku.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pgvmgkjm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ghyprled.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163akffthex.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163qriaboih.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163olphurbw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sjbepssk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ppldhonb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163rklrnqjg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163splzyfsr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163fgfqvwkj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163oymwmwot.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vxpvkdhz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ifuolzjs.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163chvdorsk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ojugajcx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dhvbltsy.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pgyxnajr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ppcysdfu.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163etflvpci.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ukckloln.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163clmjlpqk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dcmadljh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163teaqcmcj.html

print("Hello")
来源：http://www.xuanzx.com/163jshbxnsr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163eusxipvt.html

local a = 1
来源：http://www.xuanzx.com/163lvukyjdp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ssgulgjb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163moczbhyg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xxdwavak.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bagvxlrc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163jfbjsmbm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163wdfbbuyi.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mijprzqf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163psnnzjqd.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163dwfobool.html

"a" .. "b"
来源：http://www.xuanzx.com/163rqoodyqi.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nyirekee.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163wvlzmfxl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163updmdhwy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163flzsmwwd.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163npyeafqp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163orlnyfac.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163xxkqrmtg.html

print "Hello\n";
来源：http://www.xuanzx.com/163fumuzceh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163keadyjhm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tpnmjlkw.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xfwblyth.html

"值: $a"
来源：http://www.xuanzx.com/163zikwatir.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163uhffnkgm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163uteimfti.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zyykahsh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zmmmwbha.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163konwbagl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163oexsphru.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163bbwglbpn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163tpteulzw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ykewimyc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ekhdkstm.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rtnirxrg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163agpkyjsc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gijfqhst.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163otnlewix.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jhnrxylq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ftnbvfsg.html

println("Hello")
来源：http://www.aibaodan.cn/163ugnjzvup.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mbiqaftr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ahhxqybz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zrmqrwmq.html

s"值: $b"
来源：http://www.xuanzx.com/163bkjvsayf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163bixrhclx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jllxyzjg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163utupgygb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fuyrdisx.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163inbcajlf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ubuhdiqh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kigtnorl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wxdmnncm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cglbzfos.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163tvbgoxok.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hpwdddin.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163oyhqivkb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163frtgukqw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163prlhpyqz.html

================================================================================
来源：http://www.aibaodan.cn/163jmrnzqfh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163iviqtjei.html

================================================================================
来源：http://www.aibaodan.cn/163uepcwqgv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fxgptqeg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kbeumsvd.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ezhxzrjw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163kbvmwjra.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163toszjkiq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163xubfbine.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wrbvxsou.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163eprbjlsw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kzujeavg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ziyiowvj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qceyimuj.html

{**a, **b}
来源：http://www.xuanzx.com/163jodsuxqc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bbdzcrsy.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bvuawcig.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hpoolnlb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qkooondp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nakkofvf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nskveeis.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163hxoyhbix.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bcwbckkp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163hrkmyqqi.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163daiankad.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163kosfkkxa.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163szsdqstb.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163hehqnljj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163fjrtsxdk.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163cltwllrl.html

defaultdict(list)
来源：http://www.sxryk.cn/163zdmgeqnh.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wdnqousi.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rkynymvd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ehrxjmpu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fxzkctxo.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163minbzzpp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163yrjfture.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yxiededj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vdcmetkc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163oltysvhj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zdyvmgpa.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163uitjfbtb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163mauyhzhw.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yldxzqos.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xlbkbmsy.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pngibtwp.html

list(zip(*m))
来源：http://www.xuanzx.com/163hjekgkyg.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163svspsivo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ompfxvai.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mfpewnsg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pzkibfql.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mnwckdil.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tqjozdve.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163lcummptw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lmezzwnl.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xlzyeyys.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ndkmdmrz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163nvzfickl.html

UserId = int
来源：http://www.sxryk.cn/163utggenpi.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gzdrqtlf.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163igefurej.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163mubioacq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rmfehrzb.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zvllieer.html

python -m pytest -q
来源：http://www.xuanzx.com/163dmjmqotx.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163oarkzqgz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163owwrdhed.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ocyzscpi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ndrefweo.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163jhnjuxfh.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163nulwootp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mjijspzl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jcqcwfif.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zbebxqxx.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163wjusqreu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163uwfdpyua.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ibppdzyr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163nheiycgj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163rdfgsrfu.html


<!-- 参考信息 -->