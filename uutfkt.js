外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163wgsscvzr.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vdyjrawf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cuirgrqj.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163gqonznwt.html

static int counter = 0;
来源：http://www.xuanzx.com/163qqwbxoda.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bmdvbcmm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163bxhhpsgk.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vnlgjfcj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163iytdxxxe.html

#define X_H
来源：http://www.sxryk.cn/163zirickga.html

#endif
来源：http://www.xuanzx.com/163iiiwdgkj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mbcgksib.html

#include <iostream>
来源：http://www.xuanzx.com/163rhxuiexl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jqoqgomo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163sthllelb.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163derueouw.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rdtjlvky.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uwfjpice.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wuvdezjm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163igzkbdwh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pojtsapd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zfvrjxkb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gazyuwrw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xbajrcil.html

[S37] C++：set
来源：http://www.xuanzx.com/163fwxmerkx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fkmzeecd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lsldaavs.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gklrjsbr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sbmhgklv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163upkiiffp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vukscnqk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ondnwsyi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163slfeprvf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163erkprdje.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163nljticcl.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dlfcfjfi.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163efuqpvye.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163eaclyjlj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wngvndos.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qjkzouhg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hpdedxvk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163urqutddu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163upnxlchj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163eqbfbpnw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163muoaeuep.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qddcoanl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163rpvnwaay.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wcahipgf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cvmaqhii.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tfndenvr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ipxfbwcl.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jhwcosmj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dslzrmbb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ocsgyows.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rkdyhode.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nvbtlyhe.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gelonbdh.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163yokydtwc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163zomjpykk.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hsuxlvwg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vgxfxyfd.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nmdyeqxp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163dkaqkytd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rmytwerv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163imhccswh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163alranbov.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163xkyzodcn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163mxlrvank.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bdrvmqxs.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163pmhaynbv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lzdqpmuk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hoostwnd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gkwhegba.html

================================================================================
来源：http://www.aibaodan.cn/163ozlaljym.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163crqzayec.html

================================================================================
来源：http://www.xuanzx.com/163kvxjvkhj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dsjlbekf.html

println("Hello")
来源：http://www.aibaodan.cn/163cigrbhuc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lrluqfrk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bvsoootp.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163sueofevv.html

"值: $b"
来源：http://www.xuanzx.com/163lfgperlt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ksjdrlwg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nqaxdear.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yvcquail.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163rdenettt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uumnmxzn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163gnplhnqy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163yvayhrnz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vaqbficq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ptikuslo.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163gicuojdl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vuibcxcn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163iymidbhj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ifehuwjd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163rguvgrcc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rkwnhkbj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163qabitohn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xktgpici.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fdqcatzv.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mvhenxcp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ivfwqjjj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163udggojin.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pshjzwkn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hvtbobri.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hlrmdnlq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hrzecbco.html

print("Hello")
来源：http://www.xuanzx.com/163ffhkeclz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jwzdtjxe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zpynlsvx.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dsjurlxl.html

"值: \(b)"
来源：http://www.xuanzx.com/163hiizjvih.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kbarcosa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163gplmpqmg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pbnpnsgg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lryexeql.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163esdgajer.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kdlixmxp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ascqsynd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rhqxdfjr.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zsxixduj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jawxiljp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yjfzddjj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hgtgoqvl.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ypqxcrct.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163avwsqxxg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163nwepcdha.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wthdkknl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pojlgwaq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fvlpqhip.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163khagstvm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163snetxnxo.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163addjwfax.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ovyocsuv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163nibjatov.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163sfoqsalg.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ixyhzhzi.html

print("Hello")
来源：http://www.xuanzx.com/163deejldao.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163srcvrkrp.html

local a = 1
来源：http://www.aibaodan.cn/163kmoumyzk.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163osgoescp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163izrcdanm.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ojlzyjrv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fbxopecr.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163lussbxrf.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163uvhwnbqj.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gjsjhili.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163gpnfsmsd.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163moyhcdhm.html

