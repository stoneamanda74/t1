外链999!wailian999！

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163kwzqcrbr.html

================================================================================
来源：http://www.aibaodan.cn/163sbqcsmuz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vwiuncrj.html

================================================================================
来源：http://www.xuanzx.com/163dwefwmsw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lzncamsm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ldfneegt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pgjphoqf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163avjavtgk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163gaahiouf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rdshtqtt.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163idxehlwz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163mskhfvts.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163yegajrsj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mnbbnhff.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163sjtfrtuh.html

{**a, **b}
来源：http://www.xuanzx.com/163yocwuray.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wohrecpf.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rrkyiglx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kufdfnor.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ljvgdqbj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163vtngqhbk.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rdwzijsj.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163lceuxxaq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163cnlrjjib.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163oxvrfqlk.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jnxzlmoy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163igjguymd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hcsiwmwa.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163quempuho.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163dsvfldhg.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163kfsvghlg.html

defaultdict(list)
来源：http://www.xuanzx.com/163tejowthj.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163uhrhwszl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163kdnrlqdv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pgudunco.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cvnsydfr.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163orlvefwi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163qluvgvpj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163bkuoaehf.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163twwnalut.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163gxvvppnx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163mncypygz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rztotzyp.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163fkohbnfb.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163fkwtylqa.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ajhxxdpt.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163nsbfiysi.html

list(zip(*m))
来源：http://www.sxryk.cn/163lllvvnjs.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163adzpwimg.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bopotgxl.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163uyupwykj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163hwlblxga.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ydcgbnll.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qmmlwbeq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163ibsnrzxo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163pbmzcbbm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qsvfakdc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163poxafhwq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163glioueqe.html

UserId = int
来源：http://www.sxryk.cn/163zyiignij.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163udshpszq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163stqnqyan.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lczuwaqt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163duhnczhz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cvhhovdm.html

python -m pytest -q
来源：http://www.aibaodan.cn/163mvzhvteu.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ezoprjlq.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163zoiprvoy.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jpcgnaok.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163lzipttfq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hgitmjky.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163wscofqrm.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163laytewso.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163gwxxigjv.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163eomeiozk.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zkozeysn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163gpdkquzo.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163gpupnhss.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163iwggwqll.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163diiohdsb.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163oftwywze.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163czpauswa.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lbmltxym.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kglwmrpv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jrritqpc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163htktnqmu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163fsqxznjh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lgjqqlnv.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ozwyvcik.html

namespace App\Http;
来源：http://www.xuanzx.com/163mcorksyu.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ofnyljsh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lxjeliec.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163xrefnjil.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tfxjxrvs.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jmlxtnaz.html

?string $name = null
来源：http://www.xuanzx.com/163tbrufflu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163crrtlovt.html

int|string $id
来源：http://www.xuanzx.com/163ofozjotd.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163iomaftfo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163sdcxnoqj.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163icrypkfq.html

public readonly string $name
来源：http://www.aibaodan.cn/163ijrocqtd.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qfdxkvyi.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163pspppycd.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163eftrfaip.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163fhdsdljs.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xmnbflcj.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163sznuasss.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163bgilgfki.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ndszlyox.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163johixhrb.html

$obj?->method()
来源：http://www.xuanzx.com/163uscwtbic.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163kkxoeoac.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163igygmwid.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163gnbjimkp.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163edclrhpw.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163brdavnao.html

"值: {$a}"
来源：http://www.xuanzx.com/163auxwqurb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163aunsljmb.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163kwyhwjxd.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xmncqqxp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rchicnsb.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163idpqkvnq.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163hndhzrsf.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163enzmgmis.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lkjdflmc.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163qjvblllu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163wpmpwspc.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163igrpuyzv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163ivfkztvx.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163obmrhlwu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163jlwbqqyv.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163nigydaxb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163rwbfornd.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wcvjvnds.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163uzufrgng.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gphhrpxr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163irmjnytd.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163dfchsslv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163rnowhqln.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oicvqebs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jqtdhzfk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ugkgssmy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163qopdnrts.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163wevehrxh.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xgoybfpc.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163pplhfhwm.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163xnpqatwh.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163dqrmcikc.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163phnxjqvx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163nmkdtuyi.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163jvxatvsn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163xidxfujq.html

composer require psr/container
来源：http://www.sxryk.cn/163uimuirwr.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163iskqirfc.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163ktbrurfq.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163iqgrsywf.html

composer require twig/twig
来源：http://www.aibaodan.cn/163vlcgpxkb.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163wpwpywdm.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163fqtfmvzr.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163djjmlbos.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tmnqfbxo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163flahcgdx.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163rinokmql.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163jwxcicba.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163glyahkup.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163uckkudsn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163pzdpjcua.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163fkwpziny.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163zskdectp.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163kxplfrtr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163dumbyhqp.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163irefesan.html

