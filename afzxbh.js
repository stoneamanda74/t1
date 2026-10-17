外链999!wailian999！

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tkroufya.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163apzygmxa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xkwtirxv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163diluyhtg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cdjacpkr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163plznpsnv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163semuelya.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ovzfarlk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163codfpqap.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lglahiuc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pxjmsnfy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vjpzkdob.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qpwwaraf.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gxfuqukf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163pmedqghc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qdhdteoa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wsodikfc.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cvbujymv.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163hvwondgr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163iyfbbyeo.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ubyezgnt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hqhsnvwv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qqakxzec.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dfgmwqvk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vhagtxqo.html

================================================================================
来源：http://www.aibaodan.cn/163jzlmreqw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163aulaeyyf.html

================================================================================
来源：http://www.sxryk.cn/163ptlrrqva.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qavkrfrg.html

println("Hello")
来源：http://www.aibaodan.cn/163oxkkousi.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cerqcdui.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163wphzmqnu.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wnqtrnsr.html

"值: $b"
来源：http://www.sxryk.cn/163cncimgvi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163rosgzvoz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nlyarxie.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163maxbimij.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wvyeutqf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163tnrbvsmv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163cndynozn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163stbhkrfp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qpjqryve.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163hekegeff.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163aqegnuhm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ixnenlaf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ndsqsczg.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dnwmupjo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qiqqpvws.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163glosarur.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pvmrqwin.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163dfgdydbw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fqxbelln.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yxbtfkrm.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rkkeqfvk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163durnbmdo.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163azflqpiw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163wkgufifh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163igjvcclm.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wuecmxge.html

print("Hello")
来源：http://www.sxryk.cn/163rkgcxztc.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nzljfyet.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163tvgwseet.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163esnyylkx.html

"值: \(b)"
来源：http://www.sxryk.cn/163dnowrzxl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hlqrftih.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163oayrufzi.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tlcvogni.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163apptvbwd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163iplussxd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tagqyjou.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163raseptny.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ygaeueob.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bztrzoio.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163uskyhgwu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163twgmqlqm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163gnzbieip.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ynvmiwtd.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qicsujob.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163dsxuzzwg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kewmxgou.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nilnwmkg.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hcwgnaed.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dpbakzpa.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ricwbwfw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163axapurgz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163bgkdrxwc.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gjuqjypk.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gfxvmvcu.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163zvcouvsu.html

print("Hello")
来源：http://www.xuanzx.com/163muczmuhg.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163pjjajpnz.html

local a = 1
来源：http://www.aibaodan.cn/163kqigvtal.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ulksubkm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163kewnjity.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kofncopi.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tmpqchku.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xzqutjnk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163exxdvenl.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163eirszqzx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ozwxhlvk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163testjvng.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ndmshbpd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163snsyyfea.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vnwubikj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163haetekvp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ymhtdizv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163kdindkxj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163qnsfcnjo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lfptfbqm.html

print "Hello\n";
来源：http://www.sxryk.cn/163jhsbyoke.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163godhcnnk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hxbftqsv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ketljrud.html

"值: $a"
来源：http://www.xuanzx.com/163rzgxouvk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tqpquylx.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163oofycoap.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163iwidxpqt.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163dgxdmahs.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163alfsthxy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163baueklwi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163meiegjir.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rtkfemjl.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hndmnnvm.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qzcpheow.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vljvknvg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163jobjuyar.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163gsjgbiui.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163moptvydg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163zeslrbzm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163sygzvbpm.html

println("Hello")
来源：http://www.sxryk.cn/163mfxqdjty.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163kpcvjvyi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163olqowpgg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zrbtzbvb.html

s"值: $b"
来源：http://www.sxryk.cn/163kswvjdlw.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zzcgdifx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163uuaecqhx.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163yfuqocbk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ccxkodez.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xdxkinxm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bpksptcs.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163nrkzlssk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163olkhvlaf.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zvovlidq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ejjoulcx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kjfipfgp.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163xkvhriua.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yqsvwimc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mogwcovm.html

================================================================================
来源：http://www.sxryk.cn/163qjjcwdvi.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nusinczk.html

