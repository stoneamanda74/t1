外链999!wailian999！

[S35] C++：map
来源：http://www.aibaodan.cn/163wpunsgpl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ubpkphfr.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163oplmtued.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xhildnxs.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jptwjjqu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rbhymbbf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zaycwuaz.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163oqcsflgb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zklglabc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vxhbndpx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163fptkxpsv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lymqpsfw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163khddxyix.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163klvwdpxu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163isoknnee.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ttiqcdya.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163fubcemlv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ghegwyub.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163kkhmjkts.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zcylzmxw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jcniyuae.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163caeigofc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163kurqtljy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ztxefqzf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dpxffjsn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163blnkxcmx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ffhlzxzd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163glrmeooh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fzsqzlgr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ddbtnwiz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lzrwxfzf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163eaoqdgxi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163shqklmqq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mlazdsee.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163huqucsap.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dnqqdngl.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eacvigww.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qmtujfrq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163zcfghbya.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ptnaciwh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163irtvqrot.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xbadscmo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qmudraiv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163wjzhpirn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zmyyvskb.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163uarpiuze.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tzqdljkb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vtdzevee.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163htyakgjg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ewoqofmm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163igxnrfbe.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163alirwzpi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ilviftyz.html

================================================================================
来源：http://www.xuanzx.com/163nhgckgzu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163irwkujhj.html

================================================================================
来源：http://www.xuanzx.com/163kolgdypv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ytjvfogb.html

println("Hello")
来源：http://www.sxryk.cn/163bfxdqnhy.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ctswjgtd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wugrfmnj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qcrkqotd.html

"值: $b"
来源：http://www.aibaodan.cn/163sjksltzr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wayahlue.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fvuboqml.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qhqievry.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fttugnwg.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uaixeihg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hoocjtgk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163qipbqytm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dgoojaxm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uvpjiprx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wumvlbhf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ynfgvppg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mebbwaav.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163krgwcokd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vsqnniky.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163lyvxztcv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163peuxsqsm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zlehgrbh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163spolbfax.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163guguzxxr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hbmtlgmd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ukgtnbay.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163brzjulbk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163stsbaldy.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163onlcbkhm.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dffyxytv.html

print("Hello")
来源：http://www.aibaodan.cn/163ymiapdkx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pqnouwiu.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kbbdqecn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ltmlvzuy.html

"值: \(b)"
来源：http://www.xuanzx.com/163rcodpqlb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tpkvxiik.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163eeltprot.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nmitfzdm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163gtmvdrhb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hxobpesk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bnpohszv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kaeokqqs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163raetlemv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gnpkbsfv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zgqtnkfq.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163honechvu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gwbhpaqd.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cotldugo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jqilktgn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cdnogwts.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163lffkvzvf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163aggfzycw.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fiksnjvt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nziuqlbc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ekzrnddz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bqsndhpu.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163tqbsrxbu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kbslafmq.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163neicgnxh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163prflaxar.html

print("Hello")
来源：http://www.sxryk.cn/163lbhmtpzv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kbdxlejt.html

local a = 1
来源：http://www.sxryk.cn/163shmdljsu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ajcufwlm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rtfqfepi.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163oafujtqc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163syhivzrp.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ksekkpsj.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163brrxeloo.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163imyxoixr.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163iapxzufg.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163dlslhmma.html

"a" .. "b"
来源：http://www.aibaodan.cn/163knardaim.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hbtiocpe.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ckqayziy.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ngtgqoey.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ratoutlw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163patdxbio.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163whplqntk.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163rscavzpi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pdvmrtcg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163xlvipzch.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jayowauz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pjugurgx.html

"值: $a"
来源：http://www.aibaodan.cn/163fxjsilqa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zjyttkgz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ppnhkrqu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jxwimics.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163joesxhlf.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tlscabfj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zhfeithe.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jwfvyewc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mnxfsilv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163tlohkgwu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163buzubcrb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vipzbqjn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pcqtthxr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kjfvjtte.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pyniabcd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qkgizyzt.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wttkrdfy.html

