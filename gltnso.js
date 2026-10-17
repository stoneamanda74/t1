外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jkazfbub.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163enhkqwku.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zeuocemu.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jmhnzjhe.html

static int counter = 0;
来源：http://www.sxryk.cn/163gpmllljq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ywanhdey.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dovcwegt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wvrrxocn.html

#ifndef X_H
来源：http://www.sxryk.cn/163izstexjx.html

#define X_H
来源：http://www.sxryk.cn/163iojrruww.html

#endif
来源：http://www.sxryk.cn/163coxudygz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163infrhsja.html

#include <iostream>
来源：http://www.xuanzx.com/163vrexeanv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163npyyskbx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qnrjaphh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163einsmhyj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163grapqanf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ijrbdmuf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ubkrbjvr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fqbrjzuf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qkjsymjx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zedodvxv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dxxoqjmb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nalogqad.html

[S37] C++：set
来源：http://www.aibaodan.cn/163plesxhhg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163olbarjje.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zrcabwwl.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vxkaxhcn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cmmpecsp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mpduwxie.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163viqvqhxa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qrpeqnra.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vugfwywt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163eskqpvdh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ryuwfqid.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gbfuxmir.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163yrgpsjmq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163yyxxgwbk.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163aawocgsn.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vtbkmqed.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163chuoksgz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qxnnmerx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wxhdrmdg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163aonlunbq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rknktprq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ttyyioar.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163doahjtqp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bxmifmzj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163unsnxutm.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163liyzwwfy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jeyylvjq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163rzqpbxve.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163jieufbai.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163zqoaclwl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ptkmkdpz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sqabtpmc.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ctbetlzs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pblwqflu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ottlqfhh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fjaofapw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pldxtjeo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nvvhmudf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sloucelx.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cphdnxqy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jplvlohd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ytivragn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163azbecmvd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kjcjcadl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uyfrusay.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vkzdjreu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mpgqklcd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nhofkrzf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163htondzmh.html

================================================================================
来源：http://www.sxryk.cn/163vtkomzvd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vgjczcuq.html

================================================================================
来源：http://www.aibaodan.cn/163hersradn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vlxqaycf.html

println("Hello")
来源：http://www.aibaodan.cn/163qakgtmts.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163chwaletz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163iptwxawp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rcfrjirl.html

"值: $b"
来源：http://www.xuanzx.com/163dtbgjzih.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163safmdcfn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163icnjxnbo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hqyhxglr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ejcnkmxu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163datldqsq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bnufftkv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ganriutd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bcbydgsb.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yqyngitd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ehhbdzdb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ipcjzgob.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vrihfblt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163adngsyxl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fcmdsgnr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163spqbphoj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163bbfnbigm.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vnkggrbt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163gbpxegdh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163auuwcgax.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gdbhmlgu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gzgovqnu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163dsvinozi.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163eomsyexb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ipvncxal.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rhmtqcfm.html

print("Hello")
来源：http://www.sxryk.cn/163nnqqowmx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qbqayrov.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kffjpfuj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163dngbarge.html

"值: \(b)"
来源：http://www.sxryk.cn/163zqzsebyw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163aiirajde.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rngzlaoj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163bfhqkhnt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rpkcvkwq.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163szrizfdq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163isavkpzj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wkdgtlcl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163sgwwbbbo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hfgsarda.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ihxyuklb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163suxzwlxc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vxprvxtd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ysynccli.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qpmxcyki.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163orkknrfi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163orfbugtb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xgmfphaa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163unhgktgs.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163tgnkpapb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163nemagquv.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163onwhcnfx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163yiitjhoc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mblhnltv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163sukwxjst.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163clclrvkg.html

print("Hello")
来源：http://www.aibaodan.cn/163cfutqeug.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163xbojeebc.html

local a = 1
来源：http://www.sxryk.cn/163gfapfhlc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163obwnfbiq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bndkufzk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mzkzugbr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wtxxiata.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jvddxzxg.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ztxhqlej.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163okukogke.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ycdqemzn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163dhfpxfhw.html

