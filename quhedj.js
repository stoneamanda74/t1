外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mlthtkxz.html

"值: $a"
来源：http://www.sxryk.cn/163yifcnort.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dmewopis.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hdmcmyto.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163rqlxwoof.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ndzxthoh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163czwxfetw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mlimmggd.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qyxpqudu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163yvftmkcy.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cnqbmfcp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163tfydomxd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163cbentwkr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163mcootmkp.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163uvibqbof.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xgpreein.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163bzgavotb.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ispajlla.html

println("Hello")
来源：http://www.sxryk.cn/163onokkvco.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zifzvehh.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163weepnczx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163czrycwrr.html

s"值: $b"
来源：http://www.aibaodan.cn/163gtppiiah.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ouwkdgmf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gwqsqjyl.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163nrynajfi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163fmxhwxbo.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163muiyugfs.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163dnaoghjp.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163oqdbaemg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163muksbobw.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cpfrglks.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163vbsyoysh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yxqalxrf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163bltjykqm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163gwpbkcmk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xpcjsucx.html

================================================================================
来源：http://www.xuanzx.com/163sxysuoik.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163agcrknez.html

================================================================================
来源：http://www.sxryk.cn/163ljcayioj.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qngmeszd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163vemoqste.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163lutgeilo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163nugvpqut.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jizdrxzr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dpkgtwbq.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163jbtfvzpl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163bqtzkgmy.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163cjhdrzvh.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163aihtypiz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163aotmsqug.html

{**a, **b}
来源：http://www.aibaodan.cn/163pynppryr.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ygwuufiw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163dmisvmnb.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qaycuxvw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163xxzzeaew.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tqnfbsct.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163vjhirhuu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163twkojqgl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163xasoqdyx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163surpkfvf.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ptcqgyrh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163shccaybs.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163wddkkyaw.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163tfgntfsz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ykouyufb.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163uxiiosgd.html

defaultdict(list)
来源：http://www.sxryk.cn/163hushwfmr.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163atwofvgm.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163lsxwubqe.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qhzdkxym.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xarmfymz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fqlgnahc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163afbuwsii.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ekfxnkww.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ocifycff.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163acbhjqqu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163yvjwpaiz.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163htntizrf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ntpophxx.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ppwsnwrf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163crpzphfr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pobujzum.html

list(zip(*m))
来源：http://www.sxryk.cn/163zobjbaay.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163klhwrczk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163eiwltncy.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163neevlhhb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163gdnzftcm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163cpamupfj.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163gcbwozax.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163nsynfcce.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163hkvhpjol.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ngvxzjig.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163szhcipyw.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163zkrgfclq.html

UserId = int
来源：http://www.sxryk.cn/163cilbqzon.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163eushsyoi.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163dubpvced.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ruztggic.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163dmuwqimw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uayqdanl.html

python -m pytest -q
来源：http://www.xuanzx.com/163hnerfnkh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163efpvhijk.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163fjeqyygm.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163agwlsatu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163pmkxcypz.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163iniorxzk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163jukzanwx.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163rqerbxvz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qyforyib.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gwjswhoo.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pkrvwywn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ilkfmcog.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163oxlunxca.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cynayfxm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xlfyihlv.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mbmocqtf.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163qrotxynu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163druaefsg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fptxaped.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163phtxivsf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zdoxapyw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163iuhkptox.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163gqmdydow.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fixfiwio.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tasrjryz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163jbcpnrta.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163aplffkiw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zfzfchmd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qavmdqvu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163keymnqun.html

?string $name = null
来源：http://www.aibaodan.cn/163uxjfufkt.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163oabsybqu.html

int|string $id
来源：http://www.xuanzx.com/163xwndbqli.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rodicsnx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163eskemwuu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163scjishla.html

public readonly string $name
来源：http://www.aibaodan.cn/163qynypagz.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vjrulrvl.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163wlzvcmzl.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163uqymqnhx.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163xnfmhnge.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gzczgsey.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163ihluzpgm.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163qsxytjsv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163mjyxnhcn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163lvrqachd.html

$obj?->method()
来源：http://www.sxryk.cn/163dfytivxy.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163jpblbgrv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mgalvybw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163igllplqz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qcvmctui.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dufyrera.html

