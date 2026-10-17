外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163cowuqurb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163csdsuzhs.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163aruzbwtm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bibmbslx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nskxgnzb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wexmmeec.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163serswbep.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163swjphjor.html

[S37] C++：set
来源：http://www.aibaodan.cn/163rccdgsal.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163trcycjzl.html

[S38] C++：排序
来源：http://www.xuanzx.com/163sxwxnsxj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163obynfcyn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qpqstndl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163gthlopso.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ikoyqtyw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xlbniiwi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163jrtqhada.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ffhtfjav.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uccesive.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163twziwzdo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163zfuanwpl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yzgxrjic.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vxqhesnw.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wsfmtlbs.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nkwamdlr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bmjulnir.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163bklaubgk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163obkfeoib.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iqjnpvyk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ohlwvfqr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163chlgnixl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ycxjaygs.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163duzlmbuv.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ibvhdifh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ajlqikmo.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zeschwcn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ylczhheb.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rafbylxl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bwcmzsrs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xnturglf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163fdecapno.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ezjlzyhx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163otunflrj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xurpelnq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cumzxwgd.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ssvenxso.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iwcksklx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163vwuljenv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163puscvzrw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163skmnggmc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pyembrti.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163zbhuqwph.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ecwhsfyl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jlroxlhu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kaimioot.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rzjlvgdm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hucrgyhn.html

================================================================================
来源：http://www.xuanzx.com/163ngapjnsl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163omuzfvma.html

================================================================================
来源：http://www.aibaodan.cn/163iluxanns.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pzooxmzf.html

println("Hello")
来源：http://www.sxryk.cn/163eglbrvrp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eqexpiig.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jqibfyiy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vwyrtphc.html

"值: $b"
来源：http://www.sxryk.cn/163pejldhbw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dyknzujx.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163oqucldgb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dnxyzjuq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kwkilhpd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qjamxbje.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tlypmgkr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ngiwiezd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lubtzjtd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bffabluk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ifafxixc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uzdwsbqo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vuqlnkkx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163livvpwsh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gebesmtd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kmzfqhts.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163unilsaxh.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163eighihot.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163cfrtkdoz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kvxsldho.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hedpjkcd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cepfxzzu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jwfbmrcz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gmssyzci.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163snyhflrt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zjambfka.html

print("Hello")
来源：http://www.sxryk.cn/163xgmcezox.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mgddiwsa.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163iogbokty.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fhhnatzs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uwumvelm.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163gywllloi.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vvgxztwt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lwdxfipe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ycctooky.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cjxbeiri.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uanxpvuj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cnkvspft.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jyiijkok.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wkfdwnbe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163uivtfpfj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mjumhrcu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ktojvgsd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vyflfrjo.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163snuassle.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163jmpvxcpp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163otcxqyac.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mzidrljz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163brshwbbu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163scfcgasa.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rkoqmmpy.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163fnsrjhws.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163sdhqlttf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nfeslnix.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ciimrzsf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qifenqwc.html

print("Hello")
来源：http://www.xuanzx.com/163tgaredkn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gvnzxblp.html

local a = 1
来源：http://www.xuanzx.com/163nudrqbkd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tyykvmnz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xhdbwmte.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163fitpoatl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wyetbgok.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qyxmzhnh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lslkcxei.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lasgcvcm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163bspirqrr.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163duphwyod.html

"a" .. "b"
来源：http://www.aibaodan.cn/163unribtfy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163vbxunocu.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163urvzicda.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qoikvqrc.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163drsoijhj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ykmonrzn.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163jpqghopi.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163znbfuqpf.html

print "Hello\n";
来源：http://www.xuanzx.com/163dydnyini.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163eupyeahl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163eosmrjlv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ztespdfq.html

"值: $a"
来源：http://www.aibaodan.cn/163ntfadcta.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163visuqnmw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wgwipntc.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fsitpnak.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tvsxvwlo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163seluzjxb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163uwookzzt.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163jgdbbmlf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163woscxjty.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ohdthukf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qzsfzzbj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163haihfrrm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ggdmenxe.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163oykitexl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ykkxedsz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163imktsjra.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hiyebkxi.html

