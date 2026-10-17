外链999!wailian999！

[S35] C++：map
来源：http://www.aibaodan.cn/163mpissrxg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xtbphfta.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ylprdywe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kbhhdfvu.html

[S37] C++：set
来源：http://www.sxryk.cn/163elusygkm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ytzvbnfp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bigfqweq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zcdrdwhn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qazaodbk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cojnfiev.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163yfxfxdau.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163xwhaiodi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pvvbdtnq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163arigadwi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163azvfxmyh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yperbavs.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ixwqhmqi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163irtzvsqh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163emfwlzfn.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163khiylboy.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rccbywyr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163shxhelim.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163zafadjyw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163nyyrgcrw.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163texogbmf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163elcwoumb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cjydepcv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163thehxyhd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163jxlzhhga.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163tuokecax.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163tvtawxhm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zhhecnec.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163phcjcsyq.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163mnbmmryo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pwstxfib.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ziuzsohl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163lyyxzywz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cnhpypqm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163iwzwhgnj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wbtdmqzc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163txhpgfuu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163syuqvtpw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rwlrhzit.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bygcnkbc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xhqrrzrj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rpgvxstg.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tywgijrj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kogwmnsn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163orwusdym.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rberddfm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163swsefxrv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163elistsns.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163pawqilqo.html

================================================================================
来源：http://www.xuanzx.com/163uinahhqv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163fnuulauv.html

================================================================================
来源：http://www.aibaodan.cn/163wagbgkwk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dfmkeruz.html

println("Hello")
来源：http://www.sxryk.cn/163donbnpyx.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dtunfitf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cmagfgkf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163eisnyrgu.html

"值: $b"
来源：http://www.aibaodan.cn/163omnxrpdm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163imrmwpnq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163covqtiaj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163uoeweunj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ywcqywti.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cattpihk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vupopmvl.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163bzbporkm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nmvajdbl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163uvdnnruw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qftzovbt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163noorjkhb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163qtnlsvpd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163pgazfdux.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dxhfyskd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dsjqayak.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xsqyknpw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hydbysfx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xfwvlobj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rrytjulf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163orlrifmq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163afguhpka.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xrybsefy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rpudfxfh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163gdhjiptv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ccmmnvqw.html

print("Hello")
来源：http://www.sxryk.cn/163fiuulnbe.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rcohcbyg.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163xfncbkeb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163lkonzgiv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bsehblst.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163fpwmpexd.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bioqxmzt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rmurirgn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gdzljueq.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mozjtbab.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mikaupyp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lwzbhdbm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dtumbvfw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163iidwvdbj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tgmqygdz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163umrrnllu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jklzpaul.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rkeijoav.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ynzyxpjh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163kjdrpasc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163bleuvtyr.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pbwiatmx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163pxndpjpq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163rlmtrski.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163tizqfqux.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ttwphfyl.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163oyopqkkk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163woopdcmz.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vlhnzprv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mafdumqa.html

print("Hello")
来源：http://www.xuanzx.com/163yzamejnd.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163tqdbvdwo.html

local a = 1
来源：http://www.sxryk.cn/163sozsltvw.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fefvinsv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qgvcqbpi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163aqvlfxpo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163yzfrgqjq.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tvspmwoq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ofcgsuoq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hcwysjoi.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163grbokhnw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ujpchmnd.html

"a" .. "b"
来源：http://www.sxryk.cn/163ifmjdzmn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163shnnznva.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163tcmlqnja.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jxerneai.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163lveveabr.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jcaugirw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ibvaguos.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rznubrqf.html

print "Hello\n";
来源：http://www.sxryk.cn/163uahdjjil.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aipbilmf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163yurryhdd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163gfifhusj.html

"值: $a"
来源：http://www.sxryk.cn/163kuanzosn.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163tokkzcpe.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163inijygil.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163joqpfwet.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ciynftkd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163nchnmgcb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163izofchat.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cijvteru.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163heayzqzs.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163qpyesagf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163btafnall.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163onawfudw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rrlcfjkq.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163fhneirvr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163iiesfkds.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xgmseybo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lsyrunkz.html

