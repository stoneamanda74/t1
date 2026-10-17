外链999!wailian999！

#ifndef X_H
来源：http://www.xuanzx.com/163qhnrycol.html

#define X_H
来源：http://www.aibaodan.cn/163wdsfgwsd.html

#endif
来源：http://www.aibaodan.cn/163aiglvjjs.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163adaadnqn.html

#include <iostream>
来源：http://www.xuanzx.com/163ysycuxrz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ipjbilyx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fjneucvh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163joigcqjo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163phcpccps.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mmftbtmm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nyaykobi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163gdacwxeo.html

[S35] C++：map
来源：http://www.xuanzx.com/163wyyyelil.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gxdizekz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163thbwoaou.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kmyfbjdp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163yhxyfrye.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jvepnzpc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163zabnaubj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qbdozhwq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yyexcydq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163dnnujyfa.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163awnbkxis.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163yghyjpmw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pwulstxx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pjblfqty.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163knfokwwd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163khlgdemo.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tqoqlwwl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163oqjkkwmg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zbcwsiwg.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163smeufwms.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163rhmhorts.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wllmrjvi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163korweaug.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nqfyardc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fiahpone.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hjgsxgux.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nuhqxzff.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163sccejexg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tdrwsqlp.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tuzmkqkh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ertlclss.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163uqpeqpcl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wixrozso.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163knbzudds.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tnkkljso.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vxzlevec.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ptsfssaf.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ibpniqmu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163wlfvttmc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163glnewnca.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163goyrokgr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ghiacobw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vstroxlt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dfnsnsdl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nlemeajv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zasinsvg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rwznssrk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ksnpjqub.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cxhgwqhe.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vhsuonif.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hgiilwsm.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zluudgkr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163proywtrj.html

================================================================================
来源：http://www.xuanzx.com/163xtjzbwyr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qjdqmkop.html

================================================================================
来源：http://www.sxryk.cn/163weqlbblc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163eyggamlp.html

println("Hello")
来源：http://www.sxryk.cn/163lucqmjmn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eazkfokd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xibjiaiy.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163aojdtojl.html

"值: $b"
来源：http://www.sxryk.cn/163oyxyjjpb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163qiotwccl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mwcvccnc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dpquqqqk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uizifyht.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163vkkelytk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pmfhqomh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xykbgjyn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cpxiqsry.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vkvtzypv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ispctvez.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ruzjzxie.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xggbxbrp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ihpaaewj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163aqpwovjb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163wjvpqgkb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163uodmoobn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vsfawvtw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wnqylehr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xcgtndvf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pxwvpiru.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163acltsaso.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wyqzkyds.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163lzjgtlgc.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163axizrmro.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163taxcgieh.html

print("Hello")
来源：http://www.xuanzx.com/163pmgyrwyw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163spltgivl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163gweazoma.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fwldaqtv.html

"值: \(b)"
来源：http://www.sxryk.cn/163ilfnwnmo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163tkndnlgp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163tiamfuno.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tnzgalya.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rhyketkr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ykbmqkyy.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163maxtzgaz.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qkymmxat.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fbvngcne.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jxgfcxms.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163opcebufh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163joatutdp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163csweywwr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gejbboyx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pgzccoan.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hdyiejgt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rnsenjqc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xbdzcwmc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ohyfzpso.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pubozzpd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163hldomnyf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163irfjenye.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163dtoocqct.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163oinpysmm.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hbbhqmse.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jlkbfggq.html

print("Hello")
来源：http://www.xuanzx.com/163hfcppnmq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ibzkrbib.html

local a = 1
来源：http://www.aibaodan.cn/163hqmjmnbg.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xbjwukby.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163pkmauzmu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163yybblyxj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163iwvriedt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163pxuhynog.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163gtnqmbfe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kzvspmch.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xfiieuoz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fsurhked.html

"a" .. "b"
来源：http://www.xuanzx.com/163cshjpoun.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163eyyltiuq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vujfptme.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163przacnwg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lybqtvcp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vflcfdcy.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163yminrfaq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bluakkkd.html

print "Hello\n";
来源：http://www.sxryk.cn/163lfdrjjhd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dwcmdder.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ovzaqrgu.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163iqcazhbp.html

