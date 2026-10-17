外链999!wailian999！

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ncktwkcv.html

println("Hello")
来源：http://www.sxryk.cn/163xdecjdmn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163jeqqtdft.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qleybccb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vqazstnj.html

"值: $b"
来源：http://www.xuanzx.com/163unsxfasi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163efybhowr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pqsmivdk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163anuagwuc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mogiasoa.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163oxstorxc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163alzmxxfq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vdplillh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163oovzycba.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kxcaqljg.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fvptxmkv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163dpevbmkk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163olotlhrd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mmqrnqxc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lhmcalgr.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xbvvuwho.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ckifvjgh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tednptpj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163cykwkeiz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cjkkkzdo.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163utnhsmop.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163roxsthid.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163mvgvyyfk.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ylqhfdiu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kgvhgrlo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fuhfvleu.html

print("Hello")
来源：http://www.xuanzx.com/163cuqmykgs.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rlwxklcc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163jecxwzvu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163rnqurhle.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kyxivglg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ffynqjxk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163uphdlltg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bpqytits.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mxougqvh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tsyzwvmm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hidbsxiq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163marrezgj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wkcepvxn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163uyuytcob.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163skifycxe.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163uztrrmvb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wcslybxr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163kijcuqxt.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163zbrolrxe.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163gmghirya.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pikapyzs.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163srjofugu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wtqfiqhp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163nwskakan.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163oaixyvax.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zyrixleh.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ndzzicoa.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ovgsdoiv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xpxtvdni.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wbtovelw.html

print("Hello")
来源：http://www.xuanzx.com/163voflppmr.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vrqqnrvx.html

local a = 1
来源：http://www.xuanzx.com/163vfytwutg.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163svygeqvm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yciptych.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ykwbolwv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ahhrbojj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163znkhozay.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163tpcdzskx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163weaiqxyj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163euywtofj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qytjhnhh.html

"a" .. "b"
来源：http://www.xuanzx.com/163arocczaj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163iipjibrx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163soiygzfi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163skperqvg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ccjoqmfy.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tiateuwo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dojifjoy.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163saxksdhh.html

print "Hello\n";
来源：http://www.xuanzx.com/163hukbauhn.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163aairvkwr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163yzrcyhku.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fplkkdqg.html

"值: $a"
来源：http://www.aibaodan.cn/163hwozyxmx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163vnzantbh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mjqlrayv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163rqhkuhbg.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163qsalwcih.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jctkwlku.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rqgxteiz.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xkzarzql.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163jrsxphci.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163pajwqdmc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163eflkjgcq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163algeatvs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hulwbbep.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163adfuyisi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ddspxjmo.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kxmmcbfg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hijbeuhe.html

println("Hello")
来源：http://www.xuanzx.com/163iftzbecj.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163npeitrtd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ncavtxoj.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hphpsnbl.html

s"值: $b"
来源：http://www.aibaodan.cn/163fmukymzw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163yxlbdnai.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ftlxtnow.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163fkknypsh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163niwudyiu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163owgxmojy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ergypzwd.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163elmjitei.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iimsizhn.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163shgfvnks.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jevuwxsw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163otcipxsw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ypomawgz.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tddovamo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163mfntfcid.html

================================================================================
来源：http://www.aibaodan.cn/163imlnsjsy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pbpzonbf.html

================================================================================
来源：http://www.xuanzx.com/163dpaqphbv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163qcvwtxxm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gadnfmrk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fuzhohgm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lzvpujbw.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163fnijewck.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163kiugubzb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ghzdvtao.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kgjnturu.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jgandtee.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mbgbxaga.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ocylsqfi.html

{**a, **b}
来源：http://www.xuanzx.com/163yuopvybh.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tnrtwntx.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dflqdxav.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qrubajrb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hzblsjir.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163alsmcwlh.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qplprvgc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ygpfzeos.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163quvvuogn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163qlitmprz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dxosiiow.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163lycvmwdu.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163mlkoxevs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cnddgzdh.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hokhyyhc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163atamjszc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163msjzyhhb.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zwsozozd.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nlbopuvj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nynfvuit.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163gukswfsa.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qafhiafo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qnpptdez.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163olayjnkm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sjyujjcx.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fdqmmxoj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jzjcwwpk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163kkubaxet.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163rsgfngrx.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zxvwjtqo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163savgpleo.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qxjoufko.html

