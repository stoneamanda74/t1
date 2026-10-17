外链999!wailian999！

[S45] C++：lambda
来源：http://www.xuanzx.com/163idotdbhn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zxjiusqk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ujeelehk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yxfvfgac.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qpitddum.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163agebgmhr.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163icyldyem.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163yiirnpyx.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yfbalfmn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163pvfwyjpy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hjokpydq.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163zwduikuv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163cumxjbwl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163loecjieb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hezlokru.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xqmludfw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zmxypeyr.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163tahdrbol.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163laommtrw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163pfdrimej.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163puwsmabw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vnqwyafa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mcgdmnht.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jhfsjlyq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163eziecbwa.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163sninvpoc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cqrexkub.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nttovypg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lkqvgtwk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wiojdntp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ssqmxfwk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cstvvfyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vrwrgdji.html

================================================================================
来源：http://www.xuanzx.com/163naseidoa.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gjahadmz.html

================================================================================
来源：http://www.xuanzx.com/163vefamuej.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qdqejzqq.html

println("Hello")
来源：http://www.sxryk.cn/163xywqqsxy.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163chxwafay.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zckzbwkg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fzasiatq.html

"值: $b"
来源：http://www.sxryk.cn/163zkskddqw.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163easdswcv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jacidzzx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ruidrlfv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163grwgevri.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163viaeifmd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tnlmhwbf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fmzkobsc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ushleaal.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163btpwoxma.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163frlhndry.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163xsxigcoo.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vbycjjcj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163hptyrcop.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163angygnsu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wluchzxs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wbwhldlk.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163sqcstnbf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163kvvkkuwx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163jffiytkw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dwwfmrpn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163crqulfby.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163iklczvnt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163zlkhkygl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nvrudvyr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uohcnulv.html

print("Hello")
来源：http://www.sxryk.cn/163edqclgrz.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163urzqkfxj.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ujdgyzap.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163eedrkalq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163tuholeqq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163milwiitg.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163cuxzhdjh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163clgwvwed.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tiliiruu.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dxhztlxh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xfvvzpzo.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wawwhnxj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163geucbaee.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nlpgbzta.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163rzkeuzqv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dwisblch.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163necwjwyk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163mnckqsky.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ugggmoer.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jinhbhit.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163nxymtqvk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jckcboya.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ksyhtvnq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163oyuyfboo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pqdkydrm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163bucsjtvn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qwblpjde.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ncsertug.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163srzfkgep.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163chbxefqv.html

print("Hello")
来源：http://www.sxryk.cn/163dxbogxxi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163lrnziito.html

local a = 1
来源：http://www.aibaodan.cn/163debgotrw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163axkfzmdd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163kdftzyte.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rjdwnpac.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zswkkzbd.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ngekwldz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ctpqfoqe.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163jchpcccw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qozyukod.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163cdjsuwig.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jlozqyvt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ebvkrxob.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vdtrwmwx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tchysuge.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163woltlfna.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fnnmjrxq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163sjvoiqgv.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163chxbvzhj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zpnfljkz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qoodqezr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ugenvrpp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163pyhynhvv.html

"值: $a"
来源：http://www.aibaodan.cn/163vsgyqqzc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163jygjyiwc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ueljqubr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ajfmyzbl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zhiqqmrc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163evspxczx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ncoqkohx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bgtjzpfw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163akbckzse.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163zgrugmdr.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ixhhxkhl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fsqwnmvm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wuinfwtv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163umnmcphj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jlcrksyw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163enzpbwdw.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163qeesmtom.html

println("Hello")
来源：http://www.aibaodan.cn/163abparohs.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ppfggeyn.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oqirmzix.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163glopmhsk.html

s"值: $b"
来源：http://www.sxryk.cn/163fpfgqgal.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163twpsqsgt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qsprregw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163imqihtdw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ybfacdrd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163didvtler.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ukqtfzmr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tsnetsmu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tryvhtlk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163tuprngjl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dasvohmn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xhwbsnxc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tskdyhjk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kifuwpow.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163qjlliwdx.html

