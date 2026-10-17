外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sraovwie.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ingeumnd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163oxvnxnhv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hbzpmawl.html

static int counter = 0;
来源：http://www.sxryk.cn/163oumbwubf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kjhenozx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lfblvujc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mmztotox.html

#ifndef X_H
来源：http://www.sxryk.cn/163sahvwxoh.html

#define X_H
来源：http://www.sxryk.cn/163avvrkfcf.html

#endif
来源：http://www.xuanzx.com/163khayyrwx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163uyavbeeu.html

#include <iostream>
来源：http://www.aibaodan.cn/163takzmnqo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zbbrhhxa.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163miabqklm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aqwqkbtk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163eejcmefq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163stcxjapx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163utkfbkng.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fnxxwkpb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163kefwqwho.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163brujdvqd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163oyyytudp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ecctxvyz.html

[S37] C++：set
来源：http://www.sxryk.cn/163gazjnpwd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bhszmuhd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bjhxvuxn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163alodhnlf.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vypwceoa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163skzsgpay.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163znhlppll.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gqnjpceg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163onlqyyxs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vygkjwhx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pjbuqyqq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163uxzvymmn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163swrqaxfe.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vdhztzzn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163piiayyhx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qoiiwfts.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bysatjoa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yfxgaeua.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163efopabjj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163cvsnnyww.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163swygtrqs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163nfdgkvxj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gjowlhjd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163iexlhxlt.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fmiiqwiw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tgjzdpkg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163syffctgc.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wcsuiwbp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nyfznvnd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hntkvszv.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hszvlihi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163unrisrom.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163kvznfnjp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163psfigjac.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163asxmgruz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nregbrbv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163krbqhinj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zlocrikk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163aouflbur.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fdajhzlc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kjcaajtz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163armzcklu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ysighhfg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dgcmxqlu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ukmztjta.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163booongdf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163tgnritad.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163qatduowi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163bphpqryd.html

================================================================================
来源：http://www.sxryk.cn/163wtpyokmd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jucellky.html

================================================================================
来源：http://www.xuanzx.com/163wdnvkqzh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qollmuli.html

println("Hello")
来源：http://www.sxryk.cn/163faoomzyu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iskvykcz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163njjsbknt.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xvelmtzc.html

"值: $b"
来源：http://www.aibaodan.cn/163ycixrqml.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ujmhkumc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163dhqrofwu.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vitellbp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tcxtdlgh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wekxflsk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vojctwxd.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163eopeqvsr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ccsurkkb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tavztexu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kkrowqkz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qdqzrezb.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wpuzsevf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163knlhbkzn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qlfiiikp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163uwkgfttp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163wtgogxdz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ymfsfape.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jjzqlgaz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163iyezkqfr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wvarhnmd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qddonqug.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hhmfzlqd.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pnkittwf.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163fsryaqae.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ufjklcmn.html

print("Hello")
来源：http://www.aibaodan.cn/163kzjeimqn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163gcuhyobz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pxfwcwia.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wbrfydyh.html

"值: \(b)"
来源：http://www.sxryk.cn/163fdqxxqcs.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ajhgstbt.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fqfyqjsm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fcpubewp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163akhoysuo.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zmtpmrzr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163prnjhgtn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vnuwwjqx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163zpvdkfuh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wsdqsbhd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cwgshkzc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163atwazxnv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mvirtfjt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rfqzckdi.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163rbvkjdpr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dzlyftsq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163natdxhkm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163lvpihode.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163jgwyxgoz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dvksjwtw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bevwycxc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163yhfhthrp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163aownawtp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163utpvfnkf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163teojwgbd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zxehusfd.html

print("Hello")
来源：http://www.aibaodan.cn/163ozkrveem.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163juskfopo.html

local a = 1
来源：http://www.aibaodan.cn/163jhdhfghc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163hhahzsil.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163assmmfro.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lsiiysbo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163tlzxikls.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wbpjjfxn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163irtxwnop.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mouwawob.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xbdvksad.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163xjptylhs.html

