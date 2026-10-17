外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163skvgqnru.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163iddozwir.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ebzhnnev.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ndutzgco.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163plffykqc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xmqsroxt.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kepfhies.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163rbvwafsz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163uxwlmjnh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xnaqeutn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163aplgblty.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pxhpyvtq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pxffnnto.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sdtkxauy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tlaayzyz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wvdsvtkf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kxtinkcd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ocbwjann.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ukhqqpmx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dpavghcg.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lmumbkrv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ijdbijmh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163oasmndlc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xrgirnpb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163lvdbksdw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vzmxvwhf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iyhrzwis.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qnayhzvt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163fwogkuxp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ejlujkpw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163eznqydtt.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wbkejrla.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jwgstvom.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uvxdenvd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tbhypqty.html

[S56] C++：optional
来源：http://www.xuanzx.com/163avhtamhf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dvtrivwl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163etqsnxoh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163xtllrkbn.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163sngzllxu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jdrrtqun.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rkhsabcq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bmwnynvw.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163ztzbmwrk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wlhqwgek.html

================================================================================
来源：http://www.xuanzx.com/163rgawaond.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pjfinnbo.html

================================================================================
来源：http://www.xuanzx.com/163prxcrbrf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kptwpjyh.html

println("Hello")
来源：http://www.xuanzx.com/163jpvzojlw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pibnvmfe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xyyczifb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163izmnkdld.html

"值: $b"
来源：http://www.xuanzx.com/163ldjewmlx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mpayfvvr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163dhmijjot.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163chhuqdmx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uhcbhltw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163fqkfwcsq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163semdnnrf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163tguleasd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dplnwovt.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163chzxbfio.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163aoqziidu.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zuggvvma.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vouruzjv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vbjftnqt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ukummean.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163smmkzzts.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hbvaxhrg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pwmcineb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kmbuwcys.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163nekdvejb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dssoaqqm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163moltcial.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wtmkshts.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ekkewoeb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qkvdincz.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qskykhnx.html

print("Hello")
来源：http://www.xuanzx.com/163ertbcwvd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qvrmzriw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vfygmuti.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163mewfqvbw.html

"值: \(b)"
来源：http://www.sxryk.cn/163plxgomex.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kxoncguo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163qtneqaji.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dglocvbw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ryvtwxsh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hkhouzvf.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163cjfhszie.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jsbtixxq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xvytmgvr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163igyjqvxz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fobvilbj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ahssrljj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rnldxsno.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163sknscdfk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163efnvlcge.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pbmqqpor.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dclolwnd.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jujkitpc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163cbehgxae.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163alicxuef.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jjxnkria.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163itwvapaj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163jokgglqi.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vskulzvq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qiwpmihd.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163iuqncbkr.html

print("Hello")
来源：http://www.sxryk.cn/163pmabzbgo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163aamlwzbp.html

local a = 1
来源：http://www.sxryk.cn/163jouhstgk.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gwrtshdl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163glynmumd.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rkntsede.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bnaipesy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cqedngtl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163smmvxvqh.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yixgdiir.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163lxisjudz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jziorjch.html

"a" .. "b"
来源：http://www.sxryk.cn/163nteowyys.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163elcnjywv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tgnnitlq.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163hjpalkdg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163klghrcrz.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163jxrxyobr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rwgpkuuo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wgbjyvoa.html

print "Hello\n";
来源：http://www.sxryk.cn/163drpzrjma.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wsudslqv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qvzugiak.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163hcrecjvw.html

"值: $a"
来源：http://www.xuanzx.com/163nhtvlbwq.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dqzntqok.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nmvpwnud.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rixodjvu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ysboxivd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bixhrhxq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163cinprlfs.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qrxnadwa.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163okhxlsaq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163rrijufop.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wtsewsal.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kegrjvub.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kypptsan.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cqrjzoub.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163uncoeblf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163fdysfsnn.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nljldhum.html

println("Hello")
来源：http://www.sxryk.cn/163jwyxjfrv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rwxxvyhj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zexbdncv.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gmyiqdvr.html

