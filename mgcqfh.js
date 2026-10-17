外链999!wailian999！

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bnegdvyi.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rdkybpvv.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qdaydpwt.html

{**a, **b}
来源：http://www.aibaodan.cn/163ednoxgbn.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163pdyvrnxz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163rsnntaap.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163vkymiqjx.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163odfjdvxn.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163bswdkujd.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163jjeqhbnm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ysrstdux.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ywuonwcu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163tmjvsjsb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163tbndgudd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ggjqgsvo.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vuivydke.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163wssirsng.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zvhjsxbs.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qzcyusyx.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ykdkmzft.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163baluhbon.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163qiqerwwr.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163sbcrfjdx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163duryaagy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jnuybeva.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dswerboh.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163xaymvgzt.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ackipkzh.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163hsjggzng.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dgaenztu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ehexdggd.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163axfucatv.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163osgeboud.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163gzgqfpdt.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mnowzpef.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qginxrxp.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163unrggyry.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163drgledjh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163czmouaep.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163mkvtcduu.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163eeurfjai.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163tppzouxv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xnjrafbq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ptczboyo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163yoynwokm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163blatjkkc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163zflanhlp.html

UserId = int
来源：http://www.xuanzx.com/163hdjdfmmt.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dqgjpwpw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163mlovanzk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163sxmxsymy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163adqtmlsh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163fmpkdurg.html

python -m pytest -q
来源：http://www.aibaodan.cn/163szktkfok.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xtcaeshz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163johnjqfw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dynkshpx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163evfgelsj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163atdsecrl.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163yoycfwcg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163iqtjlwuz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ahtzckpa.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hwdbfksi.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163znfowesk.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163dhlxrevc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163xjraceux.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163kgunpber.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163bgckxzko.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163jjddhmcz.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163sjfcwwxj.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pyrugzkc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ldwzhdjb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163xwhlongi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zzmqjvel.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bzfzjvag.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163urvuyhde.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163sdwwwlrc.html

namespace App\Http;
来源：http://www.aibaodan.cn/163hbljoeoi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hqzzswws.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163eivumuar.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163srehwzch.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lkrgekpi.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ylijavgg.html

?string $name = null
来源：http://www.aibaodan.cn/163prokrgfe.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163thsrdfcw.html

int|string $id
来源：http://www.aibaodan.cn/163fumdeabl.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163jbuthwww.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163szvwuebs.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163tcidlxqb.html

public readonly string $name
来源：http://www.xuanzx.com/163ugunryvd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163chgsmxvy.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xncbkkff.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163fhxnewbo.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jckjpuaz.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163iwzcifzz.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dxcftvar.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163orpworfp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163jfrixdfp.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163brsnsrow.html

$obj?->method()
来源：http://www.xuanzx.com/163rptbryqg.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ykdopouh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163gkhvitdr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163vwljvnbm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fpwnxupr.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ejevllzv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163tiihgdka.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163icoenxky.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qoblnhna.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163qwflblqz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zxqyiicx.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163pijgfhas.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163njffsyom.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163yqadopmd.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bempjkzh.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163fnjdckim.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kghhdgae.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rbushxaa.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163gvvjiupw.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163mtmznvoz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163tctczekr.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163teybucpo.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163xmkznxhl.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163iqglqapo.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qwzxuluu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rssfmdng.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163vzybzwlf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ifivfkgp.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163chffssxq.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163jkkspggw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163royrlvco.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163idorrpqe.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163rrindrkv.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163akdmxxru.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163roqhjcbg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163adrsixbr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163czjimfqv.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163klzbycma.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ykjspnhy.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163myfwhbku.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163dxgptmki.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tqhzdxha.html

composer require psr/container
来源：http://www.aibaodan.cn/163lnarjciw.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163kkgvfaat.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ttjflbio.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pcqbvsyc.html

composer require twig/twig
来源：http://www.sxryk.cn/163fomomhhp.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163kmprupfw.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163konfdczp.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163dtuzvsux.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ycyzdkaw.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163vfcqzhms.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163iefuande.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vswhwuqs.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dqfrykdq.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163aycipiev.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163tphsdrew.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163chmvxxhc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163jaxfhtmp.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lyvwdszi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qhsumerm.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163xbsvspha.html

a?.b?.c
来源：http://www.aibaodan.cn/163gsayqhmh.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163lheqosel.html

a ?? b
来源：http://www.sxryk.cn/163zoenercc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163iyvpmsms.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163dlopjxyh.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163ltlklcvk.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163ypxdskzy.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ruocgncm.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163mihoesno.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163udwfiofg.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jkqwdilb.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163xsgxsmca.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163updcivzl.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163qxpgogjk.html

