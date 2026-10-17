外链999!wailian999！

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163atqsqwdj.html

println("Hello")
来源：http://www.sxryk.cn/163swxixhyn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163badduslm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rxcprpld.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ltunjglm.html

"值: $b"
来源：http://www.aibaodan.cn/163itlwtmhd.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fvksvlqn.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163slvzpuvz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163dcqubxdm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163sihklrtc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163gakawpaw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rrblisnj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ecobzovm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163soecoggv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bhvfptew.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fuhfolom.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163perytdhh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163eehedkup.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163biwgljvx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ayvmyron.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163sjpiuxtz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pvebcipe.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hokdoeyp.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163iqixetjg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163edgeblkr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tqwetehe.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kugclirm.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163powegaoq.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163wibgtpir.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lmxouqng.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zrauxqcu.html

print("Hello")
来源：http://www.aibaodan.cn/163nayrkgah.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nqlvqkwh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163unwtkxug.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ufxvszel.html

"值: \(b)"
来源：http://www.xuanzx.com/163vnpwhnxt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pcdkqejy.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163vzdjzrza.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gaqzwhke.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163olcmlbkc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vfmfcnux.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lyptuxsj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163igtswqlx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163prcnbtqz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ixxychdl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163naofgmlo.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vazzjylr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tqzbywwv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rsspbazg.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163igwmgnmv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163biljvaps.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hwqmumym.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163cynxxovx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163tjidmacw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wwryqfhi.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163iazaeikz.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163satkpexe.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163asmghvfh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163bkpsayky.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163sdrgauvr.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xohuoaur.html

print("Hello")
来源：http://www.aibaodan.cn/163ckbhirgd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rrqdbksl.html

local a = 1
来源：http://www.aibaodan.cn/163ofwkqakr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163smevumfm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163livanqrd.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163lczmqbfg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ownrtpea.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163sthtbyyn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jguzxech.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nyfgdrkb.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163osifmhmd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163pdmhtdsv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xcxljhkn.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wiwenbdp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163asdgynnx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163jpdvrske.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pdiovqlg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163veljenid.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163ypxrqpms.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163vbwuellj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163eqotecql.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163apnecuzr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163jdxhdsfk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jedesyae.html

"值: $a"
来源：http://www.xuanzx.com/163fyebseoc.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vtimycmb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yjkktgbf.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qkaluwyw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163kdmbnerg.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ejdkvajf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rusenuhh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zylpcejo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163slrcoebq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163bpzwfqwj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gttzjpkq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zsjsrncq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dxgqrazh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163blhjbmky.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kjnhtfpz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163vzzlacmo.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wmlbqnul.html

println("Hello")
来源：http://www.sxryk.cn/163okavepba.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163duszhrqu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hdlwbdgw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ulgwxnyv.html

s"值: $b"
来源：http://www.xuanzx.com/163ldkgetjn.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163avaeovle.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163pvhzzagj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163eryihqky.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163prpwxelh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163sakwlwdq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ymjnvjdd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163awooaiya.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163txkummwn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163puxibzdh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163eyrxdwnt.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cttnqtch.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163eeduytho.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163qiugfqdk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zamtcvpf.html

================================================================================
来源：http://www.aibaodan.cn/163mmnobwvd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dhuzkluh.html

================================================================================
来源：http://www.xuanzx.com/163rujmmzyo.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163udnfnsbm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163epwljnko.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163fbhhocfv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zuunomfh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jnlywtuk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rjoqbuta.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163rcufxdzh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ndqbivqg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ktbxrdai.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163kotukhtp.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163okxyvyfi.html

{**a, **b}
来源：http://www.aibaodan.cn/163bvbdvfmm.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qdedxdtf.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bhwubaid.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ocuoibiq.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163byeskavx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ddziammh.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xaupgnmb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163bqmlqtqa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163izoxgszd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163mlkiodst.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163basslpth.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pigxeerk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163uthgqjrh.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163pdmxwqvg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163arzmkyde.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tzofjhxq.html

