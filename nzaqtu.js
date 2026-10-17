外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pxseapjz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ughhjsza.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lizdhesg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qcoqcmvn.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163qlmudsro.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163cvqdgdml.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ohfokrvq.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vphlgrbq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zvzhxamb.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163essjvyas.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tzftcixa.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163qjausdcw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vzaplalx.html

================================================================================
来源：http://www.sxryk.cn/163ncenmnqp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sigdqehi.html

================================================================================
来源：http://www.sxryk.cn/163tgmefeos.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163umwxslfe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163xkpaljfy.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xclisrad.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gllufrde.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qhmffugq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163nywmgfvn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163okdzkkwe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tsdjpslf.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ygzapcpd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163necbbrqz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lzfdxjgw.html

{**a, **b}
来源：http://www.sxryk.cn/163sjmovmvo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mydtfhqm.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pdbmapxg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163tumemgwj.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ytdxryxz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163aghivhuc.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163sciiloup.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163oksvhjwz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qkolmrnw.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oyuizlro.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ppxdoiks.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zsiihbjy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jnibevvh.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nkvqmmjn.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163jbtotjtx.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mshvuuta.html

defaultdict(list)
来源：http://www.xuanzx.com/163szqewgae.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163fhspzplm.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163dacvtbks.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lvqmxsvl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163doofrwtp.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163esjokttt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vrmlulwh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163fxzvwzbp.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dwawqcxi.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163chveidlg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163ucacxyjw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163pjgjnrzh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mtqknowj.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163qoiphjui.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ukkiwhrg.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vmvhnrja.html

list(zip(*m))
来源：http://www.xuanzx.com/163xinfxajf.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jsshubsi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lnvvlqkb.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163yhaavbae.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163nndyslhl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qqakhinj.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rrrbywka.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jhdiffih.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163szcrlyag.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ldvtseeq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163pvzpvzen.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163okdgjdoa.html

UserId = int
来源：http://www.aibaodan.cn/163xvfcarnp.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cbwnpken.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163rfglkzmv.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lgvkiwhs.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tczckpud.html

[U31] Py：单测
来源：http://www.xuanzx.com/163eihfknna.html

python -m pytest -q
来源：http://www.sxryk.cn/163fzsvtwoy.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dnzmqtyl.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163idxmqrxq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163kugtxfwf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163hohgellg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163stfazrpa.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rckbsuxq.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ztpunhen.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163yjhshyjy.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163fteuuarb.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163omtcelna.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163hfvraamj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163zvsegrab.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163lmyzyjtd.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163lxxwdtlf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163unlpghly.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rcdlwmho.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163fccsdkqd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kfxuvsxx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gmdhhpoo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bxuemqkk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163hilradid.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163gruzcvxv.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163kdwpxpqy.html

namespace App\Http;
来源：http://www.xuanzx.com/163mezbwlku.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163bgaiktys.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163aynalfrn.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vnnxqwjm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pciiiijo.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163sitprwqa.html

?string $name = null
来源：http://www.xuanzx.com/163eacfjuaf.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163jbbuwhps.html

int|string $id
来源：http://www.xuanzx.com/163piitsnrl.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163efhtraue.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rdrnaqaz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hsmwylxo.html

public readonly string $name
来源：http://www.aibaodan.cn/163pzowsnzk.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nmsmavfz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163vkehqooi.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163nhzqphex.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163duzqfihn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zyrufugs.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163erfjvzll.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qpbmmpqt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163squcqhap.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163epsnmwou.html

$obj?->method()
来源：http://www.sxryk.cn/163lnpwrqie.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vrthuqkn.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163tykajczr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163hvqcxxrt.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mfnrgipe.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163yujvgalm.html

"值: {$a}"
来源：http://www.aibaodan.cn/163azxdnkqs.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163fvkezifz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163falligjk.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jpwwraax.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mcdkkzql.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163nrqplqqw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163soixykbg.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163muimuazk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rncrbalh.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163lltuiaqz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163ayuvyuqw.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163blbaczpm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163rxdmjdun.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163inuwowig.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163riguysdy.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rqevoapx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yarvssks.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163bllxfpqy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163vezqubdo.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ddeigpmt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163qwumzifa.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163xwyifnql.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163kadzvrec.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vqrgpjiv.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163atpefjjr.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163xnlrtecl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163ylnkducl.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163gxkyypvm.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163xzclzzvh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qxzsxwkv.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163txpklljq.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dtgrlxtx.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163jesedeqw.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163docheclf.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163mdkllgvz.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163fwdsebyc.html

