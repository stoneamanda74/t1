外链999!wailian999！

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163rcixolzp.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kjrwiilk.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ndujbbjd.html

defaultdict(list)
来源：http://www.aibaodan.cn/163quehbowc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163dodipqdp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163gwidnzxj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163kaevxlus.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163mpadqxlv.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163mqderqsz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163cptcqqlz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163bxwpcqjb.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163krqlpilv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163xmocrqmm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jlankcfd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163erorrjpw.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163qeoaaoqr.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163htigujki.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163snsoiijs.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163gfnnhicu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gmkwepwm.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tuxzxcby.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163tgmodtvq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zoxqkrtt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163yyvmxmdz.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zjaofgoa.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lfrodimv.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163zribjphk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163xvxaqqxc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163flzeobcf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163aowylpop.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163npithzvm.html

UserId = int
来源：http://www.xuanzx.com/163wedjbdvu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163spdkunws.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163rhjlqwsq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ihaznrrw.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163auayycxk.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163dtnbdsla.html

python -m pytest -q
来源：http://www.sxryk.cn/163kkjffrzh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163oruvexdo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163fwikqpyi.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163thplvuom.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163poqeigwf.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163pbgtsvla.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163atdrwwmj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163pfcurehc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163odxnrpzj.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163dlzybcas.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163rnzebcoe.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wgrmxscz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163pdjcnshl.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jxzespmq.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163qemzslir.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163qxrgfssa.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163dksydfwo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163nqubybxp.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rskldxrq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dazwdjnt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163erkpashi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163gnutcpre.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163yjavgllk.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mtmmvlfk.html

namespace App\Http;
来源：http://www.sxryk.cn/163xdhgaody.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163xevhdqwz.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163mqsfzxlt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163luecgfrr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gmqdfhop.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ydblsqmt.html

?string $name = null
来源：http://www.sxryk.cn/163hzeqriuf.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163upsovrls.html

int|string $id
来源：http://www.xuanzx.com/163vnvyslwu.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qcvchbyr.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163mazjudna.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dbyhuxxr.html

public readonly string $name
来源：http://www.aibaodan.cn/163beqrtrnr.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163gnbzqztw.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163qkibpecq.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163bmaaymrq.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ownibtdp.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ngfbpgyp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163skjuugyb.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163laqyxyei.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163fyvvifwz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163epbzndpc.html

$obj?->method()
来源：http://www.sxryk.cn/163olscorto.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163bsyfmbvd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163qkwwyzsq.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163mdrivspu.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ccbasxkv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dmzghdea.html

"值: {$a}"
来源：http://www.aibaodan.cn/163kitihora.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hzjqbhwu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163troccpjk.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163uxlxihpk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xugiaosl.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qbzclndc.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163iutghnxd.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163dfkzaxtt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163puiyosnt.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163azuhfxak.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163vcioxeew.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163ynqsinpw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ymvzpgsa.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163efngudoj.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163yyeuisys.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163icbdimhe.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163ojhscfpw.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163cvvqmxdd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ikdvohay.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pcdsmwdj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ophpdfzx.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zevgsoig.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163psojlnrj.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163mtsynwxr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163jxdvbroq.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163llucduyl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163pyhycvxj.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163eqndbhbe.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163qolmzijj.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163nhlknpgz.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qqvcsahq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163hbweqqdu.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163cqmxmbsa.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163ptzpgico.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iyyhkbjh.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163uffmdpin.html

composer require psr/container
来源：http://www.aibaodan.cn/163aaothons.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163exswzjlo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163lnqxhbex.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163sqztjwvx.html

composer require twig/twig
来源：http://www.aibaodan.cn/163eanelbru.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163gnkuoahg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gbialkby.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163xsluvpxo.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pirnutly.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qppwavxo.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163wbvdakos.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163gfqrubft.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xqsklfyl.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163zffujexg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163utbmpjmn.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163omlftyok.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163cihbovhb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163jtpcadgc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ekxrllrl.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163vahvlohq.html

a?.b?.c
来源：http://www.xuanzx.com/163tcmyfbzu.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163jcqjccxn.html

a ?? b
来源：http://www.sxryk.cn/163zbqxymxi.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163snyeskpj.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163uqzoeqbj.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163fvqhzzml.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163mlocisiv.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163yvakxfqs.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ljtvarhh.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mjwvcahw.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nxumkbdg.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163vcavhwfq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wdgbrfsd.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163pcpemcxh.html