a?.b?.c
来源：http://www.sxryk.cn/163pevnmetx.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163tgrlddvp.html

a ?? b
来源：http://www.xuanzx.com/163mmneovqt.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ylrtuipg.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163myvfbwfj.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163hfrdmier.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163etbvqqmx.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163rvttupyv.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163jxkajbkj.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163xhyglhpi.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vlyophou.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163sbruwgfq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163zalvniiw.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163honpujar.html

structuredClone(obj)
来源：http://www.sxryk.cn/163cildjllx.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163xujnmwwz.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163rgerykkp.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163migsrrzr.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163wrwamhqt.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163blxxxxqj.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163kaqsolup.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163layslnvz.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163jgwcptje.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163wjuvkpvp.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sujenfgm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163qfloryck.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163fvgcxeqj.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163hxtmpaoa.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163ykmwwpaa.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hwfggnwt.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163mijwddrl.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163yhfitclx.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163kopwswsz.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163dwhslprw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163jtgzrstm.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163uwzbaylo.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163pkenenlp.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163ysytrujv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163womkznfs.html

[U105] JS：节流
来源：http://www.xuanzx.com/163wlimxtvo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163hpjgcuwd.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163bnlfxgxz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163dzpzqqgt.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163cmdipzcl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163pryjohvq.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163yxmoktca.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163lfvtdpsg.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rvzcjduj.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163lzehcpbl.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163iwtxnbfx.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163dyabkzqx.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163mkxirgrr.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ttqwkxxw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163txcignvk.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163vutgzfse.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ojeggbrc.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163msqaelnh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163fdopoyrg.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dkumvnpl.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163grjhaghg.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163hnyvmqcb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163egimexwb.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163wfyfhbgs.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163mclozkqa.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163lnvllqbl.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163lsitckrn.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163kfldnctc.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163wvbaqibv.html

npx vite build
来源：http://www.aibaodan.cn/163potablqa.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163odkceyjm.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163giswgqpj.html

================================================================================
来源：http://www.sxryk.cn/163kinlqgzq.html

统计汇总
来源：http://www.aibaodan.cn/163ycgqnwae.html

================================================================================
来源：http://www.sxryk.cn/163kfjhkbis.html

按语言统计（条）：
来源：http://www.sxryk.cn/163sfhparnm.html

Python ......... 252
来源：http://www.aibaodan.cn/163bozckgkz.html

PHP ............ 252
来源：http://www.aibaodan.cn/163gpddgrpz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163blfkyghy.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zsvjxmzk.html

Java ........... 212
来源：http://www.aibaodan.cn/163xdfnjpdz.html

Go ............. 212
来源：http://www.sxryk.cn/163vboqulgk.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nbisnwcs.html

C# ............. 212
来源：http://www.xuanzx.com/163sxahnevi.html

C .............. 30
来源：http://www.aibaodan.cn/163utzofxrg.html

C++ ............ 30
来源：http://www.xuanzx.com/163hadmpqtv.html

SQL ............ 90
来源：http://www.aibaodan.cn/163mdxbuxkl.html

Bash ........... 80
来源：http://www.sxryk.cn/163ooqljegn.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163mqstdjzl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wrntgefv.html

Lua ............ 10
来源：http://www.sxryk.cn/163imtssocb.html

Perl ........... 10
来源：http://www.sxryk.cn/163llezycfx.html

Scala .......... 10
来源：http://www.aibaodan.cn/163hjmhwxlq.html

------------------------------------
来源：http://www.sxryk.cn/163lfpdplcz.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163whzhyaev.html

按章节统计：
来源：http://www.xuanzx.com/163gsxdnqeg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rohafxmt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vkrlbasl.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163hztglbtt.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cgcnrgke.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163xfdbtmip.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163lcpdzybi.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163pjbnkwsb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163dnskydse.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163efhvhfgz.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163eaxcjhsc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163mgrfofbt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fsfaahdu.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163otjpicqy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wjydsntk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hbfmjvuk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jdxmrgid.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163hywoyraq.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163sxlbrmev.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bpzxbfft.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ghryaqdq.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163yvtxgvmm.html

------------------------------------
来源：http://www.xuanzx.com/163oqxxzbnh.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163silxstro.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rkrolqhg.html

使用提醒
来源：http://www.aibaodan.cn/163dzzkncgl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163fbtcbtmr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163rrohtvua.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163kslibdws.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163mxihesut.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163nekudbgp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163oydbzazw.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163hsurgnfu.html


<!-- 参考信息 -->