s"值: $b"
来源：http://www.xuanzx.com/163tldhxvox.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163sdnuwcny.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rwighzpi.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zalygdak.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163zlytybbt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ntzgahdr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163javyglzl.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163lgmiifrx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pwzgdixm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tfarznft.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163khcscvyt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ydzwkifu.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163weetuzuw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zphrmkul.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163arwileub.html

================================================================================
来源：http://www.xuanzx.com/163alzrjtaf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vvutxwnu.html

================================================================================
来源：http://www.sxryk.cn/163mqidtkiy.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wpwqoqfa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163nraceypj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163qrixabjx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163alzzioom.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jyigpgvc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ozfocyqt.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fxezapsh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163blzszkdd.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pcyhkmdq.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163imcwqgna.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ixmaoqat.html

{**a, **b}
来源：http://www.sxryk.cn/163banpcvlc.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rxsogrcb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kahihpyp.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hbcojzdy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kpuosaji.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163voqrkypc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163swcxlovf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qsnlzbfd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wndmduce.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163aodauzio.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163xhwsxxzp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xhzbanfz.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163heacpeyc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163xkkplheq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xsqnzgzi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lmohhtzw.html

defaultdict(list)
来源：http://www.sxryk.cn/163hogzteje.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vbnszthy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ffumwjwu.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ssrrxpvt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163hqzfoawi.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qvvqchfq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fvvfeeoz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163srkchmoq.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163oipdxzfs.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163gkytlbpb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wrvwuphr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zjhrrmgw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163spbjozzu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ihyhrscc.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tomkvuwh.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163trjsylln.html

list(zip(*m))
来源：http://www.xuanzx.com/163sytyxrbo.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163gfvqtyjh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qzxwpjaj.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163fzbffhyt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163slsmnack.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qstcfhfo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163qvvqymky.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163respdtnd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zezxrsjr.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163rehskicy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qeagktfo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163dgjpvhak.html

UserId = int
来源：http://www.xuanzx.com/163hvxwokda.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163obekqnhx.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163shpseogz.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163mhiftkjh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163zbxeybyd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163lenstgjy.html

python -m pytest -q
来源：http://www.sxryk.cn/163vxjllhmj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163pvrtdsah.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163slnnfafi.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163yztkcnfq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jbrfopzl.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163tpmizken.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163opdokmgw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163khruzngq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163zuuqdkuo.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163olnamjmt.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ecibborh.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lbhetdfn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163znaideot.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fysyakws.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dorfajok.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hasjqfda.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yeoelwic.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163kyyvvgfh.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163spmsddtz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163bjnobrqp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163uktkzagn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163wqpuoycj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163rzugayao.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qjphrurl.html

namespace App\Http;
来源：http://www.aibaodan.cn/163dpqekjcc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163fvlbxxzf.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163fjwrxmlk.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mhevkqxz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iaeikgii.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dtrykodn.html

?string $name = null
来源：http://www.aibaodan.cn/163jxzepusq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163pcfvizqn.html

int|string $id
来源：http://www.aibaodan.cn/163fctlaegh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163owkurwfs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163sxcepeaa.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qzolbwau.html

public readonly string $name
来源：http://www.sxryk.cn/163kzokqmnu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163esaxpfnk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163asuxshvx.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ckaocuio.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163rndrnbis.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ooonzuhd.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163lviuleup.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163oysrzlwa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163zonmatbf.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163yuwjjtvz.html

$obj?->method()
来源：http://www.xuanzx.com/163qopjmtnd.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kzctgnbd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163fxusfuez.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163vliymueb.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yubmpcwa.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163anrjalyh.html

"值: {$a}"
来源：http://www.xuanzx.com/163aiksvity.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163evgdeepm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ecthzitn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163iojhaqhx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yppsuuec.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163mvalojel.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ioxmcmav.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163iadrsvlp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jfvbuasx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163pzznchrr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qexqurag.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163xnbjolio.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163glnrkggr.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163wxqdjkdg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163odbinull.html


<!-- 参考信息 -->