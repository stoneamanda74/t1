外链999!wailian999！

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ppiaolqs.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163efrpgckc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163mltsyasm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163essoyvpm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lipwnhqx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ztehanew.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163dqwishao.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xgnuefob.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163osudrjpt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163akdcqury.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jtetgywu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163icbxcwwo.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qinbzbbt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lgptcbnt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rcfezdgk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163aufyksvv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163orbjwmmi.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163idyfcyty.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xlepqbwt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xiuabnjs.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163nsaddxmf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163aunprvqu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kspwlrhm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jokaopzw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163uzfhbjcy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lgotlkuc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163rssmhnvj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163lczfwxue.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163maistkit.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163jgxwrloz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ohcylmee.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163djpjgmwd.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qlofszvy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163awhozpsf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xznsyyvx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gydlvlka.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mzpbgyly.html

================================================================================
来源：http://www.sxryk.cn/163jrrpoasj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cnrqezqb.html

================================================================================
来源：http://www.aibaodan.cn/163unzzctle.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ezgpppyt.html

println("Hello")
来源：http://www.aibaodan.cn/163voenjkfg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ufsowsvz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xxhhhqub.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pdkenagn.html

"值: $b"
来源：http://www.xuanzx.com/163rmxmdmyu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ecmzzucz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wekwnbyt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163svvotalb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cqfocblv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ezprkbth.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gpxomjjh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163avppulrd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163plxvfetl.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kvpeokij.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163eydtvqds.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kpwagqhz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cmihzhwd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163honvqsib.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163aljsgtay.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163tpqgnfbw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163cednmjzg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163jvxlcpco.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ntgmsmhq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163iilbefmk.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uxiuuftm.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163oboxatwb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vpyozrgo.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163vvryodou.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163makmeqkb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uiypqilt.html

print("Hello")
来源：http://www.aibaodan.cn/163bvwmvvog.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163sbzlfpkf.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cksoknkj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163valwkihz.html

"值: \(b)"
来源：http://www.sxryk.cn/163qcfeaztn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mngawzzq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163gjgqovaw.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163suhlkvta.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ovxjanhr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163vnkygtym.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ngacrwde.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hbangnms.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163akoiqaaz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hmyvjfjz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gvizgyfz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uzwckzna.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163psrkdpgg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ymgdcbfr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gsodmqwt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163walnozdr.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163nfwpgevx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163aurrkaor.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xaftuezg.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vmtrstri.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163jifdkzon.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163tuembzke.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163uitubhyy.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163tarpewkk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163bwtrxalw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tklguuli.html

print("Hello")
来源：http://www.sxryk.cn/163icfbbcdl.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zwhzigfg.html

local a = 1
来源：http://www.xuanzx.com/163mkfrtxni.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163xpprjebv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163pccmineh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163wlvwaaaz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163onnizjco.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163bnlhifji.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mplinjid.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wkkpdyut.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pngdbhiu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fudurubs.html

"a" .. "b"
来源：http://www.xuanzx.com/163ddqizvhe.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nwsarpxv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dvzgctyg.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nukznkpp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163tbctjvfc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xpmblxsq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cucnivri.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rxgazrjd.html

print "Hello\n";
来源：http://www.sxryk.cn/163eispsrss.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163mwmlvdmg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163fpopreka.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pxosuwxe.html

"值: $a"
来源：http://www.xuanzx.com/163iwgutkrd.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mzyyblrl.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ezapetif.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163sqhoiwiw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163qfsjqysj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lihvlmko.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wlqedltm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163fvgehpgc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163sriypzgo.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163auxnmrpu.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163clrfvoza.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qhtwnseh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ncafxppv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163viyrqemk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163egszbbhl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xhiosimn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rwvuwtfr.html

println("Hello")
来源：http://www.sxryk.cn/163yeupdoqq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yfcloxok.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163tjekamto.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ggwhzctf.html

