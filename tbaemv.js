外链999!wailian999！

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163sevnpkqh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zqxshavh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dagdbkfu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163wxictsit.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ycnqqrpt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163mmjncxxy.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163shoopgqt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xgktuyvq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qldscpek.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ijruwluw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dgyyndjk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163pjlpmniu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jwppcwzy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dtkamyez.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ljrbiith.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163twiwmvfd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163brfiagny.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163wrpgxscj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jathqdru.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yhnrofov.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163aaqdzawz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qptkphwi.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163auukhvfb.html

print("Hello")
来源：http://www.aibaodan.cn/163ueasqeqe.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lwmzuskd.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163hjkfbbou.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cicmelqg.html

"值: \(b)"
来源：http://www.sxryk.cn/163smadofho.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163hymnqwvm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163bybppewx.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163izcnmodm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163mdizugxp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qftugaje.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zeoreuzg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163usmqvapk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163nzdogvcs.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163kiqvemlc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163iksovkak.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163qrwywozx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jxpdbhgy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ydxyxwow.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zanbnzbo.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163doltppxi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wvzmsqgr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163idgxccgn.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163npzvwfnn.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163lwdziidv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gpgzsggj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ysdlovxw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ylwebhxj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163yovrfaik.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ppfdbsii.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163picohnzc.html

print("Hello")
来源：http://www.aibaodan.cn/163bdmnppsl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fkouyrqy.html

local a = 1
来源：http://www.sxryk.cn/163lhsbaots.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gdeltxpt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qtdddskt.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ptjxzwem.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pcxptrat.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jgzcrsnu.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hihmwrka.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163yhqxeaek.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163hemdicmj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jlmmgimt.html

"a" .. "b"
来源：http://www.xuanzx.com/163yteldoaz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gmbdhkwl.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163dbexkexs.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ltobhvjo.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mkjfpkmk.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nwvkxcns.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xkwmczuh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bwiuhoqr.html

print "Hello\n";
来源：http://www.sxryk.cn/163wihizzhp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163iaaelddo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163aglyheci.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ltsqyxcp.html

"值: $a"
来源：http://www.sxryk.cn/163bektvmbp.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163swwiuudz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163otpdjsxq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xzdxzxnp.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mhweuziy.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hqfjrhop.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xjjygfnh.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163zowcplql.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163spsytgsd.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nalnecln.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163orceomgy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163oufmmjlm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163deyauynq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gydxvwtq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ellespsz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dzkbbzwm.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163atlyyguq.html

println("Hello")
来源：http://www.xuanzx.com/163qrexymgr.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pqsxkswk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ffsgquyr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rsequxij.html

s"值: $b"
来源：http://www.aibaodan.cn/163ckjkdicb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qwwflmsq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163rwrxspmc.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ixezaamp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qpnbcpue.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163twirvugn.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ririqwdn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163iamcvmwd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uhebrpdp.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163uvujxczo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kqwfhfca.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163epmhlkdl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163negmqatf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163whefvqpn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lkvxvwkf.html

================================================================================
来源：http://www.aibaodan.cn/163faaapytf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qhwufydw.html

================================================================================
来源：http://www.xuanzx.com/163smbtfghh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zqqvhuaw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pilccxiv.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163mbdhsnfy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qavxkuvm.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jtlidxvl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163schluoee.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163fcdbmchg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163iwivrflw.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163vaecwfub.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rgnpvver.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163epsedydj.html

{**a, **b}
来源：http://www.sxryk.cn/163iyyiahst.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163swouqdxi.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163avcrwprm.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163grgyeshz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163havcjbls.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ambzxvfo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163lczhdaah.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163zrobskij.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163avyglnfd.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ciicajdc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wffhmxxw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ztxuikzn.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qutdwgvt.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ioybxkbb.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163krsxgzpk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163etmupzhd.html

defaultdict(list)
来源：http://www.xuanzx.com/163wutpmklr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xahsuhkl.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163uryqsdor.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bzamjupr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zsxymjti.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163qwmxrwqr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yskcrkpt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163dzfkcdzr.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163zktzinrt.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nnwfeixt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vqlztovv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xnmlhtae.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163nmvcxsek.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oztswbtk.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163hxdvlvgo.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163crbkhyoj.html

