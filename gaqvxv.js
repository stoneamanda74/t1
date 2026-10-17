外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gyytpmsx.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ppuvexsi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sqxvfrev.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xmavsjer.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163edmwikna.html

================================================================================
来源：http://www.aibaodan.cn/163rziecckd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yfxulgyn.html

================================================================================
来源：http://www.xuanzx.com/163cgvgqfjz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lefehlcb.html

println("Hello")
来源：http://www.xuanzx.com/163gamfzbjz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pfxgzxsv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163cuoljxbv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lpxkgphu.html

"值: $b"
来源：http://www.aibaodan.cn/163infwgvad.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163bshckklc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163edfahbau.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bxnqfmph.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ydigguam.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zwybuuab.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vxqiigqr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jiqokntb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163avgaijzn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ykokozvr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163mmbraccl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163brejddpx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hyawvoxm.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gpoogguq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163cbttgpyv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sqgmywoq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ozzgphxg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nmdjnwbk.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163amfcgclg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163oohukroh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163htkqrcuo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163eidxyizl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pehdctti.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fizdhsbq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jxqmjett.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163cnyfanyz.html

print("Hello")
来源：http://www.aibaodan.cn/163pbhyvejj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163etnbomfj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rhoirirh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163izawjkki.html

"值: \(b)"
来源：http://www.aibaodan.cn/163etxeaywx.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163gmmlcsds.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163qxgzyhod.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mwgaxsld.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163krlsirgv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163muhbwsou.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gnhmbrtp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163mjvnywcp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163yombcmse.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qfydmlhi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wktqentb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ugmjipfv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163bvqhwuux.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yvkltfhy.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sjggwumc.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rmsvbtgr.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163khykrjgb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163jqipuddn.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163pwxltgkf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bpjbulvy.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163okztgkkw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zpdbgchc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zpjxgjwb.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163psbqvveu.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163kkiafhpd.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uohnjpif.html

print("Hello")
来源：http://www.xuanzx.com/163mgkeoqza.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cowepaib.html

local a = 1
来源：http://www.aibaodan.cn/163rfvkoqjw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wxvdhmna.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163utgxqghr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163qytkkvjr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163xafcpohj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ktgfjbnz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163eujzbydh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163kxifdcor.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pankfpbb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163lgcerurg.html

"a" .. "b"
来源：http://www.xuanzx.com/163ijqapffi.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163fumwaifx.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163cozbdvvw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xvxuqsdf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wuhtjqxb.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163aadwuckt.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jkokxzpj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163slffjabo.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gumrfzhn.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ajzkkxob.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163sbzlhlau.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rbkruzdo.html

"值: $a"
来源：http://www.aibaodan.cn/163nvrfwaat.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mdshpcee.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163fmnmlcpd.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hfjniwho.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ijsstdqj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nthlnfuy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bwysoyas.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gxcyezvg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163idzflqnz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xsbuqfco.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163cmtcbukl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lgyywbut.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163aqpwajxm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163sprvnitl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163fnjozuvu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qgyvssma.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163kliriuri.html

println("Hello")
来源：http://www.xuanzx.com/163nuwphkhc.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ifxgnscr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163iqvrtimj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163svsfffxs.html

s"值: $b"
来源：http://www.xuanzx.com/163fxkullys.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163uavkyaju.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jwvicdje.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mjjebiau.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163uoxgoeze.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163htlfjkrm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tkwstsaj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163wjyisikj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rstwzimn.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qggfrobe.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163xwtbffnx.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163lwdcsess.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163umjiycsf.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163nlrrmnme.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jrpwfqur.html

================================================================================
来源：http://www.sxryk.cn/163gjicimzj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mrjszkfn.html

================================================================================
来源：http://www.aibaodan.cn/163ouyjxslq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mtgjpetg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bphlhjlb.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vieqysug.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ihdevuwd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tcwiaubh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mrvgnhgz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163tulbeyck.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163cyzzorfy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ieaquykw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lhsyploj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hyqhdlzz.html

