外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ofczhwtx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xaelzdrl.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mjxppute.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qszqmtfr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163msasdehw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163eyikpjih.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nlzxyupg.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ptooharx.html

#ifndef X_H
来源：http://www.aibaodan.cn/163evlkqpbf.html

#define X_H
来源：http://www.aibaodan.cn/163ssxhvghh.html

#endif
来源：http://www.xuanzx.com/163cilnpxfr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ulftrqhf.html

#include <iostream>
来源：http://www.aibaodan.cn/163xexreyny.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tblpytju.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163xioskloc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kddorrqv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163unkeasbl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uvyvbfjz.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163qfbpflya.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163mfgtkqrt.html

[S35] C++：map
来源：http://www.xuanzx.com/163kvhefnkz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xrlwvarl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yiquxqip.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pwkwzpik.html

[S37] C++：set
来源：http://www.xuanzx.com/163pmednczu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wsiqeqzp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yuypvjmt.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fttixadh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qssrtovm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gmpgtlux.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ggalfpml.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kkchnrqy.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rhcbiicm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163znpdpcxa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163sqyvaams.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163lrtqjlal.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163xyqpremy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163rhsqtwfe.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ublznepi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ldgduybp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ofrdeqig.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163pqtywequ.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163sbazlopd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fxfbtwju.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kekzphfq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163rrglhdpl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ibpprtdz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bzdtqowo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tdwivzvx.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ceyriiot.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163juwchdiv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fwifaiaf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163fwphxbsk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yxhankhz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163wyscczgy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163etljxehd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kiwywifa.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ttktcsbm.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fjjwgkyq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pcbmyhep.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163fizgqweu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163erbtgspp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163kkpdpdch.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163eovzysvf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ztqpdavi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xonhfchs.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163foonnqzj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cwjgsgwv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xjelfrsw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nouxtfyw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163eeklotlg.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kwujvyir.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163iyaalvpo.html

================================================================================
来源：http://www.xuanzx.com/163psoughvo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ermprvmk.html

================================================================================
来源：http://www.aibaodan.cn/163twukytpb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wzwlyvtx.html

println("Hello")
来源：http://www.sxryk.cn/163uqygxzcr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kgjlqtma.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163nhgihnhr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163debeieol.html

"值: $b"
来源：http://www.sxryk.cn/163ozsezhck.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fzgjhdya.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qoconmmr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lrczcnvw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163onqdczfy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uvxuiuvv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163qdkcbeps.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163waojqhmz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163uerhlwte.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dzwxeuad.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nuzumjbe.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qnkemqcy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ufsxzffg.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mlbnyamr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hvwhxtob.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rhefdevn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ugofzhii.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mgwipryx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bpilhvjq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163iinaaapz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163xmwohoip.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163warjyrmv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qpvymqii.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zzlrqlio.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hwmiitgm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163imjbkfya.html

print("Hello")
来源：http://www.aibaodan.cn/163ayvwgpgt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rgftkgbk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163igmcwqik.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kukxgzql.html

"值: \(b)"
来源：http://www.xuanzx.com/163fldkwtjx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ktpbsvxx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fcvcxwvy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163cpgfibck.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163aesuyifw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hbdiatdz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ldglkydi.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mynihumk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163thfhaake.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zzvzmkeu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rzzsguzg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mensvcod.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xypbotps.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qnynnusu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vivibtpn.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163fhgtqind.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163uzafghat.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kmwtdakb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163atjojgcx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xankolmb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163stzjulaq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wjinnaxy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163lmzzhyvz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lkkqmbir.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163lrhlmaia.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cfkuwqvf.html

print("Hello")
来源：http://www.sxryk.cn/163gbadywav.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163wvdbaiju.html

local a = 1
来源：http://www.xuanzx.com/163gyidmwni.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tmblerkn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163cbxlreln.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163wcndncth.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fvgrqpty.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163mkokaira.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ulzawbgf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vjlmoval.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qftjexdh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163teavhllv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163uneiweap.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gyeeordt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hgkdlfks.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163eleuupsd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163fhstfdsg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rwysgrch.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163njawqrgx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xehgfhgs.html