structuredClone(obj)
来源：http://www.xuanzx.com/163prlhglux.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163mxrbdstl.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hghnpies.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163uhqekxfq.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163lksiceyi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163zwoucnxa.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163fmshqody.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163jpielyrk.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xkvqnhaz.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163lvephpti.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ryieuqkl.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163hakgyvdo.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163atskkevv.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dlrrpgxi.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163auchfrti.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163adjughsv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ayedjpye.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163uftyqdvi.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163cidtrkoa.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163wigywolu.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163xsorinji.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vtwnatih.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163awujfjsd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163myhoapcj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cybetgik.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163kjovpuuq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163caderqvy.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163gyzsoeck.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163jzfttdwp.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163nfuzkzpf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163srenikyz.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163xvfpeyrp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163wdjatrnq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163nhnljzvc.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rzyfijtf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qjeqnzce.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163haebefjd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jolsnzgl.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qmdkgsen.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163ahnbegdp.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nanfvpmt.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163invxhaxd.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ozxupksf.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163iepqhozy.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qedqwrbq.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163kvpzwaea.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163llboxpeh.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163qogvhqav.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163wvnufcfb.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163kwiylxov.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163bjdasujo.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163efzhqmit.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163domxqpnv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163vkxvfblb.html

npx vite build
来源：http://www.aibaodan.cn/163tcbccoau.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163jxdlocid.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163ofqxihdr.html

================================================================================
来源：http://www.xuanzx.com/163nugezzrt.html

统计汇总
来源：http://www.sxryk.cn/163sjislrxj.html

================================================================================
来源：http://www.sxryk.cn/163tuummkab.html

按语言统计（条）：
来源：http://www.xuanzx.com/163hwgyhfig.html

Python ......... 252
来源：http://www.sxryk.cn/163jmtzcdqy.html

PHP ............ 252
来源：http://www.sxryk.cn/163rbslrcja.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163suofquil.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163mbnfnnlv.html

Java ........... 212
来源：http://www.xuanzx.com/163iziyimjj.html

Go ............. 212
来源：http://www.xuanzx.com/163cqbyoxds.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163wkuywosa.html

C# ............. 212
来源：http://www.xuanzx.com/163jxgfriwz.html

C .............. 30
来源：http://www.aibaodan.cn/163lnpbdgvu.html

C++ ............ 30
来源：http://www.aibaodan.cn/163giswmvpz.html

SQL ............ 90
来源：http://www.sxryk.cn/163wtkzdeku.html

Bash ........... 80
来源：http://www.xuanzx.com/163xfkoohsy.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163quferktu.html

Swift .......... 15
来源：http://www.xuanzx.com/163cuybwdbe.html

Lua ............ 10
来源：http://www.xuanzx.com/163xrieqgpv.html

Perl ........... 10
来源：http://www.xuanzx.com/163tddbcydo.html

Scala .......... 10
来源：http://www.sxryk.cn/163oehjezeg.html

------------------------------------
来源：http://www.sxryk.cn/163qjrjnzyx.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fygetzjw.html

按章节统计：
来源：http://www.sxryk.cn/163nsdcudrf.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163axiynsyh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dxauecdp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pwyldsjb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163msugwawi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163eebowzwo.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163occesbwx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dwoqxmgb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163eqigwcha.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fgujfxqi.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163wqzjidqu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hglvhmld.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163maudemku.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kkqjlahv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163bludsrso.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163fkgkyhid.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163atwxmrab.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ithsutgz.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163hasqjqst.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163briasgoq.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163wemtviok.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163iwywjzed.html

------------------------------------
来源：http://www.aibaodan.cn/163mgckgovo.html

合计                                  2106 条
来源：http://www.sxryk.cn/163ourvbfru.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163slaoniat.html

使用提醒
来源：http://www.sxryk.cn/163iopdqxsu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xsnpnvuo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163bcumkkct.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163sbfmkvwp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163vqexyvpu.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nytadvtv.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163jepzwrmq.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163jntvkpgt.html

================================================================================
来源：http://www.sxryk.cn/163kvyshjjb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163fgwgbwih.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163gfnmcvkb.html

================================================================================
来源：http://www.aibaodan.cn/163nssnmtky.html

【收录内容】
来源：http://www.xuanzx.com/163oprkwqco.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163pfhvcvux.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163grxjqtwg.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163jomoaral.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163txbwwxtg.html

【使用说明】
来源：http://www.sxryk.cn/163mbnwxpkx.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163dqqlzqyy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163apyoduzz.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163btrpumzh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163eeiremzv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163nwxrmtwn.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163gsjbnjyu.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163hvcylxgg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ojhidqsk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163spkiahiq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163bjhkovrp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163iboonwiq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163dbsbslci.html

【文件统计】
来源：http://www.aibaodan.cn/163pvbxvhra.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163ryajggjf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163feibkdgo.html

目  录
来源：http://www.sxryk.cn/163xvgrirht.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163dpxskpqq.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163ruqihahe.html


<!-- 参考信息 -->