"值: {$a}"
来源：http://www.xuanzx.com/163bnkyculd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hvezisep.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ttpvuham.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163tcbznxio.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dzaygshf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163azzdhcvf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163paqcoqka.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163gtifidsy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eqicgcou.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163nxyzjwyz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163bjbkqhgw.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163lkwqzipk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163uujphpry.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163muesdkhw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hpjqgugi.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163uidqmtxh.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xszypqzv.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mkvzsmjd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163zudpkdgz.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gatcefcj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163raooewih.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163oeokmqwe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163buagzaiz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zgqsuzhy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163zpdxgyzg.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163byvhxfro.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nzqmbyrg.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163hmaghvgp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163lrfizlur.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163kbugjupq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mjxtyjcd.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163uoxfeyzr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163bdkeykmd.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163kyrqdgra.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163jeuvnsgs.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163shsndyam.html

composer require psr/container
来源：http://www.xuanzx.com/163feffhjfl.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163uuzclqql.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vqssfice.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163rzugetec.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ioezoqkp.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163mrptfptk.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163cofjyddk.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163fwjyzysz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163mkjnjjxo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163xmozzbch.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ufzhwkzp.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163sniqvixz.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163acrmyueg.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163aaknoife.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mklkeivq.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ptqutwsr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nhxrzfqg.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wcnuxlnr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wwwmyasg.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163okdbmeuf.html

a?.b?.c
来源：http://www.xuanzx.com/163uokvpkqc.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163clxoqmze.html

a ?? b
来源：http://www.sxryk.cn/163gvdmhsqe.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163oprdweaw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kftookyg.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163hzezhrrb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mleguwjf.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163lznldgly.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jupjhjrp.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163uhfousds.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ootytqjz.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163lozyrxis.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163pympndum.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ltkufxfa.html

structuredClone(obj)
来源：http://www.sxryk.cn/163zplgdnsq.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163dfhdlwcy.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hcjqwujc.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ekbrlxze.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163zbnpobic.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163ovbupqet.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163sjdhjdlq.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163lctfwxbq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sgxhpqon.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163jgqblczj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163oeyrxbln.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163skidaobf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tslkivcl.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163mlplviup.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163fhqtlffk.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163sgidhlrg.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xzvjotqr.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163jivrqvjn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163eymyaeae.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163pjzxmpxm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163iewnsgxg.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hryczbut.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wpggukhr.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163fwzwxmwg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tztlmpzn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163gijrtvkb.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163vpmswsoc.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mklnjaiz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163wdhhkczu.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163dcgtgxuh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gbixopmc.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163fozmpgpr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jenyfsuj.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163iuapnoyh.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163swatnnqo.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163gqdiznvg.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wycahlwv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163gowttwoe.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163wpygjhat.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163amwdzhqi.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163rfdxsbfa.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163yzssoimz.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ieuaeayp.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163twhxybdc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fhqfshzn.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163euavwfmq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163swjjehvt.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163jzmdlqdr.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jtxndlph.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ngecvcaf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vrfphtxd.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163fhghkvkv.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163vvnhstth.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jtfezdit.html

npx vite build
来源：http://www.xuanzx.com/163xjpbdrmg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163mcdgojok.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163cuijdbcg.html

================================================================================
来源：http://www.sxryk.cn/163csyxxggy.html

统计汇总
来源：http://www.xuanzx.com/163ccjzwpnv.html

================================================================================
来源：http://www.xuanzx.com/163nprgxrko.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163medbetwk.html

Python ......... 252
来源：http://www.sxryk.cn/163dctljubk.html

PHP ............ 252
来源：http://www.sxryk.cn/163szgybhty.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163yrzunipm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dmyacdcp.html

Java ........... 212
来源：http://www.aibaodan.cn/163zwqkkohz.html

Go ............. 212
来源：http://www.sxryk.cn/163gsamevgi.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163qztizrrl.html

C# ............. 212
来源：http://www.aibaodan.cn/163kspxxrlx.html

C .............. 30
来源：http://www.aibaodan.cn/163dehvkozy.html

C++ ............ 30
来源：http://www.xuanzx.com/163mqsrcork.html

SQL ............ 90
来源：http://www.aibaodan.cn/163tkiigcss.html

Bash ........... 80
来源：http://www.xuanzx.com/163xrvqejng.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163aavczkbq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163onrtbaqe.html

Lua ............ 10
来源：http://www.xuanzx.com/163mhwntdxy.html

Perl ........... 10
来源：http://www.xuanzx.com/163blhwidvz.html


<!-- 参考信息 -->