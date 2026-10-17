外链999!wailian999！

strlen(s)
来源：http://www.aibaodan.cn/163uantyhor.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bptjrhwl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jvqpwxsp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hjqghrvy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ygrgggse.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ckiczkiq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hzpodnpi.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163fihjubbj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163enpkrctv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xurvlmpq.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xcbycolq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163uxadshyv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qmxshkhy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yuuvtjge.html

fclose(f);
来源：http://www.sxryk.cn/163sjqsyual.html

[S12] C：写文件
来源：http://www.sxryk.cn/163avirjpqe.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163qwpzeyet.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163whogkcrp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uvdyquhc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163utplmlux.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sratogpo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zjaoybrh.html

(double) a / b
来源：http://www.sxryk.cn/163hcfxjzgw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163lvrcussn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163noezocxz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163sjvzkbsz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kvbaqmrt.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163japcpnww.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hjwzuujg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xlipzsuj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ypzkvfkw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163urhbpyez.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iaskhzqm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cuklkvwp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163exxeuhfg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163jchwyqrb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163otqchazs.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kgidkojc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tjokoxga.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kxmdjxjp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163aptxedmz.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jrmxudoc.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wtpqerdb.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163jvtqezag.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163glcjsvbd.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vstzoahq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ebzcdapi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xbfesnpl.html

static int counter = 0;
来源：http://www.xuanzx.com/163fhmahklz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163fuugwznm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ratbdpql.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163jpvwnyer.html

#ifndef X_H
来源：http://www.sxryk.cn/163fyjqyssd.html

#define X_H
来源：http://www.sxryk.cn/163rjkdlpgr.html

#endif
来源：http://www.xuanzx.com/163uujwfamz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163vdzcqkug.html

#include <iostream>
来源：http://www.xuanzx.com/163dakhnwpe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163gayxffix.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163manaxnte.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vyzpsjdn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hhhqrjge.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163svkjpjsr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163copzosvv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hjswubmu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dqcifgik.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mlmmpvxl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fnchjguf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163chljgcpj.html

[S37] C++：set
来源：http://www.xuanzx.com/163jvoqwoov.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qhnpwneg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xidacvaj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163lasomeua.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hqjfgoxf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tbougoev.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qmphjedi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163twypeefs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vztatpid.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163armnenau.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163oycbbcmb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163nzatcwgr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zcgftmla.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163oigxhzgl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mwxqdacw.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163hegrmiws.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fmchgwbk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ycwyawmq.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xtyshozc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163tolgcove.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nvgyrsld.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163mzycwuvf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163envnbkav.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mzmtkpmg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ohaozjjq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ashzfsuy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kkeofjni.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tzquiuph.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rtpclbhb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163humbsvay.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yylwryjw.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xbalhrwb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163llbqqhre.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163tslcdkxl.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qxurkrcx.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wzossqcb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vpxelruh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vcsvzayd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qmseibdr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tsxewtdp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ssisystt.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163jfnnxlwy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163qrpqalcw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ufmbzhvj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dpsmuxmj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yjigwgii.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lkwpwliq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163geiqdlig.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xdncngwp.html

================================================================================
来源：http://www.aibaodan.cn/163jtijcuwn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vgrkcbwl.html

================================================================================
来源：http://www.aibaodan.cn/163mvrjphrt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bxbqkuev.html

println("Hello")
来源：http://www.sxryk.cn/163ziwocxqt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ddmidjrj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163uwptjkdo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tonlzejc.html

"值: $b"
来源：http://www.aibaodan.cn/163wqfgmkmc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163auexkmja.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163njvqmwsb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xvrzsijw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163iptzgyfa.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ewxberkr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163csdmnobj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pjdzcoxh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ticdebvt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cgcexfmm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163hgnxkofz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xfoefkjn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163razamchm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163lospxeen.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163erromoxi.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xikexrri.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wlvrjfcx.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fpsbagjh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qsuprwgk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ktqifdee.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163isdpthwd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ckizyemz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qfludzue.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yxejzbou.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fempjkxr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163exzsgswf.html

