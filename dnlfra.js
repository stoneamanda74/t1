外链999!wailian999！

#ifndef X_H
来源：http://www.sxryk.cn/163mbhddlyd.html

#define X_H
来源：http://www.aibaodan.cn/163sjgnmleh.html

#endif
来源：http://www.aibaodan.cn/163xgoixexu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rbfvlqor.html

#include <iostream>
来源：http://www.sxryk.cn/163wwrqmwsz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yotawyyz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yifjbydl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lcbodzdo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163gcofvwck.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163erbdkjdy.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163egbreofy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lkujhqoe.html

[S35] C++：map
来源：http://www.sxryk.cn/163fwokqitt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dxyrecnh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163pyqwxayo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fertctsl.html

[S37] C++：set
来源：http://www.sxryk.cn/163xehxjnjs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zdvwkios.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vzxjrukw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pucfjrvs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wcgagqus.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qlzmijfz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tqdzzhiz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163hkhcdtek.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163gwvrwbfu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oxcufodf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163whjswyea.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163elzfrwol.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mqczqgbh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163nnvtsjhg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qhnpqlmg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ewoftxfg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qormsdhz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vwyfqvzu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163iprekaak.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ihrtsvjz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163mtpqwnzb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lurhntwj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163elliztnp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163tdoyyzls.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qyzafqiu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bjkkzwfc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163trbmjpfw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163klmvcrze.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ftkkmpbu.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bpjelaxw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yrghfdkc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uwizgjjx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qvgjkyka.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163sjdivfxm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163iqajwpoj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rdvekieo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163huhdinig.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163fwgnwzmz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bbdparqc.html

[S56] C++：optional
来源：http://www.xuanzx.com/163liwkropr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163nzgkjvwt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163sqntdvoc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tsomiibd.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pwldbrsp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163clabqxpa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163wememsgk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163poirvuiu.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vwzolgea.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vcubwoax.html

================================================================================
来源：http://www.xuanzx.com/163mhyhhkbz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hqjkqeix.html

================================================================================
来源：http://www.sxryk.cn/163qkdfkfji.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ovlvhtqh.html

println("Hello")
来源：http://www.xuanzx.com/163yibbxjvu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zqeqagfy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bpljlugk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iidvoqbv.html

"值: $b"
来源：http://www.sxryk.cn/163ggrrcpal.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ssaozxns.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mjqimmes.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pmavxlum.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fmekhnzc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163wrnyjfgr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gzdwnlwj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163myphdmbg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163lqwrmkhb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163wytrezec.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hnzplrwl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mmgvxvwn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163erzjfxvt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163igdplhay.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163plpspqqx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gzsmsepp.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jkpjhreb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163gviiumad.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163sehuhtcr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163hkzrhnpe.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qfqvmuzu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163bnamozml.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163iqdacqig.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xdohoddu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163idggaajn.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163iukfyvfe.html

print("Hello")
来源：http://www.aibaodan.cn/163qgiuipsi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pscepxsu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nynskzlv.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tbdgwktf.html

"值: \(b)"
来源：http://www.sxryk.cn/163vabftvix.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yztlznme.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lfrokxpp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163owzfzmvi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hvptozbo.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ykzvukqs.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yiyxvrgi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mfibyjqf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163aedenmfy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163siawjdze.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hrpgepys.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pcaiaunm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qosqsthx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163iqflxrov.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163meeerqii.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163grtfsvht.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vcrepxit.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mhpwgtgg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cpvrslqy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jvdaugic.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jozrohox.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mxfrxcfn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tuzzoyru.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jarpdthu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jfzjruwo.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rvzabxgy.html

print("Hello")
来源：http://www.aibaodan.cn/163tbmjbkad.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ptggnpor.html

local a = 1
来源：http://www.xuanzx.com/163macwvazm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zblzkmpr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qxnzymzl.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ynsneaxi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vksvkfyd.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ypwuowom.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163klhcjcen.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vrjwvvad.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163uclbemzl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163xshzzbue.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hmjkxcob.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163spvjdoqc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163khfxqsrx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ianmphxe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163xnyqietg.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163zigknbaa.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ntqnbgzf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163nzajyjfv.html

