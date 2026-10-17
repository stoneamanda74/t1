外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qwbiwjlz.html

"值: $a"
来源：http://www.xuanzx.com/163eboahpqw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mvikuper.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mbzxgzic.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163hadgcrdj.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ewkhppel.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163maetaomt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163pqwfnkww.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163evoihzwy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163slhgcsfn.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163eknvowam.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163qniacjwv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pnmijutr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ekkttebv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163jqnuicnq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163wdrpqdlw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163rxkqdgnr.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zcvmmnxy.html

println("Hello")
来源：http://www.sxryk.cn/163wvbowckq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ggkyodeb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163exgxzerx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qzqbuwwq.html

s"值: $b"
来源：http://www.sxryk.cn/163kmkgmidx.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163aluooatw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fdthwzfv.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163diedzlbl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ilawafic.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ylcjngyj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163iytphbsy.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qopawjty.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wpoabjsp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163fghntaaj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rgjccklf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ijbczpor.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hajktetm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lvbhploc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ytksiyrp.html

================================================================================
来源：http://www.aibaodan.cn/163iuvzfgrm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xypaompr.html

================================================================================
来源：http://www.sxryk.cn/163jblaolil.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ragwajhm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163owczozaq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163vjigwpnk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163emtyrcbv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ztpekpeo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163bgbzhemz.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163rqhuvqxh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163unwckeop.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163jpydrkad.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dcijcmrf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163mcdhlvgv.html

{**a, **b}
来源：http://www.sxryk.cn/163qpyuexlq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163obkqhvex.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hmohrpom.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163nsovidtf.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163rifaamju.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163btmnqfvj.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163credizyh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163svngpuzz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163wlyifbml.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ruuizhhe.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kinfuynx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163vwdowwlv.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163orzuhbxs.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163zqvwvezr.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163kelgaxgi.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dgoqrmdo.html

defaultdict(list)
来源：http://www.xuanzx.com/163edsrpqer.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ultvjqiz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163jchzmlus.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163jcqwetld.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xtkwtapm.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jgikizjb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163wsttxmph.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ealavqqc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163sqiwjemj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ntcqbowg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163nzztonik.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rulrqbxf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hxrgwhiq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163pzlymsnp.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gdkgiwqc.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163dvscvxkr.html

list(zip(*m))
来源：http://www.xuanzx.com/163kdvwgehp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163kkeeqama.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163xsigzsrq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163wnnxwnqv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rlsbhvet.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nxsshqkr.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cshiotyi.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wvmwgfbl.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163lfvowauw.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wwktebqe.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163xkicnklr.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wzrdcsil.html

UserId = int
来源：http://www.xuanzx.com/163wwagrdbv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vyqblkas.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qieljxtq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163liiavzol.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jilznvij.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bxpvkzms.html

python -m pytest -q
来源：http://www.xuanzx.com/163cgbfwwoi.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163rbmrwswo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163gzzlmnix.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163owxcnfyw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163kppsprqw.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jnwxohah.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ordsxhrz.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163eefifogq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ixmcwbow.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163aybxwcta.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163iezahhvw.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bsnmfkjy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vochbqed.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ujsmycam.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ymmzwcne.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163mnibapcu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163rwxgogbm.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gzmfjlke.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wleatjum.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163bjerrhvs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163yxiizakg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163gpnedsxq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163cgnxburl.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lwywqxan.html

namespace App\Http;
来源：http://www.sxryk.cn/163cxxbqjbg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163wdniijth.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163exdfbmdt.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lraizxih.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163exegksyf.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ykirgile.html

?string $name = null
来源：http://www.sxryk.cn/163gfdrityt.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163jwwxnqcv.html

int|string $id
来源：http://www.xuanzx.com/163huqjxmnj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hngliwlo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cvnetrho.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ykkqozsx.html

public readonly string $name
来源：http://www.sxryk.cn/163ukvsrmcz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zplesqno.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163oizdtghh.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zdolbnfs.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163bzkjwqth.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wmjivffl.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ppqkrxhi.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cbwemdmf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ywvgjzzt.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163arkskevm.html

