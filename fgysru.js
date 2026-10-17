外链999!wailian999！

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mnauifmh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ajenvvgp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fetnttva.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bijtbkkm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lfhrwkmb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ruarrpdb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163vlyfzeki.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163rqdnocdd.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bmfszymp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qiviorhp.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mklncowm.html

{**a, **b}
来源：http://www.aibaodan.cn/163qiwtzuee.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hkilbgpl.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163qewqnofv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fzgmkbuz.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rzyocsrr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163xpbdalff.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zdxyepth.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nwdxffbn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sazuzyxp.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163meabzrjb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163eriwilyz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zuimxsrg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bafqfdkp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hhlmbwdf.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hppcwnqw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163fybeiuej.html

defaultdict(list)
来源：http://www.aibaodan.cn/163etvyrfgn.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vefwhevk.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kjgxkoeg.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163yxeqokud.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163wdltfsao.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163quzjrmle.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163kvqwtpia.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163alwthaqd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qkulrijw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163prwvduuq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163clarazwy.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163kitzmjja.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163kuiwczxy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163hohhecye.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kdtqiywk.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163hndzssyc.html

list(zip(*m))
来源：http://www.xuanzx.com/163tuxcvznj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hstaqnwn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kgmucvfz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163skokbxaq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rwhufbqu.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163fthgglht.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ftmeivup.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163gqtqmykj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163tasxpuxm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163iavjpeig.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163joluaepe.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163crmogqiv.html

UserId = int
来源：http://www.sxryk.cn/163libgkmae.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163fbltclvk.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163isnkihxe.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163qckiywiq.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163nqhcnmuk.html

[U31] Py：单测
来源：http://www.sxryk.cn/163uafwzzqx.html

python -m pytest -q
来源：http://www.xuanzx.com/163bacwcwew.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ordtpwfl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163dizvtnma.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163iuqdqmzb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163bqbldscu.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mtlhpxrw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163qygmhudq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163pknbwoti.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163zsvzafwm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163gelwckpi.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163oaizoclk.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163nndhsajz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163hkdduqjp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163vjwjvunf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163vfaohxyv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163rqfesbeg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163akamorbk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zoxodply.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ornqftvi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163qoqsoajl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bfjrdtcu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zdmnqzzv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nrqksrhz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rauyksrp.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gxjevwdv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hjwljion.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163iutoyxeh.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163xpdqgqqk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vbpldcrm.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163lsdtmvwn.html

?string $name = null
来源：http://www.aibaodan.cn/163lyvfnvwg.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163bmcjlvga.html

int|string $id
来源：http://www.xuanzx.com/163tkkfytvg.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ynxhpwdo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163rmjttott.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163katjbeak.html

public readonly string $name
来源：http://www.aibaodan.cn/163jiaajlmg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ttpjsspd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163faexfbyk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163vgxlmakr.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163bxxuwiyf.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163nqcjuhgb.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ffkzfsll.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wfxuguyj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163xbcodbwt.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163akdgnama.html

$obj?->method()
来源：http://www.sxryk.cn/163agqysktj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vocpbvsv.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mjttmbaa.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163hpxatgmp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ajwilgnr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163jifjpelw.html

"值: {$a}"
来源：http://www.aibaodan.cn/163iusjcckd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163oowxfibb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163endoxwtk.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wloqlzxt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mrgnhktt.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163cibnjgup.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163dzdwnhwh.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163irefzwab.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163qurpbqsz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163fjxxaxly.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163zecfucbg.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163palbckpb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163dhwnvnpa.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163pjzwqfyd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163zdzccaji.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163sbamnmwq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163anipjads.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ygzyegce.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163mwlndbeg.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163aayeaqms.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163lxmtbbzt.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fkgsgpbj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163anqvsalx.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163saqpdndi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163yzoxnaqi.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163bqpmyrjy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163gorceocb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163jgnkawed.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163rbjhxzfx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163djbtyeyq.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163zitnvrqc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163udellmtl.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163drahukra.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163qlipvbqj.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iobmmfte.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163kqahruew.html

composer require psr/container
来源：http://www.xuanzx.com/163jjtdvozt.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163wmsorwlg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ivbdoslh.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mbgrejlv.html

composer require twig/twig
来源：http://www.xuanzx.com/163vbwjbwao.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fyfpirzg.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163hypaduyp.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163rimvurkk.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163cawqglxk.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163pjgmavqd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163soeuyaxg.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163mbrolsjm.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ptygupwk.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zlnjhtdj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163cwkmjgue.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pitrxdkt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163gnzbskok.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163qkpegbvj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163trwbhrqr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163xisoagit.html

