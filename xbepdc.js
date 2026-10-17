外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163gosdcsjr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163pimfyiii.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163osugbjgc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vumjcfzp.html

[S35] C++：map
来源：http://www.xuanzx.com/163fbxnmjtr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rovxabhd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163olzjibmv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163olfkoyun.html

[S37] C++：set
来源：http://www.sxryk.cn/163ututzhsy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yhpuccbe.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cjhexyii.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fgzfuyua.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xaezlxyc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163brkopjum.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163idvlokul.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jnnnkmgp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163fekhypgg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163blzfgexy.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rvfgasou.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lzuacwie.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wharvkah.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bhvskgja.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wkmkropy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ywmvvtor.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163urqzjnpa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tmdtvgpe.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163nytglzer.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163pxwkmnxn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163wcgblmws.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ybtglkpz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163yyecznro.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tohbglei.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163chkkbjqw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cngszibs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dzqtqcro.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qvkgsaca.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163lulkbbvp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qfkfevuj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163snigalma.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gesncvwr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vogzbpcm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163aiexlfds.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nrnjpulr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zvpgpryw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zotwpoht.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hietvwbe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163faiulcur.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mdiwvitg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ywwuzzit.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163cbxbzrek.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aajintxc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163hkcxvfxh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163haloigpp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yeifwnyn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163yjcghcoy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rrlcdeok.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lbwxqigi.html

================================================================================
来源：http://www.aibaodan.cn/163wdcucacm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pnkqjqnj.html

================================================================================
来源：http://www.sxryk.cn/163pethdvtt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vgnsaemg.html

println("Hello")
来源：http://www.xuanzx.com/163eckvfszq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ejuvfezs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xwkofwiy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dffgsywg.html

"值: $b"
来源：http://www.xuanzx.com/163drhpcvdl.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ernfkaxz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lzdaxfbl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ompshoxg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xwjgaxxc.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pbzrxjzw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163acbrazmf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163iymxpdte.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yreixzer.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kxynercn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163lhiyueja.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163eyedpdok.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hrdcqjrj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163pvgsguyz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163kwfoqvmq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163obmuztch.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fwyvzhbp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vtwwcffa.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bujpflwv.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163wsydxqgj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zjhnmugh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163awxjmmxb.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mpspwvgs.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gybuiswt.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mshuwvnc.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jgbbqunp.html

print("Hello")
来源：http://www.aibaodan.cn/163kmrsngga.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sjpajlfi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kguwzcnn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pqtwdzmy.html

"值: \(b)"
来源：http://www.sxryk.cn/163xfthvwkp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bakpwpoo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ccprjskb.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nssintxm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zwpecifs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163eflswyce.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pikcmiul.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pxrpprys.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qoeyfqtv.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fyendhmp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163upiqfbbd.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163uskrvovz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yorennev.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163cvptglkt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163yidulcbr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xvgcshtj.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163udbbjzvf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hikkjxob.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163resjvrlb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163eqmmqmre.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sgpqjjln.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ipluevug.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hgvsfetw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gtqaabwc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163zcizspav.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163tkkxpdli.html

print("Hello")
来源：http://www.xuanzx.com/163tjszxajp.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163pobgflei.html

local a = 1
来源：http://www.xuanzx.com/163thofrdrh.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qczxcrsm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dddfcywa.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163xivotkuu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ehpgfuat.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163dlkrtdyn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163sdblpdyz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hchqvrxl.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wvmihtos.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163stfrrksq.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kzpzadlr.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163fgijfgza.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qcgjyezb.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nqogcxud.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163euyjlixd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cjiugezn.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xdupozdo.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mxhumhey.html

print "Hello\n";
来源：http://www.sxryk.cn/163ywjbnzqe.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dwwwuywt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163otjnvyst.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ruilwset.html

"值: $a"
来源：http://www.xuanzx.com/163sjubuhnz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hvjlbftu.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ddliwuhe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kijpctjx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nkkihnxg.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163rpbpfxcu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163syssjohl.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163uzfhblar.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163kdpplhrl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163vhggyiei.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163foyyginu.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hgribadl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nannjcgz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163yatfpobq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qnkxivnt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gmhyfgwt.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jfarlmwj.html

