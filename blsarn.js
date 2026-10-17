外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163aqklfjwk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163mptxwbgr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163comcnnyr.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163nbaolbje.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163gyopulxh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163yjuzahev.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163smormssi.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163yanmcxeo.html

================================================================================
来源：http://www.sxryk.cn/163jsespquk.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163pzrfmmga.html

================================================================================
来源：http://www.xuanzx.com/163bntqcprt.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ygwwrgdd.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163rqcvziaq.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163nzvoddlt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zdjrrrxt.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163bctgrvna.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163ppsoahlk.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qhifhowq.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163hszozgct.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163simkobxy.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163fnzudbfx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163mcxhxfmx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163xhyqggct.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ncdxnqfz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xlkvccay.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ijsvcazp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163ocisrjri.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163sjdzlkdc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nzlbipkq.html

[A03] 常量定义
来源：http://www.sxryk.cn/163zckuawnn.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163einsxroq.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163uiffitzs.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163twkfrhmr.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163fwkfdrhx.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163wowwvwlz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163pfirwwib.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163thlblvsy.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163xjpffquo.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163tyowexrc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163toaqgkvz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163kdidppph.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163yraqjwsv.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163rbpqhjez.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163wezzcgkd.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163elumownf.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fgqvvfjk.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163oojtiizi.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163uiqlcupn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163wkopjiiw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ltisblsg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163igazeljj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xgmrooki.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kzkjhbun.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gnziyzhk.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163izfppnzi.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163itfrefij.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163udzxxqrf.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163cqvjsleb.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163qdqppqsl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163uwowubxe.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163lbrfqzef.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163whynjysr.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163gnyvpptw.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163aoqsqbwm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ofvjmomi.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163iaiipgfo.html

Py:   str(42)
来源：http://www.sxryk.cn/163yscfzfjs.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163uklcjgpb.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qzzbwxam.html

TS:   String(42)
来源：http://www.aibaodan.cn/163gqdbjmxa.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163zibgbgeb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163wwtmluxy.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163nvopuajm.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163epsooedp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163zgdchfwe.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163zwfccoxv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163pnelqzml.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163rnzvledg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163nummxlbx.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163qkmewcsg.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163vkjtpzun.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163efdkdhmb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163wuttuitt.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163qukfgasw.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163niuxnjnw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163jwmuhrzi.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163cyouplof.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163vxcwogad.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163qdzcnjan.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163pyyozexj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163rlxgnlao.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163socmdkki.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163gbctqwry.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163quaubwyw.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163jfchdacl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163jqejpbwv.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hqssyflg.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xeifombt.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163ccscyhzn.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163azexpwnh.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163qzczbtzt.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163oervpdpj.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163bdqvbnen.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163rtpthnst.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ylltrvzt.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pcproiyd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gwsiqykh.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ljatuqcf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qqpuhktv.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163azhiapqk.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163zkfmfvue.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163qxygzjnx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163lwhrlbbl.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163anscxhjk.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163zvkndxqf.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163wuhfbtyj.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ssmqqoiy.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163paietaik.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163utrtmhji.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163dzdxyeav.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jlqskenf.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163gdhjkztq.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rcjypapn.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dxpxepeo.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163dwwwxvmf.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xuiubgjn.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163jebmbvev.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163gtyolmvg.html

[A14] 注释写法
来源：http://www.xuanzx.com/163wbjsohsa.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vmwcjjvp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163fhiknljg.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163izrerigf.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lctyiwqk.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163udsnrxkl.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163dpydewqv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163wwclukkh.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163nvvlpfrr.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xicsvfsl.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163rbpdtoqo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163nqibrehs.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tfclmyez.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qqjupuwb.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163wzwgrpyv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163hesjhmsh.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163wbecyepi.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163tbjiqgls.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ntsxvqdu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163tehbsliu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163sjhpmivi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163jztazboo.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ekgzsgnf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163tnpfsuws.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163sqavfzkb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163jsctdnpv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bjdpgrgd.html

[A17] 位运算
来源：http://www.xuanzx.com/163vkiopvdm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vaaycayx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163zfnraabr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zndobmlv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163sfuftgos.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tvwppyon.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tlabrpxm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wktgkbdd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oapvqfol.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163zrecvbdr.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163zwwsqpvf.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rubodyub.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163vrwxofjm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163treqpepr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163mvnrsqka.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163zmslvaly.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163lxrnjhxq.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vlixjmmw.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163oexpmyri.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vnoupzhy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163idbumytf.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bocnynwk.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zibytxmq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163gdurwjfy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163uohysyxz.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163daoohyzk.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163lctgeffd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163qwbxmowy.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163utmghlls.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163kcbgzyvo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163enurbgfy.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163uabowvjh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163pbrzaehg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163vgbshwok.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163upwawlgk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ycidsnua.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163mgtjgdxz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163dzjscjbb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tprtpqgl.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zncqucxq.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163tdvytawm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163oozhctok.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wuuponzs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jzrqufdy.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163zgxnithi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163tyiuzuom.html

Py:   len(s)
来源：http://www.sxryk.cn/163ustlkdtp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zjoyhyxb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ilmnhnka.html

TS:   s.length
来源：http://www.sxryk.cn/163sejmmzvp.html

Java: s.length()
来源：http://www.xuanzx.com/163dwykehir.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163iopkzrgg.html

Ruby: s.length
来源：http://www.xuanzx.com/163srcdfgcg.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wdzmabkj.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163gqknpwhj.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nfzhmelx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163kwfnuzcv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yrtvndha.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163eiercswz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ejewnmtt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ykkktzbp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163bauwwuvs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163qmvmdwab.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163iieayvxo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163hmcmhegm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163uvyvpbei.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bpearrje.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zjwrmerj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163gqigiiud.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hpdcyclr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163oqhympvj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163apfacmms.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163vmkxdjzd.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163dwxqbfjz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163jwmdqdbz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kczckevg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tyezixty.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163incnrcie.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ysrzxvrh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163jrszwpjj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163teftjtfe.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rccswakq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163tesqrekv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163junjjsnz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163gimtjxqu.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163vuhzsmof.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163wfsvpefv.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ykvacqkm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ltjpsnvz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kqxfuzrp.html

================================================================================
来源：http://www.sxryk.cn/163xhjrpnki.html

B. 流程控制
来源：http://www.aibaodan.cn/163lfghqfyb.html

================================================================================
来源：http://www.aibaodan.cn/163aqrxhbby.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zjllwwmx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xlmgmhrd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lscyxlct.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aupanbhu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jvosqjhq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yaqxwgdm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163nhrafpxh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163hhwaltrp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nxujnnxn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mqmvdjty.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163dhmyrmbw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163danvolpc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ctgvlyhn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163izaktwig.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tvkuymza.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fowzehgt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bkbtvyve.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ujwvunjg.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fgrakcqp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163sgihqksx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163makdboma.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tltinkue.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ximuivcg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163olwrgfpt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163gpqlthwb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163xdrjemls.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163uwanbqng.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163liwuegeu.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qfoxmtdg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mgsulleg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lmwdqbpy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163iludpgmd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163tefzbpxy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bqekfyjw.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163zalpqshv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jayvbshe.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163lphujnpt.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xiftuacf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163nnqnemem.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gdrolmtp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dkkmgwtn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163srudwrab.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ykztpjir.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ndapjwwt.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vgfpivko.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wlxiwpmk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ofcicjej.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qlqkxwpb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ghdanubi.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nawcwvkj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dpwljpqx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jxafjtiu.html


<!-- 参考信息 -->