a?.b?.c
来源：http://www.sxryk.cn/163inlqeani.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163crlnquwg.html

a ?? b
来源：http://www.xuanzx.com/163twuwvdxj.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163cabafgfj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163zbipcyoo.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163eeewfvmc.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163vwdjqejv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163tkdviudd.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wkcqtfbo.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163arzxmljp.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kdjrnlum.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163csmpurer.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163mpehfmwp.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163duibldkq.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ggivaiea.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163vxowxybm.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163mrcepfqm.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wchreotm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163hphtuqcj.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163naqifjzg.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163zfhtluki.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163aixhtptd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nzxpzgzf.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163wonlpelh.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pdzkufeu.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xbvmfdxh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163aztvnmcp.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rnyuykkf.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163zqvochet.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163svmwcvqj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163bvcgavdg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hzitiynn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ymrlrrbs.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163ohqmcuvd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163bazapwga.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163epghlkep.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163dhrcbmsm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tmpsultk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ddfwnoyi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163nzxgghwl.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163obuhzuwj.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163kpoygahb.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dobzgxfq.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163fuwmzglw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fneplxzg.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163sggdprxa.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jnnfsiyv.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ablpqlrf.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kmmfnejj.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lzaaghin.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163szxwlfep.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163phylhufe.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vpmvvukn.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163lpbaiwkx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163oeghrtgd.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163dfplpxwb.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uigxbsme.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163yeagkkfz.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mjqlphkc.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163tbtrnbxo.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163smoezwat.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163eoljrbhw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163gzanaydz.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163kruxdmqp.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xhrbtsky.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163gmsavvme.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163frdpglcs.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ikappzjf.html

npx vite build
来源：http://www.xuanzx.com/163upnwjwob.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163qqgklabe.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163jukohfce.html

================================================================================
来源：http://www.sxryk.cn/163gdrcrrnr.html

统计汇总
来源：http://www.sxryk.cn/163ohaoxquq.html

================================================================================
来源：http://www.xuanzx.com/163yqzkzkfp.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163grssuscm.html

Python ......... 252
来源：http://www.xuanzx.com/163lkrdjnoz.html

PHP ............ 252
来源：http://www.sxryk.cn/163tnpjwajg.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163hgleuotx.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163qjtkjfku.html

Java ........... 212
来源：http://www.aibaodan.cn/163jkwozuel.html

Go ............. 212
来源：http://www.sxryk.cn/163pvuywfzt.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163gwidhjkg.html

C# ............. 212
来源：http://www.sxryk.cn/163hsocqeku.html

C .............. 30
来源：http://www.xuanzx.com/163cwkbhmzm.html

C++ ............ 30
来源：http://www.xuanzx.com/163vtflgkfq.html

SQL ............ 90
来源：http://www.xuanzx.com/163mujhbkcd.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cmeqezbe.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fazunvvy.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ahjzgufj.html

Lua ............ 10
来源：http://www.xuanzx.com/163sdqvvmaj.html

Perl ........... 10
来源：http://www.xuanzx.com/163kemwsxof.html

Scala .......... 10
来源：http://www.xuanzx.com/163hkbknenz.html

------------------------------------
来源：http://www.sxryk.cn/163qftxdede.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jtiwneyr.html

按章节统计：
来源：http://www.aibaodan.cn/163ewoyoxvd.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dhdpdadn.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163scbhtcer.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163rnadxrwj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ikdikckc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163cqyysddt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163akbyabsa.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163coqcpjcs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163odtqvuzv.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tcigdexd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163imyqauge.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163joymvaxd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wucdsbqd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ikocyzgh.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163agqtfmlp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pvbaejsj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pjkqixlm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163uahaiqyr.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yjwcpsoh.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163ahusvole.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163fpqmsnqj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xbwumpzk.html

------------------------------------
来源：http://www.xuanzx.com/163qsxlcwzj.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lwatylmd.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ydmnqxtq.html

使用提醒
来源：http://www.aibaodan.cn/163ukxfjtqv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ctftzqqr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163wpyjnefn.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163rsohuwrb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163roorpckz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163fskuzvmv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163iihmuvbg.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163khmakssf.html

================================================================================
来源：http://www.xuanzx.com/163dhnbjgkr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163dkqujodv.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163quxujrah.html

================================================================================
来源：http://www.sxryk.cn/163twnsxwdk.html


<!-- 参考信息 -->