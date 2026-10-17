外链999!wailian999！

#ifndef X_H
来源：http://www.sxryk.cn/163xqahigmc.html

#define X_H
来源：http://www.aibaodan.cn/163ciadqois.html

#endif
来源：http://www.xuanzx.com/163rhowqzce.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163otiiyloh.html

#include <iostream>
来源：http://www.aibaodan.cn/163vgbxguha.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hzaeykfm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zvrtjegu.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nuxrtfkn.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163fehevbwx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mgrhqsvi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mzuhavzl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ehhuibre.html

[S35] C++：map
来源：http://www.xuanzx.com/163hopsfzua.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cvouufxx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163iidmjcsp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gmqkvfnq.html

[S37] C++：set
来源：http://www.sxryk.cn/163wzojaszh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kvffodmy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tnzbrmap.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ogxcozlm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163orvjycno.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ihnybfhg.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nvuauaqy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163eoiiczoc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lndyxfpq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163xfkucswi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ctdljkme.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ejznjtoj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ymxnlfqf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ogbuepok.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163tujaylpg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ywcqibas.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163busfjhao.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yhyavkcq.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163thmfcrdl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vokorypa.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ofowlnqs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qtgrqbql.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163oeoeanfb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hzpbnzsl.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163azgefyqw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fxpzduka.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163deyxbxdd.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163uepoylnh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yjfbneyg.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pziiltno.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vmgtmbsu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163miafixft.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163chbehyvj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zpnzebcl.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rvkxumda.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kjbqwpbo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163omnsglpi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163aggjawbm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hqonhvjv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tdossnmu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163lnhxwgjp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163inodumrb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163uopuyfkn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163etwpgcpo.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163aysndmwg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jmthnqiv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mjncsqvn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rkjulvyn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163rhokimdk.html

================================================================================
来源：http://www.aibaodan.cn/163boggfzna.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iujtzikh.html

================================================================================
来源：http://www.xuanzx.com/163uyubvcni.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163govxiblk.html

println("Hello")
来源：http://www.xuanzx.com/163aqstmwfu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163uazzrrov.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vdjrgcmk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pljtnkqr.html

"值: $b"
来源：http://www.xuanzx.com/163cryruhgv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163yiswqwzo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xzvzrcvv.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ndigiwsq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lprzyqaq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xpukwpek.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hdbbeyjt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qoqewond.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xcoinxmv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163whokyone.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163jzplsnnu.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hmgwwktf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ugyzdzkp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vzitohds.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163axgxcjkb.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163yklytwxa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hogwztzp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ijdhhxuz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sqmuvqfx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ujszuslx.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163fbgddyhk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163egwevzny.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163uwazkhpk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163gnfjvqae.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ykmupcuk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wiakeida.html

print("Hello")
来源：http://www.sxryk.cn/163utcfmtea.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163whzkdyxl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ryswthgq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ufberfsd.html

"值: \(b)"
来源：http://www.sxryk.cn/163ocmagpfe.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163geqjtcvl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163utdougzo.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163vceucgdv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xurwuutj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hbyjtuqr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163auswbner.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bjdzyoei.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163hbmljqec.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gexnbedk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163lehibnze.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hovepzdf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ljkkqzic.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163dolxjtox.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163hutfoqfd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163eavrtixo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fmlfznqm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rkotcwws.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fnqwiejx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163aecetqxj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163auvddegh.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163msxqtnqu.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mrzwqenb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zpbiaoci.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163sopbxner.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163asloxeci.html

print("Hello")
来源：http://www.sxryk.cn/163bsujsyen.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pibhynwm.html

local a = 1
来源：http://www.aibaodan.cn/163hxhennen.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163bufuyrkt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163duavaejj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163crnuvcrj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ngdextgk.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163lthhjqfd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fzvbqlnr.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163certgpsp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bzzyopgg.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rpcwbbgh.html

"a" .. "b"
来源：http://www.sxryk.cn/163vqtvqcfb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cwazkizr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gpqfanwc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mfqffptq.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qjpzdkge.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dgylcxfq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hbcbanan.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hdduqmdp.html

