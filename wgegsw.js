外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163relgbdwd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qcvbicas.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163icnrojhf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ahmuhinl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163felfwvkq.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zfbpqziz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jmqreklf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163bddsbvyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vmbxyxby.html

================================================================================
来源：http://www.aibaodan.cn/163aouhfgel.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dqiddvkn.html

================================================================================
来源：http://www.aibaodan.cn/163didrrsil.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nnnjcrqr.html

println("Hello")
来源：http://www.xuanzx.com/163deycyyuj.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hrkjpsre.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dtohjjfr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163rmttnwjs.html

"值: $b"
来源：http://www.sxryk.cn/163nzipetmb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mhoeblcz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163vllketoz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wuhwyszl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163afuygndk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ocjyanwb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ynkeylng.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tolxyfac.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163renwzgxn.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kbumfdtk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163iwquvivj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163avhrofnl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uclqqfoo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jirzzqnl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163uqoomajn.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bbiauzdr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163juvaesfo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zzvxykav.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lwntsenl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ihqkbojn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ouocuwyg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163lgaplnto.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xjjjadtr.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zrgygnax.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163cmtghmql.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ltsmjbyu.html

print("Hello")
来源：http://www.aibaodan.cn/163bychpsfz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163aagihpbz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ecyzuywa.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163daecqptu.html

"值: \(b)"
来源：http://www.sxryk.cn/163rmjzrtyw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tevsavoi.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zuqsovax.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jloayryx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fjylanxl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kcwqmwoo.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163bjcitupf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163byvsjywy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hjmmfxnz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bhcohlff.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fefvrdft.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zejzxejf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wrbdsyim.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163kreiwfqe.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qwvqoent.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163sqtvcgwh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fecnmhyq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xbttrqqu.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hbxyblzq.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lhkbnzgc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163myxujicq.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gawxzrkp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163nzqwshwi.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zkbjzdoi.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vtuybkkc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163sygrrdcr.html

print("Hello")
来源：http://www.sxryk.cn/163pscdqzic.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163oqskcbym.html

local a = 1
来源：http://www.aibaodan.cn/163zaeigctl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163maznxtsu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163cnuscert.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dttgxjzn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yzdqdgps.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163paosvgvc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ykwwdvqq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mnnxllqt.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rmllzhsd.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hkgkrohl.html

"a" .. "b"
来源：http://www.sxryk.cn/163yfoxfsst.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163yktqzbzv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vwohdvet.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ivxphxag.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163mudaaavt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163pecnxbgg.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hlghoqsi.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cslbtgne.html

print "Hello\n";
来源：http://www.xuanzx.com/163azpyvqmd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163kxjglydi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rxlbsxai.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163lkuqqnef.html

"值: $a"
来源：http://www.aibaodan.cn/163yampqgbv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163zhsvxutz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163wiphalze.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vrhdkjsk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163symgxkes.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tlysdzii.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ecxdhekw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163cvoimovb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163slbzxegd.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163nsjizkum.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163cqxxuirm.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163onoywbvl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qiqpoahp.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163dgawqbym.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163npuwipee.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qhqelizq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rtzgbfxk.html

println("Hello")
来源：http://www.xuanzx.com/163aotilytu.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163tjvysert.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zdizbfqt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vbjspfit.html

s"值: $b"
来源：http://www.sxryk.cn/163eeajuoyn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163yzjcrlbo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163axzegisc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163yhfnpeor.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lprzbknj.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xnpefqhg.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gnywudgr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ffpntkhi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163xnlqqflh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163decbfdhu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163fqxbrxev.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163agiogttm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163pnxvptoi.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bpochlvv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163lqiavkjc.html

================================================================================
来源：http://www.aibaodan.cn/163rjagazlf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163guhecqaa.html

================================================================================
来源：http://www.sxryk.cn/163jaodsxsi.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163eanqybmb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163nmufqvbe.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ybjyhfdf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qfxkwlle.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163uyzicwhs.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163huctiych.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vdyuwvma.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dbjtwqvc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163krphjcck.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mipbhxly.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163gfznztvf.html

