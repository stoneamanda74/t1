外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163mtypkmkp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163slewjdfl.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ahsgksny.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163iicennoh.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ayfasvvy.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bthunpvd.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163siqdxncs.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163cuehdifc.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163tnttqlnn.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qaqfunjp.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163vtkqkozs.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163arwenyew.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163yihsbsch.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163revoqjbk.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163dkvfwdws.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163fcptrlqu.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163nescheqj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163pigoklfn.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163zeixwhrg.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163qkgsawse.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163pysxfpaw.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163eljfzujy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163riotohfd.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ohkxbycn.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163uwedtvfp.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mznzfhub.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163udoolzie.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gsaaofdr.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163hknonety.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ptdrtbwi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163hafqjtkn.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163bdquihoi.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163hbzarhio.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163wogomtka.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163btzslkne.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163jnnkefvy.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163btzancyl.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163mcrjvpyv.html

Py:   str(42)
来源：http://www.sxryk.cn/163nkroilfh.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163vdocklwa.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163kybajrns.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qleppikg.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163eqnpxotr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163hvvsyrda.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163aztejmko.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163whvhiljl.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rzmzdkuv.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163sqsmjcqh.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163fxqqakrm.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163dqcmtkim.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163zhsarulg.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163upqmvqdq.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163ghifajbd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163lkarvbte.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163euxafhic.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163hcwduxof.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bdrmgahi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163cyudcdqx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163ocpgeqka.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163cykhvcux.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163exswsrsa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163osuheykd.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163zjqitsxf.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vusqmvyr.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163yszlocox.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163tfrlzgdm.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163baqsyuew.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163crdqkgek.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gukfrebj.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163lvncfxxz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163nzicelod.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163mvdhtara.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163vqciuije.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163bywjswgn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163sosdylfg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163xhfqfjvv.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qyzvuspm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163aesctitb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zaegnsem.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163zgombkrp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fwmstrfo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163byjelesx.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163sruyawdd.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pprruolj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163diyrzhqu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cjbuqjvs.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wpkbepta.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163rwnuptxn.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163iyvkuppn.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163medeoaht.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163lcndcdlp.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ifsebvjf.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163edrpvvoa.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163krxjsczn.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163oveltmzi.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qqwykpdo.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xbdyundi.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rimuynss.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163aggxnnva.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ccpenvos.html

[A14] 注释写法
来源：http://www.sxryk.cn/163fmnitytz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163vjnkaska.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163brcntsto.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kczrvcjl.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ilkllzif.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163sglupfll.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ldilszzv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rywqewjj.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163pqjisyun.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163adpwyksx.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163iyyqjvqn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dierlbnm.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ujhbkmve.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163jaxrjovq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163efmxcyvd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163bmwisrxu.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ltphzfae.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ioingwlb.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163usycoezq.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163cpocefue.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163boidvjdu.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163bffwdwde.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163yvzgpmef.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163zbyminit.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163sfndkmxc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163tzcezpvo.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163kbxvhlbd.html

[A17] 位运算
来源：http://www.xuanzx.com/163rekieomw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163cmahcrap.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163sbjfkcgs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tsxckrfb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vqavggca.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vspdwnqc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kxfsbgdl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163smetkkxj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xxfoyhwm.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163rtuffhet.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163kwigbjzn.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163drjxpnhq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163xuujsmcp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163salgrosi.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163aychirym.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163azutyvhj.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163sigmtlif.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163raxecfem.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163rdngxtjp.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163wrclcmre.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163aleibgao.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163vdkqolwa.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163qvqdeoci.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163turfcjnn.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163zgqqikrn.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163iwjujzof.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163ezpvxnqg.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163kivagfki.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ufuplqer.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jbehtjfb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163luyqypwb.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163skdldyvx.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163sudjubov.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ylbampwc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163syqgtnsj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163sdwzkxmw.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163vxkblpuk.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163wgmtzvyc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163viiibrml.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163vzoqcjwo.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lnhmngpb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nynlyrcq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nztqwbnn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pfuyread.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163zqkleiqa.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fhzbnyuc.html

Py:   len(s)
来源：http://www.aibaodan.cn/163aynlsesa.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163koviejno.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wmhbplrm.html

TS:   s.length
来源：http://www.aibaodan.cn/163poqmtkuc.html

Java: s.length()
来源：http://www.sxryk.cn/163tmkwazht.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163mntuqyhm.html

Ruby: s.length
来源：http://www.aibaodan.cn/163lkludvwy.html

C#:   s.Length
来源：http://www.sxryk.cn/163lqnbxgaj.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vkxlxpqd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ycmaokkx.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163czuibmll.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ymztioqk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163awfuadmz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lfjjidmj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163oxhzgrhk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qajgdslw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163fovjaysc.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163oxtvgciv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163dnurxbms.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163unsmyvmd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163bfgpzfak.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gjhlioiu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zeoocqxx.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qcvijfnd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163bhgopohf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163qwnfmnwn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163nwiuzeib.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163grkygani.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163qupsquag.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lfmzsqso.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cpqfmooa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163sccwzejj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163joqpfsou.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163nrmyarrp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163jvaxqaeb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fyhngjbw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163ldiovrum.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163xueuphbv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163voruljst.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163hkhzrmlx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qoxwacjk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qxgtmcyv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163npqbhezn.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fyiwrjea.html

================================================================================
来源：http://www.xuanzx.com/163ilxxeaus.html

B. 流程控制
来源：http://www.aibaodan.cn/163jdxqgppb.html

================================================================================
来源：http://www.sxryk.cn/163rnrmhblw.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163sfeywlyp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163dcttzuxb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163wefrnlpz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tahikshf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vrtexvrg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ogkxxzgr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163cblpcttv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163nipajlie.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163myleubpa.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uooyqflr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163spovczrf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ximwftte.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xdxreziz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lkibtcfn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kihprtwf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163arllnmcx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163bfcgkuht.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aulnhdlj.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163owvkyril.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ywzjslrm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163idtvxael.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nrbwdlcd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bijwmjan.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wlskztnw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vbrkkktm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163aqljqfyp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wgcyesbg.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wkvbxkzb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lwnfgrop.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163izzvncwn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163skbijqcj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mpwnhliu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163dafvsmag.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163knqxnplv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jdrtztae.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163pmnvcqcn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163nwpnedbf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ysjcrmgf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163gqeyitdb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jznxanlu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qykqofhm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163znllwxel.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163yewdixay.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ctptzmxf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hzjgonqw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jxeroine.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xtczhvrf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hcnefkdm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qftrpwtt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163okthiodw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hbrijdza.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ojjtkcir.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dssmayvu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163tptzhdrd.html

[B07] while 循环
来源：http://www.sxryk.cn/163hqdxqxed.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163bwpqfilp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zrsofmel.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sipdmlsf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pzfflvlm.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vkzitlfj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nprqhftl.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hbwwyzsl.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163apzalkim.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163dzzwbeco.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163igzrhbce.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fnyupikq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ysuxydik.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zosywomf.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sqlrhqra.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vnpohhxb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bhkieryw.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wmilfuws.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hhllalem.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163siddumse.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hkokjkbv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uyjamlhb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oqnrmdii.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163flgklrzo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163lhmdocfm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rtkdwtlq.html


<!-- 参考信息 -->