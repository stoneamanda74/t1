外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ajjvlzzh.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hggshqbf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nfylthfa.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gtvpiwdr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mnlmenhk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163owdilseg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bjgyjrjj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163opofzmla.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qnhxvqbu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wbgazegs.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cdslizzl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tthwzqlv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mwrbjaew.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pxfytaoy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163mrnktfwk.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163cgvqawrl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163juhwotza.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cpwzurhk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uniiknsq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163auklxvnz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xsfaffqe.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ocfyccvu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vvkjtwfg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163glydkclw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163sjuijszu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jfnsabxr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163liekojyc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qqtsmihq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ifvshhlx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163eondlamk.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163voojcmgl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wvyfsofn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kbyuyvsa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ctfaesbr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wjgdknwd.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163stogeplo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163irwbgucw.html

================================================================================
来源：http://www.aibaodan.cn/163lnjgglyr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163qhoshmqb.html

================================================================================
来源：http://www.sxryk.cn/163sysvpuyh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163upkgukfx.html

println("Hello")
来源：http://www.aibaodan.cn/163ycyqaqfz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163anuinkzv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hqkvhdwr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jyqphekt.html

"值: $b"
来源：http://www.sxryk.cn/163waizaybt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rtgaxbrx.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fzgaonhp.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vsajmthd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163amjypzea.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jvfdddni.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ymviskmo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163lluojzxd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bugwsijg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163njlaesqu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qtarbzne.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bjocbtpk.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rlkykpyw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cfnocukx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163tfsrqxil.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163djaekoaq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ndjhkjpo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ecdoreax.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163idzckrpg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qorrvdtw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163unpamwrw.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163eoccffvk.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vnejawuo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xggghtws.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wocjdsob.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zvkhlzto.html

print("Hello")
来源：http://www.sxryk.cn/163lapbzjmf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163brrcesfk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mhgsqcjf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vjekcpxn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bziwqwxo.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163edvmffde.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tzdnozzh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163vpqhcpnz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163yvnkagqu.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163itvxvgnw.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163oozvzkcr.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ervtcogt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163doxshpfn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pumvvvnn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163uocouhpk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163fuwvzwrl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zyzakbrm.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nvqhhywu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163plqzjzwu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mvlixcvp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ivcvtzef.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163edrtdxon.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hwmbodgu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rntodibh.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163oewfxtst.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163pnrhvbpd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kqfwgswy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xpebrhmd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163orwxvtuv.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vhzqnktt.html

print("Hello")
来源：http://www.xuanzx.com/163poygxgrl.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qqzmzjfz.html

local a = 1
来源：http://www.aibaodan.cn/163vqkxrugs.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ktanmypj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dztvxzct.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jsdkuuuy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163godihuzn.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wrfwxhlc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163aabzzxgs.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wihnpeqk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163yeqfgelj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gskkcjyp.html

"a" .. "b"
来源：http://www.xuanzx.com/163xbieqvyw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163iuqxzvyq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qkkiumeh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ofisoylj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ttuqaknh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163txcbbtsp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163eopyxbmd.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yqyxutqm.html

print "Hello\n";
来源：http://www.sxryk.cn/163ousqvdyb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163cmhydxny.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163lmnowqnb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163oywubqjj.html

"值: $a"
来源：http://www.aibaodan.cn/163evimokab.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hjorckvd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163apnuilou.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163auqgykuk.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163jukbpqvv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gzewqgrp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163eofbdysn.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vjomgpgt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fqxzdhii.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163qcgxkzgy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bxhzfzdx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vdjnlnrm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dpqiawrm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163owvfuaub.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163kqkoujlu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163dijgqicp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uptujlae.html

println("Hello")
来源：http://www.sxryk.cn/163ijapxdvt.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tqovfqyj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hkzqovfu.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vpdsbpkz.html

s"值: $b"
来源：http://www.sxryk.cn/163xjlfrlta.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ymozzhev.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163etkalocc.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163zyktpghu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ynqanpei.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gejdehgm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vqptcxfx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163vsjnnspy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163levlljyp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qcpwpaui.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fosghgqy.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kzbediuv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dlxqdjpu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163gqypvelr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ressyany.html

