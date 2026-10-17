外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dgjlvlno.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lqyaifkd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wjifmgvn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jgcoiqcl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163fnnmeibt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163otobawhj.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163oaawgceh.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uwgrhrjd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fjfafpdr.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163iczdhxbz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jdevkscn.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163maphqfso.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dsivwbny.html

================================================================================
来源：http://www.xuanzx.com/163inucuouu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kelutdis.html

================================================================================
来源：http://www.aibaodan.cn/163onlrjqbk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163obxjaqjw.html

println("Hello")
来源：http://www.xuanzx.com/163uydvbohh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ipzfhmnh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gwkbtpmk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163pxlzuvaq.html

"值: $b"
来源：http://www.xuanzx.com/163hxtvrxga.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163nmpcfewf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mseyzljj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hvitrkwf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fjracfmr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rdmmhmoq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jbjvplfw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pkmwptvl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163myqxgueg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163iiqhimxa.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163lmekxago.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163liinltwz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ztppvfkg.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163plyzbhzo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163skgxpvre.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163olgtwiid.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163nercjiha.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lbjstsct.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163aicqamdh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163orteuryt.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wcifqtfr.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kmrfebvf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hlbctomt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rzucqcaq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bgvwrdlq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jomgvugt.html

print("Hello")
来源：http://www.xuanzx.com/163lyxusqmf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163clfjltlc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rmalcycu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bwohcpif.html

"值: \(b)"
来源：http://www.xuanzx.com/163lloiwuvk.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pgxlxoxy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163hiyvwihz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163iriodzwe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163drknapnr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nfchhweo.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ndgaelpm.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163iywdxsnh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163hrgeaqjz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xnjbqyki.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163frwygaaf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xeryxcfn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yhrjdmnr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163nttpesly.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163psgmunbv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dxvbfzcl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fggvjyka.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163voifjonh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163aozyxnen.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163itqkguqx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163gbreeiat.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163cubvujoy.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bssyosqe.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163nronabtc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ngxsfroi.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163aarjpkgj.html

print("Hello")
来源：http://www.sxryk.cn/163yykzkkpd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163pcomwcec.html

local a = 1
来源：http://www.xuanzx.com/163guqfimln.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fsjntgtn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mtkrfykj.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nfqmpqws.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uszugtjh.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hktflqxp.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163mjmzgiho.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163kobezkgf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ljoychwy.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163nzgmjmul.html

"a" .. "b"
来源：http://www.xuanzx.com/163jwxlhjbv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163sdconznt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rwlsdbsx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163twvhpjia.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163tgubxxdp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dsgsvmbz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163uajdroaa.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gcldobvd.html

print "Hello\n";
来源：http://www.xuanzx.com/163myjyipgx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163legmkktg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163prkoryxf.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163hsfmtcuq.html

"值: $a"
来源：http://www.sxryk.cn/163fdsxlxvz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163fbpdlmec.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mvembinq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163kkjdfgaj.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tgqazzmo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163smjzbsiv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zhhvjxij.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mkghghbn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eplgdybu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vkcupgxm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163pzvtorln.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ozuxgkdp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163malcrpot.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163pnmxmlzv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163iigqwljy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rnhweryn.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163nukejhbg.html

println("Hello")
来源：http://www.xuanzx.com/163neueqepp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163icobmkdl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163pwoldugr.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ifftzqxs.html

s"值: $b"
来源：http://www.sxryk.cn/163nztbcxuw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vpmplxdu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lrsaikmb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ynfftbam.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tnsqpgqd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163sfqtgfwr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163jewsxxmk.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ryhwxttf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163nolwoqrb.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rcdhduqp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163rhmocmuo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rlilffxh.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163tkafsquj.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163oogaqwds.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163cxhomgbj.html

================================================================================
来源：http://www.sxryk.cn/163koubrhhe.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qifzyszg.html

================================================================================
来源：http://www.aibaodan.cn/163dwlbggft.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163meuaefgo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163zatsgbuq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163wolbqwpp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163sodqgavf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jmzgycye.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163tunknjuv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xgispomi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nvtctkre.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jztgitud.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dfknjlcq.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zrvwmsnf.html

