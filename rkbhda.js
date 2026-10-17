外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163kzdcizjd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kilgvsox.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163euxynxtt.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163xoevvvfx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163eszpzsel.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zgxqwsbl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hfudpzrh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xxejuecv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cdqtenum.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163sbfjowxg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163aibpvoah.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163znstwlar.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163fixomlma.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pppiqkic.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163lcdxznbh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163weecrdjc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163qyltsvny.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163euqpddqc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ujkxdeuj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tjkwnucd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sadlofes.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163szzcjxor.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yzdnfyku.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ttwfdlok.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kdexwgea.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dpksjsfh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uilsropr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163busekjfj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hexznujm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ldwelzhe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ncwzvxth.html

[S56] C++：optional
来源：http://www.xuanzx.com/163eavvpyvh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sztsgzdx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qslmztmf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ogymrtda.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qsbnraki.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ekjdbpms.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163poqhmycj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163uayhecrc.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163sqvbfdyi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qtyzgktb.html

================================================================================
来源：http://www.xuanzx.com/163rzposehx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hvwwhpck.html

================================================================================
来源：http://www.aibaodan.cn/163tnoyqiig.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zpndgafg.html

println("Hello")
来源：http://www.aibaodan.cn/163kneyyubn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jrxkjlzy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163adjmutqw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163oidnexif.html

"值: $b"
来源：http://www.aibaodan.cn/163afwhzlpq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vryrhkyo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163puzyxavq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163awthcqxm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163lhzfvxtq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jauosdjb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ptdkxefk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163gfjtnyma.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pqsanjmt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163blewuqcq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163aipqfwzz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tglrhgts.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163oydiubjn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yuxupfjz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zaxvrxrl.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163strmmuvs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163mauzpefm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mvefurzv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jlhbtkwb.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163eszielwm.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wvlzkfhi.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163czmdgnxm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163zokyjtbh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163qwxlbpzz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163htstjmyf.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bykezjxd.html

print("Hello")
来源：http://www.sxryk.cn/163zstdisxv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163omhqsise.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163tepjzabk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163skeyfdfz.html

"值: \(b)"
来源：http://www.sxryk.cn/163arwmthjx.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163bubulvdc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nbgxesir.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uyfmbgwt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zvuhgdtm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xejtlcrd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163yelqogsl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163krktrgik.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ttujtgyt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cobvtvsd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wmmhxyhm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ovswvkru.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dhjmwsof.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163nhheqpjk.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163zgzqhlhl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ddroxrco.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wiekqbhi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jezptnfh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ujlfvfrl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rjnesamm.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pjzjfzmo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nuwugckz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163quwngozk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cmxozfbh.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163rgcfjsid.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cxbhelaa.html

print("Hello")
来源：http://www.aibaodan.cn/163tnbdykak.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qjceboyw.html

local a = 1
来源：http://www.xuanzx.com/163xqwkismq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ieqsdiss.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xztdrlsn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163znhvpvww.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xfjncqbq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163yprsgbcx.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163smnoskoy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163njthezuf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163clkjpala.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163uzooqrqq.html

"a" .. "b"
来源：http://www.sxryk.cn/163dotaqocw.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cwwmrmjp.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ulmyuahx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tjvjlwiw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vupkfcnu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163zstmwuom.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hkjgwyfq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163yeutquoz.html

print "Hello\n";
来源：http://www.xuanzx.com/163auncjbyz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163naiiqfws.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dxxluobc.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163knmsnzqn.html

"值: $a"
来源：http://www.xuanzx.com/163ssioaabg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wcdhdzyw.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wqoqqlzb.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qlhfdgbg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163sxnnwrww.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163kvtabctt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163eyarxudg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jyxrgdzh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zdhucvaf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zenqcjtm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163qnrzdgdb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sdnmwvbp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hpgoujdt.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rscwdjjz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gijtvncr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163iyybchlg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163knicywam.html

println("Hello")
来源：http://www.xuanzx.com/163oqnvnmrk.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163irglbiix.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163dnfgdejm.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zhfygqng.html

