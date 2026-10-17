外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tinuyqar.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163jboeufts.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ewtcsdfj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163gcnfsnre.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ueydpgtn.html

================================================================================
来源：http://www.xuanzx.com/163gnsdvycc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163csrnueov.html

================================================================================
来源：http://www.sxryk.cn/163uqbzttln.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163paezprhj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ooslwzfs.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163iuvyrbtv.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zzlmuxqy.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wvobidzy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dtejajnb.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163iykfluyj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163obfkvoby.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fiqqhrvy.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lqdaszrd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163nfzmkffl.html

{**a, **b}
来源：http://www.sxryk.cn/163bmgetomt.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163evvspbeg.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fxjrbvdr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wyfmmvbz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163osrmdoxp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163kiymfwql.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tltwdang.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rriwltyw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ecktpich.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oigzkmnm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163jrsvrfkj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pbmycuya.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jwxetkgb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163mtshlhoq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163jbdyfwrl.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163kxlaqzyg.html

defaultdict(list)
来源：http://www.sxryk.cn/163sulsutht.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vykbnkgd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ylwqwppj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163katwxekw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163azbctrep.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163pysbcysd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163kchvcgbv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nkzzmcvm.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163aeakiplv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hltfknst.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163oymuvhxr.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163xmzkihpx.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163yuorjolz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ogseqxta.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uzxsrugs.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vhpqxccy.html

list(zip(*m))
来源：http://www.sxryk.cn/163rdvmiubw.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jgsmvxat.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163lqhjkklf.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163nglquryx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mrresnvz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163xfhkjwta.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zusbfzml.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163gadbusdj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163whcpbozt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163vpgnpfya.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ptgklxzw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163tbsslyms.html

UserId = int
来源：http://www.aibaodan.cn/163vwoxirts.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ghuymldh.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jqqboofu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rjrvqjku.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mqkvhztl.html

[U31] Py：单测
来源：http://www.xuanzx.com/163dizmwpib.html

python -m pytest -q
来源：http://www.xuanzx.com/163cgnfbdey.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163cieaoypn.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163qerbglyv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wjtlmtow.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163omousvza.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163hapmonpp.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163lvezauyj.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163sskdpfjq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163nswkorem.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xfwedrxu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zfeyztty.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163xqrogowk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163zrwsxhrq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zihdgufg.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ddncpmrk.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xgjlnmpn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163iuuingsx.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dtbozezz.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rvnejmgy.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163okoffnhh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163kzwwefef.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163pqfjvlib.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163inchtdso.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163eapyjzju.html

namespace App\Http;
来源：http://www.aibaodan.cn/163wqfgjmdq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163lulxszuz.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ifetdtly.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163dlhflgfp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jjopmlgz.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163sqfdmyiv.html

?string $name = null
来源：http://www.xuanzx.com/163ulavpary.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163clxwoisd.html

int|string $id
来源：http://www.sxryk.cn/163curbdkyd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ccmhxoht.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xhbozqiu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163kafmxrpj.html

public readonly string $name
来源：http://www.aibaodan.cn/163fxalmtko.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163xetffyco.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163czrgbslm.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qjgqgzlm.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163egwcqwmo.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jnoifdes.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163evenwqey.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163srcqouxe.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mmfcgslt.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163mhmsmhrk.html

$obj?->method()
来源：http://www.sxryk.cn/163bfnxzish.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pbhxqgbz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163buepjvsi.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vlvuxlev.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163viftmcee.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163yrrfywrr.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ohejekfe.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163uayfljba.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163dxvpwgqp.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163aqtojkpw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wyirnxqz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163umzrgiay.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163xughqqyt.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163jnmsplyl.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163stzoezbt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163yhttxqgj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jyxvafmg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163isyhnawb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163lbcawcur.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163zhvvfkfg.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rtlapsmr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wknvbzyk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163soycjuyx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163kvegpxib.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163pktzynhh.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163mibyrdgy.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163wnmzakwm.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163mlgfmzvv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163abnnklar.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mccdfklz.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163luyjgdaw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163pbltnwdl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163fiybgaat.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qjvwyaqw.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163oykobtbq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163bzlyerji.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xqpsknau.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hvmjmezw.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163aqmkdusu.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163hlbkfdeg.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ctyqdcxp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163icfwomlx.html

composer require psr/container
来源：http://www.aibaodan.cn/163ihqvknki.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xvzyzpfc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163xsvlvjcy.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163sisvzvst.html

