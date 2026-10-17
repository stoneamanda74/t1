外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163mjmbnvsc.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163pidlujdx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163reyskidg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163iauktbru.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163pmrxkouf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163efgfijay.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gmgzxdjr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163amzejmbt.html

static int counter = 0;
来源：http://www.xuanzx.com/163lkwmndno.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163tgaqyayi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163erfvqhzm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163yrxwzxal.html

#ifndef X_H
来源：http://www.xuanzx.com/163mnkmdfhp.html

#define X_H
来源：http://www.aibaodan.cn/163npdebaps.html

#endif
来源：http://www.aibaodan.cn/163bhoqhdlw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gryettub.html

#include <iostream>
来源：http://www.sxryk.cn/163nachdjoe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163axisitbz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mfdokbtq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hujxliec.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tnrawttd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163kcwgbvyq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163jzvtrytw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lnueuwzm.html

[S35] C++：map
来源：http://www.sxryk.cn/163piuxlryx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mgtaaqzc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mddlcquk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gowtyadz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cgqgxmxp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lbnlzkhm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163eojztema.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163glkgdcmz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kkymkygz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163jwceaxmm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dxvjzrcp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163sytbaeua.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ofsikmaz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163mfyowvki.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163aveazlra.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ixfjfubu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mchpaawg.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yplulbbr.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163iucbpbuv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wdivlmve.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lchcwoas.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hdoxglxi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163egzpumlv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163avxrjuwa.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163afnkobxh.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163smsojaro.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qpynyqpn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163udznaqcp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163gtjlhfab.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163idwyunkz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163azbckziv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xocxflay.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163utlipqao.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wavgpltq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yamlhbxv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xrtjbegr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kyrsxibu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vrryyrwf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163zqasvkjl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ygedmbav.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rqtghkwh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163neemhqkv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lzojaoue.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163jyzufeqq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hrgeiatw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163hjbgdzbx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163swzesfvn.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163fyywkaoe.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163sfmbakrt.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rahmzeip.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xnbepdmt.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wwgyptvo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163rwdmlqbv.html

================================================================================
来源：http://www.sxryk.cn/163rvvxgoly.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mmzcwsaf.html

================================================================================
来源：http://www.sxryk.cn/163bvakfgvg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xujzwdfy.html

println("Hello")
来源：http://www.aibaodan.cn/163ymszuycz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ivvdjkgp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mzcvdvom.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163kepmqfkv.html

"值: $b"
来源：http://www.aibaodan.cn/163zpsdxbjf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qbglfxbz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wvyrvfzg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mjjjxvmq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163skgbuorj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163lvqkigca.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fmcqvqpw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nicayjdg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ztbccryj.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kkpigvln.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zlsqveuf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nshsqomn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fsjnvipt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fftomune.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wipjsgyw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mrriuxsb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163okrhnzdx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cbjnaosa.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rnsgbvee.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163fblqrvas.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ififvcbv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kkfunkrl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163abgdhtni.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163aypyykmu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163horlomqt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xgnhevqc.html

print("Hello")
来源：http://www.aibaodan.cn/163vaabsvma.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zehangkt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163waxhawsn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qkvomiom.html

"值: \(b)"
来源：http://www.xuanzx.com/163tgsnvjiy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ffczwmsw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zvfthvuk.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rnsfadxt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zzysfavo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qjvpnvou.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163kmotkdga.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wtxezmfm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wnjmxktw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163hqapajte.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ogsanuqj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cgeaxygc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qqqmbpps.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vcovwefg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163aovhhsqp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163bhnxkcrl.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163apbmqmqz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kocusics.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mvijocad.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163eihelhsy.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163aruchaar.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pdiifiau.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163xxftvbza.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ieyltfxl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tnpskvuf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xjtlpfdp.html

print("Hello")
来源：http://www.aibaodan.cn/163tsmvclun.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gvabvgul.html

local a = 1
来源：http://www.xuanzx.com/163xnfgrdjv.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163vbfnscqa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xjxogkqq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163wrlifgxs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163hqskbqyh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xiwetmss.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163loxrsvfh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163iovlfwoo.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163aahjixqo.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163yndigcru.html

