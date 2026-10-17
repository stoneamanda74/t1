外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yomxehjz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163anasjhrn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vhadhnvj.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163buuldfqo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kqmsyfda.html

================================================================================
来源：http://www.sxryk.cn/163xafpgkdj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163hsekvark.html

================================================================================
来源：http://www.xuanzx.com/163fpnugyue.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jxelzqsf.html

println("Hello")
来源：http://www.aibaodan.cn/163apqpgnxv.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163asocanao.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163lkrplhzm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163abxbefvh.html

"值: $b"
来源：http://www.sxryk.cn/163zrzvgbhi.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dolcmbii.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qgddnyca.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163seqyoebo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163dfngfirm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xvdvedvm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163yneohzou.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163flssngzq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163dzcqbckb.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dslbpyyk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gogccybo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163twgmuoxy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163zszeuoiw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ydgcsrmj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ijkrffsl.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163selldhad.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163iemcuhso.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yweyhpjg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nraajhph.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lnqumofz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163oxwhopfv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163nptqrird.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163bhdbquld.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vbdimjnv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ywqladhs.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163viiqjrcn.html

print("Hello")
来源：http://www.aibaodan.cn/163ubhxfdov.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dnmghilq.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zogkrqbl.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gswwyhlp.html

"值: \(b)"
来源：http://www.xuanzx.com/163gxjqsgpr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163opuywoav.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hqeixoaq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163mywnnnqe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fpctddjx.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jiqrkdry.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vacsffry.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163obxtslhe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kbjvzwtu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163vfntskhy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mfckbluo.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163lollhrpo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163sbrpqfgm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163njgnqizj.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163pvhbiryq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ayrlqasn.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163fucprbex.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yiemsygq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163nbzcfgjy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163vnovzbsx.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jmavegad.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wzzofgnc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163egquvmqa.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jkskygvo.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hpiwleid.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mnwyowaj.html

print("Hello")
来源：http://www.xuanzx.com/163wfvcnhej.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zgamorzo.html

local a = 1
来源：http://www.xuanzx.com/163pnmbmsmj.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163bscpyioc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163newbsojn.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hxpqmtdo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ypwklxbe.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pzbeimgd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163wvfxpeps.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tghwmrtz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hycvcxqq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163qlpcmnnz.html

"a" .. "b"
来源：http://www.xuanzx.com/163tstjvtgn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163eamdxagv.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xlfqmybt.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163icigymby.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qertambw.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163htcxbsah.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jqhddhlc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163anmgqvpx.html

print "Hello\n";
来源：http://www.xuanzx.com/163itpsolsu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163edkyihrk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163owzeltfz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xhcsjwdr.html

"值: $a"
来源：http://www.sxryk.cn/163hisuusnm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pszdqpge.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163furuldpt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lceszolr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163lvgcefug.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hspbrdvy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vvstkawd.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163stzicvot.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kysxnqpo.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nhvzugwv.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163emzvqwrf.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163peipkxrg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lqwxwxdm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gzxuncrz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dpasjgkx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163mnajqgki.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163uirketgv.html

println("Hello")
来源：http://www.sxryk.cn/163npkqdqfr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fkyryvaa.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lcjjilex.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rbztgxsj.html

s"值: $b"
来源：http://www.aibaodan.cn/163ztvlpndg.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ecvgcbcm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gsuyszdu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kzrllydh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cefgeknt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163avtlgpeh.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nnvncmbp.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kobbabxh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163skdkhzzi.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dgxbnydx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gqlhoiwl.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qfnpofcp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163steuuthh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xrfpzmwq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zpfnphnk.html

================================================================================
来源：http://www.aibaodan.cn/163uqvutafx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163grsoithj.html

================================================================================
来源：http://www.aibaodan.cn/163zhunuotd.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wwjpisdx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163kwalaimr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163bpksrsbu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mpbdmrye.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163mhfodvej.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163odqpnfwe.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yqroizpt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163xdthajpc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163aglembfl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163npweshft.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xxjdpbiu.html