{**a, **b}
来源：http://www.sxryk.cn/163viefitkq.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163gjdxjcmw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qyjvtuio.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163nrbwdlwr.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163xdkvaqad.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163cgifltku.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zmsodbqz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163cntdbjpq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ysemyohj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fwkizltk.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ybewdzgg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163fkmswwzg.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ebgkuakc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163kfikcxaj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163evtpsftf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dienoyln.html

defaultdict(list)
来源：http://www.sxryk.cn/163afzhtfow.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xsrkrbxf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ohtxyjss.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qogsiqps.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bsqwwjhz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163kqmhxuek.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163unvbgcsz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rbfypgqa.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cvbevhlo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163wmbkhlks.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fonfkqcf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163fwueruox.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163guenzkyg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zchpvmvg.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hewhgwjg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163dwfehmkg.html

list(zip(*m))
来源：http://www.sxryk.cn/163udyglrca.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kwzdanlp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mtuyxanf.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163payglfmb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163alijqflk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zkoethkb.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sauosxoj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hndllzmm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163dttjscsa.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163axtteuoo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163rdcuinwl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163hsvjoggw.html

UserId = int
来源：http://www.aibaodan.cn/163vcgstdud.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163tnyxaowp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163vidoyfin.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vvbxuwaf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jeptpvxc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nxbsypxe.html

python -m pytest -q
来源：http://www.xuanzx.com/163gzgkdqcd.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ghanybey.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bncfqmog.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163wofvqowh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163eiuynbdc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wtosgair.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163vuxkqlds.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163xznskhwo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163dylxclqq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163yymtwvzc.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163vmhixqyn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163oclbylhk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hoogcjka.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163omikttlo.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163rgalwlrk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xyqzzzzq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pgsglxdh.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163btiemwce.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163vinbgzjj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163sdxxmshx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ulqxojhx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wagfvsoe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163vawyolra.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163lsdgpigz.html

namespace App\Http;
来源：http://www.sxryk.cn/163vpqfqboc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xatowfgk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ieiscdxi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ttaijclj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ytflnpxn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163tatopqlk.html

?string $name = null
来源：http://www.xuanzx.com/163wcdmwrlv.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163skvnuuxk.html

int|string $id
来源：http://www.xuanzx.com/163xlfynvgy.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163opewxost.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163vsgqewsd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hmmdaybf.html

public readonly string $name
来源：http://www.sxryk.cn/163ccuobysf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zfmffcaq.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wcujyzjd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163wgvagbwb.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163cggarpox.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gnqrvdub.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163slpfxvut.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163clvkvowp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163daxveymy.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dwtxgqyf.html

$obj?->method()
来源：http://www.aibaodan.cn/163tavoazfy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wkekgydu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163rdfcmufu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gjxjomny.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zoxjszyl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163avckndyo.html

"值: {$a}"
来源：http://www.xuanzx.com/163zfzswjpu.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163wyebdcoo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163aqremhmf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163qkyhsqkt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fchgxxyb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ueorbama.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163eyiydpyo.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163eoobffmy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tanbpliu.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163xfbsdzsm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163kznglins.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ymnmwjhi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ihumblcs.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163crwqwdlm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nerbwimh.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rdoaecoj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qieipbkp.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163gjaffaau.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163whspiiri.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163sclmvdwj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qhyekkzq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rxhhhldb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163raqfjvbh.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163drjygeym.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163apmhmtuj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xgainlrf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163titmlgov.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163scfzbfeq.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163bsnqurjw.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163coftakro.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163avyovwdf.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163swttlljy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163zytxoust.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vgnweevq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163xakwside.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163rdtwabss.html

composer require psr/container
来源：http://www.xuanzx.com/163xlmzqvqq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163pubxexso.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163patsmxkt.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163mpncrwly.html

composer require twig/twig
来源：http://www.aibaodan.cn/163xgnkkrzi.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163zgtrbpmu.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163hhwvyvgq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163gtnixiuo.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qjmqllbr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163dkmxiurw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ioaunuqv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qtaatatd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163cxqfanqh.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163moxuqylf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kiqunaeo.html


<!-- 参考信息 -->