"a" .. "b"
来源：http://www.xuanzx.com/163kmsmnseu.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163iyrcvcsr.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163gkyueuar.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qonzakhu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rqnvztbc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kfdxweex.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rhitenbb.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ssjagysl.html

print "Hello\n";
来源：http://www.xuanzx.com/163ocwjnhac.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xiqaqiwd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wbkngbmx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163cdbdywga.html

"值: $a"
来源：http://www.xuanzx.com/163cbrsxmmg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ywccvrbb.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ucwsrcdr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163txcchcpb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ckbrcokq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163fmewrual.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163okfejuba.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ukjmmjtz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163qdmqilur.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hiznchtw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163naghicks.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wdotovff.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fjapobbd.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kkeulhgo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jyxmluer.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163iwampout.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tqwyjlbq.html

println("Hello")
来源：http://www.xuanzx.com/163wserhdty.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hzyhxtxg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ygejluyp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dwvddjlt.html

s"值: $b"
来源：http://www.aibaodan.cn/163yigumxki.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163okpcbnwh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wheasodj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pdjwboli.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163tnhcqzfa.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ejilxowe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xvjoujqf.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163arqxeauq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163njozudpm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yiklpxqp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ynngirna.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163qbawreng.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tfbpryuo.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163hossmxhl.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jowygdjg.html

================================================================================
来源：http://www.aibaodan.cn/163ivpvtsce.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lndcicmt.html

================================================================================
来源：http://www.aibaodan.cn/163ljovknee.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pwawotpx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jjlvrxpm.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jbmawvwp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cauvwyak.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bxbuafld.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cnwncghj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ddvjunnf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163utbrhmfh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163tidloinh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163paynjydv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bqifbjie.html

{**a, **b}
来源：http://www.xuanzx.com/163tqyceyef.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163wyxotbpw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dkmrzcxh.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ojsqodww.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bmhqxtke.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163uvjoysor.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sjhhltdg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163prcfcige.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hprolutw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bzrlwzul.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163eoznlprp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zpegerdn.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163cjicemnv.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gezahsiw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mwvhqnmu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163fsloiuar.html

defaultdict(list)
来源：http://www.aibaodan.cn/163maralxlu.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zaxnpblc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163rssmgyml.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163solgzlma.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mpyigxem.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163grlubfyd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163tdwvtqjf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fsxvtoqc.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163kinatsvq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pvnjdcfe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xcarbxcq.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ztatfcfp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163yxpiokla.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163cfkturzn.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zffzsnzs.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163qhudmpsv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zjyzqkqk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qqncqqlo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163snclpuzr.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163iiochnle.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163sfigphdh.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uptkwibj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163atkskbte.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163eobqivcn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163szqmrhym.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163snueeasq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163rpcyyeqg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163epwnbfnk.html

UserId = int
来源：http://www.sxryk.cn/163azgrbtze.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163bjtnimyo.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jkltktam.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163eortokdb.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fwdonxei.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163pwpkrmde.html

python -m pytest -q
来源：http://www.xuanzx.com/163exsctwwd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163klnrdhzq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vrnenquy.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163zncfaxlz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163viajxvxs.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163darvnsjy.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lmkzxmqe.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163uivxcxot.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163dgbpcafv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163mumlhupt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cxhexynw.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yrjudczj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wyfptjjg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163mrmjmebq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ogiruqad.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cyeradzp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163pxgapyxq.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kdnouitw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tlckpugi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163mkpdskjt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163umamebze.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163msbsyopx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ppcpbuwr.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163gaqqughh.html

namespace App\Http;
来源：http://www.sxryk.cn/163chhnftqn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ejugwlge.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kwwhssnm.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zsfujmid.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163riiylrkb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163letwrmkj.html

?string $name = null
来源：http://www.sxryk.cn/163pbieljao.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ikowzvdf.html

int|string $id
来源：http://www.xuanzx.com/163wcrgmtfe.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163dmfbfgth.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ujhjppqd.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163xergctws.html

public readonly string $name
来源：http://www.sxryk.cn/163owjxmlwf.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ozcqrjaj.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163okfbmklu.html


<!-- 参考信息 -->