"a" .. "b"
来源：http://www.sxryk.cn/163cghurmtb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mjogqvyw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163nykfvyme.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cbegxqxr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163rayhjizb.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163dffdxtrn.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163dxwrohfm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wsomkznf.html

print "Hello\n";
来源：http://www.sxryk.cn/163xrpxzzzj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wbzdogqg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qjaltlza.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163wauznpih.html

"值: $a"
来源：http://www.sxryk.cn/163xiyuirpr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163brvnzoxt.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163tgvsayzq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xyjvbzdr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163rpsfsjnn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163lvljfkcx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fqvytbwi.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163smqpkkkr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ezdtkveb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163imomeasb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gniqprxv.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pitxzdpu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163pfpjfjba.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tabwdxis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163msvxvakc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kyuhnnew.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163vujsggtt.html

println("Hello")
来源：http://www.aibaodan.cn/163fgsdymni.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163slevalac.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rnpmapdu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zgfeihgc.html

s"值: $b"
来源：http://www.aibaodan.cn/163wzxyhuhy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163xyomrism.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163azyfewgw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163oygidtph.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163mgovvuiu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xnhknznb.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163pdmntetd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163rjmwzsmy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163erzdyxkg.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xhbzinnj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hrpypcer.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jrtqwzfe.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163svxhfedl.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bgzxzarm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bvplrjrp.html

================================================================================
来源：http://www.sxryk.cn/163zvoqoxft.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wtruogky.html

================================================================================
来源：http://www.aibaodan.cn/163ltqpebtv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bmllemwn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qhzwhadu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163uthtylsy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jqpvlbfj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hvlhdtip.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163lpiskijf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163arzdhehv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wqymmwjy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zzfuwyvy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dcxaftur.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zjlyqwzo.html

{**a, **b}
来源：http://www.aibaodan.cn/163pqvmlrua.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dxocpdfb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jkafcscg.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jjjzvyhd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163wkwlvooz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zqdhpjco.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ljqknedh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163stolpekj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jebzqgxa.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163osdpzuej.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163uyghqnjd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xclrfodp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mhdefciw.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ibcyewuh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vthrdtha.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qnqgrwtx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163mcbuuouz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163blnucotf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hydtuzvb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fbeafylv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163dwicgaoj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jpoyhzmi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163fjiaiyla.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163segnchfd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163olcemgsz.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kofulaye.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ifvaxqyg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163wthcdzqq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163yyhdjubm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jzqhbrnx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163eccdrnnk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163jsalzzve.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ffbkrmlo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163llgwmmjr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163uulgzodi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rxtzaqxr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zlozipvq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163scoyrfeg.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163alfxkdez.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163uulqmzra.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163etjoxqtf.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xmsqqfoe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rijgdqmw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163exmarvmz.html

UserId = int
来源：http://www.aibaodan.cn/163povfnlrn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163uvcaxdjb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mhfqgupk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163dmmzouky.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oodbjpqp.html

[U31] Py：单测
来源：http://www.xuanzx.com/163pjyzrtit.html

python -m pytest -q
来源：http://www.xuanzx.com/163svwvzrec.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163axdmczbr.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163reggrxvt.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163eaidwgkp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rjwazwnn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163msadgyck.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163pituhswd.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163eyzfvzkc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163yjhdyzjf.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xemfkncu.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163tmokglxl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pwvntybj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tfcwtxah.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kzfeyeeo.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163bzblsjha.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jwozrwbo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xcspkkrq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163edgyhhak.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zqikdpdn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163aipsekvn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163magsedyq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xjcfzcky.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lxmfnlkg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fpnetbts.html

namespace App\Http;
来源：http://www.xuanzx.com/163gwmctfrj.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ghwawfje.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zeakjwdg.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163kdjoufxn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wklkripa.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163jseyjyzu.html

?string $name = null
来源：http://www.xuanzx.com/163xvkihtry.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zxlejdta.html

int|string $id
来源：http://www.sxryk.cn/163uqoakdhx.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163lduragsu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163copzyunb.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163dzjkdybz.html

public readonly string $name
来源：http://www.sxryk.cn/163zapfsccg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163odaxwuar.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163fdckfaeb.html


<!-- 参考信息 -->