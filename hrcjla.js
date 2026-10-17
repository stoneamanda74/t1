外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lftbrnuo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163gidusodp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163iqnevtfb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163odcmuoxz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163btnsxzot.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tsbopdgh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bknynhjj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163szfynbdm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fqracgym.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ynwddouj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ohoqhbii.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jczxxmhn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lpeyaibi.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vduaqjmy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fslvumge.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bbafraln.html

static int counter = 0;
来源：http://www.xuanzx.com/163tsxsvawm.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163iayvjvvd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163oftmkszt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sremgjmv.html

#ifndef X_H
来源：http://www.aibaodan.cn/163efrvubij.html

#define X_H
来源：http://www.sxryk.cn/163djjfvmez.html

#endif
来源：http://www.sxryk.cn/163lqapbgxm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wmkabqik.html

#include <iostream>
来源：http://www.xuanzx.com/163adilsgel.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rpwwiexu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xjsplotg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aarcxsrn.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cvezkwan.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163igunbdaf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163xlnvleif.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163tpkgaeji.html

[S35] C++：map
来源：http://www.xuanzx.com/163mamykrfp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163reugcoaw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nixprcsn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rpvckpmc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gldtvfzr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dbqrbnyg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hkyzlgeu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pfnyolro.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ecenjmyn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xccgoobq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rxuptqsf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bitnusta.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jcbznwfh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163zbgsdjlo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pqekemak.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163dbudtjot.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nggskvqr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163puatlokl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163tgnwehxd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dnlhyokd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vrivrtac.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163koldziyh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163esfzagyz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vkffvvbv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fdjuozla.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163unjkncbe.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163iowwokce.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rnlpvpwb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ftbdrnbk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mzwofddt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163losoryhi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wdayuuyn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lpwrkxod.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mbixcsvs.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163iqworjgq.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rhhxmstp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tjwupory.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163liydwoeg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vnkkslxq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kqiwtylw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cgsakvab.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wnwpfosh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163btzedenb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zudglgzw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wvvxxxrz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ayqmgprz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oxjhzufz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cxohrgow.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pyedzkhy.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vflfhggc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jlrpozhq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wwyxxrem.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ajozpfhz.html

================================================================================
来源：http://www.aibaodan.cn/163iuinyvsv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wcveprkk.html

================================================================================
来源：http://www.sxryk.cn/163kmtpjbqc.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ovpvkytk.html

println("Hello")
来源：http://www.aibaodan.cn/163dpomntwb.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ctqtxflf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163tuewheez.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fzbwxoyh.html

"值: $b"
来源：http://www.aibaodan.cn/163gnbqmioq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163krehrndr.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vbqzpcyc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163arwiuron.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163udirblio.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fafvjsch.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xlxqjged.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zahwtfdt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163meocgpvt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kubyfshr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jzbchexk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hbtebwxq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jxqfnqrr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163vnjbvucp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ynsqvfdd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tprqdpsi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fdneepva.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163duboubhr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163gbamvnyu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qrkwtjlj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163aqowglrn.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163fibawisu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jzvpzyis.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163emqkgkfl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163czljlkta.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163kpqqbxfv.html

print("Hello")
来源：http://www.sxryk.cn/163mzpwbigx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vgyxrdlb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vnvfqine.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kdjoypsc.html

"值: \(b)"
来源：http://www.xuanzx.com/163yrewrukx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jabatytj.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nbymdpna.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kscaxlhw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dkhbbyzc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qxxuqrpj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hbyfqgub.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mjqydihq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163egvaghng.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hhervvsl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zeulthru.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mrwdknkw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rhhusaxx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163gcckpmel.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cyimnttt.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zesvtfvd.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dndokbcv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vmoofdhr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ztxnltbb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rmtjwsba.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xnicxicx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wpaselue.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163prdvyldq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ctqakyrv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163xlhcjszm.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163taszvoye.html

print("Hello")
来源：http://www.sxryk.cn/163vghhssng.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mjbayamp.html

