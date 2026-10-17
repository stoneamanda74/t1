外链999!wailian999！

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ykxetzlf.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wlcshcaw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dsmytoio.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163aikyccnf.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163tunocqso.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163hbscebug.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163syfagnoz.html

$obj?->method()
来源：http://www.sxryk.cn/163cbdzoqvu.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163bfvqaksp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163zkielcyr.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ddymtnrm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ylqyirby.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163werxmilz.html

"值: {$a}"
来源：http://www.xuanzx.com/163eufkokdc.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tevwxauo.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163gglhovgj.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163oajcxogv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iiaeyblp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163htkvdxkn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163hdwbsbro.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163oxqjvfag.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sqsxujix.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xmritxkb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jnvfqjim.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163xbghvisq.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163yzmbxjvw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163elybpmyy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163efdsdhdu.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163wgungtjx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ydamybyj.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163lokdltvj.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163iuenzgcg.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163uisvkpxz.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163lenvrcyx.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163pfetatvk.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163rltlysae.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163ymvkndvl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163unvwpcar.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163kgtgyuqq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163kpzxxggl.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163mcfnmvav.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163pybmurqp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163hjwekzha.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163jtnaswom.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163paijcvff.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163tnlwwxyz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163hlpkjqcq.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163epojqdji.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163csvaisbb.html

composer require psr/container
来源：http://www.xuanzx.com/163xutfrpaw.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ptfflnfz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163fdruklxc.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163ynfosxmy.html

composer require twig/twig
来源：http://www.xuanzx.com/163cceduhsz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163fkwlkzdb.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163lhaxdouf.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163urljhpwn.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163rcbjymmj.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163eeaxfgck.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163hkottvxr.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ylsolxqk.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163rhomzfqu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163gzeiomvu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163oqhtgqio.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163akewmnfm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163gfnkjvzn.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163kpeircku.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163fhkobmpy.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163bbvwmsnz.html

a?.b?.c
来源：http://www.xuanzx.com/163sqnborce.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163zyltbcnu.html

a ?? b
来源：http://www.sxryk.cn/163uxxcpbii.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163eqrqbhjw.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163qmdxdxck.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vjmvpnaw.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163mlwvcubm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163jzkvdbut.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163laksmniv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qffxweyd.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dsqywbum.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163mpqzqeha.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163wamazbqo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163edodzrqf.html

structuredClone(obj)
来源：http://www.xuanzx.com/163witrqiri.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163nacufeve.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163uatpgkar.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163mcvqjixe.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163jfxepofz.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163rfjmnwzf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ujgxpnve.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163bebrsxsp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163aeyztczr.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zmbfwzdn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nklpqzjb.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163ywmklkdf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163wyvfdzyb.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163jrkloumc.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163uiwfhbxk.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ryngyyog.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kegflmwb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163uaikopft.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163mtltottf.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163nwphcblc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163pslvpugl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163bfcuhbvg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163zxctykba.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163oksstewo.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bgzksikm.html

[U105] JS：节流
来源：http://www.sxryk.cn/163axgpopql.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163nhoddxpy.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jvqbyndt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163msxapvgr.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163bwvjmcgn.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163snzvbctt.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163zyhegokn.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163jexgndvg.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163vivjgxnf.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jaelervm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163rhbiqjvq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163vkietwsd.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163ocofsumt.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163qnjcughf.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163otwbejuo.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ywrxdctr.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163fyhonuqf.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yasoijsx.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163pkozrfko.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fgcbnkhn.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163pcuglvda.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nwzeowxn.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163uokglcsj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163kngbdvlx.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163fohumsmj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163znqhmeim.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163qyzsgztc.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163slpebrhw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163dvljnsqm.html

npx vite build
来源：http://www.sxryk.cn/163mhrqrnnd.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163aeloapvk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gfojrmyw.html

================================================================================
来源：http://www.aibaodan.cn/163gyxxzeet.html

统计汇总
来源：http://www.aibaodan.cn/163ccfqefgu.html

================================================================================
来源：http://www.sxryk.cn/163mfdmmstv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163bhiifblp.html

Python ......... 252
来源：http://www.sxryk.cn/163rupdoxfa.html

PHP ............ 252
来源：http://www.aibaodan.cn/163ebziteml.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163eeaablhp.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163fqbxkiym.html

Java ........... 212
来源：http://www.aibaodan.cn/163nvacycsz.html

Go ............. 212
来源：http://www.xuanzx.com/163ksrnffva.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fxlqmkxb.html

C# ............. 212
来源：http://www.xuanzx.com/163ofdssbjo.html

