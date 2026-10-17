外链999!wailian999！

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163wxwzsyde.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163glasoqyp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ngaosjlo.html

defaultdict(list)
来源：http://www.xuanzx.com/163xrtnilgx.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163kftvjjbb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163aqkqvwhu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163flwhfwmt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163lagcgktl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cwwixelh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163uayrjcye.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lwcmfdke.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gxpepjgb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163jlbtorfu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rjvmbxgi.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163uzclwzed.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163cbdctfzk.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163djsxjzcl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163aroayvmx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vseylwfk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qmrjwrzt.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163cikyxmjz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163tzjrvuqz.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163czksbqvr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163xzdvuyda.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pyfknvni.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163cdnjaoyb.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163mqqtpiqq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163uqljicdm.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163aulxadjs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163eujwizre.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163viijiyag.html

UserId = int
来源：http://www.xuanzx.com/163eebjhmns.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163uadpglcf.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163xfpnxsov.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163pdevowbi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fpvkwhqw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163tczaschm.html

python -m pytest -q
来源：http://www.xuanzx.com/163cdboyvff.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163kqhtbtsu.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163gikpeaep.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163arjrttwc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163huznjckd.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jjrxjqlj.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163sluxlnhg.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163bguhovnq.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163mqpukytz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163iowsyzzm.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jffxuwug.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163fvdgoavd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fxgfpmun.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ofnkienr.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163rhrqkkvu.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163alcvqvcg.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163juxknjyf.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163aliscqut.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163upbmwdlc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ihmfoimc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163dhmtymmj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rrctgjuj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cgxgxzuu.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163mgjipoun.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jocqywwg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163gsxgjenr.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163isczdsst.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163cnidpqdj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dbqbooxh.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163wjktmfkk.html

?string $name = null
来源：http://www.aibaodan.cn/163nwzkpikz.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163dqkgabup.html

int|string $id
来源：http://www.xuanzx.com/163fnfgryml.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ilptejle.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163flivrmih.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163emzlfhnj.html

public readonly string $name
来源：http://www.sxryk.cn/163cyykvumd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qtixpezi.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jkzsrpjr.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163pucsnorn.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163cqknbalx.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163jxbpuwsz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163hwtcqtjk.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jweebgyp.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163wexctoip.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163blobfjzs.html

$obj?->method()
来源：http://www.xuanzx.com/163mrsmsqkc.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lyqckkof.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163wfvwpddc.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gcqqwhhr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bozqrzly.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ojuhxgjz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163voawroeg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163gwjffafu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163zwinfxic.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163lwfpuysh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zwncurax.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dzgnmrft.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163mwujatwy.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163gqrwbiuo.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wyqlhlnr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163ytteyhfs.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uexvxbcr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163hbbxolhy.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rfqtmllm.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ktroquph.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163awwzctcr.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163nuqwpkhf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163poxhjzpl.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163alpxjqwh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xsezmxzv.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163svxyiysj.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163acsmhmzu.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pctoshxl.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163tewkorww.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163wpdkatyr.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163chakmgat.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mfvzyyvx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ighwxgzg.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163glxnlkfr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ivzkzptc.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163xdtcnhnx.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163scqimgll.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163rfreusjo.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163kpojipwp.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163vmbkdief.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163tianeecw.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163gvmftxrp.html

composer require psr/container
来源：http://www.aibaodan.cn/163dddogfni.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163tacreenx.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163swcaszty.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163jwiktgzw.html

composer require twig/twig
来源：http://www.xuanzx.com/163uvxmgtjn.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163jeewprae.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lmiiczgq.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163oxqllfab.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163pxziiphh.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163qluvynwi.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163cjelvouv.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163lcedewpj.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dwegrmjl.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163akihsake.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163wjrhrtce.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163cvoldzxn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163dlectkvk.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tdgaxubs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163bsofcnso.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bzpnwcwf.html

a?.b?.c
来源：http://www.xuanzx.com/163pvlmvevy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163dwzzxjxh.html

a ?? b
来源：http://www.aibaodan.cn/163akhwjmoj.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163iwjmqmao.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163quqfiwho.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163mijoxnta.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ruitfhxf.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163vytxvfbd.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163lwzlxaqh.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163lsscopzg.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jxzkozev.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gphqzgtc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163tualsygz.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163ryyormup.html

structuredClone(obj)
来源：http://www.sxryk.cn/163utpbqdvv.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163uxsjswln.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nbiqzbdi.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163dzwbyzwh.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wovehnoc.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163sewhiktm.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ldhxtuiw.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163homvdsld.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163qpxtkcqc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163yveyaayf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gjcoggxm.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163fvmfbfbx.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163zummpkuj.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rtrqfssa.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163hajruydg.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dqlpvbzq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bibeowbq.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163kxmyfuln.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163izwanrrw.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163zebvzghi.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163igwjszij.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163cgcwzsvc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163iihpussw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163eqxtkofi.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xbmtivxp.html

