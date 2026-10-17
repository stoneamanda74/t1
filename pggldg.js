外链999!wailian999！

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163aprvczpx.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bckzjfgj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vpyaipur.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163vywvwwzm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pdyrkbwf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163oqmatpok.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163sopupftt.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163hqkwphpr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163slwqfacp.html

================================================================================
来源：http://www.aibaodan.cn/163mnwcgdui.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nrnosyxg.html

================================================================================
来源：http://www.aibaodan.cn/163djbkmsqm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163tusdrncy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163locpkowb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fksdxjic.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gunuinor.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163yrilkpaw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163firhqhrw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ofkhkhuy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wxsfzxsf.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xrdbrfhd.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qrsufhbb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163mqexwyqk.html

{**a, **b}
来源：http://www.aibaodan.cn/163gqzzkbdo.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vfwnjpgf.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bqqeqhtb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zjztedkm.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163mzccgect.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tprzabew.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zfilhewn.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163intgenhq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163knnwkelc.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zuntsfme.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163axobyutl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163pikprfaa.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hgmuauec.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dobmscjj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tufnzyhu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gzqfpgty.html

defaultdict(list)
来源：http://www.xuanzx.com/163ltqvqsoo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mqvrlsun.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rmdsdrmm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163egkhkkra.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uuzcmphy.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vbhnvzoo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rjivvkqh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163awgxtluo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ymtucndk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163dulkuwyi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163awntdriq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sehpugiz.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163czuzfejs.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qjxlqqnf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ajeaqldx.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163odgdjyrw.html

list(zip(*m))
来源：http://www.sxryk.cn/163fzowsonm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ryatdmtj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163slshkcwg.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bqmzoond.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163noritzsj.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163hjjwroem.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zbezucfe.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163feiqvttc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163dlbfdzes.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163mvpflate.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bfpbpnft.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163npudpsux.html

UserId = int
来源：http://www.xuanzx.com/163cheaubws.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163kakuovvf.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163maytorrk.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163svpznwgg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ilhfoiqe.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lqxkdvqw.html

python -m pytest -q
来源：http://www.aibaodan.cn/163zrflksuf.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163gqzyxkst.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163wctfanoa.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gzopxogr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163amjdyazm.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163xtowlewg.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ufxxqnkr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ysfotxto.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163duexcarc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163uccjjjyp.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jcrciptm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lkijcptr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ywpvyeez.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163gtibnhcu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163bewdekoe.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163aqgseeaf.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163kbuawcil.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lnphnnlw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mrouvjpr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163gviyyset.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wscynncs.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163atmudwhb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163opshbpfj.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ylhcxpmj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163edjpsifc.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163rmgyhtgv.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hsujxqog.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163focjwdue.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fysemapm.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zyltmlia.html

?string $name = null
来源：http://www.aibaodan.cn/163kzuqmnfd.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163rduklahn.html

int|string $id
来源：http://www.sxryk.cn/163ytsgkjuz.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163dnqsgybz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163csswfjfy.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163xcmumhyu.html

public readonly string $name
来源：http://www.sxryk.cn/163glcyjvaq.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163rmksjqyq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tbdgcpcw.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163xjkwjgip.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163skywszqz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163pscbemfu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163svhntpta.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163myefqgax.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163vhyzflnp.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163nsfoqtke.html

$obj?->method()
来源：http://www.sxryk.cn/163gyzfyzim.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163grsorlba.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163useczxwh.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163hscypxmc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fkgpjdtl.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163wzflmixc.html

"值: {$a}"
来源：http://www.aibaodan.cn/163mppxzvwh.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ykgbiwrz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163czulzizj.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163gdvkdzzv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163viivebyc.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163mfiqufmg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ttjqqajt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xqovafqt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cgpvfyzk.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163cugjmrxh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uilmhtdf.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163pcqfphwh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163mbvxfgvw.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163whtaihje.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163hxmqexdf.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163idxdmlyt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163yjubflzs.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qiirjzzv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163azboddrl.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163honzfzro.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163lcetwdgf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pijdlvzd.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163nkbwwuzy.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163vidxhjnr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163skcisajf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ennfcajj.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163mxyyhxur.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163yeghcoqq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163ffijoevo.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163hykpjuya.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163adngfysr.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163gbfdendg.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163iyaorucy.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hakscwci.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163vaqujawq.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163rtsadgqm.html

