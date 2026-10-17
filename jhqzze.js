外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ruezhbfc.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bqzrcksb.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fxpeusjw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qgpghwru.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163csuvhmnw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wdjneaat.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163fiodtugw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hfjyvtbm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163dmejneot.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163hymnozja.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fuitvslk.html

list(zip(*m))
来源：http://www.xuanzx.com/163ouifqyqi.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163licjftkd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163lyttpnqf.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163etvixsqb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163miictczp.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163tdbvehfw.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163elwzzscj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163oudpnyag.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ktjhmpsu.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kkkpkwfh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zouvvpwk.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163egopmvbn.html

UserId = int
来源：http://www.xuanzx.com/163swptptzr.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vppkdrtq.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163kiaqipzc.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vxqjctlj.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sfhuutht.html

[U31] Py：单测
来源：http://www.xuanzx.com/163nanefhqz.html

python -m pytest -q
来源：http://www.sxryk.cn/163cnvysunk.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163ivpydrlb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163rfchjoni.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ezillrmq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163jjdiqfmi.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163frfptdme.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hpyoyfno.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163tydqwgcg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163vtzaubgn.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163emhsedpt.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ihljyrkc.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pcppemjl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163nuaptlbs.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ewnithkp.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ixazdprq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163djwnzrmn.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163zxlfqlte.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163dihgwtmy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kbraeadb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zjqxlsti.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163oevbwwud.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163mgvpvfmf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163vqwayhbe.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qwclcsaa.html

namespace App\Http;
来源：http://www.xuanzx.com/163nzqdmxpz.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ijslxmaj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ovsltgmr.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vlmvewgd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eatazayr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163hhkjilnm.html

?string $name = null
来源：http://www.sxryk.cn/163vwzkjcct.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163zlybzxwp.html

int|string $id
来源：http://www.sxryk.cn/163wobflnoz.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pjxidqxa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bpvhuqdg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163cpjlzqte.html

public readonly string $name
来源：http://www.aibaodan.cn/163hrnowfwq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163btodguxz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163fklruhhr.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163zninqcrk.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163mslsiimm.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163njusadcy.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jkqatjhm.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rzpguaym.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xbypwlww.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163gedvjsxt.html

$obj?->method()
来源：http://www.sxryk.cn/163rzwoekbd.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163aueiccxc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163naydtxmx.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kdytimml.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mjdoipch.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163novksvkd.html

"值: {$a}"
来源：http://www.sxryk.cn/163agtwkioy.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163zdtrpvzv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163iuhdbnbu.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163tkapdhhc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163oaditwvb.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163pkuetjze.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163atxxwozi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163rxkjenki.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vbrpnrtj.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ikkfdrsm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163wezsfbdp.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163lffzljsl.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163aturugam.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163jovuwzxa.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163dlpvmezt.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163glclkfmk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163fwimdpjn.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163sxmscsbn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163xjmvwzbs.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163igokjobh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163dndodmvf.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163crjbtcql.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163nolwirzy.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163hjcczyun.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163nprudfxq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xscvdopv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163mgybfych.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163zukvrwyj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163vzutpwwf.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163lnvnmgkw.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163zegnrhpf.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tngeatkv.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163mchvbdgr.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rfhgesgw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pgjtjelp.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163zbojzufs.html

composer require psr/container
来源：http://www.sxryk.cn/163bbftzytx.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163jgdiwgls.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163kfbwdrtt.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163pwacovap.html

composer require twig/twig
来源：http://www.aibaodan.cn/163hmjbudme.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jxzepbin.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163jooehurn.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163cdvnlptz.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163wqxhwvyd.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vfmtirse.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163anfyikjr.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kpqmrkod.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163oepuguix.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163anqdwjms.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163huuqqpqd.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163dpklkrgx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gpdjvznc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163rtxhwrjr.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163zzrbzens.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zhnszqbi.html

a?.b?.c
来源：http://www.sxryk.cn/163lgfxsydv.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163dgenxhle.html

a ?? b
来源：http://www.sxryk.cn/163zlwsehvi.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163sxyhnoqy.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163aqzhjrao.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163zhxindwo.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163uokmvbzs.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163fuvnukwb.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163gscsxxca.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163zbzjhkdm.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163amhyntlt.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163zjyykxpl.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163zecrwxgd.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163fkoefyme.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163bsvjngur.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ywyfsmze.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163wcmwftcg.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163twyptpwb.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163xxmcowjp.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ozpimnsw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163wbxzlcdw.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163nlxmkxbq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hzmiembn.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vvxhalbz.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ibxhsvnx.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163vkawojvk.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163jpfhwycm.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163dvnzvzxv.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163boeixxin.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163bjkekjsz.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163mhwpjexm.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wkocakxc.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163kogxoxkj.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163owubdiqa.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163zckcsrsl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163miwgoauv.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163ksnveqyd.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163xlvordyz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wdomqiuk.html

