外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ejyvffka.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ghqxfqjy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163eutveonn.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163bnxreurj.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163hlauqydd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163axgxypye.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163xzwfwlly.html

defaultdict(list)
来源：http://www.xuanzx.com/163ejxlojcd.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163mgyaptqp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pnrbfxvx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163lfpgzyvc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163soupcwkw.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fkqonbgf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ggijsswa.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kvttrtfz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gwzbipfo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vyumhjvs.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163bseimuba.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163rzlrylke.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163wxwluofz.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163atinkgcd.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163egfgnlhe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mppjhbrd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163sdkckqya.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163zenfhuca.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nmjmxqes.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xmsobtsg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ncmkqbpr.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nlbiatlb.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163dnnvsnpc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yojyuupp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163tbfupkgt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nirrbjwa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163luijmioa.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163hofhjtab.html

UserId = int
来源：http://www.sxryk.cn/163lqfyskzi.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sfwedgit.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163emthtreo.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kiictrgp.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163bbixawti.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lvdrwqoh.html

python -m pytest -q
来源：http://www.aibaodan.cn/163rkqxyrut.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163epggjcij.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kofegxym.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ljlapnjm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ompgeqqa.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163wugjwzgj.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163cywrvqqj.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163akmwtugo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ntpyoutc.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163umkldbid.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ayqktbxm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163uhebecyy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163usxkoosg.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cqblypdi.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ztdsreep.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163czvvwmnn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ekvxqkil.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163caoobwsl.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gaqbwmnj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163pobvxldv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163eshoskaz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163hsiqhmek.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163vtrgdcbl.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163caiqvkcp.html

namespace App\Http;
来源：http://www.xuanzx.com/163nrcymgmk.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nqjjlhkg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163birujsla.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163bdazfqdd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163djsukqhy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163qboassbh.html

?string $name = null
来源：http://www.xuanzx.com/163kqqrofwe.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163iciaqdsx.html

int|string $id
来源：http://www.sxryk.cn/163fnzlzxgo.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zqihpmkv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ymldocgf.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163hkefntot.html

public readonly string $name
来源：http://www.aibaodan.cn/163xlkgmoiu.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163gpcsrieb.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163ethrqcbu.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163rxvpptkn.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163svcbkvvt.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163cpowvltk.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163lxkitnsd.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163dkijzszw.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163rywywqbx.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163yvopneup.html

$obj?->method()
来源：http://www.sxryk.cn/163ypninxsz.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163vjmmtjcc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163gaezelrs.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163uwfczcxg.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ubkcvizf.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163fodxfqha.html

"值: {$a}"
来源：http://www.aibaodan.cn/163qbhnqkyr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jriyqzyf.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163antctejh.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163wasmafcd.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jmbhloqb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163cvdihajg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163foyjyfgm.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163rafpswkc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hopdspug.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163yggyyxlk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163avgyynmp.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163fvgayjec.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163llrgizva.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163feuxkwuz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ldnahshn.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zsqjwwsb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163navgykua.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hzytyeos.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163kbtmcgth.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163pbdcikzw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163tvwaxpxm.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163wmldxpru.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163qmyijzfx.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163erxhwfbu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163erttkvsr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163acfvcldy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163igjusyhh.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163rthpnlvz.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163mlvquqbs.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hikfnahd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163ooxljywc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ooibhqmy.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163yuafrfca.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163tixhyyhu.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163iblgoxki.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163sosqwtur.html

composer require psr/container
来源：http://www.xuanzx.com/163otisbhyx.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163tbwngxeq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163kcvvrlsp.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163egubtzub.html

composer require twig/twig
来源：http://www.sxryk.cn/163nhlaxsab.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163acbgpilj.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163pvsbkkhk.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163ssuivixa.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163quiosawd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bnvpxfnu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163bbuvxdgc.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dbhbblyu.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163ebhyrgvb.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163nzpdtapg.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ulwzfaye.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163owxnfdtn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163rylwrlyn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163lsvlilru.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ozeedwrk.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bgklghxu.html

a?.b?.c
来源：http://www.xuanzx.com/163mkckrytu.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163dpklbmpv.html

a ?? b
来源：http://www.sxryk.cn/163jgoranoc.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jnindwzl.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ksxfgsif.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163xbwicnyg.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163rishpdla.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163sjwfdbjv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kxieanru.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pirrijla.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ckfnjnvw.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163xgbqhhdi.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163ohiouiyw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163vakvcezo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163fnhudeti.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xmmdrvcg.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163bkofpkob.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163rxfptgrj.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163tycabemp.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163iiyszpre.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163tirotzfc.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ioyioebx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hvkfzwfw.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163qyhjqnnp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163iwvppuyv.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ackkjheu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zgtqblnu.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163lhtppkqp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163lhvfrpvr.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163dphxkqpy.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163uqpgnjac.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163pmntlmnk.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163dhfpkugm.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163vhuedpad.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163rusagzdi.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163hapsmflz.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163grinlcgg.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163kxlydhsp.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nefgojpv.html