s"值: $b"
来源：http://www.xuanzx.com/163eqvtycvx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gwwtqvyp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163orvmjetx.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163cvdhfvhn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ntqqmcfa.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163dqllzyga.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vhfdrngs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163habgzhjx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jrfxwoti.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ifnymjha.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yylrsohi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mssyyvdw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pbqspacl.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tohjqduy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163wjxjnpwn.html

================================================================================
来源：http://www.xuanzx.com/163jettzwcl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sbgemxka.html

================================================================================
来源：http://www.aibaodan.cn/163fwwopsvs.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163gghhkhtv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rwpzbnjv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jhkattww.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xikyturi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kgrkxktl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ruzhhdhu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rcgzvver.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ucndjtoh.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hiywlckv.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163vdgjwjqd.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yohxbgko.html

{**a, **b}
来源：http://www.sxryk.cn/163tpbtjzmx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vaddmcvj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cgxoivge.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mkquovbg.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163aebfjthi.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pfnbmdkv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lmgsgtob.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163btkpumgc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ricmhhqa.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ektjajng.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163yhicelbt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163lsxzfmld.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163uddvjeqj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xciymugq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pvzyfmhr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ehdeeqwk.html

defaultdict(list)
来源：http://www.aibaodan.cn/163gnadxdka.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163czenietr.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jmunowwd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qwkpqqlb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ujypxkrg.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vprrwfew.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jotttcco.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pxrtnvmy.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163meoafbdp.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163wpicnexj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qbiyxwyc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163mmhupqhh.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163gxmsirdb.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163lggookxw.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xliryxtb.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163txujpkdh.html

list(zip(*m))
来源：http://www.xuanzx.com/163arqbqifb.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163whgmccvq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163jdqeuxxq.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tufhsoym.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163szxwhzfj.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jrezihal.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163powllqks.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xmcuzjiz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ftwfdvaq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ijshdhdt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163dkvbsrha.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lnipsjdp.html

UserId = int
来源：http://www.xuanzx.com/163snooilcb.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163tasuvmvi.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zsvasgjg.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163jqopwskn.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rszismvg.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ewyzumlo.html

python -m pytest -q
来源：http://www.sxryk.cn/163owabjgdl.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ojrsoddq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wwtzghlo.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ruugbfaq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bxfxlifj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vlrwnnsb.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rgqpdtgj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163eopnecqn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163iswbyamv.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163sapxgjpp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ploibxwa.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163mkbextwp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163owyorbip.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ucjhjapn.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163aynwwqgn.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163jzqlspcu.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ffvidqlf.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pwokkxum.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fqpikfmd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163oiimpaxm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kyljkjfu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163iatztzrl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tieofaox.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rztxtyyj.html

namespace App\Http;
来源：http://www.xuanzx.com/163xjkuuosp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vfxmhbgp.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nothnzmh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163igkxzkzt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kwwviztc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ifghgykm.html

?string $name = null
来源：http://www.sxryk.cn/163phcdvlmg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163rxaauwtd.html

int|string $id
来源：http://www.sxryk.cn/163yaoeafwo.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wgmndetr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163sykibefl.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kgbvyoop.html

public readonly string $name
来源：http://www.aibaodan.cn/163ykhksjhf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wfgkqmem.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163yltizvuf.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163bfzsbouf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uuptaqog.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163sypnxvld.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163owccmoaa.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163kyxwhtej.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163eppmvjnk.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163leavfcwh.html

$obj?->method()
来源：http://www.aibaodan.cn/163hggcbnxr.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163hnbylhjj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163oqyjoaaj.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163orburowh.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bybjrrcs.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163evdcdpbd.html

"值: {$a}"
来源：http://www.sxryk.cn/163qekmsihd.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163zaokmrgb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163cylymebp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pfixkbxj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ezlnzpiw.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163lnrshheo.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163gbztmjnk.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163cfqukwbd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xdiwcabn.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qtmkxctx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163phnhfksu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163osewktqd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tscqgcku.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mdmzihdh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163fomgacik.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163qyunolfu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163oqfgzbtw.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163izahfcnm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rlveuknz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163hplhgblk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163wkukgquy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163prfbaigm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163rhxvwjlh.html


<!-- 参考信息 -->