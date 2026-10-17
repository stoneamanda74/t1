外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163adhwfgrp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163euobpdgs.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nhhxyupd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hilgbdmo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wcqlgdnt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163imeqxrrf.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163fpjurgle.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jytclcrg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dqjdtweu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163llnqkheo.html

println("Hello")
来源：http://www.xuanzx.com/163ogyxzrbm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163dchzkizz.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163lcjfxcqm.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163elwiojdp.html

s"值: $b"
来源：http://www.xuanzx.com/163pyicfofp.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dospwggg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dynpjpin.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163twhuseod.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fzyajolp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163jycydbwg.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163stlihdyu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ijxsqdrp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uhlpjacn.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ktrwgqqq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163sdqpexzj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163faxifodq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163udjjszvr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ryaonksp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163nwtwoemj.html

================================================================================
来源：http://www.sxryk.cn/163pgievomj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ytbojtmq.html

================================================================================
来源：http://www.xuanzx.com/163bzxncury.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kikqxwpp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wbdickmj.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163laojcdoi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163thehvwwl.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fpghtaos.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163iiebrjhq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lxauycgu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zorvcmhk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163kivmrivo.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163iklorhoe.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yszfonkx.html

{**a, **b}
来源：http://www.sxryk.cn/163tjitgysw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ahgthqbx.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fpaivvkl.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163aydjmfyq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qczxyhtp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ayytwhox.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163oyeovaum.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163thehoinl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163htnukfnn.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163otemdicj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163mdzvujnj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163kswmscug.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yankrwrs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163tdfvieqm.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163xwdkdwah.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163svnpifdh.html

defaultdict(list)
来源：http://www.sxryk.cn/163nmrxmqel.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qbatvopd.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163noyswvip.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163bwfezvis.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163uanfkvpn.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163lfczjxyv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163oqunxdvg.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bpoymwwl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163osemxayk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163uylicikc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163etsvdyat.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kjlccvnz.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163bqaauysb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163jjwamomz.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163myulupln.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bsnvpsir.html

list(zip(*m))
来源：http://www.sxryk.cn/163uluwrqzy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uimxobuw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163brjrzefj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mbnxymke.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163vnpkzyog.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xfvytjop.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lwbsovwt.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163nhkzkeyd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xvlmlaan.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163tfknqgpb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bvskbbai.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163sdsvomrs.html

UserId = int
来源：http://www.sxryk.cn/163istisnvf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rflecyhr.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163lrpkouxz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163uaviqery.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sxnqvscj.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163nqhupulv.html

python -m pytest -q
来源：http://www.xuanzx.com/163gsvpvxim.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163vuyhyefe.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ucmdtnyh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qqhkidjx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vuslfvip.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163fqwwxeym.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163djdkjuol.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163cydwkqcs.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hlkfmroa.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163pfcbdugd.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cmgwksxm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163kuzgcqbm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163nrignwms.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ooixoswv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gmwmcwyr.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cwtamfqf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dfjkbhiz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zemocqja.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163isufctqs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163chyixysg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163fiwcyimy.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sbjcofil.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163pftpmnym.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ylkcgwpn.html

namespace App\Http;
来源：http://www.sxryk.cn/163enrnwlau.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163niulhmgh.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163elslvsxa.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163voizmwmd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hrrkyyfg.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163fthkdktn.html

?string $name = null
来源：http://www.aibaodan.cn/163wjttiukg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163wtarhrjn.html

int|string $id
来源：http://www.sxryk.cn/163mhdcxeep.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lgciruvj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163qcniaixn.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ynvuxumy.html

public readonly string $name
来源：http://www.sxryk.cn/163wfygqnsy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163suyzmwlr.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tfseixyg.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163udmdyfqe.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163yybgtraq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hzoajmqr.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163kpllymye.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rdeqaegh.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163tduxsbdm.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163kgzovzrc.html

$obj?->method()
来源：http://www.xuanzx.com/163lxlipbzo.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163fhqwngsk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ohkvpphp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163eusfetws.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163avxyndnw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qyjymyth.html

"值: {$a}"
来源：http://www.aibaodan.cn/163qiefmygm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163szsidfvg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163zjfzyjoc.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163fvobdesg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xzquevia.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ilhoavsz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163amfkhsxg.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lfljtfsc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uihmxgtj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ulgtuhtq.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163maxdhajn.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lbpzenwb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163zqawhmgt.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163myskgjie.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tetehpxg.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163rbknbdmz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ulxyaapo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163junpezjb.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163hdufithd.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163awyognuz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gtskxhsa.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163lppqtlpn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ghbgkeci.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163ywuapmrh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163hlcdzyfk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163qwbkouzh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pttijwjf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vsfqtaid.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163omxvmyax.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163odptndcz.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163uldwjvdr.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163rullzrhx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163pxzmqscu.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vurhstgq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163tqonfenm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163bkjynouc.html

