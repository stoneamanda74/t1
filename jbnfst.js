外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163gjnssuwe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gagvtker.html

println("Hello")
来源：http://www.xuanzx.com/163jvwzqxxx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yekbtlci.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163jywqckir.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163pdhdsctb.html

s"值: $b"
来源：http://www.sxryk.cn/163ebuoxpqm.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163dzsypmol.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163quremomo.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163prdhpsqp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163govttfwg.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zxfwfjkv.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bkyxcnzh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163rhvdzgkv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kkonlspd.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163rbahwdkl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163yinfqgvw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163txgkuabj.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163mwpvbcns.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vnjpevrm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hhnbsccu.html

================================================================================
来源：http://www.aibaodan.cn/163taldjkaq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163oyphqtay.html

================================================================================
来源：http://www.sxryk.cn/163ovgootaj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163fblcsuze.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sbtbpcwj.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163prpuycqt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xcehjwhu.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163djbwlmzf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gtowpozp.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163fmrmbzuq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wkcnfltt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163vesgbstw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wqvbyblk.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ebestvnn.html

{**a, **b}
来源：http://www.xuanzx.com/163bfczqkmv.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163vpnbwtli.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ijhhbuww.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163azcczggk.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163wtfusiaf.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kqsibouu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163mzcjigmh.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163hpzpavmz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163uasduzvh.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ivquloub.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kixftabq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cgtehbvx.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mjmvkinf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163rqehgtgy.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hkeytzxf.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163dxvffjdi.html

defaultdict(list)
来源：http://www.sxryk.cn/163ulrhpavm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163zmqupinu.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ktbreaqk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hinxeskk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tqudtzqs.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ocpcnxsl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163gvrlugrq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nmqktvjg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163hkkpyufm.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xfqknncz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163xwbzzttt.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vekezsso.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163cljgorfe.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163fkbgvywo.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163avqslvyz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163yitbumwi.html

list(zip(*m))
来源：http://www.xuanzx.com/163odwruxxx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163rsijoyxi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163qqeucptp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jdgwuopc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wymyrvll.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ssbfzjvx.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163atxxdmzq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kwyudzpk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rzgqypxq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tscyihqf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163mwltdifg.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163akyeudpd.html

UserId = int
来源：http://www.xuanzx.com/163swahvity.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163teibwfur.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163fpivwxim.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vmytleag.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xgigsuob.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163pgasoigy.html

python -m pytest -q
来源：http://www.aibaodan.cn/163pqelitcq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163wroyeuxv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163viblypnx.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ogmtrlle.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163lxcbokne.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pgdwjnxw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163oigidntz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163alcmbcww.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qwniuvpm.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163jphzsuwv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163pobnarct.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jgskvtml.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163tamximxt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ozztgjfu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163czjrqrzf.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bpwmcsrs.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163xktgehzi.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dkrcebbh.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jeumapxe.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163snwroonl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ccekngux.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163nagdzlur.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ayhoeths.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bkrdlsxt.html

namespace App\Http;
来源：http://www.sxryk.cn/163tlxisoys.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163hajqbnhl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lnpraxuj.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zuszagkn.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ggrmpadm.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sqcnidfi.html

?string $name = null
来源：http://www.xuanzx.com/163gbpndafz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163lzghoegk.html

int|string $id
来源：http://www.xuanzx.com/163kghcdlmj.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163nzatxvdk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163bejbaquv.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163pttldrhi.html

public readonly string $name
来源：http://www.sxryk.cn/163tffnqnmb.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163owwjrded.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163zuoananx.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163bzikfsee.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163cfupsucp.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163hbsabbpn.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163mvxyaxmp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163vzwimgok.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163vxwsqlqz.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163boxeehey.html

$obj?->method()
来源：http://www.xuanzx.com/163xzupvcxt.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ztxbfqgl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163iwhqgdro.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163gxheyrom.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yvncwmla.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ezoplxky.html

"值: {$a}"
来源：http://www.sxryk.cn/163hjhwhvoe.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163faioefqh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163nbbfqulw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163iechlwpy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fgqojpuz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163uymozxhl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pvyzfxjy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ozmbqwws.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mzbzawbo.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163kjhksrtu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163zmtmrmpi.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yygohkhk.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163cyhnjdbh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163gbgyyfnx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163cpvkeqgc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163orzhlivn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163duvusuev.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163fnwjsmsv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163dtvsfjyt.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ityilvsc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163oahggitk.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163yjhniger.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163vkezwpci.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163buwdzolr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163wxwedogx.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163dvwpkhby.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163bxfrfwxu.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163succiepv.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163smmwxepk.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vdngjnae.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mlaadyxo.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163ioutiebr.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163kdlknpbb.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163bgohxdai.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dtxugygu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163krwibzyk.html

