外链999!wailian999！

strlen(s)
来源：http://www.aibaodan.cn/163wvtechyv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163thuoquto.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ysrfwvks.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163jlyxmrhp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qzlmzobe.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163czzlwmzw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dqgwkwwc.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163topzqlci.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zplbexxe.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ylwygngu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163vojjcjdf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163voezznvo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ifkboaav.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wwotetxd.html

fclose(f);
来源：http://www.xuanzx.com/163cjynmird.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tingpmyg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163sxlwvlvj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jqauxsno.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163glzokcfw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163nizzodfu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163svqsgyzp.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163nbdquuei.html

(double) a / b
来源：http://www.xuanzx.com/163tjnzhhtj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pdrhxwqm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kekamtpo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xlxitffs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rdbzjbhq.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ysmcpxbt.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163svhalghs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wuexbftt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oamlpejn.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tznuxlfa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163utzdbrel.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163lvjfjtun.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uwigcgrt.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dzhsnsil.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gdeuuwbt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xvzhqgcs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zseftgkb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163cfkyxhny.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163eydeitdn.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qjmrwfeo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163jvhouzwq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jrimojuq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163obkagomt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qlrnbcfq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163wjpidbls.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nyuhykba.html

static int counter = 0;
来源：http://www.xuanzx.com/163mgitspac.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dosaulmw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cqkftkms.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ctgmqrdv.html

#ifndef X_H
来源：http://www.sxryk.cn/163vxdrqivc.html

#define X_H
来源：http://www.aibaodan.cn/163ngjzleth.html

#endif
来源：http://www.sxryk.cn/163asbdzmly.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163klnmstca.html

#include <iostream>
来源：http://www.sxryk.cn/163aqveewmi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163runqpjep.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ehxlhwow.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pouxfqzo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163oszvhzvx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zaesbuch.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163neujiybz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163uoqnmxum.html

[S35] C++：map
来源：http://www.xuanzx.com/163azemrgkt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ifllysce.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cryctaoh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yerplujo.html

[S37] C++：set
来源：http://www.xuanzx.com/163rqabtvhw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mbdtsyho.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wbbmjbaj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ikmpmmic.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163rxugputl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yuvubsgk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fdmxuxty.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jsrtrwyd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qmyjpfgq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ycosmvat.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gzfzpkbp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lyivsdrn.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tinpyrri.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qkzctepo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ubromxsf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ierpkpnl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ytzlxtwe.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163eixojcsx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tytoemvk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zzuomaqa.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mltxqkir.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163stdeddym.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163haifxcsd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dpbftnrw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yjyjsafh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ghswsqru.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ucnfcjvv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tfqqxtwb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163daftwqvn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tyzheyio.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ghjaqekf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163aueatyxx.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wiydyces.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hbocjlwx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hqynrhqm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gmpgbtsa.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163nqlddxjt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163krcfdbrc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ozsbsexy.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jkvtbzfw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rbyjymwz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163moisiqrs.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163niqyalkj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qszzrpra.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xomrmlta.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jarlqrjz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163icpeihzm.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mezcjskg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163oskxrlme.html

================================================================================
来源：http://www.aibaodan.cn/163jerdcttf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lmtjwpal.html

================================================================================
来源：http://www.aibaodan.cn/163ehmdiudb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xjhpzdyp.html

println("Hello")
来源：http://www.aibaodan.cn/163dpymignx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163vvtpqtyp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ptnuzavc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zebnnitu.html

"值: $b"
来源：http://www.aibaodan.cn/163vwqubdvk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163oczfwfij.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163kbvfqtwz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hfinqpmx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163mdkjkkst.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163glynahan.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xsujfvvg.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mjdmqcnx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rzzywosf.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163elzceaqx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xegkcjgo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mjwflais.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mzwwoimd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jvwwsiii.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rajahexs.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fwwbekfw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163koxhjbrx.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163decnjzaz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qjwzbuvc.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163kcvvdndo.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163umhspmxl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lkyiukmr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xbjuodfy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zadgbihn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mbgukdyv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163podtaelo.html