[U105] JS：节流
来源：http://www.xuanzx.com/163htswqsol.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163quwrdvzh.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163xxakkiry.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163nvixfqxb.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163osgjziuq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163aupvdnlh.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jfnypoet.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163xaatdoep.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163ckdthzsw.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jviwpzwl.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163zvnzkhzf.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gtgvpuci.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163spwjplhs.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163sppefrlg.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163asqdlkdy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163qatuiynp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163euqbalwy.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rmfrxqbj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163thunoodx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163duiagcpe.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wwqdxwdk.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163zznklfqx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163sgltfzam.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163fayhknaa.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163qixvximc.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163sgvijycn.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163suirmwhq.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163gmjuowvt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163qfhnifga.html

npx vite build
来源：http://www.sxryk.cn/163vjdxtnqj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163rphdeext.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163nafuijct.html

================================================================================
来源：http://www.xuanzx.com/163axywqfen.html

统计汇总
来源：http://www.xuanzx.com/163occbwvqv.html

================================================================================
来源：http://www.xuanzx.com/163hcqbymkg.html

按语言统计（条）：
来源：http://www.xuanzx.com/163twbmzbbx.html

Python ......... 252
来源：http://www.aibaodan.cn/163hphxrpse.html

PHP ............ 252
来源：http://www.xuanzx.com/163tqrgxgtr.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163lzharbfq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163skcstxgi.html

Java ........... 212
来源：http://www.xuanzx.com/163nhvmoyfp.html

Go ............. 212
来源：http://www.aibaodan.cn/163ifblivvj.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xtpxdqbr.html

C# ............. 212
来源：http://www.sxryk.cn/163gwnpgszn.html

C .............. 30
来源：http://www.xuanzx.com/163fvsvagby.html

C++ ............ 30
来源：http://www.aibaodan.cn/163wtnduayq.html

SQL ............ 90
来源：http://www.sxryk.cn/163jssaxwgl.html

Bash ........... 80
来源：http://www.xuanzx.com/163pzqgtbca.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163fjaqgrjy.html

Swift .......... 15
来源：http://www.sxryk.cn/163eabskoub.html

Lua ............ 10
来源：http://www.xuanzx.com/163pjzxnsbi.html

Perl ........... 10
来源：http://www.aibaodan.cn/163sgcoqmvk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163nzuytxrl.html

------------------------------------
来源：http://www.xuanzx.com/163spmzjbfo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163jxwiwhif.html

按章节统计：
来源：http://www.xuanzx.com/163jceoqqur.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hlmbkdro.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163dfyqkdgx.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163occrucpa.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fkiupwss.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163vxdhitxl.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163mcfnlibn.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163enpgefyj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tevbrhdr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dytyvnap.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163kdtydjpw.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163smexccsp.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vmcopqix.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163naijamzz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163fgmpcmgl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163pseetiji.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uqxydlsr.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163rncbzwgn.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163itphqvxy.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163uexctemz.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163bhytdyfy.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163ovkycukh.html

------------------------------------
来源：http://www.sxryk.cn/163rbdnaajt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ayhwvgvc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tmdyhiwv.html

使用提醒
来源：http://www.sxryk.cn/163yjlkqknx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uneekaxu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163yqugmygr.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163pjlmoskg.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163nlprnzdj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163xftwhplo.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163hylrdzks.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xbwgmlfi.html

================================================================================
来源：http://www.xuanzx.com/163xkjtmljn.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163hscvfidy.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163fdhlyioj.html

================================================================================
来源：http://www.sxryk.cn/163cqchuxfu.html

【收录内容】
来源：http://www.sxryk.cn/163wqwpvbgf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ktqwprsj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163qbkzrleb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163lixpbhbd.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163fvyyieew.html

【使用说明】
来源：http://www.sxryk.cn/163pccycfja.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163kbhwfbjy.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wsucfdms.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163ykdqmgts.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163zzbgtfkv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163snzwjuta.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163htghjdqa.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163vtsncfty.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163zwgfdgnu.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rhopwxvh.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rghbsyrj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163vuoemtml.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163sawuyrwe.html

【文件统计】
来源：http://www.sxryk.cn/163qcejlagv.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163nnikdyfx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163sxidjsfv.html

目  录
来源：http://www.sxryk.cn/163pdofocdv.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163igqldnzi.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163togofufa.html


<!-- 参考信息 -->