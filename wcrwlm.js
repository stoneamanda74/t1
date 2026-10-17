外链999!wailian999！

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qvcoyxiv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163pwclzroh.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jpefrfbf.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ugflviep.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uwnxsuqb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zubhpooq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mhjkqyzm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163iaabiomi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163hdryrxkj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ogjczbbv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163snctnadj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kifesfbw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163bfwcojjf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163slfuudqi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wzzplils.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163occjxxar.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163phhnkdeq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pjzazzgc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xmuvwftn.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163knbnmchq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vabpvnpf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zyfszxsm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ynyrkmqj.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163yxcbpfja.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kwbwxzep.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163htaxlgys.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nfaxwymi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ybcnfkoy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xcqrtfpp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163koxlgqax.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vhbzvfzo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cjuqxldr.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xsaktcnv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163mqxwatky.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fjebggpl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wguikgvf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ibtshioh.html

================================================================================
来源：http://www.aibaodan.cn/163mvnqwxzs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rpialnbh.html

================================================================================
来源：http://www.sxryk.cn/163debxnslb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163eupakkrz.html

println("Hello")
来源：http://www.sxryk.cn/163tisxzorb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pfnymxcl.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ybmkeznh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ktfemisy.html

"值: $b"
来源：http://www.xuanzx.com/163xhfedjtx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ffzufkmc.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rtxfngmg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163pqhbpnbr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163lqeoabgt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dszflljv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163xzhwajdl.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hrovddhs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163yzmaubzr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yydbrwtl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cyypslpj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ryxbryxc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gkrqnvce.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fqtpjhsv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jmkerfmx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mvwtzrul.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163azslebwg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wvuwknft.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jqoyjeud.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tccaehoy.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163oshmchli.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163msihkswo.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xrremwfy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163twjceosn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163iszuuukx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ccvtrnqd.html

print("Hello")
来源：http://www.sxryk.cn/163klqaffgu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163saithfvs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163juhmerzg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ecxoujht.html

"值: \(b)"
来源：http://www.aibaodan.cn/163tdxceemf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163chdombdg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163idlixtiu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163joxgnvpa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163gtutkinn.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ckyyzxnf.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163uexbfsvh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163pdwqfwam.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ofoczkrh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163vtnovyol.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163epklrpnz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163nxlfxvdu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163qdnwpkik.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163gyygaohr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163earjivqb.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163tjmejsng.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ldimkedj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ervccxzq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qntsedcq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163arlbdyhj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qtkpnequ.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zvfyzpsb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zobfoznx.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163qjwmwxbu.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ctcvlgjw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163wftfbewm.html

print("Hello")
来源：http://www.xuanzx.com/163jkcqvzkb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hitfjwfz.html

local a = 1
来源：http://www.aibaodan.cn/163wvgtzdae.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hkzjftog.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163gvwcojdu.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lqlnrshq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163cugiuwmi.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163kzddrscq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zbkgmrkb.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ikwrrnie.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wpykzqly.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163luqmhxbl.html

"a" .. "b"
来源：http://www.xuanzx.com/163shnedkue.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qaxmbrkf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ndryzdxg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163eeqvfwqs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163coawggkc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lpbnwplh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163cchsqwwz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bqssxnxg.html

print "Hello\n";
来源：http://www.xuanzx.com/163vgbhltne.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hvohrjvu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163kdebmlkj.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163sjrnqwco.html

"值: $a"
来源：http://www.aibaodan.cn/163hdcvxqgt.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163btdqalnd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ywytyedh.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163mvercwsb.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163pezspkql.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ektlxamd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163kwedhqci.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163iwdduxrm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ypklhvdt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163apumbmgi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163cqadjoio.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rtsqnczq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hnrqsdfe.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163sjsyzpba.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xngmfwdz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jpqcyorv.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163gwdafooj.html

println("Hello")
来源：http://www.xuanzx.com/163hyrqlzuv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163thkkgizk.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163xksqqxnk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pjqreqvq.html

