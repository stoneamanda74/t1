外链999!wailian999！

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ddupsjat.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163artnebof.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163uputrwyo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163kgqggish.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163tyamfjdj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163orgmyxlt.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163mrggvuuo.html

UserId = int
来源：http://www.aibaodan.cn/163gigsizmb.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xuvpiuby.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jjrjnapd.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tfcrheud.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fefpmsxb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rmfyomrb.html

python -m pytest -q
来源：http://www.aibaodan.cn/163webpuxwz.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ffblylwn.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jnpsuafo.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163itpgiswd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163vsfmhime.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163dgvsffpw.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163svtsfscp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163etzijvcf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163nkhrjiyo.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163xmfsyfoq.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gbxlpcfh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163aawflsat.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bngkfwpb.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163cezqdern.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163icrgezck.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ipoqezga.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jxwacwdm.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xnmfiizn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tbyeigga.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ltrmjnwb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tqmumkrd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163aoclnkgo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163cjkbdwvs.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163akgkkpnt.html

namespace App\Http;
来源：http://www.sxryk.cn/163jrlgrhnm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163edrbjtii.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163qmsughnp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163arcmtqec.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wnxbafoc.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163rzoilqln.html

?string $name = null
来源：http://www.sxryk.cn/163crpthzyd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qebizemx.html

int|string $id
来源：http://www.sxryk.cn/163kvwrlijp.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163iaftntgt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163hvmjidvd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ytjsvcxi.html

public readonly string $name
来源：http://www.aibaodan.cn/163ytepzehf.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163knrkqkyp.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163eqlurvqm.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163imczfhnf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163uvimngay.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163oysvjaqu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163cpkejlcs.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163fvkutsvl.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163oszrganw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163vlnnaipr.html

$obj?->method()
来源：http://www.xuanzx.com/163pjimsugd.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163gnhklkzb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163kdpntyix.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ikcnlofx.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163iygeyzqr.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163gnidzutb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bfwnxrtw.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ztrkpthq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163jglgnuvt.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ipswwyvw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163djjsdrge.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qtmvcqft.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vcyyuoyt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163telvfpfw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zpisavpe.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163kmxvhpuw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mpgjgryg.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163yexliqpm.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163vqdkaolj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163enliawog.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ivaxnxwr.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163kpurpcbx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163pianmgwg.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kznsiydg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163sikbojwo.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163yoamawdp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163bgvsaiyn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mqpbhfpj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163plfrvelm.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163iykhrhdi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163nadyzglt.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ubpswxpl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163wzkugzwd.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163ytlebmvb.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jbevjamv.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163vodsgezr.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163qwvmwpli.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163vayjrhzy.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163vcjcgifq.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163kvkvspgz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163rntphehm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163wwvrodsz.html

composer require psr/container
来源：http://www.aibaodan.cn/163ejberwfc.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163lbdxgxwz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163grwviysj.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163qyezkjgh.html

composer require twig/twig
来源：http://www.sxryk.cn/163jzogidfs.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163uyxoixyf.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163rddeukuv.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163hxnnxkns.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163boshlbmo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163oqquzetc.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xjpvlwnx.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163htkjtslx.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163isxxxjfc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163omdrfiwo.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163zebserof.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163dwzkdqzk.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wrypyqwv.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163ldseuehh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163vppptoke.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lllgkvwl.html

a?.b?.c
来源：http://www.aibaodan.cn/163ncvvxkvq.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163kqgvymzl.html

a ?? b
来源：http://www.aibaodan.cn/163uazvlyql.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163usnznwch.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163bnroefjd.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163nqbgnyvf.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163zprpxddd.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163wyxpmody.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nphmpgpa.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163pdbhrbyz.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163riatmquu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163iggoasqe.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163aylreuzv.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163zvfgawel.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163vjyohzel.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ggdvaefh.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163asfmgpay.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163cqdfdnra.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ucewyatb.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163brysqpwk.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163tsonkhdo.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163wsyisalt.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dnmcdrkl.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163horzlpod.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jxzhhzxf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163rumotmum.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ppnjutha.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163gzmriudz.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163htxmbxyc.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163wznxifwm.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163dxfadlgd.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mutqnomy.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163qcphsmmz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163hovbgygq.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163rhdedzwr.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163tpujuerj.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163cxbvjrwn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163bopvipyw.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gsrzrqea.html

[U105] JS：节流
来源：http://www.sxryk.cn/163kitmdtin.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163lglhxthk.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163spvwudwz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163xvbtnqgr.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163kftfjyqx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163jxpiaful.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163kschvcjy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163yxursjlp.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163jssldsgd.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163bxexohye.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163lzrsdpsr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163qtlxpany.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163cbzobjrj.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163oobgawvl.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163kidusxlx.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163golekosg.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163twsbxqti.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163xgjfqcwc.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163tuozikem.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ajpegsyx.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163bltcrtqj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163gtcutlay.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163fdhcrrpw.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163alaafiko.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xcvtcrup.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163mvymixqr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163iiatiozf.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163dxctjlts.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163mohrdgwu.html

