外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uyfgbjib.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163wstlxkbw.html

println("Hello")
来源：http://www.xuanzx.com/163xyicctgj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fzhwfhip.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qrpwlyxa.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vqnbpvwz.html

s"值: $b"
来源：http://www.aibaodan.cn/163uamrqblt.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dclfocmf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nakpcpjy.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ewaobwxz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xszzaobf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163pwqgrrch.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163eovupqpi.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kbbppkdq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vksninwj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163iswjbccq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ymzdlswc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163epvathld.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163unpcanxe.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163grqssulc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fjzamxkt.html

================================================================================
来源：http://www.aibaodan.cn/163bmlzmsed.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dlzvnjxa.html

================================================================================
来源：http://www.xuanzx.com/163efxcscqi.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wzrkjhyo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hnhsawab.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163npuwrpam.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163gtpuxwhz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lnlxddwr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163biajjorl.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mngzgrqf.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mbsxusrg.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163vkfckqqu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vwgemxwj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ymsdrxlf.html

{**a, **b}
来源：http://www.aibaodan.cn/163fxuwjeci.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163bomqmoxg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ehpkejnu.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163igxclzvo.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jxxhltuz.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lspadkto.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163tcdrycts.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163xzamrgkh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163aultseyn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fuqiaaav.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163vlvelmtz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dhlkystt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163hbvkkrsr.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163yfgijuqy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ltpndbkp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163eozqaxui.html

defaultdict(list)
来源：http://www.aibaodan.cn/163wapkgyew.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163amzlcxpz.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gtfuuugf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163arozxgnr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ixqxevhq.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163aekoptsp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ojrfkhux.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163icczrwas.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vtgrvgaq.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163onjwtgzb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hlqqtsjx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vhelgzzd.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lwgvdoan.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163horgahex.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hxggttyq.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163dbrdyhta.html

list(zip(*m))
来源：http://www.xuanzx.com/163nomoozaw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163olotvvyx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163duandmcl.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163vmokvnsh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163xrbvdqlk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ciryyeoe.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ddaoeyfq.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163lwrnxczn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bdyetqbq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gyadmqxh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ttmcmlgj.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163mlxigrom.html

UserId = int
来源：http://www.sxryk.cn/163mvtcnefs.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163uflpguso.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163iespiiap.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tirkgzjb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hsxjjfbq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163csbwqzep.html

python -m pytest -q
来源：http://www.sxryk.cn/163sbuttoio.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yaxwqrqw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163klfldhte.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163eirlebqz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163xjqxkgbp.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163kqnhjdiw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163tblvfwly.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163plbzxwnv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163opmmxzng.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163pjojunob.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163bdhqzqgd.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163nkhgjaqx.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163hhgyhiru.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163fjfywlwm.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hrkddiux.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163opyfvldt.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163lqtfxygw.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zwlmozlk.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tfpifxni.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163bxwpegmy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163hthwcsra.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163svnwlbni.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yjdhrnzf.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163youvtwsc.html

namespace App\Http;
来源：http://www.xuanzx.com/163jwrvfozj.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163mgzyqqtb.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163hqjxfbsr.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163geduwwoe.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zpgkqlxw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ubtzgwtv.html

?string $name = null
来源：http://www.xuanzx.com/163dnecxajk.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163swctusjv.html

int|string $id
来源：http://www.sxryk.cn/163rohsefio.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dquebivi.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163engzpoez.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163jjirthqu.html

public readonly string $name
来源：http://www.xuanzx.com/163nraeswbj.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bgqqmwda.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163phhoznro.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163puqqqhgi.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163nzztjwnk.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163dfrjorog.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163rlzhspub.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sxctarkn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bppqwfrr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gmuxyoke.html

$obj?->method()
来源：http://www.sxryk.cn/163rszdcgib.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163wklxoazm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163uvtkzivm.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ijsaybgo.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sxragtri.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gajdkpaj.html

"值: {$a}"
来源：http://www.sxryk.cn/163vcdrujhv.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163qvrwgpjs.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163beqcavfe.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163lbidsobo.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163aapjodlv.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163tekctttn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163coxksvpd.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163yqnhirwt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zgqmjvry.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ygvsrcdl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kqcyqqbi.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163grwpupfo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zfoycgui.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163efhubrsh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gluicaka.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hrrxserk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dqfpjxqw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163mjwshvjd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bhliesfe.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163oagakpxq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163gdtcerjc.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163jugereiq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163ydjfszhm.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jfyllmun.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163erdfuckk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163zbubnwje.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hvjievrq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163khnwwcsh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ymimhage.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ehpvxehl.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qvvjrkdw.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nafnmwiv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163kcqskicr.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163tmmhaxqa.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dxpeiizo.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163tkqjnnfe.html

