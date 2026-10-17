外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163sktbhnco.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163vbkaolyy.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wkrqkdlg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163itrwqibj.html

================================================================================
来源：http://www.sxryk.cn/163yurfrctk.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163eazqohgb.html

================================================================================
来源：http://www.xuanzx.com/163fmsefbiq.html

[A01] Hello World
来源：http://www.aibaodan.cn/163eshtngln.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163otbyjcnv.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163pkmwyjru.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163xmlcbkmk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163dvdqqyow.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163knvnmcpt.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163kbgcbiyk.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163frzmmpbw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163fjtxabzh.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163epngzmoj.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163mjilmcfa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163dvkjahqp.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163clsdpvvv.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163rlmotqid.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ghtbpfeo.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mapubjqn.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163tdwxxyni.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nosdmtll.html

[A03] 常量定义
来源：http://www.xuanzx.com/163kgbsggop.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ltanltbw.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163bgogtima.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163lqzzpaaz.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163llpblzaj.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163syyqcpub.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163eaoayrap.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163hwesiuwr.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eawbewoj.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163fepefxjp.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163orsduolx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163nhtwlxly.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163birlhnoc.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hrpjtilt.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163gpawrvyh.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163upaekqar.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163hggcpdwe.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163psyjcnss.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163avoyraqy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163liwtmlmw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163nhcijowj.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163leabdhmv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hhuflstl.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ifxyeoyk.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163aplncvcv.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bdjmztdt.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163konzyxpy.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163agpniwdq.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163mhjyazjw.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163wmflbjnw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.sxryk.cn/163rkmgoxez.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163zryhhbfm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163qthbzewk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163dwoserph.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163eztrvrnn.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163exbhvlms.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163nadkhust.html

Py:   str(42)
来源：http://www.sxryk.cn/163untwjvks.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163vhekjpss.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163kwbpxkvy.html

TS:   String(42)
来源：http://www.sxryk.cn/163bjilvxkt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163tweayhsi.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163oerfvevh.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163lxfxpxfb.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163hfdtyiju.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163nqyrpvto.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163pzsnyvem.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163rgpzzxwz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163gyjijbfw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163iuqxrxvm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163wujzcdpi.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163jixturdf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163fxksvffm.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163jvxfoaut.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163ixogedjz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163leyirmig.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163csssnfhz.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163bsrolagw.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163tksoumxi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163esndmzqx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163htorknok.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163jhfjgmhy.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163psasprlk.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163adxxxppn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163kyspgctp.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163vxbbjdvh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jdxomoio.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163frpjjgvu.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163tyhapjst.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hugqwzfi.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163anticfxr.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163zujpevku.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ugsliyhp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163xqqeuwhs.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163psamymcv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ffkxsvqv.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mzvpjbjn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yoibxvad.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163euaebfvx.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163lizbkski.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qqwkhmnw.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163gjohpedb.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163umqkarfh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163hmsykzss.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163gumuvjjj.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163oxfjigse.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163epwqricp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163mutmktfm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163dvfychhy.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163rusnjbii.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163acljuaxb.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163clojyqvy.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163emcoeaph.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163emfoqfxh.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163fdsqmunw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163djhmvvnq.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zfncfflu.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163jrfsvllz.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163elxnqwlv.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163gfbovvve.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163xpsuqnzw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163egugigso.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yltmxzkd.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ylluepqw.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163jyooaart.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gtozjwre.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163gfobchgo.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163knnqnphl.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163uwvkrcfp.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163utfzawck.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dgnxmfbx.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jinfptjj.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dhuviotn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163qrrwllqv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163piuchviy.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163odzincpo.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sourijcr.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163njeewaww.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163yfmlxppj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163plhxrvau.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163szdzloyj.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163yremyifj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163qeroiovo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kxdpizao.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163hmlsqmsv.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163azkigtnv.html

[A17] 位运算
来源：http://www.sxryk.cn/163azbfzals.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cadckgqf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163zhzopepr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xribvnmd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163btpaiyrk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bxncezpk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bgiphfqv.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pskfyekx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jazjvsys.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163tfqepmgo.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fxqxijnz.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163vgmzghoy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163meviybmq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163okjwalve.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hwrywvdy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hlunueho.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163ldrveuwb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lwaufaog.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163qzumecgm.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zfxulisu.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163oglxpnzi.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ayosgcmv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dptbgwae.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163pvzgffgz.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ezpivyeo.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163alhfainu.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163mvubjoim.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ubjeoqsn.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163nokfruqy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163kpcdvrya.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163gxzqkmuc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163riuqqlvs.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jcabnusd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163myhyfwqc.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ymeimxim.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ufmbtwaz.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163jzzqdxfd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163staouonm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vxqwsveg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fisnaxis.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163yogjjtfs.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yigonjce.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163twszbfea.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163svbriuzg.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163djgesxtx.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wlpgkgym.html

Py:   len(s)
来源：http://www.xuanzx.com/163bpyvqvvv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163yqaibszy.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fgfltwnj.html

TS:   s.length
来源：http://www.xuanzx.com/163nsnmimqq.html

Java: s.length()
来源：http://www.aibaodan.cn/163dsqzhrbi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163qcehzrjp.html

Ruby: s.length
来源：http://www.xuanzx.com/163uxmfvvfi.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kpljooco.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163hrfhomiv.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ckcckrvj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163fbrkuiqo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bamqcblj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hmmyrhoj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163quqjbhqt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163erthpiwn.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163eqcrpolr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163bfgsdrvs.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kjjbekms.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163gattkmzd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ughlxiwp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ztclhqwr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163halpzlnb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163odoimnib.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163qrmhigol.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163uwxpcwmy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163hamvypvw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zoehdimt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163argbaeqa.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vodqsbkv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163dzshhjcm.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163sujxbpuq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163iopuyxfn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163btyjkzji.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163devbguhq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163vtwekzrt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163okradnsr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163anypvbzu.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dgbftgzx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163diieslnu.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rltebzuw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163yguujhyt.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163rgfmzqqm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nbwztdie.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fssfwivg.html

================================================================================
来源：http://www.aibaodan.cn/163edlfeiyt.html

B. 流程控制
来源：http://www.xuanzx.com/163qqirobmt.html

================================================================================
来源：http://www.aibaodan.cn/163oxdemrwp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dqqsvjoa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163kbzxhxbw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163vtthcqyc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163plxmqxnb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qmteryrp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163umdydaum.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163aczwoisa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163bqepubep.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163szhyqcvz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wiilclmo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rfvgogby.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rxoykmwr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hhftnujz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163khzxghaf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bybsppbw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163whjaziel.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163zhfhlmid.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163alqsoays.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ightwsjw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163mesdpjuh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163obfzbckx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ctsuwrja.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163bfsgjjct.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163buujwdco.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163mdzkqkbh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163diaokrev.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jsfdmigf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gnfziwef.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ykdrzlrq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ffzrlyxn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zujczipd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163sezxsjay.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rxvnsqqq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sfdrwput.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163oqvfqesq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fccebsgo.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xhcunoem.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163esirtmlz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yymbotpd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163sddbedwm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uhxabfgm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ckvrfabp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163kphzwymv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163plupqoif.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163nhawydlt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163jkkefeig.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163eiufsomm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163hxwkfnoc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fsmhxtxo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ziyfgktb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tptqrjho.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163csahwiuu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xwdonguu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163peiyilns.html

[B07] while 循环
来源：http://www.sxryk.cn/163svaaglsz.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ayexjigc.html


<!-- 参考信息 -->