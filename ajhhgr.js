外链999!wailian999！

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xycqzluv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ksonvmxy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163pwijbrwc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tikgjdms.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163gtsclzxl.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163stxkasjn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ahcnkoyv.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jokfvkxe.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jdahainn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163osvhwxxh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xdjwmbqe.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163khccwvsy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ycwmycel.html

[S23] C：随机数
来源：http://www.xuanzx.com/163umyvawid.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163bwqlltzi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163vbnxdqkx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fvescqsm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163walcjska.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zaoqoazb.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rtpizfic.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163kuxwlmsg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gbwjwuru.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163sfkvuvtn.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ofyhlufy.html

static int counter = 0;
来源：http://www.xuanzx.com/163bnrrawdc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163kfnwrjwe.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gsgyoiqq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kqjedioo.html

#ifndef X_H
来源：http://www.sxryk.cn/163nkjtrvjk.html

#define X_H
来源：http://www.sxryk.cn/163egsgyzex.html

#endif
来源：http://www.xuanzx.com/163kfsrknug.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qnipjgzw.html

#include <iostream>
来源：http://www.aibaodan.cn/163votccnee.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gxmvlrkv.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163hqbjhvjd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xdoggjku.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dkefobyf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ocghgvsv.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fjayhzog.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wwpvviuk.html

[S35] C++：map
来源：http://www.xuanzx.com/163hnqquepi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163crwmyplk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163myqojvpp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gitvbfqd.html

[S37] C++：set
来源：http://www.sxryk.cn/163cvttoasu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jpsgjhgc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163adenzunq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fgjmqkhy.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jrhirmpd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163audnhdsd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163dfvrsajx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yrddewcp.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qvdwxhum.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zwknablv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163cpymsmma.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kzutnqpi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wjhyqdzr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bcbxgkie.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rinkhwgl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xcvyvwxj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qnzizbde.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kspmbymw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zmfdgauw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tvghkpwu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ftgnkjhx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163fpzxrpts.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xihtzmys.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xsjytxth.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163huzhjpdn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mssysqho.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zdmrztpr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163vxvoceed.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fjkgvzlq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rcxwnfip.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vbtxkxvt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163tnkvdgrt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tztnoztn.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dcbouxic.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jxnmfpxm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pmbjdhht.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ukpznjjk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tlyneynq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mtatjhel.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cmurbqop.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vdatirik.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163agpcvmlc.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cbxcoyue.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163zhiptvbx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ptmjmkuv.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zibrkjes.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163rdytwzvh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nboaqhgb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163uirewnyq.html

================================================================================
来源：http://www.sxryk.cn/163tcxxhimj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eqsvites.html

================================================================================
来源：http://www.sxryk.cn/163furyhunc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163swoeeiza.html

println("Hello")
来源：http://www.sxryk.cn/163rcddsjrf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dlgrzhav.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vfikwcya.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163enybwfjy.html

"值: $b"
来源：http://www.sxryk.cn/163lzkbazto.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mitzvxcm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bfugnafp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tflqzsak.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163qfeuxwvg.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ljyeblcz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163wcjkxrya.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rsvxzdte.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ibvsmpuv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vxmkjelz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163krxavwqf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163utxbjiwk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kzsaanik.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163pncffxek.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163otrisgox.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163jrzrhvky.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hveozgub.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mzpdhcmx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163uudtzxwr.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163woqfzurk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wiuisifl.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gqjokgks.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163auufkadx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163orczxgck.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163eyqoeyhw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rqgblldb.html

print("Hello")
来源：http://www.sxryk.cn/163hepjztps.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163uahihake.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163uwznqylp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163grrachbg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kyketyek.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163aebunduo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163esvuygbi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163txcgavve.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163rusdagzb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ntqkukmn.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xozalefd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163eqxcgxkp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ipsmnvgd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qfpugane.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xjlvapbx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gjvitiha.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pittnexr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163afuzflxa.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163siopcyws.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163yyprpvlh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163rucpczxr.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163dejwsnyi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ewuosoun.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163awepxnpm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163etwtjijt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163npnsboox.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163bhylqxjk.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163txtomugv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mnwsljvv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wfzzqmzc.html