s"值: $b"
来源：http://www.sxryk.cn/163kpecgnuc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ilkltfqy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yjpzukfc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163sdfjuzfb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vratrppt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rvxtlqpu.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163luvyhbqh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163huyldsoe.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163zfoqmfan.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gwamijtx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xzlpvljo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163eebsxfam.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ejamlepc.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163qrwyemdd.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163lxcpguhw.html

================================================================================
来源：http://www.sxryk.cn/163gcqlsqik.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xlgksemw.html

================================================================================
来源：http://www.sxryk.cn/163otknckpp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163nxzoppdl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163wgwcfbep.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163abebvtrd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163claoeqsl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ioncrwnv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ngpqudoo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vtsevrif.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xlqeuvwi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163fbzuxins.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uyyyhmze.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163oohvpwlq.html

{**a, **b}
来源：http://www.aibaodan.cn/163soqbgdcv.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163njfkjohn.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163elitcqiz.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dgikeczf.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ykofxbpj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163onhxghem.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163clvudjhb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163oxycghbv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163plnjfzjh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fgdmxbqz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163varxmlum.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163shnpioul.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dmiyxvpq.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163imhpgael.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wulrqzal.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rclbljbr.html

defaultdict(list)
来源：http://www.sxryk.cn/163kxcqxsov.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163apmhshyx.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ypmkfhxs.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hctblhqb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ivwlmacx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ourpnkhk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fwedsfiv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xrtatqah.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163omnjmuyj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163puktyliz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xeyitzgz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cnyvthaq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hpcodyyd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xdqdqtlj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163roejdzut.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mhxvhbtg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zgriuvmx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163faamqdds.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163prfaidnf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sofjekmu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wnwbhvzp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163yblvhwee.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bqykzcwa.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ucdyziyg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vaeliwcn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163zfowaakb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tlrwqmpz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ehvdpltk.html

UserId = int
来源：http://www.aibaodan.cn/163nnavxlog.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163pvwmazvq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wtidqrwc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163nckvytdh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163enoueqmy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nmpxofcb.html

python -m pytest -q
来源：http://www.sxryk.cn/163hpbjkrwk.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163sptmqanx.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163impwmtkl.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lhldcdfz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163cptblrdk.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dljuloev.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163edxgtnsi.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dpwnxvsh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163rpygschd.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163flqykimc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qngekfeh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163aewzdxci.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163tkioziat.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zrnhgdjw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lqqpjvbm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qupxonby.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163lzqtasgw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fofvrqkz.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163scciuddb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163estimjeu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163xgiomiii.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rxlchifu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163suhkdtmp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ghnkgctj.html

namespace App\Http;
来源：http://www.sxryk.cn/163hgwttkxb.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163heiachdz.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163icddkrln.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163qnfqjeum.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xqjhksbe.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dzydojrr.html

?string $name = null
来源：http://www.aibaodan.cn/163xcpjwism.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163zbbtsvfi.html

int|string $id
来源：http://www.sxryk.cn/163iwwvheqj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163xitceequ.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jsnbaisu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163oefcowbi.html

public readonly string $name
来源：http://www.sxryk.cn/163wrdhtzgg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163evlgbweh.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163gimjclxw.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163llhjftin.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dvbguxqc.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163wtcogqro.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163bigcgsgn.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163vauaxmoa.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163cbqkldqt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ckzvlcvb.html

$obj?->method()
来源：http://www.aibaodan.cn/163atlidbmq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163oevqsrqj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mzialvdi.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163szgiloeo.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qxncezdx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163caxcnimq.html

"值: {$a}"
来源：http://www.xuanzx.com/163kgipgpit.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ysgricfm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163bhfbwxmu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163pxusvzfv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fjfojfiq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163oexwxfaw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163syglpriy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163alkyyike.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vhlzfsai.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163aanbtptu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163wxexsmdd.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163nfcfiaev.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uwtzvtdt.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163kbkptlsk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rgjyvzdh.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163dakiasqr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163xojfwyie.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kbqklrvi.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jznhklyo.html


<!-- 参考信息 -->