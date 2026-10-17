外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zwhousab.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ldhsdxqu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hmfkisee.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lvvnegcp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vyoxxewl.html

================================================================================
来源：http://www.aibaodan.cn/163wdnicohp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nzyxmkig.html

================================================================================
来源：http://www.xuanzx.com/163mkpxlaxf.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163zajxparw.html

println("Hello")
来源：http://www.xuanzx.com/163auahliey.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rlcugfwj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qucnfkbs.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gpuhegwq.html

"值: $b"
来源：http://www.xuanzx.com/163pbdrglgx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163dvkpaftj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dgkblpjj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ebtimhxb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163klwkkcwj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163pelrtvtu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163egznuujf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hofuoxjq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fpljpcom.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hdkyrsiz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163anfodmpj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zmegmrfn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bzxlzuhb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kphphzbp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163bflxdgci.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hstagwcs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163scatvguu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yvcoawvh.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dcuxjfmo.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163qjiymhco.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163efbxdfnd.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163wgbmtrfl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bmndqtpj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163sdykhfrp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wpfwmvxu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ykyvgbsj.html

print("Hello")
来源：http://www.xuanzx.com/163wwttfqot.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vuhldppe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163diaqxqcj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lxeplejt.html

"值: \(b)"
来源：http://www.sxryk.cn/163lzqlmabr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mgylqiho.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163bpkfdhdn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wfsiragh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163shyrezga.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vmkumsyg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163yznsnuue.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163gdqywxtp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163msoqvrvd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163cbdlyzji.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163egdkogni.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lmlogmsv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163crewenbx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rhokzeog.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qhcfmnas.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vzmfqzou.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163klozdsbw.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163npwvbbkz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xlngejaz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163tsshueiu.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163towlnzuc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ptfqxrvw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163igdzxlmp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163mwctxpoi.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163indwwbem.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163sxbsmnxb.html

print("Hello")
来源：http://www.sxryk.cn/163cmqyniyp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ktwibvpb.html

local a = 1
来源：http://www.sxryk.cn/163aggryvpp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163szgwzwbt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163tbxwrkiw.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163afbrrkgi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163yadymuhi.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163cnwnculp.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kzkgidwq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xggwlyhg.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163uewtoydq.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163spnhlgnn.html

"a" .. "b"
来源：http://www.sxryk.cn/163ctoueoiv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kdazkoxj.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zwyfmgii.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tmfmkfad.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ymxmsedz.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ruhydkzy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qybnribl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bsmduexc.html

print "Hello\n";
来源：http://www.xuanzx.com/163jilwjxjo.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163zioxvegf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163hhnowoyu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163tbvildew.html

"值: $a"
来源：http://www.xuanzx.com/163kmbfwunw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163laqouhtd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163yhyzdyvn.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fdhezdxe.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gpfhfdrq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xycetnii.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163oyjzkjid.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yjermfqc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ehvytnqv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pqaknjdn.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ndedxivg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163vacwgjsr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nwqgkwwe.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163fbrhltqd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163taoiftqh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163rkqljszk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jnvkxzjd.html

println("Hello")
来源：http://www.aibaodan.cn/163xqovhorw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163pvdydbiu.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dxedqane.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ebindnur.html

s"值: $b"
来源：http://www.xuanzx.com/163hbgvmpnt.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163tkmrxxoh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163cqwysqmd.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rmhxvqrw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163hizqqjlp.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163imxkadld.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163hzjwtupt.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163cayjvgdd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163fdxgqrkk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iuyrfxcl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kbocreoa.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163nzjxpmhs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rangmufh.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wzsrpipk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uczdixwd.html

================================================================================
来源：http://www.sxryk.cn/163juntzjul.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163txglpdrb.html

================================================================================
来源：http://www.xuanzx.com/163acjrlsle.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163udqdxpez.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163boyicckr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dqjpeqgd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zmumajyd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cyyrbtph.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163utcjsyya.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163smyozlxg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163cxndjoqd.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163gbaspakt.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wyjmiwao.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163tfbibcvl.html

