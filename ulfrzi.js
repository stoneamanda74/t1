外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rjbfalnc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sydkwrzn.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hjotkhae.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zaciecvt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hkysdwcw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rvmjybee.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163icjansul.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tcyscewm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163aiceehkm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ixtbwfdk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163flvhvngq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ypmijxbi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xxgtmayy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163yuenmxaf.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163glpilbmb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bkssfsae.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bizqxkhx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ysjkywpm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ruwxszzm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163kyokhiym.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zpaekcur.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163bdihowbm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163czeyhppz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163etghtwgo.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dnetgtea.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163stzanpll.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hffxzaix.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163domxegnu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163fmwhzayn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rnorxnxf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iqyhxxlg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zhfhvuci.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aemqchnr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163znjyxtok.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163uvknducm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163efpmohhd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cdoyealv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163zrdnnzfp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vshhnfdo.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lbiocfbo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hqotfali.html

================================================================================
来源：http://www.sxryk.cn/163yutyzrjp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ozwuhrrh.html

================================================================================
来源：http://www.xuanzx.com/163lgejsdrd.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jbqtuvhg.html

println("Hello")
来源：http://www.aibaodan.cn/163mwvtfhmo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163btrfjkpt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163viythygk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lhlxquaz.html

"值: $b"
来源：http://www.aibaodan.cn/163ewavdudh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qffrujpu.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xcotymxq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jbmctdyo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zlrloiem.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163avwafnti.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wrjvgtzs.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jpnobacj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zfbblunc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163mvgwvzxt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163luhwaokc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ahgbgpgr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qdoihiuv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163yolculbg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mlhfoigx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xkzkhcqi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bgwdjlwn.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163umeassjs.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jgkvcqei.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163koptcacn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163okcodthq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tvfmszke.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163lltymlfk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hvsnjgdc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163obrxqkvc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163wsiiwett.html

print("Hello")
来源：http://www.sxryk.cn/163cfctjbsq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qckdehlj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vptbibuz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ydxuohzr.html

"值: \(b)"
来源：http://www.sxryk.cn/163dnkycnkm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bmalywls.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163urpaadaa.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163odxjkkil.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fksxrlpw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qgxalpjo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163qygrqrsa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lufsfsqf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163edfbqssr.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gynoyflv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wzbqrfan.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ahocuxlu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rpzmscmc.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163buewgprf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163gkxonvqp.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163wehiijrr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kqvvvvxv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pktzsocx.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163iztnxikt.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163xfrksyjl.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163pyjkbxvh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163bvitrlil.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mcgaeuxw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ijvaqxvv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163stushejv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qyxpubam.html

print("Hello")
来源：http://www.sxryk.cn/163jvfrvnhr.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163sxchwsnu.html

local a = 1
来源：http://www.sxryk.cn/163uysbpyqr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uucuhkhe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ywzfesqk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163duqknsst.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gjyhyifs.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qcrlxtet.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163coodmhql.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hjpzngpb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163cnynysgd.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163zbhnzcnd.html

"a" .. "b"
来源：http://www.xuanzx.com/163fsispzao.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163aqfcukfe.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163yofxakoi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163xqtcmhda.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rmuzfpcm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ubzafjuk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ddgysoai.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163tfwddqux.html

print "Hello\n";
来源：http://www.sxryk.cn/163dzmjcttw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vteozcoi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ymtdftic.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163phaondja.html

"值: $a"
来源：http://www.aibaodan.cn/163rvekqoqp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bktlwsib.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kxspbimd.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163nxnwywtl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163kkvcmzmn.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ligegasi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nkyaxicm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vkjcbmyb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163phkpvucf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163eecdxblq.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163cawxufmq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163uionzzsp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bqcxczba.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163nxofnflq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163xdsychkk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bbbwlzos.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ctulduhq.html

println("Hello")
来源：http://www.aibaodan.cn/163imxixqoy.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pvgbizup.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163geqlloon.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163bsniqeia.html

