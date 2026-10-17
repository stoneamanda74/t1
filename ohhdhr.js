外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163esknienx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jzutuktb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163tdlbtdgf.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163lykmzhoy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163bdmtvrsg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163iscjikuf.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dtulgpwp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163oxisxfqt.html

static int counter = 0;
来源：http://www.sxryk.cn/163yurynzxg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163sxfxipnv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dnxjdmcv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163apriovwy.html

#ifndef X_H
来源：http://www.sxryk.cn/163iurzppng.html

#define X_H
来源：http://www.xuanzx.com/163ivulcefg.html

#endif
来源：http://www.sxryk.cn/163gimtcmfj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qzngnxkd.html

#include <iostream>
来源：http://www.xuanzx.com/163tffjnmjv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yrxvoenh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hyiqzvsn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qintojyi.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ooqfmchb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163cqvppesj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ilvmfzjy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163zwzeukpo.html

[S35] C++：map
来源：http://www.sxryk.cn/163pdfwqeag.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xkriyuav.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wljbzbnt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dwvjenxm.html

[S37] C++：set
来源：http://www.xuanzx.com/163ddfhqrlx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163muqocjhs.html

[S38] C++：排序
来源：http://www.sxryk.cn/163dhwibiga.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163txlsnstr.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dawchvhf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lorzwcqt.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ycigdehm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zmjgjqbd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zfwzzgiq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lhmtphkw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163czuqlnvt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qbvqxnac.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mqspfsya.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163agukpadz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163hugvgylo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163orsfsqbe.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cdwhcfhu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bqsszexw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163kqzfecjn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163czedadwm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qwflzrxj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kkosqohr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ggnyyojy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oawyopvr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bsmobjhy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163fsqgflyd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163mzltsusr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ttkxwvrm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163uqrtvguh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163onvfjggg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bhjjcevh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ejkwsnba.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qdvdhvya.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163iqweatdx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lrpdzjyd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jphufxns.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vihipvol.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jkwoyuzz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pvcdvbvj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gpsybtpb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kyhmiafm.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163frjdjnry.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fdlwbwnc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rqwnohwt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nqhzbasf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vprollnk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mlsheolq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163wynojinr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kcliecwf.html

================================================================================
来源：http://www.xuanzx.com/163wkuzuvag.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jfgpiadw.html

================================================================================
来源：http://www.sxryk.cn/163mrypafnp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163elcsemxh.html

println("Hello")
来源：http://www.sxryk.cn/163rdnrikhp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163jeihixig.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163imhariiw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vaylobck.html

"值: $b"
来源：http://www.aibaodan.cn/163zgdvvgtt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gsqhqmgb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ekgvswok.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163irmlebyy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qwtehxpg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wwqqlcuj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163poqhskbm.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zxknhgzp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qknemomz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163stavewgr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kfatzqti.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rmnokywg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qbvjoqrj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qmbpsxvw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zwvdndjs.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163updipddz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kvlbripm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163luydiwdk.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kzsuvjsp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mijuhcsb.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ivdeeddb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163abgfdcbn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bnoehsme.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rdvdookn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163egpclrsv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163woqvhbvq.html

print("Hello")
来源：http://www.aibaodan.cn/163nfxwrdhi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163umocycpr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mphoaiut.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163idhujsqc.html

"值: \(b)"
来源：http://www.xuanzx.com/163vgohdbdv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163knnlhufc.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163hwwffnll.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163teqnbjvt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rytmaafq.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163urgaqkls.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wqapwdgt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mwjffvas.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fmsrzrsm.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zcupzkah.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163quuxyjcy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163icptjxgt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rvgoautd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163sqfwhybh.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sdjpwwqk.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163izwayjam.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163czdjgbzf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ugwuusfo.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ijjsbxvq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cueptceg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tsvytjqu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dtppiafp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zamjssxo.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163bicqwsbh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jslcvbck.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kuxvlmmy.html

print("Hello")
来源：http://www.aibaodan.cn/163recbqjdc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lygbamqp.html

local a = 1
来源：http://www.aibaodan.cn/163tqeffnrx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gmmoprtq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163mugjlnyr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lpxnwili.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nqvcqjrv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hfscftzw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bfmoozju.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163krpfixcl.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iiglajfa.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163dfytwrsq.html