{**a, **b}
来源：http://www.sxryk.cn/163ajeqgxkb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zkqgdwqe.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rqdvtbzl.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163sfrmioit.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163brruaxnt.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163suqvuxtx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163cpomdcuc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163sefdcwnp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163aiyjfkrt.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163uysfwcjg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163kvypietz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ikoalqtn.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bpdowikd.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163abdbvadh.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qjxcddoq.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rrvxfwgo.html

defaultdict(list)
来源：http://www.xuanzx.com/163gwtldftk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tuhnyaqb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163udqkhqfw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163npexhihs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163sjsbkvrn.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163evpeprsi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163mrqzgzoz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hwusgpjo.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kjykcake.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nbcieaew.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163gtewyoph.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rbotocob.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kedcivvt.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tykwknwa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pvkbpikb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qbiappyt.html

list(zip(*m))
来源：http://www.xuanzx.com/163dehrztmb.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mnpjlyut.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163absskhta.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gtlwjklj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gpyimjum.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163orlljsre.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kqcqrjjw.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mwjnjfxq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163trklqzfz.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163nczczdyt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163apazwjvz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ptvneebi.html

UserId = int
来源：http://www.xuanzx.com/163gxmhxfdv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163attttkau.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163xukuiwug.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nflkndev.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163upjggzlp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rulohklp.html

python -m pytest -q
来源：http://www.aibaodan.cn/163xmvvoewx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163hgtbmggf.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fpgazvkr.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tympffts.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xpeargqu.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163unzjitmw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163kfrlaisr.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163lapggxdo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tfivnzai.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163aasxqfda.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ftlfjvri.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163gufrzcxc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163yimbrkpp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vgvvvuun.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ciakcuti.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ziomanaj.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163pqcubdbz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fodltktl.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163yqfekfwn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163kipspjxo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163cmeinusg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vxbblrxc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163rhlpfubn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163odjizxzq.html

namespace App\Http;
来源：http://www.sxryk.cn/163bzxizuex.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163awfwlrmx.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163xxlnksep.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163rbiqoxrx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xppvyhtx.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163bgucdjvg.html

?string $name = null
来源：http://www.sxryk.cn/163ouwlkkvo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163mkxqsyuy.html

int|string $id
来源：http://www.xuanzx.com/163nhjuctsb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jhbjeujz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cpnqvkip.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163fzjbodyd.html

public readonly string $name
来源：http://www.aibaodan.cn/163hwpyltrr.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ccoiacvw.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ulmkwbic.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163xehteyzj.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163lhgwzssn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163duxfpubv.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mfbxaxcd.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vxrsuaeb.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163wggtksjr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mzjunoka.html

$obj?->method()
来源：http://www.aibaodan.cn/163umxyxzty.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163nzcqsdpz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nwdshcfj.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kczdlaia.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rbhwjxfi.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163rlpvfmdo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163pydtqlyv.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ambgfpmm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163vqatyibk.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163iuiokhbt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163suihioqn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163dykpusra.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163vgairwgb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163icgkvtka.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163grlhprbr.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mxifoetf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163gokongxu.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163imkbyhqt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163owforlbl.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163pebrzmci.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163gayhpthz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163fdplubno.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163weoxzolu.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163rfrvyuaz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163oybtlrly.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163eexvnwdb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163nbszjccd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163mwvhdgyu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163varaumjx.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gbthdwsw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pvlftczu.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qyabkmgc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163gwflnsia.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163recmuneq.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163iavlssrk.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163itytxguu.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163klyryfjf.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163jvyfkyxy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163curwufpz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163odczgvpk.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163emajotcn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163zapmdccf.html

composer require psr/container
来源：http://www.xuanzx.com/163onzdxwbe.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163yrhioclh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wdprhehg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163klyuhvni.html

composer require twig/twig
来源：http://www.xuanzx.com/163nxbwheon.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163fepmkpde.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163urbymxku.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163brauetcr.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163azzehhvx.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163dmuosxvg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163igealsqa.html


<!-- 参考信息 -->