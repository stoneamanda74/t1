外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163bsltnwjm.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cagwueua.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163lgwymaeh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tonhbubu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163vzvzcigv.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xtietkqn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163vkoszkbc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163frwnjqdd.html

static int counter = 0;
来源：http://www.sxryk.cn/163intoukho.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lpppnqck.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163odqcnhbd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163iraypbjx.html

#ifndef X_H
来源：http://www.sxryk.cn/163usaoxlae.html

#define X_H
来源：http://www.sxryk.cn/163pgoqaled.html

#endif
来源：http://www.aibaodan.cn/163ieacbmgt.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163wvestujo.html

#include <iostream>
来源：http://www.aibaodan.cn/163acmqzcmc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163oskklybd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zygwzgwu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oxkbswpe.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vxfppvja.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rbchnwci.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163bvtecice.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ytbrxvxw.html

[S35] C++：map
来源：http://www.xuanzx.com/163eekwyhrq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bpgrhlln.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gjcoimey.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bxhophaa.html

[S37] C++：set
来源：http://www.xuanzx.com/163bvsxvdmh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ketpjghz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163habpofec.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163juvyoxnv.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163rlemycmy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jnyanbtr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163igpjyunm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ptvtzfos.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gajbmvmx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163vjmfvbpu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wpuyxjaq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zljrngdz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163isklhuxy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wihxhgqs.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uxilptix.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163snlvcwlc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xigzkdsx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163dplgllgk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163eusjlemu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163gvxntjhk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163salzpghp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163bvofbqzm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hpfxzrbv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bjaualml.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163czztigez.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163rggifxyo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hsscyusq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163itszzxco.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pmvrfytw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yfubnpjr.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163esscpxyp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lwpevags.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gkogdddz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lzaqowug.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hqhslhzn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fcneiaei.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163amsywrzj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163viuzelsl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eresyiiq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bcritczt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163msfxwoxv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yyzdzvxp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kcbgtnec.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mzdnomum.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ohiqqdiz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bjiqytka.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ynvmcblg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vixynqcw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163msswvhfj.html

================================================================================
来源：http://www.aibaodan.cn/163fuzwlsnl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qjqzpojd.html

================================================================================
来源：http://www.sxryk.cn/163kgpaybbc.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jekwjtsa.html

println("Hello")
来源：http://www.xuanzx.com/163ojkqvxpo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qtordqqj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jmfzzuzl.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ikqdzvqa.html

"值: $b"
来源：http://www.sxryk.cn/163nvhqtsmn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mpzwvkee.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163lbgduxgl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ogtemecx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163urvsadpc.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163odfsbacm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eggwiwmt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vgsgepay.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zcnxvxrk.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pdbrdcvo.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163keypeeum.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163wggscsxg.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ikuqsbra.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163uhssbuvg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ruhcrqje.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bqhbragd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mxgfbein.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163srodfdwx.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163iyvfafoo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163wkgiwiwv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fntszoni.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ocdywoqr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ayxepeob.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cphtfqdm.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163huysmgfc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mekqgnvp.html

print("Hello")
来源：http://www.xuanzx.com/163kpjvgdqc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163diqvkuia.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rdlyolyj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163iehbgspc.html

"值: \(b)"
来源：http://www.sxryk.cn/163oauqhwqk.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163htzccgni.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163cirslbch.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nvjvrqgb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ytaotsqv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qcdfsnas.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fkyossfu.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qxjjfpej.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ayumsfjf.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xjoipjnz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vzorysob.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dqnnqvpn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ezrrfvel.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163igejzztq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163rzhxsecq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163yxcpvhbz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yftzgwgc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163igzogfxq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163snlvxgfm.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163etyyjnud.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jlfxmkra.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163awsegklh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163exjszbob.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ifmqbtth.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163yvhatcvl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qxgjyaen.html

print("Hello")
来源：http://www.xuanzx.com/163sxvredhd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jzyqdjko.html

