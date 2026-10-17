外链999!wailian999！

#include <iostream>
来源：http://www.sxryk.cn/163tgeeskxz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rbzhgtqj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pknihkhl.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163rvcvigyo.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ekwnekxr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xjgvhzeu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qwqjatau.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163egaeiypd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jouqmvqt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163spkrocgb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ueduqnrk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qxwfkkcc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lqqokdyb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cswyrine.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gsjhzojx.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tujfsgag.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ynkniirc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ltuzvahm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jgaeopfb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cbuvwovi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163paigymup.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163amgdvajm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vplbrlkk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163iedgdqaw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mqvqikoa.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xjsvikfw.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163enqiqqsv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nmspoxjl.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163iktpajxg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163alylruun.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yjgeqgyz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lqwitqwi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wcjmfqvb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ukqeucim.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nadbukeh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lodidgpz.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163aihwswxi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gyiebord.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nxemkqfy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qejawlry.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ixtukjka.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cjpgahmk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jufexedr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dcglqjmh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kzmtergl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ocgtagzl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163sbmofoca.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163btdnplsq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163xcomhjbx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ylmooryu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163njgknwsc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163clubfwzu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qdoawghn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163fnpixctu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163tnjbzofj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pxnnujdv.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kjlsaclb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163tbpvytwd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163mgggymjd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bjvqvtpv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nizfeqhi.html

================================================================================
来源：http://www.xuanzx.com/163edpdjxek.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qgoccrmo.html

================================================================================
来源：http://www.xuanzx.com/163jjyprxpu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lupxvijj.html

println("Hello")
来源：http://www.aibaodan.cn/163fsjcaadc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163oqlzeagd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163zbcjtgku.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tlrbukao.html

"值: $b"
来源：http://www.sxryk.cn/163akfmhafj.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163soyacafx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cgpcvguq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163slzeuqhc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bhxqbwhg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lqwluzhb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vopqucfp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qjqrwzii.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163wbgaywcg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oluycjig.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163yngazcek.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tdnfuwtq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163glmydvon.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mfnmdttr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163hufvjzee.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163leohcopf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163eswzzzpz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hrezbeqr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163tpkkifco.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pxgnssfx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uwhhegoc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gtmyialu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tedosgyc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163quzzmucb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163cbsgicig.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ybwmtrkh.html

print("Hello")
来源：http://www.xuanzx.com/163eomleuzx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lnbxjpdy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nrdiozqv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ttrdness.html

"值: \(b)"
来源：http://www.xuanzx.com/163cjigvygv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163asczqcdv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bnyqocyt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ughimaxx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jqfmuqzz.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163gomcjhcc.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mwiotbbg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zfxoqyng.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rgptwokg.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163nnfjznyy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163afugopzu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ldngwlyc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ibfdeths.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163epgpvrwa.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xmdmiyci.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tfzkjjmp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163queffwoc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163gipxvuzd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163fzedfycn.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163oussngea.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lafgqvto.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pkdxazhb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163mzdcorcv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xsawrjtd.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163aklhrepi.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163iygxmytc.html

print("Hello")
来源：http://www.xuanzx.com/163kehqjppf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wxnsgzrs.html

local a = 1
来源：http://www.aibaodan.cn/163rthqnvsy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163akfbmdey.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163koksmbrv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xvbeoeex.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163meegunkz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163htrvuoob.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vlzqirht.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uessebfe.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163yunhslzw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ksjswcil.html

"a" .. "b"
来源：http://www.xuanzx.com/163jowsbanv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wohfrghu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163keigfmim.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163kkyahrkh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kclxuikf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163xrkgqttd.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fntzhnvp.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zhzsfqpl.html

print "Hello\n";
来源：http://www.sxryk.cn/163xmlbwmum.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qwejfqjq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jlgchkio.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ztwpichu.html

