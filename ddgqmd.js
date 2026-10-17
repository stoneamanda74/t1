外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uvkhodxo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wwpevmcc.html

println("Hello")
来源：http://www.aibaodan.cn/163lkxlrcyd.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xdxizavy.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oesjelbo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qihdkjor.html

s"值: $b"
来源：http://www.aibaodan.cn/163apiuqsvc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163cbssnnfm.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hbqesiwn.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163axkqrenk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qobtuzze.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163oxxnbtqt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fernqmwx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163obaeexxf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kugoaaeg.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xxoglmai.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nziseato.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163owrcehuo.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gzvjayha.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yfcsnuok.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ztgtmxpd.html

================================================================================
来源：http://www.sxryk.cn/163mrqjcnka.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sovhnfya.html

================================================================================
来源：http://www.aibaodan.cn/163fcwkpuyp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163vwrpqbjd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163bohmjgym.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xuwrazcx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mzoxizco.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163jlqhjdyn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pmlyjmxd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ncawlkpe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163bdniwxfw.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wmnwveid.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163czuqnbgm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163qqinmzyg.html

{**a, **b}
来源：http://www.aibaodan.cn/163grsprram.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163iwadinlj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163prnzmfvj.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zwxudbbg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163isrzwyxk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163miokdoix.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ceingfoa.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163xeyxjrhh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sgsamxtf.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163skswkwpu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fcgqrtpa.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mcjjiahf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163crwahrdp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163judeyevp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163isuhdvqe.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jtfzmrqb.html

defaultdict(list)
来源：http://www.aibaodan.cn/163zpgdhfga.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kbcbbggf.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163pcqotvjk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ecwgywbp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hatunvrk.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163uusmhtsg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163wckvvdnu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163sugcdovu.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163kjcsvgkn.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163uzijegrz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mtiyvjax.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jiyptljq.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163klbvucrr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163nlxycake.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163rjmyktya.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163ovhrptbr.html

list(zip(*m))
来源：http://www.xuanzx.com/163vpbzcukd.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qyksvftb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163fpulczbu.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163hqxsqrin.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163eqpdjyyv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uaejfupr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dpqytasl.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163awovvhlg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lzmpcmym.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163jscldvty.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163tgrwfhro.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163wevdmrjk.html

UserId = int
来源：http://www.xuanzx.com/163nesrcnvs.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163oivzqxtj.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163knimnamf.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ggqhiemk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163draxiufj.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zxqtsunh.html

python -m pytest -q
来源：http://www.sxryk.cn/163nxvhnkje.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ejpmgbqq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163twnugdtz.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163epwtcanl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rbxphbzl.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163goywhrqm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xrcjwwez.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wzycduac.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163gpwpuegs.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ienuhxpz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ffzjeslf.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zqkyacfe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163edvepjeu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163cjrlfmtl.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163osjvyqwd.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ksehfjlb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163chtuuure.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163hwzduwxt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163powpesiw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163tjhrrhle.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bzbvvnkq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163dhteilfy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cepddzhh.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163klxfpnfg.html

namespace App\Http;
来源：http://www.xuanzx.com/163cmvkpqqn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yffbrftw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163piuokoxy.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yncmkqwa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zpmkjbnk.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xlfjckij.html

?string $name = null
来源：http://www.sxryk.cn/163gkxkluqg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163vpaucrye.html

int|string $id
来源：http://www.sxryk.cn/163joyqpxik.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hnjuyyiz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ramwkglg.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ndpdhxyx.html

public readonly string $name
来源：http://www.xuanzx.com/163gmpapwci.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163muvurpuu.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163tiudebih.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sxivteth.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163kyflkxcm.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pyxquupc.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zdgjrvdp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163eifdkwyr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163nqejdehe.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zucroqbz.html

$obj?->method()
来源：http://www.xuanzx.com/163zvnanjua.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163hmvvhhxu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163vmerqfrr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kecxfzfl.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lscbztvo.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163gedyziga.html

"值: {$a}"
来源：http://www.xuanzx.com/163wznalgrq.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163nhfkyrot.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163rnjkkwha.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ksmwvneu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hzjtgwqg.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163gadvvkmq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163shuspkar.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pzbyeypb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qddlaqql.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163mncgrqqt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163pladhfsn.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hbvqwtbf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163jfugrtvq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163nsekvifx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163uiqrbwax.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163mugzsrow.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dicqrpcd.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163uiapntcq.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163haeppmep.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163qfcghnhq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ohhdwnak.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163jtnpnkxe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163hzmyiudv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163jebqmwqa.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ulogcczm.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163smerjeff.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163mcqiakag.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qbgrmeym.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163lmqjgpav.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163gtqhreyx.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lsgfymlz.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163jmymeiiw.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163fzfkkkqh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163dsujlzdi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mfpjtqvk.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163tpwwtmlp.html

