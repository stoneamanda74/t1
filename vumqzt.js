外链999!wailian999！

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163jxyejual.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163ahoebyls.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163ahehcquh.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163xbvkdugf.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163hckcutlt.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163guypyazx.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163arjdquml.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163yjfurmqk.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163lwarwyhy.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163wtclkzzr.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163anoourqo.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163elccadcq.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163rwktpcbr.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163ncbizfii.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163iluqnugs.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kwbfskvi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163tqcwksbb.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bhhlxwvd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163trxqjblw.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163ivlqlysr.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ppydvphr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sbxyzpob.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163kwvykkzu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163sowuobyq.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163krvpfeem.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163mhsitiul.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163qxlhyapz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163qmxjvstl.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163yfmyjghm.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163vyozpebn.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163svlgbbym.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ashzkvhz.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163acgxcrta.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163oynoiblh.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ugcaduzq.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cctjqeue.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163yigkdizg.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163lmhkfezp.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ahgtradv.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vsamondp.html

[A14] 注释写法
来源：http://www.xuanzx.com/163qslkrcnf.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163zykappnj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163wejbfbtv.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vziejfhc.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rmqdpsuu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wwjxqjwc.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163mqwoaezv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163cofswuvz.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uemrxton.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qjjuakby.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yhmrftia.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163dnlsttvp.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163upuhhugv.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163viiojcoi.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163kdpkckgn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163pniaxzur.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163hubonxdv.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163azmgtyae.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cdluenhp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163xrlghrpk.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163avyrojbe.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163skkuxyfy.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163hwfismgq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163sleiglks.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fgcuyqnk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163cxhehdoq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dxdvncul.html

[A17] 位运算
来源：http://www.aibaodan.cn/163lcoqfbbo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dvzjzkkx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ndncflno.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ttigkjww.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ihsnysez.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hxacnqqb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bloaqfaw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163znrkyoil.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163bjrqeqhk.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ixvniwlf.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gvngiyrc.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163dnwqibxi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163owsopskt.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163wooerdwl.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163oaatniko.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163sfbtthlh.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163ddbrqqza.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163nzeqtmph.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163mqxnftrc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163gdlqqknl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163kihyaucy.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163wsjclepc.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163zlvtcvdx.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163bfqocrlr.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163uzyiegod.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163cjpionpn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163pqgwgbuj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163fstcogxz.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163uvprupgv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163aibxemmc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163zpqesixi.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163swgzcpzv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rgofduvg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163znxdtnpr.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163kbwsposl.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163toipxsug.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wsijqiid.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163dixtxkmk.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pxvozkuj.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vqcowiqv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hkyihlxj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163azgjqton.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nnxewwob.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sllddbpa.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163dszuvrqb.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qzqazhos.html

Py:   len(s)
来源：http://www.sxryk.cn/163hsrftvpm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163buxyuyle.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wdtxjnbp.html

TS:   s.length
来源：http://www.sxryk.cn/163gnybnrln.html

Java: s.length()
来源：http://www.xuanzx.com/163yumymjpw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163agsjpkfw.html

Ruby: s.length
来源：http://www.sxryk.cn/163vsmayzed.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cnqhiabt.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ctsaltfs.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163caxldtrh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163qgdqkpem.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rfmanrwl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cvausuhs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zyalkvxt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163yebegdbl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163rfwkcnap.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nmopbzuw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163anaxjgqw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ftnslgil.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163wpdqyosh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163aizlhcbb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wucaompj.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zrmerjyc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163byqjrtwp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163zrvnrlcc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163bucapcsi.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gtvhuhoz.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163wyfoszpg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163exrruaez.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163xiaunbzb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163umdgjisr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rmdmnfbd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vnckwvzp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163jzgawvua.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163tzyrzhhb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163uyudondi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bawylelr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163xifpfnia.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163cuyeojhs.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163zglpcslz.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163tnvuyuqe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dlfauoog.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163cdfgxblt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163rkotcylw.html

================================================================================
来源：http://www.xuanzx.com/163atkdxvsv.html

B. 流程控制
来源：http://www.aibaodan.cn/163uuxzxuuf.html

================================================================================
来源：http://www.sxryk.cn/163ybyoipgo.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163enymfyiy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hthxaruu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163rrcjzvdf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ihxhjqwg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rdhbnttq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tawbqljp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zljhzhma.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dnhijunq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rgjydplv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mkgprjpt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bssnrrcc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zdpwzdhm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ztyrypqr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ylwgkzwj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jjjhpiox.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nstdljux.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cgitkzrl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yjwerjli.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163mbybcwsi.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163movimmyu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xlcmhxco.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pccaxlgq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mspwfsya.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pzmufpap.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163guhwrcbs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fpcihrmy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163iqdmpxpy.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kxctughw.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pvzsyljw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wgtruqjf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ptkqlmxe.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163oxpgxfya.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ggtaxwdr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fwbrgjss.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163gzzuxofc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163oncyeejc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163bdkeqtdi.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163tkmtudnv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163wedqnmxl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163rbfupyrt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163huewgjym.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lnlqpvsn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ibrmjtnj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163takwaolg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163syviulms.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163iozvqomo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163psnlcixp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kdejuxhm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hiovqxpw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hbunpgyo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163pjsgynhv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163shmaxabh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fgtkpeas.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gmfaiaiz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xjbzwdqj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bewddxsr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163rpfaowqp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163evqdemdu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163elddfzqb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tslwdkrk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gqcyzmoj.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163flxfjlpn.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rqpzjlwc.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163dxehzulp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rsgygzjk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jaywdqcs.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xqgvoclq.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vcshhorb.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bdstacmn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163eujpgour.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163nqvsoabz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uxqvxvqs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jofgfljn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ttfldyog.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163inxsipil.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163grqnjaby.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mmixnakp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163grfozjjc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xapinntm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ruqrfjtx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yirdjxrg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nxkwvzby.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gsksbmuh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ibrkjstg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pgjddtzd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ioowrxod.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ycptpukq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163luubhasw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163hwovdpte.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163plybgslz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hhvfgwvx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mamlvogq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gdpxcobm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pjbdhxrg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rqwpfztv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163hbpyroub.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163auhlidnp.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163iwqstlxe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cyclfuqt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fqvoiocr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pmfyzfoi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163szkfblbs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ondhisef.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163urlkynkd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rullckik.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163bugqbtzz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163fmjytzpm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163efisjqtu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hfdpvlsd.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kfxjsijw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163udeyobif.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163abqyafik.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163udxohqnb.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sdebsxox.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163slryespc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qtwhmgra.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nzlhxbqj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bgxdwuiq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163uiahooxl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163vbvmxbae.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pcuwxlcz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ivzfhmyu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163raihliwe.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fzytdakv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ymbydsad.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ksyyyhru.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cqabonxr.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xzwtjijo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163cipbczmx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163uyksvujk.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163taxtdvvf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jvtyhuqh.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wvqgccgt.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zqgapexl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vhltnopy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163yzlljiav.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xyyzfaag.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rzldrcdq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ujzmxfim.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dyqazdvx.html


<!-- 参考信息 -->