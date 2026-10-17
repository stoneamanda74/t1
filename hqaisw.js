外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qnvemifz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wjgmxhpn.html

println("Hello")
来源：http://www.sxryk.cn/163rfapppur.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ccyxgzna.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zandzetm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xijlbdwc.html

s"值: $b"
来源：http://www.xuanzx.com/163cghviktc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163bnyghseh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jcrevplg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163elqqlhee.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rtkrjexn.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163plajkxlp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dmtjqrnm.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dctmcyut.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vwnhhlfs.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163gscxdobi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163aoouophf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163uawhorxs.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163emrxelht.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163nwnswjts.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163jtfjgqkr.html

================================================================================
来源：http://www.xuanzx.com/163wucnygqg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nofazsio.html

================================================================================
来源：http://www.sxryk.cn/163rxxtqyef.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163rkzoonep.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uwzaxecr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163lztvrhuz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163jwyvvsfq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nleqmytx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163cdurnsfj.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163przuxxbw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163odjyjlxp.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xzngksdd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tferjhzq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163uefxlbne.html

{**a, **b}
来源：http://www.xuanzx.com/163cyijwtnc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163htqdqaxh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163twaevrvq.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ndcihzua.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163cqfwrzlx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zhqvgltd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163suexrlao.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vklztpmo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163lnxywiqx.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163sqmbublj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fzhinrzo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163otxdtfux.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ujsmnsru.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dnpbniru.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163mpbghlun.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163lcobuaef.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ssumpstq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tgexwumj.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163eycakhrc.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cpgtshtv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fugchnys.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bpsbnzul.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vhqsywpc.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hlxiyikk.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163jtndhyoe.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qkpoosqi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163myhswicw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163eqvwxvya.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163yecyovvo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163lonaloey.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163wbdzulad.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cppknbnb.html

list(zip(*m))
来源：http://www.aibaodan.cn/163walkocyj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163aifcscih.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gnuqpsoo.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gztigvcv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qdkifewe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ynpbbwov.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163tjxensod.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rnoxtjow.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163sjostbtj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163gvubbzgo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bgnsbkoa.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163iaujpmge.html

UserId = int
来源：http://www.sxryk.cn/163ffiqqtdw.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ljiqsdhk.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qipmxwcu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163rqkppagv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163myjyjeic.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vpqoyipl.html

python -m pytest -q
来源：http://www.sxryk.cn/163ebryqjhd.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163lgmdlixp.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163feofbumj.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163lscbhsyv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jkggvyvr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163gwjsjkym.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163iujpsavv.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ydrnrhah.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fdkgtmzd.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163lgiyypci.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163hvlusxvn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ohahbegs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wwmqhqmk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vnepduvt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163tuaydknf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163pqkjsool.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jixbutyr.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163ipstmxxt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163xdngnqnk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163uwfcuwdw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pwgpzczh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163bzckxiln.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163fgnhesbv.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163vasyvwyh.html

namespace App\Http;
来源：http://www.xuanzx.com/163dgnzqjqm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ioxkaqft.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ufwjsliv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tgopxllk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jzikliaw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163xbaogcaa.html

?string $name = null
来源：http://www.xuanzx.com/163onlozjzo.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163qhmdaxlv.html

int|string $id
来源：http://www.sxryk.cn/163gjodqqkr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163kjrxrxnr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163asqevxbl.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163sgznduhs.html

public readonly string $name
来源：http://www.aibaodan.cn/163ohgygavg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vyctexna.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163crojmpcv.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163jsgednzj.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jgbtjpvd.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163agslnbhm.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163aryrjskh.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163xxeywkmu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fklsdrid.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163iucegspp.html

$obj?->method()
来源：http://www.xuanzx.com/163jsaikbeq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163dqjegjwx.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163uektnkyo.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ijuvfixz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dyaysynb.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163socygeqd.html

"值: {$a}"
来源：http://www.xuanzx.com/163msdvztqf.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ojepgisu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163myyodkdb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163duxfekjl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fpcvtwak.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163qpxloioy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163goqqrwjd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163plvhhbfd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nzaepldt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163lphuilgn.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zrkjrrav.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163kvqnkzzy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163qwuluhkn.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bzqxfhea.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163lsqqgkrp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163lqydbpab.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163iaeigcvj.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bkxbkovp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163bbowvtuq.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nnrjteoh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163tvtiwgij.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163tghaxbod.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163kfvkumka.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163xddatfpa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163nzjlkxpw.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163rcapoehr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163bbqhciic.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xmvpdofp.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dbkvaezt.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rtmnqcrl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ixqxyktv.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jzacgbcc.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ovquwoft.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163awbuxfxo.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163myiwvbiu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mscwpofl.html