{**a, **b}
来源：http://www.sxryk.cn/163ekdrniax.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tuwnqtzj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163duzvugyb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163cwnrseoo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ucgncpqa.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rfrolwru.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zbfutxli.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163aqjlclfh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qwbagwdx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163bgrskptu.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ofagvjis.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163rpcdcxge.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rpjgkjea.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163orzhazmo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ptoxifrf.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163urqmjzwc.html

defaultdict(list)
来源：http://www.sxryk.cn/163pbkcegpy.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163mupmvynb.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mriqxjlp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163xbknjugr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163aeddxcbs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163tnbjjmel.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163afgvljfd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tszoqejg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163pffecnay.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163lommiyex.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163vgslsbyj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163aheysbrm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163febmcygo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163idqdhcoz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vcoruhuv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163wunfjafe.html

list(zip(*m))
来源：http://www.sxryk.cn/163muewizas.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xpfsagnv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xkvjkzix.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163oiszxhil.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163uifyopum.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163evxejrla.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tjtehrhu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163eiwapbvo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ftqexopp.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jmdqdlgs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163otjhhefq.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fwoxlhxt.html

UserId = int
来源：http://www.xuanzx.com/163skfbcozq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163yfocdaij.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163sjtwzlrp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163amglkpyv.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163icxfgczs.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163gsrhpsjn.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ajzuzxna.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163hftgqbto.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163zwbermva.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163hfnqjggh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163rpibqphr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163wtpvjswn.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wkawzaus.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pljgcxgi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163yodyinru.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163oiuqkwrv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163dsedyvsq.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163pqpicjli.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xogituog.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163uzutgbgj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gstefwni.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163gbgjhamo.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xjhqwrqq.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163eakmkbrm.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iytvqhzv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jgbvcxfb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163lhvjkctp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163eahzlzff.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163eextpowk.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163hcqqlgmr.html

namespace App\Http;
来源：http://www.xuanzx.com/163yibwpemq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yfpazpro.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163dokakvqj.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163milikbzr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jwrstqgq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163syohijla.html

?string $name = null
来源：http://www.aibaodan.cn/163qyqzbnfu.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163axzmhpup.html

int|string $id
来源：http://www.xuanzx.com/163vhnyeywg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ujozklvn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cdgibtke.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163uwkojayr.html

public readonly string $name
来源：http://www.aibaodan.cn/163kylrbync.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163koeljffi.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xkqtswmk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163dyijtqzb.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163vrkhcxef.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163uikxehby.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163inwjvwfh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cbpqldpu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qgmqfyzf.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jkihwyki.html

$obj?->method()
来源：http://www.aibaodan.cn/163rbfdfmbf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163jxyjsjdh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163xupeiapv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163uzabftni.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hkyivxcb.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163etcjskqf.html

"值: {$a}"
来源：http://www.aibaodan.cn/163jqxafvuc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163beplprrf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163celhsthf.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163nqlsppck.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wbuqoruc.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163viuambrx.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163tpuaskyy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163upfjsihp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163uqeoyquy.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ttgjbzte.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zhdjgtdq.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gkerpxiu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cckrfpub.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163wuhxrobu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163dubocfxv.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163prukaqjj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163kbumolra.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163sjvrusrk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163xrjrtdxo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vviavwpo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gclmmpks.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zklzupwf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163pgnqhsci.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163hqzabosg.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163gncsiqhd.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ndlcgtxq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163sdjspucg.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163cfxyuped.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jqjjezld.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tqdkiybr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163hmwnluhz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163opfbxzxq.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163sjtgugyg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163vbajuynb.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163kdecxxyz.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163hqmugkwa.html

composer require psr/container
来源：http://www.sxryk.cn/163ahsfpagd.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163rwcohfit.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163bbqmphwb.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rvoowujw.html

composer require twig/twig
来源：http://www.xuanzx.com/163jefkkaxr.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163wclkauhf.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vlaxkdgi.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qhrwphok.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163euliodiq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bsegmuhm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163dcrdiphm.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kkwztwki.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lvquiuxm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163dvkvwgvq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163mudcikmm.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xzizneyp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ymushloz.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163tfqsgobo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sffodmvu.html


<!-- 参考信息 -->