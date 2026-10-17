外链999!wailian999！

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ypytkxqr.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bwtaooat.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163faifukkj.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163eqgtdsba.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qkppvzac.html

python -m pytest -q
来源：http://www.sxryk.cn/163ecvhbygp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mejajklv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ksfbfdsn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163dacahslv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xtvkbnxl.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163yqwuqwjx.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hagxwzpo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163fgpekfgc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163lqmlynbi.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163igkazmvj.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ijobbict.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163pabtctnp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163zfobtkqx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163fidtgalx.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163lvekkhkz.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gnnakedt.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163cmsopsbs.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ujpzowmg.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qsjixyww.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163qxpqsltd.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163eltwmtqx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163takbeqea.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nsfunsef.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ydqcmego.html

namespace App\Http;
来源：http://www.sxryk.cn/163wtiwlcno.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163crujpjxq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qmliwdji.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163wlvcwzaa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nufkutkp.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163dwycscdz.html

?string $name = null
来源：http://www.aibaodan.cn/163cojuqucf.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163uusguztu.html

int|string $id
来源：http://www.sxryk.cn/163ggrkgits.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163crbcynlb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163xsiiufnc.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bwlivkve.html

public readonly string $name
来源：http://www.sxryk.cn/163pvcjgpnc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163abkpsffl.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163lfjhqmeq.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163musaizyb.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163tewgzftu.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163cvcgwail.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163cberrhaf.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163wnliqznu.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mvpmqvhm.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163ixdsaabx.html

$obj?->method()
来源：http://www.sxryk.cn/163kjgrlncc.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163wxolbpbz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163jmeculey.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163igeubrby.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bozqahqa.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163qcioiyfx.html

"值: {$a}"
来源：http://www.sxryk.cn/163bcepkdcq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163uheclwar.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163qvrvabvc.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163jxcheedl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mfbjmvhi.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163uwohmyoi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163detazlnz.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163xzhxfdst.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ksdvserf.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163gzsclwho.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wrayqnsp.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ephwqfws.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163kfucibbh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163qydchujr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163yvakupdu.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163lvucrlni.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163gqiosara.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163afhqcgnm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163raxupuaa.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163hkgkopbb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163fmikzeub.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163vppbecbe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163lvavcuty.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163kusfaeyk.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163inrnmfjk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163mxxatmgp.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163gqsxzjzu.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163bkipgdjr.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jxvdbqfj.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ctaqliwf.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ciebrkmo.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163umxcbjhm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dgycauyp.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163muabiyfu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163biwbremd.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163doepwyrv.html

composer require psr/container
来源：http://www.aibaodan.cn/163exakoqds.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163sxtrddnn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163zrxjdbex.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163gqbuojod.html

composer require twig/twig
来源：http://www.aibaodan.cn/163fhyinnlv.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163jptothpm.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163qypunmxx.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163dphtndmi.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ysmnqikh.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163kspqcvwb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163vlmwbyhb.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163vaiegmcm.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163dbpwefzg.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163tgqawonm.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163aamcwkcy.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163yfkhkomu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163tpnotoft.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163tusgcdep.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163cygliqsd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163raqsgych.html

a?.b?.c
来源：http://www.xuanzx.com/163cvxnmczs.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163rdfcpwyx.html

a ?? b
来源：http://www.aibaodan.cn/163tifmegtq.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163czdqopjy.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163mjzeusdk.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jpienaon.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163lqzosmwu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163juqxrmoe.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163ifjywbyx.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163kyfjdzpr.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zdizrvln.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163fnxrahsn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163xcnzqwqz.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163dxniufxo.html

structuredClone(obj)
来源：http://www.xuanzx.com/163bfiavnhz.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163oqdmzsfp.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163etydhpro.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163smtdtlgf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163mmhsszhe.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163gpbtageg.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ewfhddrx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163cqxpbqnx.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ffcagzyz.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163fncnsfhq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mwunnhab.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ryigvoej.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ziepkfur.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wfuoftzg.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163lqntewjv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163rtzndhpf.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163qsiqjcql.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163fdjlhoiu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163gpobdixg.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qwcmtdls.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163nrifjykd.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163lanoawmc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163huseibko.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163tbdwyxwg.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rtvyzhtq.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zyblpcla.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163bbqqbteg.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163foqtvwyv.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163plzzebkt.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ldipmagr.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163clulysbn.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dxfpmaih.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163cipkjukt.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163pwlsxgcy.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163fxghbnhs.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163saqdpejt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163tzrdwoxr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163zibxqxxe.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163xnfvynby.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163iugqapcq.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163unnyhrnk.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163blpqdoyo.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uwjhqiuf.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163yqooopny.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163oznoglos.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163vfyufpme.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163siateevd.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163unpyypnv.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163jkifyvle.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163tdwcfiya.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163qccfkejt.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163eslxbseb.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ystpesro.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163yxsqsvqo.html