"a" .. "b"
来源：http://www.aibaodan.cn/163lkcxzkpn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163alaxsinu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163pospckpx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nsazddwe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gymhgpam.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kueostsh.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ieyrnaxv.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gbumghux.html

print "Hello\n";
来源：http://www.sxryk.cn/163erptaipm.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163aafvqoho.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rbrsmbyn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tpdhfzwx.html

"值: $a"
来源：http://www.xuanzx.com/163jwiqirdf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163oscwpowv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163dvirfmcq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kvawookg.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dayumhlw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163motewsvx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kjeioznm.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mebqklvl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ncyhkhgy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163igajiuag.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163oemymzmt.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mglblous.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ibvmcgkc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163chflepmd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163jtcknwkg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zzbqpejj.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163apigrbtb.html

println("Hello")
来源：http://www.aibaodan.cn/163wfcxxjvw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163uhpruwok.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163oylifqya.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163eiqqdqoc.html

s"值: $b"
来源：http://www.xuanzx.com/163iftqqnou.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jpgsmnaq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163bwryhrys.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lsbbbamd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qbfwkgxm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jtheknrm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ngymbszm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zjnnawbz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kmrnnaad.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163toyfgsik.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fgdmqlqr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vpzpkmqc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zmnrlzhy.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163junedgbi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163lmfkkoij.html

================================================================================
来源：http://www.xuanzx.com/163syjyqems.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mcppwixm.html

================================================================================
来源：http://www.sxryk.cn/163lqyvbvsk.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hnywmfrt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163mpyzoykg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ixwiaadu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bfqtcoba.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163tovbkbpt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ytmygvcu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hmihvezc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kdjqaxbf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163aetrzusd.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163qlvunges.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jiqcocwn.html

{**a, **b}
来源：http://www.aibaodan.cn/163bdyioavy.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163bjwwyyae.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ojsqsvjo.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163illpvarl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163vjlyoaav.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ihmeusxe.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nuykioze.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163iymuqpwo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163miaopmmu.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dzdkjhew.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163aziqwwfc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163sciotohh.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163cwhdmswg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dctkzhek.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163yxveyqgf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kaloatty.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cdgneuyl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163aeffponk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163yhnjilec.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163eglavbim.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163aptgomzm.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vagqrtkf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163zgejtcfb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163dgcippuf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163nwxijvbe.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fpsipynu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163awdwxauh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bnxygoih.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163bdktagcb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hldegcan.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hzddzulf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pxjhgibe.html

list(zip(*m))
来源：http://www.aibaodan.cn/163mkxjtlej.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163duqejpad.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163aqfzgwtg.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163pmvnenah.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jlclgbou.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163krwzduqj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163yfkbfpzl.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ubaolonc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bjomszex.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163fhttzurz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yhctgwln.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163oiqzkxtm.html

UserId = int
来源：http://www.sxryk.cn/163kdqdrcps.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163kbvmszee.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lczxoqbb.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163usykccke.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163uwzilsqg.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rmcwixzt.html

python -m pytest -q
来源：http://www.aibaodan.cn/163vhbnjlmj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ekudexip.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wvixdaky.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jdtelhik.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163orwewawb.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163yrwatrxg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wahdhebj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163xzgwllsy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jugkqupl.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163njmfodnx.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163iiyoyqoq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lbulqtmm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163klpmmjgm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163yomgsgln.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163torygzby.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163axhbiuhv.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ftczffab.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163wdwntdzo.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bztqcmat.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163crnrvqiu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xiemvxrz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163aknzzbtr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163wdkzbavp.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ujidvnlf.html

namespace App\Http;
来源：http://www.sxryk.cn/163zambewsz.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bnxkafva.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163koyufspf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163whozbhqv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163paomevjd.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163nopbpnfk.html

?string $name = null
来源：http://www.xuanzx.com/163gaapbqtr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163cxgosulc.html

int|string $id
来源：http://www.sxryk.cn/163ttojrgmf.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ylnlovnp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gsuwfcxv.html


<!-- 参考信息 -->