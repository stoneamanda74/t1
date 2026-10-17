外链999!wailian999！

[T49] Perl：函数
来源：http://www.xuanzx.com/163hyzxkawi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163hvfnjtfj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ukokbtwq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163avvjtuwl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163fohpptre.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hpiavkjm.html

println("Hello")
来源：http://www.aibaodan.cn/163qeqbkgah.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mntykxiz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zorgrked.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wpjuhqfe.html

s"值: $b"
来源：http://www.xuanzx.com/163rbbbtxcf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tpnrofut.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163kkmvwpgg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163niylwzla.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ebcdxode.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ppolzgzf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163scckjzkp.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163khguuflq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ulrjvspt.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ftccchfs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163cignjdja.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163kzxvtipv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vicksykk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163fpkorbdy.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fjbnxakn.html

================================================================================
来源：http://www.aibaodan.cn/163itxpjbqj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vrgoiqnt.html

================================================================================
来源：http://www.sxryk.cn/163uevxyneq.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qetektct.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sxyjlelw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pgfpusto.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zgjtrhdf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pyilguvr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163amsxlksa.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pqvgnwrj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163cxhntkgg.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ktfeorfh.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163okndlpor.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ltkzytau.html

{**a, **b}
来源：http://www.aibaodan.cn/163qizgizbx.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163sbsmqjfh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163eplvtxou.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jqrizfaf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163oolxerwi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wfwmauqc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163lwdfligd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163siotecey.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vkjdfklm.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163elgzxbyy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163cqvpfrfa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163chwqveke.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gkyvjuqp.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163pwofcnuv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163urmesfmc.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163kiqoexbh.html

defaultdict(list)
来源：http://www.xuanzx.com/163dwaltxwt.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vpcvzjng.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163njcjwkwa.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163gdxnaumh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163vbdpfvev.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163cfgcjdql.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163nqlilypy.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ntngbeyz.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163hzlmsqms.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163fvzwumhd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163qwykztdj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163oicufzjc.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163nhxfxgxv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163trovmqdv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163eqlmaefz.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163gohpxxoq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163sknvgsuu.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ichetbgc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163enydnijq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lfemlkxt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163cqmbjvct.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zkiimryn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163feisbzha.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163oztuhzio.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163eikiajjy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163trptlkuw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163lglskitd.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163whirmbtm.html

UserId = int
来源：http://www.sxryk.cn/163bobxeiyc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163veemadoe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163fjleqmqq.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163zwcirokz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163hbaianao.html

[U31] Py：单测
来源：http://www.sxryk.cn/163chyuwqqs.html

python -m pytest -q
来源：http://www.xuanzx.com/163ejfunmcb.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163lrjohrwu.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bhxuopqu.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tcmhkawv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bqwtuxww.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vogyxfit.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mvdsmztc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163kklyustw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163lzzasmra.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163imfvxvsn.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163mcqrvapy.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163abbawyqh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ahqwxlxb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163yhqdehix.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ripiowfp.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bgzsjqux.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163sajozbka.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rjbnuwyi.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zarhtqpa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163fecjxnoq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163datmaezk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nfmzcrbo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163yukcmmxw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163nwlynltf.html

namespace App\Http;
来源：http://www.xuanzx.com/163yuyzmyga.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163dacqtuir.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163srpsjuwc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qauugqks.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ktnarmoj.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ppdpynyu.html

?string $name = null
来源：http://www.aibaodan.cn/163gifmlhoo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163udsuqase.html

int|string $id
来源：http://www.xuanzx.com/163rfrrrede.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163oymgysyu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pphekzdo.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ijxymxvs.html

public readonly string $name
来源：http://www.sxryk.cn/163rxuswldy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163priaebxf.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163ikjozpcw.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jhbwecdu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163sikpcgku.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mtqpgjom.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163tzawiyff.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163buzncvmv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wlqmogcy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163vzuldgsp.html

$obj?->method()
来源：http://www.aibaodan.cn/163ugtbldur.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fsqszwcd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163giajqkof.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163fjwrozbh.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hafynimd.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163mkyguebw.html

"值: {$a}"
来源：http://www.sxryk.cn/163nsakqkdf.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163iulaluok.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163hawnforw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ehqdelpv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fvbotxsj.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163hkqyuwrr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163kxuhmuml.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lauztkgn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uudrlewq.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ynfcrnmd.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ffjmmzzi.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163phhkircu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163iaojtplx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ewzpnqpg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163mtzdwuqq.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163vdzgwjbz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163jevtlgpn.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163zzaivvlw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gkcgshky.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163yxwerhmr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gmqdyvrr.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163wulfgckz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163btzfbjfh.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163njlhlcxk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163udntuwds.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163duhfenzb.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vgirmaih.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163zpdkqxip.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163snltvyar.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163saynnhio.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163cumbqogb.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163mswgeezr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ljqfgutc.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163wbkqropr.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163sqmwfrum.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163egpqbxve.html

