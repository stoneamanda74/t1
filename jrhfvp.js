外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163newgwtxv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lfbrwewk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163hmxksjda.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vttraljw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tmacscit.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fwxhftjs.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163heebqzxn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gbrndwyq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163oztiwdvw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163nklrizgx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pfhtgdjf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gcnonlsq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wfcsteoc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kjeergve.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163kqccdpey.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ybdsofla.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kbddxuew.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ohzimztn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dpwgwfrd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hripkabp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fymfawhz.html

================================================================================
来源：http://www.xuanzx.com/163zsxiljlm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lgyskuie.html

================================================================================
来源：http://www.xuanzx.com/163bnptviqd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yoeexivy.html

println("Hello")
来源：http://www.aibaodan.cn/163fgtfegub.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163twqlcsqt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ildiqiui.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ycahubgo.html

"值: $b"
来源：http://www.aibaodan.cn/163gpjdbwsb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kiqzamln.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pgjfcmtd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kjqpdikr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163aehjhlkw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163twirnijj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163nxqfsnru.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163achcdygz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163apxmojgi.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163oqqxwpio.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ohkuieng.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mlmbsapw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163darbstce.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wvuhqspi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qxkoeqvy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ceanmtsl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163axraecgd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163sdajmxiv.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xxaoppit.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ldwvdqhe.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mkfstsrr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163sjdneggj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163jldvlfcj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xefehett.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mszauinz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163mxvecewf.html

print("Hello")
来源：http://www.aibaodan.cn/163aqjqhgzn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dgmrncxs.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163evgcqjpj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163jcwzujip.html

"值: \(b)"
来源：http://www.xuanzx.com/163ijhdrhef.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bhtexdzq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163csejjbti.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163wqviddue.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163whmkgmfn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163vuzwwrcb.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ltoghcfs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163quemzcqo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sdrledqg.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163sozxrwxz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vmalifnr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163nfnltfsu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163balnwdyp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163cvmokkww.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163omcukieg.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tnymxera.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hmqcmsmt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qcuubgjq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163upuqedet.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163yysozdvp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jdwyxvje.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163sbjbcdhu.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rbuncjrz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ljlwlenw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hxquwfvg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bznpsyut.html

print("Hello")
来源：http://www.xuanzx.com/163gtpbdmuq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ttsgreid.html

local a = 1
来源：http://www.sxryk.cn/163rjqqbczi.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wynessyu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ljwouejs.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163nzajktoc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bhylawyu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163thqswduj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gozfcltw.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163tuumalqb.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163cmdhdnff.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ovvaqyub.html

"a" .. "b"
来源：http://www.sxryk.cn/163koxhaxiq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163mhyohdoo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pvuyezbk.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163knguwzzy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163gmapzqpd.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163glvkofvi.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163tcxlqmes.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163jnudndkn.html

print "Hello\n";
来源：http://www.xuanzx.com/163htpxghtc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163clrxbdii.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ljsgeyab.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163lvcvlipq.html

"值: $a"
来源：http://www.aibaodan.cn/163owgcipky.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163scolowqh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nnlughja.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163fetcvjmw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163odzgdvtg.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jgstbygq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vrvshwng.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163tvosdpkd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163blyzpnuu.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163htezxizz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163armzvvdg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xjhubsok.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ljcitbqa.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163dzkompqd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rkguvoyo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163idygzuwp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ddrbsuwg.html

println("Hello")
来源：http://www.xuanzx.com/163rbcotddv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163nqhodjrs.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163voqrwvzi.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163sotxdtwe.html

s"值: $b"
来源：http://www.xuanzx.com/163jbjxqura.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163joizbznu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163kksdffeh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tarszzpc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163tzzgbpnz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gynkybbv.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163gadfrrwk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163jrjhsloq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pxspcptt.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vunwzygd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rtofawqf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nszdugnh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nifxqlxw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qtkpaebo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163isqfserc.html

================================================================================
来源：http://www.sxryk.cn/163grywxfdc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163xhgocjzv.html

