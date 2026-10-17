外链999!wailian999！

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163armwgkbz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cswdxqvh.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gxynhyfn.html

defaultdict(list)
来源：http://www.xuanzx.com/163visudjho.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163yvsiabme.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ohwasmhf.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163lvuhkvva.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163oeiyerlc.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163jcmkoget.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163fhrbkhul.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163jewmvlrl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zutuizse.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uvugcdgm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lnjmtnkf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rrfbwzdz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qtqfkdbz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jbmgwtzd.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163jijkmtnk.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163joguslin.html

list(zip(*m))
来源：http://www.sxryk.cn/163ocumggix.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163urdheoal.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163uaegbxvb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xhsbqqub.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163wocephfe.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163qkmrgbje.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163smynvmnl.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mehfgkhp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ojaqdrsa.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ydayohqk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163actuksiw.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163imfavgbv.html

UserId = int
来源：http://www.xuanzx.com/163taxaoqpz.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ntlppaxx.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qolcjmxz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ixvahqoi.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lzbxepql.html

[U31] Py：单测
来源：http://www.xuanzx.com/163rgmpfthb.html

python -m pytest -q
来源：http://www.xuanzx.com/163hnknwepf.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163njpmdhpq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163nmbckajb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163pyzgexbt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163cpfrkdlc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163aqxlmxca.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163mbbgduen.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163jphwylsh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qsjtvmdj.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qegnjfxl.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fpovfwme.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163hrwanwes.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163tkvonsvm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163hegwoqqn.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163yfccnyap.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163ivtusjdj.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163vdbshqmt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rjbgnqzr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ujxoeiee.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163veqqqjgs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wdlxtcyb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163eccfumel.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163guhtuznj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ynuucnck.html

namespace App\Http;
来源：http://www.xuanzx.com/163pzhlvypw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nnmhljkl.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163pqerqfjv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163sqrebmyo.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lbwjuecg.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163taxyoxav.html

?string $name = null
来源：http://www.xuanzx.com/163zsjnpydw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163zilapxmh.html

int|string $id
来源：http://www.xuanzx.com/163kkeejcxk.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163dlogombl.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163ekentjpp.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163uqkwtsjt.html

public readonly string $name
来源：http://www.aibaodan.cn/163ivttjiuo.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163mqlehkwj.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163gfcpzkot.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163agkhunez.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163tsramaxj.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163rqgzsvzb.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mldtecoq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mpizlcxn.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163duzecinm.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xrojixxw.html

$obj?->method()
来源：http://www.aibaodan.cn/163mtrzhbga.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163diqfyuqm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163iaevnmnp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163dmimplrq.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163foafzdup.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fnnkmtjl.html

"值: {$a}"
来源：http://www.sxryk.cn/163prxrqolb.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jyxqxpjr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163txbbjats.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163mpfhfjls.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cncrhpbn.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163nlzfijdj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163pugynnym.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163gzhpzjsp.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hgeanfuj.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163itwxtxne.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163lxfyfkzj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163dgcbolll.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fymovjlo.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163mxvfszuw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163jkknaklj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163aidvkluj.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163apurtubz.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163mbakwxdk.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ihuqmmbz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163dfbxnhnq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163lipxmfde.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163acwmufzs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163leaqrida.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163bqsasktu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163wgjrjvqj.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163fggkqhej.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163sxrsmfxa.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163wivxbsar.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163rvisyzqh.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kcsiajfn.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163kfjhgawv.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163xcdvdkfd.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163wccesspm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163fudnwtzc.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163trxxetxu.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163ivizdqnr.html

composer require psr/container
来源：http://www.aibaodan.cn/163yvsbgjmq.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163rshciubl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163dqvpynrm.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163lnohjhhu.html

composer require twig/twig
来源：http://www.sxryk.cn/163vjdtuqpc.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163cyoaqjam.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jfwnrlau.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163eagjrxja.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163inskphfi.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163ijzwjbri.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163ranaisgc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gkqtzulq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163ctzuuoex.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xamvmpte.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zltbchbq.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163siohfbya.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163guehikzf.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163vdgovoqc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163sgepqksa.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163ppqyloth.html

a?.b?.c
来源：http://www.sxryk.cn/163pfjblrru.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163wiwxbovn.html

a ?? b
来源：http://www.aibaodan.cn/163ehvszxbm.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163lvfapvjm.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163awnconxr.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163bnpeqwvj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dqexqgcp.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163brepcnbj.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163xfxdthtz.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163smhebybo.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dgmqowwg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163rrdbuhnd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163pztabdfw.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163rntmihnw.html

