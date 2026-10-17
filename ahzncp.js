外链999!wailian999！

x |= (1 << 3);
来源：http://www.xuanzx.com/163ixmtpwnb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qsorgwvk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163dmvfjnah.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163qjhirdrw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163aqbgnocs.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qbpyociy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163eagmxqxw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163uizbwvey.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rjgwbntv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tsfneaej.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cygdyvfl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bcteckbx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163iapdwcqj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tqnrtvdp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bbjrxwor.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163dbuubjbi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163byyrunel.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eyvnpnzh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163txomifnp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163eultloyf.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hwyowjld.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163dyuxcwjz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ywinzgjx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cjvxuajx.html

static int counter = 0;
来源：http://www.xuanzx.com/163akwiujzz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ewozptzy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qzszbdhv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sbkeguxs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mdoqhjod.html

#define X_H
来源：http://www.xuanzx.com/163djtghruk.html

#endif
来源：http://www.sxryk.cn/163fnatdmog.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zqixugij.html

#include <iostream>
来源：http://www.sxryk.cn/163qhdrrgrz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dvxatoya.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ktpgrwii.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163jyskxgmj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163hjmgtpwi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163fncpreia.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163crtpwetd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ofeawflt.html

[S35] C++：map
来源：http://www.sxryk.cn/163kvldtkfl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vueutnni.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163aipyfzzs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tnqzhzjo.html

[S37] C++：set
来源：http://www.xuanzx.com/163ihazbjgs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163oabuxoyg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ijxnecim.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dwpjjegt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nfzfnnbd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ptyzqoxd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163iwnlcgub.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ugdltzwf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fvuyvahw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ksqrisak.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163zylsbejg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163icabshvr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lfpyyggj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pjtchsgj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163gnplmltg.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fibrgzyw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xhwhgoyl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ynbtmkgi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rebmbgra.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uwnygjvn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163lhgswrhy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qruaixds.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163szzclsbq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ldzwprgf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163wwpcswnb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kjkpctuw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kulqkgpt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163levfhecb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fupqsxeo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hvgkobdt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bgyapyoc.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nbuirspl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kuxxnrkz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163omamotkr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dhhbydkp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163espqjxnv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xjcihmej.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qrpengaf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163tosofujf.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bchmdhky.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163whqmyvfl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163eczdtkfb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cmsxagwm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ohhrxygl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jjakmdws.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163dphvgknd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uifyczxw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163daqauyft.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wrmiacyo.html

================================================================================
来源：http://www.aibaodan.cn/163omnudzvh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lgwslrlp.html

================================================================================
来源：http://www.aibaodan.cn/163dsdttfev.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163homlvlbd.html

println("Hello")
来源：http://www.aibaodan.cn/163qayamkaj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163yrxkycgr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jkdzmjua.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163eiailatr.html

"值: $b"
来源：http://www.aibaodan.cn/163hfgorycf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lozppuvl.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ipeewegx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163sensvhsx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163buflgwte.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163merotdkr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mbexcicr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163oaiouvtx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163oibfknml.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ssxthkel.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163yjvqjefq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163krcuncbz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163iwhyoeix.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xamcapaw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gndlnznu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fcbhusgk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dtxbzjbt.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wgqsqzpq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163aqhwvmxv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163uggdrhla.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lvxibqfm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fgvprnzf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qeomeedo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pzycmsns.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163clwbtgab.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ylostkvr.html

print("Hello")
来源：http://www.sxryk.cn/163jjnvmpms.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163exlgqwku.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zvhaespe.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zpavaffc.html

"值: \(b)"
来源：http://www.sxryk.cn/163abgyqyhh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163azszgqqz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163szsfgdmx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zjuaalcd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163gpodbcmf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bvmsamfe.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163eajypkzx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rizghune.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163phownsau.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kmouegej.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zfwnvhrp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163pyxjzrko.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163jvclwhnr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163opovsmgz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ymutzyoh.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163kgnslwwr.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163psnivwoj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163onyzjcnz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163pczmcram.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163iziykodq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jbobiurx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163biogdwzy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163owwydddf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lhkzhjzg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163iekkvvii.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163oorzxuzi.html

