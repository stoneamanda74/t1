外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pgxfgpmh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rivaioaa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kexbldsf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zqrvzjir.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wjicsgdz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163dlibambk.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fhyvumrq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tntekfgm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qcyedwld.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163tvgohgxd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163psfuaclg.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lobfpxpv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gsmiyaqs.html

================================================================================
来源：http://www.sxryk.cn/163bjmtwfgl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xfoyyulh.html

================================================================================
来源：http://www.sxryk.cn/163tezhmpyn.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163blptrefx.html

println("Hello")
来源：http://www.xuanzx.com/163jdbsxjua.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163reknsgeg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163sgbdbvlb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ooxbhpsu.html

"值: $b"
来源：http://www.aibaodan.cn/163mlsiqcrf.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tawcnlnm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163uswusahc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qftwlrox.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zfkbzxxo.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mhlljokq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zcyyfpxx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ecsiuczd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163fgtlrgrw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xqcbhlrz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zmhsbmla.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gshxyipf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163pwbcwrtt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163prjkxwod.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qcbnjtob.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163esthyqbd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wxxwxltq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163mcehtgkj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vfmxqtbi.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163cybpfqme.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163sqlnmkwj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nwtzjcgi.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163gekrulkw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163laiibfcs.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163xhuobmop.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163dbbxquzd.html

print("Hello")
来源：http://www.aibaodan.cn/163cpxyfbht.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xrrrtuyr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rbkdcswl.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bleqapzn.html

"值: \(b)"
来源：http://www.xuanzx.com/163zdjuumbb.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163aegtusnq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ocekkfgq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gcntfydp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xeerlrwh.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ybakjpey.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gctxwxdn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163moujmccy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pnosksoh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163aigyjzev.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ytrgebie.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ahsdrrrh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163oxhzdxbd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163svuqqikx.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jlthhkec.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hzjjgden.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ionpzdqu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fgjvyrkz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163eddxcrqv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163uiimhtmb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zcnizsdr.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163chwmkxdx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163oulidcbo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ynxtzlar.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163rlqwzerv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pnikftcr.html

print("Hello")
来源：http://www.aibaodan.cn/163urecwyqs.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rxkagxin.html

local a = 1
来源：http://www.sxryk.cn/163jlsilwpu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nbiphnmf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163vbzvkbpd.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uffjpydj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tzrnselc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gcawdwaj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163utdnbvei.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163lgiypswr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163rhnvggud.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163puvxihwf.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qllejfzl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163gbjzixuh.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jrzxmgha.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ohdktrks.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jyjgcdfn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163czvyomvi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163glpkznkm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mgcldfqt.html

print "Hello\n";
来源：http://www.sxryk.cn/163cztdwaxx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wlqkzczj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xupzlopi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xgbniezf.html

"值: $a"
来源：http://www.sxryk.cn/163nlbzsidr.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163savwauvc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xqpixvmd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163gjaqeacx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xejwjqlq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163zrggnzid.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nmkmgxtx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163dyociqax.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ovyylzxy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163eewioome.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163wxtpyjyh.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163zxxyfkhz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zehpptyc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163bhrbvqui.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163locbftun.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ytwjqvet.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163vvuffzbc.html

println("Hello")
来源：http://www.xuanzx.com/163lexxmgcv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qbowujca.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163maapidfn.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163bauwilio.html

s"值: $b"
来源：http://www.xuanzx.com/163ogifjhai.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jmpqbkyy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163cxpvrcdt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tiljrzmv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163wbjylzdo.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rauewpxw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fsomwmny.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gwbqajpj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163cnnfxnyh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163inzbktqs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ghbvkwld.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163rzcqznrf.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ofmhrfkv.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163syinpzzu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163eyktpbth.html

================================================================================
来源：http://www.aibaodan.cn/163byqwenne.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bwcgsddp.html

================================================================================
来源：http://www.xuanzx.com/163fmospyjs.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163lseteiel.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163cqrihihx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tpyowvkg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vcuznphj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gxjtxdwh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cceekkee.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gssoedcn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ykjrbteu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qubgegcb.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pjdnsalb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163dgmsilal.html

