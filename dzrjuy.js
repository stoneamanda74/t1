外链999!wailian999！

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163tabhywpo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hftfdbgf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mabggixr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163redfvrdc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163svsblxbs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163mkzwhryo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163mxdopmkm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jlccrzrg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163kjslnrjs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wpebkutl.html

println("Hello")
来源：http://www.xuanzx.com/163bkjsqiym.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163vcgisyoh.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lihasozq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wtbdhwbl.html

s"值: $b"
来源：http://www.aibaodan.cn/163kirwmeld.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ytizyjgv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163omvsrwdw.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ovibbytg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ctnwwcaa.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tjerkhgg.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163aepslape.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163mmvulmql.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ltcevjlh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wskhxylt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rmhfszga.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jkuigjix.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163cluawfbd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gedempno.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163cpnnvuma.html

================================================================================
来源：http://www.sxryk.cn/163dfoslcux.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dbrbadiw.html

================================================================================
来源：http://www.aibaodan.cn/163mtncmuii.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163pyfxqfup.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bpkjiuwi.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163sfjgjzgq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ceqtnfbi.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163fgvuentj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163yordaojv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163yzidumie.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zbedrbse.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163lwlkohzi.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163lnzhdkfm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jqhrqamz.html

{**a, **b}
来源：http://www.xuanzx.com/163fnmpaokl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vanblcwu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wgjvskpx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163yqzudqyv.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ejzilbfu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qjyzgdui.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163dcwhdisl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qtsaatzn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163moweonvl.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ljsoxmxy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rhodkvoy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163lqhtarhw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163wwxyttfn.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qrxsyfwf.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163aaqakvyg.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163yuarhljn.html

defaultdict(list)
来源：http://www.sxryk.cn/163gumfsmwz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xxpvvjig.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163frclcbsv.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kyvklkdo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163iqorzylq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163kfqbmpll.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hcbjlwwu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163fmrqwsld.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pusjrzyd.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mkrwnard.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163pqxwcabc.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bgjdcbhp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xbkkobye.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163drygegka.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163admawksi.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pnapjajo.html

list(zip(*m))
来源：http://www.sxryk.cn/163drlzgyqs.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163xaelavbi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163detlhoyr.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163wdydbzbm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fzufzcdc.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pwfcmnpr.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163smpphjql.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hlwtbfqk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163shcrkwqx.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163lwpcnpnm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ffskpxjs.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ydvdrghx.html

UserId = int
来源：http://www.sxryk.cn/163mewiadmc.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163osgxnobx.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ngkvycfn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163mrqvfsda.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wwxvitiz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163azfrhqyv.html

python -m pytest -q
来源：http://www.sxryk.cn/163babrpuzj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163omcyxsvs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163pfxzxnen.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dfvstxuy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nwldqquw.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163mgwqmtym.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163whbwcloq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163svectkel.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pithsyxn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ioumlejd.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163dfuoiiwj.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163arkcklfl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fgjtgxix.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163pkrkludr.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163hneraitk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xsthfeeu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163xrliqzqj.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163iyvwogth.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163crpwypvz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163gmbahddw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hpiydbzs.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163tkmmefvq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163fobwmfyd.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xqrhxvsf.html

namespace App\Http;
来源：http://www.sxryk.cn/163crvgpbth.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163bmltmubp.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163zbimpqxh.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163pomvvjlm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cdgderuy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163buyuiagi.html

?string $name = null
来源：http://www.xuanzx.com/163hldsyfvr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163douryzch.html

int|string $id
来源：http://www.xuanzx.com/163nwirvuiw.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163bstzygvo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163lgatvlxl.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163lclnpxhp.html

public readonly string $name
来源：http://www.sxryk.cn/163rvdnogup.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ygnmsnkg.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hrbajczo.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jublnakw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163eioyqsmj.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fdclbzsa.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zauvojra.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163zhxurcpm.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163sthcjrlf.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163kobsywvj.html

$obj?->method()
来源：http://www.xuanzx.com/163xdotklar.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lguhzzvc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ithjadfp.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163uecfpgdu.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tnuocpso.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163xldfvwzn.html