print("Hello")
来源：http://www.sxryk.cn/163fxauqsmw.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ydmwlnib.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ndpprvhb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mnaeqzzb.html

"值: \(b)"
来源：http://www.sxryk.cn/163bedqdtxn.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163otvsubja.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jdalxjuy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163cvyifnwa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nrjmejuc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ujdttlvl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ehfaddoa.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163akcnmajc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xjpsnsjk.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ilmgsmwp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jymmaiib.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zbzzvpjt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163awmocfxw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163giadndgw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163mhswvybv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163frvuomlz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163djfhpgmr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163opiichgu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qpcqurbw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ogmsswfq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163qwkmtvls.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ifrrkctf.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lakwksaf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163gghtmqng.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163wdddqman.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163cknrudua.html

print("Hello")
来源：http://www.sxryk.cn/163rlmxxgfe.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163iqcgmohb.html

local a = 1
来源：http://www.xuanzx.com/163fluxzdwh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rdkmepmp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ndcliimf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163befsgcpx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hvwcoupk.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163szgbrych.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fdblorat.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qsimbiag.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163tzrdrpvh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mlavxfel.html

"a" .. "b"
来源：http://www.xuanzx.com/163ccjueljd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tbhrnfpx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163iferowlm.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163bevchdpd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163naiuqhpb.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163revjtvxg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vjlvwdsv.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163spzqxekt.html

print "Hello\n";
来源：http://www.xuanzx.com/163sclkovzb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163kevmazct.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qvtydlkz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dxrltanq.html

"值: $a"
来源：http://www.aibaodan.cn/163uxpuavmk.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ojdoldod.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163duzojbfk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kvpyykxs.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ytlckstu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lefciwbx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fnkyjhqs.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163rykhxaqb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163yzopojpo.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163tvdegbah.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163spiwuzgg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qvsbeaxf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163rtldzrmy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wtplzjgx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163usyduhwa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jobhicqc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lbcpcxhr.html

println("Hello")
来源：http://www.aibaodan.cn/163kswjtfil.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vzzbjwgm.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163lhsahffg.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ohefmyac.html

s"值: $b"
来源：http://www.xuanzx.com/163iefyuznl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yvwerotd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163arusulms.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163bhckkyrd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mmxzlvvo.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163htmimlpe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163clnzgxgn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hcvhwcgt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yiqojyva.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fbulujsd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dgusmlsa.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163oryyhgdc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163islweufw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ncshjgrq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nrrydtyw.html

================================================================================
来源：http://www.sxryk.cn/163lugexpuz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163huzppqjd.html

================================================================================
来源：http://www.aibaodan.cn/163hfvjcayz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dlzfqlly.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dbixgrgf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ovisspib.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163owmhxrvt.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hyhtyxun.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cjpzkzxm.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aetsicsa.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uspbjvum.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mmufmpst.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jeikzbyu.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jpjkwscy.html

{**a, **b}
来源：http://www.xuanzx.com/163csocnlst.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ogkcpbim.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163jmbdofwh.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dxuxksoj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163iexcevoi.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hrenzbus.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ovvfcpvc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163tjtudfnf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xghhcxfy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163wcbgqjfr.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bwhjrpwo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zbfsxfpv.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ziatxrzi.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163menoxmsi.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tvfeazmb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163sqojgkgd.html

defaultdict(list)
来源：http://www.sxryk.cn/163lgjzjypu.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163seozfjfv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dyuhhdxb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163atozybbd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163rxayiitk.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vqkzruyi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xyejszwj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zaueicsk.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163xhltfzpi.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163wyryjucd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163cxlhblpn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163oiaycptf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163eyztrcps.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qifctvyg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163oembgufo.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163tjiydhye.html

list(zip(*m))
来源：http://www.aibaodan.cn/163oywmvkwr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163pzsiswxq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tfhmvvbj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ytemslho.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wvxskpih.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163kyqknjce.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163rhrgqcxk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ycdsecxn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163owvzsioc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zxbufwpi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dpeudkrd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163kmjdjyzl.html

UserId = int
来源：http://www.sxryk.cn/163tuyidjkb.html


<!-- 参考信息 -->