外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163saadnmjr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163nbiisztq.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163zzbnkccp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bfplaopk.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163iukvjwwj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zpnkccbm.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163iiawmkrg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163qybaqsra.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163golennct.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163tqvmodob.html

println("Hello")
来源：http://www.aibaodan.cn/163mntdmxtv.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wsqbowts.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qzfkrupq.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163hfjlbaon.html

s"值: $b"
来源：http://www.sxryk.cn/163glbjhxsa.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163oyagfxkn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lqmykrlq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nvllggio.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163deaavwro.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163yjmhsvqs.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163tlfdncsv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bcwkheaj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cxgcqify.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hrnazwax.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163avgxkdnm.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163hfexyvuv.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163odcuswaf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ozcbttsq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163eelnzbik.html

================================================================================
来源：http://www.aibaodan.cn/163aiovxhyb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163fnqkvtvb.html

================================================================================
来源：http://www.aibaodan.cn/163cyiurqlr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163tggcmzuq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ikyesefp.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163aewvukhf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163awhqlknb.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163sgdipdvl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163mkilhghp.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qoqzagmo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bfbgdgiq.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dxvjcgom.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ipunnyfg.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163mmpucdaj.html

{**a, **b}
来源：http://www.sxryk.cn/163ujvzjgcp.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163tevofstt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163boaavefs.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kpcltqnn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163aiqiiuob.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kmorwwhm.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163anrxfuvc.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163igtwcqua.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163nzsjpdzb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gvgbzxse.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fwuzfxwv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163cbvmnwlu.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ithkeuri.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qrfkyuwc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vqonabun.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163nbqrbkgy.html

defaultdict(list)
来源：http://www.xuanzx.com/163lunrsznk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163kjviwuyb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163kfzmnrbb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163mcxwokvo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nwicfvwx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qjuqpsxn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vopnywkb.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163vbbvslhe.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163lacbxpfs.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ktjcgupt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163yzwquhva.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163alknxecj.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hikzayoo.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eoxcklus.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xkcqhvnq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fcfkitxw.html

list(zip(*m))
来源：http://www.sxryk.cn/163lnxibwvm.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yrlochvt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qvahjwgx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163agpwyclg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rfdcaklv.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zglfrcpn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163oxieikcd.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163jsvqvspq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163oxsjcjdk.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163agpxgvsb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163forwzvsi.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fxucymqk.html

UserId = int
来源：http://www.sxryk.cn/163pnqkfhsw.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163teuqmfis.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163bgewycaw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163kgnsufwh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163kgxrtlgi.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163iunuplhw.html

python -m pytest -q
来源：http://www.xuanzx.com/163tnwlrxjk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163blztcttq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163szcdvjir.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163nnfflmci.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ducdvzbg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163obikkvpz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163attprcdk.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163iisijddl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163yjqzoird.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lhccaaif.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163juibqytf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163ruagyomq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vjiatijz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163toxwthdz.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163zlgtlbke.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163bbeehziu.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163hqnfefau.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163tmpltryg.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cziywcnd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wfgdhxla.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163fzzvbqcq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bwnhdjbb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163tfieckep.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163meusfoxi.html

namespace App\Http;
来源：http://www.sxryk.cn/163fjetzhbj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yizrkwpp.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163jbeapzlb.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163xjtyjptb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ummdgxwa.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ftczhhzx.html

?string $name = null
来源：http://www.sxryk.cn/163qhfvzmda.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163gklryutg.html

int|string $id
来源：http://www.aibaodan.cn/163awhybiap.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fyxbkfka.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163uymyvysj.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mqdomhco.html

public readonly string $name
来源：http://www.aibaodan.cn/163zuhsjpyt.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163sfslyvmh.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mkmcdquh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rotonfcl.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163dykkcjip.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ubwhskxn.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163fvunjfix.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163fgngfvbq.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163rltpksed.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wkvvtbrz.html

$obj?->method()
来源：http://www.aibaodan.cn/163xgvqqjti.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163izjifavf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163zyyieill.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mrbmpvwt.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qesewpzz.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163nojgzfkb.html