print("Hello")
来源：http://www.sxryk.cn/163ojqaezsf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163asxniypu.html

local a = 1
来源：http://www.sxryk.cn/163zmxdbcwq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mlpdofan.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163hpafvtby.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uzjqyadl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qbtwcfit.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qefkljab.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pnpydebn.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163fxswpdnp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wjkgpynw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rbslcmvg.html

"a" .. "b"
来源：http://www.xuanzx.com/163fkpfqkgv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163empgnmom.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163tqukdspx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sarowcim.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163sbbqdstx.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163khnwojna.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163igilycho.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ogvzjufy.html

print "Hello\n";
来源：http://www.xuanzx.com/163uztogycr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163coqsfnle.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163calvxrdi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xcblloci.html

"值: $a"
来源：http://www.sxryk.cn/163spxaelib.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qxrrohbq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hjvbzdag.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163pccdzryo.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bzcwsbrn.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163sbfagbia.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163iuoegrzb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163tymlqirh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gnxmgjsa.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163trqgnpvg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xbfonxxo.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cuokrtnv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fdavjmtu.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163murykjes.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163yyevdggy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163usblfeuo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pqcjmdby.html

println("Hello")
来源：http://www.aibaodan.cn/163zrjzpjik.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mazmhejv.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163vebkimnk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163dhayqbnc.html

s"值: $b"
来源：http://www.aibaodan.cn/163zszayhvt.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tykxeiwx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ueqqjjej.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163eyvawrze.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kpqtlqfi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163zttbhnka.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163fskgypla.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wwjwfejl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163lfryaxje.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xnzogbej.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dnvyoemh.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bhamzslw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dsoojpdf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163durpjeco.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bnmjtcan.html

================================================================================
来源：http://www.sxryk.cn/163bvwnpixb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163syukexcj.html

================================================================================
来源：http://www.xuanzx.com/163qcpgtkyp.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mbjvhovk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163wcyvrunz.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hjtbponk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gtjzubgz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fekmsrei.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163gpxabube.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dihhcvog.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163eidwfmuq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163emczibrz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163efillbfg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jknhndxn.html

{**a, **b}
来源：http://www.xuanzx.com/163nrkyutrv.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gctqqvws.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xmxotyjy.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kxusmrow.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ilskeweh.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pbbpwhcc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ywivkfho.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zikqprug.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jmkiricy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163yzmohqxy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ifajljlr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hjeffbmc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xafisuld.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163drxtcnxy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163riunqvvc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nruhexjw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163kdsdnuhc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rijfvfab.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dvthnefb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163eoiimflf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163rllaqywr.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kfazeskl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hjuwlmxe.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yxivgcqu.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163iqjfppzs.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xisbmtso.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ofsxgdhk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rkehifvb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163erztijuu.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163omebncyp.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pzlkvhjb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163esqbnfte.html

list(zip(*m))
来源：http://www.sxryk.cn/163bezeowsa.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163zridmcca.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163gunjzjew.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163aoydgavn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163shnqwsjr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mhmioqdy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163czrreusb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lpadamxr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ghaxuvzn.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dfppjncy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ztxwqeua.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163akvsvnwk.html

UserId = int
来源：http://www.aibaodan.cn/163vhtlbosm.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jqphfpzj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163gneuwtkk.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163hnooxabf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xiycifth.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qshdhoys.html

python -m pytest -q
来源：http://www.xuanzx.com/163ymukctcv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hhdpizhc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tepcdqnd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cdoaxlyl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163roxozqik.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mpmohcvi.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163druyifjm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hjydwbce.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163kjywrkyp.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163enlxhupt.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ssswhpns.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qxgjcqjt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vnwrqtnl.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163okqhckzo.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163bhutnxvo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qnuuiisk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xejgbase.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fmzdxvsr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gjvphpac.html


<!-- 参考信息 -->