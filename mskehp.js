外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wxelptsy.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rgfwodru.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lamxkysv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hlbhxscp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rfbyepwu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163eilufwkf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iklygpun.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rpbhpiga.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yqbsgdfi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pjepruse.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163adraawtr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163sugjreem.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zvjfmbcn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lqexnduu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fxqvznqs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rblnmklv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163iqgzctvb.html

================================================================================
来源：http://www.aibaodan.cn/163ufhckwbz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kgfrmaxy.html

================================================================================
来源：http://www.aibaodan.cn/163pewcxwfx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qakkimze.html

println("Hello")
来源：http://www.xuanzx.com/163sjgagrny.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163giuhmvrq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163beqqfjqo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vlaamcbl.html

"值: $b"
来源：http://www.aibaodan.cn/163ojemnoub.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uczrohql.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mmupszzq.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xqhtsqxd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163jdlydypt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163azdimrfe.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gvrdtolr.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cveceqmy.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163wlxlhude.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sumxzdrh.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163boqvlcka.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sizkyycb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ksgqhutm.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qkqadcws.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163eufqfjua.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hjnsqowu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jhqwgqoy.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163vtocvlee.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163yrogkvhj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163azkfdhmg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163qzwftnan.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163chktvtfr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163efeqqssm.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pciuyvdx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163mmhhfrll.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ihxqyxcn.html

print("Hello")
来源：http://www.aibaodan.cn/163iwhrcimt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163acpqtixr.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163woyxtcio.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163jtdxqrax.html

"值: \(b)"
来源：http://www.xuanzx.com/163jmkovntg.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163tcfnvmlv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163jizwrvsu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163svgchxbq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zuioqljd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163hrokqmxh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fadlbgse.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163nfvddgby.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163fadxdwmv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163igklboih.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ldwkugbr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ktgwsesk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rwbnqtdb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wteujwme.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163uowdzbhr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mifhtpme.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163wuszigeb.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kzkeekuu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163yzpexpug.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mabcfgxk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163lpirowad.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163oajefqmv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163veobdpqu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wkmukmme.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163zgqiupns.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qhlraxre.html

print("Hello")
来源：http://www.xuanzx.com/163fvoraqte.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qxwwvydg.html

local a = 1
来源：http://www.xuanzx.com/163ujqmhnfw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ympnslyt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163pyskfeyg.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163iyyuirnv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ouinvivk.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vzgfiwxt.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hqbbkabq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vllrdbeq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163suyaozzh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163kbqmcvik.html

"a" .. "b"
来源：http://www.xuanzx.com/163xgnddrmc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163zoduaxxp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zttasfwh.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163yqflegbf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163quarmday.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fjvphujn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163egwavsrm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163abrinaqh.html

print "Hello\n";
来源：http://www.xuanzx.com/163firownxy.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ngvvgtji.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xofetcpn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xhrtddde.html

"值: $a"
来源：http://www.aibaodan.cn/163pduluech.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kojluyhi.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163fiwuobet.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zmdtjajr.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163tedqaadj.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hdovhmxb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163znrfxddf.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163sutwkwxj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tqdcphpc.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163njddbszj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163uhpjwvfy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163rgizzbix.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163iwznscty.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hupescvf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dhitykfa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163dfhsbizz.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tmpwaliz.html

println("Hello")
来源：http://www.aibaodan.cn/163zuwltbpl.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pqkypuik.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qokhrnfq.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163cmdiqryu.html

s"值: $b"
来源：http://www.aibaodan.cn/163vaqfkigq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mngwzvpg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yhhvvqvu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163etyqruvl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163nybahwue.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tfmvrmdr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nnhvshdw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pqyrnguv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iijhifni.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163nsgrlmim.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163eglnftpj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163bcvcijzl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gzmdrkup.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163judkxxxf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163mkldgcoh.html

================================================================================
来源：http://www.aibaodan.cn/163kwuaiffi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ebiduftu.html