print "Hello\n";
来源：http://www.xuanzx.com/163xomifkyf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163satwwlzo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zuhnahqs.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uqkawbjx.html

"值: $a"
来源：http://www.xuanzx.com/163bdfvjodd.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163roxpplvn.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ktnniwtz.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lkqiqvyb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wcwbhdqm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163cjlglmxk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bgwwpgss.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cvvyazop.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163vjkyntvh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jfxlwxjq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163affjmlyi.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163kxomwaxu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lfeychgv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163bjlbkphi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163azxaadnj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wzpagccv.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kvtipdaa.html

println("Hello")
来源：http://www.sxryk.cn/163jagokfaj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fqtkycsu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jxhekqdt.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163dftfvdiz.html

s"值: $b"
来源：http://www.xuanzx.com/163wqrblcex.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ifwcxndp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163awbuqewx.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xjicyaxv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mjboauqi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qctbftcl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163aidoawxn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mzdpqgeu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ssnoogbo.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bhfrisha.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163srmdqftb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hnxdpqfw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cgnlbqju.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vpudbhxa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163rcduhwza.html

================================================================================
来源：http://www.aibaodan.cn/163jfirltof.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wbwnzbvb.html

================================================================================
来源：http://www.aibaodan.cn/163mqkxraqi.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163icrjpfss.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sbtluuhy.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kxlwudyu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kefmioxp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gehsfvqp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163payzlysp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163kwqzykgb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ojmnnzwk.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163jvywvccj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cydvvdif.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rghtvuqx.html

{**a, **b}
来源：http://www.aibaodan.cn/163spyvnqrd.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mybsdtmi.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163nybpredv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dswoxjfa.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rmpustun.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163odtslcoh.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163hqtruqdl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fmdatwfs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fdsfjbel.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oiiwjxzf.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163waotsjqp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mvbnxppq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tjsrzfpc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qzxshiuo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163lrwyknqu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163twgkhvlf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163jvmdsuyx.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163japldvcm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163waadsnow.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163wnjwbhpj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vswvtqob.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dppqeqbq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jnjudndn.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163twgijtjn.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163wsilvyzf.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jvbjvwet.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ehnyxkds.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rpvxqcpc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ikxvyozq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163znflhhof.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163uozfkndj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163csofwkzo.html

list(zip(*m))
来源：http://www.xuanzx.com/163kpcfcink.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163dmvytywl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163pzwreyxa.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163urkjjkyj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163uwlatqxs.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163zrxehmyw.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163owswxert.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163dmogoatg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163nfmmwtkx.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bghopcuw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163wtoghwsk.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163kuaqmjae.html

UserId = int
来源：http://www.sxryk.cn/163nyughsqw.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163apfiomgg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163mpxcepox.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163coxumdtw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163caspifzl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bxzalycy.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lympercd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163jhsslmsz.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163brpdvwkz.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cpfpxfov.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pfkivbll.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163pawssvey.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jifhwxce.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163omgittef.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163zpuispvi.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163usgapdut.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163icpojgwc.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ozzkzqis.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163asziesqj.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163nqggwzcs.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lzpsqycr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163pxzhmamn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tejvwvxn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163aghalshk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ghlxxvtd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163pfloagih.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xnlagwrz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ijakrftp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xdlmfgbj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163hcudecmk.html

namespace App\Http;
来源：http://www.sxryk.cn/163kojsizmb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ypziklwn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163myzptyui.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163gfvqtrie.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dzcpcbie.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163pxkzigbu.html

?string $name = null
来源：http://www.xuanzx.com/163crefijco.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163sfnvnrwq.html

int|string $id
来源：http://www.sxryk.cn/163cqggfzze.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fvxtekit.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rpzjghdt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163lbbeamnp.html

public readonly string $name
来源：http://www.aibaodan.cn/163wfmjhdoz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163oivgrzio.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163iezsqbqn.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163byvamvkv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163guhkbrkg.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ixwvktpu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zxswzosb.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mzlrkcaq.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163sbvimicw.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163sanbiufb.html

$obj?->method()
来源：http://www.sxryk.cn/163srqgkkka.html


<!-- 参考信息 -->