{**a, **b}
来源：http://www.xuanzx.com/163eivcdcjx.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tdpgdsyc.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wzaowzvh.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163jqfuusfx.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qieljllo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pqlfogcd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163apjhsccv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vvlcpggm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qhbusvez.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163pkmlhjqd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hgigzubc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163huueveng.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mkhwzmcb.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163whuuvdlh.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163fzuiuher.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dcwevcnx.html

defaultdict(list)
来源：http://www.xuanzx.com/163emrbozqa.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163tpglonfz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163stxngkch.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163xmoaigoj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163yvfvzdia.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qagpkbaq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163nmdbvyjr.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163oizwhmxn.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bxmcovvc.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ylqytnxo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163irdcbthr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163fcicugfy.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lpbnzqyt.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tuxmmipt.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gxtjamit.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163meiimmea.html

list(zip(*m))
来源：http://www.xuanzx.com/163xulpxdct.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163jimyansi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bvvusvuq.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rjelcddi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163wowfhxxa.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163oiembcde.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nvnbbxfa.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163gsmiuckx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rvftusqt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vcberwvs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lvpkwaxq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163sitoenca.html

UserId = int
来源：http://www.sxryk.cn/163bhmperku.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163rbjthoml.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xtgcfbtu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163btkklepj.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163betemrro.html

[U31] Py：单测
来源：http://www.sxryk.cn/163xbcwsofl.html

python -m pytest -q
来源：http://www.xuanzx.com/163psmqtpfq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bomjroeo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ydjxliit.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163wqsdegdw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163aurndejr.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ltbtfsdv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163xtwtfojp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ddqdjuzm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gnzjlcrl.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163arigcikp.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ylgqugmc.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163awrinsfr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yygjpvdy.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bmubqmip.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163mprnirau.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vetsnzoa.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163gynpyyil.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163bzrxmssm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bgtikdyw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hzhvpxor.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vwfilhuy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163uayxipkq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163hkzuzbau.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xrzzzric.html

namespace App\Http;
来源：http://www.sxryk.cn/163zpeetznj.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163uswfyajo.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163upgvzpal.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ntqupits.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jmgewkha.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163kfhhcxae.html

?string $name = null
来源：http://www.sxryk.cn/163nvojyend.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jytvibiv.html

int|string $id
来源：http://www.aibaodan.cn/163bavwjkoj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163puoklrvs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ttplpzhg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163drrsjqir.html

public readonly string $name
来源：http://www.sxryk.cn/163iqpgsxas.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zpfzsmal.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xjqjgmqz.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163oexfxtwk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163rpjvvwvc.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163gnptriwu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163irgnubrt.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jashinrg.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163uqeatusn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rsjojivo.html

$obj?->method()
来源：http://www.sxryk.cn/163ezjrxiau.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163mkwlewvn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wljonmvf.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163heemzerq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rsuqsfyq.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ekjstmpl.html

"值: {$a}"
来源：http://www.aibaodan.cn/163vyqsxyqy.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163kzvfbdvr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163rnyyjrtb.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163tvxrnhmx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mfnfevbz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163clydiqpp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163caqheoni.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163wdaareze.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163abcisrsa.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163udmeggee.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uduzxlai.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163uqlzzbcp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ufufbrcp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163cdbrszju.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zrrfaurg.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163rhepyhes.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163pdsrjgue.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qutlgyhk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163njqjqzcu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163jyzhozpc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163sfedkxyi.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163kckbklgq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163tbsfsvuv.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163tbefrmdu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163vhfcherc.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163fpebjvrh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hovayxgb.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gxefcpss.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163iynqrenx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163gnipookf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ekudzsjk.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163lzbjbkrg.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163cxlvpxmt.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163inebalma.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163eqqhwjib.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163qgamuuis.html

composer require psr/container
来源：http://www.aibaodan.cn/163urreklte.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163rngvcivv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163hnfttrcf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ahetaiqs.html

composer require twig/twig
来源：http://www.sxryk.cn/163rqqbcjjf.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163sexyhpnj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jakiwdjh.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163raivgsfh.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fsktujny.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cvsgwfdh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163rvktbnxx.html


<!-- 参考信息 -->