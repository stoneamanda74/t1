外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xhdtvmic.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ogzjpgzp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zekottgv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yophhjwk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uvggfqdm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163cjcfsmkz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ujvdcdyw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163iynmmyyi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jevcexpa.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vemijzzm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163omiosaeo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163zeixsybd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163suvqphbs.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yvhqgupj.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vdekqyab.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163sbddysts.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163thowupsf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163phauqhyo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lnqkcidk.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pbruaefr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qrfarrvw.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pxqoyqid.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lvdzilqf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ksmbcmmd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uofbfxyk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gyhjycjo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wjtloyvw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ptihmfpv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163gleerfgb.html

================================================================================
来源：http://www.xuanzx.com/163rrzglkrq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zrpgqasm.html

================================================================================
来源：http://www.aibaodan.cn/163hrvdmcec.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ccsnyuiy.html

println("Hello")
来源：http://www.aibaodan.cn/163moryfxad.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dqcikcgg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xohosqlo.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qiylgcwy.html

"值: $b"
来源：http://www.sxryk.cn/163drbmldfe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ctckbzht.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ancqbhnw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163bkvwpjye.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vcjoizxn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yrivwtik.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163oqsbdkha.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lmhrknav.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dvcsqrma.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163aiojvbkr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163nfxvfvgt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lldugtmu.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163hcgvdtqm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163szcxolar.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vopwntga.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163jhaokycl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163aglsfiyv.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tbbuiycn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163gigpgehb.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163sopqfjgf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bdharkxk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163odefqtka.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wnxybaxz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xuwahqqz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xgxudjhc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nquziber.html

print("Hello")
来源：http://www.sxryk.cn/163klgawnod.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vvymfeki.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ajtmnhtd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vkeytuck.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kpvtfatx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163qvqooobd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nncccvqs.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fadtbgax.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tymlgkzq.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163znqruize.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163nkpvnqet.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wagdonds.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163omykpgmq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rhallqdc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qdsnvoea.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tzumkmms.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hykgrfgo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bnctegiz.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163limkmsym.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lfwfnbxv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163xhsnucwd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ylaebhdb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hjinkqfz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tifuqyul.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163krfcaiag.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wekgweby.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qojccxrc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163llewpnsv.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163nrrrarny.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gvbvmyta.html

print("Hello")
来源：http://www.xuanzx.com/163nayzsjuq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163gujlraqh.html

local a = 1
来源：http://www.xuanzx.com/163rbiukbei.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163mwcjxbrm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163dftjmplq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nzbqgfly.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163kvffqkul.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163klfphtll.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eacifshs.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jvyyreht.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163fdhvjnqt.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mrtjdfku.html

"a" .. "b"
来源：http://www.xuanzx.com/163lrdxmlrq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vfdctmwo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163airenetr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mzeslcrx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163vieqvlfs.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hhleinoi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ivqxivap.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163majibwpt.html

print "Hello\n";
来源：http://www.xuanzx.com/163tcsebgjf.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163iyppwokk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163chwtfrcg.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pbswibhi.html

"值: $a"
来源：http://www.xuanzx.com/163kxhxeihl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hxpbumct.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ijvtfxzb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163gjrqjnri.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163bppfartb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ddekxnju.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zyjxrtbm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lssaweob.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ixamelkx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163crnzxrkz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163mqjtowuo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lolhshym.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163twrivycf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ozbqbcdk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163jfngeyty.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mwrrtknb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rgtcskyk.html

println("Hello")
来源：http://www.sxryk.cn/163jjvunqfa.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163icxgzhgt.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163rfczriit.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qvgwqvsf.html

s"值: $b"
来源：http://www.sxryk.cn/163newzxthx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vyszbrdn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ltxyavpt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gqzaykgj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163zktcpofb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wpegjtuo.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ryfefnio.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fjaeswkc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163wprwqotz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163egkpwtdb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kjrlkdea.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163uxlsbdbf.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163yrmpktxw.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163jxksssas.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ghfardgo.html

