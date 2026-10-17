外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163zumqpzds.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163vrqvfjzt.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wflhmdah.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ezwztxan.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hharrvek.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163suslpaht.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163lnlvgvig.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163evxpzupu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163pbrjwvds.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163eflqxeoy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163mtypnwyn.html

list(zip(*m))
来源：http://www.xuanzx.com/163sxuhsepl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163gwymjwim.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163gyvmmoma.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163hhshpuie.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163mphixbxk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163eyfexwzm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163tcekecde.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163pffeedkj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163mgenwcno.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ywayscjs.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zbpxrrxc.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wvmsonru.html

UserId = int
来源：http://www.aibaodan.cn/163tbmbafxk.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163sqxyrrpd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163fvaadfop.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xcyqemga.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163oyssesxm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ruepavkp.html

python -m pytest -q
来源：http://www.xuanzx.com/163mxnvltky.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163feuesalo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163rgrcjqng.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163crxsgzbz.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163biijwugf.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163metbsemf.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163lwovvimt.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163eybbbwqj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lekbgluj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163blacqnyk.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ztedtrle.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163mkudloti.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163xrvwpiqw.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163elvykred.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163cmokxdyx.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qyekpaet.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163uransoew.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163svxzqtka.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qdvoqqpn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163mpynevgj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163thgnemjh.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163lutwrinl.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163spcdghrq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163onkjwuzg.html

namespace App\Http;
来源：http://www.sxryk.cn/163aplgrlul.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163aqnmwcqu.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163kjhkgrbm.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qdpxcoyk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hvbyvtqu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ffdzyujh.html

?string $name = null
来源：http://www.xuanzx.com/163jxheixfq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163yvwhzhsp.html

int|string $id
来源：http://www.aibaodan.cn/163bredwzpk.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pclxmwrm.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163uumvklra.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163cflmmogg.html

public readonly string $name
来源：http://www.aibaodan.cn/163vymqvubx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163fxwbxjgp.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mycbkmjc.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163cmpdpcta.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163aopzxajm.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163srzblxzi.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163rtbpqrtx.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163cwmrxgmt.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fvsprdur.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163gdclpkvy.html

$obj?->method()
来源：http://www.xuanzx.com/163dhzeaxul.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163uprmgsoo.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163ahtuamxt.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163jdaodlml.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163opbppsws.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163fbahodpq.html

"值: {$a}"
来源：http://www.xuanzx.com/163ptxyxwvl.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ervmrief.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163pqhhnbps.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163poyumjar.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wnhfojkb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163noesmqig.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163aohpzbjk.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163pfpuakop.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bllmvgzv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163oxvsnlwz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jijprgam.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163cvllqfwm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163iafjetpx.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163lzcarxsx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163jszcvhsp.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163ujnjspzv.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163nuzleoas.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163iixxpliv.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163apngpswc.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163mkfcqtml.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163lijfrrfl.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rqkqdrwz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tmogbzdx.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163kjlbfceu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ssirsmzi.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163mdhyoqpn.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163nxlmzbrb.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163mlxswjkz.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163kaqgudyl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163bycgamyh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163fvoeewqu.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163wadhbjmx.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163okwbarhv.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163wxdurlhe.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163scworsmc.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163byckewpq.html

composer require psr/container
来源：http://www.aibaodan.cn/163vxwoagqn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zkrldqqn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163daafjbqa.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163rklsgnfz.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wyaeujkv.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163zvgzmmqo.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163sjwuciwe.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163zxogybcx.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163bezrqdua.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tqttphpb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163ydxcbdui.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163msyovwdd.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163mnjathyy.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163xubywfjh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163jguwvuby.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163htnsrutm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163ongqyhhc.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163kzijaetq.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163glyzaywn.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lwskwbqn.html

a?.b?.c
来源：http://www.sxryk.cn/163fczbysdp.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163mcwyueur.html

a ?? b
来源：http://www.xuanzx.com/163vsldjksh.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163pofqksrw.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163kkfsbxih.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163zzsgulpj.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163idrehirr.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163ixchxujf.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163kfzzqgof.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163owoldnuk.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ltrqtjjv.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163epptqzzc.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pyqtcemh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163digbflwa.html