================================================================================
来源：http://www.aibaodan.cn/163cfbolhrj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ujobkahw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163vbvsxxoj.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163cvwyruiw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lyiqcmdc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163azkotdxu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163twdpfraj.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163steslcbe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163qhtpaigx.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wgcdhabr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jokdzvoj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zrfdexuu.html

{**a, **b}
来源：http://www.sxryk.cn/163fevrwhgk.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dwycwced.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163lqlnsqfj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qqnrpvqp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163jxmguqdq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vwlqtfuq.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163byzauhee.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tybcxbaz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sgwlmrhq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jqcsmbee.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163etolpset.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ubgxacrd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163sunzcdnq.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fizwvkqy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nyagwjxz.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163gpqvyzjh.html

defaultdict(list)
来源：http://www.sxryk.cn/163nhbdfqsc.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jjzazozo.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163zxajafjf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163afhcjyxf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jdxynaod.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163lywvygpo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jinppoci.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163drvbuckv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163cdfinkge.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ahcwiojf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163punmjbqp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163akdmpnyo.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163aqcbhpbz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163euieuiud.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rhhrzvwl.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ihcebtpx.html

list(zip(*m))
来源：http://www.xuanzx.com/163vvrtzuqo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gismffrt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163migsjtfd.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xhuhvbvv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qtcuhbke.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163yvlphgyp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163okmtbqff.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eoaeulka.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ndqbjobs.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163puwbotnj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163hxdnumnz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163uhwftely.html

UserId = int
来源：http://www.xuanzx.com/163gnzaeaqi.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zwnigeng.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zwwawycl.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jpoxcefb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xxijkmga.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163oxeorxsc.html

python -m pytest -q
来源：http://www.sxryk.cn/163cdgsljow.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tsojdukk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163dqbjhjsy.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163thmsffcx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163htqvgxrx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fvritrhh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hftzpflw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ubizfbek.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163chvsogqz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hkaxoeht.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pjavskgs.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163rxzxxhba.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163gterxmqp.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163qgngkaor.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163quhwgtsu.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163qcpvhbnn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163rytxczym.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ngkedtkn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mdmwjqtl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163cuyxyajh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ynnvdiex.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ibxlpjgk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163legpawom.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wmgnnjyq.html

namespace App\Http;
来源：http://www.sxryk.cn/163izbdgcen.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wicpmhhj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163iykaxzrr.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ihylwuzx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fyuhiyww.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ajvbflqt.html

?string $name = null
来源：http://www.sxryk.cn/163gfvzccpo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163krjbwklx.html

int|string $id
来源：http://www.sxryk.cn/163pppzmxma.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nxiwoczr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ljpbspqa.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wkwqzpxf.html

public readonly string $name
来源：http://www.sxryk.cn/163lvorltag.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163ucugrpct.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163dwyoiaig.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163obdebjjw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qrlblkdz.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mvafhsqo.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163bpeshsdr.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wmwnvspo.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gsuphnbx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163ukgeofer.html

$obj?->method()
来源：http://www.aibaodan.cn/163zhxwcfvy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rulkmgue.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163msclhwri.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163qdwyimtr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zeuvcxqm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mtghxntc.html

"值: {$a}"
来源：http://www.xuanzx.com/163oukfarwq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163zkiuxjdp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163eoycdppu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163cdfafxqe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163samlhhys.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163buyymtnz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mlqplafv.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163iqzzrjhv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163huftycav.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mlmerqgq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163rtbtvpcw.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zefknhjp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jqiromlb.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163bqmpznvs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163kwjwnwoj.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wbxufdvm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163lqghhkbs.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163azbmagne.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163kgghxvch.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163gznlypkk.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163eemedhvd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163lwdzzdvq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163oemkrsiw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163updiumjf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163rpdmdojj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163vvtidicp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163czymewcs.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xbisbrqf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163cbqrlgqt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163enkoxvhu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163yjzdxosm.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163fszujzmn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ovdpgcix.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163illpudec.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ecfsylht.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jcbsgaoj.html

composer require psr/container
来源：http://www.sxryk.cn/163oqdhksdh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pmzrbvbv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ykfjehje.html


<!-- 参考信息 -->