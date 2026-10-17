外链999!wailian999！

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dpblbuet.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ddoeslqn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nruarjhh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163zfsnopjz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sbagfxqj.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lvsnsvys.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xvkqkilw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jxlhdkkf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hsjkklhg.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bbvafmye.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rdxolrpw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163kplqmkgk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163oioclsmn.html

================================================================================
来源：http://www.sxryk.cn/163xrnmfdiz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163iyhxuzhj.html

================================================================================
来源：http://www.xuanzx.com/163reqszbxe.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163elrbhfrr.html

println("Hello")
来源：http://www.xuanzx.com/163hqomchas.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163oabrvgwb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qyuqliur.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fttjjknp.html

"值: $b"
来源：http://www.aibaodan.cn/163lpgxwrme.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lipwpnlj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rrhkycfq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163squnqezx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163matwdycn.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163leyzgoab.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163faaztyed.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163bhhrppui.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163tupgvjfh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163dmrgvocy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vbnvgexl.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163lfpjwjrg.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163yqximykz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163brdfezzk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rljifvww.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163pjhgzsxz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ffydbuty.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fslwkqkq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163egujgseh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163suquqkwl.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ezdmbjcz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163lgmtnlkx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163pvhtzrxw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fuoifvqs.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gibamvws.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ctalnnvw.html

print("Hello")
来源：http://www.xuanzx.com/163isgzxzbd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ipwwwxlu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vbzlffzd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163jxoxzpgg.html

"值: \(b)"
来源：http://www.sxryk.cn/163eykwolus.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163crlwjkvr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163weagdrja.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rpzobjgz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163bjtncaya.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dqbiuacl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163yewpwaro.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163socminwr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gwbjiphd.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zhmiplsu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163rsoetttq.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163waljqoxt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pbrqvhhe.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163afypxpvf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163dqulfskx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163dcgguoor.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163bgrghfch.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163iityupce.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163spifurdl.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163smdzmpwf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163guqzlbbt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zydbavqv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mustyovs.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163dvtedvtx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163okxppnkf.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163fhyyyryw.html

print("Hello")
来源：http://www.sxryk.cn/163eedfrrjr.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mqillgkk.html

local a = 1
来源：http://www.xuanzx.com/163hqreswnd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163zluybjcr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163upgkabae.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ojkgzgde.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163avgwyuar.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163aqgpewhy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ctzqyfkt.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163myqtsqmh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rifwhjqj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163lancgcgh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163iukanmyl.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wlpdtaya.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163oqzgfhnm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163jopttxat.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163hlnjysug.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163akefdxyx.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163zcelwenh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ygfjqqdh.html

print "Hello\n";
来源：http://www.sxryk.cn/163fwduxmyb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163funtvsbh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lsmtwami.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mlmjsonl.html

"值: $a"
来源：http://www.aibaodan.cn/163imrvdhqk.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zvvkdspa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163onjfftrb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qjelhhbz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163bwrkljdj.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163slzsdidt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163vrfqplcj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yoloqfog.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gxzqvncj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lwjmalcb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dmhbxojq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hupmogil.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ofpmgaad.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163gqdnbdjj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163smkncyaa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163suzhzgrd.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163kobuxzos.html

println("Hello")
来源：http://www.sxryk.cn/163wsxsxxrv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ipqqwqzq.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163lekpxpjg.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cnapykem.html

s"值: $b"
来源：http://www.xuanzx.com/163amdwxpfc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163yrsjgpxr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163sjnikmpf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163hakxanpd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163hykflzwa.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163osydgjyi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163spllmsgh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163nodzogzx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163smwupozd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cjfxhlwn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bwealdng.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163gvarphbc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qbnqjpoo.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163powwnbxr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gnveylng.html

================================================================================
来源：http://www.aibaodan.cn/163ftgomspa.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tgdgkdwh.html

================================================================================
来源：http://www.sxryk.cn/163wfqguqfu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163rkijjpue.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163uuhafyfc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163cqsdcwxj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zhnzhwhl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cuksgpif.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163fxlynrsz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yvjacodv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hcpnrehh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163yhfmtdqx.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nxqjtfqa.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163loanncjt.html

