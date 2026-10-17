外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163vneghxzs.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ubueprld.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zereopot.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163slvwiefy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163eijkflpy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hvyklwwi.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163xsugjplh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ivudecxp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163kdqyjysk.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xtkkmglm.html

println("Hello")
来源：http://www.xuanzx.com/163orrwzlpa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163shduhyha.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cajyqnrm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zrcmpirr.html

s"值: $b"
来源：http://www.sxryk.cn/163iiwhlkrq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qqjzvrbd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163pnbvommy.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163gacvcpjj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163hdngjfnb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qfascudk.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163frtvdvvk.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ldbwnded.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163nfqwejmz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iuybnwvk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163efobivki.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ddkvdhmp.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163jwiwphcg.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163pfloqvhq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hkoymhfy.html

================================================================================
来源：http://www.sxryk.cn/163hbeotziu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163nzunuell.html

================================================================================
来源：http://www.aibaodan.cn/163aannpirt.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163spryezyp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ohpqudar.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ruippjpv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163lcbyebsj.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cpxwknky.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cvtyjysp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163wcmtahyn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163qssncutg.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163icjocibs.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163keimqkct.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163cceiwsef.html

{**a, **b}
来源：http://www.aibaodan.cn/163wijepwms.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163yzznvcvt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163iubtguza.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kzlgsmtl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rhbgoras.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163dvuarhhl.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163foodjibw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hfqltamm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163yiviebuj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163klieymjd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163bzmdjfrt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ooiutlxr.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vxrraeno.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163odxnfcwo.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jwdhjvpu.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zjrdwttt.html

defaultdict(list)
来源：http://www.aibaodan.cn/163uziwanzt.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vqilbnmt.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hkfkplmj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wafszvmt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tvvrkqhj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163gttuitxr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kwiktqjv.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163metsdnmp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rfzusjht.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163zaaalwra.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163drxkzjel.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hxmqrpqd.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163lgziefwr.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rcgjvism.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163bxcwhuhc.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163laecqcdg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wuykwzhu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jrloomlw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kmayqgua.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163buvpnxfk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ylesooph.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dvedypdn.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lsvlhjkb.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qcsezrbv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ykhqmurp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163nkvmtvpw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163nhbkjvzg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gdgzfeqo.html

UserId = int
来源：http://www.aibaodan.cn/163bmmycwac.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163wltbqzvj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163iqzbozbd.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163tsjqozzx.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163vpjcytfs.html

[U31] Py：单测
来源：http://www.xuanzx.com/163bkwmjqkv.html

python -m pytest -q
来源：http://www.xuanzx.com/163dbkpbsut.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wdrfsast.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163lsahburu.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163chnaymru.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ctyqzvej.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xomyxong.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tjjipapa.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ntlqkwud.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163jlydabsl.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163hopbrzrx.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hcxlmnwl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pyngaxjv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163bqaopwue.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163agsetnny.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163tuyvnwxq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ggbnvewp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tuavbjmo.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163bwbhzomd.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mgfltxtp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gfaalmel.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qecezvvz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qazmrnfo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cbkogipu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163vqvbosma.html

namespace App\Http;
来源：http://www.sxryk.cn/163hijbjnuz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163pomvxpdt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163necgyiyn.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163cilcpsjm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nrrspfss.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dszskymb.html

?string $name = null
来源：http://www.aibaodan.cn/163jrexhgjp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163asucragr.html

int|string $id
来源：http://www.sxryk.cn/163ibjyecjc.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163fnegkdms.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163tfbkdusn.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cyhgotfg.html

public readonly string $name
来源：http://www.sxryk.cn/163tvuiqowu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hwwvvlcc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163izwiczuk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ulqslhqe.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163tldzpegm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ttargkos.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kiwdxilu.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163tsjxezsm.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ynptrxgf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163pqatzidz.html

$obj?->method()
来源：http://www.sxryk.cn/163fegkvftx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163pnvejopp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163vpuvbwth.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163jvcmtvyf.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163spnkdpzf.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163xiipwptn.html