s"值: $b"
来源：http://www.aibaodan.cn/163mzppijlk.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xuylnoqf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zdmpvxwl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tmtnkmli.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nesubgyy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fsoxmskk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163spwtbmxm.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163zgzjtrdy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ljihzdyn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163unnxaymb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sgsjgqqa.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fuqbomrh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163gefaaxom.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ukflnnpd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163otudvgpi.html

================================================================================
来源：http://www.xuanzx.com/163ruidhobg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sutrzqbs.html

================================================================================
来源：http://www.aibaodan.cn/163faujngdg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yfkptgbu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gyraxpvg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163eutkrgjj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163kgbhmruf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kwgpfgbc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163emkppxff.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ymsoleit.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163yakmjaqo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163gpyuaedj.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163uvwbtxeo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163wsddlfhb.html

{**a, **b}
来源：http://www.sxryk.cn/163rkkcjims.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163aaxzrvol.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163nwovzkym.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kaixeqqx.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163objvbuix.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kharmzgc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rfkrgcfd.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jhtcytzd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yeckqjqz.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163iaaeuakm.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wtqnhelo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163lgoqhccu.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xijknlif.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jeeuslfo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163kdohquls.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163yltmbmuz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ttnmzaol.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163wdzkrttz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kcwebjqi.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163shkruzmf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fhryzwdz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163gnaeugtg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dlztclln.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163rbuyktcm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163edozpmzc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rcqoihnw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163vlewsils.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gyycvwpd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hyvkvhyo.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163cjutjlov.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nndruegw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163nixoiwng.html

list(zip(*m))
来源：http://www.sxryk.cn/163sdqvcmte.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163luemhnmx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fdfnjssv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zbmdgalq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ghkbbsgm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xcwsodnb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163iywvobhg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wedugftz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163uoekwsyg.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vblzuplj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163hshtragn.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gfrczpzd.html

UserId = int
来源：http://www.xuanzx.com/163tpcgyohe.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163mugkfqpl.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163osfqaqsq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lqquaobo.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xhsjmmgb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163xdaqxzze.html

python -m pytest -q
来源：http://www.aibaodan.cn/163oqwaubvz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163slqffbkz.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tauoabyz.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163vmismudu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rtsrhamu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ysxgiuet.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163zzqhbfky.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163pqlbrzlu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163oeaoxcuf.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zriiqwjc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163lwhkwqpr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163juvmizhq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sheojzrb.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163mehjyogi.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163iqeqhauc.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163tzxgylfm.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zadwzrhp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ylmwadzc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wqvzwtvz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163moabkntd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163gzflayry.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cwxcitqj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lfdrktxp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tqzamymc.html

namespace App\Http;
来源：http://www.xuanzx.com/163mwqdewwu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163rilqnhcn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pwexbdkx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ufcyfxyt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qbhiqzlj.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xwjggamp.html

?string $name = null
来源：http://www.xuanzx.com/163ouylhyaz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163browrisq.html

int|string $id
来源：http://www.sxryk.cn/163mkytyewq.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163cziyjowd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kmnambit.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ayhumrid.html

public readonly string $name
来源：http://www.sxryk.cn/163hufaykra.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nxsiripj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163akojjzbz.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163esrklmzd.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zzhgivei.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ppauyfxl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163enghqbqs.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vdafgetu.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163nuhiqrys.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ydfembvs.html

$obj?->method()
来源：http://www.xuanzx.com/163zkkptsyp.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163nffxrldb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ctartwjr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163qzyqmdxl.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kwkivkzd.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xxxgswqk.html

"值: {$a}"
来源：http://www.sxryk.cn/163mwtgmwkj.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163omgudrub.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163dcsnxaxm.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163bhgaeebm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163onlbcroi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163slyfyciu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163tecsodmc.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163wjhrczgn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eqjhukbd.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163itgrpbwx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163yydxzidr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xjkuxqtg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fskrmfbg.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163warlshbd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163djocevne.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163pllarbef.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163foepnhlo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vvvazibm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ouzqojmn.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hwfqrfaf.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zsbpxtrk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163yvgnsmjj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163thpbidqv.html


<!-- 参考信息 -->