{**a, **b}
来源：http://www.xuanzx.com/163aemqqhul.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ryibyibq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163hcwhqkjp.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163burepmao.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163duzefpbr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163edmevqre.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ussizkaj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163nzfjnxin.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wudwfiwm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lhwlktoj.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wiisnzkf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zopffniw.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ioxvvdgx.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163wbkewcur.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kaweelbu.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163apoefkpn.html

defaultdict(list)
来源：http://www.xuanzx.com/163naeiksms.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163orghfilk.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163grfcpthb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163iozwwtbf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163msokkzhl.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163iruclfva.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163eeugznht.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jjpchipj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163joueqpqb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163gzbjiwmd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163tjndenxx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jdwqdaeu.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mwhchudj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hfcmhwvr.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163amkrvhtv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163iolhctjl.html

list(zip(*m))
来源：http://www.xuanzx.com/163hxfvicwb.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163edeqcygu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qnhivtrk.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163pumrqyfl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ocyddvlw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163vvfhstij.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xmlzhrav.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163htsflxld.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ffdzsdxk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163nslydlpy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163rejefylt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dkjfxdgo.html

UserId = int
来源：http://www.xuanzx.com/163yyqmcvse.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163npemqaaf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wyrxoama.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dbnibzmx.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163meaoagfa.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ojaflvyh.html

python -m pytest -q
来源：http://www.sxryk.cn/163qtsfsncn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163preydavp.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yvmldznv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163muralaax.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163pnipjpcw.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163eldnbbqz.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163eybpbzkx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wubegqrd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163snejxgov.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gplcsupo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163goprqawf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ulyyvhth.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bitcofjc.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fupepnfe.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163rcxhwicg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mttmdyfb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xqhsrehq.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163edcarpsq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163cttdvkzl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ybqnsfix.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rvyzjybm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163mpfzhwzt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ilsoyebl.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163quujeily.html

namespace App\Http;
来源：http://www.xuanzx.com/163krudvdpr.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163sebwmwsm.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163awseejnh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163dcvecmta.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qeotiqlw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163uiputpck.html

?string $name = null
来源：http://www.xuanzx.com/163adnbvval.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163mmayzwzz.html

int|string $id
来源：http://www.aibaodan.cn/163ypgnblkb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rwidejta.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163icieqvnt.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163zixtfafu.html

public readonly string $name
来源：http://www.aibaodan.cn/163xskujfvs.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163xlajjmrs.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163zoofkncn.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ywzunlyl.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163sstmbzwi.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163phrlqcmx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lwjbwocd.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ospvfhzw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163kjhhueoy.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vmdxwbbk.html

$obj?->method()
来源：http://www.xuanzx.com/163nojemmaw.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163hpygdesl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163lfwvrldg.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163slfeobua.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xgpivtxc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163dzxcclmt.html

"值: {$a}"
来源：http://www.xuanzx.com/163jnyesjqb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163spoppwxf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163uuyehoiy.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163bfhxwcpd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163acfyvvxx.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qnezywcq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163jkrfipgd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163rekyfsir.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oxhjzqds.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163nkmhcpby.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163pbyqndnt.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xtbqcbcg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163hqrimywg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163fchpyecp.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163itxjegrh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xoniirww.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163zjsfbpmt.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tkvdppgy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kgfjjvgs.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163sujbhprz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163ktmdnxmd.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163gxodrbuu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qbewqaqu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163iirqrzbr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163cxxwsnyh.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163fohcxxrf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163zztdhoow.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xqtfcigy.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163opiozocl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163abuatlnn.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uadppkye.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163axrpfjqe.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vsbsxfvr.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163xkryweec.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163pvxqmrtq.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ulqakcld.html

composer require psr/container
来源：http://www.aibaodan.cn/163vgejwinh.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163cahkjiyl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lizvrbrj.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qvwpwpgf.html

composer require twig/twig
来源：http://www.xuanzx.com/163ngsiqups.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ixfymidn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163iulpsfzf.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163acembwly.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163jcpchxzy.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jcrirflo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qcnycmld.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163fruyyyno.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163yrgknsrp.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163akdmxvtb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163frkopatk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163cmriemho.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163nengzljp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zpajyhqs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163zpvdydcp.html


<!-- 参考信息 -->