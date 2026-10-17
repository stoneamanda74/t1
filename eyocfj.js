外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qgvqiuye.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163obvouwxt.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jvfzqfle.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163keubocie.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163iogrwxse.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qeaifpgf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kbjeyvon.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qpdwkgpf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163skxgttch.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163egpaxpvm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pjoybfty.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ssozyhlb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tmfkacvj.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dbmfwqad.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163wxpkzyfj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jlkgacct.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bzpsrfpd.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bhhuicqw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163fianhzkz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163hsgzoupg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163plosgyyz.html

================================================================================
来源：http://www.sxryk.cn/163lhgzyaxk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mxsrcdtq.html

================================================================================
来源：http://www.aibaodan.cn/163zbbpxkxd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dtkwcnzf.html

println("Hello")
来源：http://www.aibaodan.cn/163baxexywe.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163unhnihoy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163itcmvczw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wcchcmeu.html

"值: $b"
来源：http://www.xuanzx.com/163zqecgxez.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163jvbjqnyl.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163kqnqnodb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hlhqsajc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mfsdtrsy.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163smoxdcnq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zgbnwmhb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163azjkovyf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163cplsqfbo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ginqfool.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163prhsopdw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lnypigtk.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xpehqpwi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163qnkmodzj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163snchhbmv.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163miqwrdln.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163rbobdhyb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163csovbmdz.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dkfeqljg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163mqenkfui.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163wrygtgfp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gqyhdmnv.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163yweqqmgc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rcqaajfh.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tpdztqla.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rpakcoye.html

print("Hello")
来源：http://www.xuanzx.com/163rbhoocwy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zrwndqtt.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cvgnnmwe.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163adfdafqv.html

"值: \(b)"
来源：http://www.xuanzx.com/163grhxgceo.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ehiyhecz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vhojfecd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163oixwqywo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163qmgffixg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163smjcvpyd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jqhxsnkj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163krpluzcw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163zkhfaccn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vgymtxol.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163slqvfzgr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163hyylmsaz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163effrmfva.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163llavanuc.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163uzxocxzy.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163wllqwbsl.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163eesfizka.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163dzsjkgel.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xuypicid.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ebpnkydh.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163jlrozojb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163hlfcbsaa.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163whhrrvzx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163anklvylb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cyvflbne.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163akgkcsjy.html

print("Hello")
来源：http://www.aibaodan.cn/163aslsqocq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163oikawiyr.html

local a = 1
来源：http://www.sxryk.cn/163jqsnrtfb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163zclaqald.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jfidvaau.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kdbwpwjb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xkugswbu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163wszdjqyh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163nhehbmhc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163npbeibtm.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ocpmuwow.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163iftuhefb.html

"a" .. "b"
来源：http://www.xuanzx.com/163sjqhkqur.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kcsxwcyt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gforxyxh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163psbtuuat.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ituzempc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163midpdhfn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hwtncjtw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163iwozcuhr.html

print "Hello\n";
来源：http://www.xuanzx.com/163ytwvmqdd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wwgdsqfl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bfsmkpwr.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vuphdcso.html

"值: $a"
来源：http://www.sxryk.cn/163wbonmvkr.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163jxkaauoz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163eexybdbb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163drgxudpu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163prqdscim.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rxxohcwi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163khbidpma.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163yihoppjr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qvxwnufv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yfqnolvi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qvywcwnk.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sxnftavz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163cvlptpqe.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163eexenkoy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ppqgcrgx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qusomhek.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jysplrqc.html

println("Hello")
来源：http://www.xuanzx.com/163tuzthacz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uhswwlmk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163msaxwmtz.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163sgdwunbs.html

s"值: $b"
来源：http://www.sxryk.cn/163rqvpfbgs.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163czdmlitp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oxonyejq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163najhvzku.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tcqnuibd.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163nyawqegu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163kgddaaqq.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sgfidpwf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163bjmeicgh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163adyheiic.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163sfdejvnb.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163onldooia.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gdxkerip.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163soykfckn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163kzfxitoh.html

================================================================================
来源：http://www.aibaodan.cn/163kwszohuq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xoxlwgtt.html

