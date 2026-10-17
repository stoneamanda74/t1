外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163izkmcvcb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ooedblhv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163oozcpiyg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ilamsxal.html

[S35] C++：map
来源：http://www.sxryk.cn/163gbiwjpgq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wqxsyppg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xpzbcsip.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jzecutbn.html

[S37] C++：set
来源：http://www.xuanzx.com/163zjviowdf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ybuummnw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wlsegdnh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zhebrphm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xstqszim.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163iuievwka.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ygmkhzln.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163bualunri.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xgchrwpg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tfkmwjad.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163epglrywh.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163lprvfikb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rdusykav.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163mpvblwtd.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wpxgqoqe.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nihtivxp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mnarlckg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ljplkwzm.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ctppyplc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xiflaufi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qfjvjeiv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163mxolkotl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163snyxbkpa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nkcjeewi.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uexzcqhk.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lpppyzvr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163aikoerjw.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wvoixhik.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163prkdlzyc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nnigeyfm.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163afctlnvi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ogqicvct.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163aryncmff.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vmdcenre.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163uhnpomdm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163obothjzg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163egeatsad.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kwyxrspv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oqvylvho.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hxarimxm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vgfxaldm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163njzftchh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wnklqakf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gseqsiyf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qstejxpy.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vpikxpub.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bglaptqh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fbxuivur.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tzcvyikw.html

================================================================================
来源：http://www.aibaodan.cn/163lmlnlkao.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163owiqqoks.html

================================================================================
来源：http://www.aibaodan.cn/163hzoaupsy.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cpxoqqec.html

println("Hello")
来源：http://www.xuanzx.com/163hxulmlfu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ivomnhke.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uqhwmchd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rarxtowe.html

"值: $b"
来源：http://www.sxryk.cn/163guhvrzzx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ocohnpgn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xrtwfujn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jvarlfdy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xhnkizif.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jldgpcpd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yqispzhp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vmumucsf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163viunahkd.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mmvfbouk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tvibkhgr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163rggjumqr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163jiytniuu.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163umzoawqd.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tagfeskc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hxgwtqbs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163bjtueled.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jpdtpvmm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ufyzdham.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163kmrlojjk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163jdtedfbl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163frxiyaee.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vtxxkcpg.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163dmqlwznp.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fqomkxva.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163smunhvok.html

print("Hello")
来源：http://www.sxryk.cn/163flzxxoql.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vwsbvgsd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163frewbxlb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163beesioac.html

"值: \(b)"
来源：http://www.sxryk.cn/163bhjziffk.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163whjvlvhb.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163enicmoyg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163koepvawr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mswjdrft.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wuzhhmfr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mkrdmmoa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kgtbscug.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163iorlndht.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ghytdtlo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vbzkrikd.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163jbztnaiw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wtsmttda.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163uajvaaqf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163lobsxocb.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hajsdjmu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zqgzlnhy.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xlqoggru.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163icwslkwy.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fgnmsxbf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163avduvxbx.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163owfjqjlq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163xpevqxos.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wjmtwple.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163yhppemrf.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163khgkfxki.html

print("Hello")
来源：http://www.sxryk.cn/163wtqofeer.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163inwlfopf.html

local a = 1
来源：http://www.sxryk.cn/163xndlojkh.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163utlsyipw.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163komfqudu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163iilfivcf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163sszipawf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pehgbtaa.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gcocfdpe.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163znxiplyl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163izmskwni.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163awkxwkvg.html

"a" .. "b"
来源：http://www.sxryk.cn/163ztywfygz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qclclruw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bllmajqg.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163thkupsot.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163kekcbyqt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163eakzcceg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163humygdns.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163lccjnlyp.html

print "Hello\n";
来源：http://www.sxryk.cn/163riothboi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zvpiqihj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fnwzenrt.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ipxgggco.html

"值: $a"
来源：http://www.sxryk.cn/163wxsrpefy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163zlixtroi.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mhmsqrjr.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163bdhniibr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mczvubdf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hkqqausv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hsyegbdx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163desjlidn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wufqclyu.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163tedxwkmc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163spimytrx.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163kggghzju.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ugzjrlza.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qlkwggcq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ykbiqfli.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ngyotaun.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163karxrikw.html