{**a, **b}
来源：http://www.sxryk.cn/163tjzpdmgl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163svtlxhyf.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163uddeuhjg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163yfadmxao.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163uxehwewc.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163utvqwndy.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163sfnqjfje.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163nsbeakjb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mvefsmta.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163izcwjqew.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163pzehuwjo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163zeoskgdz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163yikemjvt.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163bugengnd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163xwalqzrv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163okslusqr.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ekbkexoh.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zxduuawc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ssvjxxis.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zssdpdzk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163dbhuvydl.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163phnfqldu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mwhdcnfq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cclniiqf.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163vvbjdsud.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163oximdwge.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jcwapiwm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163drishhwv.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163sjufasfq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eyrqwniw.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tuzmgphx.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fwoiccij.html

list(zip(*m))
来源：http://www.sxryk.cn/163rhpmbcjc.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163swcgzray.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163lgusdvxc.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jbbydpkl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163pmadjofz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dxmgoagl.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163lenrzjzl.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163zslbovak.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mbrqerdo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163sczlrnni.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163cvrzigee.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qumdbphb.html

UserId = int
来源：http://www.aibaodan.cn/163ioriwgnc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163kauwwfzl.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qyxgmvwa.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163qwyiozos.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hmykdbab.html

[U31] Py：单测
来源：http://www.xuanzx.com/163shzbatlt.html

python -m pytest -q
来源：http://www.aibaodan.cn/163liufksoq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163abwktlrt.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163qbzzwmdt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163dhleagph.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lthnjvwc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lvkaawrv.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163claevgog.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163efrilzut.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163attnqdgz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163frpolidk.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163rgcejruj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163btwrszsh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163tbcteilr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zaxhtssp.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163zdemlhrr.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dweucxdt.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vemixbzo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163onocgxyu.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fflpguxy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163bkctkcpz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163fixgckez.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163gfweickk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163snqxlryp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163tmdgsrln.html

namespace App\Http;
来源：http://www.sxryk.cn/163jfeconje.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ffompuyo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163oxxdjvxz.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mkribrgs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163btxooici.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163dmrcrnpf.html

?string $name = null
来源：http://www.sxryk.cn/163zqywsats.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163abcjjoew.html

int|string $id
来源：http://www.sxryk.cn/163dubnnxyg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rnozoucv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163bzohrgug.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163vfolhgyw.html

public readonly string $name
来源：http://www.sxryk.cn/163rpapjgrq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163azuoedfs.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ztwousik.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ntgcgmam.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ijuflctd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fscsopjr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163dkffuvsc.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pxhpwtym.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tmaymsvv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wtajvivi.html

$obj?->method()
来源：http://www.sxryk.cn/163rymqapzd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163idkinsfn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ejfehapw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163gnjobxlw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kfpmziya.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xiiymzgi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jynnecld.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163pymryrec.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ieykpnuf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163umaatvss.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ttxfpfgb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kiaockdw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hywxtkam.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mlroueic.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ibwtelny.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163tpmlgxaj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163llakpoji.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mvvkiski.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163logswnic.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163braimygu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ysubosnx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zzgtyvju.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163alyjamuh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163xqjsoeze.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163vlonsoos.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kiaegzuv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163aqjblcnb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mypsqotf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ycwiyhln.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wgjyokdk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ailvnodz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163geldtxkj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163zpngteyl.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tivlwjmx.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jflrrfwq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lwpskviv.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163gfcasxtt.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163lcnvmsiy.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163pburvpnt.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hceiopct.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163grzetkyz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163npxvoxsf.html

composer require psr/container
来源：http://www.xuanzx.com/163igaawlop.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163nxumfpav.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tierwrtz.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kowdgygs.html

composer require twig/twig
来源：http://www.xuanzx.com/163wxtlsqfz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hjlmioys.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ydwneqzw.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163wayigcqw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163nrmajbwv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163flvqqgzu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163sztuztuh.html


<!-- 参考信息 -->