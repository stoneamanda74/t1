外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163yxzulczu.html

================================================================================
来源：http://www.xuanzx.com/163fabqkzvl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xfancjaf.html

================================================================================
来源：http://www.sxryk.cn/163zyensadm.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163irujoxzi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mpezzete.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ozcuoxsq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163frxzosoq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163wappwuyh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163afyujknf.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163msdcxurh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163bibbcuqo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163jexaucfb.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163alcfqfdn.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fesqodkb.html

{**a, **b}
来源：http://www.sxryk.cn/163mbdfotth.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163nnjkusnm.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163tdpilrts.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163efcqsoyc.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kmwheooh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163crmrhdsm.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163uqbnelmt.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uejldvvi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163wmziviab.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oetqgalx.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zmboucof.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163yrxckekq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163yldixaps.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dpssphht.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163golzvnps.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163cczpaxwh.html

defaultdict(list)
来源：http://www.sxryk.cn/163rgkccxdj.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163kvzsciiw.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163uuipvbdl.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163kfsrwxlz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wofedmyd.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pgcgxypu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163udsjmqjx.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163llblwhbg.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163grgdovsj.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163osupjoal.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163pxzbgxne.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163dyifxvhv.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163rxuxnyid.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163figydzen.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pnlzwylz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163nyzsgclo.html

list(zip(*m))
来源：http://www.xuanzx.com/163ckxkzlpj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163qgcplcqe.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163rbamqpkw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xdgnemgu.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163bgwhsjcv.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ozevdthp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163eautmvtm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ynwuxvsy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163raujcgij.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163bucejmyj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zmgrgjmr.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dlqqxexj.html

UserId = int
来源：http://www.aibaodan.cn/163vqrhwkgy.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163xqtftkuy.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ldhiyfzm.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163bmaonwsi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rgqddtvm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mumltmdv.html

python -m pytest -q
来源：http://www.xuanzx.com/163xqfncgwc.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ipxussev.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163qwzemxse.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ytucwrfw.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163genymkcd.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163sgmjdyfl.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163fkzzgyut.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163gfmzsgko.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163bnwxhabl.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163bgmquiqy.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163qbwokyqw.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163rxjzixvt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fmsmfrsa.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163bnforkft.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163dboigygr.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163goqhdqvm.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163cjblcfnm.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pvgihnkj.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163grjodnqj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163pxwnkbey.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bmmhgjjk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xtatveyc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163wiorueyz.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wksexhco.html

namespace App\Http;
来源：http://www.xuanzx.com/163xnqmxmfn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lzucyfte.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163fvmjavat.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163reqknszk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uorwmtyz.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163lwgsovck.html

?string $name = null
来源：http://www.aibaodan.cn/163gqknomzf.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163idhzjzzw.html

int|string $id
来源：http://www.aibaodan.cn/163wwathduw.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163tkscydab.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mfllrjzy.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vhwzzavi.html

public readonly string $name
来源：http://www.xuanzx.com/163hrbglour.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163wmafhvhz.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rybkhxit.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163dvehprmf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163cjgoipmb.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fogqgjtt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163zhtvbhxm.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163adzuavgt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163qvhsyfye.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vmxjlmca.html

$obj?->method()
来源：http://www.aibaodan.cn/163bfaaqvym.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ydsdjdly.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163wjqnmafm.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163pwddbpiv.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163puppkiga.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kjwibrwn.html

"值: {$a}"
来源：http://www.xuanzx.com/163jejxkeqw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163xfnfrriu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163jrljdmws.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163uctvswuv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hkkffker.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163euhandrv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163wupfbnhf.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163splyjvic.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163dycfqmns.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xqjbqunz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pxciozir.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163nejadrli.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rpzztjfw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163qexuvpun.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163reqsnlhq.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163rgtrhtdv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ftrdlkgo.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qruqfdlk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163litjsjai.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ryxqjisz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163cwdpromy.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163hdcdzhrx.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163rmvvvpij.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163hbvyojvi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163pbmxkiyf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163hobisqqr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qffzwjfv.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163umdxusay.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rvhwgnrj.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163nkkuhuby.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163galzskaa.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ozofcumi.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qdqvgune.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163osoxfrje.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ozasiygc.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gdjcvfwq.html

composer require psr/container
来源：http://www.xuanzx.com/163raphgulo.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163gxqjppso.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yyruqrrs.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163sqjdyqpe.html