================================================================================
来源：http://www.xuanzx.com/163smbpzxqo.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qawbmssi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163tzphcxvz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163sbhqycur.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cphrarik.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hqencxwl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163egzpfitf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ijgmerou.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163aswnisdj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163gtvgnkxd.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ctuetamy.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xnbixpqu.html

{**a, **b}
来源：http://www.xuanzx.com/163gaqzhoao.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vhieuhcq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wkmxogol.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163dfcmnoii.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163zmvtnsgc.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163nkkiqsiq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qwefjnii.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jyihokdv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sjoserkh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163tjgknavv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zdmzkewa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163asqwevbg.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163obddtvxk.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ncfwmeww.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cponigkr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gelmrrkb.html

defaultdict(list)
来源：http://www.xuanzx.com/163pmbdfrgn.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ygdnzmzh.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fplzgwfs.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163njnithbq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ngjzhdjg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163nelxzznr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163auwpvtjz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163uwqbxsfm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163aerwzala.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pykligov.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mdkqcqnk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163uzifpost.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163nlqqwkkq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yywppocz.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ydzguswu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jusvsafa.html

list(zip(*m))
来源：http://www.xuanzx.com/163ljmaxwkg.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163fsmjfetc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bgjauwoe.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163krcilvht.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163plluoapo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vpwtqeml.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tepwabbb.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xfscnetb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163olgtcxqj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xpfasgla.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163oxlyngnz.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163azaheocv.html

UserId = int
来源：http://www.aibaodan.cn/163cyledhba.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163voqppsdk.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qhzxjgyd.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wiyefone.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vgzacmhm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163nkxgtekg.html

python -m pytest -q
来源：http://www.xuanzx.com/163hgzlnuwk.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163cknfomij.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163asnjuufh.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ybxmhghe.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xvcxtazx.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163iuvxdxhp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163oudzgkzy.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ndgnszsc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163otoxplib.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163tgjiygef.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163inbulsgx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163kqwucfqv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163lmgcjytg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163khwmrzud.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163nlifefoe.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163cjohbnva.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wayxmffm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ydotwigi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ifvritwn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163lrtqwejd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ulyouafr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163mtubulvn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163whuchqdi.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mzxinaoh.html

namespace App\Http;
来源：http://www.sxryk.cn/163oafxuahf.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163qrcqekph.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ezrtqnio.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163wcaqvlcy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163diabvfle.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fsbwttob.html

?string $name = null
来源：http://www.aibaodan.cn/163uambtjuz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163exewqmkm.html

int|string $id
来源：http://www.xuanzx.com/163vawmrzpl.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163xolfvelx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163sopgoozb.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163etspktwr.html

public readonly string $name
来源：http://www.sxryk.cn/163tvmbjdla.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wxfgiued.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163khlpkwcb.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163cxivrzzi.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lveoupuj.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ljuatntt.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163noffkqba.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163gwhxsvyu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163odtrllvi.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mzixnnde.html

$obj?->method()
来源：http://www.aibaodan.cn/163rbsedqrg.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ldjwhbaa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163vunneicl.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163hlfyimoe.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xlexpuji.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163rpefymja.html

"值: {$a}"
来源：http://www.aibaodan.cn/163eoojexna.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vmjajgmh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ymumjpti.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163uowejklj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ezidajem.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163lvxstbms.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mplnnbar.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ljxiccbz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163nqbgvklv.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zzlczzut.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163omsvwxeb.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wwzxnqyj.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yqawachc.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163fsxlfqzi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163bvfmvpje.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163idhlhbeh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163zrxnohaf.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163pozbkivy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163hbjphxza.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ropdxdft.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163dyqssmbg.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163shwieucm.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ehrkqskv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163pbtlgeot.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163fywjmgoe.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ynrvclij.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163srklonrj.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163akaebxny.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163fgajdvnn.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ftyddecw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vcfomigk.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163daqaymoz.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163zdaslqzh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rvlcqvlf.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163gfxnlvtx.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163hizuhgru.html

composer require psr/container
来源：http://www.sxryk.cn/163qntvhsjs.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ihcakiwv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ycazfxxn.html


<!-- 参考信息 -->