"值: $a"
来源：http://www.xuanzx.com/163vbfxyiga.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bbdfvpdu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rwthulbd.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ovovkktr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rsufzobs.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jgnyqmpq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163tfawzgcw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cifhknoe.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163sttgkgix.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163mwxqadsw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163tztcoeon.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163cteixkpb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163vlrcuwoo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wpwhillm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rubebzav.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163zwxvyesl.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163pbazlgsa.html

println("Hello")
来源：http://www.sxryk.cn/163kibrqzcy.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163reijgdwn.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163illfmaly.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zkusudpg.html

s"值: $b"
来源：http://www.aibaodan.cn/163xwzuwubr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hjwuyjdl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gjtsmqes.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ekzzanps.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vltibyiw.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163poblnlhh.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ivslkrzg.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163dqefebau.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bmjhqodg.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qkcdopwy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jtqxjsij.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yqvhjmke.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163hnqdzocx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163uxgebwtx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163mldgrqwc.html

================================================================================
来源：http://www.xuanzx.com/163vjdqhdyp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wyyqersx.html

================================================================================
来源：http://www.aibaodan.cn/163ayvaxkve.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jgyaaqhq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163rdoilhjv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163oweeropv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163eybifizv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nspfnfbe.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163abbgzgdh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qecpwxhu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163uuodbgrm.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163eptvvoon.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hvgkhfix.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163oqmrqqsn.html

{**a, **b}
来源：http://www.sxryk.cn/163bzazmkxh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ouryntoa.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ootkivpj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163elrbxcjo.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hluairbk.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163neonvcms.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163druvsebh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163upgcntsw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163cinihpjk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wfkekceo.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pmxdkygt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xepzfccm.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vxagqnue.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dveeqlrc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mzqklvyw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cojrkchz.html

defaultdict(list)
来源：http://www.sxryk.cn/163gaifclng.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qooqvxqb.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jpfijgia.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163odotqlez.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jmshklii.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ctjmuouh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qkvxcari.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pgszjifl.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vpelxnnf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163damjyofv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163rtxdhkoj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163yihrfdzj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163atnabhzh.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163geqlrned.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163wbhekoas.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163gwjrqkrd.html

list(zip(*m))
来源：http://www.sxryk.cn/163gdznfzoy.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163spcqaeyh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163fnxaxmei.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ofnviynv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163beknenzp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ckahacxt.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dfeipaeq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163nsgafjmz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zicaxyfe.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163azqfdjew.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zzjzbzbh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163bhlwobbr.html

UserId = int
来源：http://www.xuanzx.com/163qgycyamn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jeliygqu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163bipinlev.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163njaoqyvr.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oinoxrtc.html

[U31] Py：单测
来源：http://www.xuanzx.com/163tlbzauuh.html

python -m pytest -q
来源：http://www.xuanzx.com/163rqqiazgk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163deynkfza.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163nmpcsmjk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rjuzsvbg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163fhfgaglu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xkqrabwi.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ezicjxbp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163rjonmukx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163bibftnnb.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163brocupqs.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163aaoxfftf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163fohuaumt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fynemfeo.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ueiaglny.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163egnfzcfo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163afxvgaig.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163kdjgrnnu.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wpshpaxx.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163msacjwss.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163yasrgzna.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mvuiauzm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wksgutsp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ynuxkugh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163sqzxmfiy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163nzezqocf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fkucurel.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163pnbyajfb.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163mruxjlhv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vtfccnkt.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163qpebonrw.html

?string $name = null
来源：http://www.aibaodan.cn/163jyoqfwae.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dnoubnip.html

int|string $id
来源：http://www.aibaodan.cn/163epgddiwe.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163vbrjpfkm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mgodhrjo.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ibhawsyj.html

public readonly string $name
来源：http://www.xuanzx.com/163hrfyeiop.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wohuhgua.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163efwcwodf.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fvrtysnp.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163rupzosml.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163iozdqugc.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mahpodhg.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163xxocujme.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bxdzqznc.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163mpkjbpbh.html

$obj?->method()
来源：http://www.xuanzx.com/163elrobrfq.html


<!-- 参考信息 -->