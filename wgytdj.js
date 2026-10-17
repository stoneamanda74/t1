外链999!wailian999！

#include <iostream>
来源：http://www.xuanzx.com/163xbavsjxt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ucbzxpoo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nabputdp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mjjraysc.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kwfbwpzs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dywnykwo.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163kaseflns.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163anfeztjm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163cujecxkt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vapvgzah.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wvbojqnd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vfnyzoxx.html

[S37] C++：set
来源：http://www.xuanzx.com/163lqgyweau.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cjypjxbh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163utqjugtm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jfvdqolz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163azdmweap.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163cefrocpw.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jmkejpsw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163hligquoj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163zsyghcsk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ovxnculi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nazmkrfe.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jrovyocr.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vlummcrp.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bkdybdfn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163isgxdtvq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163kiopdxec.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tffrsrsu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163uqrhqlry.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vqrkpcqt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163znumfpay.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xgnwonpt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dtqogtde.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163uzykbbaz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ujkvfxwv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163nljwmjpq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163pwvwpary.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163opncxezy.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jewrlzhm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163pwrrxmox.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163welwrqbb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ioaghpyc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163caxtmhkv.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163supobzdc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ilzvlike.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ugstoloo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hcgotkrz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ylwnsaob.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163epxzrrbi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163rjzqtxot.html

[S56] C++：optional
来源：http://www.sxryk.cn/163sxheqyyd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kvynvqdq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ybkzqgmi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163henqphlp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ubznyone.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163myxuqxuc.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163phjmlqal.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163luukiyem.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lioqnfem.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dsmmucpq.html

================================================================================
来源：http://www.sxryk.cn/163vqnyevnt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ihxmqwpo.html

================================================================================
来源：http://www.sxryk.cn/163ecrhiawl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ypoiewsc.html

println("Hello")
来源：http://www.sxryk.cn/163lskepeqt.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ckhgxebj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163nzhgcvan.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ydffbtuh.html

"值: $b"
来源：http://www.sxryk.cn/163onvrkuxv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uwrovbkt.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163oopxjcis.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gixsxpbq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qiaeawxx.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xumvobdg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dvcwtatn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cutrozzs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ayvnkkvl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zsdyftkz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163dlntlfqf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lvrkfiuy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ymrqlkef.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163aiihwhlj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163uyenbbqo.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163blkhlzmn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163eiydqmgg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163wxhdigwc.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163lbpncjnz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163oizuozsw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163gmjkqppw.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gpkpcqpp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163uvgiwktt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163osgcgtbw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nzelitnp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163elxxzdvh.html

print("Hello")
来源：http://www.xuanzx.com/163uumtkoib.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163adoxwwtr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cpluyyaj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163opqbmkoa.html

"值: \(b)"
来源：http://www.sxryk.cn/163wnyhyzag.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bivwbqbx.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163npmzhwfr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fxwwbyxu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ldbjtffa.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kqpbfluc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163aeyrkdkw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nbndedry.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kumscrun.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163trzuucot.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163empqsaqt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pouzuvxy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mbyonevw.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163aornahfc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163sxbvnybl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163iemudthu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hoyqckjx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qghqkaxx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163mcpvtppb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tpsxiffq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163sxkfxrsx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mekskjvp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wtvyoxci.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rkgrcone.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kigiiroz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163htwtckkj.html

print("Hello")
来源：http://www.xuanzx.com/163uiolnrto.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163yawrizvx.html

local a = 1
来源：http://www.xuanzx.com/163miqzhtvi.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qrnmgepp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163efabipnz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cpsolahj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zhkflkzy.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163eivfgmss.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gokqzapc.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ngsindex.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rnljjbhu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ckfbzcva.html

"a" .. "b"
来源：http://www.aibaodan.cn/163yvklyjxb.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163qfdlerob.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fbdseuje.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kcqupgnu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ocibslbw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ntwefxfh.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ugjowqaq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ylsbanng.html

print "Hello\n";
来源：http://www.sxryk.cn/163hmqxctbd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vqdmzdrn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kkycdksc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ragbgmpx.html