"a" .. "b"
来源：http://www.xuanzx.com/163stzqhbcc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163puvrvjdw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zjbtfyjz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163umgvdpcc.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163dlusswhd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163itrhunxb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163odezpheg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163owdjulyj.html

print "Hello\n";
来源：http://www.sxryk.cn/163bedqqskp.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163aaduvrbt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163sayopihe.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pgrntzsl.html

"值: $a"
来源：http://www.sxryk.cn/163qfievgbj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rgepwrtc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163lrvecuiz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ybddtkey.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163qrzioeuq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163zxalbloi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zpcssfsk.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163flsgjbyd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163aboqtcat.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fkrjjgjx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vasivkbr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163baclahfj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vewoyyfe.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163twwogioq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163hmsoqybg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163oldwpibm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163efhfviqx.html

println("Hello")
来源：http://www.sxryk.cn/163mpboogbx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nlblxntj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nzqplzcp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163sofqttio.html

s"值: $b"
来源：http://www.xuanzx.com/163tecyczca.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uxauglrd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163gnmqezpl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163oykdvfwa.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163shkqmqbw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163llvtcynr.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163gafjjjah.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ufczhccy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163isgevezc.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ysachgfj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tzyxtkxt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163osmhxvdm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163iudxzufd.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163uyujyxfc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zeetzdtq.html

================================================================================
来源：http://www.sxryk.cn/163hwfgyqbt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jfthdcxs.html

================================================================================
来源：http://www.aibaodan.cn/163mkbwzyht.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bglplvyr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163kxghrxet.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qbppqqde.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163pserxtmd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163urppyqwc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qfqfsxzz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qcpazcba.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qqbrztgk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mbwtumsb.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163enxtjzfj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hmekdsfu.html

{**a, **b}
来源：http://www.xuanzx.com/163egendceb.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vglutzhp.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163gbrjoofv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163auvhmyif.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pcgfketb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163yilxgvmv.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gkzmhhuc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163stikhzat.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pjjhzahk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163swsbtvmq.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163vkaaabre.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dxngiwbn.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163rghllgjc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jbeitddv.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fyeymgaf.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tzzyjszl.html

defaultdict(list)
来源：http://www.xuanzx.com/163rtpofoxc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163hwslnscd.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163wllgyjsy.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gpxaopsc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163pdztiuvj.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163nlcevxbv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ovfsnqzk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xivburlq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dstscbag.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163qdipkrgv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163eyyiybls.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163amtncmyc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163wqoaymvh.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163dbasybvz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163etukqijj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163lrvzmeup.html

list(zip(*m))
来源：http://www.xuanzx.com/163fyjlkdju.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163hzooducf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163sjsxasmp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163gecegxqu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jyutogrm.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163gbffjxki.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lkkoqkbk.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163hxerubag.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163iovkknms.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hpebewfo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ffgkbnax.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163duicempi.html

UserId = int
来源：http://www.aibaodan.cn/163zfveddtg.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163asnmbiqc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rxnpevjy.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163tytcghzh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163licekpnd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163sobvovtc.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ydfygqet.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163lvuxlphu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wtzrawfs.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ffhhrlej.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jslayuxl.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xeygwrjd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163njijyqal.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mlxvxqlq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163yktahree.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163glgpyabt.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163rsxkpnhq.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jemiqbma.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163qhjdczpl.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163tnliuddx.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gptytrkr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163talytgtw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163mrrrqhrc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163imdglahi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163srzqphbi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xrjuxxmq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163arcvihys.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sqnlgwfw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vtlgohyr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mommeqcn.html

namespace App\Http;
来源：http://www.aibaodan.cn/163uvzubyfh.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163iigodeed.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163eyeprtwt.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163nphcvmen.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163samokmyk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vvjapqul.html

?string $name = null
来源：http://www.sxryk.cn/163vcgkkvbh.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163yogprsff.html

int|string $id
来源：http://www.sxryk.cn/163qrfigbgb.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hiwrxwrk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163pmcyygxw.html


<!-- 参考信息 -->