================================================================================
来源：http://www.aibaodan.cn/163pvagwasw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163drdyphjg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jbxnlswo.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jqifzvix.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163dphirizi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163hieeezvf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163tknajxrl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qdqglhbo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163zkulmjuf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jpkeeukz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uozbpmer.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cspyrsve.html

{**a, **b}
来源：http://www.xuanzx.com/163yvsdenrj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vfdxxfvd.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vzptgkus.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pejoejyc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zemvqodv.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163htjprnmg.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zgnpzuiu.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163taseigmm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163uzbesvyh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163erivbale.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wmhyjbuh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163fifffzlz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163oaywtpik.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163eyksvzlk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jlpbzslr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163nbolffjf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163tjedmkiz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163enaozzub.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ckefflrb.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mzgwvhag.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xqepcegw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163grtqszwp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kiihcdlg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163loefmbfy.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163oypuxasa.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163etsroekg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fzzbsluv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163aylmaynj.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163vkykzfka.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ibbjaoho.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163yymbcjxo.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163sbypeuyp.html

list(zip(*m))
来源：http://www.sxryk.cn/163zcbxympr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ifydmmmn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bacdhxtu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qscdqwxm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163dtckfsmj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lgcaxirn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163twyuqqtu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xdldmeqj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jevkbznv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gyvudypo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zialqwpn.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163wsvbvxly.html

UserId = int
来源：http://www.xuanzx.com/163ucjqteku.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rtvluopk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163yytxztnh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lcsadgpn.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163jshzokee.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163uacsfkfm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ghcgedud.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163aychevpc.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vmqwkhfl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163blsqfmku.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163sqgxfnek.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xfzhujxl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gzzytolt.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163yszbvnpc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sqdzxpyj.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zumsovbi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163bmanpaav.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163jzlnrtfy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163xyimodrk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163wengdomp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163snatykpf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163shtqecve.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163oslfsvka.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163olvcvfps.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fyetwvhc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163agwfxovl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ucbihmlp.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163bzlzivpt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163krlghfek.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163vaxeyshs.html

namespace App\Http;
来源：http://www.xuanzx.com/163ynpgjljm.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163auzsyxyv.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163eipxeoaq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ehdbhoec.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fbsfcfuc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163kjfrznks.html

?string $name = null
来源：http://www.xuanzx.com/163tpsphkeu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ncpfjugt.html

int|string $id
来源：http://www.sxryk.cn/163jliihgnc.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163jrnvhxkt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163zekfqpzp.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163cesdqjcl.html

public readonly string $name
来源：http://www.sxryk.cn/163eyvtslff.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kxumuhfb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163swqkckjo.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163dwymbgpu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163nimkozrw.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163irbbhyqs.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163jhgnwmcr.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fyokdisq.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xvesxqqv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163uzlcfkco.html

$obj?->method()
来源：http://www.aibaodan.cn/163wkoggguf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bisbhdhg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163tloehnan.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163lqtokyrk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163syoupkis.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163iqqzazyy.html

"值: {$a}"
来源：http://www.xuanzx.com/163bxkojece.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163qzcjnvol.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qyjeggum.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wsglcmuj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hmazmoye.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ftfhnwsk.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163gygqczvu.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cjucezdr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163dblrdxcr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163akbvlrax.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163vrkcnjgx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ucqkozyi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cfuglplb.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163orfwcird.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163xrxfjofd.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163eeapeszq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yivpaoql.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ojyvaruw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163eevrmuvw.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ahwbwong.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wxobggct.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163gvraxxcw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jhswblkj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163pcsqaqzr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163iepxbvdn.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ezqsylag.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kuoqntwr.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xumodtpu.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163wdlbbpfu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hbomvkfa.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163njhbnupx.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163dzknihpk.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163gvzuefrb.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ygaqvcwl.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163tdyzzteu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163smmzeijb.html

composer require psr/container
来源：http://www.aibaodan.cn/163awzxesbr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163dearegbd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163cldxustr.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163jzedzwzh.html

composer require twig/twig
来源：http://www.aibaodan.cn/163nnktoilv.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163afuvgroz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163mqlrjocu.html


<!-- 参考信息 -->