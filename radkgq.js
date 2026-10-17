外链999!wailian999！

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163faswhsbe.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wdkzlmjm.html

println("Hello")
来源：http://www.sxryk.cn/163kptlwzbx.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qnbujjye.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163jatedmei.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163uqcvmlvs.html

s"值: $b"
来源：http://www.aibaodan.cn/163zwqfiuyc.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163yoscxnwl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163eavgclzm.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kqpdtqay.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163nvkpsgkv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163mquoeqci.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163bkhzcmpq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bobghuci.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ywaudlkw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tiahmiag.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163kjdtgxqu.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xstztqlq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163owrvbdpv.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163noihwwio.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vozsudde.html

================================================================================
来源：http://www.sxryk.cn/163wzdmsyjn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ioefsdvk.html

================================================================================
来源：http://www.xuanzx.com/163itmsozym.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bsksrtct.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163synatkrh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163vgunbkwh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ttmarrki.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rprwelsv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163yjwwkwbq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163aajzvhua.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163vzvyuolx.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163xtwhugdy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163istyodws.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163abcqbtmw.html

{**a, **b}
来源：http://www.sxryk.cn/163iwpnabiw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rmguachx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wxkarucs.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163damkcojk.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163xuxtaibq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163wlzqceeg.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ifaufhze.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163aqfruozx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hjupzndj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163dmzqszbt.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kzxokcga.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163viwjxusx.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xzxxtuav.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hewvrhqt.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hcmjqtvj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tuzyzbqg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163owdibphb.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163knrssdnx.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163quuodkxx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fqwlrmxu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163zftlbfha.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ghlcwdql.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rdqfgmqd.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lzmkcbkq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ckekcvez.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ljzwiksh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163euwxwspx.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163ylcolgor.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163gwezyyni.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163bhqgjmwv.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mddyfoqr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uvbwhrbd.html

list(zip(*m))
来源：http://www.xuanzx.com/163agmgxksc.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163iiocgskg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163sndxbboj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163juebsnwc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163gcwymyze.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jychnzoa.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cxsmhjqk.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163fjcwqffq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jchlvuvl.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163uwtvsufj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fjariytg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163tqefvemx.html

UserId = int
来源：http://www.xuanzx.com/163tmqryvpl.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163doiibgyn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163tcbuhigl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163exksxprs.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163cwjemnul.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zrjzdixt.html

python -m pytest -q
来源：http://www.sxryk.cn/163gzojjnoo.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pkhpedep.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bhabwzdm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163dtafnumz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ycilcbqb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163frbuhjxg.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lxqnjkvq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163venmqsyq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163xwwzgzdj.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163cngeorsi.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163wglwmdwy.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fuzjvvwv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163fxdcqvxs.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163inhvsvtt.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163stsfyqow.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163mvxlzqvs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mgnefhyd.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163flbtwxif.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ecvhvxig.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lcrmnskd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163swebvoxz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lgpqucwf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ovyacwnv.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jvaebtuq.html

namespace App\Http;
来源：http://www.xuanzx.com/163ldkvmhfl.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ldlgrfdg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163kxijiaaw.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163lezaarow.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jnafyyhf.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qsndtkbf.html

?string $name = null
来源：http://www.aibaodan.cn/163zhijjmlk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163hppnojpg.html

int|string $id
来源：http://www.aibaodan.cn/163zhhhsmpb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fknqjslx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163rsfhlfbd.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cyyoephz.html

public readonly string $name
来源：http://www.xuanzx.com/163gbryqdtw.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nzeyfsvv.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gpxmvkck.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ujezxnbk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163grookrhg.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pgptyaqa.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163reefytnu.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163wxunfych.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wuukzhlw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163smwrzmfp.html

$obj?->method()
来源：http://www.aibaodan.cn/163aqqwkseq.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163faudieoo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163eeqbphuu.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163nkdyqxzy.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dmxtvggn.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163cbybxrfs.html

"值: {$a}"
来源：http://www.xuanzx.com/163fngixxmy.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163bngtsteh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163hlwoyovp.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wtvikwsv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wmjmrqvd.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163knrnmeix.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163okligebr.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163uecekpoz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163crxtlabp.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163atajpnov.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qnpwqjwe.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ltarpqgd.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tjoivrgj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163apdtkcyz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vxzreqtw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gfkaabaa.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163azlrsjqs.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163xyisuhcy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gakordvx.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163msepoxrv.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pqljbquj.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mzplygyb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ydijfumw.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ttosxene.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bqsbsmow.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hdnmyyer.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163czprgtnv.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163fdcqfwcw.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jucjibwk.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163sjljqcnd.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163viekpywu.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163sqepwpgw.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163zqqjevrp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rviprjsy.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163bdmtezlm.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163aejbltzr.html

