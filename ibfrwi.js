外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qmkkuayj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163akdmmplw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vhbgngat.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163owofwdjo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163klwautff.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163pelngafq.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hwrpzndy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rkpgrmyl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hnnpfizn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163xttdrpsm.html

println("Hello")
来源：http://www.xuanzx.com/163ccjpcior.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163itkmshrj.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qelrrqbe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163uqjyidov.html

s"值: $b"
来源：http://www.xuanzx.com/163nppdnqct.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163lvopgfrd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zzrkqrxt.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ivjabgxe.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dfeumtcw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163elxjbkez.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163jdpeoyid.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163zehmsrmc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mvojoino.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rnrwdjcf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xtfgkdxj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163qzfgxdlm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mfcoarba.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163skhxafct.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ufpfjtua.html

================================================================================
来源：http://www.sxryk.cn/163lkfctejz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163wzpwmwda.html

================================================================================
来源：http://www.aibaodan.cn/163okiquphz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ckwmnlxq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xxusewmw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lubgbjnr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163rmswceyr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qaaboopp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qajsdfab.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zqcpmxto.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163cfeayxhg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163phgtlbzn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163auyhechg.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hckxokzv.html

{**a, **b}
来源：http://www.aibaodan.cn/163upsnjtcp.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fuppjcda.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qranhspi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dtejycqm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163uixswodv.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163gpmqknrp.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pebaxazh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wqhtynlj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163bvkwfjvz.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gaeagzjd.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pnzhavsb.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163oigmdsdo.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163hbwnatps.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ksxxmfuk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163tbyhpdzk.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163eqjqeyhk.html

defaultdict(list)
来源：http://www.xuanzx.com/163srdnyopp.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163rdrjojti.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ncfiyfij.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163klzfebxl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ihjiepcq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163tfnwloob.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163noveotav.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lwixypnt.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mqemevyi.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163rvqgidqc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163qyuxfgyj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zklomqrt.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163scojcrkk.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jcugoirt.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163rforjvpx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jctaibjv.html

list(zip(*m))
来源：http://www.sxryk.cn/163uscuvuax.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uoogirzi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163czuoaegw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xcnweemh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163fgivjyyd.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ikedpgde.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163fygzxhfr.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163dzuspygy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163cfespatr.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163xchfpprj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163avqkyerf.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163cwhwtzfv.html

UserId = int
来源：http://www.aibaodan.cn/163ptkuaffz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gqtfamwv.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rvgtqkye.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163xgfduvah.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163rssmmnsl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lfpavfck.html

python -m pytest -q
来源：http://www.sxryk.cn/163iomxzcnc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163atyftdiz.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163oiubkhzv.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163flghbtea.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163syzsraye.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zmwjtbbm.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qyrrgbcg.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ackthfuf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163akqrgrfu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163uxnnlnbj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zffukvqy.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163fvpxlcvt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ekjsjrbf.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pbbrnbih.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163mkvliesm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163cnqxxhyn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163hgkmckoy.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163wygmdzfc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hdkztmmk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163mrtqfldn.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ldcdbiqb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pgwxjstb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163abmvmhxk.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163btrdlvms.html

namespace App\Http;
来源：http://www.sxryk.cn/163nswejrqg.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163tmupsbmn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163oaezgacl.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163nalmrlkh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163iofbjilb.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163dcztftdf.html

?string $name = null
来源：http://www.aibaodan.cn/163iulbkpll.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163pcwwireh.html

int|string $id
来源：http://www.xuanzx.com/163wexumvcx.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163jlyorzet.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163mrmthvdw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163tzwxcvcw.html

public readonly string $name
来源：http://www.sxryk.cn/163crenabvx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bjtyutvc.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163neqgshhm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sbpegnra.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163qsolevmh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163cjjgrgme.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jrtdxxyl.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vxcjfsic.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163iluawopb.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jmjiywvu.html

$obj?->method()
来源：http://www.sxryk.cn/163bxsnksqb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qgfjrgii.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hprngkxu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163nqwekcfc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qcmymvnm.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163uipznpae.html

