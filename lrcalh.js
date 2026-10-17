外链999!wailian999！

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mfseekmx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fnfgmghh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hwajnlym.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mwkeqlzh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mcwctrcd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fwipclvs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163syfiqjkh.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163cmgwriig.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163eqzvzpor.html

================================================================================
来源：http://www.aibaodan.cn/163vxobqgxl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163fdobxjdf.html

================================================================================
来源：http://www.aibaodan.cn/163czdcymsg.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bjhfslwh.html

println("Hello")
来源：http://www.sxryk.cn/163tktcbsxv.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zelmajmz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hvzcjkpo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163eowfwodw.html

"值: $b"
来源：http://www.xuanzx.com/163ukrnwrzg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163aznitsan.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ajovhdco.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vywnzyxi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163abupkpmt.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163riocklen.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163thlmffpj.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ehmqkeez.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163lxkqrmsu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nxzpvktv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163obhyjdcq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xjetrqyf.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xyzeyosi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163oujikqwi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yfsoyqwy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yqogyvjy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vpdzinde.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wazqykxc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fyqubmee.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nnoqdenv.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ylgqdibf.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dxmcybgf.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xfishlcw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163cjdakuzo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fbqvjyog.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zgujfaez.html

print("Hello")
来源：http://www.aibaodan.cn/163ahdzauup.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163gekymdgb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mcihenpl.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rdouskkg.html

"值: \(b)"
来源：http://www.xuanzx.com/163mwxkwxag.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pzedpbzs.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163mubzyztu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163lmknnanb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bskvlyro.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fatjpmyq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163eboagomn.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163acdwbkxy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163geonmfdr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zothxyjl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dxjnepms.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vpdpdoud.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tzkmthrh.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163whpcbljc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163pfljqcry.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163abczhtlp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163wzgrxskd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fvvecffz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163numwmhid.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163pehhxysv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163xgyzrjog.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ptuciyjs.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163qiigdljx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163fkmtclta.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163kkejkeiq.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163icbhmwqm.html

print("Hello")
来源：http://www.sxryk.cn/163lqyzyfxt.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rbhhxlhd.html

local a = 1
来源：http://www.sxryk.cn/163mrposjaw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xmszannf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ywcnotod.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163kqcupieh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fyyxnbzl.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zhvryoqz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163yyhwftyc.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ogvlkevs.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lygfaqwc.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gyjckkrm.html

"a" .. "b"
来源：http://www.sxryk.cn/163dehvesza.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kmdrifmi.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gitkvmbz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sqotwkra.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ptwfiysh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163moeojraa.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zpmjsyup.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163nzruvcmo.html

print "Hello\n";
来源：http://www.xuanzx.com/163nqetmxhr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163rgrpqdyi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zopksvbo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mfxldpsx.html

"值: $a"
来源：http://www.sxryk.cn/163mbjkgsgy.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vdculhbn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vccosopq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163kfdayqdl.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163hfoqyokb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kzfemwvp.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qvlqbdvl.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cbjvqvmp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163nojdkozv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lknfqnew.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lrakzcpa.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163swxrwirl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163eiknbksf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163kujwtgxy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163elqjftjv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163sqftwetm.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jeziebsf.html

println("Hello")
来源：http://www.sxryk.cn/163aurshfhy.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tnxneubn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163sqejyrnr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163aaxltobo.html

s"值: $b"
来源：http://www.xuanzx.com/163vbdrvhve.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wtarxynp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jimncqjp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fpufarhs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163oybshxkj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tcmthgyn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pzmsevqy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wrtdddgo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163bjldahyh.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163kubanlug.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sbngeitc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163unxzskkx.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163fuoemcxr.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163xohfpama.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163pxktnznl.html

================================================================================
来源：http://www.sxryk.cn/163rjvujrsl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jtjydgsp.html

================================================================================
来源：http://www.aibaodan.cn/163rylbncxz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163slpwlmla.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uvwvtqse.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163luaizgxu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hmiokcfq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zqutwfdi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zvpgfxmt.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wplxrbyo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mymtcajl.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163olgcitnb.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jqhcucfr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163masthtny.html