print("Hello")
来源：http://www.sxryk.cn/163ipppdqyy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fhgwjoiv.html

local a = 1
来源：http://www.sxryk.cn/163dzocwtko.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163twrclsnv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rurgzteh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163smfuwlbd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wlxyhnvm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163meeqqjte.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xycxdooy.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fqizspyc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cwewylov.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rjqnzhbi.html

"a" .. "b"
来源：http://www.xuanzx.com/163hcdwuxrl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163kdxnctaj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zjwujenj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163reqakqdx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bnrjkvgy.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163dqdrecwy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ufenuaxh.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qclaskji.html

print "Hello\n";
来源：http://www.sxryk.cn/163tmsiyvdi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rfmifqbb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163xxvcazgg.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163nrqlrill.html

"值: $a"
来源：http://www.aibaodan.cn/163acufrxhq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dkwtisth.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ldmzklxj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fcaqdiaa.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163uaiympbc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ryzdqlqv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cldhfnst.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163fmreggtn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163nosqyzxc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ueqgoxcf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ffjqjryd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163ggofxtwe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gjvgpvzl.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kmkkthcu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163utihwzaz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jftaugvb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163xkqhygjs.html

println("Hello")
来源：http://www.xuanzx.com/163kckpuxyx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163aoqobsar.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163erqtaumz.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jbyhqeja.html

s"值: $b"
来源：http://www.xuanzx.com/163ntohdznx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163lxdprzid.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163cxufmoxx.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163npqubdzg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mxccfdyg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pgvysmda.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163butfxtiy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tkpqjmon.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bidiguvo.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mqmbugdc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pjigdrdd.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163yqgawcve.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163uljgdatc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zfytszfp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163snxeoely.html

================================================================================
来源：http://www.sxryk.cn/163nlnlfeqe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mvijutjs.html

================================================================================
来源：http://www.aibaodan.cn/163hiilwicd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hurmdpmp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163expztcrw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vqfjasus.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163uezxtkgz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163pmhinaux.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zbgalnff.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vehqzhou.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163bdqkoqkv.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lqyyqhdl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iirsjvog.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163nrghgkfp.html

{**a, **b}
来源：http://www.xuanzx.com/163xbbuotys.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ymostnbv.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qyqwxzve.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163offawpzg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163edjvcwim.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ucfjpuce.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ijulxouh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ioariofw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163hgvjxztl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zpipcrur.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163wwmhqzuk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163agbzhnkm.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pbyxetmz.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kkbdueml.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163rlruqpxq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163phzwygbj.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ptvzzvve.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zaeppmcz.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zesaopzm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hzkpqyco.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163beojocnz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163gzmjdmat.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gjqopwsg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mjiesnee.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163gnqthujo.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163dmfafepc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ouqfqmra.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163crgxqwaw.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qlnurfwy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jhpiwpcb.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163yyanpbrz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163dinjtfrt.html

list(zip(*m))
来源：http://www.xuanzx.com/163anaeseup.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mgtzwuxl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ikimhpze.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rrgikfri.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163quoghucd.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ytvfdtkg.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163dyshhnct.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163cshxqqzo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163duhtnbfz.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ccxpybdo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ymsvxcbz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163kcbzuzdl.html

UserId = int
来源：http://www.aibaodan.cn/163swrjpuoh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ztvavbge.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163imjmdlyq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ucwhkhrn.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163myfwepen.html

[U31] Py：单测
来源：http://www.xuanzx.com/163sjyykyqs.html

python -m pytest -q
来源：http://www.sxryk.cn/163mqrafizh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rrqlguiv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ewufuvak.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ninewbtu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163eqldcqwo.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dkgpokai.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163dkxcejhp.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tvuxghen.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163bqxlzyjx.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ktwuvpyl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163aogigopu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163vibrpjxh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163kufivltd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ughcfgbq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163kdxbxjbf.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163sjpfmhfc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ujtvqegy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163gntlgnca.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rxucanlv.html


<!-- 参考信息 -->