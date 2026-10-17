外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cdvwvnqk.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163mosyvzby.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gtecscrn.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163xdihyugp.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163mhswoxjv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163lvpknptt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lcrbnzvl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kxhhigga.html

================================================================================
来源：http://www.sxryk.cn/163jnjavmjm.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163iibntsyq.html

================================================================================
来源：http://www.aibaodan.cn/163uicaivjx.html

[A01] Hello World
来源：http://www.aibaodan.cn/163vzcrixjh.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163fnwredjd.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163lykhavbh.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jmnjaknz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163vbekyjos.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163uraqfytt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163csiozazw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163glhgpxjh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163yfshfkqq.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ablbtyvq.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163piitowig.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163zjifpqoh.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163hxhqoico.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163yilhnoos.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mbjhntth.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163xchhoptu.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163dojxrstq.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163awydiaji.html

[A03] 常量定义
来源：http://www.sxryk.cn/163noredxyu.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163aeugvkut.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163wdhheenh.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163pjugaulp.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ierfgolq.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163nppsqkcf.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163wffqhkdn.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163gvewarhv.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163sffvhjrg.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163plnbgpvm.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163kiukeggt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163vbrawvzs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163itpxxzkm.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163zkgiemyb.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gpmqzxkp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163iivyhvwx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163xqrriluv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163akrkhkrk.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163gawhrrxn.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163axphnvnw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163kjogapjp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yfunwxbe.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163cvrghavn.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wfzpmccu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tifvdnqn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zrbwejqn.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bsfmcqkq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163pnkyuvsv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ysatiwoa.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163goyssvfx.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163cqbknhqg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163jdbkjyhw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163fzqrlacj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163sgwauogb.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163iknueqtm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163qxanwfda.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163eceafmgx.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ecvnnmcr.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163hcflhfnr.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163bxruorln.html

TS:   String(42)
来源：http://www.xuanzx.com/163hiaaxfmd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163hrvqtbxe.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163gkfadxyv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163gffgjary.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163ynaduthx.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163lygnhjny.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163kvoikhwl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163rvyjrdsg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163vuovyrhb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163mdiydfbf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163dpybxvme.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163qanjpscu.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ktuprkcy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163nptjfcbl.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163qfymrecy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xfkahgbb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wrglvgyq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dwjjuqch.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163vsiymeyk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163nklzuqna.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163roypfcds.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163wwomnchb.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163uxkdlggy.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163ighfwbct.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163iljvnale.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163trmptqsd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163jyuqouyz.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163bnupomsg.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163qqqlcuac.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163norfzbtw.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163mtcakfbc.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163sasnsgvx.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163mjyucuxv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163cqhqnwgm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sbwtaueo.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qapaqtka.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163jlktzcec.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ytnirsfd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163wyqkecjt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gugodwdj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hskwabgy.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163wjlgmeug.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163yvimnzvz.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163sjxblpdi.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163pzvzmshq.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bxihmxcp.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163jevhjduv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163fhattvpe.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ueisyqri.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163otphyvew.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163wpruicqd.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vwwwugtj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163qvoycijt.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ffdaahxt.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163keghmgyc.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163vhtbrigo.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163acqyuhec.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163tnufcufg.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163pddvdjwo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163gofnocyq.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163wgopodmq.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163oncfqckx.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163axwqfjqr.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xiudqcjj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163mmqxkirc.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fwmoaans.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163obkjzcdr.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ufvzkuyr.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163ypoqzslx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163qekxpxcg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163bwtxrtjn.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fjazebkc.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ysqyrchp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163lgrzbwaz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163msxqjtgh.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163eputuuqn.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hrfzptxe.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ciaqcurv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163skhosver.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ogxszpae.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163gotbdykv.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163taukvtwq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163pgvvhwjs.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163pxahfjqh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163djjldlqs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jdgcxzcc.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kwdefxqx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tgthkact.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163taeeswqy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yiuburkz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ftzljdby.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nzlxyrvg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xqszjwxb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ikjzbczk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tjxzdngf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ivrpgpah.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163fsyyfrwi.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163bypiumpv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163pcrhygjd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163nwqtnikp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163feieowgw.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163bufrjoct.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163qpobntdu.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163wkpbvmid.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163kevvhsyt.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sygezvex.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zubxfyxr.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163utjtfgao.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gvhxrhkc.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163rmufclwa.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163vrgjpjyb.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163qppvnemb.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pxzhumjk.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163spggxeqf.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163kxxjtxfa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163idythpkb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163wkmmihge.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qjnkssyu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163pgycruri.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ndxhofvn.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163vqpufdrh.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163snpsecti.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163jexhdyvp.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163psshlnos.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rhljuhia.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fhtfnwnc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qjkttpus.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163okaoejvz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yjhgacfw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rtvmypex.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163izzknzzx.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163popqldhl.html

Py:   len(s)
来源：http://www.sxryk.cn/163kidesrwo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163clpyoewj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zywonjpg.html

TS:   s.length
来源：http://www.sxryk.cn/163pyfrpktp.html

Java: s.length()
来源：http://www.xuanzx.com/163wxhfodgp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163anpxpuqe.html

Ruby: s.length
来源：http://www.xuanzx.com/163xufesfkr.html

C#:   s.Length
来源：http://www.sxryk.cn/163ocsuzxou.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hwiwzswr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163tdabcfdp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163utnvvpps.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pzuoqmdb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lrxrvmln.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bbswless.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163cejmwlol.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vkvnaarn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163zqiqpwqd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vvnvxtbd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rjpvdhxx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ifdhajcg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uujoszkx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163yuthlngm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163cpaxlknl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163tetgwaun.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163indiredr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163eqltpxkp.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163zkznvdaw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163idvehfiy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vcqpreto.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163argzxnhc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mqbwfrfr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wnchwsty.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ctfxxofb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163obwvvobn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163bbjpoaga.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163svbjfrph.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qsylwbrj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163xypppxbd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dytpoygh.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ekaagbze.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163iaoewerw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wjfgmyio.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163bcsgivob.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163ckgalowe.html

================================================================================
来源：http://www.xuanzx.com/163uaslulgn.html

B. 流程控制
来源：http://www.xuanzx.com/163glkfnjiy.html

================================================================================
来源：http://www.xuanzx.com/163nasmjcgp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163pakgbhaf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hlpbofym.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163lmlasvxw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fdskvzxu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163svecfxqv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mvksgogu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163qnmlbxgn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163efivprgg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163stnegfxa.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ffrocasz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fienbpto.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163arixpgli.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xzelcnoa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gyqwsyvu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ofipflsn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ykdlmwju.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uscudnvz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tksznity.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xkumbvfz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bjwetngr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163dowivppw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iplkdrxy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fvdhtgnh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163oshwgqjn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ngjhaoue.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jtgwxjly.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ajvjugic.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qynpsrrl.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bkblakvu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ddiypahu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mwfwqwiy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ixtozhpg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163pwzvbtwt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ignlepfq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zdbuzeov.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163envosbbq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163xmsjhgpn.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163fkggcxaq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mlgkzuki.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ceiyjibc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ortxpyuk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163enuosynh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jfffwjuq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163khixkosh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163iooshmyj.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nfirkcoe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163azekjsnt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163guvfzibx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163skbogqrj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jqyyligr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163sjwrzfrs.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163euxfemuf.html


<!-- 参考信息 -->