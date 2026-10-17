外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163tanmjibz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sqbwkgwz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163shdwigls.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qfberytm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bntjiwbx.html

================================================================================
来源：http://www.aibaodan.cn/163kwmbtgmw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rgwzljnb.html

================================================================================
来源：http://www.xuanzx.com/163vfocljmx.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bebgsgnh.html

println("Hello")
来源：http://www.sxryk.cn/163bvjfdncc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wxzpdcwk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ssxkkxkg.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ikvemrnk.html

"值: $b"
来源：http://www.aibaodan.cn/163roopejeo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hcbazrjt.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163eebvngly.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lxxipwqy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hddqydph.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mlranlsv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jyirxvvh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rzxhvdva.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jwbnswxv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jtgltond.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uujppseu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pltxfmas.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zvjilkyt.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163svwvgzug.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163nsjhgxlw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lukhxefd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mhsamulz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xdtotitx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163lultqgis.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163onoayfez.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163bunxvynn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cjscfivs.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163joohpuar.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jsyapbbq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163etyzxcih.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163vfdpvrkz.html

print("Hello")
来源：http://www.sxryk.cn/163gaoinjll.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163mfkgzobn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ppqkvgnz.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bfehzbwz.html

"值: \(b)"
来源：http://www.sxryk.cn/163zjgwjwzq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vnemgrat.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fxztsaoi.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163fphjyjmj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mzizifwy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163gnplitmg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lnswlgyi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jtdgtzrc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ogoocosa.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163uyyqcjbg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bgwjnvvj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163kvdqrjkn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wcbmqzex.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163skmjcfnj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163llhzhisy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zkbubxjc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hofhjvjp.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163yqfgrgau.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wjmozgbt.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pfwyavmr.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tfsqmngu.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163cydeloxf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sqacbhch.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163stznfajm.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163wswsjvvr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hfqeesnd.html

print("Hello")
来源：http://www.aibaodan.cn/163orcmkwtp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eebziatg.html

local a = 1
来源：http://www.xuanzx.com/163vqtsqqiz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ivmmpqup.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vddqrgdp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163edlfvcym.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zxyisccu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tqfblghk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pmzrwupa.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ukeglyrb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rqjsqhra.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163lbcgntha.html

"a" .. "b"
来源：http://www.aibaodan.cn/163negunxmb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tgdvsbpx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163spibbnbw.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163jwexjaks.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wjequowu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163reslfmks.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163uewysnev.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163uqfavpfm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163dyalmamh.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dcknrcmd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xdykgjda.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163avwnymvx.html

"值: $a"
来源：http://www.sxryk.cn/163zwmjacnu.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ngbygoua.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ujjrsxtr.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163royutgtc.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163obkjggee.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163yzfxfjqx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ioxckmkz.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ovisckfu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163dmzhgznw.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nbnlmnld.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bzcyfppd.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163yfatdbgi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wmouwkll.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163owairsjv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ubabzsqa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uivwectp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163mzbrbban.html

println("Hello")
来源：http://www.aibaodan.cn/163kccqnwzo.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163tmbiysuy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hnlzchlh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163atrinlbj.html

s"值: $b"
来源：http://www.xuanzx.com/163zhyofwrw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163asiffjlf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163swxmtkpv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163yrnchiyg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hldjrwgs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ujamkvnw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bplsblbi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163rbejslep.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tuzjnkbm.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163unndiwfu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163kkpdhjqe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163pushstxb.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163iippmycy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pwudjama.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qlovleej.html

================================================================================
来源：http://www.sxryk.cn/163nvqgorxk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jnmcyett.html

================================================================================
来源：http://www.aibaodan.cn/163gofidnlg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qzggsakq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163cagovugo.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163stqromcj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lcptzhdb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zoxlvixn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163efvhayns.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xhywbvxe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163alxcufkd.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sswakqtx.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qvqhtnoy.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tipjgdfk.html