"值: {$a}"
来源：http://www.xuanzx.com/163qwfqjtfi.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wxulcomc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163gyiemduf.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163qnblpubw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gduzfaun.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ynaigpyw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163tmohyohh.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163dwdwgttf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163dpeahsli.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163fabtdahn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163rxscdwou.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mghcvihy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163klsxiqkj.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163eofvlumd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dzghvbhr.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163otdcildm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163urdmrlfr.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163nlxdjdng.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163aldlvyez.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163bocmnfpw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163zeugnqfy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163vurizbmg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163jbpabtbr.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ykrqbiew.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163mngcdyrj.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ujgovhec.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163kbsdshvk.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163krohppwj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163nixskxnm.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163fgiewtfo.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163lwulcfkn.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163grldmxxi.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163osjwchqt.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ygxyhpim.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163czawfrrs.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jibpfjwe.html

composer require psr/container
来源：http://www.sxryk.cn/163xvvlajxe.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163yknbnqtu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ovragjfu.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163htfxmoge.html

composer require twig/twig
来源：http://www.xuanzx.com/163yhfcpinr.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163eyueecbe.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lelkbrqv.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mkaxemkq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wyebpfho.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163fdqrnokq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163niobhnoc.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163mxgjnwro.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ebeykkjm.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jcpukpip.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163kgaezvqu.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163cmwxdjmz.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zcduvnil.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163awlsasah.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163omcbxtpn.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163rxwghpex.html

a?.b?.c
来源：http://www.sxryk.cn/163tsmsxkil.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163irnscsmr.html

a ?? b
来源：http://www.xuanzx.com/163iknbwtlu.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163olxqadpg.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dakahplf.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163bjvpqmhy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dmngorod.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163nxqtlzpn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163sdujlubx.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kneclffv.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aobweyfa.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163dhmplqay.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lkcviuau.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163eksivkbc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163ebrfuwnv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vuzlyrwv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163daxtduog.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vvpvirff.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163xrasunav.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163korcyuch.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163upbrkmxi.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163pqxlziic.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xhqjbxdg.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163ziachjnp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uioqcnth.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163cuasdcnq.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163owimgzjf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163uyvoxiut.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163yngzfsvt.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163byjhabmr.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163pssyieeh.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dhuyhxhs.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163wdhiqyml.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163tinvhgai.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163ocedfbqw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163neefppre.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dodwjfmg.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163zsvhnecu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pqimwrio.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jmzgrdic.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163jbqwiucm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163bdbkhyqs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163txydtlip.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163ffuxbtxa.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163hugobdpc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163urhgjbdp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gpzeqlbb.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cckrabgk.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qysaqnnz.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nxdsvfyo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163clhhaljq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163tvwifhmj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ufaijmfw.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lfqjbvgn.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pplfxkux.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163haibupfa.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kszkimhm.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nryqrcio.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rzyhfewq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163gztuehef.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163jsvkupzx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ljewdnsa.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163gdsctntb.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163oxlwwwks.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163avfpbcgd.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163jzntckqp.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163rpanbccy.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163qhgkvtfi.html

npx vite build
来源：http://www.sxryk.cn/163zfoqtsjp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lxuxfzyr.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zyrnaiwd.html

================================================================================
来源：http://www.sxryk.cn/163jwtqpdwq.html

统计汇总
来源：http://www.sxryk.cn/163zyzjreim.html

================================================================================
来源：http://www.xuanzx.com/163tmjrelcs.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163uksuunzu.html

Python ......... 252
来源：http://www.aibaodan.cn/163kxvbfluf.html

PHP ............ 252
来源：http://www.sxryk.cn/163awjzovuy.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163pgvyhftu.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163trnxxgzp.html

Java ........... 212
来源：http://www.xuanzx.com/163ifsykbsm.html

Go ............. 212
来源：http://www.aibaodan.cn/163khhrsvmc.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jdwdccdy.html

C# ............. 212
来源：http://www.xuanzx.com/163hpowcnnw.html

C .............. 30
来源：http://www.sxryk.cn/163kxsdfnxf.html

C++ ............ 30
来源：http://www.sxryk.cn/163cpngsxfz.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ahvsustb.html

Bash ........... 80
来源：http://www.xuanzx.com/163grwfcoxa.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163yffubjcf.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wjkkpxzk.html

Lua ............ 10
来源：http://www.xuanzx.com/163pmwcylcz.html

Perl ........... 10
来源：http://www.sxryk.cn/163ufnaymee.html

Scala .......... 10
来源：http://www.sxryk.cn/163uwvcfcmk.html

------------------------------------
来源：http://www.sxryk.cn/163oxncyzwi.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vdzyuxwk.html

按章节统计：
来源：http://www.xuanzx.com/163slirskho.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ucligigw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zutfnjei.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jauhtlfk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163szlxgprj.html


<!-- 参考信息 -->