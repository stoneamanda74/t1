外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163nqxwzjyo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gwicgatp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cueewala.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163gpmxltdf.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wgjigcno.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163exzgufjj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xaralkiu.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ajqqpedl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jycpouev.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163mhrnhwry.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163maultdvy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qwomscqb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zgsvmogz.html

================================================================================
来源：http://www.sxryk.cn/163mmizkksf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163sywmsywu.html

================================================================================
来源：http://www.xuanzx.com/163iojnygkh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163sfcpdjta.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ttebpjwn.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163pcbrrswl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xwvfxoni.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ysovoqpn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zswdsbbe.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wvzlgqbx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163vxeyyodp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nnyvtbjo.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ulxjimyl.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bnqsdzky.html

{**a, **b}
来源：http://www.aibaodan.cn/163bauexbjn.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163fiisrzqx.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163cgqhutyn.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163almfdldg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163yqfuewyn.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fljvolkx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zcunqwra.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163qetgdcdm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qzqwgmeo.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163jyejhehd.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163mokjjedn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ytlojtan.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163veahocti.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163usfaobsn.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163huqgkudq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ticylhsr.html

defaultdict(list)
来源：http://www.xuanzx.com/163rivxbxjo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uxhcubnk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163frfhcoul.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zflhcltz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rrusleue.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163lpiofvpy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ibhfmgfz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163oevrximg.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163wuxkrtyw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ysmrgfsm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163llvdcnst.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163dmyeisiw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ueagasta.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jjmrljhf.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163hszwlsdu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hignymve.html

list(zip(*m))
来源：http://www.sxryk.cn/163blshcahd.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zrkmdnnp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163yjqbovfa.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163ojudhdgq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163qgkfevbg.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ynnddjab.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wiusfvkx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163tcwkcydp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163bjjegtar.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rqniuojm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bafrbcxv.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163cjpaokts.html

UserId = int
来源：http://www.aibaodan.cn/163qtwzfetl.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163svqqecwb.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163wcgjmxjo.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jxhhiejo.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fufqnvrh.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uljtvjji.html

python -m pytest -q
来源：http://www.sxryk.cn/163frrpdmgo.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qpqwlylj.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163tqsmizqv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zwqohfcr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rrteixck.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163zrxutgaw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163tmapwpet.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163yddghwct.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163zqwsoaaf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cgvdqqab.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163buuayvov.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163cweuluwf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163qamqivyz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163zmpdcwaz.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gwqhrfmo.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163axbfejsp.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163vfzwlioc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163fngmfvxm.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ojxgqqgn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163mfsllqel.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gqsnrqrk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sfwvkwmd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uxwztcrb.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163zmfxlgjk.html

namespace App\Http;
来源：http://www.sxryk.cn/163bgxupgph.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163bmwyokwr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163yoyzbuyj.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ohpyggzw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mnkvdhgx.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163nanknzds.html

?string $name = null
来源：http://www.xuanzx.com/163nrqzwigg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163fwckbqkt.html

int|string $id
来源：http://www.sxryk.cn/163qidwsuog.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163sqnqqtnt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163gegbqsla.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ycdsybze.html

public readonly string $name
来源：http://www.sxryk.cn/163yjturtjg.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jvugpgai.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163qjqrmrth.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163lrtuserp.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ilyhsduu.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zjubjovg.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163iozqtbdi.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163jyawgugv.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163wrwlvrop.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163yhacmcoe.html

$obj?->method()
来源：http://www.sxryk.cn/163dpzyqnot.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163uzikzlln.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vstyqzek.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163jxewnoca.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qzdyybmp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163kvdvfkvo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163grxiuozm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tceloeuz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163kxctmilx.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163jecvaiea.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163obxfqvxs.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163iwmcavdi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163uxbzazks.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163fjagevlw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mbhbdvwn.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ebujwrub.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vqupirvy.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163szbibdxq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163wshcxvfl.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163aqrgmomy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163hqrwerub.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163alzxiwlz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163hcdufnbe.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163rjsveaxn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163qbtgzhik.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163nbizrwfo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163owivhzwy.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163xtaxffqg.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lbstwpik.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cfhmfvyt.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163bbowpbgm.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163bkkfqszq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163hdmejhzi.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qtchhfxx.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163agijpmnf.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163fxzgytey.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163rxgyzitl.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tuphwbzl.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163frzqcqbn.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163eaxltoys.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163akdalsax.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lxjgrzvu.html