structuredClone(obj)
来源：http://www.sxryk.cn/163mvxxzrvf.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163qubftncs.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163wxiuxpbl.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163gmrzjbpf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163iwvoxqiu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163gnwzxmbk.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163jtndnxqz.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163prhsxtid.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163lzqyiboh.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163uljjasel.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163saqztrom.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163mudkndgh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163nunewkhf.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163aqjscbcd.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163uwuuytdk.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jmocpzpu.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163dqonyvqy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163uxpugfph.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ypbqvryd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bexwmiay.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163wlsvkaoa.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163hvjtmrui.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163pdqtdone.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163uuwtleoj.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163crzhngzl.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163yxtajsns.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163dlusiumt.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fzhmbgph.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163xzsvxtti.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163mljxbxer.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xzdtpilu.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163pstladob.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163gbulgdag.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163xwukmftw.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163iguppoxf.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qbhiarxs.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gabcjtjp.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163vwyvynpo.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163xnzdpktl.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rrjuuhtj.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163cybwohbv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163lypbddvk.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qiqrdnzs.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mlkkstkr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mxemvpzm.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163iosnwucf.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hgrcuwdk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163mzzidlbr.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163muhcmxbt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163rvoifsjv.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163noqcermp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163mszwnrik.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yqimrely.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163qebelwuk.html

npx vite build
来源：http://www.xuanzx.com/163gvqfggqr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bajywmub.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163dbvjuqps.html

================================================================================
来源：http://www.sxryk.cn/163duplizvm.html

统计汇总
来源：http://www.sxryk.cn/163lvictgwg.html

================================================================================
来源：http://www.sxryk.cn/163xtuohqbx.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163nnjkftrl.html

Python ......... 252
来源：http://www.xuanzx.com/163pnuyualq.html

PHP ............ 252
来源：http://www.sxryk.cn/163wzylsede.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163xqobfphj.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163stjldbmj.html

Java ........... 212
来源：http://www.aibaodan.cn/163hkbasuot.html

Go ............. 212
来源：http://www.sxryk.cn/163qsjztcjg.html

Ruby ........... 212
来源：http://www.xuanzx.com/163hbrnvtdp.html

C# ............. 212
来源：http://www.aibaodan.cn/163lhqvjpsw.html

C .............. 30
来源：http://www.xuanzx.com/163mdngqiua.html

C++ ............ 30
来源：http://www.sxryk.cn/163lrlhgzjh.html

SQL ............ 90
来源：http://www.xuanzx.com/163wlnoycch.html

Bash ........... 80
来源：http://www.xuanzx.com/163tzdinsay.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163zsmsojxy.html

Swift .......... 15
来源：http://www.aibaodan.cn/163pyncbbfw.html

Lua ............ 10
来源：http://www.xuanzx.com/163skxsavqg.html

Perl ........... 10
来源：http://www.xuanzx.com/163xpsucvjd.html

Scala .......... 10
来源：http://www.sxryk.cn/163krvcglsc.html

------------------------------------
来源：http://www.sxryk.cn/163pidkbqko.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163isaaxeov.html

按章节统计：
来源：http://www.sxryk.cn/163adatiuiw.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163nssmxvjv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lgvewkji.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163aegiqviq.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cwxxztfs.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163uuofwoco.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ygeujopr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163nftvkojd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gtdfiged.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163qryrawfd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163oaeazgzl.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ummpgkup.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ruueoknq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163eshdagni.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lanxbtvh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163rzexanqh.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pwwtxkyk.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163quuxsrfg.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163ykyecmma.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163xnywghsi.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zltihykk.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163vjwkapbx.html

------------------------------------
来源：http://www.aibaodan.cn/163iefwsnkk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xszftrob.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fxgatxhq.html

使用提醒
来源：http://www.aibaodan.cn/163wvqzaokc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163kcpfuzzp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163boariwpz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163hazfdorz.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163gaoljojx.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163kckztsht.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163vilnrluy.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163gsisddzt.html

================================================================================
来源：http://www.aibaodan.cn/163stlmrozb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163cfzflpif.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163srzygzrf.html

================================================================================
来源：http://www.xuanzx.com/163utvezarm.html

【收录内容】
来源：http://www.sxryk.cn/163eclrnwqr.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163ngqlfkwm.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163skhkfxeb.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163flqtusvv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163eqpiqmxb.html

【使用说明】
来源：http://www.xuanzx.com/163uieufuqq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163zoitnafo.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163yklpjqwj.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163xmhuxqxf.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163cqwmsjhn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163kpxrhxts.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163aravwrmg.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163mrlsyrur.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163ygnuqlhv.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rhrqpsim.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fnvvdfng.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163zfrcjwje.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163vvrxjjic.html

【文件统计】
来源：http://www.xuanzx.com/163ddqibpcx.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163rlrsxahj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163spruznfc.html

目  录
来源：http://www.xuanzx.com/163djlmtwxv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ernetghs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fhvvwavb.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163xqlumyai.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wcijxowz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pdbwoihs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163spfbhkdy.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163pxhnagsx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hkspwvnl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163onswypvm.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163mvwrpbad.html


<!-- 参考信息 -->