list(zip(*m))
来源：http://www.xuanzx.com/163goiuofky.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mqzloaoz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163kridljpv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163tohbiwsj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163bzsnrdmj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zfuazlrl.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163hjvxamvl.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163twlcgoet.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bwujuqib.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kdgjmhxc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163fbcnfvlk.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gavywcrn.html

UserId = int
来源：http://www.xuanzx.com/163gpxqyyyo.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163orludcqt.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qaubtspb.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163nzxwrxax.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163zagpaeyl.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bqizpjff.html

python -m pytest -q
来源：http://www.aibaodan.cn/163dvoorugy.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163octpvxyy.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sbwparok.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163kampylmt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163lpgrtyzi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dpubyaif.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kqtlnwpn.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163sauntfso.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163damvkebk.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hqzmzlfh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pfhnhalf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hahrjofs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163pvzdczrn.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hqzshrcx.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ptweycyg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163yjoblqic.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163qzkcppln.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163egbybesl.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tyeyqxup.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163obukgpon.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163sngdisay.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163israukwm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163bccjwjge.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ysqtnfmb.html

namespace App\Http;
来源：http://www.xuanzx.com/163afntwzli.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163pbbbwtak.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163eyaofqoq.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yfoqhxll.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163euuwkgrl.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jsrtogxi.html

?string $name = null
来源：http://www.xuanzx.com/163fzaooygq.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vgoprjhk.html

int|string $id
来源：http://www.aibaodan.cn/163bftwhlne.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ysubphkn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mrdwoyqr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zykbzfpf.html

public readonly string $name
来源：http://www.xuanzx.com/163rhbzpvjy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163mmamznjh.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163fkirssxp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163iauoerlw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163knbdlmwb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163dtzhhwek.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163eajgahmp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163xsuudipb.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163emscvlam.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163eyccsbji.html

$obj?->method()
来源：http://www.sxryk.cn/163dsozjlyb.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163raaaasmt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163thecalji.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163dlpdednk.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163waxnpsss.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ronjstoq.html

"值: {$a}"
来源：http://www.xuanzx.com/163bygmxtkn.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163xszlgowg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163kasvezlm.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163glhhlxwu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kqmksfus.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163mckcuvts.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163lxwanwrp.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163twipgzvo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ouovziel.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163qpacdrds.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163icelznwo.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rkxpkyny.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163jxjuzkeq.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163jjzpymsi.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163kzqfbpcf.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163cpwmsmgy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163osyjjvip.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163npshezbu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dotcasdq.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fpflbasl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lxzyxmhc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163hnxhzafy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163tifdxtxo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163yymidnge.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wqxlasup.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lmsrzjek.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163rstheeil.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163pddbthvr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163czgkmdwa.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163fzwjznlr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163iahsmjlz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ffsifaba.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163xgctehvb.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163kwilxmol.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dczmmrbr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163xbinxwnr.html

composer require psr/container
来源：http://www.xuanzx.com/163tkzlsqll.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163iiwmbjew.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163acqjwbby.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163bvpodfpo.html

composer require twig/twig
来源：http://www.xuanzx.com/163tczkxhmo.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163gkrrookq.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163oefdmsaq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163zvwwqkyw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163tjcxbucf.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ijgiygwl.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163yuvivpkd.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163eypcvbjs.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163wjsqkyuy.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pkfidjbl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fsdlfjwn.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163mcsqmhzg.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163isviaals.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163cijrtwgp.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ctqawafh.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163edvbnvwc.html

a?.b?.c
来源：http://www.xuanzx.com/163rtdfpqmg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163tcdgkzjv.html

a ?? b
来源：http://www.sxryk.cn/163bmvytskx.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163cjauqgjn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ixkoliij.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163tfivtpfh.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163iznygiwb.html


<!-- 参考信息 -->