composer require psr/container
来源：http://www.xuanzx.com/163zkfaykuq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163gaumilnp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wrfbulqx.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163tryzmkcb.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ybmxrzdw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163jxnhalad.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163eayvmvej.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cdesreiy.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163hidionrv.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163bxejqwcc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163dntqbqpx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ymbhtjff.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rmzqqgzs.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163rzhuazgb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163iyiyndjx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vuyedwhl.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163pwkbcnsn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163gpmxwgdc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wvrymmdw.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163eeacxxum.html

a?.b?.c
来源：http://www.aibaodan.cn/163lqhvvcoy.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yatajivj.html

a ?? b
来源：http://www.aibaodan.cn/163ykngmqja.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kpcbpshw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163dcpsqcek.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163wqnwjiey.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163xbonyzik.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163kwrwywbn.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163cxrfrfjw.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163irvuhjup.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yxzjnokq.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ylarpocn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163alalrzey.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163tbsnokgm.html

structuredClone(obj)
来源：http://www.sxryk.cn/163kapfcyoi.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163xxyzuoep.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163pbgtnhoi.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163seyqgpga.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xfpfzmin.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ljxaocrh.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qixivzxe.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163xzqtayoa.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kxyzjwiw.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ymmgvgkc.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163aajyidbj.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163asaoowjz.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163bfgjhqtp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pdmtuzxm.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163zsplbwgv.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163nyvspnnf.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qehxnbrh.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163nlixpgoy.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163phjrfmwh.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163stzxxouy.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163wreuufgi.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163pqaeshbc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163hupcnsqa.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kvxaodvi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xuspekdn.html

[U105] JS：节流
来源：http://www.xuanzx.com/163geufsxhm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163orwriaiw.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163krcqrnhm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163nnwtouvn.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nydpzurp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163smcobbyk.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163tnkilmht.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163hbfbxngj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163wqnrupyu.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ffvmiqso.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163btizfiuj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163xpqkxlzk.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163pzvjqopf.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163fadbrpzp.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163aphynrsc.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163jewalvgl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163xkdwxzxs.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vecpcknx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163eukhizam.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qvqghgoe.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163oaluorbu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kkixybod.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163tsjsiupn.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163phzbmxms.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163iblmivyt.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163duylvdws.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163gurowtwa.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163nfjowmjn.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163hngbboew.html

npx vite build
来源：http://www.aibaodan.cn/163sydeuwzx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ooxxixza.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ktlhyxsu.html

================================================================================
来源：http://www.aibaodan.cn/163ytngkkqi.html

统计汇总
来源：http://www.sxryk.cn/163emhsgtrg.html

================================================================================
来源：http://www.sxryk.cn/163yzzxrvcu.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cofciowx.html

Python ......... 252
来源：http://www.xuanzx.com/163leugtjgf.html

PHP ............ 252
来源：http://www.xuanzx.com/163uwwyqrdz.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163pmqcqnqb.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163vtdyszst.html

Java ........... 212
来源：http://www.sxryk.cn/163wusmadyg.html

Go ............. 212
来源：http://www.aibaodan.cn/163vyisuxvg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fuafjspc.html

C# ............. 212
来源：http://www.aibaodan.cn/163vuaahorg.html

C .............. 30
来源：http://www.aibaodan.cn/163tyfvbomp.html

C++ ............ 30
来源：http://www.aibaodan.cn/163hfrnrvjp.html

SQL ............ 90
来源：http://www.sxryk.cn/163wlmggyle.html

Bash ........... 80
来源：http://www.sxryk.cn/163lohglptp.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hbuxdizl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163beqdlltl.html

Lua ............ 10
来源：http://www.xuanzx.com/163ryrqxjcx.html

Perl ........... 10
来源：http://www.sxryk.cn/163dzhllzdy.html

Scala .......... 10
来源：http://www.aibaodan.cn/163qskgffgx.html

------------------------------------
来源：http://www.aibaodan.cn/163vdtofsnu.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163mffvyjwg.html

按章节统计：
来源：http://www.xuanzx.com/163qskisurb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ewmkrcfc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163uvvzvzpi.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163josdeqxx.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ewcreyfb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163deryqrjq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ccgukaig.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jmqmacgw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xtvyrkxc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wuanxfin.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163xthbvucw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hngthhml.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vkebxtdl.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jzjotufk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163essjoqkd.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163csmwcgkv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wvvjupwg.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163cnefqpcj.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163mkbihnxu.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163hrrylrwc.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163jnvqfyrj.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163cntxnpte.html

------------------------------------
来源：http://www.sxryk.cn/163luhepefb.html

合计                                  2106 条
来源：http://www.xuanzx.com/163qetestix.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lbmqzhxy.html


<!-- 参考信息 -->