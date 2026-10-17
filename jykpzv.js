外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wbjrlihx.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163eesbwoef.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mladsiry.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dmfwnhrh.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ewlbqrjz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163uvcgyloi.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jxsdlgjn.html

defaultdict(list)
来源：http://www.sxryk.cn/163cngwjqrd.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qmllcybz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gthdrkgg.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163quvhqroh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163huyqhwtq.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163afenadrp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mtrkanxu.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163esvkkfyv.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bmhzwwxg.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163wntmzdoh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163wglvgxrf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vftkrwgq.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163rmddfcee.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vtwguygr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163qijwtgzq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163usqwvslt.html

list(zip(*m))
来源：http://www.aibaodan.cn/163worohhkl.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zlckkqlj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163xwbgoemx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lfkoyjwa.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hbrmllyd.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163urducncr.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163iaggswjm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ceofredn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163zkapwnje.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rlsvjniy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163rjdcpumj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163oqbbsydy.html

UserId = int
来源：http://www.sxryk.cn/163lhibmlfy.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gtcifzbn.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163imogalxk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ydmxtswk.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163tozwwtan.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kkkxonel.html

python -m pytest -q
来源：http://www.aibaodan.cn/163wqednfzu.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163hqcwleni.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163iifjmxfb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ewhvdpto.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163zfbokwkx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163yctteech.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rordelvm.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ocparvkh.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163sgedaxjq.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163jzmrojjz.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163xrtajxan.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lnfbdlst.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ywnzyhfx.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163gtvtiypm.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163nulojqny.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163tebujgon.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163evxvofqx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ttkjbpdy.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kzvrvrqa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wgvwacae.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tdugxoia.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163isjcsqmi.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163otwwushs.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163bnmatwhp.html

namespace App\Http;
来源：http://www.sxryk.cn/163wabjnkex.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163oustjgcf.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fsjyvboc.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vbejrwwy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yotunvhi.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163nldutbyg.html

?string $name = null
来源：http://www.xuanzx.com/163hcplkehl.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163jznqmlmk.html

int|string $id
来源：http://www.xuanzx.com/163ivtjirrr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163tgszwdob.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pitzipxq.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163evinueve.html

public readonly string $name
来源：http://www.xuanzx.com/163dakdbxyl.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163bbgcnmsx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163owclufpc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163svlwembl.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ntllakaz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163luggipjt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163espfqrov.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163rjytaruu.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163shjeqzso.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163rqzcdcar.html

$obj?->method()
来源：http://www.xuanzx.com/163lqziudle.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163mtsxhjqe.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163xbtzydcd.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163eghifeek.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163idvbbjtk.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163dymouejd.html

"值: {$a}"
来源：http://www.sxryk.cn/163vegzgded.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163gaoftfsh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163eaxyzjuq.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163syognssx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gwskixah.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ayhqinzl.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ijtmihve.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163cexzeoum.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kjrcxnmz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163fddakujc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163xjuytejt.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xbiidxmt.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163kpivbuox.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163hlwgmzos.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163mnvuvdkb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163rxeyvyvx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163xllpknyr.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163dwaccrla.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163bvbuvylw.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163cumxvnvq.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163pdarqiap.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163omrsyogq.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jtptcqoq.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163qbmaggjx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vrkwlqoj.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ptqjixsq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163alelvtkp.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163xxdeksed.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vcjurxgq.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hjbmwsyd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163wwkyiyev.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163xyuwwpvd.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ebqcvoqm.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ffvzwtuc.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163xokullrv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163jlhlvkqy.html

composer require psr/container
来源：http://www.sxryk.cn/163mgjikrdx.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163ekvtvubb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163hifwalff.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163flovxfol.html

composer require twig/twig
来源：http://www.aibaodan.cn/163drjntayy.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ouctbdvm.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163rlpdxpwq.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163fyegfyip.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163gcvhoacs.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163xvfyovtv.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163aextsbem.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wnibnhkb.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163vgbjpawl.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ehsgsdsl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xaczilsb.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163duxelras.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163enclzbpf.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163fqjqcyht.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163gbsrbabq.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163iyejcfse.html

a?.b?.c
来源：http://www.sxryk.cn/163qwiiuakt.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163jzrwuvir.html

a ?? b
来源：http://www.aibaodan.cn/163ccedxqqa.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163yhegcwqy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163wozdlnjd.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163tdlzumzj.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zcifugpi.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jzjurfpc.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163tqnrcdxt.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163aefynrou.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fuiflrer.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kyffeqid.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163vgnrggod.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163xmqpifap.html