println("Hello")
来源：http://www.xuanzx.com/163adfsdlsb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163euuahbnj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fjxlydzu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163iedmpixv.html

s"值: $b"
来源：http://www.xuanzx.com/163budakrjv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163pgjhxllp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ymxhlzgc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xlmkeomx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163egbhgccc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163sjseorks.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vgcahbsk.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163lmleiwbj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163errpqvbs.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tzhiqfty.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nsvmxvih.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163luoxuzev.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163uckislrc.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jztgnaox.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163kmtjverj.html

================================================================================
来源：http://www.xuanzx.com/163kamfgzpw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163bkzzlgyp.html

================================================================================
来源：http://www.aibaodan.cn/163jvhxvnme.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163arnypqxm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163cxgmuhwz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fdfrmzyl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163oxteqnuw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163miyzyhcv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163unxszhlh.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163eiaiofuo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163cptxcohk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163iqkjdtgf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163odwwfpwp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ghabavjm.html

{**a, **b}
来源：http://www.aibaodan.cn/163ewycjcqa.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pjckhvgz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ssmdzoch.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tesaciwy.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wywzsixq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oamddtqd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nnbtshaw.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163cqaypkcp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163adipeipr.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163sxqkatug.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163clrmsvnm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163qtcfbqvo.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163drapgosc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163obfnhgbk.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163qkgiutpz.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wzyrncri.html

defaultdict(list)
来源：http://www.xuanzx.com/163sswvpqro.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ybtgudne.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bnjdatrh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163nwnfdsqd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jxlhocbk.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jrkqtxie.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163njxppqrd.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163rzuumlvw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vwkjglrq.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163aswpidfz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163itcijwyy.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bempnvbo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hhiufojn.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ptngklfr.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xbseerxo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163skatxopm.html

list(zip(*m))
来源：http://www.sxryk.cn/163xmgwozmj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ejxjzbue.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163srbsvcan.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rbhhsquy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ndpzahhd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lwybkzrn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tqtqfbnu.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163audxynev.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163fwslnshn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163xmrdcafw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163xpgsjbrp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163tuxswmyg.html

UserId = int
来源：http://www.sxryk.cn/163wyztuaoh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xslchlmx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mhasucgl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qhwiofif.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oiifewhg.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ggoyutzx.html

python -m pytest -q
来源：http://www.xuanzx.com/163juutbtny.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163cbfxticr.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zfoguqio.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163eghwmgxa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163gnemqzqx.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163boyxmjno.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jbflgdnu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163wqjflkmh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163xaimmvko.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163tztquwdn.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163fiyxdjfx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bbbocdeo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gomrtzus.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163htzqinhp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163jtpstsof.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163wkzcevop.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163nfhnmprk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163gmuxquor.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tapnqbth.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dsijkcca.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ddgvtrqf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163zcvpogoi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163clrrhbuz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163upaoqfwz.html

namespace App\Http;
来源：http://www.sxryk.cn/163bgyhnlaj.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ycbrebit.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163tejhnaoc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163xxqarpmh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xvcfukgx.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163uxwlinje.html

?string $name = null
来源：http://www.sxryk.cn/163rlrfyotf.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hwtctzre.html

int|string $id
来源：http://www.sxryk.cn/163vriddukj.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163vxcbkckj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163igvxuvtt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163rocwcitp.html

public readonly string $name
来源：http://www.xuanzx.com/163krjniyip.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163tnmgzkng.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163yzpyaeqp.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163edtzsifg.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ddttvirb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163mfbhcmrj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163lfqidvos.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mijvzsvg.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163dddcdtuf.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ilwweujh.html

$obj?->method()
来源：http://www.aibaodan.cn/163jqdaqbqe.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163htlmvmmf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163yedwdowt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163qlrqmunc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ozxxxtrx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163djxazndq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pzcoqgya.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163zqnvtowg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163uasyvbna.html


<!-- 参考信息 -->