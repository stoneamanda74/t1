外链999!wailian999！

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163odavkytb.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kbzujxsp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ljunjjkn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hevvacav.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163halshkdm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163iocqzcmm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gtaygvgi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163frycmoaw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qjwcrais.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163nthjlfmb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ijitnygr.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163aiyvbepz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hdswkmod.html

================================================================================
来源：http://www.xuanzx.com/163ghhaihgj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163wjdwfaep.html

================================================================================
来源：http://www.xuanzx.com/163imaozmgw.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163bihdftyc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163kqtblgxv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tqapvhsy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163aefdpwly.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ozpulrqc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163kmglbsnc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163bxppzxjr.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163saxjualn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163bhqokvlp.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zwkerrzc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163eouhrhws.html

{**a, **b}
来源：http://www.aibaodan.cn/163ieqplfqo.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163jgnsmkcp.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ldmzspoo.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ptnziqab.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163bbivvafu.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163rcmjtcer.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163erghtxjp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uhooyfwp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hvaegzul.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163utuodmpo.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rwcisgyq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163wmyweiek.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163lfwgyzpo.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163tolxkvmz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zjhiiyab.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163krydqbos.html

defaultdict(list)
来源：http://www.xuanzx.com/163uoolghfo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163szvsgykk.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163nkgnrbrc.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163fllkkbcs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jsudyvsu.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pdagrzfa.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163zlgjwghv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163usmdhtxd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163quzgwkad.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zonsymeb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mwhjaovm.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jvfjockr.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163eivoccro.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163nchwufce.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163licarvod.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163xsintykk.html

list(zip(*m))
来源：http://www.sxryk.cn/163hafjmtpr.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163othhidwp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163uwpzyvkt.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xxiwgtba.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ecducwyc.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uieuajnc.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163pvbgfjed.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163tiyncrhh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cbfsemzt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rngysquv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lpwesyoj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163nlolmmxf.html

UserId = int
来源：http://www.aibaodan.cn/163ahiijatf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lsfwjusg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163wobbmkcn.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ljtnqlcx.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163iyemzuxh.html

[U31] Py：单测
来源：http://www.sxryk.cn/163elgyxmnh.html

python -m pytest -q
来源：http://www.xuanzx.com/163pqrsqmdd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163uzphwlrt.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163gvrbixay.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163fdulflrc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163oskmlvyd.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vtctgwbt.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163tawrnsjs.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163bpehztrt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163tcguicgo.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163nrdlhnrj.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163sloiqzsg.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163dkgzfyfg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mnfdfedb.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vmqbgjev.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163hmpafmmx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163ykjwzegg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163seypusyl.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163tnkkpgub.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wtgutbuo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163pgkrmmsm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hubnpdrl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xvizndfj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163eyjbeuzh.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163crcuhoyz.html

namespace App\Http;
来源：http://www.xuanzx.com/163iyuqumxc.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163iobbqukj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163wgbbsnwm.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ecirskcd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uifpjqom.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163sqrhnpwb.html

?string $name = null
来源：http://www.xuanzx.com/163vqcsqxoc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163qfmrbukz.html

int|string $id
来源：http://www.xuanzx.com/163hqongmaj.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163nafutacg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wynypvyd.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ilmwtnws.html

public readonly string $name
来源：http://www.xuanzx.com/163aimqmvpp.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ewteqeue.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163eolqgjor.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163otytnsql.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163lskblanp.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163njoefzxh.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163cgowhjtv.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163frghxyto.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ctkgvibh.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163cijcbxld.html

$obj?->method()
来源：http://www.aibaodan.cn/163wkbyptvb.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163xwhwoqpu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163fyxlfsrh.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163zdgaevxs.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vmrrlvod.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163bjympecb.html

"值: {$a}"
来源：http://www.sxryk.cn/163nysreqni.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163pminhpst.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163sedjgvip.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ylfliqyq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cebljnvi.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163yahjxiey.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rkdxznfl.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163sjlychxi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tcbnztdz.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hoetnkao.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163gyszqdjl.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163nddbtvbo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gipkkeds.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163svifcctl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ruzfpvkw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163fzzvxugx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163yuxrtwkw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163flsnckxx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ecjuclyf.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163rmdbzvbq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163ydtdbhqk.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163nmzotjaf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163uklauvfp.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ywdjibvw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163nkucsgnk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163yxwnecpk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163rcgnqqdc.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163toxzxctq.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163pkhkvcpn.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ihpxdtyu.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163oisphuxr.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163vsqdsifj.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163stwxjbri.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163viokfdmw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163wwquwaja.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163biyidhfb.html