"值: {$a}"
来源：http://www.sxryk.cn/163hymzcopg.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ijbgqedg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163yevehaue.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163euodmubf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ykkohozw.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163swmeyrhn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ufmzuqiy.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163mvbswsne.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fkilapfp.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163aquyhnvn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163yjpobujm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gwtgyfhk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hvfpzazq.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163mqynhjky.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163gzenksqv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163xphmahds.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163bghpxhvo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bugxnenw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163nbrtttvl.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uaeqcpyx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163djiqcddw.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ntkfhnpg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163owvxglwc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bziykkrj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163qngzgugz.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163pchyzpme.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kulcljqk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163zcpufqrh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ugxmcehf.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tyccxuac.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163fqjlrhms.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163oufvtvfa.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163pivkqgnr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xzqvofav.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163kppgtkgv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163gebmknwj.html

composer require psr/container
来源：http://www.sxryk.cn/163jutlwjna.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163lfcsqztk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lwaugote.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163aravotow.html

composer require twig/twig
来源：http://www.xuanzx.com/163ipxpgire.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163hssdpgen.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163czymstgl.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163kpiacmes.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163noitzgke.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163mxolhucf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xnjldvas.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163jxfjlrvj.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163yvdyqgsj.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163shmphaad.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163jqrglhjn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vgddyuuf.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163qqiutlvz.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163atmdvmxc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163evhrirby.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163hcqvvuax.html

a?.b?.c
来源：http://www.sxryk.cn/163ibgllzlr.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lalstmkx.html

a ?? b
来源：http://www.aibaodan.cn/163bmxxbrsv.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163djostbdm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163bmvhvdfr.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163rjmadfab.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163krcazllo.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163rrwxcegv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ysctogmi.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qzlfbwkv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mugiqnlz.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kgnmpbmt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wgljvmol.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163phvausgl.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163saresaui.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163wfvcuxgu.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163chmnbnhj.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ttjakucg.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163zdegzsmb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163xayzjvzw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163uulzdseu.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163iixouppm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163idrghncy.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163wyykfwuy.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bokbvttp.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163soiyorcr.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nxrmxdvk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rmjvcjes.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nteelbsc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rvswebpv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163yfefoiis.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163hntsdyqm.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163zcxaghve.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163axogxjyj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163zqduvchf.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dxyfmpun.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tphyghpa.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163aijlpjyw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vzjpdqmb.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ixhuqwqw.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163hqacqpct.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163rmheazmq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163hqifjbxb.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163iaymswce.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lthogqpa.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yvpxozzd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xbfzexle.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163bkajngmn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163udtgvgct.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163kazgmfuy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163pzornhgm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163muqsefgq.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163lokifdxo.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163bpyiatpd.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vqyxtgqo.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163kuncgdux.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ddmeopis.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163uyroovty.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fpzutjfo.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163akvydncm.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zqaqenlr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xqyubjnw.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163gordwsgn.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hkubfruh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ajnhaiok.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163vsghdlhs.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163hnxlbpge.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163udbfhwmg.html

npx vite build
来源：http://www.xuanzx.com/163xxyyqlub.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163stjgdhty.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zmhziuag.html

================================================================================
来源：http://www.xuanzx.com/163uruvnqqh.html

统计汇总
来源：http://www.xuanzx.com/163kxhzinlv.html

================================================================================
来源：http://www.aibaodan.cn/163muwichhz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hrshltuy.html

Python ......... 252
来源：http://www.aibaodan.cn/163dihiwcwo.html

PHP ............ 252
来源：http://www.xuanzx.com/163lbibpokd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xukytmid.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ifjtphci.html

Java ........... 212
来源：http://www.xuanzx.com/163pmvcfdxk.html

Go ............. 212
来源：http://www.xuanzx.com/163mlkgaxjg.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163srssbgfh.html

C# ............. 212
来源：http://www.sxryk.cn/163iwjysjvk.html

C .............. 30
来源：http://www.sxryk.cn/163wnjshesl.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ravvrxwb.html

SQL ............ 90
来源：http://www.xuanzx.com/163qdfibucj.html

Bash ........... 80
来源：http://www.aibaodan.cn/163lbeyzzfa.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163jkensjwq.html

Swift .......... 15
来源：http://www.sxryk.cn/163yhrnfiqz.html

Lua ............ 10
来源：http://www.sxryk.cn/163ieeqsuyh.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vlzufrwt.html

Scala .......... 10
来源：http://www.xuanzx.com/163tnlwejro.html

------------------------------------
来源：http://www.sxryk.cn/163wxnfjxoj.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163uvbkrefj.html

按章节统计：
来源：http://www.sxryk.cn/163zcfvswcu.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163kjylaxnf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163qltvutyv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dqgtehty.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ylgcrtwg.html


<!-- 参考信息 -->