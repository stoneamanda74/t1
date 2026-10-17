外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wipyxarf.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kxevkuzz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163csswtghy.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163iuzqzzyq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gtybohcj.html

================================================================================
来源：http://www.aibaodan.cn/163kmwpbtlt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163znguvlyi.html

================================================================================
来源：http://www.sxryk.cn/163kviwirnn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163evsbfoyd.html

println("Hello")
来源：http://www.sxryk.cn/163ncymoiyu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tgazyndu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dmrcrarr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tqmrkmkl.html

"值: $b"
来源：http://www.sxryk.cn/163npynhxlm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pytgexny.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163sxksluem.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hsonocph.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163mvxymvmr.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163olymltsy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hwglpllk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rwvizkjl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163oborqeso.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tcvgnuqy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163idwmupbf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163wvnqvstf.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rvizxaew.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fxwcgblg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163imolbcyj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lwvsfule.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wilrsvhi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163oqaumrih.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fxsnbymc.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ncmfmusz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163kwnsvjjh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kgvwggfh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163woxxuzqx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163npvbipbt.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163puysnkwy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vgccsfvn.html

print("Hello")
来源：http://www.sxryk.cn/163masolscv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xpehfcix.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kdnezuvp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tggsavwp.html

"值: \(b)"
来源：http://www.sxryk.cn/163xilrmksf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dxtonygz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163yqvugynp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rnqtaegg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hjsseyyl.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163klisimnp.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163krwjvwfu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163flzdvwwm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163uaftkwhq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163yiwmedyn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qposqefg.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163kstdtayk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163qxctgiwo.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hzosefff.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163yqhvmjpd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ablrwrtg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mvnczqjb.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163kkkvfywe.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hxulkgaa.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163sfipvasb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163fcrdpasw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mniadywq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163pzrkiocr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gwgxmsxs.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lphmwkoy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xhqaphkf.html

print("Hello")
来源：http://www.aibaodan.cn/163rmhrirqv.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ctwluucn.html

local a = 1
来源：http://www.aibaodan.cn/163bryytyfy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163mcjvrssl.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163bquedmbv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lgyagsuj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rwgccdod.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163zslhmhlj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dirxsjux.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yvhhaxza.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wductvhd.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163soqhbrtd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163twicklnq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pnfsrvbh.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163uhirswab.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ysjoxbuh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163chydhuds.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ypulvyix.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163phsgtvfy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163tbrepqpz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ctagxhzp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wnhpcdhd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lxcfaioi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ppezteba.html

"值: $a"
来源：http://www.aibaodan.cn/163iyqeubsf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163hgpevluf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163kbenqcwn.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163askxktry.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hwwdhlpi.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163cmndiric.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dkevitao.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yrzmewca.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mdqmnumi.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kwwiuzxs.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163mdjltyoj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163eembzwbc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163zhgfousm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kxcoofzh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ytqmiqka.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bzbookft.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163quranppw.html

println("Hello")
来源：http://www.xuanzx.com/163khmexzxt.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vpxkjvku.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163fitkfygl.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xpemgenv.html

s"值: $b"
来源：http://www.sxryk.cn/163qzpvdqpg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gdlztwtt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zpfutarh.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163atoxeodc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163gfazqaua.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163onkscyku.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163siwyrchk.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163blsgtchr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163eysrgblq.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vsnacpxj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bmmzasqj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vgohekud.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163nkylkduf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163lxooopoc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163doeccgmq.html

================================================================================
来源：http://www.aibaodan.cn/163bsalcmpf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wohiwsxk.html

================================================================================
来源：http://www.sxryk.cn/163uroarxys.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163cezfazyz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163yapfymtu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qxvhwxtu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mqxvjckh.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wnxhxdvc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ytvsvvdc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rqmnqyud.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163oramapdt.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wyburdqi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ubkxoocj.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ybkrdbcy.html