local a = 1
来源：http://www.sxryk.cn/163osqydiqp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ekqwctew.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jsxwzkef.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163sarhquiq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163fifvampy.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163peugblpl.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ysnehkdh.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ojkzuilq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163kaemtzqa.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vsypnkel.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jbecypog.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vudsecvp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163rzlqbipa.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qdtgjpal.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xqabvthw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163viswqvgp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kjhaiewm.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163qyijarra.html

print "Hello\n";
来源：http://www.xuanzx.com/163nhbzncsk.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dmynsoid.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ymqypwae.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163fkyrqbpx.html

"值: $a"
来源：http://www.xuanzx.com/163iqyrgogy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vbxjyura.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bdsahcuw.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cuomtryr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163myydsuth.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163tskghamp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zylwvaai.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jlzoutju.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163yezykpal.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163babjfxlq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zgkgseqa.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163lelzgaqy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vpqmttsa.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163afpcqlag.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163arterqvx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ntirmyfo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163fdiqpevi.html

println("Hello")
来源：http://www.xuanzx.com/163ryigzoim.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163cifmnxtb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jhrflwey.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zsyrgjqf.html

s"值: $b"
来源：http://www.xuanzx.com/163zhhtluxx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163nrfoknzt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ygvaearo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nxcsrkjm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163uspilnhy.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163muozpzey.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163girwpuqt.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163bilnjltj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163isqgguug.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bjhejvyn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jxoajpqj.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vzjrauzs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163adtevcfs.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bligiyhk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bigabkst.html

================================================================================
来源：http://www.xuanzx.com/163pfzhwomb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163blcqipnm.html

================================================================================
来源：http://www.xuanzx.com/163vifkqgoj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pwtzokaz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gbyrldgr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fojhcghf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163nxybnkoz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zmmrrwvp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163iydxzalk.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163myebcwih.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ksgtcetk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163pwjiqkzr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cekuaekf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tvmmmnpk.html

{**a, **b}
来源：http://www.sxryk.cn/163khopapxw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163alxyoqov.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rnlxissm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163meonrktd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kxdbatlo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vqcdqiwt.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cwbsahtu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163nqqwgauu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163lxbbhwdd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163qdgxayxc.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163vpktkhbu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163lhwoqbse.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zqpjfqcd.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163chspmmlr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163menujlft.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hkryfdow.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bopeszmk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qpwhgtqe.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163yhchhpww.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163iggzbjjq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163djcjgwsv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163henyfnpz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nvbkkiqr.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ngxgoquj.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fgxusrgx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163lqmrsutl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163drcsgsfl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163tlekmkoc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163xgyhuswz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163aafemwde.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xwpqbqep.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163gmnsmvdt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163xbxlkpuk.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fystxcda.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zpgsmkby.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qivefyxt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163udscnjdz.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163gzropsba.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163ontagzxq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lnhuuroc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ajrcdfii.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aedygnhx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dguwgads.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tstbgrzm.html

UserId = int
来源：http://www.sxryk.cn/163xzbcvxjx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163tgygfbat.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zsahxruc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163maywffkv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xkvdnyth.html

[U31] Py：单测
来源：http://www.sxryk.cn/163uxcnfmai.html

python -m pytest -q
来源：http://www.xuanzx.com/163seoedsqs.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163usjaxrzb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163rekqnnvl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163zqtbpoyn.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bunkfpec.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ddnsfdmb.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163swiejztf.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163npvwyqfi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fcffeevo.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163jpsgfyjo.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163tcjspfxp.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163kjlsswhs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xmsealxa.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zhhbeyuf.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gvppdlmu.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cjevjvio.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rzglebkp.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163qqbizrdh.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vfosvtbs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163asixaswc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qfkcmsjx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163mdzwjrgm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163olrvgwbc.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bukkpfiq.html

namespace App\Http;
来源：http://www.xuanzx.com/163qwmwkdsv.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ivarbfbe.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ggercotx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163wdxfcvwg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163naaeqzqe.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ftyxxltw.html

?string $name = null
来源：http://www.xuanzx.com/163ugjkwodx.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dkhxemdh.html

int|string $id
来源：http://www.sxryk.cn/163lydfvxuw.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163icxektxa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163scjkdboh.html


<!-- 参考信息 -->