composer require psr/container
来源：http://www.sxryk.cn/163dahsompf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163tzdseubw.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163twkikfvx.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163umsgyenh.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hjgxobuy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163zegyentz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ssxpeoug.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163zjhrngnx.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163wbcvhjkb.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vxrdecyd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163imdirvjk.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wrjvvgbn.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dpflguwf.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cbjnffcx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kgkxucng.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163zuummsva.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tsoklvka.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163cdmstaiu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163ydsujzhh.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163kppbpysx.html

a?.b?.c
来源：http://www.xuanzx.com/163yfrngcmj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163xddknxkp.html

a ?? b
来源：http://www.aibaodan.cn/163ddikyfax.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ozeevqdb.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163dkqzuamv.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163pbsuvmtw.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163eolyngsu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bowsicuq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163jwkrvliv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163csiusivt.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vmeffaqc.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rdpdgcth.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163egllefzj.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oztxineo.html

structuredClone(obj)
来源：http://www.sxryk.cn/163cbenwlht.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ndzcmsax.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nptjudwp.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163rhpxxclt.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163spwyhxjd.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163grodabes.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vadfqeoj.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163jhnuiwnc.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zqkwthce.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163supuqhby.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fwkxbgfq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163nbfrqdbu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163whgzphxk.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qnlbthcp.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163ihbqznkm.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nfkiwbiz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163mnzjdjhe.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rjblmmej.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163evqeofzw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163rqdwjyep.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163fpqvezwb.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163qcygclyw.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ouujnovl.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jrhiekyo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dfrebxmp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yfytwqvj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nccukiaz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163xtsjnvex.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163xljnccfj.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163vevpboro.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163yeoxexsi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163knmwmlaq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163buevfzwh.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163twbyilnz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hfibzigo.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163oivxdjta.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163poxrucgx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163jdhllqva.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163zayqhieg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163fclmaegw.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163xlyomkec.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xvvebjtf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sgonwlfa.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xalpkbwc.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163picpikdx.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163yojgfexq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163lqjovvgs.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163zxtoagsj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ulrpowdc.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pmojpglm.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163alyivbud.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163pwmeiego.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163agsdluhv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ogmcrmft.html

npx vite build
来源：http://www.sxryk.cn/163vgvajurr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163ywkgizvb.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fnwrvhij.html

================================================================================
来源：http://www.aibaodan.cn/163jlsmulie.html

统计汇总
来源：http://www.xuanzx.com/163haevcgsq.html

================================================================================
来源：http://www.xuanzx.com/163iotzprbg.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163sxkjrgrx.html

Python ......... 252
来源：http://www.sxryk.cn/163lakzgmjl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163yvqdicox.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163ujlqlhov.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pcbogaat.html

Java ........... 212
来源：http://www.sxryk.cn/163hbvyxskn.html

Go ............. 212
来源：http://www.sxryk.cn/163tevorhzn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163hffefyyt.html

C# ............. 212
来源：http://www.sxryk.cn/163phianfpo.html

C .............. 30
来源：http://www.sxryk.cn/163todcptbw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163cihoxynw.html

SQL ............ 90
来源：http://www.sxryk.cn/163axsxitni.html

Bash ........... 80
来源：http://www.xuanzx.com/163uilgegwu.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163gkpknhdi.html

Swift .......... 15
来源：http://www.sxryk.cn/163sehbttqr.html

Lua ............ 10
来源：http://www.sxryk.cn/163cncsqvlq.html

Perl ........... 10
来源：http://www.sxryk.cn/163gpykvnna.html

Scala .......... 10
来源：http://www.sxryk.cn/163vglcoxea.html

------------------------------------
来源：http://www.sxryk.cn/163yxgjdful.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ghxewaaa.html

按章节统计：
来源：http://www.sxryk.cn/163mapssobd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lomdapux.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163atttzjce.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163qeywtsdx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bvcpbghg.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163pgrnmglg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mnpvoplr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163uopjndvl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163kuapmzqd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jcsgffjp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163sfyzlkow.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pzpmlphp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163oegzkwfg.html


<!-- 参考信息 -->