composer require twig/twig
来源：http://www.sxryk.cn/163tapkxcxn.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163sdgevmlu.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ulirzqan.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163mkpxrkey.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163btkweyim.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163pewsteop.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ihpitmbg.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163jtpfgrrv.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163txyjyfov.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163udlxnoeu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ydgmuopa.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163cmdnzufw.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163nsrnfvgc.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163qvtmwkbv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163xyapmnda.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163azdxpefq.html

a?.b?.c
来源：http://www.sxryk.cn/163ahoavytz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163vojquito.html

a ?? b
来源：http://www.xuanzx.com/163kqhmjxfo.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ybslucfb.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163nmpatgoo.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163omilpmqm.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qfpmbdld.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163mkocquoh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163hsazjadz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xeopptdz.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gyxahmpa.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163xxnhlena.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163ppvszlel.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mceiglna.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163nnvjlriq.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163clfsnncv.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163lmpzlfay.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163phkdowip.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163kqdosuck.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163awaaxqxw.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163gmllrdxb.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163umaappbh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pygbxaxn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163cqwlshdm.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xtlkwnrd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163zgfcvrfp.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nuenonxf.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163wsexzawu.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163mzurwluh.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163tghntaiw.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163nirdtesu.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163uedswnxf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163lkqjwypg.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163csvevtrx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lminfzlr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163rjtdwnlf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163hrgqugwt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163bxnigjem.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xhrrilfh.html

[U105] JS：节流
来源：http://www.sxryk.cn/163ohyecqcp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ywncvbqp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163ttbiumuc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163zahjipey.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163lypbexpj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163zzyhlryd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rqdmdlyz.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163idrkbmgz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zuvnpezz.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163reuqfwpg.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163gtrhjnbr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xrroljso.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rpndqbfz.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163evgnfxlg.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163udqizhce.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fyvyzksu.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163sbwciptg.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vqtsfwod.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hkziyxww.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pdcoofzn.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163pyoddsjo.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163qjvmtpsa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163pzwxudly.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163qhuzgsur.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ewvsxwvj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163utkgidks.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163kwejxpiu.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ywjihadj.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ycngefgd.html

npx vite build
来源：http://www.sxryk.cn/163vqqiktbs.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vszgfslb.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163iisoulvt.html

================================================================================
来源：http://www.sxryk.cn/163sxxodbmv.html

统计汇总
来源：http://www.xuanzx.com/163eorxrejt.html

================================================================================
来源：http://www.aibaodan.cn/163fjmkuyzs.html

按语言统计（条）：
来源：http://www.xuanzx.com/163gjpyixkl.html

Python ......... 252
来源：http://www.xuanzx.com/163iekxsqsk.html

PHP ............ 252
来源：http://www.aibaodan.cn/163sothzmal.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163yabfswqf.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163dwvkjaff.html

Java ........... 212
来源：http://www.xuanzx.com/163ylvrdvfe.html

Go ............. 212
来源：http://www.xuanzx.com/163mwvlotiu.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lisgijhd.html

C# ............. 212
来源：http://www.sxryk.cn/163gekjchbg.html

C .............. 30
来源：http://www.sxryk.cn/163mgxndypd.html

C++ ............ 30
来源：http://www.sxryk.cn/163xgygjmcu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163mmqsqmfl.html

Bash ........... 80
来源：http://www.aibaodan.cn/163vuczhsfr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163rrfidgav.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ufawwdds.html

Lua ............ 10
来源：http://www.xuanzx.com/163pjtpywsm.html

Perl ........... 10
来源：http://www.sxryk.cn/163qyswxhnl.html

Scala .......... 10
来源：http://www.aibaodan.cn/163rsmigoxk.html

------------------------------------
来源：http://www.xuanzx.com/163icrqjpyh.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163vrdgceqn.html

按章节统计：
来源：http://www.xuanzx.com/163katmevbm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kzabihms.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xbhqhdvk.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hbmlxpqu.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163bbdbuuiz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163hbgfwsxc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163axplpjwy.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gesjpdxq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163roilnsyt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hwujbbsw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163flblrjxz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cijmjogu.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pmzheqzi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cnzvvwqp.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163gloelugv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163jsibccax.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cvlgmayw.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163hnvhasnr.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hnivrnvh.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163phckgfks.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zuanutfs.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163gxphaqep.html

------------------------------------
来源：http://www.xuanzx.com/163hhcreoxh.html

合计                                  2106 条
来源：http://www.sxryk.cn/163edlowtdw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mjubtwzo.html

使用提醒
来源：http://www.xuanzx.com/163pvogezqw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nvdnpatv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163uvrfjegf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163cogojecf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163udgxegae.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163kcduhdzf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xlphdpco.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163gkozxjky.html


<!-- 参考信息 -->