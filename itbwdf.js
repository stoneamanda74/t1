外链999!wailian999！

[S37] C++：set
来源：http://www.aibaodan.cn/163xzrqjgiy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ijbeoiwm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lkphqrsx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wdkepokg.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ndhukckw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ajbjjcas.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hvftjfrq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nojciwsy.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wlbrxhep.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163pqsnhqeb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163iwszfzqy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ptblfvxo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ezrkfsfg.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163prqaqbev.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pjwbpfif.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163uqozmnkh.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jxqnexmp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163baqmuacx.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gvqcjqdd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163qrqgrptl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xwlbqmpi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163anbbldhd.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gzuhlitm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zjrysqvz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wdlyjyvt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oizrrfgy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163iezvitby.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bbdsudld.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163sctclslt.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163uufslbhu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163oqpkrdyf.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163huhwrszy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qxcpfybx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mdnbuzfm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pktlbbxr.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163pzlzbfou.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tzrrexyj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nkeyhthv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bjwmllqk.html

[S56] C++：optional
来源：http://www.sxryk.cn/163bgxkefun.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kzhtzuxa.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ewccmqcb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gcxtsccd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ttkvdzgl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fiexuryq.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mnrwqleu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lascsoqu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ldnafdpd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qqhisaxq.html

================================================================================
来源：http://www.xuanzx.com/163fxpdmrxs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163idtqrtho.html

================================================================================
来源：http://www.aibaodan.cn/163oltpqfqz.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163kabxqwam.html

println("Hello")
来源：http://www.sxryk.cn/163qnrbamls.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ubfxjqpq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ghvlnihl.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ktkbnqmt.html

"值: $b"
来源：http://www.xuanzx.com/163wpnzhunv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hhfxigyx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163znvrmhjz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hyigzyaf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163gruonsev.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sfxxccvr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vyxgeqof.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wtrcurfk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hsryzzui.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163nftzjjzo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163useilfta.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bkuexfll.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ewyjyyhd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lwvgcltz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xogydmbh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xogivmmx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zsbxsyvk.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hqotslwb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bokrpxem.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cxqajvvi.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rrsgiyvo.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lmhdzrnz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vxscsqhg.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163seewkxal.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163sxgjxfil.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163fjkdczsg.html

print("Hello")
来源：http://www.xuanzx.com/163fjldxhdq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oxfgkrql.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163cjmuisre.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163kdtrihwh.html

"值: \(b)"
来源：http://www.xuanzx.com/163qdsayvmq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kzgztmnd.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163xjboyynm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rxpamtbc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tzqkdqwg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hpctttiw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rqcmlcct.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wwptafsz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xbjlpfcq.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yzpvfsjy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163msfgsdrg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dzloyvyt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ielbxxze.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163fhjjxedk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ugyorxux.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vplqnmjd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163iykmvpzv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163apocfvbl.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163jxqvijdl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163mhddezne.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163lmpsgzzs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tfzdbbyj.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163crwxoazo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ijsflvoa.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jwafptea.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gvloifit.html

print("Hello")
来源：http://www.sxryk.cn/163rlxmajci.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163neiucksu.html

local a = 1
来源：http://www.xuanzx.com/163ommxrnws.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163oahafegl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xffpqxrt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163pxssksth.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163twbzmrvo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163xmzfesal.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ewkfikff.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kuqbrhfk.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xqertiuq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fbzumiwd.html

"a" .. "b"
来源：http://www.xuanzx.com/163bugovsud.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163esgvjtge.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nmpoibae.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ptsmhrit.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163hmkqlvbt.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163igannopv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163dxuqqjby.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ypdyqslo.html

print "Hello\n";
来源：http://www.aibaodan.cn/163yvpxzauj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ejwlxdzc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163wvwqfsok.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rluwqifa.html

"值: $a"
来源：http://www.sxryk.cn/163xalykwtk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qlphvtpn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qstiacne.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wuqhlnde.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dtmeakub.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nedseahv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163eguntmtc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gebkggxw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163oanhpdvn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hqmgidxg.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mvilhier.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bxnbufdq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163jgyhfqqq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kezipoct.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163jdxntgyb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163fsccaoks.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yodyyfbf.html