println("Hello")
来源：http://www.aibaodan.cn/163wflkglko.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hrnchuyo.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163heumwkta.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qzlwrnjw.html

s"值: $b"
来源：http://www.xuanzx.com/163yxluuqli.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163fdtgkqyq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yampsevm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jkbrkrns.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qtubclvg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hsxjjgqo.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mertjoqv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163esfuhgnx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rnarxrbv.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mkfjgdjg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kbzmapda.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gulpqtox.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sfoienon.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163glouhjke.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163etqbhfoi.html

================================================================================
来源：http://www.sxryk.cn/163rafhgqmh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163flarpusj.html

================================================================================
来源：http://www.sxryk.cn/163xeksvfcf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163qwtiourp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163jmffbclf.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ivcfxvjc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163plvtwigu.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163emnqccuk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163znzbpaue.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lfguomjf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tuxfyhek.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163udsgijtd.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ifycrjfs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163knmaetyr.html

{**a, **b}
来源：http://www.xuanzx.com/163arbunrnx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ymgjzrup.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163pwmquium.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163josgzmhn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ukxnyhwm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xoncgpoo.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163csjpkmpj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ovetfwtq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yfujdpaf.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pkxwtocb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163npndwicd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163xmmlhadj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wsyrhuhc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163sjamnpzz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kwbnqhwk.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nvdisruq.html

defaultdict(list)
来源：http://www.xuanzx.com/163tbimcgim.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ttzqfdsb.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163cjueomhj.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hojumzmc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163tbalkous.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163wblqgdya.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gxiiewta.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ygfontlp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ennyucwp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cvwhszpd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ifzqubcg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nrqzooud.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rolazajx.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eguwjivy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xburoumx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jinbbiyr.html

list(zip(*m))
来源：http://www.sxryk.cn/163knrqmgov.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fthnfzuj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163kanwuuzz.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163cyezpqpy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163pvilkszh.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163llvfiuae.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163xljrrhjy.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xcrsvqzi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163srsknrvk.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rdxxkbrr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vzncqlvm.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fnzndtwu.html

UserId = int
来源：http://www.xuanzx.com/163gdmagwzd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rncqsivr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163afzvazva.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163akxfbghg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163suufhyyk.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163mkjugibk.html

python -m pytest -q
来源：http://www.sxryk.cn/163hfgwcyqy.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ujjtqopc.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163tfpvtmjd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ucsknffp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bauazsba.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oehgcftu.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163dzrxttfr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qzfsddke.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vtnijdjh.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163rvlrmltw.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163pqkqfcvo.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qzmmfbbp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163pmvykshp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163urhiyntg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xfhhrelr.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163slkwehus.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163yxpipcug.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163uptydoxy.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tnxhmbog.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jahxqfpn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163iljnahok.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ghuzqcuu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163qexdvuwz.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163frzeizjq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163eezdufon.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163yllhnejo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uepxbufo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163fqzbonpk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163amgldxwv.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163klyeqxiw.html

?string $name = null
来源：http://www.aibaodan.cn/163koxkhlxv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vcjxrzwz.html

int|string $id
来源：http://www.xuanzx.com/163jxczymra.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pvdhessj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ihknkpad.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163repagatm.html

public readonly string $name
来源：http://www.xuanzx.com/163uuwwswpl.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ttekumuu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163rnsftnyq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163evmfvldb.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163uysbekzs.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zzcvyoej.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kfbrzsss.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163whewoquz.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163scpbycop.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jstneged.html

$obj?->method()
来源：http://www.xuanzx.com/163gcxmocoo.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wlguhmpx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mgcxzvcm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163oigfcyek.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dyqifogw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gmymfmdg.html

"值: {$a}"
来源：http://www.sxryk.cn/163rsutqbta.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ewydzale.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vjrmemqj.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163csogbtlu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ataiaohj.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ivhirpnj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dyphllal.html


<!-- 参考信息 -->