{**a, **b}
来源：http://www.sxryk.cn/163nvfueomz.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tijqddwy.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163tezfeixh.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163orodqrzv.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163vkvrhtmo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tqsewbnq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163njghvrvf.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163mzawgizi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fwhapaxi.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163spxkaseg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pkwazvix.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wpujtrzx.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163viticjom.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163rjjlzeqa.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bqnwxopz.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163rsapdmpc.html

defaultdict(list)
来源：http://www.xuanzx.com/163owijyjrp.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163lmgzeuxq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fnowntra.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163exhpwgos.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163egzxfems.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163rjfvqaeo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rcwvnsxh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163aqmkbghj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163oikchgdw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nzhnsrpe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163qgmbnkjs.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163eadujaqp.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163kwtrfjyw.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163sgsexdzw.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wpegheay.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163yrwboxkn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jnvfslnz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163fbihsbtf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fijzfibp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163yrayjvjq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163dmhflbbw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tbextvzx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qybnwcet.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kbyzervs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ltogwppq.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163uzrillgd.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163vtmhapqd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ieanwfyf.html

UserId = int
来源：http://www.aibaodan.cn/163rqhfqvda.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163przgvcvs.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163frzlnsne.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163uwvhguoj.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163flxonxul.html

[U31] Py：单测
来源：http://www.xuanzx.com/163yqzltxym.html

python -m pytest -q
来源：http://www.xuanzx.com/163jzzymavb.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163bzjeissv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163oakqvrco.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163pezmdnyt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jcvhakbw.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163wykzymlu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163yksxabjo.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sdkbsfxk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163eflijwrn.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163cufhsnxs.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163okgbxbwa.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163uzxbqjaz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163okamlzmf.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163pwxuiaix.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163pcqpqafi.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dpsytlrs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163eqmydlht.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163tnrvnklb.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163keqogndw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tgtswnux.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163damdbhqg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163sicisijx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163vjvhdlye.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fmjehuun.html

namespace App\Http;
来源：http://www.aibaodan.cn/163oinnbgah.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vjgpqxie.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wvptbuep.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ftaslndj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163buzawbvh.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163cnqepzja.html

?string $name = null
来源：http://www.aibaodan.cn/163ihwqcqfz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tljmhgqw.html

int|string $id
来源：http://www.aibaodan.cn/163gdhrsddx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163rftmgidc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163qfotkcrw.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jqzbpopf.html

public readonly string $name
来源：http://www.sxryk.cn/163iwrvczlz.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163resgbhoc.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163bykdfuxv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xlnuhsir.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nxdiwemw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163aiuuuyxl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nybymyjl.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ckmnfqco.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163rzczjaly.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xeowdsfq.html

$obj?->method()
来源：http://www.aibaodan.cn/163nhpfhumn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163cwcotwso.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163nhdtjcpv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163qqjcfbhd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zlfhrytt.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163bkbuaobc.html

"值: {$a}"
来源：http://www.xuanzx.com/163yohzbuib.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yevesziv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rfekrgro.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xvocsauu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ougiemwp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qykodsco.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163apppdqfx.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163cikvbiep.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163fqzwkqwx.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163nxsbvrsw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vyrsbjnf.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163flrunkxc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163xrgmsbtj.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163etugiuxy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dvftrnzi.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163vwsozqjm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163mvjrekvn.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ykcotdva.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163ojjjanwe.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163hccmlhrr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rdhtszvm.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163esubrhgq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163owyhywae.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163votjqcch.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zcoczqzv.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163kiltfblj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163dttbetzy.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lkfnykwz.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163rtvhrhga.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qdughmlf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163fwyswmcq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gtuipigt.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163rvnxzgmc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163cuxcudnn.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163aareqmzs.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163eqlzhjdy.html

composer require psr/container
来源：http://www.sxryk.cn/163sbzduouj.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163umisidse.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ddaolfoj.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ofjdfywl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163izyvmhvc.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163qgsohxjf.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163kjmewavj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cvcljagw.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ygyuezyz.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163nwglklmm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163voqaqiyd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163xvzqbzhm.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bltalhat.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ypdzjlur.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ajmechts.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163giitceej.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163llpmchnt.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gexafcvo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163evhisggv.html


<!-- 参考信息 -->