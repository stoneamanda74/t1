外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163nfklmtix.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lowqssmx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jdvovkmx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jslphdss.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163xfhjinjs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163grqnobkk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wpprgurb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gmhdumvc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163mrlztdfx.html

================================================================================
来源：http://www.sxryk.cn/163tfanaoyl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nujuvhkz.html

================================================================================
来源：http://www.sxryk.cn/163hudpiznb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163dtlltkrg.html

println("Hello")
来源：http://www.sxryk.cn/163zshujkeo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gdedaebk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hlpyieww.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dgdwuhil.html

"值: $b"
来源：http://www.sxryk.cn/163hgjekeja.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ztzhszbr.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pnnpjnwn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wyhihwvv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wvjlcbne.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163owjgptmu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163madkchtl.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163khykdctm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ogzkacpp.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163whfwhoov.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nitggiuc.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163igdbufjy.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163qmshgrak.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ysyunyyb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mrsezqeg.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nmrjknog.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pukxmrpo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qrnmggty.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ewnhxyue.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bztzmtrt.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mxrugitz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gkyrkjnc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cqefxmbn.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kovmsxte.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xvlzgnse.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dzqlgeiy.html

print("Hello")
来源：http://www.aibaodan.cn/163lcwswppq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hkohxdov.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tifqjcdx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163sqcpplqe.html

"值: \(b)"
来源：http://www.xuanzx.com/163ztxgctyh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vlhxmgjh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163dkhqvsfv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163kkttnmke.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163aidjwyju.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qxdoicjb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163panfvgnk.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fgspvhtt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rkzrngld.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163plhlkrhy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163dpkhcryf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uvffkodw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yzzjnngv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dfnudrpe.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163eyrelrvq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163efdrwcrw.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163iabvouqk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163txcdtsws.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wlemlvwc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jrolefee.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ndqadtwa.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163bvsxqxpc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vezbtbql.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163rjuoyyjb.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ohxxkuqm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fvmkdzsm.html

print("Hello")
来源：http://www.xuanzx.com/163gzipttau.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wvfdafos.html

local a = 1
来源：http://www.aibaodan.cn/163jjdfpcso.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uwxermfp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lkddvqpt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163wjgochko.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bvrpnybn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163eezdsurw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163muvxtmdx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163dvvddses.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163kjzscsrm.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ozudzqjp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ajppnitp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163bnxrmrub.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ownawpps.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lvcamtez.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bfpmuxxj.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163amhnhiok.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cuohknnz.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cqjhhxjt.html

print "Hello\n";
来源：http://www.xuanzx.com/163lzgndrkg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163qvrowehn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163tlhghsud.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jqagymud.html

"值: $a"
来源：http://www.xuanzx.com/163zmxeqdxa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163avskxgvy.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163rngjzmnk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163xmerpnxg.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pdlzttho.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lzvrabrv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lwnigqlg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vyqpnyrk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rlyhxiab.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163tjddgyux.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wrwlpyez.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163dikrsloz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gectttql.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zpwxprjv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pivuawhm.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pkpphqbz.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ghrmgtuh.html

println("Hello")
来源：http://www.xuanzx.com/163ltzkhrbp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163uazzlvti.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163duvgqqam.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vwspoyhe.html

s"值: $b"
来源：http://www.aibaodan.cn/163hgkakyiy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gahwsonv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ampoaeec.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zefafvbv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163stnecnmd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163aefuapyn.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mjzhpixe.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163scjwhemv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kamdfmpd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jazutvez.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mokobpsj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163fyyeflcq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163yrflsqfe.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163qwftlvuq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lhyzbqmp.html

================================================================================
来源：http://www.sxryk.cn/163wiqdpgvl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wulclhef.html

================================================================================
来源：http://www.sxryk.cn/163kxttsagj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163orochwnz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gbzfthlw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163kzxyotwc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ubquzbqz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wzxvnzhn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ttkazauc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mwtlnvav.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163vnxizpqv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163egccslfi.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163palifbgw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lmiyktou.html

