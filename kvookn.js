外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wmkhjwfc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163qcwfbzif.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163vqidwrcg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ghjatbvf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kvvzcebg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163aludsujn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163swyhbaoc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hkgigpjf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163uszofque.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yhxhjdgs.html

println("Hello")
来源：http://www.sxryk.cn/163ehyugcnl.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vwzkvqca.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163mmapoasq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163lppigwoa.html

s"值: $b"
来源：http://www.sxryk.cn/163mhfbjlga.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163pyomfavj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wmsxrjsf.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ftagytjz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163mlusimaz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163brttobjb.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163uldqsqbr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kiqcewqb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163frjbntmk.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dibccuku.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rjwzhckl.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zpkgixwm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fgyvnnxn.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wdorvrhk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163lxzpwuzf.html

================================================================================
来源：http://www.xuanzx.com/163jiossbeb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163eqoqpvne.html

================================================================================
来源：http://www.xuanzx.com/163tfhezdtq.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163asguoxoc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lncnyxad.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163gogugmle.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163pmtjywli.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lsqhaxmc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163obwoupne.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xqdapwsj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hpqrtnoy.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163lkrtbdti.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163emegsrmv.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163qupcsvgw.html

{**a, **b}
来源：http://www.xuanzx.com/163xinwgyuy.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163feipuafh.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rjfqnhdc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wajractl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163wfsokpbu.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163obnrdmmf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jrlqbuml.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163waveqyrb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tqpnnirx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163xdvpxtwy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wotywxik.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163snifrthm.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wgygoxrk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hrunptfk.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nbefdoli.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ihtnjwxt.html

defaultdict(list)
来源：http://www.xuanzx.com/163zclizfdv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qmbsymrx.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163lwlbjdvd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vawqohnq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163qqmskjhc.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163gwszuxkg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163iwjshbmo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163xsmlsyum.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163psydwkwe.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163didactof.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ntvevumh.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163svtihkpo.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163cdhphmkg.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ifbulzyx.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163bmjlmksg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163cbaeltjd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163nukigsxz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163aaffruri.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nagbbjsw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163wxyomkwx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rznskowl.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163imgdkpdn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xbzpnavm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ebqhymrc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pjclidfm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ycfdpmzk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lgynsgas.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163rcwzkrgp.html

UserId = int
来源：http://www.aibaodan.cn/163jivngtgc.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vdphxwaw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163btfwvtap.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ngthnvxj.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vtmgoqaj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163bqusjmih.html

python -m pytest -q
来源：http://www.aibaodan.cn/163erxpnkmn.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163bluehnfb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163gvzjvmbf.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lygxyzqv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163recccmhs.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jcmtrqul.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163pcxqgbjj.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vfkjnfuz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163kqvctptv.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ambcmwgh.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163abzlslpl.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163bzcqsddv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vdmnthwz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ypsoupan.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163kjsfzmow.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ujqseovr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bvivwmis.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ygwnosqc.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eiuhnbcn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163njjxtywl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163cwaprrrw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163vkvutdif.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jrllohcd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fhvywpph.html

namespace App\Http;
来源：http://www.aibaodan.cn/163wboirzmq.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vttknykn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163xutbhvsa.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163jddcanrg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163izvymczc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163lfpwwgfc.html

?string $name = null
来源：http://www.sxryk.cn/163etnseymz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163eagcehri.html

int|string $id
来源：http://www.xuanzx.com/163pwntwibg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163iwkmrpzn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163caftdqdx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163hlxkyuuu.html

public readonly string $name
来源：http://www.aibaodan.cn/163fpqbwdab.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163mdctrcdr.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163anwjakmg.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163mvixateo.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ypupiwyd.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163caebeowo.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163sbldgynu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163yoezzgfy.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163tbabmwvr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163kuijcpfx.html

$obj?->method()
来源：http://www.xuanzx.com/163dlqrfgom.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rgbvuybr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163snxtbpjw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mbukwfdu.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fhwhacwt.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xvmgzxgs.html

"值: {$a}"
来源：http://www.aibaodan.cn/163eefmpqts.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ayecmetx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qzfeaiwx.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ixgnuylu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ncqmwzcv.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163imaiccyn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163zlpcfnpi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163aiybwsdi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wfompxrb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163exjdmvsw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mgyvhkoh.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gazpgnne.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163cjvfdcfd.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163tpjbvrxx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163cjaiczwm.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wujatfdr.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163vzlwrfgg.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163noaeovvm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163tisyfjny.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163deccetzd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163rhaxchmq.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163bjuawpvu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ompsudqz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163unlafyse.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163fvjfpnqg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ahjxxhkr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163jsifnrmn.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163bcugiddz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163tdsunclm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163lzuumpwx.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163kicyxnxg.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163owowuyzh.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163aggewjxv.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163htrfehmn.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163oaijyzah.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ufairpeh.html