C .............. 30
来源：http://www.xuanzx.com/163wvtkbukw.html

C++ ............ 30
来源：http://www.aibaodan.cn/163xkbmazrj.html

SQL ............ 90
来源：http://www.xuanzx.com/163ifxdplpe.html

Bash ........... 80
来源：http://www.aibaodan.cn/163yczwmhal.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163octvijhz.html

Swift .......... 15
来源：http://www.sxryk.cn/163knttiqne.html

Lua ............ 10
来源：http://www.xuanzx.com/163ulnxfkzc.html

Perl ........... 10
来源：http://www.sxryk.cn/163cwfccvcq.html

Scala .......... 10
来源：http://www.aibaodan.cn/163ddouyfky.html

------------------------------------
来源：http://www.xuanzx.com/163rmfcmogo.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163pvyqfste.html

按章节统计：
来源：http://www.aibaodan.cn/163ckgrwpyi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rkptolhv.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zexhxtnr.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ocnwmgxp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163apqcfliu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163lgnwhcbr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163wirdrslv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163scdkbkvk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163pedebxci.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ulsoisle.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163gybobyah.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tftouevd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zqjqqrch.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163nsdsxqoi.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163iegcuqoo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pjebndok.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ifcjwtsb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163qzwbakbw.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163fvjvqyer.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163raoxlsok.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163tpvwcoej.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lazzidkt.html

------------------------------------
来源：http://www.aibaodan.cn/163fjhgqgjq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ipbuarjj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qxhguaug.html

使用提醒
来源：http://www.sxryk.cn/163zdlmxvsl.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163abjsimts.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163dostlwkg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163slwqyyjh.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hnksfubk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163bzzwmyuc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163verdwuqd.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163ufsauljw.html

================================================================================
来源：http://www.aibaodan.cn/163tumhtpjb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163nnsvxpta.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163ukxheagt.html

================================================================================
来源：http://www.sxryk.cn/163obrtcrwh.html

【收录内容】
来源：http://www.xuanzx.com/163eryxwsvo.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163cwpfxvcz.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ngbbcftk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163atzqutqx.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163kwjfgzwy.html

【使用说明】
来源：http://www.xuanzx.com/163exdzdzhj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163xewuohmf.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xumrugxm.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163krmikbgh.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xvsvfmks.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163urwhwznp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163hfvtngny.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.xuanzx.com/163qpwxycfy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163mmdizluy.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rejyncxu.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163sofqdcym.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163jpmxmdpk.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163pgkuykcx.html

【文件统计】
来源：http://www.sxryk.cn/163qqycbemy.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163irydmyfw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163virixmro.html

目  录
来源：http://www.xuanzx.com/163bkjbfeyb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ynkutxmc.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163lyvybbyd.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hkqffehx.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163bjcmfxdz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xwkujbft.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163wbgyzvif.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163zjhgdvio.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kqufrfev.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163oaqrypgd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yzbmrdjk.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hkvqyzex.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163etoqfekj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kyzhonzl.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wxboxsel.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163lcgqslkg.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163kvbbkbqb.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ljjmzopq.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163equyctsc.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163yfmshuxr.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163mftzkrgh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zryojvck.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163wftanelh.html

================================================================================
来源：http://www.sxryk.cn/163hqjrpwdo.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163wphgpttx.html

================================================================================
来源：http://www.aibaodan.cn/163qzvyjjax.html

[A01] Hello World
来源：http://www.sxryk.cn/163fbcxadon.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163okjglyzy.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fkllxhto.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163ptanqkkm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163wkqlkkvs.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163gggrksmz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qrdenwuh.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163isidteci.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nyxzjpce.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163zryywtxk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163jrivmgpd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163pytwooko.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163acdlrodh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163nszinilh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163ikrbojkm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163jlpjrmdg.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163dxieofcp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163aqqhtetp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163yelzdorg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vxtsjata.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zhgaxzdj.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163jhhfqmru.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jahvjusq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163kullpkgh.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163bvzxqzdx.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163arhwrfxm.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163opahonlp.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163otnctyoa.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163dhdbukvg.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163gljtfsgo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163madjwlwy.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163rawzktmb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163chfbnoee.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163oxscxglh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163sjaebjtg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163hlqriexs.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ewydqile.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163stvxsmqc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ejftzkfp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163ybofsovv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163dhxexdwv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eonqezrd.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163yymcrskg.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dmcrybnw.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gvcpwvjx.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163myjlfmuf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163jsosxzqq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163ehfvgwcx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163hvkzgpnz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163tixlgnqi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163dwtjpgcr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163ryodohyg.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163cxllghts.html


<!-- 参考信息 -->