structuredClone(obj)
来源：http://www.sxryk.cn/163iakwwvnn.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163jcpaeoaf.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163pwrnfxdq.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163mipszpio.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163semfyyfq.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163iehyttxf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163sdrrefms.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163hgkaicss.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fxzaphjt.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163jdnttlkz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rqzzednq.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163jkkdphbk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163oifvzjqf.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dgrnbklw.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163mvokxnjr.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163zpeqpfph.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163whvhclqq.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163rtbernis.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163rqohdtdg.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163newoblss.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163jfuasbcf.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163ssyplaub.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163lkyopqdg.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ploqwcnb.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xygaejbn.html

[U105] JS：节流
来源：http://www.sxryk.cn/163qzjdachn.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163fvgtnwhw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163geukzcbk.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ligthqza.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163pdvgbhgq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ujgxaens.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163armbqmdw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163gjbudmfg.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163udwrtlgd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kbxdzgzy.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163vaaqcfbv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163nvmtvdjc.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163ikidfxul.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163ixlenmra.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163abpkqedl.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163fzfjqdyl.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163bjcpfmwk.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163odolnetc.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163hffflcsk.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nragvsbb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163acqvnyur.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gqejynqk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ftjomrxm.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163psusuggn.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163trumbhhh.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163olccnjii.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mnmiogur.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163qtqzowqc.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ylfagpfx.html

npx vite build
来源：http://www.sxryk.cn/163dytgtmwg.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163vhdprwij.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fnvootou.html

================================================================================
来源：http://www.xuanzx.com/163tenkwwpi.html

统计汇总
来源：http://www.aibaodan.cn/163brxrhryo.html

================================================================================
来源：http://www.aibaodan.cn/163hhfpcdar.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163takwfpze.html

Python ......... 252
来源：http://www.sxryk.cn/163jydchvqm.html

PHP ............ 252
来源：http://www.xuanzx.com/163cvybgblk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163ubnqgjor.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163mhpjlwal.html

Java ........... 212
来源：http://www.xuanzx.com/163vtmthuus.html

Go ............. 212
来源：http://www.xuanzx.com/163miwcsqzh.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ubawpgxh.html

C# ............. 212
来源：http://www.xuanzx.com/163pdggvbyl.html

C .............. 30
来源：http://www.sxryk.cn/163rhspwbhj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163aqoptnyc.html

SQL ............ 90
来源：http://www.xuanzx.com/163djyvjusy.html

Bash ........... 80
来源：http://www.sxryk.cn/163ijdthczf.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163drhuwnbt.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ahxwwjpq.html

Lua ............ 10
来源：http://www.xuanzx.com/163nnsxbqib.html

Perl ........... 10
来源：http://www.sxryk.cn/163fduejtur.html

Scala .......... 10
来源：http://www.xuanzx.com/163gwlvlvjn.html

------------------------------------
来源：http://www.xuanzx.com/163kzovcotu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163woixgdkw.html

按章节统计：
来源：http://www.aibaodan.cn/163qkkogrjn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163hbsddqbw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zmojwhud.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eojeotwc.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163upuftbzd.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wrdxcgnq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vtdzhajb.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ueadzcnp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163fgtbzryb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zbbceydv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kyttgizy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ayhbdgte.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163fyswndye.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qmiqxyti.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lntkbaqt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163ynfsbvoi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yuzdyemv.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hpfjbaoe.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163dddholud.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163kpnfggky.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163aikimltr.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163tlddikje.html

------------------------------------
来源：http://www.sxryk.cn/163erwrtlpy.html

合计                                  2106 条
来源：http://www.sxryk.cn/163scheeccl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163tyfydjkl.html

使用提醒
来源：http://www.aibaodan.cn/163xvafjpku.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vrjrrowd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163epzzpezj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163phupznej.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xcujosyf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163waelhqkr.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163ufvcwkmv.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163pzfxrctm.html

================================================================================
来源：http://www.sxryk.cn/163fjlxadgy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ohfffxip.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163hburuhmc.html

================================================================================
来源：http://www.aibaodan.cn/163ywutsgdp.html

【收录内容】
来源：http://www.aibaodan.cn/163bzmluumk.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163lzyqrvkv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163twmxspdr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163nwntqcrt.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163hhtfthrh.html

【使用说明】
来源：http://www.sxryk.cn/163uyhpmpwz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163gstgtfpa.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163uasjpqhs.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163swvsomoe.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163armabszx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163ihwcwvfm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163tmxldnrk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163trkkcycq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163wpjqutev.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163rmdzxksp.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163itupifhw.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163ujjrvbpc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163bqukszjs.html

【文件统计】
来源：http://www.xuanzx.com/163vukpnddd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163ycnxvusr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wpetdvos.html

目  录
来源：http://www.aibaodan.cn/163ijiynxpz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163jttjfmfv.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163qmzhered.html


<!-- 参考信息 -->