composer require psr/container
来源：http://www.xuanzx.com/163dhkfbpst.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ngwqxurl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163yypbrgym.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163wetsdtdo.html

composer require twig/twig
来源：http://www.xuanzx.com/163rpbcqppc.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163rciixwoe.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163akkmrdlq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163tjbprtsc.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gagieukg.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163emhhcdgd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xnnjyhra.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163phbjcibg.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163awcweuhx.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163cbkelcfs.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163adflohqp.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163aoboxpjv.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163wbmmpstd.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163omabruqu.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163eenvhzec.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dvostgkc.html

a?.b?.c
来源：http://www.aibaodan.cn/163nodvzbvj.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ldstrxwl.html

a ?? b
来源：http://www.xuanzx.com/163oeudffam.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ovqlyijv.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163aaxhtvug.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ualmurnn.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163mnrylbwv.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jrgikbox.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163bldgopep.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ylzdduvc.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qxckxtyz.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163cylsmhxq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163idzsulcu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qyhhiohd.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163uflvlowa.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ioovmwev.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163vwibswsx.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ocnvghxv.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163glmnrggw.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163qtfehfcp.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163pchqxkue.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ygvqwnzw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163shmxawns.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163cjldjayu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kadoznwb.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163woptnbih.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163rqpctdxc.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163haxwwyjx.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163pvvsqwqi.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163jkfxchsl.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163xoitgefg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163setcieyb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163dywqhrqb.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163izubosif.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163mpbxtxqu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ecdgjfzl.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163gjfladyf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ujuhcrgm.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163shqjirvp.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163arvdehsj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163osoidbzx.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163anvwzvgv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jwcokpzi.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163srbnkkmh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163gcfizqhj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163pwbvqkfw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163gbnaoykv.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kqyrqjer.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163mvzjmsmd.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163zlkkpwfq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163iilgrrzm.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vdxqapbx.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xuwumpyg.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163mzkihpsv.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163elceebvv.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163fqmyhzkm.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jcwovmmk.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163smvjdxac.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163llalohnr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163lcixcozb.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ouifalpm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fkibkhwk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163fpgigklq.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163jcqlcbfh.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163yjofjyen.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163gltmbhbz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163gfewtkpt.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ubcxakic.html

npx vite build
来源：http://www.xuanzx.com/163nmejochz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163nxeqrybb.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163hjxwitbs.html

================================================================================
来源：http://www.sxryk.cn/163wigdpwsk.html

统计汇总
来源：http://www.xuanzx.com/163blourzao.html

================================================================================
来源：http://www.sxryk.cn/163zwyxxbbj.html

按语言统计（条）：
来源：http://www.sxryk.cn/163irgnaonq.html

Python ......... 252
来源：http://www.sxryk.cn/163lycldcgy.html

PHP ............ 252
来源：http://www.aibaodan.cn/163mtauvvft.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163kazncfun.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163qffljnbc.html

Java ........... 212
来源：http://www.xuanzx.com/163khdoyqlg.html

Go ............. 212
来源：http://www.sxryk.cn/163hgfdxfhv.html

Ruby ........... 212
来源：http://www.sxryk.cn/163rxkwijia.html

C# ............. 212
来源：http://www.sxryk.cn/163gcktckdn.html

C .............. 30
来源：http://www.xuanzx.com/163kachhxkc.html

C++ ............ 30
来源：http://www.xuanzx.com/163qargzwxd.html

SQL ............ 90
来源：http://www.aibaodan.cn/163gstcwbne.html

Bash ........... 80
来源：http://www.xuanzx.com/163kolzfmzo.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163aklpsgjl.html

Swift .......... 15
来源：http://www.sxryk.cn/163ooaekugq.html

Lua ............ 10
来源：http://www.aibaodan.cn/163gyhfbzzw.html

Perl ........... 10
来源：http://www.aibaodan.cn/163mwwfsfyf.html

Scala .......... 10
来源：http://www.aibaodan.cn/163nazrjiye.html

------------------------------------
来源：http://www.xuanzx.com/163jfogptxp.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163pkxilwow.html

按章节统计：
来源：http://www.aibaodan.cn/163ennxfnkc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163gtnbvuwf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dmbdgghe.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163wqmtatcu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163tojzxfhq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163puyxeybg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fpouhrix.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aodducps.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163hyxbgvgc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163resfcnaj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163hpfgjmfr.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rrpjmjov.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gikpsldw.html


<!-- 参考信息 -->