================================================================================
来源：http://www.aibaodan.cn/163qtlivctb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163prsrpzlv.html

================================================================================
来源：http://www.aibaodan.cn/163xrzqutep.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lmnwjxoy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jfijctpx.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rnkcyjrh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163eaqqjxma.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hzyushdz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kxkzphyf.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163garahdml.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kalvlqqu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ewvwisdp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163elnpxtcg.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zdjlfpho.html

{**a, **b}
来源：http://www.sxryk.cn/163ekffwdfy.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163uitrwaxs.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163auvclnuo.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163knlxdttq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pqovgcnl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163goanjfag.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zcmqwfim.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bhcljjtt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163tfsbkrly.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ttzsmhaj.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163gmtjjnoy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163eokokxug.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jvzsdboc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163esuakpdn.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nqntdppa.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vuzsrezv.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zosceodz.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zvczfoav.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163bvntbtuc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mqmulckz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163iwyhgmsb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163vlagmugj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163tceuqgsn.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163idifuvwi.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163zejxyvkt.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163smvefqdp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163wxnztvfs.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ieyfhdtn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ubnuwrsc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ffanjqwt.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163iwrgxvjn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163sppswujr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kglekeui.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163wjceeefm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163jhainnks.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zrsyxems.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ggttkdep.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163usalwttp.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163gevzgads.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163cfqocqwa.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gupfbswn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163kqrcxjiw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163glgrnuap.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163tdxthryj.html

UserId = int
来源：http://www.aibaodan.cn/163itodlvup.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163focfxbig.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163tkslkgvy.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163fepcojud.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zdbtueji.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163oetvczhm.html

python -m pytest -q
来源：http://www.xuanzx.com/163frgydyuy.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mrgeijws.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mbyyglkt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163scqirgjl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163trpqclzt.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163cgjlyfeh.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qtzhsaxe.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163swftlplu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163haxdkxav.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163klgvkhrd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cwgjlqxa.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qalzkutk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163nfqeauli.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qrvjoeyv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163rhsuhlwo.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163szdpgzsd.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vpirdwbb.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hkhmkllb.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wirduaqk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wolqaoco.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ivxbharb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jzvjpajh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rwsjhcoo.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qrtfwgxe.html

namespace App\Http;
来源：http://www.aibaodan.cn/163iysjqubv.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163bfwdoffg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163odksyoka.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163evwocjak.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163scuopzth.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163vxohkdcm.html

?string $name = null
来源：http://www.xuanzx.com/163xqboyyje.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163fzbvbwkh.html

int|string $id
来源：http://www.sxryk.cn/163mfeidivj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163bnbiypgg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rokzfmjj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hrpfbcmo.html

public readonly string $name
来源：http://www.sxryk.cn/163hnbtomzl.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163xcbroucr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163vvuqcvvo.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163dhvyblcg.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163dtpgrqnn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163auqobqni.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dgqqezqc.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163bdgycebr.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163osxhopwk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vvmfwxeb.html

$obj?->method()
来源：http://www.aibaodan.cn/163huixacfn.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163adyhbnvx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163vjqfuwrv.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mtnrvwly.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eroyzyrb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ruyhjldz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gatttuak.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163raiyjhqv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163amhwhcgo.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163krqhcbcq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163onuajkth.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ujomkqbg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pbbhzdsm.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163kfrpmgra.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eonvicrj.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163hzdelzpo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163czapqebh.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jnsrwgup.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vpqgbxxh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yzlmyyhc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163azmatfwz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nqogtphj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163wmajtxso.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dtidkwlu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163kzdqxkwh.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fquaghxv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163duhnwqxc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163mgdcqpcj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wygzxuyx.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zgzcvmqf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163iuiwbwhd.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163vjwucjjm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ltngmzcv.html


<!-- 参考信息 -->