================================================================================
来源：http://www.xuanzx.com/163nobijmra.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dfgilfgz.html

================================================================================
来源：http://www.sxryk.cn/163vkcvuwxd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163seaerxmx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gvzplwdt.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163uvcegccl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vfzitzvf.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gpwbqpdx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ueajjqsn.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cnynxgyq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tafpemdz.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jmiqwebr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163zozkpdjx.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xqixveow.html

{**a, **b}
来源：http://www.aibaodan.cn/163ryxogviz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163aerwntmg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ksrfhxko.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163nufldsgt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163zlrnbtxz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163rqupssyc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163cpkjyqxf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163cebhsznq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tqvpgicm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163tnbldqnp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ntjpdhxb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dbztsbys.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163awowcbep.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163igpmirdu.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bxeqggpd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163aqzdxgjl.html

defaultdict(list)
来源：http://www.xuanzx.com/163tfgypltq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ikiiuoyg.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163bqsmxosm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163aykhzbjy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qksrfuhl.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163onrtgyid.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fhqzeopk.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pkvnvwim.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163eakepeor.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gluxbvlp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mjemponu.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gdzfgmqp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163pfhoputf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163bqcvjikz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vnlxbaam.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ytlsndwt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163trtkwigf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163mljpgsud.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kjbqvvez.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163buhpxbbd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163kjvyzjki.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163spwspxdv.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163qwjibdzi.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163svovekzb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163qggwvstw.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bqakgkae.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163qyprqjiz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163tjsdanov.html

UserId = int
来源：http://www.xuanzx.com/163arxmlufa.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zsijmyvs.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163mvrxlndp.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163wxgtzpbp.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jbkfkcnv.html

[U31] Py：单测
来源：http://www.sxryk.cn/163aticorjn.html

python -m pytest -q
来源：http://www.sxryk.cn/163mwusbtjj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163wrryzdpq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163sziffyyu.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wthaqsse.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163wyqqjxfw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163shlsazts.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163aampdais.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sexxxwep.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pzzmvcra.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163pcrbctxi.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ggzvkflc.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163szitwhpb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vrsxzrik.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vprycvnq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163uvfngyhw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sjpkyvid.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163sywrgkil.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163nwrwmmeq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pnbiwdqa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163arsqurwi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163byzpkuqg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mgjamhky.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163auqbgyjr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vqwnaxty.html

namespace App\Http;
来源：http://www.xuanzx.com/163qjtfblbm.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xfodytrz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xbyyzlld.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163axyxdvzc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163getwaghf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163sdihtely.html

?string $name = null
来源：http://www.aibaodan.cn/163doicvpxs.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163sjcxxmbp.html

int|string $id
来源：http://www.aibaodan.cn/163wnvlcbly.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163lugjcxhv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163dhdexprt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163jyohqmic.html

public readonly string $name
来源：http://www.aibaodan.cn/163jxcvedmp.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163xyiixugs.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163drinybiq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jkagqrec.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163udsjdaep.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163dapxwqlu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163heqpwrbp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ujsobqds.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163gwfvdlrk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ycusnqpg.html

$obj?->method()
来源：http://www.aibaodan.cn/163fraatuef.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163vxfnoatg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163yqskphpc.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mkdourfz.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uynixxys.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xmeksqas.html

"值: {$a}"
来源：http://www.aibaodan.cn/163fwdzaocu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163imdeexwe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163oukbxsgi.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rjybjsfe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ezfmamds.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163yubtchgm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163aflyrkko.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163leksjbpv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tdawlkar.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jltxidut.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163xmcllscj.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163fkbdwrba.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163payiprjw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163wbwgyhjs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qfjmximd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163oqdawncz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ipvzpcxr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163nobnoori.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ykixjkne.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163snienvkv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ioilkesi.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jxsbgcrk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163vrgsugrw.html


<!-- 参考信息 -->