"值: $a"
来源：http://www.xuanzx.com/163qryrpojs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qcttnorn.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163rmvecfvm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163libfoolj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163iegmmjcl.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ztxiarri.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163owgteott.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hqdvsztz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qioccwfo.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jvhxbgtv.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163sjdwqpti.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163iiiwyeks.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ghcdrzjc.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163lzilkiuk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163znfmhqvy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163zgurrudf.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hfdolsse.html

println("Hello")
来源：http://www.aibaodan.cn/163exavkmoe.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163prevnsfw.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163pkuqaaex.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xvebbgqs.html

s"值: $b"
来源：http://www.xuanzx.com/163birvnbxa.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163cjqodyea.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xuqnlshf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163owukften.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xojuvkgc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kwjxwzjh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qfoakapj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163mrclrolp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rspjzeom.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zgcvaxff.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zoyxdgts.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hcfygzln.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gnamwhwp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163exomxykc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wgtvviys.html

================================================================================
来源：http://www.xuanzx.com/163hdnssayh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ufcpppsf.html

================================================================================
来源：http://www.aibaodan.cn/163cxqizbxs.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lxvvozpg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163worbvvkc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163kwwjdrfy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lrplaxki.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wybpizvq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163jysbunuk.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163sstblobh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yxkgustg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hmystybd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ubnwvxsl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kkqmdrlk.html

{**a, **b}
来源：http://www.xuanzx.com/163ldurybsg.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jksqjfof.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gyanspgn.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hkugwgep.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zinkzhdx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163uykyqfmf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163evtqlyef.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rmlsxqhi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163vsyhilia.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163sushaheb.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tgqggian.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163kayltapd.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wipekxcv.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pyigxdld.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tjzlgcws.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wtjlmlhw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163djxnugvb.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163nqjjkvdy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163yycnrngh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163gjxggsvw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163yoasfgat.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pcwoxjco.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dnxnxqem.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163djrynxrl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163awflocbu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fuemyfnq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hjzjskjt.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163foimeghh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gvagnjyt.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rwvlpobp.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kdtgdzhh.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163kupzbard.html

list(zip(*m))
来源：http://www.xuanzx.com/163cmwwcper.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163gdspacry.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fgkhazys.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163orcrevgx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ouysbktb.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163phwietip.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163skorzouc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163siaphflx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cbrsaxgq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ujzjrhyj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zbvndejg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163zdsedkum.html

UserId = int
来源：http://www.xuanzx.com/163twavcqrr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163gesspijc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163iczvdbqu.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vamxigzb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163mgdmuruu.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163hddciszi.html

python -m pytest -q
来源：http://www.sxryk.cn/163vtwfgekd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sswjlvlv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jziwplhz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163zkxtdzxx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163usyuqbwq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163slpqxsch.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163fazgrwtw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163cvoddmmq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163fcvzcdaq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pmpikaca.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163eszjqshh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163phmfxwaa.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163bvulxzee.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lvusgmfg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jzdiqsqw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jurzbxfl.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163nooidydr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163twqzaicr.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fhkvqoln.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163dcyquygi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163taujkqyl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163pmyuhitj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gyzjxxrg.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ccmpieiz.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gabnttsb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163kwronyyh.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gwgzqdus.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163agssznml.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lguxlxwu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163mljqlbzu.html

?string $name = null
来源：http://www.sxryk.cn/163slqebetg.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uvrawgvh.html

int|string $id
来源：http://www.xuanzx.com/163gfzarcna.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nshialjx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ayhjapid.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163eungqoiv.html

public readonly string $name
来源：http://www.xuanzx.com/163mdzsznvb.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bqhiunfl.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163laukfqyn.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163msronmyw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163yyhegcfk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ttnyupzy.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163oiryljzs.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163popzdvdj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ljstcfpk.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163rjgugmmw.html

$obj?->method()
来源：http://www.sxryk.cn/163opsctusj.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sakybfao.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163bokxxwax.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tjfmopgj.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163azpbzwja.html


<!-- 参考信息 -->