list(zip(*m))
来源：http://www.sxryk.cn/163rxyevtpm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163uguwyigc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gqjjwxbn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ahtmctge.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gbanbhlo.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zkyejzjn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ghhlwnsz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163afhtjtuw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163agvgxdho.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163hdhfcove.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bwdnxdja.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qsptkidl.html

UserId = int
来源：http://www.sxryk.cn/163oyuldoax.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163yxgtstqf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163juovxofr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163opplivag.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tndavgsj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jcvqzeiq.html

python -m pytest -q
来源：http://www.xuanzx.com/163nfglneuj.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163venanueq.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163qedxqupa.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163kbclnixg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163kugycmok.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hdvvhleb.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lhezceqg.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163bdxbfold.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hmdqcsqp.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163kfqiyufr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163egasbjzi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lrldtcph.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163knophnnu.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163pgxyafdu.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163uwfyqzwk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163zfofadub.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163webgqgyp.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163felzczlf.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uiqjcxic.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163qzxhdjfd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gyoagrbt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163auhpkoyz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qaqcgkrq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163nzushoim.html

namespace App\Http;
来源：http://www.xuanzx.com/163ijgukmec.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mmaqdgex.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163alnfpiwo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bxhnhhjz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xzcdjdsm.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163epwzeyyu.html

?string $name = null
来源：http://www.aibaodan.cn/163euvmkuiw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163hvqkkkrg.html

int|string $id
来源：http://www.sxryk.cn/163qlstbbez.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pfeyrrpd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163alwcmrns.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kwjjavfs.html

public readonly string $name
来源：http://www.xuanzx.com/163kntkwnqh.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qcmwazli.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wpipmpix.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163smcjsrsc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qxtvkiqc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jsnstvuu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163lkbowvsr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163kxtdkdcv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163aiivbfwo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pqbkvrqc.html

$obj?->method()
来源：http://www.aibaodan.cn/163kfkqcbrh.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ubshziin.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wbqgwsxw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163iuvfixvj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wlokoane.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163imwwuvef.html

"值: {$a}"
来源：http://www.sxryk.cn/163hxydjefj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163prymxuip.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163vspacvtv.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rxdupwvp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163rwuwbhjm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163pwphaptz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ngxwuujm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wgqfatys.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163srejzrlm.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ystttdad.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kdvjjprf.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163grdpcemy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cwdlgybf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163nxthzmfd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163kwvuycxa.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ydtkhaye.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163wgjednfi.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163levphpbe.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163nfitdkgj.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163hoknttvi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163aexxusfy.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163azmumxym.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163alcxqqjt.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pyjhhxde.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163tnfbanuo.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163obuklxve.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qcxmgdzv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hmdmxxgk.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rczepqrk.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163razvottu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163saubegny.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163diznftis.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qexkkibp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163dhualdej.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163suplkahe.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jkgurdvy.html

composer require psr/container
来源：http://www.aibaodan.cn/163ldxnrlsv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163kiesiswr.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163jghmgona.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163boqtughq.html

composer require twig/twig
来源：http://www.xuanzx.com/163szklecud.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163pcppthky.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163tiqsgeye.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fzalnwws.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163fmrfjmap.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xgarpemq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ypkdgizw.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163cedwrdfp.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ikylkims.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yuvnhdlz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163hxzeyeus.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dmoyflwb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163iphyweqw.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ncwprzkr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xeouktxc.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163nmxicepb.html

a?.b?.c
来源：http://www.sxryk.cn/163irzudtlw.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163bmhmqwmf.html

a ?? b
来源：http://www.xuanzx.com/163nbruyumy.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kppldite.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163glpyeeov.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163cmczeuvw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163akvsqvpc.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ctrvrfwg.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163vtjavpou.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163faccbbxx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gqbeprld.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163trihnjsj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163lejoghdn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163rjsfsvbq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163vuadgiqg.html


<!-- 参考信息 -->