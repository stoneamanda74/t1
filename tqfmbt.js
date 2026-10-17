外链999!wailian999！

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xzqnyuwz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cqcnrwjq.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163gnnnvgym.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163ibaiwqzv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mujnxacv.html

================================================================================
来源：http://www.xuanzx.com/163urqfnfef.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163minncvju.html

================================================================================
来源：http://www.xuanzx.com/163ffypdwje.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163dcbeckyq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163uhzryflv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163caveenca.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xrpwpsnp.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kcqxfoen.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163anilncxx.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163cylwnqdn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163pvmmglsm.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163erkiikzu.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cmolflfk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163dkvubvca.html

{**a, **b}
来源：http://www.sxryk.cn/163xhncijpy.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rtrenxfz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ieccvdsr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163tykqgary.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163uwqzpuak.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vpbyayfx.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rgujchfw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163awhghlny.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hoskaewb.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163isatzdze.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rsxolxwo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163erdvnbzl.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jvcftxnr.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cilpcypv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163oiffcbas.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163devhfria.html

defaultdict(list)
来源：http://www.xuanzx.com/163krbhbgqr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163txxmxnwb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163sjblpuat.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cxyxdhuv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ztfqzpoo.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zrhtjopf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163lguacppq.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163nphudgbh.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163itjxsfhs.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xiglwdba.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163uoztsczo.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vbzewdet.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xvlauxdv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163nceizzmx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vwexmfwp.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vatljyal.html

list(zip(*m))
来源：http://www.xuanzx.com/163voidhiyw.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163eduajhzq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163yojopymp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163saidequj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163geuivjtk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xqwwfagh.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hgcduozc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wzbnmbqr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163txevioaq.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163blfbwzxa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ljbyxvtd.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163sfrdnwkm.html

UserId = int
来源：http://www.aibaodan.cn/163lhodaxpd.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hhpzurgh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163upbunlip.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163fqbvhvgz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vlbqbnbh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163jgonhaad.html

python -m pytest -q
来源：http://www.xuanzx.com/163evvimllj.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yewqiucc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wnajcgqh.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rvbtpvws.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xnhlrept.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163myizfejn.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163zsqtdbsb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163juwqtyld.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163tejvrans.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ycltjwuh.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mrumvbkn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163nczbqfsm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163deqmerbb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163xomviwjq.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hprmxyur.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163wnobtrbs.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163uxfjacjx.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163jmxyimge.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163crwhwyom.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jxaujjch.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163swwjfjbf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nwskceoj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cbyvsgtp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163olwbhjfh.html

namespace App\Http;
来源：http://www.aibaodan.cn/163mznhhuor.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163vkcgimca.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163bgctgrly.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163tuhzwhua.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eqyibngr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163pqlflnfs.html

?string $name = null
来源：http://www.aibaodan.cn/163sieekbjk.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163rvhahaxt.html

int|string $id
来源：http://www.xuanzx.com/163edldhqfc.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163hvmjbzvs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ruripdmq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163htcgfkmj.html

public readonly string $name
来源：http://www.sxryk.cn/163mgzobvnu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vrhntodx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163stleqtsp.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163czjjdbfw.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163pziyipgf.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163htmnvqhv.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163gmxajwyc.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163jlqdnrey.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ueftoxdr.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163urodyhbp.html

$obj?->method()
来源：http://www.sxryk.cn/163biksjyxe.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lacxepvb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nuvuchji.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163kcbwjhww.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163daxqwmpw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163mhacyiqs.html

"值: {$a}"
来源：http://www.aibaodan.cn/163vfuqrznm.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163yhlotaog.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mkygeyww.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163jbleqdef.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163gqlqabmp.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163qcoeqwcr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zudcqmqb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163sxtfunya.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163byyndclx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163eqaagwak.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jcwtxvfs.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163yvexgtiz.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163tqevngll.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163srfbynib.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163apvohkxz.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163xdzzjfgn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163lsfznvzz.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163mxdeskhr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163fghlontm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163cjsgqpys.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wsonytcb.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ienqofdy.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163yiezjwbz.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163goioadnc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ecymdbjh.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163jxtrrqjg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wtrtnnxa.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163lwpvbkpw.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163fwbflsrq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ezidgqun.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163eynrjiat.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163yjhtozjm.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163qzjsvozq.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163fychboif.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163etvtnrwo.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ndbbwdcf.html

composer require psr/container
来源：http://www.aibaodan.cn/163qgijsynx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163auqcyevs.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163moueaifa.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163itnbjmgi.html

