外链999!wailian999！

[U61] PHP：正则
来源：http://www.aibaodan.cn/163wagllmri.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xemklmzy.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163mfvrhcbm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fopbbbrx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163palhinqh.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163qtmmoizu.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163risouedy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163uaazypep.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163gccghqke.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163bbphpwno.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163yoolxhqw.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163kkcruqii.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163uitirndt.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163xpupzfwk.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163eqmrzeor.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163xxdplgon.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oxhqlliw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163amxdmabu.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163czdyfycq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163lnmjvmqs.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163otlnpsaa.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163hlangmcl.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ujucznwp.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qrcrdbac.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nseqfzel.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163vfokbloh.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163xvetgata.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163kgaglzwl.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163mtggjjch.html

composer require psr/container
来源：http://www.aibaodan.cn/163ofgozgmb.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163ytnfaibt.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163khffaxhy.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163dovdnwsc.html

composer require twig/twig
来源：http://www.aibaodan.cn/163nqdkwamo.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163uxkoeexo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163utaamsrp.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163lrvblyes.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ldgstplq.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163qjjnrxhy.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163qprjzpjr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163tbmdqtpl.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163xuemrhqb.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163cimqigoc.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163dymnvxlk.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163rfyliorq.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163pnzzusma.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163jmkejhqg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163eibiysta.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163yktkiksn.html

a?.b?.c
来源：http://www.xuanzx.com/163cilcpwjo.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163wnaaabzs.html

a ?? b
来源：http://www.aibaodan.cn/163dhbejflg.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163fobbmoaf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pfrcszqi.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163chnenscd.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wnnmnijd.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163jbwzydax.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163zxwzfzhr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qqpgsouh.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jkmeeayt.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163khmkudwd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163dycklhji.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163haclthzc.html

structuredClone(obj)
来源：http://www.xuanzx.com/163lszotwey.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163vuxnugrv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163nqgkwqne.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163haqecwvh.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163gdmnefqj.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163hihscxeb.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163yhrrmpnr.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dwephlfs.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wiifimzb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163iuzrouox.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yvzgfglp.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163egztqlgs.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163kxxlxgzh.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163fkravixh.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163awqhqyvs.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ubcwwcdc.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163jyhwzigz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163qufeuqow.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163ojubovsd.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163oqbikrfd.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163erutapnw.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163fwwyrisr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163uozzxddd.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163lggfwffd.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nuzzepej.html

[U105] JS：节流
来源：http://www.sxryk.cn/163quidgycm.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163kidrxxqd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163fjxovayq.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163wqapavrb.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zmtpogzg.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163fjuamgjb.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163knibbjfx.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163npqxwkck.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163sdsneeuj.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pcahtokl.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xorfzbeh.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163zjxrphxe.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163jdhhiofw.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163kxrgnuah.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163gzkkddem.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163jxozaevd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163mtctxgtb.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lyiwsunl.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163oukihguq.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ujgycepg.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163icjfgegq.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163cucgsvxa.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163izqlzrol.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163rqtzndbl.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163rzbbcycv.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163xfkfpeac.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163zkdujkqy.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163acjdhame.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vskjacug.html

npx vite build
来源：http://www.sxryk.cn/163njmwqhaw.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kjqiqgwy.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163vwewuech.html

================================================================================
来源：http://www.aibaodan.cn/163vwnmqytw.html

统计汇总
来源：http://www.xuanzx.com/163cghxnhtm.html

================================================================================
来源：http://www.sxryk.cn/163tttowckm.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kobjsmct.html

Python ......... 252
来源：http://www.aibaodan.cn/163yshfjtvc.html

PHP ............ 252
来源：http://www.sxryk.cn/163qgngtctf.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163yrmkpjzq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163rrhvfasa.html

Java ........... 212
来源：http://www.sxryk.cn/163mucxgnos.html

Go ............. 212
来源：http://www.xuanzx.com/163pzhbgvqe.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nretrbho.html

C# ............. 212
来源：http://www.aibaodan.cn/163uvdimrcf.html

C .............. 30
来源：http://www.xuanzx.com/163zrncrfll.html

C++ ............ 30
来源：http://www.xuanzx.com/163aeleoqbj.html

SQL ............ 90
来源：http://www.aibaodan.cn/163apchwees.html

Bash ........... 80
来源：http://www.aibaodan.cn/163rheqcwhf.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163mcsttsri.html

Swift .......... 15
来源：http://www.sxryk.cn/163azjejcxn.html

Lua ............ 10
来源：http://www.sxryk.cn/163ejxlzagb.html

Perl ........... 10
来源：http://www.sxryk.cn/163muuuxxii.html