npx vite build
来源：http://www.sxryk.cn/163mhlmohuo.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163vscbkznr.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163vmyxspxn.html

================================================================================
来源：http://www.xuanzx.com/163afdgkivb.html

统计汇总
来源：http://www.xuanzx.com/163sfrtelxz.html

================================================================================
来源：http://www.sxryk.cn/163nnyocqov.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ltqerlpj.html

Python ......... 252
来源：http://www.sxryk.cn/163lhvwidrf.html

PHP ............ 252
来源：http://www.sxryk.cn/163gcbalsqr.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163zveejmbf.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163kbwzpszx.html

Java ........... 212
来源：http://www.xuanzx.com/163vzqdmrnj.html

Go ............. 212
来源：http://www.xuanzx.com/163hbnvcenv.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163usewyzgo.html

C# ............. 212
来源：http://www.sxryk.cn/163yafifbfb.html

C .............. 30
来源：http://www.xuanzx.com/163ctzjeaut.html

C++ ............ 30
来源：http://www.aibaodan.cn/163bywytkjo.html

SQL ............ 90
来源：http://www.aibaodan.cn/163vmnewtxn.html

Bash ........... 80
来源：http://www.sxryk.cn/163gslzhewv.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163mfacuuax.html

Swift .......... 15
来源：http://www.xuanzx.com/163civwqehk.html

Lua ............ 10
来源：http://www.sxryk.cn/163kxsffjjk.html

Perl ........... 10
来源：http://www.sxryk.cn/163jxqfhhza.html

Scala .......... 10
来源：http://www.aibaodan.cn/163htarcqcg.html

------------------------------------
来源：http://www.aibaodan.cn/163cdrhoezc.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163bemrnwis.html

按章节统计：
来源：http://www.sxryk.cn/163axzxeaph.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163pjdzqanl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mzkqmbeh.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ehsnnufl.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ttowodpe.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163arcjufnn.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vgvrogzs.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163mojraciy.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163bxldgfxf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cxlhnlvd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163orjgaase.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ynmugwwv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ygvdfful.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163cijbmxex.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163czwclhtf.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163aqelxqyc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sjbhzxlf.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ntadtzzc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163tjybjrdn.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163rhwlsman.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163voljnjne.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wvfntibp.html

------------------------------------
来源：http://www.aibaodan.cn/163jbhebwry.html

合计                                  2106 条
来源：http://www.sxryk.cn/163xxrmfgaa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pzfjnsvn.html

使用提醒
来源：http://www.sxryk.cn/163zlhasrlh.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163wjgvetup.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163zrlekcak.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163jyqjorck.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163earsyxtd.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163rlxgemfm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163pcmhaeja.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163cmhtimno.html

================================================================================
来源：http://www.aibaodan.cn/163tykpwgni.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vnbrkmii.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cjvvjuoq.html

================================================================================
来源：http://www.aibaodan.cn/163upwuxnax.html

【收录内容】
来源：http://www.xuanzx.com/163gosbyuci.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163cxdoxpla.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163seqzlene.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163ehqrjrib.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163qpqydjfs.html

【使用说明】
来源：http://www.xuanzx.com/163bnfhnnag.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163mfyblcqe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163lggolquc.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163ipdtppwb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163ygjtjpml.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163bhnsxhjs.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ybvastev.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163iarmqzsh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163yujiovin.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163bbbrzkgc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lawqjiti.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163xodubriz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163rnzmkgmv.html

【文件统计】
来源：http://www.sxryk.cn/163dirmfcjo.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163knnfbizu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163bfmgrdha.html

目  录
来源：http://www.xuanzx.com/163jqljgxff.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xzsimfdk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163ufjesifq.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163cekolryq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163naunafgg.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163lhvsxnwr.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163anbltbpd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163gnkpzica.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rdwwsqep.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163kbznstaa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163iksfkrul.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163ynfnvktp.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163twqfutlf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163qlpiwrdk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163qikywyok.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163gldhpezg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163mkoofpmr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xzfpusqb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163bqytchqb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163yxisqmmo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163cnczhbav.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163iwserajy.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163avbqzkvq.html

================================================================================
来源：http://www.sxryk.cn/163vvycuwue.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163gkuamphr.html

================================================================================
来源：http://www.sxryk.cn/163yvogeqkk.html

[A01] Hello World
来源：http://www.xuanzx.com/163szeljqdl.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163jqicujgg.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163dtgnruaq.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163gzfsxing.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163lljdyoen.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163tjfwwitv.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163gfcamdvn.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163ogojekcl.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163hfnysesa.html


<!-- 参考信息 -->