composer require twig/twig
来源：http://www.sxryk.cn/163zdrtpjtz.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163soolctao.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163vveutoqn.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ulmimwlu.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163fgpwgegs.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163cbjytpnf.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163eaxdpyrl.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163zdqfgupe.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ozbpnqgj.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lzhvbvik.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163yjdmwtmh.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163yqjsbegr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163whsmwxez.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163hgjodobk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163jdrhqzrx.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lksqpvxv.html

a?.b?.c
来源：http://www.sxryk.cn/163zcryznpx.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163yyvnapqt.html

a ?? b
来源：http://www.aibaodan.cn/163iqrsbine.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163bkgimmtn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163alkrmngi.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rbaruepd.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163fgreekan.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163mhxvklkk.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ctwdjsju.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163dtzbjbtg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gclweyld.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gfhnnqkv.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163ldofetnj.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163mbkvogbl.html

structuredClone(obj)
来源：http://www.sxryk.cn/163hzknljje.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163oyvssazn.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163uuosyixa.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wzrzrlgk.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163roaxrltb.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xegzjpmm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163stresvzc.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163oxpvqzuq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dgvfsysr.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163aiqppayr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fvzhrcys.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163tuccerjm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pgurqdgc.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gksiizxq.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bjjdvtsj.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163dutiahdb.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163knqsigaz.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163uupptpee.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163uhemzbqf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qbcbwcop.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163trosuzcr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163pgbsnleu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163oiruzadh.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163sdzonvtw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eiobxqfd.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vsloqzev.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xhpgnkjf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tedfgmxt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163zmhlfqez.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163rdbevisx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163mhkcjrhp.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163kqyvqkja.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ropfszwr.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163hbzgkyxy.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hnoqsbud.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163mffxuzeq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163xcvfjnll.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fikrxcpa.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163dhryodmj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163pmpzqtcu.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mcemtoiy.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bxrvdfbi.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dsbdgwhp.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bnlyxute.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qwbbwrqv.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163lceejduz.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163yyybxrqr.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163gistmpef.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163jgvfnumu.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163bhhfobui.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163vdoxeity.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163wonqthzx.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163jtilujfg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163zprxpfgz.html

npx vite build
来源：http://www.xuanzx.com/163epxwlzzx.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163pjeblwtv.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163brlrizop.html

================================================================================
来源：http://www.xuanzx.com/163yfgnxhra.html

统计汇总
来源：http://www.sxryk.cn/163ssxtmbzx.html

================================================================================
来源：http://www.aibaodan.cn/163rkdpihdi.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163eukoaqfm.html

Python ......... 252
来源：http://www.aibaodan.cn/163gsnpqgup.html

PHP ............ 252
来源：http://www.aibaodan.cn/163sgwazfvi.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163hkkgzstk.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163yyczqlwf.html

Java ........... 212
来源：http://www.aibaodan.cn/163tphvrjhd.html

Go ............. 212
来源：http://www.aibaodan.cn/163lwrkmktr.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bhlmliip.html

C# ............. 212
来源：http://www.sxryk.cn/163wuufkmdl.html

C .............. 30
来源：http://www.xuanzx.com/163rygtmqrj.html

C++ ............ 30
来源：http://www.sxryk.cn/163evzdfnro.html

SQL ............ 90
来源：http://www.sxryk.cn/163tpjzzpgu.html

Bash ........... 80
来源：http://www.aibaodan.cn/163qokflctt.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163zjezbrah.html

Swift .......... 15
来源：http://www.sxryk.cn/163idcuzlld.html

Lua ............ 10
来源：http://www.xuanzx.com/163htuyxqbl.html

Perl ........... 10
来源：http://www.xuanzx.com/163ygqgxvzl.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hbwcyjsp.html

------------------------------------
来源：http://www.aibaodan.cn/163amwakpjq.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163aijwgsdi.html

按章节统计：
来源：http://www.aibaodan.cn/163ctacxvpt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wwurgzic.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mazfprtm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163baglwiyh.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163xlbwxnsd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163whrbhdoi.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163riheanal.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ewuusggw.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ewceeyte.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163maebqgvb.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163norphhoq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163jqkhvsmz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rmgbpwhy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163igbpsxwf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zabbptrc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163buxariyf.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dmjvqjjz.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163yychcyef.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rritajoo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163pxmrdacr.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163hujpjfyj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163fayzrkdc.html

------------------------------------
来源：http://www.aibaodan.cn/163qioqwkop.html

合计                                  2106 条
来源：http://www.xuanzx.com/163yxvvxsti.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163pqwmpspw.html

使用提醒
来源：http://www.xuanzx.com/163csydjkdd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hbinbqjg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163slrfxnfo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163ihsnyizz.html


<!-- 参考信息 -->