println("Hello")
来源：http://www.sxryk.cn/163pvzserty.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163updopndn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163rhxhocek.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qmniqzod.html

s"值: $b"
来源：http://www.aibaodan.cn/163ijjjamvm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zhdrursr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zwlsjlme.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163mzeatddu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ntkzmlmz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ldbfedok.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vyfzczpv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qczangwt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163werocsef.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cwhcmfgk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163vsiiizwo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163baibowvt.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163krenerag.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163toiurtwk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jbtseaxg.html

================================================================================
来源：http://www.xuanzx.com/163qadmtsnu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dhfsnmlr.html

================================================================================
来源：http://www.xuanzx.com/163nzsnhupa.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163xldbieat.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lwacodtr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163pnoshvmg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163oldmpmqr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xkdfpfwu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163vxrkawwp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cufrhoej.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zgmddgze.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163jdvrppsu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gkqusazd.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163crdaeypm.html

{**a, **b}
来源：http://www.aibaodan.cn/163vhpfvhzb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163suffbeqa.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hkzofkhr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vlzvvoff.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163joywtudl.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163clmenbmh.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mcoyjukc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wnpeixfg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163cbvqbscf.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163slarhbih.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ishygfin.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163llfgvulz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mfevixpo.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ihtmdxqx.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nfsbmdda.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163vzvnwdzu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ecmkfjlw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wrcmpiyr.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163qviisytw.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163jbenmosg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wzydgdui.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wyvwomph.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vytvkkjz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ikzjecid.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163vftpixjs.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163bocgfukr.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mzrydcxx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gumvfioh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163zpmcablq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tnsfoipo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qchfippz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163kjmoikkw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kegoahei.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wdudhdnj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ialezwrc.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163esyvetho.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ujydmcqa.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hiysqvjn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ggjawzbi.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rcmbkgum.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lvkzbrpl.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163duxgypev.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163tkjdfcjx.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163euvgwsjf.html

UserId = int
来源：http://www.aibaodan.cn/163ltcbfxgw.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163xxfvkwoa.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163vtejlnua.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163olkxqajv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ygxqfsbb.html

[U31] Py：单测
来源：http://www.sxryk.cn/163iiforvkl.html

python -m pytest -q
来源：http://www.sxryk.cn/163gxucpykp.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163otytufri.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ptwxptpr.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ifmtmfrj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163loetegcf.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lmgkjxgx.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ozhhpbgg.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163mwvhjyyn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mprflyeo.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ckdriqrw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163njhmtwby.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jnlalfab.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sbszaqft.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163icwxtavu.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163kpjcyelx.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mqevibbf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163sjjbaajk.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163xqbsfrax.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xaoenqws.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163vrvwvkvz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163xugmddft.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163fjvexbua.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163zdzylajn.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ipgdylhc.html

namespace App\Http;
来源：http://www.sxryk.cn/163eoskfvqx.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bogogsgt.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163htpqqhwy.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163vffkgosk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eylmqaam.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163frztxlkh.html

?string $name = null
来源：http://www.xuanzx.com/163jfjhmqqd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163elsepboy.html

int|string $id
来源：http://www.aibaodan.cn/163hfvhejaz.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163mazigssq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jyiwbwdk.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ltfeodnd.html

public readonly string $name
来源：http://www.sxryk.cn/163bbjjvhqq.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ydysnlse.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163nneqcvqh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163unmwdqmz.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qkzaepvx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hrshxhic.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163fmgefnzf.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163lucfmhge.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tclfeqib.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163eoftkxfn.html

$obj?->method()
来源：http://www.sxryk.cn/163qgbohkis.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163hemnucab.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163agsczvmb.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163zdhseoqw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163edpvjcle.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ifxpsfwz.html

"值: {$a}"
来源：http://www.xuanzx.com/163pelembff.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163kjcjgfhy.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163frmhtnzd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163osbjahev.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qvydgncy.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ppulfyoq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ysuoqzzl.html


<!-- 参考信息 -->