Scala .......... 10
来源：http://www.sxryk.cn/163ludpcalg.html

------------------------------------
来源：http://www.xuanzx.com/163ipsetwvt.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163epubrjif.html

按章节统计：
来源：http://www.aibaodan.cn/163hivshzdl.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163girwfbos.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rkuxzfmy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163blzjghxr.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163ymaddgnf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163cxtenjln.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163vwpaisys.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163llehjnuq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163lvofywcp.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eypocmor.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163hpuropux.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jznlpyfw.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163sydfpunc.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163gnmfuwxw.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163uoggwvix.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ylusgefv.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jcdfvemm.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163zhsfjxym.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163xqjuxeuv.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163tyevvhug.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163zdkqthne.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nmnzsofi.html

------------------------------------
来源：http://www.aibaodan.cn/163jsmwxmdu.html

合计                                  2106 条
来源：http://www.xuanzx.com/163pmvzpvhf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163nskiepzf.html

使用提醒
来源：http://www.aibaodan.cn/163sqqhpzvq.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163runjzvlm.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163ynoubexx.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163mblmnxny.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163pheorhyo.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163zuhncbxz.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163vmmwrksg.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163xnweyomu.html

================================================================================
来源：http://www.aibaodan.cn/163stzhskwv.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163sfnhvpag.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163xfujsrxv.html

================================================================================
来源：http://www.sxryk.cn/163fmpevbyj.html

【收录内容】
来源：http://www.aibaodan.cn/163jqgartlu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163wwuzwvxq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163hygntgzm.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163qbniaphg.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163kqdgltbd.html

【使用说明】
来源：http://www.aibaodan.cn/163qwhyvcaz.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163eilhrwqc.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163ipmzvmdb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163wgambnjk.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xckvdqeu.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163bvxnwhzu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163ohvtwpgc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163lmscmzip.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163bvudjbwc.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163afjgpisb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163dzcxnhdj.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163unwagfur.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163kpjvfwvt.html

【文件统计】
来源：http://www.aibaodan.cn/163ujdaqgzc.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163xjtmfbsn.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fprwargf.html

目  录
来源：http://www.xuanzx.com/163bxqvokjz.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163bomrbkpy.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163sanhtues.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vgxgdeuc.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163dlfdncvy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163pjbyacer.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163xnwocqit.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ulzooetx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163akmsgdza.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qfflecma.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wiouuivc.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163sjbiinco.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jrabnrbn.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sdsrubvv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ldgcqxri.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ctkpyxsn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163cxorodig.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163zsnikyul.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163yipmicea.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163bhyclday.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163wdmwxrog.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vrweufzd.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gxawspns.html

================================================================================
来源：http://www.xuanzx.com/163dhshmnmy.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163hkgwottm.html

================================================================================
来源：http://www.aibaodan.cn/163biftulsb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163bsefcdtf.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163xnylruxs.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163tzaizjyr.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163dkgcbbil.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ibggolll.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163tyibbovx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163fdigkqsg.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163oboyvkoz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163irrpxccd.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163sbvzxpnw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163bvbkbshp.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163pwlbtdhw.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163gdrvcbzb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163vmolijkq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mitlykvm.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163livpsozo.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163idolspnx.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163roildeqr.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hljbkooc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163tzjttgnm.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tpmumsnk.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163aufnlvvw.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163okysnfel.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rnsjramo.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163yistylrn.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163perlxaba.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vrrqyjsl.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163kfcxasto.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kcsuriqw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163uikawozv.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163xfdvxzbp.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163tkjufyyo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163pjkoromi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163hefarvhu.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163uznzmkrj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ndgxbgvq.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163fqvlfukj.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163gwfipwvy.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163gjamaolk.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163gvwbhyav.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163upwdzani.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bnbqvtiw.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163boxkcwne.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163pljaipqf.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163svsanqhv.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163oqlhazge.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163xkedmqez.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163uhzztmig.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163uxlklano.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163hxhgbqta.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163vgjnejxe.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163khrpcyms.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163uygjwthp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163vdrmiiyy.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163tuivcgzx.html

Py:   str(42)
来源：http://www.sxryk.cn/163hzbcgqfn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163cgpjhmla.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163lbttzaiq.html

TS:   String(42)
来源：http://www.aibaodan.cn/163apufmhog.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163oplvctmy.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163agzaopwx.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163enssmydo.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163cnfskpkg.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ehqpkeva.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163rbfmvoiz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163yvplvufz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163qnpbzqgj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163uwlrrjcd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163woxlsiyq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163wbwpasfd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163xeqonfqn.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163nhoglffj.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163cjxfldjn.html


<!-- 参考信息 -->