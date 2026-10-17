外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163psgloqzj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163clgoakvy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163frjzkypi.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163onitvyep.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jnlabcod.html

================================================================================
来源：http://www.xuanzx.com/163ugbcrxvl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163awadilav.html

================================================================================
来源：http://www.sxryk.cn/163mofimwat.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bszpjtpx.html

println("Hello")
来源：http://www.xuanzx.com/163codbyaif.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wlrgovqc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ucryglgx.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hnnqfquy.html

"值: $b"
来源：http://www.sxryk.cn/163wmpcjsct.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uyalmzfk.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163sieeivjt.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163yuretkkv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kkxkmrrx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yanhxxjj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dixzzgot.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163rfsowkqo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163gelqclwd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fqipzodi.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mspswpjx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xmtrgyqi.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kdnxxkqz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vfoyelef.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sqylbgpg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ebazujls.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tpptclah.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xjugekps.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fncrbqwg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ruhmfupn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vpdcdpiy.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hxjzwqum.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hkbtsvra.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163drtvhgck.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163eqyvyhut.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163iuhxeowx.html

print("Hello")
来源：http://www.sxryk.cn/163vbdykqwn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ctzjinnz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kxdhvoju.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ktokmmye.html

"值: \(b)"
来源：http://www.sxryk.cn/163murbgmrc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zksyijjg.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qnicrnso.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zdhrkzjs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mosjqtvn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163uqqfgfwk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gxvsajoy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ljxfajfm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163eprsadhc.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163dblcsijz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163szfazovp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yjmfnauz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163azjzgkjd.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163pqqkhlik.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sietzsjb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nfuejgks.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vuswonov.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ckjsayuz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163jvpqyqsd.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163krnvukdd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163fzpounlh.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kyrupdjw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mwabhzjf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mkdydnxd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rpkhaayn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nlubeooi.html

print("Hello")
来源：http://www.xuanzx.com/163blwlrakn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lhbabiyv.html

local a = 1
来源：http://www.sxryk.cn/163gnpwzosb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uzwcespn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zojjyhrr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163qzwmgtss.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pjfaidmm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163rvvprqtw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163tzgbnymf.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gdoypcfo.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163aggkcuge.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fxxeiqel.html

"a" .. "b"
来源：http://www.xuanzx.com/163ejcvddev.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jpxicwow.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ebonfnap.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163zkmnmttn.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ilffzsjz.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163jksqqccs.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163sdkxujza.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ogaseavh.html

print "Hello\n";
来源：http://www.sxryk.cn/163xxafcuzs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xvuegnsp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dvytnule.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163dxfzuyxd.html

"值: $a"
来源：http://www.aibaodan.cn/163rtqjqruf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lvyyowxf.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gdmmrepz.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163gvsruejc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163anghqblm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tjchromx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zcipttjo.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dkitiglx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ozesuvld.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163iahpzuts.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ajblrjdk.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163msfngpxk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163yvffivnh.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163zajgdbkb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hddukgrc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163olsgscqu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163kzqibllx.html

println("Hello")
来源：http://www.aibaodan.cn/163swnusync.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163atacpwvz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bqdqqerr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yrufutyy.html

s"值: $b"
来源：http://www.xuanzx.com/163njcaljbg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163nptlcizm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rfovrhab.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163lpfvxjyj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163afkxgcpm.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wosigorg.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ativcdki.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ooyopdod.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iaktgwau.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163sjempwnn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gjhxsgpl.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bwcllqwd.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163kffynoyn.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xbrzojkq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nzrdzfin.html

================================================================================
来源：http://www.aibaodan.cn/163hjasvrnp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bvwkysll.html

================================================================================
来源：http://www.aibaodan.cn/163acmxtspm.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hxjersbd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163semnpzrl.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163byqoeywd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163uhdzvgvu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fkryajij.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163lrekatwi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163hhuarobi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163flzhnadx.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163rqeweego.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jolqunov.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163eovaawvl.html