composer require psr/container
来源：http://www.aibaodan.cn/163tsykqlrz.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163ylpqvppv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163wfhcvlvh.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163gceweftm.html

composer require twig/twig
来源：http://www.xuanzx.com/163hzpmzumy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163nlvteesd.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163yjvvglgq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163yxrkppze.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163tufvjczo.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163xplzcbgd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163wwlhdrsj.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163lslovekr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163kssnooqp.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163uwigzdie.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163nomzvihv.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163nmgdrgns.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163lacymife.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163nloczfms.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163baxwjolv.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163duoijacd.html

a?.b?.c
来源：http://www.aibaodan.cn/163fwzhpagw.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163ogkasutq.html

a ?? b
来源：http://www.aibaodan.cn/163fogwriqj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163dyzufxov.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163yetyehmc.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163sywkydih.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163rueybzdf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163otvcejxh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163irgxmgtv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163dwwsflbo.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vefnmrdw.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163sdsppwdz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163gptsgwlr.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163xqcluqrr.html

structuredClone(obj)
来源：http://www.sxryk.cn/163nqpsoyyw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ahjnmuty.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163ikuqfazu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163tjjotpkc.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163kqvqbthk.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163wumcxabc.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163pggvxitg.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163shingicq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sjknmbxl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163nuilgyhl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163uzbajddt.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163mvgsjown.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163hhfbjeux.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ywmggbap.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ochwkuhd.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163csryohof.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163aklptbwq.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fwrdncsp.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163fcqxazoi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wxntgpey.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163qewpaibd.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163nmdxzwer.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163qvgxrbqd.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jztogybk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wnzdshyt.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163oigiagtz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163zyftczur.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163znselfvy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163mojfzgut.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163ulkablqr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163orwyqpxu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dtapbgkp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163vfxqtaib.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163guqkxdmb.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163eglcykhj.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163eznopxtm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dslljgqa.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163qrubbxvp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mfqgrxxt.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163zeymphvd.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163tavbetiz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163yuyprqni.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ojvpctup.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ctxlvbbv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xgzikxva.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ucsifvxx.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163heoqluky.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163hqcesopu.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163vcrryspn.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vhmdpxos.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163zlqnxube.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163azfpihxv.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qhbuufww.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vwpqjhor.html

npx vite build
来源：http://www.xuanzx.com/163qcuxtbxz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jfdbepqi.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163zbbutghb.html

================================================================================
来源：http://www.sxryk.cn/163twkanjhw.html

统计汇总
来源：http://www.sxryk.cn/163eipxhpxr.html

================================================================================
来源：http://www.aibaodan.cn/163slybmmhx.html

按语言统计（条）：
来源：http://www.xuanzx.com/163xeccijyk.html

Python ......... 252
来源：http://www.aibaodan.cn/163bpmbddzl.html

PHP ............ 252
来源：http://www.xuanzx.com/163ekrcdeyf.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163xfwqtytp.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163exyuiawz.html

Java ........... 212
来源：http://www.aibaodan.cn/163vgbaanmo.html

Go ............. 212
来源：http://www.aibaodan.cn/163afarvyzc.html

Ruby ........... 212
来源：http://www.xuanzx.com/163wxmhvvlo.html

C# ............. 212
来源：http://www.sxryk.cn/163ohwqkhxz.html

C .............. 30
来源：http://www.aibaodan.cn/163rfizwsii.html

C++ ............ 30
来源：http://www.xuanzx.com/163owvuokum.html

SQL ............ 90
来源：http://www.xuanzx.com/163rokujkkp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163oxwvqzah.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163pfqpnvca.html

Swift .......... 15
来源：http://www.xuanzx.com/163unikpapf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163lugeauuv.html

Perl ........... 10
来源：http://www.sxryk.cn/163xyejpxvx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163eaaaqeyu.html

------------------------------------
来源：http://www.sxryk.cn/163kcybpryg.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ubynlbml.html

按章节统计：
来源：http://www.xuanzx.com/163elsoxqdc.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163advahywv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mscgvpnc.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tlialkrj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163lgtqricb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163yyazslos.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yfwmmizh.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jpulezzg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163impsslsl.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vmezhtfw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ctiraefu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163reizsthk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163lptawxqn.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nfrjtwdx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dmvnepdf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163sipdeewa.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fufurxfj.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ujtxffrn.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fedfefrj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163koondjnn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163flqmdsqh.html


<!-- 参考信息 -->