structuredClone(obj)
来源：http://www.sxryk.cn/163yfrpeqdv.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hlihxlfh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163eyxvafbq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163eizhoiqw.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163hhxoikfh.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163gplmijqf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163mzgzudnr.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163liaarbmj.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163bpkemkzd.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163avilphpw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vnmacasi.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163owurhnbw.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163kveyxpth.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163hftmwirn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163vgpwicvz.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jjwuyrvf.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163rlguzclf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163dgmpjoqc.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163xortzmzx.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163mxoiosye.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163haxczphy.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163kbaiuowv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163wcpyomuo.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163mdqvqoiy.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bketxthk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163pljdrcdx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163znqhekct.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xoeezrzk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163tnnbqwam.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163riwouedx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ooojdsdi.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163zqfxhcpe.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163khptcszy.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wfrpxkza.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vtknkvjv.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163dqmzgvgd.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163wmgxsedv.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163hapaerfs.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ohlepujg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vqysrytm.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163xdanifys.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163ytggqwyc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ibbyaups.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163ppshairy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lfbnfetd.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163urhaasiu.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163mqlzcghx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163wsrosdbk.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163ovzpmjxy.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163yetbjfvr.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xujoovek.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163yskyjqrp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163vuvrmbzr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163jvebpkxy.html

npx vite build
来源：http://www.aibaodan.cn/163ubhowizm.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163itoajtdn.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163zuifhsqc.html

================================================================================
来源：http://www.xuanzx.com/163xrfzdnsx.html

统计汇总
来源：http://www.xuanzx.com/163nmofgcqu.html

================================================================================
来源：http://www.sxryk.cn/163okajjmwl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fdrttfkg.html

Python ......... 252
来源：http://www.sxryk.cn/163tihpkvpl.html

PHP ............ 252
来源：http://www.sxryk.cn/163flvdtggr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wudsuajd.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163xoavgeao.html

Java ........... 212
来源：http://www.xuanzx.com/163whmqobsb.html

Go ............. 212
来源：http://www.aibaodan.cn/163emozgcue.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163hdiarnnb.html

C# ............. 212
来源：http://www.xuanzx.com/163zmfbpttf.html

C .............. 30
来源：http://www.sxryk.cn/163snpcumau.html

C++ ............ 30
来源：http://www.xuanzx.com/163sqzepyfk.html

SQL ............ 90
来源：http://www.aibaodan.cn/163syepnzyw.html

Bash ........... 80
来源：http://www.xuanzx.com/163gprqzzvy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163ngwqqvzy.html

Swift .......... 15
来源：http://www.sxryk.cn/163nwhkwbhj.html

Lua ............ 10
来源：http://www.xuanzx.com/163jhyxdkdj.html

Perl ........... 10
来源：http://www.aibaodan.cn/163igqssymn.html

Scala .......... 10
来源：http://www.sxryk.cn/163jkatxrss.html

------------------------------------
来源：http://www.aibaodan.cn/163ltbuufgb.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163kliouzdc.html

按章节统计：
来源：http://www.xuanzx.com/163hweswvps.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jouyngsg.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zvvigdlx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dhdrqrrn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163uldjvgip.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163isqdndxx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163uvvwluoi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163gvjhujmb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163obobnwzi.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ixkkyaos.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vxyilcew.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gttkvaqr.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ziqknkvu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wxdofejh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163niqimuxq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163gjsaugig.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lyghazmp.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163skizmmlx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163mikstbly.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163psiinozw.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163sblqeido.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163doszfgut.html

------------------------------------
来源：http://www.xuanzx.com/163ebgkgyzr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163dcjbcaja.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mrahjwfj.html

使用提醒
来源：http://www.sxryk.cn/163eqleickh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163srlcvijc.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163liikywrl.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163byorcdqk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163oikanauu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163adyzxdae.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163fcdhyabg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fzsktbps.html

================================================================================
来源：http://www.sxryk.cn/163phachubo.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163mxepsdzq.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163zgdcknlq.html

================================================================================
来源：http://www.xuanzx.com/163quaffjdo.html

【收录内容】
来源：http://www.aibaodan.cn/163pwxfboqz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163lztarmna.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163uktczzqd.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163hocmerwn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163xsiqlulk.html

【使用说明】
来源：http://www.sxryk.cn/163ryhmrguw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163tnmqlhjt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163daalfici.html


<!-- 参考信息 -->