{**a, **b}
来源：http://www.sxryk.cn/163hjcnfaxq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163onlfrwnu.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fpcihxqs.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163tgcnrkhf.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163bhuccpgp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pdedmooq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163xknbqjeb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kqywjiyz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163quqvlycf.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wtqvjhta.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163njoprsvo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163acewlkhh.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pfpslbdm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nquputgt.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163uadxgyui.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mxkxhsdx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163iadpuyrf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163oruqqsok.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163zlhdvwfs.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pqwpryeg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163gbfkjukl.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163obhusnvd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163zphzxtab.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ecvrqqkm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163asdrqjek.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163tczzsoxo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163inhkijwf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vlfcbvqn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163iasuwlzm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163iuxrszoi.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163dfycaftn.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ornzurqx.html

list(zip(*m))
来源：http://www.sxryk.cn/163ayfzspyu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tghdxtwl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hnzzrnib.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163hdugaira.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vposxgqe.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163diuzgdjq.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163mcgwtbhd.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ebkwobvm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ngiymexb.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163hfptycap.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fxnzmfop.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mtsrollv.html

UserId = int
来源：http://www.sxryk.cn/163rayezvxp.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kgboyeum.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163wrdbpbup.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ezfljfty.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ogdhjspt.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163spngvioh.html

python -m pytest -q
来源：http://www.xuanzx.com/163kwfyisdv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163fzwefuxl.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lrniqgfr.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163octyjrtq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163zeyvibfl.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163vsojnxjo.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163sgcswayc.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163bmdfdogh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163quihjjjv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163sksjwqfc.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163aweoyfmz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163xafpngxs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tduyjjdn.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163srmworxg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163kwrwugal.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163hfjcglcs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163rgctuyhn.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163sowzthvl.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163njdbiqua.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163awskfdef.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vzvaxupo.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sedjhqgn.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tmippayo.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hvenwxow.html

namespace App\Http;
来源：http://www.sxryk.cn/163icjmymrb.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ucgpwyto.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wghdoswb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163qzfqxzqg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sdnginsk.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163fuaitejt.html

?string $name = null
来源：http://www.aibaodan.cn/163zgsfvjhk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ahtkvmrj.html

int|string $id
来源：http://www.aibaodan.cn/163ytlymvqb.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163knzwxnwo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163nrgqygwl.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163lnkncsjs.html

public readonly string $name
来源：http://www.aibaodan.cn/163qncvpbuy.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163fityamye.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163cwdxulfq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ygwqrbdu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ryfumlmj.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ebyoshfi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163wpxmjkkh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vnhjlgcc.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163sabmgiuo.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jlvilrws.html

$obj?->method()
来源：http://www.xuanzx.com/163tcfxystx.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163qjivycoe.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ywwfcgcm.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nkxmcpow.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mjnkbicj.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163xaxybxrc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ogqdfyko.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163beozxqpr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hmtykxkv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163pgjeytlp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rhrjczmn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wgjjntqr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163izjglqxj.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163xqvejdyn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163racejysq.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163uiulhbuq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163eqwvttpy.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163qpsyxhjn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163hrkpcakm.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ntziddkf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163httxwnfv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jbiaecdt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163trhvfimk.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kspicpoy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kijgfyig.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pebudfcw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163txrbdhsy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163njritifc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vpdprrwf.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pkfvbziv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163hrqdiatw.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163sbunamir.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163epvwcgia.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163gqyalyez.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163veuzeuxf.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163vbgesegp.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163whqmrtsx.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nwohofpt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163amzjqssb.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163fpvqtzlt.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163lxrfgyzc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163vsgkxyto.html

composer require psr/container
来源：http://www.sxryk.cn/163bnsrapqy.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tidileuq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ldqqhxvh.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163etbbhscr.html

composer require twig/twig
来源：http://www.xuanzx.com/163newysaqm.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ejrcmiyp.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hvqjdacy.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163oibikwrn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163iupeulnh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163leakyzsq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163kbvdjadr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163oiegajlq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wdzztfme.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163kwbpdrzo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163cvfvqqzd.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ycijvblt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163odtraqfn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dtxqczvn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163neflsbtw.html


<!-- 参考信息 -->