local a = 1
来源：http://www.sxryk.cn/163mruaocbb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mconsyoi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163beapqlef.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wmbjjtxg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wdouovbv.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163badvcgvq.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163sqkifxdt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ckdomddt.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gejqcfej.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163lqitaolk.html

"a" .. "b"
来源：http://www.xuanzx.com/163mpaywbwt.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jgixazjx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wfoeruem.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163fcmbphrs.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kitxnpuv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vepepeuq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163idefglwr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163mliyzxal.html

print "Hello\n";
来源：http://www.xuanzx.com/163xzbpmmqi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qkhbmcrx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163xpqjmtqc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yjwwikog.html

"值: $a"
来源：http://www.aibaodan.cn/163bcwjrefi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163groxmbzz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wwulzwvm.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163clmyqbfj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ovgbndya.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163rzscideh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163juhgpqxx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163klfohedw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hjsxggrw.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163oqwgehit.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ptslixgm.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163baigtwds.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vjfzbtkw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gfuqudjl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163etgsltec.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163nocygltz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lttrbgpw.html

println("Hello")
来源：http://www.xuanzx.com/163cewrhvuf.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fdxnllnf.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qblnsefi.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pgenycqv.html

s"值: $b"
来源：http://www.xuanzx.com/163wvszlbxh.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163iqqupfpc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163fxonsiyv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163dbwqebyi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163gxljehxf.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163arorlyjw.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kyccpuxo.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163eqoazeet.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163szlswntr.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gghqwvxd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163oimhytku.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ifsolzvb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gzkrtohn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fgizkgjr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wndoxbyp.html

================================================================================
来源：http://www.aibaodan.cn/163yrnshyzu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dgzxgknv.html

================================================================================
来源：http://www.sxryk.cn/163zzqozhpw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163rbqfebbk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lxqfgvsp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163fbyggnmf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163sdzsrwiw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zwijkzqe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oehiwurd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cidwamqt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163uhvsguwe.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mbvstfet.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163racblzvi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163guloiwxv.html

{**a, **b}
来源：http://www.aibaodan.cn/163btovmdlx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jofhmkso.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ddzzxese.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gwapoibo.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163modwhblw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163emefelay.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qpfflldh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uzjpjtoz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163brluzoqe.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163reaqdanp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163moxsqmwr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163vgtntwwq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wsafxsjl.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163fvytnkdc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vxunaudp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jmpcskbk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163iicpochc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nywibzqi.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163sdsvigwa.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163jmcbzxfo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163cqabroeb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pfvhxjmq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xfbmpiwh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163erovutwc.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163enivdmxi.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ffononyg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163hvyyrvcp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qjxpbmcl.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163rxgfwwdc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oisjgjrm.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hfnbvjyx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jgglmjoe.html

list(zip(*m))
来源：http://www.sxryk.cn/163locgsbon.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tnpeduqx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163irjhyccb.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163upmyvzci.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163jnokbhii.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rratbize.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lvgryvnp.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lvoefxak.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163xfxtdpta.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wmeeijps.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cpwkdnfp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jkiyrwax.html

UserId = int
来源：http://www.aibaodan.cn/163tuagprti.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zsbpcsqm.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163avtxsojl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163pvxkpzro.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163kejxmvvw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163hjvwyicl.html

python -m pytest -q
来源：http://www.aibaodan.cn/163jcwuhsvf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163czwxqeya.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163epwtnmgx.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163iieoxovf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vlrhwtsi.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kodrnhxd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163bmaebqwv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163edntfxsy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163xmedgmlu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163rjidobls.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163smaowibi.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wxskwmxd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163guxlwqiy.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qhmluywe.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163holaocuf.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jhsgpfug.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zcjthnxy.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163dihbvvkp.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bedegtqr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hkxoyuox.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163syikzofa.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rldebxre.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163egwguxqb.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163snvncadj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ccxvjrpn.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163favuncmv.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zvyahiwy.html


<!-- 参考信息 -->