外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163ecxlglkm.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163zpwyqtly.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163nznsgcuk.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163kclygmrq.html

================================================================================
来源：http://www.sxryk.cn/163npemhmge.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163wtmygcyl.html

================================================================================
来源：http://www.xuanzx.com/163mrvezrpg.html

[A01] Hello World
来源：http://www.xuanzx.com/163uynwyzvx.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163umodsppl.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163abgliwjy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163xlxgzxsf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163ugwhlejr.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163txcpxfjf.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163ngpdbjgg.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163rxlsjudh.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163ttwbvato.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163dywugtoo.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tfcopdsv.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163owtutmfs.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163wohppnhf.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163bjwknbgp.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163cnekjiql.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163qpmntovh.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163nxltmxok.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163geqernws.html

[A03] 常量定义
来源：http://www.sxryk.cn/163oyaswyew.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163omytxdsj.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bjqowwdc.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163ocjkkhcq.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163nijlxdbz.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163gcetmlyi.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163cyzniynp.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163dozpwzix.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163vyumjyrh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163llaibywe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163pidsaguj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163yyrupkyt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qlbtarzb.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163noikijqw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163tafbdgdi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163fpcvtfoq.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163dssbgomu.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ywdwaetu.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qvsyvmsw.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163yklbufjj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163djihghtl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ovjesnpj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ivqcvchj.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hofelayj.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kenusufo.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ahlvvfhj.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163prtyngic.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163yomvsypq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163rhvnsjad.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163wakfrxck.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163xnswjnok.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163noqcylsf.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ttkhqhhf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163shiglcko.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163fmwqzdjg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163sfokvwes.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163lnrkbpil.html

Py:   str(42)
来源：http://www.xuanzx.com/163vmtwmwao.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163etxdludy.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163gvuvpwrx.html

TS:   String(42)
来源：http://www.sxryk.cn/163bdlvzunu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163vsndsouh.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163woxwkyio.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163rmjrtnkf.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163llcyquwc.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163omfikmtb.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163rqvbaqnn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163xyuyhlhw.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163qzkdcyra.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163wwtiqcdn.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163njjnprow.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ougbyzds.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163hxkjdrda.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ajbvhdju.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jghhslxc.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qkpjmnca.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lxzvsyyq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163hwjzyari.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bkolxmof.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gkxyrmpl.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163ktpnkuws.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163psbnhbyi.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163swoabbjh.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163ylgmgaik.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163hplzulqr.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163vnpihwtg.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lojshucp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163eqyymokf.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163cdxokqap.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163nekfngpr.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163twiijffl.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163islbqpfq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163xkncsrni.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163pnjbrqmm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163shgyqfon.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163csyinliy.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bhtlpupo.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lnbocypc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ujjgugjp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uafwkrvb.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163saplmkqo.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163juraexxk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163ujyoxmmo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163pilikaia.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mnabbrgy.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163zipfrcog.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163osklmgng.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ipoixzpr.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163rpfynfcp.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163fzecyblp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163jwyhflfb.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ftsoeqvn.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163lgimbzia.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163xbdhscal.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rxvxovze.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163odgphctl.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bpqzgrgs.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163usvvoscs.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ciulvplt.html

[A14] 注释写法
来源：http://www.sxryk.cn/163lxjqwyqx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163nghhttls.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wbpdzlze.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163asneogvv.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mpedbiqr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163jbhzzjbr.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163llhykbvi.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qgkdsizq.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xkatkyqq.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163kfqchbzr.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bzwfebkx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163upzcdyyr.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163vmuxgirp.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163mosuydqe.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wmoqqdlt.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163gcivdaha.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163mcodfqiz.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163eywzwibe.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163adneejdy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163eekzbwoe.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163cxaqwjgx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163khbrocwc.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163kcfafvdm.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qnwwvmtc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ztmlqest.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163lhopufyf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163iinmnugw.html

[A17] 位运算
来源：http://www.xuanzx.com/163rgjjjebf.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aihdtonb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163amxjxcyb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ozccrcja.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163knzhisqm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fgylavvt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rordgfbm.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163feceimrx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ymaqwhtl.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qicmiezg.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163otdwlllu.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163aamfhzkx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tuofktdz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163dqcealge.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ocvitjpn.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xrbougmx.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ehwuazuq.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163kxwaxebr.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163cjdvdfdo.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ideuoerx.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163pfkufwcu.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163nsvdvety.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vjjkcnhj.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163zijihptv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163wlogotuh.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163rflpvkxm.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163yvoxlrzn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163fqirzeoj.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163wrwvixnc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163plcdyyul.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163szcrccjv.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163xbfonmnf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163lrehydcu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163tcsixbds.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163tiqlrvwy.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ifbfyyke.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163cukcqlqi.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163xodqmurr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wklhroha.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163iihfhdoy.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mfosxehq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wjihtyuq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dgungoxa.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ryuadcch.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rvpfrbpn.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163whnepdnf.html

Py:   len(s)
来源：http://www.xuanzx.com/163unmwixhc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163jzfuowvn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163shkzzfpt.html

TS:   s.length
来源：http://www.xuanzx.com/163ibnedcxh.html

Java: s.length()
来源：http://www.xuanzx.com/163ocrbbaro.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163rqxdcfwf.html

Ruby: s.length
来源：http://www.xuanzx.com/163uygzacom.html

C#:   s.Length
来源：http://www.aibaodan.cn/163euyrhlov.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163dujthqes.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wnpqhudx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163taadhvoh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xblgsgrg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jjhhzyuk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uqcrrapq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ykiivagc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163vtryfkqg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163pxdccaya.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163erenersa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nkjbyfpm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163gjyyoici.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zpxxknap.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tbnxafro.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ubbmxyom.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ykkoevsa.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163xupttlrc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163itdaddzo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yqytxlef.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163iuiithxn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wiimugrc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vndqztbo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163geltqdnd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zdiphyfw.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163sfehxaem.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163puqgnkux.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lwvkekls.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163bpmrntxc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kcsnsleb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qpsiwvps.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163bibhpkft.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163hpyqznjo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163tzzjhcjn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163yevfzjcz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163axgfgzyb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163nutufvaq.html

================================================================================
来源：http://www.xuanzx.com/163nnyauwto.html

B. 流程控制
来源：http://www.sxryk.cn/163bymihloi.html

================================================================================
来源：http://www.xuanzx.com/163qzzojsor.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qmippqmo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163kdykcbxs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nnkgryvs.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163edbuufmy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163udsslhbc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163shpwybvw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ovpnbiao.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163prhhiuvo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uynxwyfe.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163cbxdcfuz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ibgvexpu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163kbbnxetj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aeroxulj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vulaedzn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yuvfhuay.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163uqehevht.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163hbdcueid.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dbdchweh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ipigyngt.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ppmofvst.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163msjrjuah.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163afdyhtdi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bhtvkint.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163wxfciuee.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163aakcjmxt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163etpkvgkd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yyoalxak.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163aarrhkiy.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163hpgwybea.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163rsyvzzij.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xeinrlfu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163koessshs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163lsldrcdf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dvdduafb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163uzorxtof.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uxgexfpz.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163agyleoga.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tjwnncij.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163xvedyyuz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163gybcutzy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nncjsnfq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163napsylkh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163jrghzzcc.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163dgmhmqya.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163nbhmtayb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163izglcudy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163icccoqnc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kyzjdrgl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163egtrerop.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ykxanqcl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163duyeshyx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163erljctzr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qxzopots.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rsozduld.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zplqkbrs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pncutwhs.html


<!-- 参考信息 -->