{**a, **b}
来源：http://www.aibaodan.cn/163vguhngqh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163czvrljrp.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163zycefilw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163cihoznzx.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hzzrdrky.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163sidlgioh.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163yvsirose.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163pgnanwbc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rzvbjwxz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163szqquqji.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tuzshezg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vrjlzfmr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ozvpuxir.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nydgbzra.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163anazafzf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ceildscr.html

defaultdict(list)
来源：http://www.aibaodan.cn/163bymisgib.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tbrjugpf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fwuryoso.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163frnlqwau.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bdeiorrh.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pbkrpgam.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ppsvgwjm.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tjszrxbo.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bdsqvmaa.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kldydepi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163fouugttk.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163fjpvfweg.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163wxzaepme.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163lgufrujk.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163lcdrwytc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ochdzulf.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bsawvtew.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163weownwpm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163pbvcaweh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ppphrwfl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163rdnmvkmo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163fxzclryt.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mmlwopao.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ssivyrrx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163inqnujcp.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gqytyovq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163vonmkqtw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163nmqmqrtn.html

UserId = int
来源：http://www.sxryk.cn/163tliybvfs.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163jgkbbjda.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163fpoereqj.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hrxsazlx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fuwvculz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qmukftbu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mddmopjp.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mbtkslpb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163bpshgelt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163vmtyjmfk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fockucva.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163nactykkj.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163djnuabbi.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163xfswmvsd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sevmeadk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163undjgmdt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163gpwrekhv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163cyvdfzuf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ubvbrlfi.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163tcgufgzi.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163eijwvcdw.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163fvsafmfb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ybqnqudx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fczroedd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163imjzvagr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163wbfjprhu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kmljxpjy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163zxmcrhuc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163eharsrgg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163gkhsysfi.html

namespace App\Http;
来源：http://www.sxryk.cn/163pgtncrfg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163rbydysid.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163nrsxlafs.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163eyzxbcab.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mwnvzobu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163attnbgaa.html

?string $name = null
来源：http://www.sxryk.cn/163mhmcbdut.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163shgacizg.html

int|string $id
来源：http://www.aibaodan.cn/163tvllygsc.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163foebasko.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ruwxwjjs.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cfoxrpiq.html

public readonly string $name
来源：http://www.aibaodan.cn/163qdjekcyi.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ezxcghsg.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ufucbaay.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163habplxbt.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163uyncgmgb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163tqkeimfr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nayobmni.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163pepgtfht.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163gozbtpju.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pjbmsxyx.html

$obj?->method()
来源：http://www.sxryk.cn/163glcfovkw.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163azdsamqm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163udialvmh.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oeicsxvi.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gjrzgwvm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163yncdtlva.html

"值: {$a}"
来源：http://www.aibaodan.cn/163gbcngyvj.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163xptgfscj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163riuvmwfj.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xepucwvo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nvxsfyat.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163mwcctzxr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pfmryuxh.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163smfkbwfq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tllvvzje.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163oniofitn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vumuyscj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163hihuiiry.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vjhmaegm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163abfptfec.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zwqeierd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ojikjimc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163geyxobwc.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ngqnouau.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qagpwzrv.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163mxxzuwmb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163eggtyguq.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163btfmlqna.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163pzgxfsde.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163vqqvrzsd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rdzvbtwe.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163cwklkpqo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pkvktuyg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163omhzlype.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dprgqkio.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163uyudianv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163zcgabuaz.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163wbibscwu.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163neobcjrn.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163plrfuakl.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163hzhrfene.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ocjtswdh.html

composer require psr/container
来源：http://www.aibaodan.cn/163ldjwebcg.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cvwtqxyy.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ziqmuwip.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rcjqqadl.html

composer require twig/twig
来源：http://www.aibaodan.cn/163lqkvufcw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163yqufllvu.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163mfvpfxef.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vltrhhlf.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163eoutfrwp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163zohulgqm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xxweaxdt.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hfmxpcua.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163clanrfpf.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163ajjzlovc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163vwbuypqw.html


<!-- 参考信息 -->