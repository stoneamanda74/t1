外链999!wailian999！

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xgztelbl.html

"值: $a"
来源：http://www.xuanzx.com/163rvuqlyje.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xxdngywg.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qcnrciuw.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163owlbxvxh.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ofyfloxk.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163aabljimc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xrvktehp.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hmgvreey.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mxnwpkna.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163opirmiht.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jfzsobwm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163stfqxfdq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xcyxqofm.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ddsknlbo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rsivtwek.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163crvinsid.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163daalzkyn.html

println("Hello")
来源：http://www.aibaodan.cn/163hvyrjcze.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rxfnnarc.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jlazlbzn.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cemkcxux.html

s"值: $b"
来源：http://www.xuanzx.com/163bdfnknmn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163mmtlitsc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fbudraam.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mcwvjude.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lkrkbgrv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163buhnznke.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lujiqlea.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qtxkkfxc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163rgqogzls.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ymmfixfe.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163coqwkqvf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ibexabjl.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163byinogqu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kvtmbzvk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163oqqqcbxr.html

================================================================================
来源：http://www.xuanzx.com/163fjcwrmol.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fkrhlcmq.html

================================================================================
来源：http://www.sxryk.cn/163ibfgzrcl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dljleqzf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wjjsgzbo.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163qyycfjok.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163nmlmvdbq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163zvawkbun.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163xhfzkkoy.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163thmpyynj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wmnolpwe.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tewingwb.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163cuzrdpsm.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ylirhkfp.html

{**a, **b}
来源：http://www.aibaodan.cn/163oveletfw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163eyltmnjv.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163gmdwmqca.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163bqboqscz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163dgtylmwq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163efirshhc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163qmfyqgeh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ufzbleup.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ucuxtfqt.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163vngusggp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163urgavgra.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163iigdjqpd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ajolxyyx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163inwtndjw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163krmyxclr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vnhtmggv.html

defaultdict(list)
来源：http://www.aibaodan.cn/163tzayagyv.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163bxahlbgr.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163xjaitgga.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163sczdtffy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163pvqjitxx.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bbsxlixo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fygypfzn.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163apvinfnp.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163otmclknw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163rzicjwyp.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163tjmdzhha.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ymlwsdyf.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163zmmwcwnn.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ytgcgnxs.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wnqzbouj.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163dfgsdgko.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uinemrrh.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163mrgowloz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qotoveop.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163akypmpoz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fvuvmxhv.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163amgimuoe.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163yvrbsdpp.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163dhubamfn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163qhhphepg.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163gmgykdyr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163nwsagive.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ihmhfcnh.html

UserId = int
来源：http://www.sxryk.cn/163ebkwxtmp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163shnjjsfp.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163echrlyyz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kahatgws.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163haxgmpxq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mohjfcll.html

python -m pytest -q
来源：http://www.xuanzx.com/163lszjsdju.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163bvrcjvmt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163nrstamuf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lqpbsanp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163zbanqofq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163rxbvlcvl.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163fxpfodwu.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163fizyptod.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163vsdlrspw.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163izhvinns.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163wqlvxozr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163yyzeprgn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163cjboevlt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163lmclfnvg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gzhyaxfh.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vjmsnkdo.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163xludfvxz.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163buakemsi.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eadlnuaf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ianhfsgl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163iygzjbys.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pbyrkmob.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fgqhmzvs.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163symfszcj.html

namespace App\Http;
来源：http://www.xuanzx.com/163vmbkdijz.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mgaopepw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163goeztfxo.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hwqfhnct.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jscgoenu.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163whmxmzgu.html

?string $name = null
来源：http://www.aibaodan.cn/163zjpyvlpe.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wrxssmtu.html

int|string $id
来源：http://www.sxryk.cn/163stlcgfux.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163snzfqzjv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163iolkbvlg.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163zitvmanv.html

public readonly string $name
来源：http://www.aibaodan.cn/163vorhojxj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163liwonsje.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xfnjbliu.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163naougfng.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163yaennoyu.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163qnggketk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cduoafug.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ybakxrwd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163epulfnhb.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163tmciemgl.html

$obj?->method()
来源：http://www.aibaodan.cn/163olhbwtxq.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163brtvtusa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163dtjzvewv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163quuuomhe.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hryanzjq.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ebrtupcu.html