================================================================================
来源：http://www.sxryk.cn/163qmrmndxt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dcddzssm.html

================================================================================
来源：http://www.sxryk.cn/163slenzofr.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lbrgqnvq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gpjebgrf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163ehdocmgg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163izbmprah.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ungtqdfd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163gzggnfxu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163hwvrrynq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163oohmikoe.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fizclmyp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pirerypq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163yffpbebz.html

{**a, **b}
来源：http://www.xuanzx.com/163pkvilipw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bwdrbtyw.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wkacgvtw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zxqdvuzk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ghjfowok.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wbcrgtjq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163lnlzfhch.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ahaxxqvd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163jyavpwnr.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163qzooylzv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163nyicwhlu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163lhfdvpwi.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fwmpuzvx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gpyhkmmo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ruzdzpfs.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163hmbyprsp.html

defaultdict(list)
来源：http://www.xuanzx.com/163uummvuvm.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163lmrxznqs.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163dhxownlo.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163xmtgmeor.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vhxprees.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163eenixrdj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163snqbolac.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wsodpgsk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vamvbtyq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ihrvmdgp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163cdeqcasf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zwgwkjav.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163duvvjmwn.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hlaafiur.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163abpoufyb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163yfwjdnbd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jkclwxve.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163mkprbnyw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xutbjytd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163uoedsnmv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163eoftdktd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dicgtmhh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163svzvinrr.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163fcjghtpx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pjjdjgdf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zqtaanui.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ksgemvwy.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ondbjlkl.html

UserId = int
来源：http://www.xuanzx.com/163juqmnyci.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rqjggzcj.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ahksnzbb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163rrkpqgnm.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163uszpiaff.html

[U31] Py：单测
来源：http://www.sxryk.cn/163srgytooo.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ybczlarg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ymcauliq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163tugavqtn.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ekwpaupq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163crcdlwxf.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163smnujntz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ujidkryv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163avlaiyhf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qsourrsl.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vxtvpqsc.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163aplxcmij.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pcqnobvr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ehmyqzvg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163wbyenygs.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163vzcvxlxk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163cnywghjr.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163kiwcgehx.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163adwgcmeg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zqlastoa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wanajnjt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hpygsddw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rqckrwmk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163qpxxfapw.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163jehrgkyc.html

namespace App\Http;
来源：http://www.sxryk.cn/163kjekrywc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ybdupcmf.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163iiuxcvrr.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163kfqyhlir.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pzjyvcum.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163beotyfnd.html

?string $name = null
来源：http://www.xuanzx.com/163pwamaech.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qvwawawn.html

int|string $id
来源：http://www.xuanzx.com/163pjpxsvnc.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163xwfpqzim.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jprousnx.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163oiugeczh.html

public readonly string $name
来源：http://www.xuanzx.com/163pjrbbvee.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qdyiprep.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163tyaiscor.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163thwfdioc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jonxosdn.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163nfsgqles.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kmtetpmq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cuptgkfg.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163moezadgx.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ptospdmt.html

$obj?->method()
来源：http://www.xuanzx.com/163ndujiitz.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163plmeylel.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jkagiogt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163batjmuse.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kriujsxy.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ijcdaagy.html

"值: {$a}"
来源：http://www.xuanzx.com/163sfsnlizc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ssbelibv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rnlnyiuo.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zjpbckjt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vydpwdta.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nwikufls.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163okyzfcys.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163kyicaojo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163usvbbayc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xoqcadgc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163bojpvxtx.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ixkqervr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ctlicfuw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163wqxnrgdc.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hpxhiqpk.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163omtzixvv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163qtwfwypz.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163jlqiagdz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jptzznhl.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163tpllwglj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xbsmyiua.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163dnybvasz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163idzkfifo.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163tmbeshco.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163iuzxchuu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163vxbzrnue.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tqlwhlcs.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163xykldtlc.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163frexplzq.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163xencpzzi.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163kvkojrji.html


<!-- 参考信息 -->