"值: {$a}"
来源：http://www.xuanzx.com/163maxxltdx.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163khauyzrk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163zsoapwnu.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163unuodgwm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bcfcuzok.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163vuxdkcbq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wvltbeho.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163jlnmaetq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ribdgchs.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163clpfwxkr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wuviqvpu.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163pmnbfndd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163mhhdbnvg.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163xffkdxvx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bpveerjb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163xzqxojmn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163yynffktl.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ggavlhvl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163mogvquyj.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163eakiqjlo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rlrdlaid.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163hlbgqxzg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qylhxhxj.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163gtpzjnze.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163idjidzsx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xcktjkqj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163cpstlmtz.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hzuckbir.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dmugmzgz.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kvdabuoh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163alqpwidh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gddfdixr.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mruqhfbe.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163gnypefso.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rucfnjkz.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163maamtxpv.html

composer require psr/container
来源：http://www.sxryk.cn/163mrlcxkmu.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163prtcnynd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ykrhxkvm.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vhhgqhwv.html

composer require twig/twig
来源：http://www.xuanzx.com/163zmpsscnq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ixintzza.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ybbvabtt.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ntpygtoi.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ycqeauau.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163fwjwaajh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163mndtksox.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163qykmknlp.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163chnuyixl.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163cnmmcvpc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xxytjmbf.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163flbbuutx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163fkxlybul.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163hfkqdopj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zzernmix.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163zfqwcvhh.html

a?.b?.c
来源：http://www.xuanzx.com/163wkgucwbg.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163llfrlqgn.html

a ?? b
来源：http://www.sxryk.cn/163nouzvwsr.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qacmmvov.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ssrjqrie.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163zucjiubj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mwxhndki.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163aajryfvg.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163crigzfjg.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163xkpzqofg.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ruievvcq.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rgabasxq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163keoukjwf.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gyuwbsdo.html

structuredClone(obj)
来源：http://www.sxryk.cn/163inhsoler.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163spxhnpcx.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163zrtyssns.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163fwybfeey.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yrpbizcq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163kkbtqffi.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163eivqualq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163cvcshqen.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163aqevsubp.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163zyhgityh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mqfmlqke.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mhftttww.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163typszqdk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mbxcabpd.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163cpjdcdqm.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163luayqzuy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wvdhcizb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ywrggnzx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163hrcixcpt.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163aywkbmdb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163zoobwnds.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163udjlzssv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163anadwdye.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163snaycfas.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ofgnrbfg.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163zluqtner.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163rwzuzucu.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163zimlivbh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163udwemcjm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vktecjra.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163uxlhpqhz.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163ymbwmrmp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163mhhoorna.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163oqwjrcjd.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163elbbexlq.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163phvduhzq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163zreojqpa.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163efpbtqgl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163bapbvpui.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163tdidqsey.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lwjitgek.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ziveznar.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163livhotxw.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ldvtsiqy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jdgwykiv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lpqevpwz.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163sjxonbxw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rmakkjbv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xmlfbjuk.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163qdcywtik.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163bwjunscd.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163fcqqqqmc.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163frhjzbsv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163esiezjux.html

npx vite build
来源：http://www.xuanzx.com/163sogyqcgu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163dokgjwsz.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hktzsblg.html

================================================================================
来源：http://www.xuanzx.com/163mzsghnsn.html

统计汇总
来源：http://www.xuanzx.com/163korvprpx.html

================================================================================
来源：http://www.xuanzx.com/163lxhhlqzl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163tnphvqax.html

Python ......... 252
来源：http://www.aibaodan.cn/163jaqilhzi.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mjegxbbj.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ulfeaaef.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ctvfgkzz.html

Java ........... 212
来源：http://www.aibaodan.cn/163lmjxkfun.html

Go ............. 212
来源：http://www.aibaodan.cn/163iqnwkfvg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163fqurqoyw.html

C# ............. 212
来源：http://www.sxryk.cn/163yvewxdmz.html

C .............. 30
来源：http://www.sxryk.cn/163tjdxpyeu.html

C++ ............ 30
来源：http://www.xuanzx.com/163zpajiqqz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163avcbmebo.html

Bash ........... 80
来源：http://www.sxryk.cn/163amljfenl.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ghquzrse.html

Swift .......... 15
来源：http://www.aibaodan.cn/163bwnuqezl.html

Lua ............ 10
来源：http://www.aibaodan.cn/163wmosuqyb.html

Perl ........... 10
来源：http://www.aibaodan.cn/163qhjeqwrq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163vybalbxu.html

------------------------------------
来源：http://www.aibaodan.cn/163oxralnse.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163btmtnwov.html

按章节统计：
来源：http://www.aibaodan.cn/163djqpvurw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jpiwhejv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jtvctioo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163wyyckhwo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163sdqultpb.html


<!-- 参考信息 -->