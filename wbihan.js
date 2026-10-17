外链999!wailian999！

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163lxowthhz.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163abmxhfzx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163pijumgtd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163zxitupwd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163sxigxakq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ahoxgcfp.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163bskrugxp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163kwzkvppv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cqdlidin.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vddtarzl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163qirbcnwn.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163paswlnvv.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163kxiwxble.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ybwkqtie.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163qgesmiaq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163uzybaspn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zglqsyia.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163pepvaqkf.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ctzsqmap.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163nenfulzs.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163fwkrhnsj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jejjollo.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163zsfgcres.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lkbzmtzq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ijxyvqrp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ptgcujwf.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qxqkwwpo.html

UserId = int
来源：http://www.sxryk.cn/163yxayksum.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ybfwadxm.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zmgakmpx.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163rujiiduj.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hmmfjlzf.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163hwtckeex.html

python -m pytest -q
来源：http://www.xuanzx.com/163gwlrrfpb.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163oeknlruu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163namofeef.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163lwsxhzkc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mjlvuzrg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163jqnzbnig.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163edoqlsyd.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163pihfkttg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163nrmucafe.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163yhnghvtm.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163pbbfycdu.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wgjrgjyk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vbpuacow.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163imxjozdo.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163gtkidksa.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rgsegisp.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163oetfbodo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lrghbbnw.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163txfsbyhw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ccavuxru.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163pelclsad.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qvrtsdws.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163ockzhyfk.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ftuckpae.html

namespace App\Http;
来源：http://www.xuanzx.com/163mcowrgul.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yggmmnpg.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163upkkomhc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ojwsxcji.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kshrzutg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163qpcgglkk.html

?string $name = null
来源：http://www.sxryk.cn/163xqadggqr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ffaikuda.html

int|string $id
来源：http://www.aibaodan.cn/163expepdjk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163aomqspdg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mqvbobmc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163teecfovp.html

public readonly string $name
来源：http://www.xuanzx.com/163dpnczmue.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zxkegvwk.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xvdytwsc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163exlaktnc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163uocdpnjg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163zrdkfymt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163zkrubxdp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cxvtvhmk.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163lclafhhx.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gfbhiwds.html

$obj?->method()
来源：http://www.sxryk.cn/163krzctham.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163plvizfez.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ycopuyas.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163lpehczzh.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pyuckjcx.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163infcuybq.html

"值: {$a}"
来源：http://www.sxryk.cn/163vyjylgse.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163wujpggdj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qlkuqmwk.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163mtmpltcu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lccltlea.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163pwolbylg.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163yefmmnbs.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gynwvfnb.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jdvxdmmc.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163aqlctdox.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163hkgxjysz.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163zmxbfeof.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163rdhkygai.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163wmetjjhr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lhvxzlqb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163utzhklik.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gdcvvkbd.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ujwtyrbf.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163qpfqihrm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163iixytjix.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163yhorkwrl.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ghgrqlty.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163aebohqqb.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163mqosujoo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163bnwppybd.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163zmbujtix.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ffobfwhu.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163qejmgmfl.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163awxrfbgl.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163cyctkpiy.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163xwnvltyn.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163gtkeqnya.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163fxojakew.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163lgbcxfyn.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163khixkfna.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163cxtqnesr.html

composer require psr/container
来源：http://www.aibaodan.cn/163vvqwpqsg.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163moseddin.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lahiyava.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163isoqmtho.html

composer require twig/twig
来源：http://www.xuanzx.com/163ahqlfjbk.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163dzbtppjo.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163lopgvpnl.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163imswhkfu.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163dduzkxzi.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163qddprqlq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163gupeslve.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163crxmuabf.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163qdreowue.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163gffetafq.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kahignwp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163ojgxbcjr.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vrgbsldy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163atehbjdw.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163wwekjbkb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163krvriobi.html

a?.b?.c
来源：http://www.sxryk.cn/163mbrpumth.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163iriylqzv.html

a ?? b
来源：http://www.aibaodan.cn/163dhwdemxz.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163curvhcxk.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ypxkwyjr.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163dbxkqwju.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163lykhqgha.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163avgnyewc.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163oduswpkz.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163cqxzzuti.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xcigktff.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ncumjizt.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163diaqfmiq.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163ibjipyap.html

