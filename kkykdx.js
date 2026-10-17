外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163ongehupj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163cnttbnuk.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pwxcyqqd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163dgnlolgb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163igytdsij.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163jarrpspr.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ggporrbr.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ousbdhmt.html

================================================================================
来源：http://www.sxryk.cn/163ngkqisgn.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163hunkwrsc.html

================================================================================
来源：http://www.sxryk.cn/163ajkhpdad.html

[A01] Hello World
来源：http://www.aibaodan.cn/163hrohzayq.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163rndsbrje.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wsjvsohu.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163vhmsowye.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163zqwxbjfc.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163furkapgc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163oeelessa.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163coyunray.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163druufevm.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163cykpgnig.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qscredcu.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gghkdgah.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163jbjygawf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163fdplvxai.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163yogejqul.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163rjgebjjk.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qzwhoves.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163fdojxfxq.html

[A03] 常量定义
来源：http://www.xuanzx.com/163qrqsagwd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163inwnhizx.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bwvgphpu.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163eywouuml.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163adarwshi.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163ebjbkydv.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163nlkkirfc.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163rkyfmziz.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163poyjqcqs.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163udrfzylk.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163kuaqhrgp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163kolzurmq.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163ljlqcxbz.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163miaxrxxc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163pucjnmxa.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163jukdvesx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163nntinfoj.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163wzzezrnv.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163buxubdef.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163hakumycq.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163finnlskg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163bccatzlf.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163xypphpaq.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163durnipof.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163tpvvfobj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163jvajhawp.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uvtzfdnk.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163rkjghltr.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163yuxsjfha.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163twhxdovt.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163hunlourp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163vqxvcjsv.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163pnpihmwd.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163nlsiuexh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163yoeutawe.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163kkwqlnov.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163jglppccg.html

Py:   str(42)
来源：http://www.sxryk.cn/163cbnrahcw.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163betmvxvl.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163iyxtlugl.html

TS:   String(42)
来源：http://www.xuanzx.com/163tbsxgeyg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163iemgtajr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163ggwpzzeh.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163zfesjrdt.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163fuhtqgje.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163xdeaajct.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163zcfzrdrq.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163hwtstbhv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163bvbxjeuk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163opvuxjlt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163txdfyqrn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163fzyjsako.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163piphfdwe.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163pamhzhzg.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ocrjwcmq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qitntglh.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163zyvarhxd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163gysgblzs.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163yvrgamzg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163ijzhjuga.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163qnruidew.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163vvwoiajp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163yhtulqwv.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163yrcvbxrk.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163hubbistb.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163urlxkruj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wtiuupuo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ckuyybto.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163vmwfgaal.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163srjdrtab.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jfrmgmsu.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163axqifucq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163bkupteeq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163avcrhvvr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dpqekzxl.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bmmofomf.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163tlxgcmof.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dhghnhvs.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163oxvqszrc.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163cczptiae.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163konnywyd.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163yycuigbz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163cjlxucii.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163xzucqapw.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ikjqusnu.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163zzghzxkj.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163hcebqgcf.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163jwztgkkp.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163soxtbnzi.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163smroynfn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ljmlsqsg.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163akmxlphg.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163loflyglu.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163neecihyc.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163jfzcmbzk.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tnmmkaqp.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wjladsel.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163rfmwthbd.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kmjkjiti.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163yfqeuibz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vuqyvani.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163prnvtzet.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ybxqelei.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bmxewmkt.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163fxlgdghq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cylgmsnq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163kuqqkhdy.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163elasknqn.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163mjoifeid.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163whzlujqt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rapdnwcr.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fnoapqqx.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163hpuezyor.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163aljdmkff.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163caebqbfg.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163dtwazwen.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163gnwheyxk.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ldfyxhrw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163rrssijiu.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163pycwgtzx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163wxzwgnnw.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163blgxkypi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ksvsbjim.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163zejxxgcm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163geiukzee.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163tslgrihv.html

[A17] 位运算
来源：http://www.xuanzx.com/163ycahfcyu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gkczcjnc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163vmezbbvi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wtdqrfie.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163uoxxgssh.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163esggytkz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163exhykhnt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dejactsa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rmbybjhp.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163hblyitqj.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163qzeigcdo.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163xwujwdrp.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rejmqzih.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wpvliyje.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163rrlcqdwr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163pptlmpqc.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163xcohufxe.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163bktdtmci.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wmnnunlh.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163olrmkzkd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163itmzvrvg.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dyauxcqa.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163kmnsqyyg.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163sbtoutqr.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kamzdtyl.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kkgarjvh.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qvrkhdlq.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ocwshkkv.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163hggjfuye.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xtyglzkv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163nlfhigbd.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163zsmiqfkk.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cbhbozne.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ztnytdvr.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ltyhzxcj.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ceuwaqus.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163bfchiqgb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163yikbdfbd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hkkgdjnl.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163eksynlaq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ribuiioy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ykepbhlm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zupmcmfa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163biwuqfen.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163hkbzjxvq.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163zveeuzbw.html

Py:   len(s)
来源：http://www.sxryk.cn/163puhuwgyv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163vgdnwuba.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163jmgvalor.html

TS:   s.length
来源：http://www.xuanzx.com/163bsndrwwx.html

Java: s.length()
来源：http://www.aibaodan.cn/163gdmgwmfx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163pxvmongt.html

Ruby: s.length
来源：http://www.sxryk.cn/163rplecumu.html

C#:   s.Length
来源：http://www.sxryk.cn/163rvcdzojr.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163pdehoxis.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163vcdsskjy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163fideybfy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jkvjljvv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163znmembbw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163xfyqlvyg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ppseggma.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ibicyrhr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163wfuofvdi.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163kogmopcj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163hqfvrfhu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163tybvpasc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163akdiyvzz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dsmqgofc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dgxwobmf.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163nzjxvxhm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163pokubxwc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jgsrzuam.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163geyxcmxj.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pxeqaqqc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ajjbkcpu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sudypdif.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xgsrubit.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163wghxakme.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lwdfstov.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163iliukwsp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163bhqootuj.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qgsieulo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163pbkjcjqj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163nyniifoh.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163npfsbomp.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ijcyvjgt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163dxqvgqkw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163stinyodi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163aecvyybi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163shsbgtbm.html

================================================================================
来源：http://www.sxryk.cn/163nldiytnn.html

B. 流程控制
来源：http://www.sxryk.cn/163rlqghowg.html

================================================================================
来源：http://www.aibaodan.cn/163ifzybeug.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ipikphrf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163wbdtuxml.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163uicjwmfb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wxuknont.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yxnwnoyp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bhhfwdfz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163qkbrsldg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zmzfizyl.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dqviovdt.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163tqekzjdb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ucvuccqn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163molrqjqv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163iihdbfga.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kkmbawim.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rqjybjid.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hudaduws.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163mfqrsghp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rkqijuiz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ywavefdf.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163cdtqlpjs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ngxdmasy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163shktrtjf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gkoanikf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vfyrbods.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163dsyyojyu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ztrqemfi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tofbxcab.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nnuyuhnh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163mktdarvu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mejhsxja.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xvweojco.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zoqrpwpv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nbkfmoga.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ugaeruhu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vdmkctcm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xpcfoolg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mlflwnrd.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163tfddlgqs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163qnvwestu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xbwnvbpq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lmlwajsp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rwvvcbbo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163yrqanoiz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163dthgchou.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ayxotfdj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rcxubytm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jayhtggd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163lwrtxxri.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ohinnbkb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qgcfumgm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jpyoclbm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163icqjirha.html


<!-- 参考信息 -->