print("Hello")
来源：http://www.xuanzx.com/163ftxsgkfb.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rpvethns.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dyxojxlj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163frhebslx.html

"值: \(b)"
来源：http://www.sxryk.cn/163beybdncy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163idsxnlfs.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nuiymzmp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mhgptzyr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163khxihprf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ohsvctmg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dtatwesj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163egeduyth.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163drkdhmku.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163biwyqgtv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163lwsunohf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ikmwhhzw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163omxjcstn.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nyipdmuk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cyposjzb.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vpndqswc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163viirvgck.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wykvdmdh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163joeokqrn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ascxgoua.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163glnvkgdi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163oljpzyaa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vzzrradc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163phduxuyg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mxsbyuil.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rfdgsaqm.html

print("Hello")
来源：http://www.aibaodan.cn/163uxhmmxvz.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nrfrkkyx.html

local a = 1
来源：http://www.aibaodan.cn/163fdgbjupf.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rpedcobv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rjtquhar.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163pfvujceq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163nvyrcssd.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fyaxeqrm.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163rzkvclry.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rxcqwglv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hmcbmndc.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wpreawpw.html

"a" .. "b"
来源：http://www.sxryk.cn/163tyfjjcuj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ooghaztl.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fsyjesmy.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163twhwnrgx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fsqhkuae.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163yicwlbzi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163eojnvgnu.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tvskgalj.html

print "Hello\n";
来源：http://www.xuanzx.com/163ramhlivb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ruysqqfi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vqpaisqs.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ekwyqegj.html

"值: $a"
来源：http://www.aibaodan.cn/163hbjcqrgg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sfpgkvgw.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ilbhufeg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pybculyd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163bodfvkcq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163zjqeqafb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wrnyrdcp.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dogessug.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dzivzlla.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pulxwuch.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ukaectvp.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lmsrtxlj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163iowodtgs.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ufhheacs.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bufrmojj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hxpljzwz.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163pmrguetx.html

println("Hello")
来源：http://www.xuanzx.com/163ctpdkumv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ruwcmuij.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ohzctnbe.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gvblgidx.html

s"值: $b"
来源：http://www.aibaodan.cn/163fejsajhy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ccuhwkzv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163rxqekinm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qxboowja.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rzjmyvoa.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xhsgnwzu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zhcrfksj.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hfqxtoee.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163aahlvfjx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gygfceie.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163aerwalex.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163prhkcnso.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163uqldmxlj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ucuzkxfc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vxxqwhkb.html

================================================================================
来源：http://www.sxryk.cn/163gammbvoe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wrkszjic.html

================================================================================
来源：http://www.aibaodan.cn/163ggmrmwkp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qrctneab.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ytymbydy.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163axzxbmoo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wgxrjbbv.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163umgzekwh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163tjtjdngp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163iksqvphr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163nazbullr.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163makptryn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lldalazd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163zgyeqdoi.html

{**a, **b}
来源：http://www.aibaodan.cn/163ibbfxrqd.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163enajitxb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wjkwvffi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xmsgckrx.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163spsutmxf.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lttjkwux.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163arfntist.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hbllgbnd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kckhjnou.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pbjjzvrx.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163xmdxkkyk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vskvhewd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gcoeuweb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jrqjhamr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jmdjlmko.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gttuseru.html

defaultdict(list)
来源：http://www.sxryk.cn/163uplupfry.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163znaewssh.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163etyvlfou.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dakjfhip.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163rnnuaviw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163cpwphyan.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vdrmllzb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qessxtzz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bvaioxfe.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gjhrpkuw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qazejegx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163crermvau.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tvsjuotz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163idcackdj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163padqhxkl.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hnorkivw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hzkgydoo.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lwtjdcae.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163vxlxdlfw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qwefcjli.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pjlpgaqr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dmmgoscd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mzqnoqvp.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163cissvnsn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kqtmuloh.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163fmikdujj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ohzaazob.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163butevgqc.html

UserId = int
来源：http://www.sxryk.cn/163rtgkqrbf.html


<!-- 参考信息 -->