================================================================================
来源：http://www.aibaodan.cn/163cuegnwii.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163whowknmw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rxsqbmsk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163eutmajsg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ycrftqmy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163liibxmck.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zwjpriba.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163jtdcjzzw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163yamaauor.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jkvxrokm.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yrouwywo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163onkrpwiy.html

{**a, **b}
来源：http://www.xuanzx.com/163eusxmmfv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jgahnfxh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ehmmvkmr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ugmvdhsz.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bqmmjhet.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163nxzqhwgd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163dqvuyaap.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163fiqtdknk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163zmybwemq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fnofpmua.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zqtgwjfo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163skyrkigv.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vtlyuvnn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163dgbhagau.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163gxvlukcb.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ifjkdsty.html

defaultdict(list)
来源：http://www.sxryk.cn/163rtahvotw.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zlrwitfy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163dewwnojs.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163qvlzmcue.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163elphjrhg.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ivkwtrii.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nxanqmfr.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163vbdfseii.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163favjaret.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163tssublok.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163otmsydzd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163astkvuua.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163gkxmsbme.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163krjnobed.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cmsbzkcw.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163moxihtln.html

list(zip(*m))
来源：http://www.sxryk.cn/163jorqquqr.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163pikogllm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163yyzbtltq.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rmujjxho.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163pbgcgtqd.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163kcdmlqlj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xehpxztc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gnkbryyf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163kyffqzvk.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163sikbbofj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163udyvgnig.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163sijldyfl.html

UserId = int
来源：http://www.sxryk.cn/163hauoqdiv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163lwkjfahp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163udcwlemx.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163duultgcb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hftrjnhw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163oqlpxryk.html

python -m pytest -q
来源：http://www.sxryk.cn/163dvfwczbm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163shygcjpd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163sghpfeag.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163poicllnd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163hhqftqen.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kekmgcya.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163kkywkqjc.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ubnoizja.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163uecccofs.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163voxhuzja.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vxjqbfiz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lfzfolai.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nijbwjxm.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vecwjzpk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163wysadfxo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gcyrjywx.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163esqjwcos.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ymkaceln.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163akagpfjl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163inuokmvp.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163zzviqmlu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163hkottahi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163hceirlpa.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163nuhqigcv.html

namespace App\Http;
来源：http://www.aibaodan.cn/163aptxqlxi.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163twaehsoc.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163cgqpkstc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163vukproov.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fjuhhpsh.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163nvwqfesa.html

?string $name = null
来源：http://www.xuanzx.com/163wbcgttxs.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163xduscses.html

int|string $id
来源：http://www.xuanzx.com/163ghqaajki.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163euipyzlz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ccvbiqqi.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ucvxynsh.html

public readonly string $name
来源：http://www.sxryk.cn/163tmfxkwou.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163sfgxpjku.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163uxknnhka.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163imyvzcaf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ytrzolmz.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jsjluqkn.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dmwnwwjl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163fahhjfiw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163uxfmmoxg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163pihgfiqg.html

$obj?->method()
来源：http://www.xuanzx.com/163ahgkxyqe.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163vjvzenut.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hkepjsgp.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163olfzxeyh.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163obutovfr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163qdptmhug.html

"值: {$a}"
来源：http://www.xuanzx.com/163odmnpmnc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163mrdxbjsm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163fgnlhjgq.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163owxleidd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gibhctxm.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163qrkbsuiq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163neacaqha.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163icxtcbvt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163swsowexa.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163azpponpz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163fzlhvycm.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rvmzcbrp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163dzsuzvca.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mnustxal.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163cnbncwml.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xjyrjoax.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163wuyyptok.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163sksxsoib.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kvzpzsev.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163pzwywkkz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lpfgsbns.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163pseofeco.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163mregpoip.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163bjddjiss.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163sqxgjjzq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163crmrkwtw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mjtdvkma.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163nxoxyilw.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qacssdlj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163swpbunmi.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163bebnoiyc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163bguzixco.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mqyehocj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ekyfxvpv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wllggzsa.html


<!-- 参考信息 -->