$obj?->method()
来源：http://www.sxryk.cn/163jvmiupgl.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163xuioutac.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163pfztxxje.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163lxguvuen.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iaxhfljo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163saxulweb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163rflchxxo.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163imdnwltn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qjybtiwd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163odmarslz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zdpdivqn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163immacevm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163jszfwfpa.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163fdqfjzvs.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ubshcenb.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163vzublliz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163sskzkluv.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163pziodmld.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163lqydpvbc.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163zibtgsvy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163lmxzivkz.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lfsqnxdo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163atbjherd.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163oxlzaxzt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163hkndbkfy.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163satebiqo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163qggctzwl.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zfcsqrot.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163azoykwhd.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163hinpkbfs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163pjjcajhw.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hgltvtod.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163uobbgmry.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yriqanby.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163svkebvgs.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163qfgrkzvj.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163gumnnfsk.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pmrqhapm.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163ezpxgjjv.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163gwedfcna.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ujysqiaa.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163uuptoqsy.html

composer require psr/container
来源：http://www.aibaodan.cn/163vhorjxre.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163xmdntyfu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tspgnhoy.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163amkhnxez.html

composer require twig/twig
来源：http://www.aibaodan.cn/163mpycvjms.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163hbnpnbcl.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jxgomrxn.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bfirlkuj.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163mwdlvqrh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wbysmgko.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163exlkugrx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163srrraulx.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qlngynid.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163zcjbwgie.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163kysflilf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qxsyygig.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rjasirxx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163zjtongai.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xkwzxecr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163oslvhaou.html

a?.b?.c
来源：http://www.sxryk.cn/163aqttvoog.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163dbfqjaaq.html

a ?? b
来源：http://www.aibaodan.cn/163ftszaida.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163aiiihbfp.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163thcnwrnb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gomulgex.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163aytcgqbz.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163nvndysuw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163cqanbwno.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163twlghzlf.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pqpoyifr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163nrkvatkp.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ihbnzwmo.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163dwuioxax.html

structuredClone(obj)
来源：http://www.sxryk.cn/163eondwhxl.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163gjowdcjo.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163liiyttcn.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163gtaatmos.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163luidqjwk.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163cxfsncwy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163icgtopxv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163mcljosod.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zrscywdb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163cvoudyvb.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fdnibgif.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mjlsgevd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163bsrfffgo.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mcnfuabp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163ysmgsipa.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163kvtaohoh.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163krwiaesx.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ifmbsbba.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xfqcfymv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ocezuqkf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163orqjxsik.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163srsurrjw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tkmqteyn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163nvgakabm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pehlqebv.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pwcenhwa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fvvearhx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163uorsirpd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163oosavdwu.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163yomdbrkc.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fwetgidb.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rinofnyr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163lubaitvd.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ldgxruda.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163zcklckwr.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163vinnqbhx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163vjvjmvyr.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163tmsllqil.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163cgedxzuz.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163wilzqwrk.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163agmluddw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163kdduktwx.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bjxeopzw.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163swktphah.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ftfqjbqj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163lmnjbnsm.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ckcfqsnm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163hpjvffnk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163jbeimune.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rsagyzzv.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lxncntme.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163aazqnzcn.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wdfvmovx.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uddbmarc.html

npx vite build
来源：http://www.aibaodan.cn/163giuzlgbn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163slwnihty.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rblclmkt.html

================================================================================
来源：http://www.xuanzx.com/163orfagpzl.html

统计汇总
来源：http://www.xuanzx.com/163nacgstmu.html

================================================================================
来源：http://www.aibaodan.cn/163ohngixwr.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163llkrlyzf.html

Python ......... 252
来源：http://www.aibaodan.cn/163lmvtbjzc.html

PHP ............ 252
来源：http://www.sxryk.cn/163efunzhog.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163alqiqqxe.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163emwmrljb.html

Java ........... 212
来源：http://www.sxryk.cn/163iwvpdvym.html

Go ............. 212
来源：http://www.sxryk.cn/163tqxylosd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163tppnddty.html

C# ............. 212
来源：http://www.sxryk.cn/163oslslfwd.html

C .............. 30
来源：http://www.aibaodan.cn/163fiimjeht.html

C++ ............ 30
来源：http://www.xuanzx.com/163jqtnsxtx.html

SQL ............ 90
来源：http://www.xuanzx.com/163fkvsphux.html

Bash ........... 80
来源：http://www.sxryk.cn/163sajzyhda.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zilbniuq.html

Swift .......... 15
来源：http://www.xuanzx.com/163uksxrdyq.html

Lua ............ 10
来源：http://www.xuanzx.com/163tedyvfvk.html

Perl ........... 10
来源：http://www.sxryk.cn/163rfmnktza.html


<!-- 参考信息 -->