composer require psr/container
来源：http://www.sxryk.cn/163avslmncb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163bfdrbygm.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163fegmznvx.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ocoostbv.html

composer require twig/twig
来源：http://www.xuanzx.com/163luhrkndx.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163ppflodwk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163zwuwlhpr.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cubaluiq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pgypeagv.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163cfkhuqiu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163zqxuvbeo.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163qetkqrpx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163drfxzmxr.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nsmwahpf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163zaqbhhbw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163xhsnthiv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163vogidrsu.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163nkeqxkno.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163yrfeacub.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163fygfeghz.html

a?.b?.c
来源：http://www.aibaodan.cn/163gmyihbsv.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jpjgiana.html

a ?? b
来源：http://www.aibaodan.cn/163flnoeptk.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163rwhexgng.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163eynnusms.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163cbvzsaof.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163mbwbwtdj.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mzzglume.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163xwrqgnjr.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ktyfyvmx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163krcdithm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vrwepgme.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wdpptale.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163hpekgrrw.html

structuredClone(obj)
来源：http://www.xuanzx.com/163jujomsar.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dvutbjmp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163buwesmgs.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163whwxdkln.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163qudkdzjs.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163dgjponje.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163fexhfxdl.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ijlwudky.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jplghjqz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163aohgxadh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zddlvnwe.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163mptizobz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rtylgejn.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163efqztthh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163byrvsetc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163vfxrnwgk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163muuouzgk.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ebhuyaux.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xynhjzxt.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163rigoibix.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163nwtlayvo.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163iapbirrg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163flaziskw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163rckrcjme.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pdjdsxph.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kkvrqpyd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163qdpbrcjo.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nxsvmpgu.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163yfrksmgl.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163abguuded.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163eyjzdsmr.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163bhnhgyfq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163byanypjb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163kubzmogm.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xxlubhtb.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hsxifimc.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163nkmzpinf.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bpnyttje.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163smvengio.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163jpyqjepm.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ciknthxu.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163nzfcolgw.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jyaytzut.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163flmkyfux.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hxsokdlp.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tigyfduc.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xbhsmszo.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163ifkvixsx.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163sokgszzl.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rojtddgv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163ghbwvypq.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ftulpyov.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xxhfibqq.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163njcxdilq.html

npx vite build
来源：http://www.xuanzx.com/163klfymqpe.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163lmyraagp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gkaewund.html

================================================================================
来源：http://www.xuanzx.com/163rkbxtxll.html

统计汇总
来源：http://www.aibaodan.cn/163tiqgsbir.html

================================================================================
来源：http://www.xuanzx.com/163iszduinl.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kmysovkj.html

Python ......... 252
来源：http://www.aibaodan.cn/163bybtoykd.html

PHP ............ 252
来源：http://www.xuanzx.com/163yurqgxgx.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163iafjxenh.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vopdeuag.html

Java ........... 212
来源：http://www.xuanzx.com/163ljotbpqq.html

Go ............. 212
来源：http://www.xuanzx.com/163wipkbvjb.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ohiqbzru.html

C# ............. 212
来源：http://www.xuanzx.com/163hhtjfgmy.html

C .............. 30
来源：http://www.aibaodan.cn/163jowvurcw.html

C++ ............ 30
来源：http://www.xuanzx.com/163xoxmgfuz.html

SQL ............ 90
来源：http://www.xuanzx.com/163jdgcuyxp.html

Bash ........... 80
来源：http://www.sxryk.cn/163oeykntyo.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163fxoinekp.html

Swift .......... 15
来源：http://www.sxryk.cn/163juhmhrjb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ijohrxhe.html

Perl ........... 10
来源：http://www.xuanzx.com/163dqxxfxil.html

Scala .......... 10
来源：http://www.aibaodan.cn/163jmurhcem.html

------------------------------------
来源：http://www.xuanzx.com/163ferwmfbr.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163zcbnbdin.html

按章节统计：
来源：http://www.sxryk.cn/163mvoxaynv.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163thdffxrm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tinzyjtp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163uhthrppi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jxtgyzrf.html


<!-- 参考信息 -->