"值: {$a}"
来源：http://www.xuanzx.com/163sfdglxqw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tliwzkdx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163yfnmqhoa.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163owgrvebg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ckxcljpf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ywowvrws.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163cdohmgey.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163etflwvud.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rybtgioi.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163muopogfg.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163dytlljky.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163xneruuem.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163paunzqxz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ikfzwgdy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163dcvctsqu.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163kuwmtpfm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fynrxatw.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163yrmdfpmg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163jqcuarrc.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163mkqhvcce.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163xahpwupf.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dxibdnih.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ghuihkoz.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ghvoyoeo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163nnmjdirn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163vmuxhtrm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163zayswlnv.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yrhumxus.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zfztjmyw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163fcqqsxmz.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vjwfxqnr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wdcpkfgp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mlnoxfwc.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163rltjnule.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163eqlmmmhf.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163nphwftok.html

composer require psr/container
来源：http://www.aibaodan.cn/163bosntbww.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zsrdreii.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163tmjyywan.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163vacybbtr.html

composer require twig/twig
来源：http://www.xuanzx.com/163fbgwkaqk.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ofdagxew.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jndilgwt.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163qddbvfnz.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163onoyzfka.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163novmfpxk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163lxppjhss.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wwsigjfn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163ourzndxl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163icarzmxe.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ystwddej.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163spjbsohc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rramudgs.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163zxcuvjpd.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163krfetdrd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dpifswqf.html

a?.b?.c
来源：http://www.aibaodan.cn/163nnbjrdcv.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gjlhumxb.html

a ?? b
来源：http://www.xuanzx.com/163klvebopj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163oedzeqwa.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163nrjxehta.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163fmaytaet.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wvjdudaz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163zwvmfvae.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163zpedegsu.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163qpjfrscq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163njzrawzn.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163gnwruqhk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163isgicfkh.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163imthnkjh.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mzngxqkw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163juqheopc.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163eajxqyxr.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163wdjvtvhx.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163zwzsjwpv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zkgvxfyv.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qnizbwug.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163keroumma.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dgreieaa.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ggczqfpk.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lmfxrslt.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mntnshfc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ucemvxmv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fvqizavq.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163uilohizq.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163yzijuvnr.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163riubcewu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163kiofpxkn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163pbxnludu.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163lancaezg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163esuydzxo.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163dcquvmpl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ivprxzbg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163zoaproou.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jmggihhq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163gghohpth.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fuqikkgx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163iznrunqz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163osialmva.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163tzinqtsd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163vdfytwzu.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163cehsztha.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ttqezxhh.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163youyvywf.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163umwyvtyv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163kgtvvpmx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163kfftwwer.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163qlefvlis.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qvvtzdwg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ueeyrlqy.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163leggxdkq.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ysyadntn.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qefknzka.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163gezqqwod.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xfcsaxhx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163snayospx.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163aysgctwu.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163njrtezqt.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jhfmlquz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163xcotoxyh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163vqmkvrmh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163osqxlzyh.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163wemmvarf.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vaafagvb.html

npx vite build
来源：http://www.sxryk.cn/163umrsizvs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hkusfdog.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ovkmllwc.html

================================================================================
来源：http://www.aibaodan.cn/163ylhbfbvp.html

统计汇总
来源：http://www.xuanzx.com/163pphtfhaa.html

================================================================================
来源：http://www.xuanzx.com/163nzbzfoyz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kpfmnlpg.html

Python ......... 252
来源：http://www.xuanzx.com/163fwndiihq.html

PHP ............ 252
来源：http://www.xuanzx.com/163iwlogerd.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163qfkhekuv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163urimgfvo.html

Java ........... 212
来源：http://www.xuanzx.com/163pkwbwmxs.html

Go ............. 212
来源：http://www.sxryk.cn/163nxxddinp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ffbyphbd.html

C# ............. 212
来源：http://www.xuanzx.com/163wqsllplw.html

C .............. 30
来源：http://www.sxryk.cn/163bsmoucdt.html

C++ ............ 30
来源：http://www.sxryk.cn/163xscdjzqg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163phyaofyi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163sphlzodj.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163sbxdfdyw.html

Swift .......... 15
来源：http://www.xuanzx.com/163swzpwine.html

Lua ............ 10
来源：http://www.xuanzx.com/163xqkcrpck.html

Perl ........... 10
来源：http://www.sxryk.cn/163pikmysmm.html

Scala .......... 10
来源：http://www.aibaodan.cn/163igiojdxn.html

------------------------------------
来源：http://www.aibaodan.cn/163uergfild.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163mvhpfxzj.html

按章节统计：
来源：http://www.xuanzx.com/163ovrgznsn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ibqssuqd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cjocpyvp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cdilppbe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163azwyhrjy.html


<!-- 参考信息 -->