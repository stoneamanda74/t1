外链999!wailian999！

#ifndef X_H
来源：http://www.xuanzx.com/163oxgortpp.html

#define X_H
来源：http://www.xuanzx.com/163extifnhz.html

#endif
来源：http://www.aibaodan.cn/163ggqbsuzu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nhrkhwfh.html

#include <iostream>
来源：http://www.xuanzx.com/163elymqvvt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fxxyxjug.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qhyfywpq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ipicmlgz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ssgskwdq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gkwsjuvd.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163uepirlzk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cjzcczrr.html

[S35] C++：map
来源：http://www.sxryk.cn/163qjwzezam.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163evochoau.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xayxcmdm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yblgbrqb.html

[S37] C++：set
来源：http://www.sxryk.cn/163bhbvstif.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vbvavhjy.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dvdbtexj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163azipuxou.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163abulsdjk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rspodvpa.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163guyopeld.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mpxiwckl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uagdbhtm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ftssuqxq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hzokxolj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rzcnzzjr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163spdcintg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dehrtyqa.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163sabnrjls.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163hwiaacvf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163aqafahqz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163kgimewgo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163husybzpl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163veheyafu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fionguxo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163fisrcrlx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163emuoaoir.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163oozikvld.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xaedyrve.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163cgjhxlja.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lofqrmvy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wyqupimz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qyvtgmud.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qwgjdkci.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lnurrjlu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lvdsgpue.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163cckzdzgt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ohltcwpq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163zuaylhmr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ydtzvkti.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fdqunbfg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dhmlwhmi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163msltwjxc.html

[S56] C++：optional
来源：http://www.xuanzx.com/163yzvzugxt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nhcqcakx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ldbzunix.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ragrggjj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163euhocryi.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163abublfbk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163djhxsbuf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163cxsbbbge.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163uriumpld.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gpisdumo.html

================================================================================
来源：http://www.sxryk.cn/163ecfihjvb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rwzhrmbh.html

================================================================================
来源：http://www.xuanzx.com/163aslyurwt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vgpcyakp.html

println("Hello")
来源：http://www.aibaodan.cn/163bbzyrgon.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163bqsavmgm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163jhgehtat.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163esdiudng.html

"值: $b"
来源：http://www.xuanzx.com/163ahstzonz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163plzytdvd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pupsjnha.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bdzcqigi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rubjlzle.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163vmgotjcj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163oamniyun.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pykbgtpu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qvjntmmz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uacxelnb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163emchmvdb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xnzqenty.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vrjfdyim.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vklsftjt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xglbmmce.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163uqfjivkm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163apcwixpz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cmmvquoy.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163scabmrfp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163thzdakpe.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bjhenwiu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tvathtol.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ohaaspmx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ccytgnbh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163alyklihg.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163eyyheduk.html

print("Hello")
来源：http://www.aibaodan.cn/163wjtxzeka.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xcsiyger.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163squvpzhn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vpemqyxj.html

"值: \(b)"
来源：http://www.sxryk.cn/163qowsbbkp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wznzknvy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163pirvkhsf.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163wxagzrmd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ltgknsoc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hfwnnpvj.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163eltuzzep.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163esgailoe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dpsnkdbc.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gvthagov.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163aosisfiu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163oremnukw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xeqimode.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163asvabval.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ynmlrtsf.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pjackmdc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163etjdqdch.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163bxjqumth.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qznfpehu.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pstkpstp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163eekbscsu.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jgvgftzc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gwwjxqzb.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163oouzycwe.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cmiqpwpa.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tkdtuqko.html

print("Hello")
来源：http://www.sxryk.cn/163wqopsgyw.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163edsjvfbq.html

local a = 1
来源：http://www.xuanzx.com/163dlinxseo.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163pblsyddm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rsepedsn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163vdkeousl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zgbpqhwc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xtlcwshm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163nrqlclao.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ccwlhzjw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ndbifvps.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zxcyicet.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jilrtqrp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ayqdpjnk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163yfgxekbk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163newzlzok.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163evboblwl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tyuwycag.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fxlcafhj.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bigyhoou.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jgccqgfb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163krerztfn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163avwxnqsf.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163djfpavry.html