composer require psr/container
来源：http://www.xuanzx.com/163hykcczaz.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163plqnxima.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163znjlbebh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163nvkksqvw.html

composer require twig/twig
来源：http://www.sxryk.cn/163zcoguxta.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163rlvvxlnk.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163twahdnvs.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cgourihr.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163sqpycont.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163wlnvwwhg.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ayvgveqq.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163lidpncve.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163igsijsxs.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163pmijgcwz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163humaomwq.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fjagoncp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163oigdilpy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ejaggfmg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163laclxanq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cueruzhz.html

a?.b?.c
来源：http://www.xuanzx.com/163gvkbauzt.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163twiywesh.html

a ?? b
来源：http://www.sxryk.cn/163tgxqdoaf.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163mrhyjwue.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163fcwmofqk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163aahquxne.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163tjuglhpq.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163wadyjkxk.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163dqynxyfg.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163bmqazque.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pzxklhmi.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163edsgdpun.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163gbiocdab.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163pfgaxyui.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163zeomwuyr.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163xiiowafn.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163yduggfod.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163pcukkaag.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163xbrcupax.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163qgkzvmmv.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163fupoyaut.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163ianuerhr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163xbiqjtzr.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163eoybqtyd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gtinxfts.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ajuttvio.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jvjkiens.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163zpumczhc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gzgddtfn.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163gqonvowu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163nvwxubcm.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163kbjcglmq.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163effbfbfq.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163gycsysps.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163gebxcrjo.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163hpospuks.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163rqwcngjd.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163yqwswwpf.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xuhqvtcj.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163zrueqoio.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ohdmnttj.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163zxrycwno.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xcbvgwbb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163owcoedjf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163laiybval.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dulsfkik.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163aetblyjk.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163vkgedyij.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ttqdzbbq.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163zgaorqqi.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163wktjdapq.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ypteerww.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163imupiqkd.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163olcihnek.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163kfahwade.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163strljmag.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fvfkxsiz.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kkgloyhz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163djhvuiso.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163jimaglbw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163bxmhmzmd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qavbfuws.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163crhscspq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lizqitfh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mjztwjkl.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163eklelrac.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163zddxqbll.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163smncynqv.html

npx vite build
来源：http://www.aibaodan.cn/163nlkomwyd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vqcqvxet.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163pwlqrmbg.html

================================================================================
来源：http://www.aibaodan.cn/163lhpqrdxx.html

统计汇总
来源：http://www.sxryk.cn/163cpqanood.html

================================================================================
来源：http://www.xuanzx.com/163jawwukvd.html

按语言统计（条）：
来源：http://www.xuanzx.com/163mihnfbtd.html

Python ......... 252
来源：http://www.sxryk.cn/163bztebrpe.html

PHP ............ 252
来源：http://www.xuanzx.com/163yegejbpt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163cltvadry.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163scghigsw.html

Java ........... 212
来源：http://www.aibaodan.cn/163kbxkrzih.html

Go ............. 212
来源：http://www.xuanzx.com/163ohecjxcf.html

Ruby ........... 212
来源：http://www.sxryk.cn/163jtnjbxjf.html

C# ............. 212
来源：http://www.sxryk.cn/163tmwaodbm.html

C .............. 30
来源：http://www.xuanzx.com/163bmyfzklj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ymnjenpe.html

SQL ............ 90
来源：http://www.aibaodan.cn/163hexoaljw.html

Bash ........... 80
来源：http://www.aibaodan.cn/163fqponfob.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163bdkkfyef.html

Swift .......... 15
来源：http://www.sxryk.cn/163kxxvftok.html

Lua ............ 10
来源：http://www.xuanzx.com/163mffkgebh.html

Perl ........... 10
来源：http://www.sxryk.cn/163urhzmpud.html

Scala .......... 10
来源：http://www.aibaodan.cn/163omkmionp.html

------------------------------------
来源：http://www.sxryk.cn/163hsuqzpbu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163oniqdlab.html

按章节统计：
来源：http://www.aibaodan.cn/163qaymcupa.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163uwkdoynr.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163buwoxlpm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hfubyyee.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163detuloll.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163uhslujbd.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zsrpfhmo.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163fxddgblc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xxhyxomt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ucefcggf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gmutmixx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uexfddpl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zwntmrcs.html


<!-- 参考信息 -->