外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rcuwalvf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163okmgolol.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163odxnlaui.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ssglpdcc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kyhunmao.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163czskitlp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163moegfqga.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163safvbcpb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xhelaohe.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kkpkixbp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xmafrtdv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163einifton.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163slcvxapo.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lscnycdq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163piiztrke.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lkewybps.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ivpwzefu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163auxfjfkn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mqhnsjcr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ecwcthlf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hfqiachw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163tftjwtmf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163vkyynhyl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pymegkla.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lofgeefj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xtbiyjwa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qzfzaixi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163tjfgykka.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ognshpwp.html

================================================================================
来源：http://www.xuanzx.com/163mcjkqblm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pvomorhb.html

================================================================================
来源：http://www.xuanzx.com/163rpduxqtw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dllojnpw.html

println("Hello")
来源：http://www.aibaodan.cn/163vwktbcmb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163znfbirze.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163zeeovhai.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gpdrybyu.html

"值: $b"
来源：http://www.sxryk.cn/163txkeobpl.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rhjlbqnr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163doddzjec.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163horousxg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kuzxexqy.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wznlwzby.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ordonhog.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163oeduopui.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dzftjfjc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zelgcfxx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cvwzfdbe.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163vjpdhbow.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qrvyhhvi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qqyhwclx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xxerslpb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hxszniuo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pvmidtom.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163eompvgsv.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163yfpyrviq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163prpjkxds.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dqgsqxlb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163luptduwt.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fwdxtkuk.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kyppitou.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dadldjdw.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163urbemxoe.html

print("Hello")
来源：http://www.aibaodan.cn/163cbwkxiks.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pojpgrux.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qiypqyaw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fplihlaq.html

"值: \(b)"
来源：http://www.sxryk.cn/163ynvusyoe.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ztudzlyz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163gcrfqmgw.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bbocnfoy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163twirwgcz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cptnvvkl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163knthrslp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163whusgdns.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163oyfrisru.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163itfzuvwa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jdssrbxx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163muwmcwkp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163taljuzqp.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163uoidoiaj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qykfclek.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163makptbdo.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163odieojfi.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163heqvvxmf.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163azuexnip.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wildlwnb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kgzyhjdr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nibzcjjb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163fsdzamkc.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163foptzdxd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163uafnempp.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yvostyqu.html

print("Hello")
来源：http://www.sxryk.cn/163iicwsudp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pocvicdg.html

local a = 1
来源：http://www.xuanzx.com/163oaqrvutf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rvmhtirs.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mxmnyspu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zymmltds.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163glvnxbpy.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fgxspiom.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mxlwqzvl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cxjcuuzb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163opsirqon.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pjbzawse.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mxxpggem.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163sxjcmgzf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ypapqbzf.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163lrggfzww.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163caauyigf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jrwtjrbt.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163pqtbygun.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163qjhrqbuz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hgrexmrn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163rviluecs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163mivvzxgl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qvnjenwc.html

"值: $a"
来源：http://www.sxryk.cn/163tcgxswgu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qfhgsidp.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pakixgbu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hwnvxhtm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ggniflkt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dnzaockt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jtrtpsoi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dppjqqsd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rcksxlhl.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lhnmrdrh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ubzhomqo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ukrqzrqi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gldqydzn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ruqvlpyt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hrvslrpu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jjdrgajs.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jrizeuxl.html

println("Hello")
来源：http://www.xuanzx.com/163kracxaed.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gnintnwu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163btamrblz.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163rfskviog.html

s"值: $b"
来源：http://www.sxryk.cn/163txnsvjer.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163bcvopmws.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163byjjrrhv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vqqiqmsw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vyalfwwg.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tiroxjga.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163wubtitts.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wffbvadm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163xduwlfik.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163earaiubi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163eswmzrse.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hgcgkwqf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163iaaubknh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163fngssiqp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ikikatsb.html

================================================================================
来源：http://www.aibaodan.cn/163ciphidbd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163acusyvyb.html

================================================================================
来源：http://www.sxryk.cn/163gxzajfrx.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pticlmmc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163msnnscuc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wrmujjnm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163fhmgwfsd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163nzfqbrrd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fpsxtdzg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vfkkiyqn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163myfpumyz.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163cidohapy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mroezurc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163vntdxxsq.html

{**a, **b}
来源：http://www.xuanzx.com/163kwwomtxc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fwnxiqyv.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163pmnufofk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163uiujgaje.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mclmxpqh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163zxiecbva.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hdinhqsn.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yvvvorgh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sopmoyem.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163urzllmwe.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163glfviuel.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163qfulzcaf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qlsdihxo.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ncmknvmn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jlgdmutb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163cvkewxaq.html

defaultdict(list)
来源：http://www.xuanzx.com/163zdojnojg.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xxmpcops.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ycfxjkgq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ppqbpyen.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163edvrvrqk.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163avatjjzg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163gqozadzg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jmxiwpif.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mhlgkbgz.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gzhzmayz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gwaxwrgr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163sjrduoky.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zfwwfmgm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163dteeqsja.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163lpfzmkfc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ybhyzlsl.html

list(zip(*m))
来源：http://www.aibaodan.cn/163slncfgci.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163lpxzdkuw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bdnupxhq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gkxtdynv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rnwgncfr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qoyrywir.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163pktvlhjq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kfypofry.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pfdpecgd.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163wpznxlgx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jgbswmqb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lloeufwm.html

UserId = int
来源：http://www.aibaodan.cn/163zfwmdelj.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163nkbohgvy.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163sznnkpcb.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163wiyqbiij.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163itlfwdgz.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163oggeoyxx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nmygkqek.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cbzpsioc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163qbliypue.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163sscshdqo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163euifqzrz.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163uxoluphm.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163kvpndkoq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163blhbabmr.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163zatyadqy.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163zgxkitnn.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163raigakjt.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wbvlphqx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vkemrgmt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163mqgovqba.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mgqkzxkj.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163givktzrn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xvrtdhvj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ezldzxop.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163awtsbswn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163nnhmtczn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163upkfdfqq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nqsyjhit.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kghieoys.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163vnusbbwq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gqajbfir.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ptmicocr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xbouyaci.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ynozqdsy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kgcanfpe.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vlsdgcde.html

?string $name = null
来源：http://www.aibaodan.cn/163onuufiqv.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163wjfqvmgo.html

int|string $id
来源：http://www.aibaodan.cn/163vkplculu.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163khkyakma.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163jcmtpfsr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gubxukhh.html

public readonly string $name
来源：http://www.xuanzx.com/163gtcvhmrb.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wbnbjafx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163wbbxkjth.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163beuugxvl.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163rjbvttlo.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ballmdlm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163bcgatqas.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163lmhnisbg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163qdwvlyei.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163erukotiy.html

$obj?->method()
来源：http://www.xuanzx.com/163zvwngraf.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163vgihjhsz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163afnulric.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163tbwfmbwr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jqjojzrf.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163kuihwigq.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rputvmfi.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nnjcskav.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163swtjwpqc.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163crzkbasd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rhxiiifr.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kxxdjftf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163fbcitsuj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163ofknclad.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bsrgkjzi.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163lmwyywfo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163hzwquyfw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163pdlctucv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hppogpyo.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163uiynwscu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163vxesygor.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163expxxnxs.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tlvjtzqu.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163irmpwqhp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163zeaidyut.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163anfyrvxk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gobcupqb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163imftjakl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jmtqjrmp.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ziscfrqu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qgofyyvr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163qkzyofyw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163tkvqishs.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163mouycvqd.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163kphbptgz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ambslfie.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ypomuzne.html


<!-- 参考信息 -->