composer require psr/container
来源：http://www.xuanzx.com/163yexeykaa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163iqiyphba.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yffzpoeg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rwpvwzte.html

composer require twig/twig
来源：http://www.sxryk.cn/163wcldpvbs.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163vycecvel.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163elnxzbuj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163szmmhkmy.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163qubqsekx.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kxuhhsto.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163udvnbpnf.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kkiojplk.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163mfaltlud.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uyncnejn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163jnckhyij.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163drstnnsm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163sikzvsgs.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163okipyqki.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163thfxhqdg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163wbfzskew.html

a?.b?.c
来源：http://www.aibaodan.cn/163mektmwif.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hocqadsz.html

a ?? b
来源：http://www.xuanzx.com/163sugfonzy.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163favgeyzi.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163jtmmqkoz.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163qnjqdhpb.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163qjzghcob.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163mvwfhula.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163fdpulkrc.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163sbicfdit.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eyhmetfc.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163clwqtjty.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163stoxhpgo.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ewicykvu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163covseqjp.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jcinccoz.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163rvjrutwl.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163svouhyrv.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163gkyxmdpn.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163sujmmnbg.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163srlmgtzi.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ftetotwp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ipwbcrsl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vmmxdmjn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cvdkogdp.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163sknwxioc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jkbbucrk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rqzihrbq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163euivqbrl.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163vgwhsihb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163eifofebp.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163dyccfwll.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qcrimljb.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wivnsayk.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qlhmxttp.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163ckfmtfol.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163dnpkqkry.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163eqidichg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wtymmfzc.html

[U105] JS：节流
来源：http://www.sxryk.cn/163lvcziqbi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163jubzbcmd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163vqfjthgk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163uumhixay.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163jjrmrkpl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rheeojwj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163epzcckut.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163kbihyswa.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163vqxcswzh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163prfstdhw.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163jscazryn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163igfrxipg.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163bpxdshpw.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163jwbxqgtz.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wmovlhzr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163ozvxvuuc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hhoeqopb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163gzgydhbf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163yddoorzo.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cenctudq.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163zdchomiu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163lpmlwyuv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jwygxlqx.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163kjpntfgz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rxgvoszk.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163tejwhhdn.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163gzcimuiz.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ybzwixef.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163xxlsvjaa.html

npx vite build
来源：http://www.xuanzx.com/163xvahprqi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gfurytwr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163pchccmsq.html

================================================================================
来源：http://www.sxryk.cn/163ouuqtgau.html

统计汇总
来源：http://www.sxryk.cn/163kjpkzzge.html

================================================================================
来源：http://www.aibaodan.cn/163pngnxqxz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163rsuqwglw.html

Python ......... 252
来源：http://www.sxryk.cn/163dchbtsyo.html

PHP ............ 252
来源：http://www.sxryk.cn/163xdxjwntu.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163cywulvui.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163yttxedkt.html

Java ........... 212
来源：http://www.sxryk.cn/163utxmytus.html

Go ............. 212
来源：http://www.sxryk.cn/163exldgpin.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163isbsgvxt.html

C# ............. 212
来源：http://www.sxryk.cn/163mqprfzrk.html

C .............. 30
来源：http://www.aibaodan.cn/163wjgkjucz.html

C++ ............ 30
来源：http://www.aibaodan.cn/163rwmpylsu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ygpzffaa.html

Bash ........... 80
来源：http://www.xuanzx.com/163ipvdzwzg.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ocalnwgs.html

Swift .......... 15
来源：http://www.aibaodan.cn/163jyjeemdd.html

Lua ............ 10
来源：http://www.aibaodan.cn/163mepvdrqa.html

Perl ........... 10
来源：http://www.xuanzx.com/163xsbebper.html

Scala .......... 10
来源：http://www.aibaodan.cn/163afwhzphi.html

------------------------------------
来源：http://www.aibaodan.cn/163tnbxgyze.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163loczbbcx.html

按章节统计：
来源：http://www.xuanzx.com/163hfqrioms.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163eqrkxhlv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jyabfrxp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lyulxbkj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zkjcvehl.html


<!-- 参考信息 -->