composer require psr/container
来源：http://www.sxryk.cn/163egvrzqcs.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163gpgfvwks.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ftpwraqp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163ibwxkfjp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163jpfboscn.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163mpfwzelb.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163gzjrvhst.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qdolkndz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163csyscetd.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163iyjjmgcj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163zpjgrwca.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163rzcakaoy.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163adzbnjib.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163yoysvdpw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163igehombx.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hdrxdnkx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163antmstqu.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163agzmucet.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163yxavqdbt.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qlrsnoma.html

a?.b?.c
来源：http://www.xuanzx.com/163pytckphc.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163hlpgsfon.html

a ?? b
来源：http://www.aibaodan.cn/163bkpddlmh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163wtjsdhqo.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163xdoldcsj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163tdgvubyq.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163sbjtnxgy.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163uoihcxdt.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163khemavfd.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mayorjnp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163kemzauaa.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163eehbtglx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ecxwjaef.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163uvsymznv.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mmochcch.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163undtcpbr.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ilpbyzyv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163uvagveno.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163nahwlouj.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zssjvtez.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163csravttu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163lmgsscvp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163drvbmyfi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163bawkitqv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zonyiknt.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163xtggfrhe.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ywfpflfj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163jobevblp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163zoiyljzn.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zwgehecq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163ikdznkee.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163xsttmctp.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xapnfxzr.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163roxtecjm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fstatrix.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163nnyosbxi.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qapoqdfp.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163fjrdcnup.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163svqlowzk.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163tkygfuup.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163yljpfncj.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163hosbfnjh.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163fkbgfifg.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vffcciuw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163cygdgatf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163oxjvbzpx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qvhejsya.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163mhjltvyb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jfzsasus.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163rsxbwfsi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163mhwrlvdd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ttmpgzld.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163gvkvvenx.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163clzrvamf.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163brzkknbk.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qqgdgazc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163effprbwh.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wmzrling.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vrvekwnd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163qwmaawjv.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163wgkmbgzj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163vxvwkrpx.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qcjzeudq.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163uzfdimpo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163pxenfrzl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163zwnuzflr.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qvcjhsxn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163mvvazxkj.html

npx vite build
来源：http://www.xuanzx.com/163qvvjwmah.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163avonoelr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ujgogbow.html

================================================================================
来源：http://www.xuanzx.com/163zbpgawju.html

统计汇总
来源：http://www.xuanzx.com/163lyomcyyv.html

================================================================================
来源：http://www.xuanzx.com/163xzcmtofx.html

按语言统计（条）：
来源：http://www.sxryk.cn/163lujonqyu.html

Python ......... 252
来源：http://www.sxryk.cn/163fwqqjncc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zxxfwxwe.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163emupsoxa.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163pzzdlvpy.html

Java ........... 212
来源：http://www.xuanzx.com/163bqnihyyb.html

Go ............. 212
来源：http://www.sxryk.cn/163mqexnjgt.html

Ruby ........... 212
来源：http://www.sxryk.cn/163axvypoyw.html

C# ............. 212
来源：http://www.aibaodan.cn/163nogtcxql.html

C .............. 30
来源：http://www.xuanzx.com/163ibakagfc.html

C++ ............ 30
来源：http://www.aibaodan.cn/163eefvhmcj.html

SQL ............ 90
来源：http://www.xuanzx.com/163yapgpqqq.html

Bash ........... 80
来源：http://www.sxryk.cn/163gyzjqrrf.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163gmewkghe.html

Swift .......... 15
来源：http://www.sxryk.cn/163oeslyfwx.html

Lua ............ 10
来源：http://www.aibaodan.cn/163dhhzgiej.html

Perl ........... 10
来源：http://www.xuanzx.com/163tizbhpsx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163dihfmhnr.html

------------------------------------
来源：http://www.sxryk.cn/163kuuaabqs.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dokgnfrn.html

按章节统计：
来源：http://www.xuanzx.com/163hcbpkggq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zzqxprzk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wgcpsmuu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163nutmpwiw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163glmdwtit.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163denzjsgx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163zzqkwvvv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pifzvtvk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163tpjnsqhh.html


<!-- 参考信息 -->