composer require psr/container
来源：http://www.xuanzx.com/163uibroutb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163fdfxrbqi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dupsxjdz.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gguecwwm.html

composer require twig/twig
来源：http://www.sxryk.cn/163fonpehue.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rxollhpg.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163bvmhffpd.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163zubhswlq.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163vrfvgnsj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jywrbvoe.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rbibsjwd.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163akpjqgoh.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163dztsyhor.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163zyxkdgpf.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qnqjojzc.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163moewasjy.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ekwinlcr.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163eujuzajt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zbnioqxj.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163xgjrhpdd.html

a?.b?.c
来源：http://www.xuanzx.com/163fhkijhom.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163phrjnifr.html

a ?? b
来源：http://www.aibaodan.cn/163jaoatzfq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163sanpntzz.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ickgezit.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ahrcjctd.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qeopvvdb.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nxvkdlrx.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zfnmzjqt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163efwhkhsb.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mfytiahk.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163anoghgqa.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163lfhwgwkf.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lufukdhd.html

structuredClone(obj)
来源：http://www.sxryk.cn/163oaoevjqt.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ymrutryd.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163dpavjblj.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163zpiiwxyq.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ztlgezbn.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163wvgbphpm.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jxxqvoxg.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jlcsovte.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163gkwvhlax.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163khxwokkq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163pgfabtfc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bxfhcuze.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tjdkpqva.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ttlcbzob.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163livfppql.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163tkwpvyhp.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163qzmnscdl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163sjeottpv.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163oumibfpv.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163oyhdyghe.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163eenscvfq.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163smzyxfuc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163heekrqvz.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163owwgsoby.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ryngppxv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163xajmhkil.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163ehqhrhyx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163kxjevbnv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tpyexsob.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163jakfvbgj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163lyiguoye.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yvdjsnvj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163njgmyuri.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163lbroopkh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163risuucck.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ttcvgccz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163htnhweov.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163tzyvyjsr.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163phqzomyi.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163sqzpdhoz.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163sgtypzkc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163eqipdacp.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kkbkvfom.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hcavuxou.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163oghagbci.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163kxijoueg.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163lvlyglww.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163afzfmolf.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163molpswzh.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163iduitith.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163atxhucio.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163ekuoarxh.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ghlpuhku.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163uooirbak.html

npx vite build
来源：http://www.aibaodan.cn/163wuowqjjt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ioflifzy.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163lwhjwjhl.html

================================================================================
来源：http://www.aibaodan.cn/163qbcfbxxu.html

统计汇总
来源：http://www.xuanzx.com/163czeshzqu.html

================================================================================
来源：http://www.aibaodan.cn/163zculqzer.html

按语言统计（条）：
来源：http://www.sxryk.cn/163qnxadrnx.html

Python ......... 252
来源：http://www.sxryk.cn/163whwcmmdn.html

PHP ............ 252
来源：http://www.aibaodan.cn/163upkaqzye.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163faqngjem.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163nokhvkeh.html

Java ........... 212
来源：http://www.xuanzx.com/163gtpsxkod.html

Go ............. 212
来源：http://www.sxryk.cn/163avbqdnnc.html

Ruby ........... 212
来源：http://www.sxryk.cn/163ccdboizj.html

C# ............. 212
来源：http://www.aibaodan.cn/163cleeaunr.html

C .............. 30
来源：http://www.xuanzx.com/163dgonxbrb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163fjoiljls.html

SQL ............ 90
来源：http://www.xuanzx.com/163cmourzgi.html

Bash ........... 80
来源：http://www.sxryk.cn/163zaikrrxr.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163pzmymquz.html

Swift .......... 15
来源：http://www.aibaodan.cn/163osgcwacn.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hbptflms.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xwzkosuj.html

Scala .......... 10
来源：http://www.aibaodan.cn/163bqbwfrst.html

------------------------------------
来源：http://www.aibaodan.cn/163wkqyyeaf.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163igapxewd.html

按章节统计：
来源：http://www.xuanzx.com/163uasrymyc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163tcvfcqdg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mjjqbvfw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163wyauiueo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jonryxfl.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163cmadwrku.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kpzudofs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dkbynqkd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163kuamelfq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yzyvzlbc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163okcsrjqg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gayxaehg.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qpvvcbgj.html


<!-- 参考信息 -->