composer require twig/twig
来源：http://www.aibaodan.cn/163dyuczlce.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fskppfnd.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ngkdqiha.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163mbpbjlxq.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163zprsbvsc.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163vcmzmxyv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ytrkeskj.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163bahelcst.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ijkrdbgl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163koubqhnx.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163kjwakdpz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ozcafbfc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ujyqvrdz.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xzkuwkbr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163kucrihrd.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163dexwjsfq.html

a?.b?.c
来源：http://www.aibaodan.cn/163azgjjzke.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163yztoqbps.html

a ?? b
来源：http://www.aibaodan.cn/163myfpguoi.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163xjhepbjz.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163eecdnagm.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163tkiabegq.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vesonypy.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163sfmtelrp.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163iwwptaoz.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163uketzbmo.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wydugdul.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163bofgtdxy.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hwybqsmq.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fhaztcrn.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ybxeboob.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dimuxevf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163twwvcmwz.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163knpjejpj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163tbbutejs.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163zkanpknj.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163inddubhu.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163evuhsirw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163tqnzmrqq.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163tltycrlf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kvjibnvd.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163nzbmknwd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jrqrvcwc.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163aengqrsv.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163rbyuolrn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163bzjtikcj.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163aixmqqep.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163wblrgkqn.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kawexovv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163squlzpqf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163lvlnnuky.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163jpwimwcr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ighskbox.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ppxugawh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zjqrgoys.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163hpexxfoy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163qwkgwfev.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163sketzsls.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163zcwlpzxp.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ozwxctsl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163xlceowrj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kigjmwhk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163qmijbnar.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163yleoqjgc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ftpsrsbq.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163hckjfgmv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163idchrysu.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163georsarb.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qgvqysbn.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163iymzulsm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163nftgaesm.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ybxmgrwt.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dvrwffuj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ybvomilk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hffpbgyc.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163xbaxptzo.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hvcozrqe.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163anzuvuav.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163atifqjkc.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163nufirlvb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163scwxbczj.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163kqcxcnty.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163fxecfwom.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163uefqnccg.html

npx vite build
来源：http://www.sxryk.cn/163fufftjyi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163hkgxkloo.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163rmgpmqhc.html

================================================================================
来源：http://www.aibaodan.cn/163fvrmjtjr.html

统计汇总
来源：http://www.xuanzx.com/163hfiqhpzh.html

================================================================================
来源：http://www.sxryk.cn/163yrycajoy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163cqpcedgb.html

Python ......... 252
来源：http://www.aibaodan.cn/163pfepgakb.html

PHP ............ 252
来源：http://www.aibaodan.cn/163auudwlnt.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163wqcumoad.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163kudniquz.html

Java ........... 212
来源：http://www.xuanzx.com/163upngryud.html

Go ............. 212
来源：http://www.sxryk.cn/163lfhlzzmm.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ywcdwfkv.html

C# ............. 212
来源：http://www.sxryk.cn/163mkqorsus.html

C .............. 30
来源：http://www.xuanzx.com/163fiufbyfl.html

C++ ............ 30
来源：http://www.sxryk.cn/163qzefnefu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163rekuwqvc.html

Bash ........... 80
来源：http://www.sxryk.cn/163sjktehvw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163urpgrbuh.html

Swift .......... 15
来源：http://www.aibaodan.cn/163gqxanoni.html

Lua ............ 10
来源：http://www.sxryk.cn/163iqinjzem.html

Perl ........... 10
来源：http://www.sxryk.cn/163lhlavfwo.html

Scala .......... 10
来源：http://www.sxryk.cn/163feebjnqi.html

------------------------------------
来源：http://www.sxryk.cn/163gdghiydw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163qddqarys.html

按章节统计：
来源：http://www.sxryk.cn/163flzbjzel.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rwklfitk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pjjihggx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bglfeulw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163bwbbpsek.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163yruiapca.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163xqytexzq.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163osjjztbj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163clqkifuf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qjrvwhly.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gamjsapt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163purpvjuk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qnjovmzv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qfqmpgsn.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163bnaguejo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163kcxyxaev.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tdfzbtpu.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163lwudeuyk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163ojmsntio.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163rmvqmfde.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163pjmbjrbv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xoaxljed.html

------------------------------------
来源：http://www.xuanzx.com/163ocraduhb.html

合计                                  2106 条
来源：http://www.xuanzx.com/163jcddbeqx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uajhaiep.html

使用提醒
来源：http://www.sxryk.cn/163ogtxcasg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163crwhfovz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163clxltsso.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163anungilf.html


<!-- 参考信息 -->