structuredClone(obj)
来源：http://www.sxryk.cn/163toglqgmh.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163mhoupowy.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163jnetnbxe.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163evspjghx.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163owjwbtrd.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163waavveoy.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163sqelacdj.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163ydsdayyq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163fhilwvsi.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163pwedwuja.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fggldwnn.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163etprplkc.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qyzevupq.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163djmexijl.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163aoxabmmt.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163hqjmmllj.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163beejtwql.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163xnstovem.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ttkfrbsa.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163ewpvldel.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163cuzssnet.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163xyimenud.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163hfkgrvpt.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163buhvkgtx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jzdqkqnc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163jnddgrva.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163uxgextts.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163dyescwoo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ryzpacec.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163hdtcmwvd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163fkvzsjyq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163oixoswxu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163yvqwsqew.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kjqopgvg.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163rbvrriwy.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cekdtovt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163kjmnbucp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163altyqtpy.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hrwlweeq.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163baenwizz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163btzhsjsd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163bpiabmwr.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mgtajrbx.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163lzkzngwd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hsqmqmut.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163liwgqfhu.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163jycliixg.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163nwkxnthn.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ghfkzlgc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163tswkaxyb.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163tafenloo.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163jrnwxotp.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163txzodnhd.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vdeophon.html

npx vite build
来源：http://www.xuanzx.com/163ghnxwzzp.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163umecbgrr.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163qodwbull.html

================================================================================
来源：http://www.xuanzx.com/163fvdesenl.html

统计汇总
来源：http://www.aibaodan.cn/163xkpxdusp.html

================================================================================
来源：http://www.xuanzx.com/163wsvbvbql.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bauzitfm.html

Python ......... 252
来源：http://www.xuanzx.com/163tyftxilh.html

PHP ............ 252
来源：http://www.xuanzx.com/163eiugmfeh.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wsgydkei.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163zkgdvywv.html

Java ........... 212
来源：http://www.aibaodan.cn/163esaejhzp.html

Go ............. 212
来源：http://www.xuanzx.com/163fkupajhc.html

Ruby ........... 212
来源：http://www.sxryk.cn/163fuiltomp.html

C# ............. 212
来源：http://www.xuanzx.com/163comvknzz.html

C .............. 30
来源：http://www.aibaodan.cn/163qdpvotjb.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ldliawzw.html

SQL ............ 90
来源：http://www.sxryk.cn/163seaopmgo.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ymgwqmcx.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163dnziovia.html

Swift .......... 15
来源：http://www.aibaodan.cn/163wxohhjqa.html

Lua ............ 10
来源：http://www.xuanzx.com/163jzvigkgr.html

Perl ........... 10
来源：http://www.aibaodan.cn/163xarjehsm.html

Scala .......... 10
来源：http://www.sxryk.cn/163roibidum.html

------------------------------------
来源：http://www.sxryk.cn/163liiuzxsz.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163uyqxwjwh.html

按章节统计：
来源：http://www.sxryk.cn/163hpegqrei.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ktlnzndc.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vagdxxld.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ylligjbn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163gmmxpksf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163amnonewf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qeahiwbx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163jdfsotuj.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fcidtatr.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163vukwkpzo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163genjkspz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xlthisth.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ksettoks.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ecqvrskf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163hbviveqh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163zfdjhfpx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qjuqtyxs.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ndwjinli.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163kbeaddhx.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jwjwoafw.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163vevncjga.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163turovitn.html

------------------------------------
来源：http://www.xuanzx.com/163ndokovxk.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163hesdzyhw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163goofwtdz.html

使用提醒
来源：http://www.aibaodan.cn/163tisxcrgh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ndkpzfcr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163rqnbedrk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163pdoifzjk.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163yesqwiwd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163dwjpzxvf.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163xtsnuuml.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163gbijafkb.html

================================================================================
来源：http://www.sxryk.cn/163gebmxifb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163tdamjtkr.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163swguikfz.html

================================================================================
来源：http://www.sxryk.cn/163wkinfdvt.html

【收录内容】
来源：http://www.sxryk.cn/163esgsxjda.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163zsidkdmh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163micwrvez.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163ytetlkin.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163elwaeiwc.html

【使用说明】
来源：http://www.aibaodan.cn/163obgveeks.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163klhbaifz.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qzrlxgts.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ctaxzyps.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ymddmwaq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163qggqfiog.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163ewltahzj.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163qtkiawyg.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jqbdwbrz.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ololjqhj.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163mihlfdtm.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163wyqjxyde.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163bxpzlroo.html

【文件统计】
来源：http://www.xuanzx.com/163dwiqfznb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163feykhamt.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163osexkkij.html

目  录
来源：http://www.aibaodan.cn/163pbzltjxb.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ugibhgxp.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163ebqggwac.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rgxcwdoc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163urotswbz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163gvaoinjo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163rdvynsox.html


<!-- 参考信息 -->