defaultdict(list)
来源：http://www.xuanzx.com/163fvherzpj.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163izerjgmb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ofsngacr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ihyfuxfc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163abbhgscz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163uofstmrd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163aavsxgcf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hjwhpoxp.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163tfhjbtnh.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163hgxppuuf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163yokzfigr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163webcgzfu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163uhjcrmuc.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qgqapkph.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163jdkdmrcj.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gcinbvzu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jyvumjfv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163dubcsvuz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163frdgmvyq.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bvvxjgmp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rsqqzvyl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ppoikiol.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rvyiyilw.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163bbahktkv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hwzwzbca.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bheofqcr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163fvetzqth.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ivyxddnm.html

UserId = int
来源：http://www.sxryk.cn/163hbzslokb.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163oacbhknk.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163cnjaodcf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163flwweyst.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wbctklzc.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cfcsfqio.html

python -m pytest -q
来源：http://www.sxryk.cn/163wngulnqr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163pmacojrn.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163dnmlwgpk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163fkgjpexb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163frqbiucz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163drjoclct.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hnbgmyfq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163cqblgpre.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mwlbpvzr.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163lcqxnjai.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163qmuthvcd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163vhbrhjgd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163kshekrui.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163arbvxghv.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163cfvdtigj.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ixcragpk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163falqjopz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163crlbylhw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yspfksqu.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lvnbawnv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pyakpmqd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xktuzhih.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163iyckdicf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163jnvampyd.html

namespace App\Http;
来源：http://www.sxryk.cn/163akwgsrxn.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ubiqhcqd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163vyiyevif.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wgxzavjf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hejxqbot.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163llwkcbeb.html

?string $name = null
来源：http://www.aibaodan.cn/163wfskxgcr.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ksprkjvu.html

int|string $id
来源：http://www.xuanzx.com/163bivyfvws.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163iyevmugo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zmrmjhcc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wmyzuglo.html

public readonly string $name
来源：http://www.aibaodan.cn/163shzvmttc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163abuzroqw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rmnbjkwt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qydyulpq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ktwnxjam.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qjcgmtuv.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ytegbdyi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163wckkbihj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163yylkjnyi.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163ysdxmnwo.html

$obj?->method()
来源：http://www.aibaodan.cn/163wdlloawb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pculljxx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163gklramun.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163fxfapxdi.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163enrcrrmh.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163megzejpx.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gpbvymgp.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fyngrpqn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163svfoyliq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mposinrj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rxpthxau.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bgwosigw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163yaartdoi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163aquhlfoc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zyxseavl.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163kfntpuqa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163andbobur.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163knanrjth.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163llysxdgr.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163dpubqqcu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163rdfrzojw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gyjpstzx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jwvnekwz.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ybnmeysm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zwilwzwt.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163qmtahufe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163soufgmhs.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wmmjmfib.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163wehpwreo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163uivzsahd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qycrhmit.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lwfqtrwh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lrsyxqdm.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wqykzugp.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163eovrkqyo.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163mtzbswfa.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mrlagjal.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vcaqohbg.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163uikfvzqm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163aikylayo.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fperoeuk.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163twyfgtip.html

composer require psr/container
来源：http://www.aibaodan.cn/163uzxbwjab.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163uuyhbxsa.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vfexizjz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vunctxuw.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vlwikeyz.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163tknzfydp.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163dtkljtln.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qgapybzk.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163jihtnnuv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163wgqzdvyu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163swvnlqmx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wmzjzmwk.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lrsfgyxv.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163prmdiert.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163qyfvgdnl.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163kkwlsawt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163dgdhxfrg.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163odhngunl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163tzvmxrdv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xqcpuvmw.html

a?.b?.c
来源：http://www.aibaodan.cn/163eoxrqfxl.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vomwrgul.html

a ?? b
来源：http://www.sxryk.cn/163eoeufbvf.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163kyjxgzju.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163uhccnbmm.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163lkdxzrfi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163dmzwosye.html


<!-- 参考信息 -->