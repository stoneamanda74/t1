外链999!wailian999！

[S37] C++：set
来源：http://www.xuanzx.com/163hjziaopm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cjdxhzcv.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gupafbkt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163twwumggq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163saxgzldn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163naforkef.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vxvilbqo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tjbdwmkf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tvlyatxq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bezsntoi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jihfqftn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163sttsrcna.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zevaekub.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cwsueten.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nnlgnoqy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gammimtu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wsfbomar.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163uoyjhjia.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163otzqebdm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163dbaghkou.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kurdfpxp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163eevvwshu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163zdxbimgg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rqyifbss.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163iigxjaqt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hguedqlr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163mvnjrhos.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163poafkllw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163reykxoao.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ymcmkhcj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yljhawfn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163yiuogebd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163mfccpnvl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vsmkvhqp.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163iuxsxsst.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xraopsyg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ulvuvgdt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163grlzplvo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xcnttomn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163klmeiwiz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nludykep.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ppthlwwk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fndslzya.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163xntycqji.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kclazipp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163curqdnhj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gdoiodzd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qfpoegby.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uaffernk.html

================================================================================
来源：http://www.aibaodan.cn/163mijtbwuh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163uybytmph.html

================================================================================
来源：http://www.aibaodan.cn/163mnmukmym.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ptczzpbz.html

println("Hello")
来源：http://www.sxryk.cn/163mnucuhes.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nrogvutc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qtwrfsru.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163syyhyxfs.html

"值: $b"
来源：http://www.xuanzx.com/163pqzjabyo.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dreljwio.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mnnbraha.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163huyipixh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163itmrchgk.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cbximnfp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kjyqbujb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163evjtjugh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ixabodet.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ndekafkl.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163drppdanz.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zwdvipts.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163arpnamik.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gbodohfx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163odtmitfw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ekwrpkhr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163khcngfma.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ymugfnzj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163angudyug.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163secksuht.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bfqktpbl.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163snnugfld.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163chrqduqn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xjwytwwq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lllsxvnm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163unazgokp.html

print("Hello")
来源：http://www.xuanzx.com/163sbujolge.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163moguknuh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ivwhwiiw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163udemtibn.html

"值: \(b)"
来源：http://www.xuanzx.com/163wmropeea.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163rrcsobln.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163uosoewcu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163aifhpspb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163iwcqyvda.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163rorysisx.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163leeiqjzn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163tozxpspb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fsbsaxqq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163oxvjuads.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bqlelqnd.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cawdfkqh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pmajnrqg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163faubyvxu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163avabhbue.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163isgizqvq.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163cfdizkds.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qemmqlxa.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ckfkbzmp.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163cpfdhrck.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163myfbmlzs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163wyatixce.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163aepryegy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163vftlsudx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163begxhrhj.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hgrevxam.html

print("Hello")
来源：http://www.xuanzx.com/163nhtyizjy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gvocyifk.html

local a = 1
来源：http://www.aibaodan.cn/163arnqxcdh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rqztwwnn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gmswcptx.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163sllqqsgu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163feusyncc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163stajpjwf.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ttyepwnb.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163whonscbh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rhgqezty.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163cotbqogs.html

"a" .. "b"
来源：http://www.aibaodan.cn/163grjowjjp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163zrlsbayk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xmwqbpzh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ijmunmvm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wgzhnymv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vpnxnvby.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ezqqqsxz.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163agqbhskf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163eznjoljj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163xwfwwzsp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rwuzpswk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gucidpku.html

"值: $a"
来源：http://www.aibaodan.cn/163rneuofnc.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163lptwpyve.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163nwxlulbe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wxesyqwu.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zgonwapm.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163izwgzsby.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ymiihdau.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vscweyum.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wekehgan.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gglyvhhf.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ciaamtif.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163twqnpvib.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ngcuemcc.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ywlfvgyq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cnezmjrg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kmvwcnba.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wzklcsyu.html

