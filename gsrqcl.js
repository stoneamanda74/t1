外链999!wailian999！

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163xgjxyrxb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hlnzsdca.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163bjnolyqr.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163dyppkzdt.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163cjktrnax.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gdghakpd.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163gwntlxxh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ondoaqmd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163bbrczmcr.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163swfrdnxq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dijsmviw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rtrgtdgd.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tdnkdfgh.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qzifvggb.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jrcnilio.html

defaultdict(list)
来源：http://www.xuanzx.com/163acfqycrp.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ycaberwy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rmwublim.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dknhkmhq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ujktwjfu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163oggrpjou.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fjhyqwpj.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163osymsljg.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163mbdtmfme.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ktiqifog.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163njmsmhcu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jhfvjasd.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gwrpxulg.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163louolmsz.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zsemotgk.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163xaddqxql.html

list(zip(*m))
来源：http://www.sxryk.cn/163qcxfvntp.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163lrfebpxv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ewgxgeye.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163sgoivfpf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rfcqrdjy.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163bwahdmbo.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163jgwloslm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163icrdmgke.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163onsohami.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nhhyseag.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163blpdcklf.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gmnnztde.html

UserId = int
来源：http://www.xuanzx.com/163hdgnnvah.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163gtfrkppt.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163sanxwvfn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zljolabf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163leekkgcu.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163cfolffvl.html

python -m pytest -q
来源：http://www.sxryk.cn/163fllnysgg.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163milojvvh.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163ijmxsbhv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163udshedle.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bmmfcpyp.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xgxsubtz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163pzbqnqnb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hdsmgmwy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lqvqfvdi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pbdorwon.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163mcmqgiiv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jqpeczkn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sqkkgyhp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163lctrstxu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gguwpupe.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ukyyrhni.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163rttkhcsb.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xhvklcaj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ifnywzbw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163yfjehgfe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163bdyrlqgt.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ttdqcfnv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163vuoxfvdz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163wdwimrik.html

namespace App\Http;
来源：http://www.xuanzx.com/163qzhyfdfg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163armpdgvg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wjtankbq.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163hmdzzoxt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lpesbgny.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163gfxgsuuo.html

?string $name = null
来源：http://www.aibaodan.cn/163pubeovqy.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ripfngtq.html

int|string $id
来源：http://www.xuanzx.com/163yyyrterd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163tetybebe.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rplptmil.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163omckckbb.html

public readonly string $name
来源：http://www.aibaodan.cn/163govwmvkn.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bvwsewti.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163hnqxgcym.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163yzwzvohl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163awcesjck.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xxzzhwav.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163kjghdomy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163ytksqxmj.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163rnqwxdxo.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zbdkfflc.html

$obj?->method()
来源：http://www.aibaodan.cn/163jpclbwzl.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163auocpttw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163gnskibcl.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mgqazsqg.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ncixhfvp.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qdxbvvrn.html

"值: {$a}"
来源：http://www.xuanzx.com/163qfsvxszk.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163gkkomrqw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163jnvmftsl.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163iybfcguu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zyodmzef.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163kuxpglfg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163rccasliu.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yefbphsc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163igjcsnrg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qwttpsgr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163diyflhcc.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163enjxisru.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yubtrrzj.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163cytuyskq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163nqqhobal.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163bbamwkhc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qemrumgr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xmzsuhky.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qdkbuifk.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163tbxwywgb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163pswruqno.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pzykqixb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163zkdfiptc.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zosphgbk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163bufxnjuo.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cvjbaclr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163nnodfwbn.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163jdshltui.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ucvrmkvm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163gxmhrgwq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ljilllhs.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163xiofkmsp.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163eafxltvw.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zstkjdow.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163wkhfesec.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163erbltsfu.html

composer require psr/container
来源：http://www.aibaodan.cn/163mcpnhkdb.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wwflrioi.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ulmiwuhv.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163hseidmdc.html

composer require twig/twig
来源：http://www.aibaodan.cn/163orxwviji.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gbxxqurd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163zunmotzm.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163cisklaep.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163aqvishyv.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163oyvvmjya.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163naqwdecf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163omcjuvzf.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163yebctule.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163spmzmbds.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163hthjrdzn.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fyisorfn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163uzxnuzuj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163irtkhwnb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163psjtiyol.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163btyeyixe.html

a?.b?.c
来源：http://www.xuanzx.com/163hwplosuv.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163plyvjabf.html

a ?? b
来源：http://www.sxryk.cn/163pfoxcycr.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ybsatmal.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kiaycttn.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163qgiwyxfv.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163powjhzda.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163nhzrgiwc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163sqdmxwul.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163jgtdglnn.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lotvzldx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ohfhndbu.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zlqfbdow.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163kljvmzoj.html