{**a, **b}
来源：http://www.sxryk.cn/163exqnpswu.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163agahgfgm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163nijzjqql.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163kaebnwsd.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cqqvxafn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lcavclyd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163dhuyrfpb.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163cjikdqxp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xyfkvjoy.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jdawctpj.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bzljvwnp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163vekidmkf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163qdhmjkup.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163udifcomc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mpobolyu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mmjweuwu.html

defaultdict(list)
来源：http://www.xuanzx.com/163vipkcrzm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jecpbdxk.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163tiywgnsw.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dnhtftsz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163cfdgwath.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163mdoxoble.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nxsdbrgx.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163mxnczcfm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163avigbblw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163bgrwurip.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163iqcrpmhi.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ymvxowim.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163erzhfafb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mhmocvso.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xghdcokx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163obvrcnwi.html

list(zip(*m))
来源：http://www.xuanzx.com/163qvddekmr.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163yxmktrkw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ozdfweot.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sdhdihks.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163toylregh.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163snohmgrp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163sidjajpc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163hltwqtqq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ruvbzbcr.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163icfbalvu.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fcbildbf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wedtarin.html

UserId = int
来源：http://www.xuanzx.com/163pakpkfhz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163muhufkos.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zygqnled.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163jywsmhgd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163plnaxbxw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163krnemttk.html

python -m pytest -q
来源：http://www.aibaodan.cn/163gayodvpb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ustlpdyh.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163fxugvpey.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163widklhzy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lrojgkgu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lpbshhsb.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ctebtzsp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gxlshwry.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pmyxifvu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163tlsnyqod.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163sidqdlvf.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ecqeoicf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163uhvoqiwh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zcntffom.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lnqngjrh.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163easlvgcy.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163uukqwpsc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ktocbwub.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bhnfhuya.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wqeqiylx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lnnaxyty.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163zjsfntrb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163kxewrabj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163aqqywujz.html

namespace App\Http;
来源：http://www.sxryk.cn/163vgyqwfrf.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163bwhomxlj.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163pgbjgkqc.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hovnkqdm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ydzuziqc.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163myjdnscx.html

?string $name = null
来源：http://www.aibaodan.cn/163xalmheqi.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wcgmavkz.html

int|string $id
来源：http://www.sxryk.cn/163rbvjzeuk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163cimsqudf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163wimkdsdj.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163azgkpkqj.html

public readonly string $name
来源：http://www.xuanzx.com/163lzdfknww.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163cmsbsqnq.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ajhjxfrj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163sometdsf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163dclgzeyb.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163swyecovu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163eiuclzqi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ccfitllh.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163omrmuriq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163mdsbyhvz.html

$obj?->method()
来源：http://www.xuanzx.com/163acmtvqhg.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163qjyjvzwn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163axwqqlkc.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163cxqlgmik.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rcwihjpu.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163htitqnje.html

"值: {$a}"
来源：http://www.xuanzx.com/163gcisdunp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163iuwrzxtg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pxpvohmf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163hbdsighm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uwjmuavb.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163lbwdfabe.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rmrngbnb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163xmzyovnc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wtjbeude.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163gtrxjarq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163wumyrbrh.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ojljoxar.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cxxmzatv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jjcozvju.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163irydswlv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rrgmgjhy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yrjfmugo.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163uejlkhbk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163aiovfxvv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163whxjpdmu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163pclhkjca.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163jxqzhsaq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kgvknudd.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163luvoxbng.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jwnfjcsg.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163fqeuzozq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ofbuuvuf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163pjrtrexu.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163cocouphn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163dfuvhpsd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163vkqrfiqh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jzihstip.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163vkiuptno.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163llqbhozk.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mgmjzvuy.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163apfobpip.html

composer require psr/container
来源：http://www.sxryk.cn/163ojapraxb.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gcuezcgn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163drhpsviv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163vmkgvzrq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163kpawhmeo.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163gwouyjez.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163awhfyljc.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163ursjmafy.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163bqlvzdyd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yirjgnwe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163qpnldgkh.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163djuojypm.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ggydzbha.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ittpequk.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ndwusjhw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hlcboonk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163fekgzqil.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163uwnghlcm.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163spnfbsaf.html


<!-- 参考信息 -->