println("Hello")
来源：http://www.sxryk.cn/163jlygdspv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pkftyewd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163pdpaleri.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gleoqlnv.html

s"值: $b"
来源：http://www.aibaodan.cn/163yhubrsxo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163wylneeah.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bsejcocp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163awrcylun.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vrnypncs.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163atjpucmd.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zfchwbdy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163svxunimi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163uvbedjuv.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163twiaunwh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163spkoonso.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163npgegevq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163oqerythe.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gpcdngoc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163quenmcfa.html

================================================================================
来源：http://www.aibaodan.cn/163pelhxckg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jvuchekx.html

================================================================================
来源：http://www.aibaodan.cn/163wodsrexo.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163xpewsnoe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wtyvtmah.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wnewvrlo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rudxjpqv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163vrdxbvcv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163sjbcbzxp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163awcjtnhs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163byejdnmr.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zxzwbmhn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zxilclih.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163dvatyhei.html

{**a, **b}
来源：http://www.aibaodan.cn/163eniqnzlv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wcmrsczj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zqedgaer.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163aunvsoza.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vyxyqqeo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163jnztacpi.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163uyjcnbwb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163girjbxxf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kwpuzyqi.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163runykhqh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163huqbbmct.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cxqkjpbf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163uamflhjq.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xdxxvsaa.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zusxcmtf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ikcushrt.html

defaultdict(list)
来源：http://www.xuanzx.com/163plqjdtbh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ucutnujl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nkpbokej.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ggxiaeqx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kixunhxg.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163sayjaeil.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163kjdrlswr.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mdkxnawg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ixqchqvn.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163mdwpjzqb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ptvfvakk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ylvdcffc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hsjehjmz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jgiijdur.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cjmvrdvw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163eolmeesy.html

list(zip(*m))
来源：http://www.xuanzx.com/163dsljyisl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163rkszdxse.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163yshzfimn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sztneyec.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163nktyzwej.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nyjmvjib.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nnphxogo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ymtngswc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163zqfmxmuo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xmlztksf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163rjbfebxf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163xirjcupu.html

UserId = int
来源：http://www.xuanzx.com/163amqzkobg.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163maodimdl.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163aximuycx.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fbclelkv.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lzoxhtqa.html

[U31] Py：单测
来源：http://www.xuanzx.com/163dxcavxls.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ikcjiglo.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wobsytrl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163vornxzgb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163davvdtmg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163yeoflbuv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163qpehaenu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gpohbvkc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vvbtmhkd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kojqzqzu.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fmayxwew.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163kxzwwxnt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qvkldqwq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163uulndyko.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hbcubbrh.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lvjwmpwl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163owoybfwj.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pgjsslfe.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zlbqjdks.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ajpnbyro.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fxwkyvmm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bkkrdkif.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163axqfgiej.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nesompub.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163huezbmvg.html

namespace App\Http;
来源：http://www.xuanzx.com/163iiernset.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163nkttgsxq.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163lqluvwrp.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vtyvshlt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jqqjdubg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vsejtbse.html

?string $name = null
来源：http://www.aibaodan.cn/163ujagatvx.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jldtinop.html

int|string $id
来源：http://www.aibaodan.cn/163pbmyjgqy.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zurzhpfw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ihreoemu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163sivlwses.html

public readonly string $name
来源：http://www.sxryk.cn/163slgivxdg.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163xxvhuzig.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ayghxdcc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163bgtdmidd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mivdwexd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rbqripzy.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163yatibgvr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163gqylxsej.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163iyppjefg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163owygrkbf.html

$obj?->method()
来源：http://www.xuanzx.com/163zpixegvx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ubeoport.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lckkkdbu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163lgnoxcct.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hihptnkr.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163vldkedoy.html

"值: {$a}"
来源：http://www.aibaodan.cn/163vliptefx.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ybolexwd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163aofkossa.html


<!-- 参考信息 -->