npx vite build
来源：http://www.sxryk.cn/163dobnoamy.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163nztuzhau.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163utcvsszn.html

================================================================================
来源：http://www.aibaodan.cn/163kjcxzesj.html

统计汇总
来源：http://www.aibaodan.cn/163deytvnte.html

================================================================================
来源：http://www.sxryk.cn/163piqbwzef.html

按语言统计（条）：
来源：http://www.sxryk.cn/163epmzxmhk.html

Python ......... 252
来源：http://www.aibaodan.cn/163ypoipcfr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163eaqmpcis.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163edybhtrf.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163kqzccjfd.html

Java ........... 212
来源：http://www.sxryk.cn/163tkmzhxzx.html

Go ............. 212
来源：http://www.aibaodan.cn/163obghbotz.html

Ruby ........... 212
来源：http://www.xuanzx.com/163uiqgsspg.html

C# ............. 212
来源：http://www.aibaodan.cn/163yhxpdhgf.html

C .............. 30
来源：http://www.sxryk.cn/163nhajakfb.html

C++ ............ 30
来源：http://www.xuanzx.com/163zntllyqj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qygrgpwm.html

Bash ........... 80
来源：http://www.xuanzx.com/163hradjfod.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163iaudxyux.html

Swift .......... 15
来源：http://www.aibaodan.cn/163ajzugoym.html

Lua ............ 10
来源：http://www.xuanzx.com/163itsrsxgi.html

Perl ........... 10
来源：http://www.sxryk.cn/163hiasbqpk.html

Scala .......... 10
来源：http://www.aibaodan.cn/163lzoergqp.html

------------------------------------
来源：http://www.xuanzx.com/163kcdrrviu.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163crupvttl.html

按章节统计：
来源：http://www.sxryk.cn/163mqjovglq.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163awthxxih.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ndcmoicw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zixljffj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163woajvkey.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163otnbtcyt.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163uptmlaid.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163kxkwzpuv.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163fnehdqse.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cbkxrriv.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gxdiczvj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nlqryoay.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pkckbgwf.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wnnqujqk.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163mdkijkyk.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pilcwfpm.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rttazajh.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ynuvbwvx.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163rwqvczzw.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163vkwqllgo.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163adpuqmsp.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163zgiqwgbb.html

------------------------------------
来源：http://www.aibaodan.cn/163brwbcwal.html

合计                                  2106 条
来源：http://www.xuanzx.com/163ltenfkvj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kutfbhqw.html

使用提醒
来源：http://www.aibaodan.cn/163dlmtvtsw.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lpkzavyd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163xyepsyuz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163elsaxbok.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qkcqhklg.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163abdsoook.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ujwfqlrt.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163yabvcknn.html

================================================================================
来源：http://www.sxryk.cn/163myxgdypa.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163adxzbgep.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163jojnpxhs.html

================================================================================
来源：http://www.aibaodan.cn/163nsinsktl.html

【收录内容】
来源：http://www.sxryk.cn/163icwczrcu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ijdcfvlj.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163bzlvwvlr.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ncojvgkn.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163kshbwllt.html

【使用说明】
来源：http://www.sxryk.cn/163fnajchnp.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163fdwvgkbe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qibauapk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163vmmjimgk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163hyxyszks.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jxzqldmw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163lwrixgfh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163jmvmjtya.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163innzqiqp.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163mtimdyaf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163lfjjaxuv.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163lltowljb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163jfgyjbjs.html

【文件统计】
来源：http://www.xuanzx.com/163xytbearl.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163nghgbxct.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163raoggszx.html

目  录
来源：http://www.sxryk.cn/163fmgrcgrh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163difwbxpu.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163hhyzykln.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163jopmiaeu.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163atsskqzu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163nfmhfewu.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163aubbeugm.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163shtlxlcj.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163shrvyoni.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163qvlipyqr.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uelugzpo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163qwtzuaap.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sxmikuay.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mnqjykfg.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163nguzxpjz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lqtcgpri.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163zauyacif.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pnvmkhww.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163rclenzri.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163qulzysuh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tflcoowp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gwbtjyrx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163vkzquyyr.html

================================================================================
来源：http://www.sxryk.cn/163nrwcaxil.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163oecjjzzv.html

================================================================================
来源：http://www.sxryk.cn/163xihaoayw.html

[A01] Hello World
来源：http://www.sxryk.cn/163tlzrxixv.html


<!-- 参考信息 -->