[U105] JS：节流
来源：http://www.sxryk.cn/163uwovroet.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ghusrlpr.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163mrfqbcaf.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lhnzgsky.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163liyiqyxs.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163sgnsjbcp.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163nqjjkigk.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163hehwkbvj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163hsuzkvkp.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ompvcwjb.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163xkbvvqup.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163xonkewdt.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163bbbpwwth.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163dstthjwa.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163igsodpxl.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163rodcfgub.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163srxsggob.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ponmumnl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163fbjffuhm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zcjcmvgm.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163fptawpgy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163kztgrmvp.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163nkabalue.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163ibakzfuh.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163znralilw.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163jzhpomik.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163tmeflspy.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163rbytowrq.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163jsdmkgil.html

npx vite build
来源：http://www.aibaodan.cn/163hhsbvkre.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163kjputuco.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qrorgjtn.html

================================================================================
来源：http://www.xuanzx.com/163lcbnqpqn.html

统计汇总
来源：http://www.aibaodan.cn/163lendeopj.html

================================================================================
来源：http://www.aibaodan.cn/163nbiblbce.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dmzzrnhy.html

Python ......... 252
来源：http://www.aibaodan.cn/163pjisaoqx.html

PHP ............ 252
来源：http://www.xuanzx.com/163djureget.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zqtvumql.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163dmgzlggn.html

Java ........... 212
来源：http://www.sxryk.cn/163qprimgug.html

Go ............. 212
来源：http://www.xuanzx.com/163gppqxylu.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163bhttsdwq.html

C# ............. 212
来源：http://www.xuanzx.com/163hfsipvxy.html

C .............. 30
来源：http://www.xuanzx.com/163iiloyvoi.html

C++ ............ 30
来源：http://www.xuanzx.com/163rvgicrgt.html

SQL ............ 90
来源：http://www.xuanzx.com/163ywkstchh.html

Bash ........... 80
来源：http://www.sxryk.cn/163xldknnnr.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163mbipoffq.html

Swift .......... 15
来源：http://www.sxryk.cn/163hnfqtsqi.html

Lua ............ 10
来源：http://www.xuanzx.com/163pfxhuvjz.html

Perl ........... 10
来源：http://www.sxryk.cn/163hcdvywmr.html

Scala .......... 10
来源：http://www.sxryk.cn/163gxwbidwx.html

------------------------------------
来源：http://www.sxryk.cn/163jrgktcjb.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163gpxbwhol.html

按章节统计：
来源：http://www.aibaodan.cn/163dcvctelt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163iuccpqio.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nvcinhud.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pwouawbz.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ftqjrvxu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163jurltlev.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xgzgkcwu.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163twvmbxes.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163elywebby.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163sfjktzvw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163deafvjct.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tqnabyve.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163syvaoinv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dbvhmsnz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ehqqlgna.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163pvzauoga.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163akkmttny.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163fwccqcah.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qlbrntwo.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163dkpojmsh.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hhhjmwdm.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lwnuvtit.html

------------------------------------
来源：http://www.xuanzx.com/163unksqjmg.html

合计                                  2106 条
来源：http://www.xuanzx.com/163tptfyejn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wyypkhwd.html

使用提醒
来源：http://www.sxryk.cn/163vcpkrshf.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zysggdbn.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163kftgtign.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163nnvyxnvj.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163grrebyfj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163ipvkdseu.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163qlpsiwjc.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163imlzfbdx.html

================================================================================
来源：http://www.xuanzx.com/163tussvxxt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163vyizsgkp.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163krxwbenn.html

================================================================================
来源：http://www.aibaodan.cn/163ytrmalwu.html

【收录内容】
来源：http://www.sxryk.cn/163vcvekjzo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163lrppsyiv.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163qnxqwyux.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163walutqni.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163ulbcetbx.html

【使用说明】
来源：http://www.aibaodan.cn/163moxkvvhs.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163enzjpruk.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163ofwahddp.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163brbbnabu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163niyvtvtd.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163qjutpsfo.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163wzvdgqva.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163eqguxagg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163tualoiej.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lhitugeg.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163ebljgmzp.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163prgpcnni.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rrzilwsd.html

【文件统计】
来源：http://www.sxryk.cn/163ijrahclh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163oasnyejr.html


<!-- 参考信息 -->