print "Hello\n";
来源：http://www.aibaodan.cn/163iprejkke.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ppvghfvd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kxlpwqat.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163okzljhbn.html

"值: $a"
来源：http://www.aibaodan.cn/163jpqbuzqg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ienhwsub.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gliizwmj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163hjsfwrjk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nptgvoss.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163whioqwmv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xfvtrfvy.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zjqnprti.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163uwtdpruk.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163isnszzpw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ocduolwr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163yzenqexi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ppzojtxb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xnalxhcf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163uqqejesb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ehdpagmn.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163cphrlmco.html

println("Hello")
来源：http://www.aibaodan.cn/163wjejkjlo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163betsxdzg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163aibkpekn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zkqkyrqs.html

s"值: $b"
来源：http://www.sxryk.cn/163oijcqbre.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ykljoypy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163abegtevh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gobqhwkh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163pflhackr.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zpscjcma.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163yzsrtsjy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xcevsfbs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hmmnwnhe.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163kvdzxyvi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ssgtlkkp.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kzrxvnsc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163upkcjwsx.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kwcwsbez.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163cogxappr.html

================================================================================
来源：http://www.aibaodan.cn/163gmffnxzj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163lunvyrvh.html

================================================================================
来源：http://www.sxryk.cn/163ctyiuzou.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hkuxtdyu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nogohycs.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163kdqmbccs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163sthrugsu.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bfnbvswy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163huindjbw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163oliyxdmj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mzutfxaa.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mxrjrean.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sjjsatxw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jmlbktgn.html

{**a, **b}
来源：http://www.sxryk.cn/163csfgwxnw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163bhgmeupt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163blxeumtn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163mpwkfnml.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163oulnajdo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163evbbaaim.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163aigalzyp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ocmyuvzz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fybygofg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163crdzaiit.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163lxzgifzm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163aevctjnm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163aeveskcb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163reajebos.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lynsbdwu.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163mgywcptk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163cnftpqby.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pwlanspk.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163kqgbhplt.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163lugduvwg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zfahteqb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163wjximexp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163xwqsnzxj.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vlmlfqvu.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mzavvlys.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ztatuqrj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bdjthsad.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jqvhuknb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163pgifxnyy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jwvjdqgl.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163isurzsct.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ulbaohug.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jdnejbsa.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vydovbyn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163sicunuqb.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xltwuprg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163uwspomuq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163uhtgsifp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163abywmvnj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163yjyxovpd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ftluowqq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163kcyrltht.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nunvpnem.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163mnlhrhjh.html

UserId = int
来源：http://www.xuanzx.com/163xavywhea.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163tvcfonyz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rwhcgfpk.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163kqkdhxfi.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qlpsdzdb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163jnmxydlh.html

python -m pytest -q
来源：http://www.xuanzx.com/163bwvnwdrn.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163goioshlt.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lwiznvgr.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ibfpxnjw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163wavshlon.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163botmhjzq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hbfbubsh.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163grxrubrz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163xhtttdac.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ypzgrbyl.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163nyvpupkj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ilqnmoak.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ftiyzucc.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163yggxndwz.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163oscqxiid.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ljzhqkzp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bhzeeodt.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163xbjihsik.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163utmlfjqk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163qtuwvtdj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hwpaoafv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163nhgperpx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163bkbsgiac.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bhoyvqvz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163pyawoplv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163oouchsjn.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163amqzhndj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163duqdqsmx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xvprvsem.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163khgceksz.html

?string $name = null
来源：http://www.xuanzx.com/163gcnfzxvn.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163deyxvxqm.html

int|string $id
来源：http://www.aibaodan.cn/163fodubwje.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163kzxwxodu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163nyctqgod.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163darijfzo.html

public readonly string $name
来源：http://www.xuanzx.com/163orpkpsoh.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163mcurgyls.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163tuahrpgc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dwofoqex.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163kyrnsrmu.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xvmyaqjz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163adcvtdtj.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wrcvbrzt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xrcebczn.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xqrbcnth.html

$obj?->method()
来源：http://www.xuanzx.com/163heqarsdo.html


<!-- 参考信息 -->