"值: $a"
来源：http://www.sxryk.cn/163qoiqhsef.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lqisoapd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163asxvfpsq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wuxnhsrj.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163heyzceao.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ypaogrim.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ysndtsap.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163czaluybt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nziyrtkr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xparxkmi.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163anhknxcn.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mensnlls.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163jfkylyyw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gkshrqvr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hkhpzguy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163yearmhqx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163yafjopxi.html

println("Hello")
来源：http://www.xuanzx.com/163bakqddft.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163efldhghb.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nryhorkq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wknjbmcp.html

s"值: $b"
来源：http://www.sxryk.cn/163otmfxzxy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kdalxtfg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ajspvlht.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qtpbuyrn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163afkacori.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163qqmetcpl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163netfuaxa.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163btowuesi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163swiavxey.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wcumxmkd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163zyixcqef.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tkltpipa.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163nrnctnkk.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zjyzuthz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kcnjxshv.html

================================================================================
来源：http://www.sxryk.cn/163jgzrvgii.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jtfllqoj.html

================================================================================
来源：http://www.aibaodan.cn/163uedaqvaz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163csqiqukp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jcftmpdj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gbdxbzzu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163tgzdvvcc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ybxpoluo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163nvqkyxen.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rljfygfs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163clqmmqme.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dqevfkck.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ikdvhwrg.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163iyvftmlq.html

{**a, **b}
来源：http://www.xuanzx.com/163twipptbp.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dmdbweok.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vrqpsvjc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163tbvrvadw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zwcizift.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ujlkotks.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163asdgamam.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wknyhmci.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163lqyvcrhn.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hjhtyyiw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163uhrcxwvo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zddyxfzj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vaoxjtrs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163taypnouf.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hlanxyqp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hddgqwgw.html

defaultdict(list)
来源：http://www.sxryk.cn/163jqtzlmjs.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163uomgkwpk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163xblydfza.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kaomncud.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gbcoqdah.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163inycszhn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163klvosxhd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jdduqqde.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pzmsomsj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163oajpiter.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163goumrgkh.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163smhupgqm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qbvfqjkx.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163uyjingsu.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163knufwkjf.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163qqbbtizz.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ycwrucgk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rgyohxmx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ypbwooln.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163syyfqten.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163iutnhweh.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163cbfrwaoo.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163oliymnlm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ogjllujs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ahazttsi.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163pgtmjhsm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lsikxnjy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163bpfpfpqr.html

UserId = int
来源：http://www.aibaodan.cn/163cyltyfof.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cduwlhoa.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rolwidli.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163qpawupvv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ogcagamq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163qsjpvqus.html

python -m pytest -q
来源：http://www.xuanzx.com/163duynsbil.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rwmwkwrb.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jipclewe.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fhqejyso.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ysbybctn.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163othnhhvy.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163kjbxyaeg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ctnxgbbo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163dzgiguoz.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ielfvwtd.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163uzdmewna.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ouxbemrw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yipedhen.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163pgamqavu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163swgbxrap.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163cayhklox.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163juxxotki.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163yfkjvdce.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jrzlcvsc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zhwvqvzs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pusehhnz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163mkcjekwd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tzwcmxqv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163imrhbyll.html

namespace App\Http;
来源：http://www.aibaodan.cn/163vazidkxl.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163fjhmchmn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163vjmhfiby.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163bqefzflq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163opjxxnam.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ggrzjgea.html

?string $name = null
来源：http://www.aibaodan.cn/163znneilay.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163xlcohwgm.html

int|string $id
来源：http://www.aibaodan.cn/163hdbarxyd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pdhilrfb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pmgycaaa.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ckvbcmxl.html

public readonly string $name
来源：http://www.aibaodan.cn/163uqfyfcwz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wcvpqdey.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jdhzswbz.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ybkwpqse.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163zdsszmcx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mceouixt.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163btxkcykr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ncnttfse.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xthfcdfp.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163fsxtrazn.html

$obj?->method()
来源：http://www.sxryk.cn/163pityzcql.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163xoprmvzt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163whiadkey.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163yrpxtpao.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jfowuvdx.html


<!-- 参考信息 -->