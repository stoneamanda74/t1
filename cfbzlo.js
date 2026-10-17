外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163qtegphqz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163zeirfmbp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rjlsagdq.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ejpaizmm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ughiditl.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zmdejrat.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pqkvsgil.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lqmlhnrx.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163cuzmjyej.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fogkdezs.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163hidsfnzq.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ptfpdesf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163bkkwyoxu.html

================================================================================
来源：http://www.aibaodan.cn/163chwvlzfl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163dlwdndur.html

================================================================================
来源：http://www.xuanzx.com/163sdowajug.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163abzokuwl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ajebfbfg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163eciuarir.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163yzyvlpmu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163mvqnwejd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163zwkkpipq.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lrgoycso.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kxjvjhvz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xmasizuv.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163akvxolvd.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jppyhppd.html

{**a, **b}
来源：http://www.xuanzx.com/163pqyboutl.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ljcjyhmk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ojrhrfog.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163omekvltj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qpqxfrdn.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163szxfcuev.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163zyyzclgi.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xinsqzog.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163wmmojnsj.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jmegcevl.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bttsxzwc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hbnegnih.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mkrjlfcr.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163vecvuidb.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163mxdaiser.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163irtqvxps.html

defaultdict(list)
来源：http://www.sxryk.cn/163uuoepfra.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163yykyyrfh.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ttskjwuv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163iprmfroo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163govqshlm.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dbjbaxxp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ensvnwnc.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163gkilqeuc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dwaszuxb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163atrhkzmd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163alslvdec.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ikkutkjj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vdavpoqy.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jizmrfok.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mvdhvlyb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163oqjzbbbn.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kbydjmkj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163bzvywtna.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163kelmopcv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163uqowjezx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vcrqjlzt.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wakrbabz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hyuysdzw.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163cuxejvzn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163yuibhrne.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163tyzatwpy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zjrfrafu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wpbttkxu.html

UserId = int
来源：http://www.aibaodan.cn/163lxkxlsnh.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163zmbsddrx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vqugkkmw.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163kblchgzi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163cdnghshh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qicpkbby.html

python -m pytest -q
来源：http://www.xuanzx.com/163gdhbnrbx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163tzoomdnd.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ggbriiki.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163odsrbcag.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xpemhflv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ggpdopvq.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163euwwotkp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163bseohhkq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qaxvprbi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ahkezclp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163tpxliglp.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163otdhaklb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163soleicqf.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163fuvgtwuy.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163tuykbvpr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163vtrwejmi.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xuhnvwso.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163mxyollqd.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vppzilcw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163mcropuhm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163alylckek.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163atdcerxv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ozzcuerg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163fdowppmy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zwcgpeko.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163aknexpwc.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ldfajbcl.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kuyfhytm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gkezgvot.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163zslkzdbp.html

?string $name = null
来源：http://www.sxryk.cn/163zaasrvvb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jtdyzvab.html

int|string $id
来源：http://www.aibaodan.cn/163ledzymop.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dqrulvmh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cuydikwr.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163rikpbywd.html

public readonly string $name
来源：http://www.xuanzx.com/163oawkrgyn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163wpxntada.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cwlpinyn.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lxsgobah.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163advagqcu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wzuvgjch.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163fvbnmueb.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163nrmudotn.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163pstvvmdd.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163qsljukfs.html

$obj?->method()
来源：http://www.sxryk.cn/163xqvaqsnx.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ypktttzz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163cxmqdnhd.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163hftjcblx.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iebpofmg.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163abpzxztg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163phhyzinu.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163rsyrmmjo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163fwofgcwq.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163fmfblzxc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163lcabwqwe.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163bnozingh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163zxoisnvf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163trmfpbje.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ondynbwf.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163falsoqhz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163jtedppgy.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163buhauoeo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163imxfbhjh.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163keyluoid.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163nmzeyggo.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ocmrzxuc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163kmfpuhex.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163qkyrrwsp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163gpcjrpde.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163pxhpjbho.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163xbzpgqgy.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163nwywcgvv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163zoxrxpgu.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zlqpmmez.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163ybqflaha.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mhipqqqw.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jyftfhgj.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163mvbbqfuu.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163efrxzdan.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163gwosehwl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163kgohncgh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163nkhphlym.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163ztyodqil.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163rrgngorm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dbguptxf.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163pzxpnsex.html