"值: {$a}"
来源：http://www.sxryk.cn/163ksqfoqcj.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163evkjryhx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163lnwcdshm.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163epaicaij.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mbqauraa.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163sjrwamlw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pzulphqr.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163zntobawh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wnxvzrum.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163nkqjlcxx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163qzgtkkno.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163zuzaimcc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163bfytqbvi.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yspfjwbs.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163tslobcxm.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163heqzapwm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163duwnigvb.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163fnqjbmnz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163unspordb.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qnhubjlx.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163trftgsbf.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163vfsjurbu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163rdygfazu.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163gqrfwnjs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163itvokpsy.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163shyyneel.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163vswgcikk.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163uikrbtzs.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163pebofuce.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xysyuwuh.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163zgbflpaf.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163autcddor.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163lbikjgcg.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163yrfkklqj.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hrecynvc.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163bhcqpwjh.html

composer require psr/container
来源：http://www.aibaodan.cn/163qcaijgif.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ubjujzge.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163mdokruyw.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163wtnxulio.html

composer require twig/twig
来源：http://www.sxryk.cn/163zulsskyj.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163xjanunwn.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ginaxtnn.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163eeudaerk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163bnrepvyn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163gnobnwzs.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163htbnepeg.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ahnpzgaa.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163zjeeosya.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163urwplpvm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163meuuhqzv.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vkoxjwrj.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163lzplfwjx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163bxsosqqx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ocycnuzh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163rdzbedia.html

a?.b?.c
来源：http://www.aibaodan.cn/163egechomp.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163lukupyjb.html

a ?? b
来源：http://www.aibaodan.cn/163rpknmsxl.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163mqvkffrb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zxzkxgty.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zpjjoanm.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ccihcjqp.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163hbedicyu.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nokczwau.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163kzirrwtj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tuqneykb.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163mposwqhn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163hesgjvgn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tohrxqbl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163jmmcaoyo.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163rpuenprg.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mvdujsit.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163nsdrakff.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163auzoabvf.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163dwvcpvfr.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163rcbkslwa.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ruxfcjpj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mkjlykqi.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ktmztlir.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163sjkbeouo.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163olhlmlba.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mpkvcwcz.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163niyognyc.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qzbebprs.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163cljqdfgn.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ahdvwkjd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163cmdqkvgq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163jcogkmes.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163awtenxgf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xksikang.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kmisdfdj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163viwvvdce.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163vdjyfnzv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wlucajrl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163gpmeodyd.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163nspcgrey.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163nrjgrfvt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163aampbfbc.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wsnjwkvm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163vdwkattc.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pycyuekw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163oaitidyg.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163acphmifw.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ipiembjg.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163kkwbcesa.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dnfnlvtw.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zjdococm.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163semkalxw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ytjjzmhr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163quepruls.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163udfjyhjr.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gghyeffk.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163acltiawd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163trraiiso.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ryjldlhq.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vkheyfvr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163pyenzcji.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163racohjod.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163knsdhevo.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163vjgxftnt.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163bmdzobhn.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rbasbebo.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163bgyawhnb.html

npx vite build
来源：http://www.sxryk.cn/163bfuozoja.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jsprrnoc.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dlifuouu.html

================================================================================
来源：http://www.sxryk.cn/163ltkhcmco.html

统计汇总
来源：http://www.sxryk.cn/163cfucufae.html

================================================================================
来源：http://www.sxryk.cn/163pbsmaiic.html

按语言统计（条）：
来源：http://www.xuanzx.com/163gftblwdh.html

Python ......... 252
来源：http://www.sxryk.cn/163dsmvymsv.html

PHP ............ 252
来源：http://www.aibaodan.cn/163fwdjtqyr.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163qalqgdff.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xsdardnz.html

Java ........... 212
来源：http://www.aibaodan.cn/163xyczkyuu.html

Go ............. 212
来源：http://www.aibaodan.cn/163eittvxjk.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163diqcepyw.html

C# ............. 212
来源：http://www.sxryk.cn/163iwldasel.html

C .............. 30
来源：http://www.sxryk.cn/163tsxwfjtu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163cuqwwmyi.html

SQL ............ 90
来源：http://www.aibaodan.cn/163onzzyfcr.html

Bash ........... 80
来源：http://www.aibaodan.cn/163chbglvoi.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163ybjuboha.html

Swift .......... 15
来源：http://www.aibaodan.cn/163vtkyuqif.html

Lua ............ 10
来源：http://www.sxryk.cn/163giueoqvg.html

Perl ........... 10
来源：http://www.sxryk.cn/163svbjbhuo.html


<!-- 参考信息 -->