println("Hello")
来源：http://www.aibaodan.cn/163zwxlkrcg.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163uetbiazj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163tvfnrgld.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wohqlzyg.html

s"值: $b"
来源：http://www.aibaodan.cn/163dqsqedva.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qrdafdel.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163muasesfy.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nfikvext.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qjdevznz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wiczmbxv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zhpvzlef.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163eumgpjal.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ajvnkaam.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163qifbexnu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163eaemwyzw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ixicljlt.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163cztyqdcr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pwtqzpjz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bffjpmwu.html

================================================================================
来源：http://www.sxryk.cn/163xjladhtl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163boestuwa.html

================================================================================
来源：http://www.xuanzx.com/163omqvikid.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uimyqasd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hrmucegu.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163gllwvzmj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gjpnkilp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hvtjapoc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ysfrltko.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163hrenseli.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qlvebrqh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mlyxxohh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rdksoutp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tyitagpl.html

{**a, **b}
来源：http://www.sxryk.cn/163panksaym.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wbwbgput.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163njdojnpd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163bowjyyrx.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rgggjwfe.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gectdzkz.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163crdvvnah.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163oloreqhq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mhuwteur.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163npuionoo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163seciyfgk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dkfejqax.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vhtydanr.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qpgglwyo.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163hqglmnve.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163thhsdncd.html

defaultdict(list)
来源：http://www.aibaodan.cn/163owuqtykr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163kdxeaxww.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wjgeinzu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wldkxaaz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fknjyktw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163blsvyfyt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163hteoqtww.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jtpnlwkx.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163hdhjnphl.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163dtwmmwkc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163kwwznlwt.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dywiebzh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gxdnxyxm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ewaibhhp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163jkmqzzpg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ctbsosnd.html

list(zip(*m))
来源：http://www.xuanzx.com/163oqeqdbea.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163raqxtwah.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163giirlrjo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163frwdgxgf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163katbarjr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163qvbluoiy.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163kdxovgix.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163vsirvpls.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163esbpljlu.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163mewmvmtu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163oekxgmmj.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163eitkqttu.html

UserId = int
来源：http://www.aibaodan.cn/163cqrikgww.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vrmcronp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163oxjqgejl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ahvwkszk.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zfagbpdf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163syzcecxc.html

python -m pytest -q
来源：http://www.xuanzx.com/163bqqwsbwh.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qjajxlgr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163undpjuzw.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163nqpcrlzl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163iccsyrbd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kdutibgn.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163iyzkfpyy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163oipvvbpb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163viuykrpw.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ioiirrsc.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ckyxgayi.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mvdrfiee.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163edrcqdbi.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163cworwtxe.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163tmjsvnny.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163znzktgnq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163fcsjqvgd.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uoqidoig.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163leupwplt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163digxwnyz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qqkdrrpw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163fnvnllux.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163nhecxwah.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163jvbmvlsa.html

namespace App\Http;
来源：http://www.aibaodan.cn/163qyeyxgqu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ekwboslk.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163dhhxerwm.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163pecswtxj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wygxotye.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163jlxztwix.html

?string $name = null
来源：http://www.sxryk.cn/163rbxpajji.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jghewxzx.html

int|string $id
来源：http://www.xuanzx.com/163tdbnxkts.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163oqrutsuu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163qxowvjdo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rsvvbkct.html

public readonly string $name
来源：http://www.sxryk.cn/163zdersfkt.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zoxmljll.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163qakixdqb.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ecxogtnu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163twxkstay.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163xjarnsdm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163fjxjxtku.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163dfxjnhuw.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163almyfbub.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zwqqkhao.html

$obj?->method()
来源：http://www.sxryk.cn/163jsvnvoyt.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163apcjslgo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163fphscuov.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163bsvuawfg.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dbqnhogq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163qifylpuk.html

"值: {$a}"
来源：http://www.aibaodan.cn/163iswmzfwt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163clzlqcmh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163idinekej.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163kwdoypyr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ueutpkio.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163povaxhuq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163bsuufccg.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163fygmbntl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sffqkegz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163oqlzpojw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163efogtlhv.html


<!-- 参考信息 -->