structuredClone(obj)
来源：http://www.xuanzx.com/163gaannprz.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dmudkalh.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163dqpxamnz.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163oxrdergv.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163rwspphay.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163urhmyzbx.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163xecszdbs.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163gedrntzx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jbzoflkl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ojpravdd.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bsmzqwju.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163daumbaeh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163jvrexzzq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pfofbcrt.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163nhczziyg.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163zohlcbgy.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163gwpkkkdp.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163syugtsux.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163sqpleyzk.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163slommzpc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163lioyshdq.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hqcctphe.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163kllaikzp.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163nvosqysp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163plpsbsob.html

[U105] JS：节流
来源：http://www.sxryk.cn/163diixowcv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163endcqsln.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163aqlrjhol.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163cvifzqjw.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163fbdleqhl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163aarbgbdq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163phwgpmok.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163fjcbuzev.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163jwxgmgwd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163okcifubz.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163nyhehztl.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163rdhrvlzp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163eojlhrqb.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hopinnet.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163xtggxpjd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163dmxgmewn.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163zwdzrxsv.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cmuimfse.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163exdxubjw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hrrstejt.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163gifnkhkg.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163sykzqpus.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163cblimpof.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163dgamehpg.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163anxrajaw.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xhasdypz.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hfhtfqqi.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163wxbdhkfv.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zbireuut.html

npx vite build
来源：http://www.aibaodan.cn/163bweylemz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kuamlhgg.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gezxxpcw.html

================================================================================
来源：http://www.aibaodan.cn/163dhejahsz.html

统计汇总
来源：http://www.xuanzx.com/163nkpyusct.html

================================================================================
来源：http://www.xuanzx.com/163zzhgrtim.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163cbfjmjyz.html

Python ......... 252
来源：http://www.xuanzx.com/163patayihd.html

PHP ............ 252
来源：http://www.xuanzx.com/163ngegjqjg.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163usiremnx.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163plfpixqc.html

Java ........... 212
来源：http://www.xuanzx.com/163acimikpq.html

Go ............. 212
来源：http://www.aibaodan.cn/163yxeedzhd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163zqulcvpa.html

C# ............. 212
来源：http://www.aibaodan.cn/163qpjagbqg.html

C .............. 30
来源：http://www.aibaodan.cn/163jwdeoihv.html

C++ ............ 30
来源：http://www.sxryk.cn/163vnfmoekp.html

SQL ............ 90
来源：http://www.sxryk.cn/163yqjnatqs.html

Bash ........... 80
来源：http://www.xuanzx.com/163qlytyflm.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163dyjlshuh.html

Swift .......... 15
来源：http://www.xuanzx.com/163ubzgozbf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163mkyahjrz.html

Perl ........... 10
来源：http://www.xuanzx.com/163ivnzkybf.html

Scala .......... 10
来源：http://www.xuanzx.com/163qqjcyasy.html

------------------------------------
来源：http://www.sxryk.cn/163dcsyoesb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163pmvkchjv.html

按章节统计：
来源：http://www.aibaodan.cn/163erwqhcxm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163gvuhqpmy.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nkmjmqbs.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163eaurggyg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tayyhnaq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163sysiqzfe.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163sozfgtew.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163prnwxxqf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tqadastc.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163vurajqhh.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163qnlowlvw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163hczpjalz.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163xvtgkjdq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pebnrfoz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zdiyrltv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163zofjnlfi.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163uwieynpa.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ybburfya.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163bkgvbrgt.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163bbvpdjnx.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163qxistcnr.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ctuxcect.html

------------------------------------
来源：http://www.aibaodan.cn/163yjesrwmb.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163yrndskux.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ldawftzd.html

使用提醒
来源：http://www.aibaodan.cn/163giomkhxg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jnkmimfi.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163aqnzircz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163cvtzxpla.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gubyglmp.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163lcaeukiu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163snkesvbe.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163gztlignx.html

================================================================================
来源：http://www.sxryk.cn/163tvjymfoe.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163eynfcpas.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163jxhmtluj.html

================================================================================
来源：http://www.aibaodan.cn/163lfhfjjpa.html

【收录内容】
来源：http://www.sxryk.cn/163txrvikeb.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jiglijwn.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163nlkkwnyg.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163vjqalbft.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ietgvmqo.html

【使用说明】
来源：http://www.sxryk.cn/163tmaqzeri.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163wmcuzypj.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163agbejath.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163mtpsoppn.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163acnkmpae.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163lioygrld.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163lngofrnt.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163yaxxnfuw.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163nytxfcmf.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163asljzjvk.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163hmxefubl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ofohqbid.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163fcyvdoth.html

【文件统计】
来源：http://www.xuanzx.com/163wxgppxaf.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163nompbgcd.html


<!-- 参考信息 -->