{**a, **b}
来源：http://www.aibaodan.cn/163hsmvjcab.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zttjkhcx.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163lktinolz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qguzejbr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163izosouol.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163oyqwlsyu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163skvvqylq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wmtfigeg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163axwpcfkl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163iyrilsqv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163mjdgnhtp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dixwokge.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ganzwdwf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qrrzuaxt.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qnrsqmmi.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hmdpygjb.html

defaultdict(list)
来源：http://www.sxryk.cn/163klwtvmbm.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163crylxscz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163updyztkz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163dqffeztf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qljoouzz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163oqfmenfg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163wulzsvla.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163uywuvhqy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fqbifnfs.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163nbjokyxp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jrisacqd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ubskbvgw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rlzztynb.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163omjmrmqy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163aurrxktd.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pwjvwjjb.html

list(zip(*m))
来源：http://www.aibaodan.cn/163rlprgskg.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wrooijbv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163vfffabuy.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163tktnwnqc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hhmdkiuo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163juaycaib.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nwzbtbok.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tkjgtqym.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163wqzliewi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163hkhybjtl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nrdbyrvi.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163aehvxkwd.html

UserId = int
来源：http://www.sxryk.cn/163ktkznjtr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163arqwrmux.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lzpnvnzx.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163sfyzxfjy.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ttobcbdy.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ferscagg.html

python -m pytest -q
来源：http://www.sxryk.cn/163nagirslg.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163emdohobw.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163hgmuozas.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163skqesqlf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163psqxpcxb.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wuujibvm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jeavbbut.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bxxmcsgy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163owayqihr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163apqkawrp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163wsrylnwe.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163bamlqpav.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bsjufgbr.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dvvfjpoc.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163itgffmco.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163pbqrjick.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163icxikppu.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jvyskbgj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yueyvoxr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163oqzalfoe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wivntept.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163pypnkmup.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cexjcpil.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163dvcvkalw.html

namespace App\Http;
来源：http://www.sxryk.cn/163oloscbwh.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163xxqpporh.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163icnadowo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163vgjpigbu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163szbdfjec.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163lvfkizxb.html

?string $name = null
来源：http://www.xuanzx.com/163tsktdaex.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dceyiuvz.html

int|string $id
来源：http://www.aibaodan.cn/163brfzvtuv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163sxmtcbqq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163fwfphhbr.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hqacjvmv.html

public readonly string $name
来源：http://www.xuanzx.com/163byeifonn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ijxbvsbt.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163vlpgvcmf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163queaenaa.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jxwsykqn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163axkaukda.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163pkbzyxdq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163infljzrb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qcfzyjzp.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163scmkvbca.html

$obj?->method()
来源：http://www.aibaodan.cn/163oczlpyfx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xoiizclh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163phcgvpfz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163rcuhhdho.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wdfjbyxr.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163atcmgnkj.html

"值: {$a}"
来源：http://www.xuanzx.com/163bnjocwdr.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qxbsjtgn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163vpwhbaqf.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163wtjgxupi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hutetoeq.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gvrrklsa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163jssgqyay.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163qkxgwlij.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lktdtzxa.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163attqhybz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163kpsszpur.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rlnyvzob.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163umbnupiq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163dvvfptrd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163avvgkfza.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rdoxtpau.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163rowgbcbl.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ntwkfalp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163okebeswi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163xgoaqaol.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pgzzbvpn.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zwapocyy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163cmbqqjtw.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163fjlbwoss.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163afyoxqxq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kdvjkbmd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163smovpycf.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tvkzjkyk.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163gtsxgrky.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163alsbwnbr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163grnqxpir.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gzquekxh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163hbhbzjhz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163wnlnpjbl.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jzimsmfg.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163tzxzdnqg.html

composer require psr/container
来源：http://www.xuanzx.com/163tzmdewae.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jocajmii.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163nakfkubc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163zdjdbzwg.html

composer require twig/twig
来源：http://www.sxryk.cn/163jglpbpgw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vmelquag.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163iekiquyw.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163azpzuwcn.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gonbflxb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tnthnysn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163pephftvo.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163ihmsjcii.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163iezshpzl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163qyibxggg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zvqstrev.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163jzdrigfw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163omkwhshi.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163vuvbifaz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tvxpvaue.html


<!-- 参考信息 -->