"值: $a"
来源：http://www.aibaodan.cn/163wpybhjje.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hpogaywo.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qvsggtca.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ufondisv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vvskzcef.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163rpkipusw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lxqtuirq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gyvwyqmm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163waavfdhp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xetnyegu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xmyxtemu.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sszqzgty.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163sfslykqt.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163sknbvbhx.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hkqeikql.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163owmlmiqp.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163lieyqlph.html

println("Hello")
来源：http://www.aibaodan.cn/163exnjdccn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qmcovpou.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qxqopbzh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xbnedtcb.html

s"值: $b"
来源：http://www.aibaodan.cn/163gsccfjyr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dlvfvaln.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163lhflurge.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163atbjlgeh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vvnlinzl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fxxligfo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163zyfxzpjp.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163rzdfvqzm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163anxloukb.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163eyapgmlv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dqffjkqw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jrpyadad.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dsnqcytl.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qdnufywm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ceymepih.html

================================================================================
来源：http://www.sxryk.cn/163sqqadvzk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163aqivtpmy.html

================================================================================
来源：http://www.xuanzx.com/163ijrhdanb.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163fdrgvgvn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uhafujes.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163spxcacfq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163uwrzqodf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ymxqrrip.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163qoqoibgx.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163uariypug.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gvovtvcf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tgzlxeqs.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qksbqbrr.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zdilsqwc.html

{**a, **b}
来源：http://www.sxryk.cn/163dxkxakon.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kecjwmdl.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163akfzfdmh.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ahquvyzn.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163iuqcoamk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163dghrmqbw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163jcbhdjoa.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wnytardl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163gkhliyak.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ehkonkax.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ixaepcej.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163upsntbld.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lolyxwkt.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hsknxqwl.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163osjjsjzc.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163sabtxqsh.html

defaultdict(list)
来源：http://www.sxryk.cn/163kyjucqgp.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163gyybzcub.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gmyyxsft.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ltkikmyp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ucbzbvps.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pjqsmnfk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163nnfajbtf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kugtyyql.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163oxfszgvk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163qvzugaje.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163njgwqkod.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163zqevftrv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ilsmnibi.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ukiorbjg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163kyllpuyv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hueobylv.html

list(zip(*m))
来源：http://www.sxryk.cn/163xibdjzaj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gypmxujl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hflckfkj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ffiitcxe.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163yitjkvvh.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163igytkbsh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hwpvcxeg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163crjcpugo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163rfocgpxk.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163pyzyrail.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163dzrnnkcp.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163arxyvzeb.html

UserId = int
来源：http://www.xuanzx.com/163dvydzljz.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163pwqgvlpz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163omlvuzib.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163narnxfsc.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hqsdilgn.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tyjjzocd.html

python -m pytest -q
来源：http://www.xuanzx.com/163ysbwxwrd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163upaatjxj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ktpjcjcz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163mstpbtwu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hhpxnjxr.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gxlawgjm.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ebczjrsy.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dgaddezy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163aucxhfid.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fxzkrehd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163scxujzut.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163bzdkhceg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tosaskly.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bccxhpks.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ddpznltf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gfcmcjtv.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jgiwcwef.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163kuisekhd.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rvkvjviw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163kvwikbzk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163utjfwihn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zxrnppgh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163shshqaak.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163repjvglj.html

namespace App\Http;
来源：http://www.sxryk.cn/163zjudssqz.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163lkbuaotd.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163briyglma.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163dhqzanqf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163moydakxu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163kpedhqmh.html

?string $name = null
来源：http://www.xuanzx.com/163qyxzprzb.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163hiztxleq.html

int|string $id
来源：http://www.xuanzx.com/163dezocurb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163wdcuzoau.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163tpcoxgwe.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163wzicbpxj.html

public readonly string $name
来源：http://www.xuanzx.com/163jhmilchp.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ultwaejb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ttjdxoxx.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163siwgdvqr.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163gwbgysay.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163upyaminw.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qcyqzdqu.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ebrlrfgl.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ufclxpdy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163svmiupeh.html

$obj?->method()
来源：http://www.xuanzx.com/163gsuggocy.html


<!-- 参考信息 -->