[U105] JS：节流
来源：http://www.sxryk.cn/163vqbzsinx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ertoxvbf.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163umkvuuoc.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163uowbfxzo.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163qlbinfgh.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163makyqswf.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163uheaqiwg.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163ltgavkus.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163hqiszbqi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vyihxqny.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ljjwadtu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163ruozbebg.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163gghwstmk.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163epavwijw.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163ssmuaatr.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163hnsskjqj.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163shzlvale.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qoiszome.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163yuibtxpm.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aygxollc.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163hkrqhoju.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163evcyspex.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163muizfdws.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163pkarthlt.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163ciocwjmn.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163agdqlgfa.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163alykfdmf.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163xjticqcm.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163otuoxtst.html

npx vite build
来源：http://www.sxryk.cn/163bmfxhwno.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163ikaffrwp.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cygleefp.html

================================================================================
来源：http://www.sxryk.cn/163iutchlar.html

统计汇总
来源：http://www.sxryk.cn/163fyhlbjys.html

================================================================================
来源：http://www.xuanzx.com/163rzdfjjop.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163wfnffwxn.html

Python ......... 252
来源：http://www.sxryk.cn/163txkbzizl.html

PHP ............ 252
来源：http://www.aibaodan.cn/163hcigecph.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kihejlnv.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163lgfunisg.html

Java ........... 212
来源：http://www.xuanzx.com/163cdoosuvn.html

Go ............. 212
来源：http://www.aibaodan.cn/163kdoaiugx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163llgneldm.html

C# ............. 212
来源：http://www.xuanzx.com/163bgorgycy.html

C .............. 30
来源：http://www.aibaodan.cn/163lahcgtqm.html

C++ ............ 30
来源：http://www.aibaodan.cn/163cmmekxvu.html

SQL ............ 90
来源：http://www.sxryk.cn/163mamuabdt.html

Bash ........... 80
来源：http://www.sxryk.cn/163myzbcvil.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163xqzdekbq.html

Swift .......... 15
来源：http://www.aibaodan.cn/163epehbjtf.html

Lua ............ 10
来源：http://www.aibaodan.cn/163qarzdcfo.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ebnjnyks.html

Scala .......... 10
来源：http://www.sxryk.cn/163xshfefvb.html

------------------------------------
来源：http://www.xuanzx.com/163qrlnjfom.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163vsctxfmm.html

按章节统计：
来源：http://www.aibaodan.cn/163nqkpeavg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ajubgkwl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163fhjjfman.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dhdpgzzy.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163kmnrlapk.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163papbfxng.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163prpulfhw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lwzqfknz.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ivrqwqsu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vgcudwtr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163zmpbkpgf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dojlvpgd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163elannuiw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fwkobnqf.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jhkvasfl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163hvhzoiuz.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bevlmgnn.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163lbafkhis.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163bpalyrrj.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163zuwyyrkq.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163xilknlaj.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163qvvhglpx.html

------------------------------------
来源：http://www.aibaodan.cn/163okmapzap.html

合计                                  2106 条
来源：http://www.xuanzx.com/163qvnplekj.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163zygffduv.html

使用提醒
来源：http://www.sxryk.cn/163zduujtvx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nzvflomr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163jkrkosah.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163wiwhrfer.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163obirayel.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163jwangywm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163blizjclw.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163rszkcxeh.html

================================================================================
来源：http://www.sxryk.cn/163imrjpcrl.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163yxskjrqn.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163gmvldqrp.html

================================================================================
来源：http://www.sxryk.cn/163hlofdbvz.html

【收录内容】
来源：http://www.sxryk.cn/163tvvisjmc.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163eiexzudg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163pqojrkbu.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xegrucpj.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163hcxeckac.html

【使用说明】
来源：http://www.xuanzx.com/163uciflnre.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163bzwuyesg.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163sglagghv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163emzczauw.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163fvxvqxdo.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163puncrceq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163pfhlatpe.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163awjcxzqh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163olquklvb.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163ixvuscih.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163gctvbspx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163oeckszpc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163myitnstz.html

【文件统计】
来源：http://www.sxryk.cn/163ptglseyo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163zfqdgjje.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163uqeoemia.html

目  录
来源：http://www.aibaodan.cn/163uqvsidsw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163imhuucgb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sceemjib.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hhkppoqd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163sowqnvwt.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163dquqfxeo.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163iezwhcwu.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163injfucod.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163qcjghvhg.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ymzzddvr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rvtcalqn.html


<!-- 参考信息 -->