s"值: $b"
来源：http://www.sxryk.cn/163ksnukuto.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dqtoqadn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xfmtjdux.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rpkqbyko.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163eznxbmsi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hlmfcvuc.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wcwioitt.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163odyywedl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ltukhiyi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163azptlvjy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163yweqolel.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vaxzxhak.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163wmazbfxd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163spsmfsdp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bacckfkt.html

================================================================================
来源：http://www.sxryk.cn/163dpvgjobf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fheyobpj.html

================================================================================
来源：http://www.aibaodan.cn/163nreftiqm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jbwbausl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163stpniwxr.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163nkzvvmpd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163erkwnigc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163yalbpqhd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zdfmojgd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ejwcdkar.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ezomdaff.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163mvisaaai.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163knfxzrmw.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163mcsvuzee.html

{**a, **b}
来源：http://www.xuanzx.com/163przgumiz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lkkopjtx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163sezgasxl.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163gbmcnkhy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163uvreyvuz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163fzbpulta.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163omxnfaqa.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qniohtir.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163zajewvri.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163jabycpxx.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fgvhupcg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163zhribhhp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ybejooqk.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zuygdrvx.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163vhdjioof.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tzawenwg.html

defaultdict(list)
来源：http://www.xuanzx.com/163qibjtysi.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jzscqcyu.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163oizksriw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163woffaapt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gggroepi.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163aajjcxxn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163byimdqrx.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ykitcnbi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zdosfrfr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163gfcjiosa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nabxnwks.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163mgcogclu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163troqzpcb.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163azsecjmg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pmebmlow.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ydvtgmhk.html

list(zip(*m))
来源：http://www.xuanzx.com/163noblqjpq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163cgjfggrw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vupebili.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vrelwfjf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163zjsvirmu.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ndyokmjh.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163naiekvhv.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ckgbwtho.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163aahurjix.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hnpzmijt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163covcuskn.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uwqblrwl.html

UserId = int
来源：http://www.xuanzx.com/163fniawdkd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163jorejjkk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bopcnkgz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163pbiodrfw.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rgohqsle.html

[U31] Py：单测
来源：http://www.sxryk.cn/163dpsjinse.html

python -m pytest -q
来源：http://www.sxryk.cn/163oitekdbd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163vpufwpji.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vgdkklrs.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ijdnamfg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163samfwnpj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zorqcdlc.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nhsetdzk.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163hdpogqxt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sckgvhwi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gosmspdp.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163xsvgobds.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163olvhyamf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163dnifjkro.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163arpqozns.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163kdzvrrot.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163zylgopoi.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163cjmlgjsy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163moqwfwrs.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xgxxnyhf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gklfeuiv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wqaluzrx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163liqblddm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163yctalgmu.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163gdkplopj.html

namespace App\Http;
来源：http://www.xuanzx.com/163ieifweez.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lsbbmxqt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kxfryoaq.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163pqfqlyed.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vwphngas.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163zotwbvgl.html

?string $name = null
来源：http://www.xuanzx.com/163zokakmbv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163udatvzxr.html

int|string $id
来源：http://www.xuanzx.com/163jwvvfgzc.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163lcobgxnr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163hpxvfhtm.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mfzadanu.html

public readonly string $name
来源：http://www.aibaodan.cn/163qhahoqnn.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163phshjypm.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vviupucl.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ifxjnjbt.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xggqfhqk.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zczwsgnj.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163waqzjmkc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bomedohj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tkxtpsbr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163qwbwdauo.html

$obj?->method()
来源：http://www.aibaodan.cn/163gcgwgfmk.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163hfhkqsow.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vhkspsri.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163tkjksvdk.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bbeompwf.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wqpgheas.html

"值: {$a}"
来源：http://www.xuanzx.com/163dwrvhqsv.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163bjcbhjrh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163mkdevthq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pfwuismq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ckmzphaf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163vmfmfsbo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163jeduicau.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163mjhmzamk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163cndvrabm.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163cevwljun.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zwrkbuvi.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163xupvozxf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163viveyapb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nrhvitxm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163twgxiqpr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163pgfdbqit.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163nzqjxyoa.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163rbygnhbv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dqzlkphj.html


<!-- 参考信息 -->