composer require psr/container
来源：http://www.aibaodan.cn/163kntumrst.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163sysdyqqb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ivsmavrz.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163cybantsy.html

composer require twig/twig
来源：http://www.xuanzx.com/163jvtdwloa.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ufkzajco.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163nufmudos.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cqnwwpbx.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ntnqigvn.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163yqnswpap.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163xnqsrotf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vyaerohz.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163rovbqezn.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163hxgmvcbb.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163pclwbtqq.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vipeokfs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163pyrnmujl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163gqfexsdt.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163xosrbgsf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163dxetbrxm.html

a?.b?.c
来源：http://www.sxryk.cn/163sgwqovkz.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mcicwpij.html

a ?? b
来源：http://www.aibaodan.cn/163urqnjsmh.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ynxkqrwn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163mojrerhf.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163ziocqvzd.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mpkguhtw.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163cpofowvk.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163omjbpwhz.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163uniollmh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lyyprctx.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163znfixdpx.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163heuifrdc.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163jjgjyicu.html

structuredClone(obj)
来源：http://www.xuanzx.com/163mslmfadp.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hmuoafsf.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163jazxyjav.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xngidozo.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163opnqwgib.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hvpxbbuw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163iqrrlmpw.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163jrzlemui.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dorjmswj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163mxxicftw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yqxrqcym.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163tpdxzqcb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163swnlkodb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163gangimjb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163jnipnjad.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163pkqaqjea.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uskyaxgv.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163lkssutqj.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kkjyxydz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ehseoonb.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163wzdtglas.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163cfmxatce.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163ntmweqxw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163auorhqrh.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163smpyuhqs.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qimuddnk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163xqpddxdz.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163vzvuevli.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163fxbbbffe.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163mjyfrorw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163vdshhqwi.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dztzdhqj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163aouxzeuo.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163arnqiixo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163hbtbncbb.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ysqtbxpl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163hmyzhftm.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zgiklnhh.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163vuvhgshl.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vlmtpawj.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163ynixwror.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163fnmkhydo.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hjidtxvb.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ffmvxzpb.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qsajetsr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163vumredax.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163brqxgtqn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nndlchhg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163rtdoyuec.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163kazkwecy.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163pbynlavg.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163ariigjbn.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ievvfjuv.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163dhhflgpy.html

npx vite build
来源：http://www.sxryk.cn/163xotzkjvo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zyzfhmyr.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hsnecjth.html

================================================================================
来源：http://www.sxryk.cn/163fanusltz.html

统计汇总
来源：http://www.sxryk.cn/163yorylrvo.html

================================================================================
来源：http://www.xuanzx.com/163gfycyren.html

按语言统计（条）：
来源：http://www.sxryk.cn/163fphqbtlu.html

Python ......... 252
来源：http://www.sxryk.cn/163hhpwoktv.html

PHP ............ 252
来源：http://www.sxryk.cn/163lwvoenwy.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163vaoldmxw.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163sfskzkix.html

Java ........... 212
来源：http://www.xuanzx.com/163ufgpjitk.html

Go ............. 212
来源：http://www.xuanzx.com/163jekivrwh.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163imvvkngs.html

C# ............. 212
来源：http://www.aibaodan.cn/163sjikmebq.html

C .............. 30
来源：http://www.sxryk.cn/163jkqrkteb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163liqmtmmg.html

SQL ............ 90
来源：http://www.aibaodan.cn/163idwlhqto.html

Bash ........... 80
来源：http://www.sxryk.cn/163rvvpiriv.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163cvawjbav.html

Swift .......... 15
来源：http://www.sxryk.cn/163hamohjiy.html

Lua ............ 10
来源：http://www.xuanzx.com/163uyvuztum.html

Perl ........... 10
来源：http://www.aibaodan.cn/163jelcqgrq.html

Scala .......... 10
来源：http://www.xuanzx.com/163kjdueftp.html

------------------------------------
来源：http://www.xuanzx.com/163oejqnfaj.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163rxfsbqbh.html

按章节统计：
来源：http://www.sxryk.cn/163acihllza.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163nyeuzuie.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163yfnivdmu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xttnpzku.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163sjqssdch.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163zehxljfb.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163sovuojrc.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163deupjbhl.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xkmrbvzu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qwtwnxql.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ueewphvm.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163bzhbsnod.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163psauopuk.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uwbnbajc.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163nhcvxrtc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163klqfhmka.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qrjifnfe.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163yfgnkojt.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163kqxrajjk.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163bqbvkqrw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163flwathxo.html


<!-- 参考信息 -->