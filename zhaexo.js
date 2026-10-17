外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163tswkajva.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163czrckpzf.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wcrolcvi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163gheivvpb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163okniwftb.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163tqqbdbcq.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163vddslppe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gpgaddlj.html

================================================================================
来源：http://www.aibaodan.cn/163ngzdhgpy.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163vtapoobs.html

================================================================================
来源：http://www.sxryk.cn/163fjurruxb.html

[A01] Hello World
来源：http://www.aibaodan.cn/163ytodyluq.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163zkwyatxm.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163pzzwpjqt.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163eydfjwro.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163oemadktm.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163zyedontj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163ormadlac.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ekfdwfnc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163tdckfgrt.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163wrdbcncm.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163tqzeykei.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ynsjfeyd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163qhyhkoed.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163nakylgcj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163dbhwbtsh.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ehwvanbv.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163rwuekidi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wvpjgimu.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163rddfhjlq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163vcsmmifq.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ptuajlhp.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163jvekmmgj.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163hgjjjbup.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163yfrrkcic.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163agolqriu.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163buashuea.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163iaisoptf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163wehzxntj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163qqrgwpfe.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163scgtxgsy.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163wxthjcix.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163xodtnmal.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163wcbrmfpq.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163btieqzzp.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163tjmvyzhh.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163bqbummgp.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163iljhukie.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zzalwhsu.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163megqwpci.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163swqblois.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163naapzlac.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lbbuvbpm.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163dmvreefc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163joamtfnt.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gsndfbtv.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163zrnwnnsk.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jnmonmvx.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163plmjhpnc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163xeldkxpr.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163opsfwtsq.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163mqvbqnwj.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163cfgwfzui.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163nmhltnlm.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163ckxxdjfe.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163wblkngvd.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ytjnbwgx.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163pygolwch.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163fytznpyr.html

TS:   String(42)
来源：http://www.xuanzx.com/163vzgoxfzv.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163qfdrleif.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163ibqlurqe.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163izadgsrk.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163utnfxtni.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163mkpvykfo.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163gwtutwiy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ctpaygvh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163lleizuqx.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163acudmjhj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ewjriwbt.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163nzgxtgpx.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163yyrhukvf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163znfudxxl.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163fssgvsag.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ppqftaxy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163wwmvseyp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ozybhlhl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163mbuvzsme.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163btytmoke.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163pcudlnfv.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163itzgbinl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163eemrrbco.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163qvgslzvg.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163yqzriswh.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163dwxfczmt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lzahkboe.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rdonanjk.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163ovqwdojp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163mooemxcl.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163bejegrma.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163awtcyswm.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163mziowqrs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163xuwqfhfu.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xbatpdmv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bqnjrcwo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163yjmqwmtu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pppzhbws.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163nnqivdlf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jwclbhhk.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163grjawixd.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163gkipadyb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163smvpsdhg.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rnrgjwxp.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vzuqburh.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rnhvpnzn.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163orpfqkgl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163inchxcae.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163altdethw.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163omwhnhko.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163gixvnyds.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cnueedkd.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163exzkznmd.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zlxxlqzr.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163qlscpjea.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vshkpnbz.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hewbclpm.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163uytxcnmi.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mzhenyte.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vjgkwbwy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163umdoofjd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163cvviqrin.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163idrerrso.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163euxkzqrn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163duzwirbq.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163mopptfct.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163ugvrhaga.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gpetsqim.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163rcykikql.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163vzabqzdq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163gvnvzobi.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kmztntji.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163kckhcgnr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163rkkaqfkx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163phxaroai.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ksxtoowc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163dbwlfbew.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163mtwzitjh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163vnqjdakm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jzzcsgnz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163mwfhnqyn.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163jtsngkre.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163utklgjbr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ahtashth.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163rtwcqlcj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zpltfgoq.html

[A17] 位运算
来源：http://www.xuanzx.com/163burxvtnx.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zzztcchl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163bbkyvczs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ypwscfls.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hhszdtyr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bxuyzgdi.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hqcuppxu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vinevaqm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wnrawrde.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163wfddaeqd.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163pyikgkgj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163djwteqxn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ulfzorid.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ozogxajr.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163crjjlnor.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dygfrtlu.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163lxjkuqii.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kqbdwxoe.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163xydysrns.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vskjtuef.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163itqdtvpb.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vxahened.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163sqaztoih.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163oqmhejia.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163gfvoosrw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163fbqmovpp.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163cqmqvvml.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163bgdpjhib.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163nvowximx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163bhftybxy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163hcoubajo.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163dhagvjza.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163oyknpzdo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163canqkkcj.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ltziiffo.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163qdqhvocb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163vvyqcgon.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ztuwnqcj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wshcccwt.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pnjvtwwe.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kgqmmhmc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kriydzms.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fbwrbwuy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zctmrdvl.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163qgqjbsgp.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163wkdluutl.html

Py:   len(s)
来源：http://www.xuanzx.com/163flbvheke.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163xpniylym.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ooxmujas.html

TS:   s.length
来源：http://www.sxryk.cn/163bgzpaqmw.html

Java: s.length()
来源：http://www.xuanzx.com/163ytlshmcp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163tyspjrfm.html

Ruby: s.length
来源：http://www.sxryk.cn/163waahgmey.html

C#:   s.Length
来源：http://www.xuanzx.com/163kxouvoqz.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163najolsqf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mwknrgvp.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163hbjlzcqf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vbabhttr.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dyeyohaz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ormeafer.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xqwkbuya.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163mkzwrjcv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dxjooeis.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163azosimhm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163asodvtew.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163oyqurzem.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163odlkucdb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163pymiklmw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163mjjnomif.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dlkxqdrp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163pxwtlorm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163wnrrttun.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163gfyocaep.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163yicdnxjp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163rpykhsmm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hjjjbcbd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zyjanvrt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163skibryfj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163krohjgvt.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163aqlglqkd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163lvhcudtu.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163aynvjffr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163exmdwlfi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163kdibsmtj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163whvptwqq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163plnkxozb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163kuilcubu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163btibvuec.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163icpbtixz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163iljcmvkb.html

================================================================================
来源：http://www.sxryk.cn/163csarmuac.html

B. 流程控制
来源：http://www.xuanzx.com/163zsokbzpj.html

================================================================================
来源：http://www.sxryk.cn/163znfeokre.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163hrksbjej.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163zmdcmaml.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lksaaobc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kiyiprlz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ybwrbsba.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ruaeubfg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163oukbzhqo.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ftrgdnas.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fmnvgwmt.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qpvicnmf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hiecglmz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163fnmwudsj.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xsmgljne.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163phngjwnm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163reypyzze.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wejxqjzh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163aakztipl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hwrgrbvq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163xcadowdv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163auryrlso.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mwovhxme.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ipwydnzx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163almjtcoo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163bqgqzsua.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ksaijhom.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163luuitdux.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163uoarzxja.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163znrsruol.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ybbppsxh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163eaeohafl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ogpdyklz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yybeluqi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163nfkziqwz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rgvajugh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iwncyewy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uwrsqrva.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ndcbvfwo.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jxbkedob.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163itlormcf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dfnwakwc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zmlskjdv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ehgrbzii.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ohyyhuxf.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tpthodxl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163mvkokjmu.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163tggqvtmc.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nyvufapd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hnrlnmjv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163cuzuoxex.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hexrydto.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jwbpxwtq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163bffbpwzz.html


<!-- 参考信息 -->