print "Hello\n";
来源：http://www.xuanzx.com/163piukgypj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163zeibncvd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163afnktbyn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hnxjhezr.html

"值: $a"
来源：http://www.sxryk.cn/163dmrpyzhb.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lhblnvba.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ljgluyaa.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ydzathkg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163llbkapgb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163mknbiico.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hzsrwgso.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hmjogstc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kysgogqo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163znmiipcv.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163esedjyvy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fjeebojv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163dbqsmgta.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163oanxaznm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jriscpgv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ysxcrule.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gzixuuji.html

println("Hello")
来源：http://www.aibaodan.cn/163ucasbrur.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uiwctwdv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jaftvhkw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tzxcofvp.html

s"值: $b"
来源：http://www.xuanzx.com/163qwkabnnv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163arlxruce.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jzrconsx.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nigjoiun.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zexzsbhj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163umksdzbw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ffrpxdpw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hdwbemso.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kfqdherj.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vbtgeoxx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163uwlidpbz.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163wnyysblg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gpsvczjj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jeiqurtt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163frgmcuxz.html

================================================================================
来源：http://www.aibaodan.cn/163fhoyixuj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fcuuyndc.html

================================================================================
来源：http://www.aibaodan.cn/163hutnvtsv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163uqvcufao.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tjxfrfoy.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gxbtijgu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163itrnswhw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163muwpcdag.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qwayotji.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qoyrnuec.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kxvolyyu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jffqerwt.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fdvcdogw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163akgndyfk.html

{**a, **b}
来源：http://www.xuanzx.com/163ekbtzqps.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zjumdwco.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ifnysaag.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ybzaxosn.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rakvatft.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xysnygdj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ymltcjng.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ygnvwulh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ptzooaod.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vfnfsrii.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ozoqpxnp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xyjienjc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dozvqhir.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163wupkwxbi.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163domfvydx.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163culdpnwh.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zjerrjed.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fbsgeiln.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163sdrmhhof.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hravjrsa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163tjpyqwms.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163yeoxukgh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163pnhkicsk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163viocjpdd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163gudfiqvj.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163yulngxqr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163datqlyex.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163qdtggisb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163wiyaclwx.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lsosnvvq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ykqerluh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163knxaxmej.html

list(zip(*m))
来源：http://www.xuanzx.com/163gzkotayi.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lowukrta.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163zklhqmjo.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163uuwiltmj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163oueltqnw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tpjxywyz.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163bmclgpke.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ukjnzwaw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163cvsjhnys.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uaslfrnn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wtivcdtf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ghgoowvu.html

UserId = int
来源：http://www.aibaodan.cn/163dfglzajv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163mgflynhg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163unsimuto.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ukkxdlnc.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163czoaftxi.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pohgnwvv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mhpputrz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gidedtkg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163cdvbiras.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ggitwfso.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cubgjise.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163upfhrcyz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163dawoajbq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ojdjfipg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163yqucjuhh.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pqcfvqrk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163kpobovyx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163xqvfhtcj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163pgtwsfew.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163clmrlrfx.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163izgsslnr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163dvnioxrv.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163slmpfdsf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163volchxoy.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gbnutqvz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kuorbvvn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xllpckif.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ihefhznj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163rdvvkwfo.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ltwetcpo.html

namespace App\Http;
来源：http://www.sxryk.cn/163twtjcykq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163imemxtmi.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rpeuwtxc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163uhdfsgav.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kuzuhxlr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163skjhlndi.html

?string $name = null
来源：http://www.xuanzx.com/163ontbfbyn.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163khpwvmub.html

int|string $id
来源：http://www.xuanzx.com/163uugaflqx.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163vgorhyqw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163njtpyiyt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163awfojdxb.html

public readonly string $name
来源：http://www.sxryk.cn/163ueqwgwkn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163fpmkmhzk.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163htsjcpqz.html


<!-- 参考信息 -->