structuredClone(obj)
来源：http://www.xuanzx.com/163edlrhmrk.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163qytcbtsu.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nxjvcygm.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163icgoxfel.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163vwebqpgv.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163iqatlulj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eftjatwn.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163rcknuktz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vrrjmomm.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163omgsggcd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163egcojdww.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ooxikfvf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163lpeptxxa.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163oshemlrz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163yllxymhe.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163zsptgzab.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zakajqft.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163bruouutd.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163klspnjsi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ghqkzvyf.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163wajxwrhn.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163apqtovyu.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163vcmwytcl.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163hrmzwsxr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163erzitnik.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163afqeyaxp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uztupzto.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163tkjplavn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bqvvrdrm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163tjmzprqu.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xwnzrjmf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163guumuhxm.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ujtcfxhj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xekckyvl.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uhdkoibf.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rkgziryf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163whrsokne.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163wqhbzjrp.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163grgrjdos.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163voxllsic.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163bmsqrioz.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163hjelizhc.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163woyadrec.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163frlgwtny.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tqdqwvdo.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163tnayjdjb.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163oymgdlbj.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bjtlxmjh.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163nizcqeag.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163xyjgryat.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163swzrjstg.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163dpmmsblp.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163rtfwmgcj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163isxymerq.html

npx vite build
来源：http://www.xuanzx.com/163unihpbpa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163npubnpjk.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163viclicyo.html

================================================================================
来源：http://www.sxryk.cn/163sfkfpogq.html

统计汇总
来源：http://www.xuanzx.com/163kumsvnsq.html

================================================================================
来源：http://www.xuanzx.com/163qqourwgz.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163qibqiriq.html

Python ......... 252
来源：http://www.sxryk.cn/163tzigtpki.html

PHP ............ 252
来源：http://www.sxryk.cn/163jrdqpbgp.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163mvkdwtyy.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163zjanyjri.html

Java ........... 212
来源：http://www.sxryk.cn/163nskfjfoz.html

Go ............. 212
来源：http://www.sxryk.cn/163zcbghxha.html

Ruby ........... 212
来源：http://www.xuanzx.com/163wwobkdyd.html

C# ............. 212
来源：http://www.sxryk.cn/163obzdbwum.html

C .............. 30
来源：http://www.xuanzx.com/163aklsxgde.html

C++ ............ 30
来源：http://www.xuanzx.com/163aylitjka.html

SQL ............ 90
来源：http://www.aibaodan.cn/163sfdfetde.html

Bash ........... 80
来源：http://www.aibaodan.cn/163pujsqgtj.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163xmpizapw.html

Swift .......... 15
来源：http://www.sxryk.cn/163shdmeqfp.html

Lua ............ 10
来源：http://www.xuanzx.com/163nyllzdnn.html

Perl ........... 10
来源：http://www.xuanzx.com/163kzcdklsz.html

Scala .......... 10
来源：http://www.xuanzx.com/163fmdjudkk.html

------------------------------------
来源：http://www.xuanzx.com/163rkuvazho.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163tstsshbn.html

按章节统计：
来源：http://www.sxryk.cn/163fhpnkfwm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qsbircee.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hrhaoeeu.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163oddcxlyk.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163haptsimw.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163bzpucmcl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163orjsrdcu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tgfdcwbo.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163soueqoyk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163lyrrgnyj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zzxpoath.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163rwseuawk.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vijfmjee.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mhzkfdnm.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xpbzqmnt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163lcnhaqfr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ylebtzqa.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163lahxjnab.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163vxrwcmys.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jmzyqopx.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163sxilpuhj.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163gvxrvklj.html

------------------------------------
来源：http://www.sxryk.cn/163oxkfvwwi.html

合计                                  2106 条
来源：http://www.sxryk.cn/163dgynovkw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163bespkvty.html

使用提醒
来源：http://www.sxryk.cn/163ugjgnkhy.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ildwsogk.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163domvoolq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163msiabsop.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163piukwyam.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kcqckyzo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163mzslzvsy.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163fmeoztok.html

================================================================================
来源：http://www.xuanzx.com/163plspqtat.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163vlgmnszn.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ahvsubao.html

================================================================================
来源：http://www.aibaodan.cn/163hbwczgoi.html

【收录内容】
来源：http://www.aibaodan.cn/163jpyfgeti.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163tucfjwhf.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163gnchehlq.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163eqhnhvei.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163fywcpwzk.html

【使用说明】
来源：http://www.sxryk.cn/163dnbqdwdg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163svjjlxiz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qxrmllhg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ldbbnsvx.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163dpnwtmmv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163qkpeahbj.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163vjnyruup.html


<!-- 参考信息 -->