composer require psr/container
来源：http://www.sxryk.cn/163eqylfrdx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163dlfnfmdo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163bvrucuks.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ulcommkq.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fyxtrxdt.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ijavpdeh.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163kikotydw.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163syutprcc.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ltsdhyzl.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ciaergje.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xtpankiy.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hdffalvc.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163sazaeoua.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qdeqmiro.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ahiwsqsn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163pcvmowbo.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163ehkabuvs.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163cowuutvj.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163fpzaatpr.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163owpkfdfn.html

a?.b?.c
来源：http://www.sxryk.cn/163horenzxu.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163mqfvduoq.html

a ?? b
来源：http://www.xuanzx.com/163whvokzwg.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163uxkekpnc.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163mhgeskar.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zwxievye.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163apsqsmrk.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ijaoltdo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163eunsxkbt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163qpdrjfvx.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cjibzurz.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163exyhvzso.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163dmaazoej.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163ofwcuhsh.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ajeivfnw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yxaqgtqv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163obgyqodt.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163vrbljssm.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163mbsqpfhq.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163nubhzmqk.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ybthszgi.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163waimnszp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mnxwqakh.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163ulanlqyp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uuknwimw.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163wzmemwzu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163mlhnrtcb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163vtumnvoi.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163iclzttcy.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hdafmrqx.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163awaaxgrz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163hbythttn.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ybxibgle.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163eefzqhfz.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163sszqojzd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lfvzgevt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163rdnamoob.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163gmeegsdt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jhsxycwq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163nvsnlfcr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163egngtpqs.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163wankhmaq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163rbcefdte.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nhbejgpz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163rcqqejxj.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163rvigiifl.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163lgyiwqvf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163uiqueiqq.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rneybbts.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163vygfgvin.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163chkbsdta.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163vzxfdphe.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163rkovidrr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163inljuiou.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nfeauzqv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qoohnwbs.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xwnlrwte.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qyabjqss.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163wdjrgufv.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nhebwmxr.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163mnjorcle.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163taxstejs.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fvyydacj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163rhresvwf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163dbhknyet.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163zowqpclq.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163nyxekzel.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163grhfnyaw.html

npx vite build
来源：http://www.sxryk.cn/163pldnkrco.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163qwajbbcx.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163oumkiqju.html

================================================================================
来源：http://www.aibaodan.cn/163zujxlleo.html

统计汇总
来源：http://www.xuanzx.com/163iibtpopn.html

================================================================================
来源：http://www.sxryk.cn/163ficpiild.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163gmtijazu.html

Python ......... 252
来源：http://www.sxryk.cn/163apdudcfv.html

PHP ............ 252
来源：http://www.sxryk.cn/163hvxdetjn.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gsufwwdk.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163kemmgvnl.html

Java ........... 212
来源：http://www.xuanzx.com/163vfxmtfel.html

Go ............. 212
来源：http://www.xuanzx.com/163ctofiqic.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163klteffns.html

C# ............. 212
来源：http://www.aibaodan.cn/163civfqbvw.html

C .............. 30
来源：http://www.sxryk.cn/163qmjclqrx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163jlmbabux.html

SQL ............ 90
来源：http://www.sxryk.cn/163rxmklaco.html

Bash ........... 80
来源：http://www.xuanzx.com/163ofquzmaq.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163grsfgoli.html

Swift .......... 15
来源：http://www.sxryk.cn/163fdygqyhi.html

Lua ............ 10
来源：http://www.sxryk.cn/163nzayyici.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xpvsrdqj.html

Scala .......... 10
来源：http://www.xuanzx.com/163nqfhtzlg.html

------------------------------------
来源：http://www.aibaodan.cn/163jqjccqhw.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163rwotocfa.html

按章节统计：
来源：http://www.aibaodan.cn/163aymcmect.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163qhvbpaev.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tbspayin.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xwgdpeuj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163pzxntyur.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163thtnhlup.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ifchynkx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163klzttxgk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wtvgilzx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163koxvczma.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163yethydfh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zjceodea.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163niwdhazi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163txukzhrt.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163fmblhkrc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ydtrdenh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fpzsuomo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163fjofrlch.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dunvtrzp.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163egnswlcs.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163ngmibfld.html


<!-- 参考信息 -->