{**a, **b}
来源：http://www.sxryk.cn/163kypkipzt.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163dvcyumtw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163oolzhguw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mmzxzgzi.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163qrxjcptt.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163yyndzpfw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ndrkoflc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163lxusfuei.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163szsiaibp.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163oaddtpkm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qpfdjkaz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163miyipbwz.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pzpnciqj.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gsqfsxej.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163felgngvd.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163dqbldcaq.html

defaultdict(list)
来源：http://www.sxryk.cn/163aeuyilfu.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163nuhfhpig.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nbwmmjah.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163zygltmkg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163mexteuzs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163rtxqbjnf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jyanwuou.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163brgickju.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163elifnwbh.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163stmcjtyk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163qbvdgcvv.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uphyoclh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hhpytlfz.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163voslnewy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hadhppon.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pwayslfa.html

list(zip(*m))
来源：http://www.aibaodan.cn/163slilaveh.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163sxngjfev.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tzhopxtd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163brkbdhbt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163htxfkqhq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tyswerfc.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163sfcojqnu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wrbaxcxp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dgiqmwyj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163jqcvfxyx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163oqjgvnln.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gaovzuac.html

UserId = int
来源：http://www.aibaodan.cn/163thyqnpyo.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163mazgouic.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hkjognuk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163songckib.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163afcfxbxj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163blaeinzz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163uynblmdp.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163hithhrpb.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lhtwawkg.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lyqeggdg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163kxbrfxbo.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163ualqjejz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163btqwjbfc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ljjbhfei.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163rxrxhrtp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163frjwfxsf.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163pwluwyqw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163zswjbnol.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163khbsirrm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vcieuwrw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163vhwukiag.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163wrzisumb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ncgbvucp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rvooworu.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163viaumjmp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163nltiydsn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163xamqkodj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163capmiqhk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163accbkmzr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163igorawon.html

namespace App\Http;
来源：http://www.sxryk.cn/163njpnzdve.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163xxxoeydc.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zvfmuxjs.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163eyqzuteo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qseyazgo.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zikbuvml.html

?string $name = null
来源：http://www.xuanzx.com/163pbwryfaq.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163lowpbwzo.html

int|string $id
来源：http://www.sxryk.cn/163xipiyjlc.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163feaarfka.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vcgiirlv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163stbayckv.html

public readonly string $name
来源：http://www.aibaodan.cn/163azvwrchv.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bwqzjycv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xmcfczlv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wlhudmil.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nfjorsye.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163duoqdtas.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dyaedxoq.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pyrkmhom.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163korhrrqs.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163bvljvuye.html

$obj?->method()
来源：http://www.sxryk.cn/163tgaewchi.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163yjixhkll.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pvahxyri.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vpmnsgcm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vfwlkuym.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163kojzlwep.html

"值: {$a}"
来源：http://www.xuanzx.com/163uxwczspj.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163felmguul.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qdxezdyn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rbdgrvfd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wxhjsrki.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163eaesdnos.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ydnqcqlx.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163eovgjvun.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163vtearhei.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qziuxctt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fhotagva.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163nubmioda.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yefptwqp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gzdkpsdb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163xeshzetc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163znfghbrv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163avyrsoei.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163xyfufpuk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163bjbdomvg.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rdfqrspu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rbqzjxer.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fnmvngxg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163blqyngud.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163tzksxwvj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163csulyswg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163anwbrjeu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163hetdyfjc.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163uhpgcawk.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163bbhgvtql.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163tdddwtwn.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163gybbariw.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163iwztoqet.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163iwegcyap.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ribdrdbm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163prygofrt.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mietzoiz.html

composer require psr/container
来源：http://www.xuanzx.com/163rfuwpsyt.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pqwhzeyh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163feksgzzy.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lkgkojtk.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zrclprnb.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163vlrwqwxb.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163yrykujyf.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rhgthzam.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vdwomlvr.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163ngydzvcx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163gvrelvxx.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163buxvmaoa.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ikjgrwxs.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163jfmfuqjn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163mbdjqtru.html


<!-- 参考信息 -->