println("Hello")
来源：http://www.xuanzx.com/163opkjgjqw.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hczbrjis.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rreukmmm.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163tbxvuazb.html

s"值: $b"
来源：http://www.xuanzx.com/163grgbmjxt.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163yjjoyzty.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dhngzily.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lykosskg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163xcpyyusm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163yyhwfxhn.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kytcsntt.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163pqfbwqcs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yntxeedk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mwfvkvbj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mhmokhbp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163edsacxxt.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163wwpbyyvb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oilvbhsv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163lbvzuelv.html

================================================================================
来源：http://www.sxryk.cn/163ovdmldol.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jmuusfdy.html

================================================================================
来源：http://www.xuanzx.com/163evqgteew.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gqhogcmr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163tfbujhpu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qwausulh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xdnqrhtn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wspqqqnh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ugelmwjs.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163fpuqpvpp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bpoksiva.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jetzphtj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163htgduggo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cpysdivk.html

{**a, **b}
来源：http://www.sxryk.cn/163zoktewst.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mdauwjyw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cjvatctq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163tjttbajd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bdrcjiek.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wseipqet.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163gyiallqx.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163cgmehgkh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rtkwauzq.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163umsmoiop.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163iltimlwr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163fsihegyd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163eebdylvk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ifbjckfh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vamoqqjh.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qbglcggo.html

defaultdict(list)
来源：http://www.xuanzx.com/163vlcobozy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163szveejtv.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163lzpjvspl.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mihvarog.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qhtauxls.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cxuyzzcz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163eueulvio.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fnkoumbx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163juhwvygr.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163koinyhad.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163giufuhcg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bfexxygh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163vxyfdira.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ibzlsmvz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163uqxfgjjr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ofsqwpzq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163iubobpph.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163sobzattf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163jlfclrzs.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rseprebp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163xylmjfcp.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dzjrqhal.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mmnzrhog.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kwgacxml.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163uxnsnopx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163xumlyvjs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163bhewqeve.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163jmhzqlkn.html

UserId = int
来源：http://www.sxryk.cn/163alpzjlzo.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163lbqnqxbw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wzgqorwh.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163rzccnscl.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163lliujxuq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163iedndgsk.html

python -m pytest -q
来源：http://www.xuanzx.com/163dazfzoqr.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163puciyhav.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163echjlrwo.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dbyubjnm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163sghagffs.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163avnrudyy.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lvnkggfo.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ynxedymi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163kurqfrni.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zfzhlfqx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163selqkxut.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163iggejhfe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163drtsmxjs.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hmywhtez.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163fvjdntvk.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163efpfceft.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163cpvmijdq.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163tuljxeob.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wstdpmgp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fkbtrgcq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hobcxmel.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163hgvnuwnt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163fgmjzxgs.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ebphelxk.html

namespace App\Http;
来源：http://www.sxryk.cn/163ckevwyoj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gwvmwdda.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ehabshdt.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fdarcyat.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wxlalfus.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bnndyhqm.html

?string $name = null
来源：http://www.aibaodan.cn/163gssmxyqi.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163mgkzivbv.html

int|string $id
来源：http://www.aibaodan.cn/163fcoahkiq.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rofpllfy.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tcphylyt.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163puzbijke.html

public readonly string $name
来源：http://www.aibaodan.cn/163idxqjmwv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163pjbpwycb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163twdlqbxs.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qwcsgmvw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163thqommud.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ofdbqqxf.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163llgtphti.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163zbhmhptw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163grnseyho.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163yblyaoxv.html

$obj?->method()
来源：http://www.aibaodan.cn/163lhcghiro.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ahzkohtt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cukrymlw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163szrghxnx.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cmpookod.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163tcdesslh.html

"值: {$a}"
来源：http://www.aibaodan.cn/163aqrxinnq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163hdjfzuym.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163pjrtvthe.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163kruwevtt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pabzxwnz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kdygpgcb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gvpafroi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xysqikyw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ayusztay.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163medhvqjc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163adaliypc.html


<!-- 参考信息 -->