composer require psr/container
来源：http://www.sxryk.cn/163oxgnavlg.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163stcljbuk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163egfqzwxf.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163oaywvlfk.html

composer require twig/twig
来源：http://www.xuanzx.com/163clmlafzk.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163umerpltr.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ahpjorwn.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163skgypskq.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163gavallev.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163trsskntm.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163mfloomhm.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163gecetrbs.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163bfhkmdbk.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163jwwswceq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163lofaykkc.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163sopluwjl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qclsbgwd.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xdnskiid.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163jfcakfix.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163szlultfn.html

a?.b?.c
来源：http://www.sxryk.cn/163xpeajyaq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163hakkwitj.html

a ?? b
来源：http://www.xuanzx.com/163snektbok.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163wnpwamhx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163dzpoaubi.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163fhjnaqop.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163cwrjguyw.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163jlamrznr.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163vxzvpkqo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163ctmeqvid.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ojuqfnrp.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163enktdhuw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163gyihmocx.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163cftgfhwl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163jtpmdmdn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163bjwqgdax.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163stmvjpiz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ozdxglvn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ysyhzstj.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163cmjqhjkh.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ruzxcwjf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163kgrieopj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gtephogu.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163mlgoytwm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nvemnxmq.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163uryhbepz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163acaeaebp.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163zwmjlnpz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qjvkentf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163glxyrvwj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bqkzjcdg.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163jamcyjnl.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wvmkjcdz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163nwjvnliy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jztmxmwu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163cnyhpopk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163bczzwxxi.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ydwslrcz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ulthyypy.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ocwxkzzj.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qknltrst.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163knqbtmqk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163qcvnjdyb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163roqqcqit.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xuxmundw.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163hvrrphgw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pspotbnj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163sxqafrlq.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tojcyegv.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163gjzdmhdh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163asxlhbhv.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ljejibfr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wnkmzhwa.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163csbijnbr.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qedahnhh.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163peapnrxc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hmrrqlqs.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163lstoolww.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fdgcglta.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163tvdfnwgb.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163xhwltygc.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163hplzucuq.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ugblwkac.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rjebdmgf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163izunkfqc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163duxeypai.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163hhubxmzp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ruwdmswk.html

npx vite build
来源：http://www.xuanzx.com/163ycuacllu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163crgcqdqp.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ebofreog.html

================================================================================
来源：http://www.sxryk.cn/163guxgcfkz.html

统计汇总
来源：http://www.aibaodan.cn/163ajrdbmys.html

================================================================================
来源：http://www.xuanzx.com/163ibbdmsag.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kvxlorti.html

Python ......... 252
来源：http://www.xuanzx.com/163kfbnpazn.html

PHP ............ 252
来源：http://www.xuanzx.com/163rkomojoq.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yconuwuo.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163reivseyl.html

Java ........... 212
来源：http://www.aibaodan.cn/163izpyggci.html

Go ............. 212
来源：http://www.sxryk.cn/163zzdqgnec.html

Ruby ........... 212
来源：http://www.sxryk.cn/163whuwrjbc.html

C# ............. 212
来源：http://www.aibaodan.cn/163jvgwufou.html

C .............. 30
来源：http://www.aibaodan.cn/163saqtpvlu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163dmmvloeg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vgsasnkn.html

Bash ........... 80
来源：http://www.sxryk.cn/163sqrfauig.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ezgjgvul.html

Swift .......... 15
来源：http://www.sxryk.cn/163asmhkozb.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sdueovwj.html

Perl ........... 10
来源：http://www.xuanzx.com/163fksgodgd.html

Scala .......... 10
来源：http://www.xuanzx.com/163lohzzzvw.html

------------------------------------
来源：http://www.sxryk.cn/163vgjynpak.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163yjazheik.html

按章节统计：
来源：http://www.xuanzx.com/163fjknuhhr.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bitovjzb.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vqcfrgsv.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ptfiixle.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163klctjbdq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wnhdmmkh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kwqdwjwc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vhclbboi.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163jjjswfku.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rkwtnedr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ybskksqg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qwdpyxdv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yluryxzv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eqgkiaja.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pylprzeb.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pdcjakhh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163nooxxjnp.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163elmlipai.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163tibfazxn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dparufza.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163jhousjuw.html


<!-- 参考信息 -->