println("Hello")
来源：http://www.aibaodan.cn/163ipwjjyst.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ghmqdtdj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nrmizxmv.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163iajtzfhp.html

s"值: $b"
来源：http://www.aibaodan.cn/163gjnzsfft.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163dalaiovd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163niohmbrx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163cccspcoi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xiiumqnz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163luajydtr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163tpyduyew.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xaavpdts.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163cwqshqoe.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lbtnftze.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163xlqkjnql.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rdcrkmiu.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rzsqfxga.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163aucegpps.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zqlshosc.html

================================================================================
来源：http://www.xuanzx.com/163jonbosva.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163omgclduk.html

================================================================================
来源：http://www.aibaodan.cn/163urlilyda.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163skctumds.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163lrusiauc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yczzygto.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163uqwnqhsy.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163joqprtbu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fmcykhzq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dofdvntn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wqljjdzi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ajellkbm.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163cckzshef.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zurdwcpm.html

{**a, **b}
来源：http://www.xuanzx.com/163lauwohlf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mbqvzzwe.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163mzxpabsv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163nnqxyjcb.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dwmcyebb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rrjkfnrc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163yggbturb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wzwwaead.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163awktdbts.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163gbkhnrsw.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163sislxcge.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hkwrurmg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163uskfknof.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163vpyzwgzb.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163vzkdvujr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nqykcxfm.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yzbsostj.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163giqtmldo.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vulfccsb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gfrbmlhq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163mraosemu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pweljgiw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mjwwywtk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hkyvcqze.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163iqogsxoy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163unaujzqc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163behvmwwc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bibwfgfn.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ptwhltxf.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xekpmdnu.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163anfidnmv.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163cnwzomku.html

list(zip(*m))
来源：http://www.xuanzx.com/163gwsffhbu.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163rbtcbtqc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163dkdokfdx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163fwrdwwgi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pxuantsy.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dslfxblk.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dlsuxfom.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163jlmmmyjq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163emqfvzvm.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163poaejlms.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163akcvfkge.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lqvfoxmn.html

UserId = int
来源：http://www.aibaodan.cn/163ddaagdmm.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163khzdknao.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163julkjabj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163kmpgqjyi.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163gybvoxap.html

[U31] Py：单测
来源：http://www.xuanzx.com/163yrwdjxnf.html

python -m pytest -q
来源：http://www.sxryk.cn/163balwwkbd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163euxwlygw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fhxxezuc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163nhajhwqp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163udlugplb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vswlkjpv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nqjpjfen.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163imzeejlh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kgrgvigv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cekymlax.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zfsmlbdw.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163umkxsetw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163uuisvyqs.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dmqznzmk.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mfaeknwx.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ycdkcaqw.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zswrigzl.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163vnuosgzi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163etumnarq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wzvpswjg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bpggyjcy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163wuvdgnjv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qjgppchk.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163omymmumm.html

namespace App\Http;
来源：http://www.xuanzx.com/163dmlyaego.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163qmwkvben.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163clnmqtwp.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163amzryrol.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jfjvzsqy.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163btfxhgwg.html

?string $name = null
来源：http://www.aibaodan.cn/163bvxhvhas.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163etrssrbv.html

int|string $id
来源：http://www.aibaodan.cn/163uhabioik.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163shujqgum.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163npuvlmaq.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rrivciiu.html

public readonly string $name
来源：http://www.sxryk.cn/163tjbxmgho.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163esdjcrbh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qzrzndox.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ilhjvxie.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163swmdxxpy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hvvtqgjg.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163vshtoqca.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163stuytejx.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163caxvatrg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163umumgprk.html

$obj?->method()
来源：http://www.sxryk.cn/163nublfwup.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163jxqjrrth.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163rviyizsu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nunetzgf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163iqbhbeyy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163pwijmgbp.html

"值: {$a}"
来源：http://www.xuanzx.com/163dozlptjm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163crqgfhsh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163aojrqyit.html


<!-- 参考信息 -->