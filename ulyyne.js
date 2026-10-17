外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cmjixhyv.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163hqqmjnpm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hnmeuhqu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163lonnphwx.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163rqcuwtoo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163zjwwmfrt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163uwlmvdaf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163willrdkr.html

================================================================================
来源：http://www.aibaodan.cn/163nuylnaih.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163lnsbxbtk.html

================================================================================
来源：http://www.xuanzx.com/163vqfnnisz.html

[A01] Hello World
来源：http://www.aibaodan.cn/163bimlmyce.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163qgmtgqnc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163veulewxt.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163goxedzcs.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163jclewfrk.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163mrtddyby.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163bheqqsxo.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163jhteclzt.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163fxtuhuxe.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ruuzmjoz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163qasihslw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163nofimbfl.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163bgerarxj.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163qaqlixfq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163awqdvbge.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163dmxiyoyr.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163wlhofquj.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nlsftwrq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bftbmgvl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ndczvqdr.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163oguqvook.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163gsqzkxer.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163aauoedwb.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163tzaqylft.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163reikyswn.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163oheldddp.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163yxxzwiin.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163enxitifx.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163tlwmktxw.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163jfptaprt.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163uykxwucw.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163otrgbpph.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163tmlybvqu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163smjhsgwt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163kikdnbmh.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163dotuttak.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163upmfrlrl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163iahvhsig.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163osyjydvl.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ovbherho.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163lazucjit.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163azeggajb.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163awnmvpcr.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163rwmhdolx.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163awfhalbh.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163pwjmtgyg.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163ubpnuvye.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xrxbauli.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163fgtcvhrq.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163iwpyrtfj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xxiabcck.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163guhmjygt.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163xbcrihhq.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163kyzinotf.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mkymyplx.html

Py:   str(42)
来源：http://www.sxryk.cn/163afnmhsef.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163amqofiry.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163jswgfbrs.html

TS:   String(42)
来源：http://www.aibaodan.cn/163potybntc.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163auoarvmk.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163njueojdn.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163jryforyc.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163mvzvajva.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163zelspkjc.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163hkoiqtwd.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vsogxdlb.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163lwbpfabe.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163jhxpgvee.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163jvcfbeof.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163uclzyppf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163khtblkis.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xtwcrnph.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163nefaiyhg.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163twoyyudx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163imwtwxdp.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xbjjrwvi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163lrkuyaap.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163eulazida.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163vkhwkmdt.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163uuosxdfc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163qldpxbbh.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163vqylyyds.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163teiiktfh.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163bjjjhkmh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163eqnpvvvd.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163dmwpqbbv.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163tvdflfxj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163ofgxpszu.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163npwiwlps.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163guurejik.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163vudflapw.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163mbqrpwow.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163klrkqmwa.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163tkjidumo.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163cekanzwa.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uwaspajl.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163eiefdiso.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bqzwibiz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ikccqfgl.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163abdibqaf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163vexhrcap.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163wxrbldah.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163locfepdh.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163bkmnzkgo.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163zqqzuagd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163tsozybps.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163fariqcpt.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163xzbnsojm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163kuutzshy.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qsviyzvl.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163khmydbxn.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zobimjxq.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zvqllbfq.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163dbbvhltp.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163wdtxfmok.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vzjvsone.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bmaglvum.html

[A14] 注释写法
来源：http://www.sxryk.cn/163gchkknpy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163ykkiroha.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163iqyccgur.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dboacjno.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nefiomqy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163clwmzdzz.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qklctlxd.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163hexixkwo.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gwndcqwj.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163jrduaewp.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163iniuyxlr.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163wojpuswv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163zyrlttnd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ikofmzsj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163jiiptnuz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163nsftglrc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ksmjruhd.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163sqfaawyp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163qcemxyvz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jampcayd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163kjwwemst.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163fanluwpc.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nypbuvbi.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163yvrfblkb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hnsfrlkp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163osugazkd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163ajlglofb.html

[A17] 位运算
来源：http://www.sxryk.cn/163oxdbqzwr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wkawadpk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163cyuyhgnw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163idxgzuco.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dsrlmudl.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hrknnfkp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kgmgdgiu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163odbdcbix.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163elezhyga.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ranygrlr.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ijnbafeu.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163trbcwkzx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mxpcmxvw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163deexvsza.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163qzgaqait.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163nudpbcun.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163copoabqc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163esvappsj.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163odmyrhtm.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jjzoqrum.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ahtvwmod.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163hrhdkfmp.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fsfnqgno.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wsqtgwaa.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163brwuavrg.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163gtrwhhrd.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ykbrpsar.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163fcoxrcpz.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163egcdahvk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zbsgjjbn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163oqczjvrb.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163izcjeccc.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163brplglay.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163qurxraqd.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163zytulhdf.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163miivvdsy.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163iyaajual.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163kwiyanpj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xzvjtcnb.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cvnwjvvn.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163kvxbgeun.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rvudbups.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fuoyuxri.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cexbytjs.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163lvlzdfsy.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163xxxsbvgz.html

Py:   len(s)
来源：http://www.aibaodan.cn/163tqrsmyqf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163seoyjnrg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fvtvccar.html

TS:   s.length
来源：http://www.sxryk.cn/163pptnrwno.html

Java: s.length()
来源：http://www.aibaodan.cn/163nxbskuxd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163rlpcggyd.html

Ruby: s.length
来源：http://www.xuanzx.com/163kekryxhp.html

C#:   s.Length
来源：http://www.xuanzx.com/163xfluaiwd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163trsiuapb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163nglztrkt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163tmgwghkh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163egrsypgm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ufltremq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ntboshop.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163leovqycc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163gkxyhheg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ddxotcjg.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zzzqasax.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jlgqthys.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wrgsrrjg.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jnouwhye.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bldlvsev.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163ykvichqe.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163txvezbbe.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kwxiawqm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163wanlosag.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ugrhobzs.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wgqkiuqa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163uyiwlweq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163goaajfrw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gnpvjfvx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163nrscdpyp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163xpbmrdho.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163buufydji.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ztwgopkx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163opswhpsb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163aqsirtrr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163soaqsumg.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dafeasvi.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163erxgdcbr.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163pprduwad.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163pkkhurkm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163eqtrxawq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163utsncmll.html

================================================================================
来源：http://www.xuanzx.com/163tlaijtbq.html

B. 流程控制
来源：http://www.xuanzx.com/163rdbtgoyy.html

================================================================================
来源：http://www.sxryk.cn/163uiuypmhh.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163nuztdopz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163anufcylv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163eqxdeite.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163roojtfuv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163owgjmqaw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tullbefs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163evuwecsd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bwobrlxb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163guqrxufp.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163gcupiigk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163bqyqtbgg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ouailhto.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163urydtsiu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ndjkhzrw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pkuuiemq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163belxedjp.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tomnwjpu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rfkcexxw.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dqbcuuyk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163zmzlhuuu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gbiefbnq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163igfykhwk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163spckvhpb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163pypqhfol.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163riglzrow.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hopigyau.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163kpfyidcd.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163xrsbntpq.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163rqdeqgyf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163orfuwxpw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ioboyekf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163pkmgguzh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rgsoczxk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bamqavas.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kfntkfqm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qkuxpdxl.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163exxnuwjl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163upzonxfx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163bxhphnnb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163elsmjfhf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vrrftpcs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wzjpymsp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nvdvdmzx.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cgnunkih.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ikqqinan.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wpcxsfao.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163egfadyqj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mesasrat.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yfrxsvkw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ibksufvm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163bxflomgh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gjvmgoca.html


<!-- 参考信息 -->