"a" .. "b"
来源：http://www.sxryk.cn/163gwarriqw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dhaxkbex.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163tacbkgss.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nqqdngvc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163zbazdouq.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jzdyyria.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ytogacgd.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163agosimza.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qjcxmubq.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163quszimtg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163amqyastt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ygohqxvc.html

"值: $a"
来源：http://www.sxryk.cn/163utdpberc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nrmghnyt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163anpjopxu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kpjehifg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kngpaggk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lweljgfk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163yytzppge.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163efygfiyc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163pupztetj.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163somzjbbu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xagampjy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rlqvflqo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lflttlfw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163xbghrbry.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vgjalxdx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163eivqjdqh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zfatemzt.html

println("Hello")
来源：http://www.aibaodan.cn/163jnngovwh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163dsdmraux.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fakwexhq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qwquvkoy.html

s"值: $b"
来源：http://www.xuanzx.com/163vxmdhekq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163blxwayam.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ibcmlzhm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ziwhydho.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163vbspgdnd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163pzhflfju.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163twfwzgij.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hyipbqwr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zhvwjxdk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dsemaiwv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yxafwcjr.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163pztxluyv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163cimdhamu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163htegdotw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163cesovtnb.html

================================================================================
来源：http://www.aibaodan.cn/163uagatvem.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ncwvxrof.html

================================================================================
来源：http://www.aibaodan.cn/163npjxiesf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163obgcaoqd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163znyblbdm.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163sxvcvjxe.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xbykovjj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qmrsjjkh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163xpxmygrv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163rzykxdwf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ylkgvbwl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163vluszzcu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ptwxmxvw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163awhosmce.html

{**a, **b}
来源：http://www.xuanzx.com/163ovwookhw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163guiqahut.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vvqftmww.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zamiimno.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ulcdrtix.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lskdzlby.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163niwwgpgi.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uaugaeob.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xgimfgeu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163sebbivnh.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163omyfrqwv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163uzkygrin.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163bpvavhzj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ftwyvcll.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163rxsfelpy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rqkkoxfz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hqiorlmt.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uuklovhf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nfzcjwoc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ajxwxgll.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ipchnjwg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163phxpvvzs.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163skujzvka.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fettmidk.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163owpwfarm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ydcqrfqe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163inxcacis.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ogambvxa.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163dyrugdyg.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163dqsffofk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163tquziebr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ydhcjojk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163antqkibq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ubnzmoos.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163mejrpxxp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xmcwfwzc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jymesshg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ebficicc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163uszsytrc.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xwuvbtdv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163aldpymaq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163insplybz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163nrefdgom.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163kgjyseia.html

UserId = int
来源：http://www.aibaodan.cn/163eqecppet.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rsyblyku.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ppusuifc.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rvbdakrl.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ervomzjv.html

[U31] Py：单测
来源：http://www.xuanzx.com/163azauxnsn.html

python -m pytest -q
来源：http://www.sxryk.cn/163zsldsuxb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ckbffzet.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xvqpujmn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163hzpyzixx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163amqpjuwa.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lffrfden.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xnfyolob.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dqrpfjdn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mmvsdzeh.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wnfjsxrv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mmykgjjv.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163kymtyack.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yezbswib.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dbpjmavn.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163dsvlvtte.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163uxakmyud.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vmmzjfys.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lutieivw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mciufqjn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ajcjazem.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ijznuhrh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163nlxppkpu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fjeiuhje.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xzdbzmqz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163vpxykywk.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163wglbnjlh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163dpvsgyyf.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163zanlreif.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lqdkggyg.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163fexhillk.html

?string $name = null
来源：http://www.aibaodan.cn/163tmvzpjix.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163iqklaakv.html

int|string $id
来源：http://www.aibaodan.cn/163yegwoizp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qgcisheb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163zveuxkoi.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jbazmukx.html

public readonly string $name
来源：http://www.sxryk.cn/163vzmpzshg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163pimulhto.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163prnneydy.html


<!-- 参考信息 -->