composer require psr/container
来源：http://www.aibaodan.cn/163vamfddfb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163pheqanlg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163itmljzcc.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163nurahlsy.html

composer require twig/twig
来源：http://www.aibaodan.cn/163kclgtxkx.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jkcpihuc.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163aocvejcp.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163xwpgkjjd.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zenzvysm.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163rechbsnt.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163elthcjgv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163mbrbkfpq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163qlikxjxg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163mootdhgw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163stufqwsj.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fptsbrqb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163dcstxyha.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163aivmjbpy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zawftryr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163qzoyqvvu.html

a?.b?.c
来源：http://www.sxryk.cn/163ktsbqtpq.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163bdxdowfu.html

a ?? b
来源：http://www.xuanzx.com/163umrhylqc.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cqmtjnvm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163exqnabxs.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ntfetohj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ytwonqej.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163reavlfxp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163fnzgebdl.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ktaanzcr.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gfiyllua.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163yurpbqnm.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163lvepumnm.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ecuyuago.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nodztrgr.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163fcfyiarv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163yuferbnj.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163pdihrmji.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163tysvvgyv.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hnahvdlk.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163hjxvicjh.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163afcaqtoe.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hjpsdlrc.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163yoofzaqa.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sdpcdcmi.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163cbzxedur.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pujbubyv.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163mkpufilm.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163uzluyawh.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hjhoyxmt.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ckcmrtur.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163yhuhgjfp.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163cjegekfx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163okvjyxib.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163xtrekdmu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kyeyfcwl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163wbloimwo.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163jrpvtljm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163symgdydl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163ldikskxu.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vbjohnrz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mvpggwqs.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mqokwszy.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163quhrmobm.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163lwxfqtpa.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163qpcqyqij.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163fndfvxun.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163gfxdsonv.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gjmhhsir.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163onaqsphy.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163ryokvdyt.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163fxcvprph.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ppaqctsp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163mpkxxfhx.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163sadronfv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bwjkiskq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163jsmmnhoh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163eecadwji.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ojwsnivq.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163czqiqrwi.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163vgoyzbci.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dcmfszaq.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163szslwmsk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bhkhqocm.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163irvaqbvq.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163cantjmuq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ntatymmh.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163yifzeiep.html

npx vite build
来源：http://www.aibaodan.cn/163ksgffqmt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163qjpbmfye.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163tlthekgc.html

================================================================================
来源：http://www.sxryk.cn/163uyfziinn.html

统计汇总
来源：http://www.sxryk.cn/163ewablehu.html

================================================================================
来源：http://www.aibaodan.cn/163qfelzcvg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163trvpwvds.html

Python ......... 252
来源：http://www.sxryk.cn/163vdydekyf.html

PHP ............ 252
来源：http://www.aibaodan.cn/163zqjedjqm.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163igoylaln.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163nychuvqt.html

Java ........... 212
来源：http://www.xuanzx.com/163wewaclha.html

Go ............. 212
来源：http://www.sxryk.cn/163zbptmuby.html

Ruby ........... 212
来源：http://www.sxryk.cn/163xuoasqjj.html

C# ............. 212
来源：http://www.sxryk.cn/163twccpfwo.html

C .............. 30
来源：http://www.sxryk.cn/163dtrqryzk.html

C++ ............ 30
来源：http://www.xuanzx.com/163bvhyfbic.html

SQL ............ 90
来源：http://www.xuanzx.com/163rngojcyh.html

Bash ........... 80
来源：http://www.sxryk.cn/163ofsttoar.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ehoqxnpk.html

Swift .......... 15
来源：http://www.xuanzx.com/163itckmwsu.html

Lua ............ 10
来源：http://www.xuanzx.com/163pyxxbomr.html

Perl ........... 10
来源：http://www.xuanzx.com/163qwlqroew.html

Scala .......... 10
来源：http://www.xuanzx.com/163pnzcuixo.html

------------------------------------
来源：http://www.xuanzx.com/163uxiqepjq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rjmcfazq.html

按章节统计：
来源：http://www.xuanzx.com/163kizatjjw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hiatktsf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163zqssnjrp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fcsqvlas.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rlkbsplq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163zzrhkxun.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163intywpnu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jslbkvlw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kpuzmmfm.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fybozxlq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163puohhwad.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fnvaifge.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163shipzppx.html


<!-- 参考信息 -->